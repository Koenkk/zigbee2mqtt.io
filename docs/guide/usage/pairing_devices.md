---
---

# Allowing devices to join

To allow devices to join the network, joining has to be permitted. There are various ways to do this:

### Frontend

Enabling joining via the frontend will open the network for 254 seconds.
The joining button can be found at the top right of the navigation bar, and also be used to close the network manually before the end of the timer.

#### Pairing via a specific device

To the right of `Permit join (All)` button is an arrow pointing down. This will allow you to pick the coordinator, or any router to join from specifically, instead of letting the device chose on its own.
That is not a guarantee the router will be chosen (or remain long-term). However, this can be useful for devices that are awkward in router selection, like Aqara, or when wanting to link a switch to a light bulb.

### MQTT

The `zigbee2mqtt/bridge/request/permit_join` MQTT topic can be used to enable joining. See [MQTT topic and messages](./mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request-permit-join) for more information.

## Pairing

First check if the device page ([Supported devices](../../supported-devices/), click on the model number) contains instructions on how to pair your device.

If no instructions are available, the device can probably be paired by factory resetting it.

Once you see something similar to below in the log your device is paired.

```
Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired
```

In case there are issues when pairing, see the [FAQ](../../guide/faq/#why-does-my-device-not-or-fail-to-pair) for possible fixes.
