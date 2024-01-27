---
---
# Settings

## Optimistic
In Zigbee2MQTT, the optimistic mode is a feature that influences how the state of a device is handled in the absence of updates. When optimistic mode is enabled for a device, Zigbee2MQTT assumes that the last sent command was successful and updates the device state accordingly, even before receiving confirmation from the device itself.

### Enabled
If you send a command to turn on a light, for example, Zigbee2MQTT will immediately update its internal state to reflect that the light is on. It assumes the command will be successful. If the actual device fails to respond or the command fails, Zigbee2MQTT will adjust the state once it receives confirmation or after a timeout period.

### Disabled
Zigbee2MQTT will only update its internal state after receiving confirmation from the device that the command was successful. If the command fails or the device does not respond, Zigbee2MQTT will not prematurely update its state.
