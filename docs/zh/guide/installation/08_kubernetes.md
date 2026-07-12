---
next: 14_securing.md
---

# Kubernetes

以下说明介绍了如何通过 Helm chart 在 k8s 集群上运行 Zigbee2MQTT。

# 配置项（Values）

无论选择哪种安装方式（helm cli、flux/argo CD），都请先查看 values.yaml 文件，并根据自己的需要选择相应的配置。
values.yaml 中的 Zigbee2MQTT 配置部分与常规配置文件是一一对应的，它只是在 Helm release 创建过程中被写入一个 configmap。如果你没有提供任何额外的值，部署时会使用合理的默认配置。

如果你打算使用直接插在集群某个节点上的 USB 适配器（adapter），通常需要指定 `.values.statefulset.nodeSelector`，以便 Pod 被调度到正确的节点上。

默认情况下不启用存储，这对于测试来说很方便。
如果你只想使用动态卷制备，只需配置 `statefulset.storage.storageClassName` 即可。
如果要在多次安装之间持久化卷，或者想要复用已有数据，可以使用 `statefulset.storage` 中的选项，提供 `volumeName` 或卷选择器（selector）。这些字段会被注入到 statefulSet 的 persistentVolumeClaim 中，从而可以链接到已有的卷。

## helm

要使用 helm 手动安装该 chart，首先需要将 helm 仓库添加到本地的 helm 安装中：

```bash
helm repo add zigbee2mqtt  https://charts.zigbee2mqtt.io
```

从仓库加载 chart：

```bash
helm repo update
```

使用你选择的配置值（下方代码片段中的 `myvalues.yaml`）安装 helm chart：

```bash
helm install -f myvalues.yaml zigbee2mqtt zigbee2mqtt/zigbee2mqtt
```

## flux

如果你使用 GitOps 方式管理集群，可以使用 flux 的 CRD 来创建和管理 release。

第一步是将 zigbee2mqtt 的 helm 仓库添加到你的仓库中：

```yaml
apiVersion: source.toolkit.fluxcd.io/v1beta2
kind: HelmRepository
metadata:
    name: zigbee2mqtt
    namespace: flux-system
spec:
    interval: 10m
    url: https://charts.zigbee2mqtt.io
```

然后创建一个 Helm release：

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
