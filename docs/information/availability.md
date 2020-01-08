---
---
# Availability
*An ongoing discussion about this feature can be found here: https://github.com/Koenkk/zigbee2mqtt/issues/775*

When the availability feature is enabled, Zigbee2mqtt will ping devices to check if they are online.
In case a devices changes it's online/offline state, Zigbee2mqtt will publish to `zigbee2mqtt/[FRIENDLY_NAME]/availability`; `online` or `offline`.

This feature integrates well with Home Assistant as devices are marked as `unavailable` when offline.

To enable availabilty, add the following to your `configuration.yaml`:

```yaml
advanced:
  availability_timeout: 60
```

The `availability_timeout` defines the interval in seconds at which devices are pinged.
Note that only non-battery powered devices are checked for availability.
By default `availability_timeout: 0` is set, which means that this feature is disabled.

In order to exclude devices from this feature use `availability_blacklist`, example:

```yaml
advanced:
  availability_timeout: 60
  availability_blacklist: ['my_bulb','0x000b57fffec6a5b2'] # = list of friendly names or IEEE addresses
```

In order to set availability check for certain devices only from this feature use `availability_whitelist`, example:

```yaml
advanced:
  availability_timeout: 60
  availability_whitelist: ['my_bulb','my_other_bulb','0x000b57fffec6a5b2'] # = list of friendly names or IEEE addresses
```

Note that not all devices can be pinged for availability (e.g. battery powered devices).
This category of devices will be marked as `unavailable` when they did not send a message for 25 hours.

## State retrieval
While this feature is enabled and a bulb reconnects or announces itself on the network, Zigbee2mqtt will retrieve the new state of the device.
This will make sure that e.g. a bulb is powered off and on again the state (on/off, brightness, color temperature or color) is correct.

## Note for CC2530/CC2531 users
As this feature increases the amount of messages on the Zigbee network, it could cause stability issues when you are using a CC2531 or CC2530 as adapter.
