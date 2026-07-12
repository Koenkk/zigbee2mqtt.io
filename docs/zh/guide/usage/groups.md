---
redirectFrom: /information/groups.md
---

# 组

Zigbee2MQTT 支持 Zigbee 组（group）功能。通过使用 Zigbee 组，你可以用一条命令同时控制多个设备。

::: tip
相比单独控制每个设备，组的效率要高得多，因为它能显著降低同时控制多个设备时对网络造成的压力。
:::

## 创建组

可以通过前端界面（最简单的方式）、[MQTT](./mqtt_topics_and_messages.md#zigbee2mqttbridgerequestgroupadd) 创建组，也可以按下面的方式将其添加到 `configuration.yaml` 中。

## 配置

将以下内容添加到你的 `configuration.yaml` 中。

```yaml
groups:
    # ID, each group should have a different numerical ID
    '1':
        # Required: Name which will be used to control the group
        friendly_name: group_1
        # Required: Retain messages (true/false) (default: false)
        retain: false
        # Optional: Default transition to be used when e.g. changing brightness (in seconds) (default: 0)
        transition: 2
        # Optional: Change group state when one of the devices in it changes state, see 'State changes' below (default: true)
        optimistic: true
        # Optional: Control when state OFF is published for a group, see "State changes" below (default: all_members_off)
        off_state: 'all_members_off'
```

groupID（上例中的 `'1'`）应该是一个数字字符串。如果你想使用十六进制的 groupID（例如 `0xe24c`），需要先将其转换为数字字符串（例如 `57932`）。

如果使用的是 Home Assistant 插件，在按上述方式修改 `configuration.yaml` 后请重启该插件。

## MQTT 命令

关于如何添加、删除、重命名以及更改组的选项，请参阅 [MQTT 主题与消息中的组章节](./mqtt_topics_and_messages.md#group)

也可以通过 MQTT 将设备添加到组或从组中移除，可用的主题有：

- `zigbee2mqtt/bridge/request/group/members/add`：将设备添加到组
- `zigbee2mqtt/bridge/request/group/members/remove`：将设备从组中移除
- `zigbee2mqtt/bridge/request/group/members/remove_all`：将设备从所有组中移除

载荷应为 `{"group": GROUP, "device": DEVICE}`，其中 `GROUP` 是你要添加/移除设备所属组的 `friendly_name`，`DEVICE` 是你要添加/移除的设备的 `friendly_name`。载荷示例：`{"group":"my_group","device":"my_bulb"}`，响应示例：`{"data":{"device":"my_bulb","endpoint":"default","group":"my_group"},"status":"ok"}`。执行 `remove_all` 时，请求中的 `group` 属性可以省略。

当把某个设备从组中移除，且该组存在绑定（binding）到它的其他设备时，这些成员的上报功能将被禁用；如果你想跳过这一行为，可以使用 `skip_disable_reporting`（例如 `{"group":"my_group","device":"my_bulb", "skip_disable_reporting": true}`）。

## 控制

控制一个组与控制单个设备类似。例如，要打开组内的所有设备，可以向 `zigbee2mqtt/[GROUP_FRIENDLY_NAME]/set` 发送如下载荷的 MQTT 消息：

```json
{
    "state": "ON"
}
```

## 状态变化

默认情况下，当组内某个设备的状态发生变化时，组的状态会随之更新以反映这一变化。`state` 属性的这一行为可以通过 `off_state` 选项进行控制，有以下两种可选值：

- `all_members_off`（默认）：只要组内至少有一个成员的 `state` 为 `ON`，组的 `state` 就会保持 `ON`。
- `last_member_state`：组的 `state` 将等于最后一个发生状态变化的成员的 `state`。

当组的状态是通过命令改变的（而不是由组内某个设备的状态变化触发的）时，组内所有设备也会随之改变状态。可以通过为该组设置 `optimistic: false` 来禁用这一行为。

## 组是如何工作的？

通过使用上文提到的 `add` 命令，可以将一个设备添加到组中。设备本身负责记录自己所属的组，而协调器（coordinator）等其他节点并不知道某个设备属于哪些组。

当使用 `set` 命令时（例如打开组内的所有设备），系统会向网络中的**所有**设备发送一条广播请求。每个设备自身会判断自己是否属于该组，以及是否应该执行该命令。

## 添加指定端点

如果你想把一个具有多个端点的设备（例如带有 2 个按钮的 QBKG03LM）添加到组中，可以在请求载荷中指定 `{"group": GROUP, "device": DEVICE, "endpoint": ENDPOINT}`，其中 `ENDPOINT` 是所需的端点名称或 ID。请求载荷示例：`{"group":"my_group","device":"my_switch","endpoint":"right"}`。
