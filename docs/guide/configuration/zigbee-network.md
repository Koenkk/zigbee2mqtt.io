---
sidebarDepth: 1
---

# Zigbee network

## Permit join

```yaml
# Optional: allow new devices to join.
permit_join: true
```

::: warning ATTENTION
It's important to disable `permit_join` after you've peered your devices. This keeps the Zigbee
network safe and prevents accidental joining of other Zigbee devices. When a device joins, the coordinator exposes the
network key.
:::

## Network config

```yaml
advanced:
    # Optional: ZigBee pan ID (default: shown below)
    # Setting pan_id: GENERATE will make Zigbee2MQTT generate a new panID on next startup
    pan_id: 0x1a62
    # Optional: Zigbee extended pan ID, GENERATE will make Zigbee2MQTT generate a new extended panID on next startup (default: shown below)
    ext_pan_id: [0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD]
    # Optional: Zigbee channel, changing might require re-pairing of some devices (see docs below). (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid problems)
    # (default: 11)
    channel: 11
    # Optional: network encryption key
    # GENERATE will make Zigbee2MQTT generate a new network key on next startup
    # Note: changing requires repairing of all devices (default: shown below)
    network_key: [1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]
```

::: tip
Set `network_key: GENERATE` to let Zigbee2MQTT generate a new random key on the first start. The `configuration.yml` gets updated with the new key. Changing the network_key requires repairing of all devices.
:::

::: tip
[Reduce Wi-Fi interference by changing the Zigbee channel](../../advanced/zigbee/02_improve_network_range_and_stability.md#reduce-wi-fi-interference-by-changing-the-zigbee-channel)
:::

### Changing the Zigbee channel

Changing the channel of an existing Zigbee network is supported. In Zigbee, this is done by broadcasting a network update indicating the channel change. Devices that are asleep during the broadcast (usually battery powered end devices) will not switch immediately, but the next time they wake-up. It is therefore advised to trigger them after the channel change.

::: warning
Some Zigbee devices do not support changing channels. In case a device remains unresponsive several minutes after the change, and after having been triggered/woken up, you may have to re-pair it manually.
:::

::: warning
Changing channels is only supported for the `zstack` and `ember` adapter.
:::

Zigbee2MQTT will send this broadcast during startup if the channel in the configuration has been changed. The following logging will be produced:

```
[2024-07-12 16:28:27] info: 	z2m: Starting Zigbee2MQTT version 1.39.0 (commit #e3fa0bfb)
...
[2024-07-12 16:28:27] warning: 	zh:controller: Configured channel '18' does not match adapter channel '19', changing channel
[2024-07-12 16:28:27] warning: 	zh:controller: Changing channel from '18' to '19'
[2024-07-12 16:28:37] warning: 	zh:controller: Channel changed to '19'
...
[2024-07-12 16:28:37] info: 	z2m: Zigbee2MQTT started!
```

### Specifying network_key in a different file

To specify the network_key in a different file, e.g `secret.yaml`, use the following configuration.

**configuration.yaml**

```yaml
# IMPORTANT: Don't forget the quotes!
advanced:
    network_key: '!secret.yaml network_key'
```

**secret.yaml**

```yaml
network_key: [1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]
```
