---
---

# Allowing devices to join

To allow devices to join the network joining has to be permitted. There are various ways to do this:

### Frontend (recommended)

Enabling joining via the frontend ensures that joining is disabled automatically after 255 seconds.
The joining button can be found in the right top.

## Pairing via a specific device

To the right of Permit join (All) button is an arrow pointing down. This will allow you to pick any router to join from.
That is not a guarantee the router is chosen. This can be useful especially for Aqara devices or a switch to a light bulb.

### MQTT (recommended)

The `zigbee2mqtt/bridge/request/permit_join` MQTT topic can be used to enable joining. It is recommended to provide a value for `time` to ensure joining is automatically disabled. See [MQTT topic and messages](./mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request-permit-join) for more information.

### Configuration.yaml (not recommended)

By setting `permit_join: true` in your `configuration.yaml` the joining will automatically be enabled when starting Zigbee2MQTT. Joining is **not** automatically disabled.

## Pairing

First check if the device page ([Supported devices](../../supported-devices/), click on the model number) contains instructions on how to pair your device.

If no instructions are available, the device can probably be paired by factory resetting it.

Once you see something similar to below in the log your device is paired.

```
Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired
```

In case there are issues when pairing, see the [FAQ](../../guide/faq/#why-does-my-device-not-or-fail-to-pair) for possible fixes.
