---
redirectFrom: /information/zigbee_network.md
---

# Zigbee 网络

## 设备类型

在 Zigbee 中，设备分为三种不同类型：终端设备（end device）、路由器（router）和协调器（coordinator）。一个 Zigbee 网络始终有且仅有**一个**协调器，但可以有多个路由器和终端设备。对于 Zigbee2MQTT 来说，协调器就是你的 CC2531 USB 加密狗。

### 终端设备（end device）

终端设备（end device）不转发流量。它们也可以进入休眠状态，因此非常适合用于电池供电的设备。一个终端设备只有一个父节点，可能是协调器，也可能是路由器，通常是配对（pairing）时距离最近的设备。终端设备的所有通信都要经过其父节点进行收发。如果某个父路由器离线，所有发往其子设备的流量都会中断，直到这些终端设备超时并尝试寻找新的父节点。某些型号的终端设备（尤其是小米 Xiaomi 的设备）不会尝试寻找新的父节点，因此会一直处于孤立状态，直到重新与网络配对。

_示例：WXKG01LM、RTCGQ01LM、MCCGQ11LM_

### 路由器（router）

路由器（router）负责在不同节点之间转发流量。路由器不能休眠，因此不适合用于电池供电的设备。路由器还负责接收并存储发给其子设备的消息。除此之外，路由器还是网络的守门人，负责允许新节点加入网络。

_示例：LED1545G12、7146060PH、ZNCZ02LM、[刷入路由器固件的 CC2531 USB 嗅探器](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_Home_1.2/bin)、[基于 SONOFF ZBDongle-E 的路由器](/devices/ZBDongle-E.html)_

_注意：某些声称支持 Zigbee 网络路由器功能的设备实际表现不佳，可能反而会降低你的 Zigbee 网络稳定性。_

### 协调器（coordinator）

协调器（coordinator）是一种特殊的路由器。除了具备路由器的全部功能外，协调器还负责组建网络。为此，它必须选择合适的信道、PAN ID 和扩展网络地址。它还负责选择网络的安全模式。

_示例：[刷入协调器固件的 CC2531 USB 嗅探器](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/default)_

### 查看你的设备类型

Zigbee2MQTT 会在启动时记录你的设备类型，例如：

```
2018-5-28 20:39:46 INFO 0x00158d00018255df (0x00158d00018255df): ZNCZ02LM - Xiaomi Mi power plug Zigbee (Router)
2018-5-28 20:39:46 INFO 0x00158d0001b79111 (0x00158d0001b79111): WSDCGQ01LM - Xiaomi MiJia temperature & humidity sensor (EndDevice)
```

### Green Power 设备

Zigbee Green Power 设备是一类特殊的终端设备，设计上非常节能。普通 Zigbee 设备无法"理解"Green Power 设备发出的消息，因此这些消息需要先由 Green Power "代理（proxy）"进行"翻译"。这意味着 Green Power 设备必须处于支持 Green Power 代理角色的常规 Zigbee 设备的覆盖范围内。例如 Philips Hue 和（至少部分）Ikea Tradfri 灯泡就支持这一角色。

Green Power 设备不支持绑定（binding），也不会出现在网络扫描结果中。

配对 Green Power 设备时，你需要选择转译后的消息应通过单播（unicast）还是广播（broadcast）方式重新发送。若只想为该 Green Power 设备使用单播，则只在某一台指定设备上[启用加入](../../guide/usage/pairing_devices.md)；若要使用广播，则在所有设备上启用加入。请注意，每个代理都会为每个 Green Power 事件生成一次独立的广播，而一次按键操作可能会触发多个事件（例如先触发"按下"再触发"松开"）。如果有多个代理都与同一个 Green Power 设备配对，这可能会产生**大量**流量。

_Green Power 设备示例：PTM 215Z、SR-ZGP2801K-5C、SR-ZGP2801K2-DIM、SR-ZGP2801K4-DIM_

_注意：大量使用广播可能会对你的网络性能产生负面影响（参见[广播](./02_improve_network_range_and_stability.md)）。_

#### GP 代理与接收端

以下 Zigbee 路由器已确认支持（至少部分）ZGP 功能。其他设备很可能也能正常工作，只是尚未被添加到此表格中。

| Zigbee 路由器                                                                    | GP 代理 | GP 接收端 | 单播 |
| :------------------------------------------------------------------------------- | :-----: | :-------: | :--: |
| [Custom devices (DiY) TI Router](/devices/ti.router.html)                        |    Y    |     N     |  Y   |
| [IKEA E160x/E170x/E190x](/devices/E160x_E170x_E190x.html)                        |    Y    |     N     |  Y   |
| [IKEA E22x4](/devices/E22x4.html)                                                |    Y    |     Y     |  Y   |
| [IKEA ICPSHC24-10EU-IL-2](/devices/ICPSHC24-10EU-IL-1_ICPSHC24-10EU-IL-2.html)²  |    Y    |     Y     |  Y   |
| [IKEA L2112](/devices/L2112.html)                                                |    Y    |     y     |  Y   |
| [IKEA LED2101G4](/devices/LED2101G4.html)                                        |    Y    |     Y     |  Y   |
| [IKEA LED2103G5](/devices/LED2103G5.html)                                        |    Y    |     Y     |  Y   |
| [IKEA LED2109G6](/devices/LED2109G6.html)                                        |    Y    |     Y     |  Y   |
| [IKEA LED2107C4](/devices/LED2107C4.html)                                        |    Y    |     N     |  Y   |
| [IKEA LED2110R3](/devices/LED2110R3.html)                                        |    Y    |     Y     |  Y   |
| [Innr RB 249 T](/devices/RB_249_T.html)                                          |    Y    |     N     |  Y   |
| [Innr RB 286 C](/devices/RB_286_C.html)                                          |    Y    |     N     |  Y   |
| [Philips 1742930P7](/devices/1742930P7.html)                                     |    Y    |     N     |  Y   |
| [Philips 3216131P5](/devices/3216131P5.html)                                     |    Y    |     Y     |  Nⁱ  |
| [Philips 3261030P7](/devices/3261030P7.html)                                     |    Y    |     Y     |  Nⁱ  |
| [Philips 3261031P6](/devices/3261031P6.html)                                     |    Y    |     N     |  Y   |
| [Philips 3261331P7](/devices/3261331P7.html)                                     |    Y    |     Y     |  Nⁱ  |
| [Philips 3418931P6](/devices/3418931P6.html)                                     |    Y    |     N     |  Y   |
| [Philips 4023330P7](/devices/4023330P7.html)                                     |    Y    |     Y     |  Nⁱ  |
| [Philips 4034031P7](/devices/4034031P7.html)                                     |    Y    |     Y     |  Nⁱ  |
| [Philips 4090230P9](/devices/4090230P9.html)                                     |    Y    |     Y     |  Nⁱ  |
| [Philips 5047130P9](/devices/5047130P9.html)                                     |    Y    |     N     |  Y   |
| [Philips 5062131P7](/devices/5062131P7.html)                                     |    Y    |     N     |  Y   |
| [Philips 9290024896](/devices/9290024896.html)                                   |    Y    |     N     |  Y   |
| [Philips 9290022166](/devices/9290022166.html)                                   |    Y    |     N     |  Nⁱ  |
| [Philips 9290022169](/devices/9290022169.html)                                   |    Y    |     N     |  Y   |
| [Philips 929001953301](/devices/929001953301.html)                               |    Y    |     N     |  Y   |
| [Philips 8718696548738](/devices/8718696548738.html)                             |    Y    |     Y     |  Nⁱ  |
| [Philips 8719514491106](/devices/8719514491106.html)                             |    Y    |     N     |  Y   |
| [Silabs series 2 router](/devices/Silabs_series_2_router.html)                   |    Y    |     N     |  Y   |
| [Sonoff ZBDongle-E](/devices/ZBDongle-E.html)                                    |    Y    |     N     |  Y   |
| [Sunricher R-ZG9040A-ZG9041A-D](/devices/SR-ZG9040A_ZG9041A-D.html)              |    Y    |     Y     |  Y   |
| [Sunricher SR-ZG9101SAC-HP-SWITCH-2CH](/devices/SR-ZG9101SAC-HP-SWITCH-2CH.html) |    Y    |     Y     |  Y   |
| [Ubisys C4](/devices/C4.html)                                                    |    Y    |     N     |  Y   |
| [Ubisys S2](/devices/S2.html)                                                    |    Y    |     Y     |  Y   |
| [Vesternet VES-ZB-SWI-015](/devices/VES-ZB-SWI-015.html)                         |    Y    |     Y     |  Y   |

_ⁱ 即使协调器请求使用单播，ZGP 帧也总是以广播方式重新发送。这可能是一个[固件缺陷](https://github.com/Koenkk/zigbee2mqtt/issues/22897#issuecomment-2158291085)。_

_² 只有 ICPSHC24-10EU-IL-2（新版本）能够转译 ZGP 帧。_

## Zigbee 网络分层

本节概要介绍 Zigbee 协议栈是如何划分为不同层次的（参见 [Wikipedia - IP layers](https://en.wikipedia.org/wiki/Internet_protocol_suite#Layer_names_and_number_of_layers_in_the_literature)）。这类描述中层次的数量通常并不固定；本文采用以下 4 层划分：

1. 物理层与 MAC 层，
2. 网络层与传输层，
3. 应用层，以及
4. Zigbee2MQTT 层。

本文将主要聚焦于后两层。

### 物理层与 MAC 层

Zigbee 协议的物理层与 MAC 层由 [IEEE 802.15.4](https://en.wikipedia.org/wiki/IEEE_802.15.4) 定义。这是一套被多种协议栈共用的通用标准，包括 Zigbee、6LoWPAN、Thread 和 Z-Wave。IEEE 802.15.4 实际上可以使用几个不同的频段：WiFi 也在使用的同一 2.4 GHz 频段，以及使用情况因国家而异的 800 MHz 和 900 MHz 频段。一般来说，使用某一协议栈的设备只会选择其中一个频段而避开其他频段。例如，Zigbee 设备通常使用 2.4 GHz 频段，而 Z-Wave 设备通常使用 8/900 MHz 频段（具体取决于所在国家）。

### 网络层与传输层

网络层与传输层定义了 Zigbee 网络中各节点之间的路由、安全和传输方式，这也包括网络加密模型等内容。Zigbee 网络中控制器、路由器与终端节点之间的区别也是在这一层定义的——参见[设备类型](#设备类型)。这里我还想把另一个 Zigbee 概念归到传输层：端点（endpoint）的概念。端点类似于 TCP/IP 中的端口，它允许每个物理设备在网络上表现为多个虚拟设备。例如，一个三路 Zigbee 开关可能只有一个射频模块，因而只有一个 MAC 地址和一个 Zigbee 网络地址，但却拥有三个端点——每个开关对应一个。每个端点随后可以运行一个独立的"开关"接口。

### 应用层

Zigbee 不仅仅是一项组网技术，它还定义了一整套运行在网络之上的标准应用。这些应用定义在 [Zigbee Cluster Library 规范](https://github.com/Koenkk/zigbee-herdsman/wiki/References#csa-zigbee-alliance-spec)中。每个"簇（cluster）"定义了一种应用层通信方式。每种簇类型都有自己的整数 ID，并分为客户端和服务端两种角色。有些簇用于底层信息获取——例如获取设备型号、列出设备的端点以及每个端点实现了哪些簇（每个端点可以实现多个簇）。有些簇用于简单的网络设置，例如 Identify 簇，它允许某个设备被要求"表明身份"，例如要求某盏灯表明身份时，它可能会开始闪烁。有些簇用于开关灯的控制，其中灯可能实现 on/off 服务端簇，而开关可能实现 on/off 客户端簇。还有一些簇用于配置，使控制器能够以各种方式配置设备。

如上所述，每个簇都分为客户端和服务端两种角色。通常服务端是运行更频繁的那个端点，而客户端则选择去连接服务端。在很多情况下，从簇的功能上看这种划分并不十分明确，因此规范在这方面的规定其实相当随意。

Zigbee 控制器可以把两个端点上的簇"绑定（binding）"在一起：它会把实现了某个簇客户端版本的端点，与实现了同一簇服务端版本的另一个端点连接起来。

此外还有一些特殊的簇。"组（group）"簇允许定义"组"——每个组由一个较小的整数标识。如果某个端点实现了组簇，就可以被配置为属于若干个组。设备会记住自己属于哪些组。这样一来，一个组就可以被当作一个虚拟端点来处理：发送到特定组 ID 的消息会在网络中广播，属于该组的所有设备都会响应这条消息。同样地，客户端也可以绑定到一个组，而不是绑定到另一个端点，这样，例如一个开关就可以控制一整组灯。

类似地，场景（scene）簇允许把设备配置为记住该设备上其他簇的参数。例如灯可以记住亮度，卷帘可以记住设定的高度。每个设备可以记住少量场景，以 ID 标识。

场景和组的设计初衷是配合使用。可以想象先设置好一批不同的设备，然后把它们全部加入一个组，再向该组发送一条"记住场景"命令。之后就可以向该组发送带有相应场景 ID 的"调用场景"命令，从而让许多设备以极少的网络流量、也就是极低的延迟，按照给定方式配置自己。

### Zigbee2MQTT

Zigbee 协议栈本身已经定义了相当一部分家庭自动化协议：如前所述，设备可以组成组、定义场景，开关也可以绑定到这些组上。在这种设置下，Zigbee 控制器可能会协助配置网络，但配置完成后，它在应用层面上就变得被动了。

如果预定义的 Zigbee 簇提供的功能不够灵活，比如"当相对湿度超过 70% 时打开风扇"这样的需求，就需要更智能的控制方式。这正是 Zigbee2MQTT 发挥作用的地方：它在 Zigbee 与 MQTT 之间进行转换。

当一个设备通过 Zigbee-Herdsman 控制器加入网络时，控制器会使用底层配置簇对该设备进行"问询"，以了解这个设备是什么、它有哪些端点、以及每个端点又实现了哪些簇。随后，Zigbee-Herdsman-Converters 会针对每种设备型号记录下控制器应该绑定哪些簇，以及应如何将其转换为 MQTT。Zigbee-Herdsman-Converters 中的大多数设备都使用通用转换器，这些转换器会绑定到每个 Zigbee 簇，并为该簇提供标准的 MQTT 接口。

在这种设置下，当一个开关被触发时，它会向 Zigbee2MQTT 控制器发送一条消息，控制器随后会发出一条 MQTT 消息。MQTT 控制器（它不同于 Zigbee 控制器，例如 Home Assistant 组件）会根据这条消息决定接下来该做什么。举例来说，它可能会决定打开某盏灯，于是发送一条请求该灯开启的 MQTT 消息。Zigbee2MQTT 收到这条消息后，会使用相应的 Zigbee 簇，向该灯的端点发送一条 Zigbee 消息。

这一整套系统比基础的 Zigbee 系统灵活得多，但延迟也更高（系统对开关切换做出反应所需的时间更长），故障点也更多。在基础的 Zigbee 方案中，一旦设置完成，甚至连控制器都无需参与。而在 Zigbee2MQTT 方案中，则会产生两条 Zigbee 消息、两条 MQTT 消息，以及三个额外的处理步骤（主控制器决定该做什么，以及 MQTT 在两个方向上分别处理消息）。

需要注意的是，在某些商用 Zigbee 系统中（例如 Philips Hue），Zigbee 网络中的控制器节点同时也是自动化控制器，能够在基础 Zigbee 方案之上增加额外的智能功能。而 Zigbee2MQTT 则在两者之间插入了 MQTT，使它们得以解耦。
