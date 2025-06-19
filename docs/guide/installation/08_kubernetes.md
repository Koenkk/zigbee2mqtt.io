---
next: ../configuration/
---

# Kubernetes

These instructions explain how to run Zigbee2MQTT on k8s clusters through the use of the helm chart.

# Values - Configuration

Regardless of the method of installation chosen helm cli, flux/argo CD, first review the values.yaml file and choose the
configuration required for you.
The Zigbee2MQTT config section in the values.yaml is a 1:1 mapping of the usual config file, it simply is created on a configmap
during the helm release creation. If you don't provide any additional values, sensible defaults are used in the deployment.

If you are planning to use an usb adapter directly plugged into a node of the cluster, most likely you need to
specify a `.values.statefulset.nodeSelector` so the pods are scheduled in the right node.

By default, storage is not enabled, which is great for testing.
If you just want to use dynamic volume provisioning, just configure the `statefulset.storage.storageClassName`.
Persisting the volumes across installations, or you want to reuse existing data, you can leverage the options
in `statefulset.storage` either providing a `volumeName` or selectors for volumes. Those fields get injected
into the statefulSet persistentVolumeClaim which can link to existing volumes.

## helm

To install the chart manually using helm, first you need to add your the helm repository to your local helm installation:

```bash
helm repo add zigbee2mqtt  https://charts.zigbee2mqtt.io
```

Load the charts from the repository:

```bash
helm repo update
```

Install the helm chart using the values of your choice (`myvalues.yaml` in the snippet below):

```bash
helm install -f myvalues.yaml zigbee2mqtt zigbee2mqtt/zigbee2mqtt
```

## flux

If you are using a gitops approach to manage your cluster, you can use the flux CRDs to create and manage the releases.

The first step is to add to your repository the helm repository of zigbee2mqtt:

```yaml
apiVersion: source.toolkit.fluxcd.io/v1beta2
kind: HelmRepository
metadata:
    name: zigbee2mqtt
    namespace: flux-system
spec:
    interval: 10m
    url: https://charts.zigbee2mqtt.io/index
```

Then create a Helm release:

```yaml
apiVersion: helm.toolkit.fluxcd.io/v2beta2
kind: HelmRelease
metadata:
    name: zigbee2mqtt
    namespace: flux-system
spec:
    interval: 5m
    targetNamespace: zigbee2mqtt
    chart:
        spec:
            chart: zigbee2mqtt
            version: '1.37.1'
            sourceRef:
                kind: HelmRepository
                name: zigbee2mqtt
                namespace: flux-system
            interval: 10m
    values: ... your settings
```
