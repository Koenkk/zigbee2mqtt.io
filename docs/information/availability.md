---
---
# Availability
The availability feature checks wether your devices are online. The availability state of a device is published to `zigbee2mqtt/[FRIENDLY_NAME]/availability` with the payload being `online` or `offline`.

To enable the availability feature add the following to your `configuration.yaml`.

```yaml
availability: true
```

The availability feature works differently for routers and end devices.
- Routers: by default routers need to check-in every 5 minutes. If they don't, they will be marked as `offline`.
- End devices: since end devices sleep by default, they cannot be pinged. Therefore, by default, end devices need to check-in every 25 hours. If not they will be marked as `offline`.


## Advanced configuration
Instead of setting `availability: true` in your `configuration.yaml` you can provide a more advanced configuration:

```yaml
# Note: all options are optional
availability:
  # With enable_for_all: true (default), this feature will be enabled for all devices.
  # if you set enable_for_all: false you explicility need to enable the availability feature
  # for a device by setting availability: true in the device options (see devices section below)
  enable_for_all: true
  routers:
    # Time after which a device will be marked as offline in
    # minutes (default = 5 minutes)
    timeout: 5
    # See ping inteval section below
    ping_interval: 1
  end_devices:
    # Time after which a device will be marked as offline in
    # minutes (default = 1500 minutes aka 25 hours)
    timeout: 1500

devices:
  '0x12345678':
    friendly_name: 'my_bulb'
    # Set availablility: false to disable the availability feature for a specific device
    availability: false
  '0x87654321':
    friendly_name: 'my_switch'
    # Change availibity timeout to 3 minutes and ping_interval to 1 minute for only this device
    # Note: similar to setting availability: true, this config
    # will also enable the availability feature for this
    # device when enable_for_all: false is set
    availability:
      timeout: 3
      ping_interval: 1
```

## Algorithm (only applicable for routers)
When availability is enabled for a router, Zigbee2MQTT configures the device to check-in within the availability timeout. This is more efficient then pinging since it reduces the amount of messages to be send. However not all devices support this, in this case the device is pinged. The algorithm works as follow:
1. Given that the availability timeout is set to 5 minutes.
1. Zigbee2MQTT configures the device to check in every 75% of the availability timeout, so by default 3,75 minutes.
1. If the device does not check-in Zigbee2MQTT pings it after the availability timeout has passed (so after 5 minutes in this case)
1. If the ping fails, the device is marked as offline.

### Ping interval (only applicable for routers)
The advanced configuration allows to set the `ping_interval` (see Advanced configuration section above). It's **not** recommended to set this option, it's meant for special cases where the ping of a device fails regulary and is therefore incorrectly marked as offline. With e.g. `ping_interval: 2` Zigbee2MQTT will ping the device every 2 minutes. If the availability timeout is e.g. set to 5 minutes 2 consecutive pings have to fail before the device is marked as `offline`.

## State retrieval
When this feature is enabled and a device reconnects or announces itself on the network, Zigbee2MQTT will retrieve the state of the device. This is e.g. handy when a bulb turns itself on after being reconnected to mains power.

## Note for CC2530/CC2531 users
As this feature increases the amount of messages on the Zigbee network, it could cause stability issues when you are using a CC2531 or CC2530 as adapter.
