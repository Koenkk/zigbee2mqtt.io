---
sidebarDepth: 1
---

# Scenes

Scenes allow to quickly set certain states for a device or group.
Most of the time this is used for bulbs or a group of bulbs as it allows to set a certain color and brightness with a single command.
All of the actions below can also be done via the frontend.

## Creating a scene

Scenes can be created in two ways, by storing the current state (`scene_store`) or by adding a scene (`scene_add`). Note that `scene_store` and `scene_add` will override each other if the same `SCENE_ID` is used.

### `scene_store`

This is the easiest way to create a scene. First set the device or group in the desired state. Next store the current state as a scene by sending a command to `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set` with payload `{"scene_store": SCENE_ID}` where `SCENE_ID` is a number (e.g. `1`).
To also provide a name for the scene (shown in e.g. the frontend) send e.g. `{"scene_store": {"ID": 1, "name": "My scene"}}`.
To only store the state of a single light in a scene for a group send e.g. `{"scene_store": {"ID": 1, "group_id": 2}}` to the topic of the light, `zigbee2mqtt/[DEVICE_FRIENDLY_NAME]/set`. This allows to change the state of a single light without affecting the other lights in the scene created for a group.

### `scene_add`

`scene_add` provides two benefits over `scene_store`: you can control which attributes will be stored in the scene (e.g. only brightness) and it's possible to set a transition time. You can execute a `scene_add` by sending to `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set` with payload:

```js
{
    "scene_add": {
        "ID": 3, // the SCENE_ID
        "name": "Chill scene", // optional: scene name, shown in e.g. the frontend
        "transition": 3, // optional: transition time of the scene in seconds (default = 0 seconds)
        // Properties below are all optional, note that it's not possible to use both 'color_temp' and 'color'
        // Attributes not specified will stay as-is when the scene is recalled.
        "state": "ON", // state, should be 'ON' or 'OFF'
        "brightness": 254, // brightness (0 - 254)
        "color_temp": 0, // color temperature (0 - 500) OR
        "color": {"hue": 0, "saturation": 100}, // color in hue/saturation (if both hue, saturation, x, and y are specifies x/y is used) OR
        "color": {"x": 0.123, "y": 0.123}, // color in x/y OR
        "color": "#0000FF" // color in hex notation (saved as x/y)
    }
}
```

In case a `scene_store` is called with the same `SCENE_ID` all values except the `transition` are overridden. In this way it's possible to have a transition for a scene created through `scene_store`.
Equaling `scene_store` a `group_id` can be provided when calling `scene_add` for a single light. In that scenario the state will be applied when the scene is recalled on the group. This is powerful in providing support for transitions while also allowing each light to have a different state in the scene and thus also allowing different transition times per light when the scene is recalled on the group.

## Recall scene

To recall the scene send a command to `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set` with payload `{"scene_recall": SCENE_ID}` where `SCENE_ID` is a number (e.g. `1`).

## Remove scene

To remove a scene send a command to `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set` with payload `{"scene_remove": SCENE_ID}` where `SCENE_ID` is a number (e.g. `1`).

Alternatively if you want to remove all scenes send a command to `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set` with payload `{"scene_remove_all": ""}`

## Using transitions in scenes

Scene transition times can only be set with the `scene_add` command. To make use of the `scene_store` command and use transitions, first create a new scene using the `scene_add` command:

```
{
    "scene_add": {
        "ID": 0,
        "name": "Scene Name",
        "transition": 5
    }
}
```

That will create an empty scene. You can then set the values of your devices and call the `scene_store` command, using the same `ID` provided in the `scene_add` command:

```
{
    "scene_store": {
        "ID": 0,
        "name": "Scene Name"
    }
}
```

The `scene_store` command overrites all values _except_ the `transition` value.

## Rename scene

In order to change (or set) the name for an existing scene, a command can be sent to `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set` with payload `{"scene_rename": {"ID": SCENE_ID, "name": SCENE_NAME}}` where `SCENE_ID` is a number and `SCENE_NAME` is a string representing the new name. For example: `{"scene_rename": {"ID": 1, "name": "My new scene name"}}`.
