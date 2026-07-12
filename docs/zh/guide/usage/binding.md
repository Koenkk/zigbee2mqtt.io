---
sidebarDepth: 1
redirectFrom: /information/binding.md
---

# 绑定

Zigbee 支持绑定（binding），允许设备之间直接互相控制，而无需 Zigbee2MQTT 或任何家庭自动化软件介入。

## 何时使用

绑定的一个使用场景是，例如 TRADFRI 无线调光器。将调光器直接绑定到灯泡或组（group）具有以下优点：

- **流畅性：** 通过直接控制灯泡改善调光反馈，减少了对 MQTT/家庭自动化软件往返通信的依赖。
- **可靠性：** 即使家庭自动化软件、Zigbee2MQTT 或协调器（coordinator）离线也能正常工作。

## 命令

::: tip
以下所有命令也可以通过前端界面执行，点击你的设备并进入 _Bind_ 标签页。
:::

绑定可以通过 `zigbee2mqtt/bridge/request/device/bind` 进行绑定，通过 `zigbee2mqtt/bridge/request/device/unbind` 进行解绑来配置。payload 应为 `{"from": SOURCE, "to": TARGET}`，其中 `SOURCE` 和 `TARGET` 可以是组或设备的 `friendly_name`。请求 payload 示例：`{"from": "my_remote", "to": "my_bulb"}`，响应 payload 示例：`{"data":{"from":"my_remote","from_endpoint":"default","to":"my_bulb","clusters":["genScenes","genOnOff","genLevelCtrl"],"failed":[]},"status":"ok"}`。响应中的 `clusters` 表示已绑定/解绑的 cluster，`failed` 表示绑定/解绑失败的 cluster。如果所有 cluster 都绑定失败，`status` 会被设为 `error`。

默认情况下会绑定所有支持的 cluster。若要限制绑定/解绑的 cluster，可在请求 payload 中添加 `clusters`，例如 `{"from": "my_remote", "to": "my_bulb", "clusters": ["genOnOff"]}`。可用的 cluster 有：`genScenes`、`genOnOff`、`genLevelCtrl`、`lightingColorCtrl` 和 `closuresWindowCovering`。

绑定时会在目标设备上设置上报（reporting）。这会使目标设备在状态被绑定源改变时更新自身状态。解绑时该上报会被再次移除，如果你想跳过这一步，可使用 `skip_disable_reporting`（例如 `{"from": "my_remote", "to": "my_bulb", "skip_disable_reporting": true}`）。

当电池供电设备的绑定/解绑失败时，多数情况是因为设备处于休眠状态。可以在发送 MQTT 消息前先唤醒设备来解决此问题。按下遥控器上的按钮即可将其唤醒。

在上面的例子中，TRADFRI 无线调光器是 `SOURCE` 设备，灯泡是 `TARGET` 设备。当使用组作为目标时，必须使用组的 friendly name，组 ID 不可用。

### 绑定到指定端点

**大多数用户不需要此功能**

如果想绑定到指定端点而非默认端点，请指定 payload `{"from": SOURCE, "from_endpoint": SOURCE_ENDPOINT, "to": TARGET, "to_endpoint": TARGET_ENDPOINT}`，其中 `SOURCE_ENDPOINT` 和 `TARGET_ENDPOINT` 是所需端点的 ID 或名称。请求 payload 示例：`{"from": "my_remote", "from_endpoint": "top", "to": "my_bulb", "to_endpoint": 3}`，响应 payload 示例：`{"data":{"from":"my_remote","from_endpoint":"top","to":"my_bulb","to_endpoint":3,"clusters":["genScenes","genOnOff","genLevelCtrl"],"failed":[]},"status":"ok"}`

`SOURCE_ENDPOINT` 和 `TARGET_ENDPOINT` 是可选的。若未提供，`SOURCE_ENDPOINT` 默认为 `SOURCE` 设备的默认端点。`TARGET_ENDPOINT` 的行为相同，但仅在 `TARGET` 是设备时才会使用。

::: tip
设备的默认端点是第一个注册的端点（通常是端点 ID 1）。
:::

### 将遥控器绑定到组

将遥控器绑定到组（group）可以让遥控器无需 Zigbee2MQTT 介入即可直接控制一组设备。

例如我们有一个名为 `my_remote` 的 IKEA E1743 遥控器，以及两个分别叫 `bulb_1` 和 `bulb_2` 的灯泡，我们可以把它们放入同一个组并将遥控器绑定到该组，从而用遥控器控制这两个灯泡。

要实现此操作，请执行以下步骤：

1. 在 `configuration.yaml` 中创建一个新组，并为其指定 `friendly_name`（参见 [组](./groups.md)）。在本示例中，我们将 `friendly_name` 设为 `my_group`。
2. 通过发送以下两条 MQTT 消息，将这两个灯泡加入该组。
    - `zigbee2mqtt/bridge/request/group/members/add`，payload 为 `{"group":"my_group","device":"bulb_1"}`
    - `zigbee2mqtt/bridge/request/group/members/add`，payload 为 `{"group":"my_group","device":"bulb_2"}`
3. 通过发送以下 MQTT 消息，将遥控器绑定到该组。
    - `zigbee2mqtt/bridge/request/device/bind`，payload 为 `{"from": "my_remote", "to": "my_group"}`

### 清除绑定

使用 `zigbee2mqtt/bridge/request/device/binds/clear`，可以全部或选择性地清除绑定。

要清除所有绑定，只需发送该 topic 并附带 payload，例如 `{"target": "my_device"}`。

要按 IEEE 地址选择性清除绑定，请发送该 topic 并附带 payload，例如 `{"target": "my_deivce", "ieee_list": ["0xa1a2a3a4a5a6a7a8", "0xb1b2b3b4b5b6b7b8"]}`。

::: tip
清除绑定会根据请求/响应自动调整 Zigbee2MQTT 内部使用的缓存数据。成功执行此请求后，Zigbee2MQTT 中的绑定应能反映设备上的实际绑定情况。
:::

## 设备

并非所有设备都支持此功能，这基本上取决于设备本身的 Zigbee 实现。请查看设备专属页面获取更多信息（可通过支持的设备页面访问）。

## 状态变化

当某设备被绑定时，Zigbee2MQTT 会自动为这些设备配置上报（reporting）。这会使设备在状态因绑定设备而改变时上报状态变化。

要让此功能生效，设备本身必须支持它。由于来自同一制造商的设备（大多数情况下）具有相同的功能，下表可以帮助你了解你的设备是否支持该功能。

| 品牌                 | 开关 | 亮度 | 颜色 | 色温 | 颜色模式 |
| :------------------- | :--: | :--: | :--: | :--: | :------: |
| Philips Hue（旧款）  |  N¹  |  N²  |  N   |  N   |    N     |
| Philips Hue（新款³） |  Y   |  Y   |  Y   |  Y   |    N     |
| IKEA                 |  Y   |  Y   |  Y   |  Y   |    Y     |
| Innr                 |  Y   |  Y   |  Y   |  Y   |    Y     |
| GLEDOPTO             |  N   |  N   |  N   |  N   |    N     |
| OSRAM                |  Y   |  Y   |  N   |  N   |    Y     |
| Müller Licht         |  N   |  N   |  N   |  N   |    Y     |

1. 使用旧固件（日期为 20170908 或更早）的灯泡确实支持上报开关状态
2. 如果绑定更新了灯泡，Zigbee2MQTT 会手动轮询变化
3. 大约从 2019 年开始发布的灯具和灯泡

如果你的设备**不**支持上报，请将设备放入一个组，并将遥控器绑定到该组而非直接绑定到设备。这样当被绑定的遥控器控制设备时，Zigbee2MQTT 会轮询设备以获取更新。为了将流量降到最低，并非所有设备都启用了此功能。如果这种方式不起作用，请在[这里](https://github.com/Koenkk/zigbee2mqtt/issues)创建一个 issue。

在解绑时，如果设备或设备所在组已没有任何绑定，`genOnOff`、`genLevelCtrl`、`lightingColorCtrl` 和 `closuresWindowCovering` 这些 cluster 的任何手动设置的上报都会被移除。你需要重新设置这些上报。
