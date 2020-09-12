---
---
# Scenes
Scenes allow to quickly set certain states for a device or group.
Most of the time this is used for bulbs or a group of bulbs as it allows to set a certain color and brightness with a single command.

To create a scene for a device or group set the device in the desired state first.
Next store the current state as a scene by sending a command to `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set` with payload `{"scene_store": SCENE_ID}` where `SCENE_ID` is a number (e.g. `1`).

To recall the scene send a command to `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set` with payload `{"scene_recall": SCENE_ID}` where `SCENE_ID` is a number (e.g. `1`).
