---
---
# Binding
*Ongoing discussion about this feature can be found here: https://github.com/Koenkk/zigbee2mqtt/issues/782*

Zigbee has support for binding which makes it possible that devices can directly control each other without the intervention of zigbee2mqtt or any home automation software.

## When to use this
A use case for this is e.g. the TRADFRI wireless dimmer. Binding the dimmer directly to a bulb or group has the following advantages:
- Smoothness; this will greatly improve the dimming feedback as the dimmer directly dims the bulb and thus does not have to make the MQTT/home automation software roundtrip.
- It will work even when home automation software, zigbee2mqtt or the coordinator is down.

## Commands
Binding can be configured using the following topics:

- `zigbee2mqtt/bridge/bind/[SOURCE_DEVICE_FRIENDLY_NAME]` with payload `TARGET_DEVICE_FRIENDLY_NAME` will bind the source device to the target device. In the above example, the TRADFRI wireless dimmer would be the source device and the bulb the target device.
- `zigbee2mqtt/bridge/unbind/[SOURCE_DEVICE_FRIENDLY_NAME]` with payload `TARGET_DEVICE_FRIENDLY_NAME` will unbind the devices.

### Binding specific endpoint
**This is not applicable for most users**

By default, the first endpoint is taken. In case your device has multiple endpoints, e.g. `left` and `right`. The following can be done to specifcy an endpoint:
- **Source**: append the endpoint friendly name to the topic, e.g. `zigbee2mqtt/bridge/bind/my_switch/left`
- **Target**: append the endpoint friendly name to the payload, e.g. `my_switch/right`

## Devices
Not all devices support this, it basically comes down to the Zigbee implementation of the device itself. Check the device specific page for more info (can be reached via the supported devices page)