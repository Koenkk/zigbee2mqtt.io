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
  # Optional: Zigbee extended pan ID (default: shown below)
  ext_pan_id: [0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD]
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 11
  # Optional: network encryption key, will improve security 
  # Note: changing requires repairing of all devices (default: shown below)
  network_key: [ 1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13 ]
```

::: tip
Set `network_key: GENERATE` to let Zigbee2MQTT generate a new random key on the first start. The `configuration.yml` gets updated with the new key. Changing the network_key requires repairing of all devices.
:::

::: tip
[Reduce Wi-Fi interference by changing the Zigbee
channel](../../advanced/zigbee/02_improve_network_range_and_stability.html#reduce-wi-fi-interference-by-changing-the-zigbee-channel.md)
:::

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
