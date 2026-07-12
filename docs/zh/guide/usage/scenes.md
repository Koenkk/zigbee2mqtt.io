---
sidebarDepth: 1
redirectFrom: /information/scenes.md
---

# 场景

场景（scene）可以为设备或组（group）快速设置某个特定状态。多数情况下这用于灯泡或灯泡组，因为它可以通过一条命令设置特定的颜色和亮度。
下面的所有操作也都可以通过前端界面完成。

## 创建场景

可以通过两种方式创建场景：存储当前状态（`scene_store`）或添加一个场景（`scene_add`）。注意，若使用相同的 `SCENE_ID`，`scene_store` 和 `scene_add` 会相互覆盖。

### `scene_store`

这是创建场景最简单的方式。首先将设备或组设置为所需状态。然后向 `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set` 发送 payload 为 `{"scene_store": SCENE_ID}` 的命令，将当前状态存储为场景，其中 `SCENE_ID` 是一个数字（例如 `1`）。
若要为场景提供一个名称（例如会显示在前端界面中），可发送 `{"scene_store": {"ID": 1, "name": "My scene"}}`。
若只想为组中的某一盏灯存储场景状态，可向该灯的主题 `zigbee2mqtt/[DEVICE_FRIENDLY_NAME]/set` 发送例如 `{"scene_store": {"ID": 1, "group_id": 2}}`。这样可以在不影响该组场景中其他灯的情况下，单独更改这一盏灯的状态。

### `scene_add`

相比 `scene_store`，`scene_add` 有两点优势：你可以控制哪些属性会被存储到场景中（例如仅存储亮度），并且可以设置过渡时间。执行 `scene_add` 的方法是向 `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set` 发送以下 payload：

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

若使用相同的 `SCENE_ID` 调用 `scene_store`，除 `transition` 外的所有值都会被覆盖。通过这种方式，可以为通过 `scene_store` 创建的场景设置过渡时间。
与 `scene_store` 相同，为单盏灯调用 `scene_add` 时也可以提供 `group_id`。在这种情况下，该状态会在组上调用该场景时被应用。这样既能为过渡时间提供支持，又能让组内每盏灯在该场景中拥有不同的状态，从而在组上调用该场景时每盏灯也可以有各自不同的过渡时间。

## 调用场景

要调用场景，向 `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set` 发送 payload 为 `{"scene_recall": SCENE_ID}` 的命令，其中 `SCENE_ID` 是一个数字（例如 `1`）。

## 删除场景

要删除场景，向 `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set` 发送 payload 为 `{"scene_remove": SCENE_ID}` 的命令，其中 `SCENE_ID` 是一个数字（例如 `1`）。

若要删除所有场景，可向 `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set` 发送 payload 为 `{"scene_remove_all": ""}` 的命令。

## 在场景中使用过渡

场景的过渡时间只能通过 `scene_add` 命令设置。若要在使用 `scene_store` 命令的同时使用过渡效果，需先通过 `scene_add` 命令创建一个新场景：

```
{
    "scene_add": {
        "ID": 0,
        "name": "Scene Name",
        "transition": 5
    }
}
```

这会创建一个空场景。之后可以设置好设备的值，再使用与 `scene_add` 命令中相同的 `ID` 调用 `scene_store` 命令：

```
{
    "scene_store": {
        "ID": 0,
        "name": "Scene Name"
    }
}
```

`scene_store` 命令会覆盖除 `transition` 值以外的所有值。

## 重命名场景

要修改（或设置）现有场景的名称，可向 `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set` 发送 payload 为 `{"scene_rename": {"ID": SCENE_ID, "name": SCENE_NAME}}` 的命令，其中 `SCENE_ID` 是一个数字，`SCENE_NAME` 是表示新名称的字符串。例如：`{"scene_rename": {"ID": 1, "name": "My new scene name"}}`。
