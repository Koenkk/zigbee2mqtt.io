---
sidebarDepth: 1
---

# Device-Availability

The availability feature checks whether your devices are online. The availability state of a device is published
to `zigbee2mqtt/[FRIENDLY_NAME]/availability` (this message is a retained MQTT message).

```yaml
# Optional: Enable the availability feature (default = false)
availability: true
```

The availability feature works differently for active and passive devices.

-   Active devices (routers or mains powered end devices): by default they have to check-in every 10 minutes. If they
    don't, they will be pinged, if that fails the device will be marked as `offline`.
-   Passive devices (everything that is not an active device, mostly battery powered devices): these devices need to
    check-in every 25 hours, they cannot be pinged so if they don't they will be marked as `offline`.

Note that this timeout is persisted between Zigbee2MQTT restarts. So if you for example stop Zigbee2MQTT for longer than 10
minutes, all your active devices will be marked as `offline` initially.

## Availability advanced configuration

Instead of setting `availability: true` in your `configuration.yaml` you can provide a more advanced configuration:

```yaml
# Note: all options are optional
availability:
    active:
        # Time after which an active device will be marked as offline in
        # minutes (default = 10 minutes)
        timeout: 10
    passive:
        # Time after which a passive device will be marked as offline in
        # minutes (default = 1500 minutes aka 25 hours)
        timeout: 1500

devices:
    '0x12345678':
        friendly_name: 'my_bulb'
        # Set availability: false to disable the availability feature for a specific device
        availability: false
    '0x87654321':
        friendly_name: 'my_switch'
        # Change availability timeout to 3 minutes for this device only
        availability:
            timeout: 3
```

If you want to enable the availability feature for only certain devices, don't add `availability: true` in
your `configuration.yaml` but specify it for that device only, e.g.

```yaml
devices:
    '0x87654321':
        friendly_name: 'my_switch'
        # Enable availability for just 'my_switch'
        availability: true
```

## State retrieval

When the availability feature is enabled and a device reconnects or announces itself on the network, Zigbee2MQTT will retrieve the
state of the device. This is e.g. handy when a bulb turns itself on after being reconnected to mains power. The
following attributes will be read: `state`, `brightness`, `color_temp` and `color`.

## Performance considerations

-   The pinging can be heavy on the coordinator, especially if you are using a CC2530 or CC2531 adapter.
-   Higher `timeout` for active devices results in less pinging so less stress on the coordinator.

## Availability payload

By default the published availability payload is in legacy mode (`online`/`offline`). If the legacy mode is disabled the payload will be a JSON object (`{"state":"online"}`/`{"state":"offline"}`). Note that this changes the payload for `zigbee2mqtt/bridge/state` and `zigbee2mqtt/MY_DEVICE/availability`.

```yaml
advanced:
    # Whether to use legacy mode for the availability message payload (default: true)
    # true = online/offline
    # false = {"state":"online"} / {"state":"offline"}
    legacy_availability_payload: true
```

## Groups

When enabling device availability, availability will also be enabled for groups. A group is marked as available when at least one device in it is available.
