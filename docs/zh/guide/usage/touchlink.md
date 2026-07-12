---
redirectFrom: /information/touchlink.md
---

# Touchlink

Touchlink（或 ZLL）是一项功能，允许 Zigbee 设备之间通信，而**不需要**必须处于同一网络中。

设备之间必须**物理上靠近**，并且固件中已启用 Touchlink。  
_有效范围因设备而异：通常为 10cm，在信号较强的适配器（adapter）上最远可达 1m。_

**使用场景示例：**

- 通过 Zigbee2MQTT 识别或重置协调器（coordinator）附近的设备
- 通过支持 Touchlink 的设备重置其他设备，例如 [Hue dimmer switch gen 1](/devices/324131092621.html)
- 在不经过协调器和 Zigbee2MQTT 的情况下，设置设备间的[绑定（binding）](./binding.md)（例如遥控器与灯具之间）

## 支持

### 协调器

Texas Instruments 适配器 _(zStack、CCxxxx)_ **完全支持**。

Silicon Labs 适配器 _(EmberZNet、EFR32xxxx)_ **部分支持**。  
`2026-03-18`：[扫描](#扫描) 操作在部分固件版本上不会返回响应。Philips Hue 的重置功能不受影响。_正在调查中_

其他适配器/驱动目前**不支持**。

### 设备

兼容设备会公开（expose）`Touchlink` 簇，包括大多数 Philips 和 IKEA 设备、部分 Tuya 灯泡、Namron 继电器等。

::: warning
部分设备可能会在几分钟后自动禁用 Touchlink！_（安全措施）_  
请对设备重新上电，以确保其处于激活状态。
:::

::: tip
以下所有命令也可以通过前端界面（frontend）的 _Touchlink_ 标签页执行。
:::

## 扫描

扫描**协调器附近**支持 Touchlink 的设备。  
本次扫描的结果可在之后用于选择要重置或识别的设备。

此操作最多可能耗时 1 分钟。**这是一项破坏性操作**，扫描期间**将无法与设备通信**（请务必考虑这一点，必要时选择使用频率较低的时段进行）。

要进行扫描，请向 `zigbee2mqtt/bridge/request/touchlink/scan` 发送一条内容为空的 MQTT 消息。

响应会发送到 `zigbee2mqtt/bridge/response/touchlink/scan`，示例内容：`{"data":{"found":[{"ieee_address": "0x12345678", "channel": 12}, {"ieee_address": "0x12654321", "channel": 24}]},"status":"ok"}`。

## 识别

通过 Touchlink 识别附近的设备 _（例如让灯泡闪烁）。_

向 `zigbee2mqtt/bridge/request/touchlink/identify` 发送 MQTT 消息，消息内容例如 `{"ieee_address": "0x12345678", "channel": 12}`  
_（可使用上面的扫描功能确定 `ieee_address` 和 `channel`）。_

## 恢复出厂设置

通过 Touchlink 将附近的设备恢复出厂设置。_演示：[视频](https://www.youtube.com/watch?v=kcRj77YGyKk)_

如果按照以下方法操作后设备仍未进入配对（pairing）模式，可能还需要对其**重新上电**。

重置完成**之后**，如需重新配对该设备，请开启加入权限。

### 任意设备

如果不指定具体设备，建议 _关闭不希望被重置的设备电源，或确保它们不在范围内_（找到的第一个设备将成为目标）。
向 `zigbee2mqtt/bridge/request/touchlink/factory_reset` 发送一条内容为空的 MQTT 消息。

Zigbee2MQTT 将开始扫描。
一段时间后，设备会先进行自我标识，然后重置。

### 指定设备

#### IEEE 地址 + 信道

在上述消息中添加内容即可指定目标设备，例如 `{"ieee_address": "0x12345678", "channel": 12}`。_（这些值可通过扫描获得）_

#### 序列号（仅 Philips Hue）

大多数 Philips Hue 设备无需扫描即可通过设备上印刷的序列号来指定目标。更多信息请参阅具体设备页面，例如 [Hue white ambiance E27](/devices/9290022169.html)
