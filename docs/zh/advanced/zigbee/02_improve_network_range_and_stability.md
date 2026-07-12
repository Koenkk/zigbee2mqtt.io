---
redirectFrom: /how_tos/how_to_improve_network_range_and_stability.md
---

# 提升网络覆盖范围和稳定性

如果你的网络不稳定或覆盖范围不佳，可以尝试以下方法来改善网络。

## 适配器（adapter）

请使用[推荐](../../guide/adapters/README.md)的适配器，已知 CC2530 和 CC2531 的性能表现较差。

## 避免使用 AwoX 的设备

已知 AwoX 设备会导致网络问题。如果你遇到了问题，请将它们从网络中移除。
通过 "AwoX HomeControl" App 经蓝牙对设备进行 OTA 升级[可能有所帮助](https://github.com/Koenkk/zigbee2mqtt/discussions/18366)。

## USB 适配器

使用 USB 延长线连接这些适配器，而不是直接插在电脑（例如树莓派）上，可以大幅提升其覆盖范围。直接插在电脑上时，天线会受到电脑内部无线电信号和电子元件的干扰。另外，也要注意不要将适配器放置在离其他无线电发射设备（例如 Wi-Fi 路由器）或 SSD 太近的地方。

一根 50 厘米的 **USB 延长线** 就足以减少干扰。最好选用带屏蔽层的延长线，这样效果可能会更好（[来源](https://www.reddit.com/r/homeassistant/comments/10ebkis/psareminder_about_zigbee_interference/)）。

**千万不要小看这一点！** 正如[这篇文章](https://www.unit3compliance.co.uk/2-4ghz-intra-system-or-self-platform-interference-demonstration/)所展示的，将适配器放在 USB 或 HDMI 接口附近，可能会让无线电信号完全消失。

另外，将适配器插在 USB 2 接口而不是 USB 3 接口上，也可能会有帮助。

### 尝试不同的适配器朝向

适配器与其他设备之间的射频连接效果，也取决于它在空间中的朝向。你可能会遇到很差的 `linkquality` 报告以及间歇性的 ping 失败，但只要稍微转动一下适配器，即使不把协调器（coordinator）挪到很远的地方，情况也可能发生很大变化。可以一边监测上报的 `linkquality` 值，一边尝试调整适配器的位置和朝向。你可能会发现购买一个像下面这样的小型旋转 USB 接头很有用：

![rotating USB connector](https://i.imgur.com/AI41Oxz.png)

## 通过更改 Zigbee 信道减少 Wi-Fi 干扰

**更改 Zigbee 信道可能需要重新配对（pairing）部分设备，详情请阅读[相关文档](../../guide/configuration/zigbee-network.md#changing-the-zigbee-channel)**

由于 Wi-Fi 和 Zigbee 都工作在相同的频段（2.4 GHz），它们之间可能会相互干扰。使用合适的 Zigbee 信道可以（部分）避免与 Wi-Fi 之间的干扰。[Zigbee and Wi-Fi Coexistence](https://www.metageek.com/training/resources/zigbee-wifi-coexistence/) 是一篇很好地解释了这一点的文章。

要更改 Zigbee2MQTT 使用的 Zigbee 信道，你需要设置 [`configuration.yaml` 中的 `channel`](../../guide/configuration/zigbee-network.md)。

## 其他 2.4 GHz 设备造成的干扰

任何使用开放 2.4 GHz 频段的设备都可能对 Zigbee 造成干扰，例如蓝牙，或罗技（Logitech）的 "Unifying"、"Lightspeed"，以及雷蛇（Razer）的 "Hyperspeed Wireless" 等游戏设备。

这也包括一些你可能没有意识到是 2.4 GHz 的设备。请检查所有无线设备，包括如下这类无线音频发射器：

- [JL Audio JL Link TRX](https://www.crutchfield.com/S-kjc9jL5lfL6/p_136TRX/JL-Audio-JLINK-TRX-High-Fidelity-Audio-Transmitter-Receiver-Kit.html)
- [SVS Soundpath (gen 1)](https://www.svsound.com/products/soundpath-wireless-audio-adapter)

已知公用事业公司会在其"智能电表"中使用 Zigbee，但可能不会将其宣传为 Zigbee 设备。
其他广播 Zigbee 信号、或使用改版 Zigbee 的设备，也已知会导致问题。
例如，如果你仍在使用 Philips Hue Hub，建议将灯泡加入到你的 Zigbee2MQTT 网络中，或者确保它们使用不同的信道。

## 为网络添加路由器（router）

"Zigbee 是一种面向电池供电设备的低功耗无线网状网络标准"（参见 [维基百科](https://en.wikipedia.org/wiki/Zigbee)）。然而，较低的发射功率也可能是网络不稳定或不可靠的原因：

![信号可能太弱，无法让消息到达目标设备。](https://www.zigbee2mqtt.io/images/routing1.jpg)

对于部分协调器（coordinator）型号，Zigbee2MQTT 支持用户[提高发射功率](https://www.zigbee2mqtt.io/guide/configuration/adapter-settings.html)。但是，如果发往终端设备（end device）的消息能够到达目标，而该终端设备的响应（或消息）却无法可靠地到达协调器，这个简单的措施可能会导致网络出现奇怪的行为：

![仅提高发送端的发射功率，可能不足以完成一次完整的消息往返。](https://www.zigbee2mqtt.io/images/routing2.jpg)

引入一个路由器（[了解更多](./01_zigbee_network.md)）可以同时改善正向路径和返回路径：

![路由器可以稳定整个消息往返过程。](https://www.zigbee2mqtt.io/images/routing3.jpg)

你可以选择一个专用路由器（例如，基于 [SONOFF ZBDongle-E 的路由器](/devices/ZBDongle-E.html)），或者一个使用市电供电的 Zigbee 设备（例如一盏 [Hue 灯泡](/devices/8719514301481.html#philips-8719514301481)）来稳定你的网络。几乎所有交流供电的设备都可以充当路由器（大多数不需要零线的交流供电继电器除外）。

请注意，有些质量一般的路由器可能无法与你的网络很好地兼容（例如，某些版本的 [SONOFF Smart Plug S26R2ZB](/devices/S26R2ZB.html) 就[已知存在限制](https://github.com/Koenkk/zigbee2mqtt/issues/10282)）。这可能会导致消息路由出错。如果你的网络中存在这类设备，添加质量更好的路由器，并将设备绑定（binding）到这些路由器上（将 "Permit join" 限制在新的/更好的路由器上，重新配对设备），可能有助于提升整体网络性能。

如果你怀疑存在路由问题，可以尝试向 `zigbee2mqtt/bridge/request/networkmap` 主题[发送 MQTT 请求给网桥](https://www.zigbee2mqtt.io/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request)，以获取包含路由信息的 Zigbee 网络拓扑图（network map）。

关于 Zigbee 路由的更多技术细节，例如可参见 [TI Z-Stack 用户指南中的 "5. Routing"](https://software-dl.ti.com/simplelink/esd/plugins/simplelink_zigbee_sdk_plugin/1.60.01.09/exports/docs/zigbee_user_guide/html/zigbee/developing_zigbee_applications/z_stack_developers_guide/z-stack-overview.html#routing) 一节。

## 硬件

虽然 Zigbee2MQTT 本身并不需要太多资源，但运行 Zigbee2MQTT 的硬件仍会影响其性能。在使用像 Raspberry Pi 3 这样性能较弱的硬件时尤其如此。请确保有足够的空闲资源（CPU/内存）。例如，在 Raspberry Pi 3 上同时运行 Home Assistant 和 Zigbee2MQTT 的 Home Assistant 插件，可能会导致性能不佳。

## 广播

Zigbee 流量可以分为 _单播（Unicast）_ 和 _广播（Broadcast）_ 两类：

- _单播（Unicast）_ 是一种寻址消息，通常在 Zigbee 设备与协调器之间传递，可能会经过一些中间设备转发
- _广播（Broadcast）_ 是一种特殊类型的消息，旨在到达网络中的**所有**设备

当设备第一次收到某条广播消息时，会至少重新转发一次。设备会记录最近转发过的广播，以避免消息被无限次重复转发。对于大型网络而言，广播可能会产生大量流量，并且消息传播到所有设备也需要时间。

Zigbee 只能维持平均每秒 1 次广播的速率，在短时间内发送多次广播会增加延迟。更多信息请[参见 Silicon Labs 的这份应用笔记](https://www.silabs.com/documents/login/application-notes/an1138-zigbee-mesh-network-performance.pdf)。

广播主要用于网络管理任务，例如查找到设备的路由，此外也会被 [Zigbee 组（group）](../../guide/usage/groups.md)和 [Green Power 设备](./01_zigbee_network.md)所使用。通常建议尽量少用广播。
