---
sidebarDepth: 0
redirectFrom: /information/FAQ.md
---

# 常见问题（FAQ）

[[toc]]

## 适用于所有 Zigbee 实现的一般性限制

请注意，每个 Zigbee2MQTT 安装实例仅支持连接单个专用的 Zigbee 协调器（coordinator）无线适配器或模块，并且只能对应一个 Zigbee 网络；同时该 Zigbee 协调器不能已被其他应用程序连接或使用。任何曾经连接过其他 Zigbee 实现的设备，都需要先恢复出厂设置，然后才能配对（pairing）/加入到 Zigbee2MQTT，具体请参阅各设备制造商的文档。

任何 Zigbee 设备都只能配对（pairing）/加入一个 Zigbee 协调器，并且只能属于一个 Zigbee 网络，也就是说 Zigbee 设备只能连接到单个 Zigbee 网关。如果你想把某个 Zigbee 设备迁移到另一个 Zigbee 网络，就需要先将该设备恢复出厂设置，然后重新配对/加入到另一个 Zigbee 网关。这是当前（以及以往）Zigbee 协议规范中的一项限制，由 [CSA（Connectivity Standards Alliance）](https://csa-iot.org/all-solutions/zigbee/) 制定，因此该限制适用于所有 Zigbee 实现，而不仅仅是 Zigbee2MQTT。

另一个适用于所有 Zigbee 实现的限制是：在 Zigbee 协议规范中并不存在所谓的"Zigbee over IP"或"Zigbee over LAN/WAN"。因此，不可能将同一个 Zigbee 网络扩展到两个无法通过 Zigbee 无线信号在网状网络（mesh）内直接互通的独立地点或站点。也就是说，没有办法使用所谓的"Zigbee 网络适配器"或类似方案，通过以太网或 VPN 等其他介质来转换和桥接单一的 Zigbee 网络通信。因此，不存在能够将 Zigbee 网络跨越到远程站点的网络连接型远程 Zigbee 适配器，无论此类产品的宣传材料把它们在"Zigbee 路由器（router）"模式下的表现说得多么天花乱坠。事实是，这类"Zigbee 网络适配器"产品的"Zigbee 路由器"功能只是把其 Zigbee 射频芯片切换到独立运行模式，使其像任何 Zigbee 路由器设备一样工作，与这些产品中的以太网部分彻底断开。

在 Zigbee2MQTT 中，通过"Install Code"或"QR Code"方式对 Zigbee 3.0 设备进行入网配置的支持，目前只在 'zstack'（Texas Instruments ZNP）、'ember'（Silicon Labs EmberZNet）和 'deconz'（Dresden Elektronik deCONZ，需要较新的协调器固件）这几种适配器类型的无线电模块上实现。其他类型的无线电适配器要么是其对应的适配器/驱动在 [zigbee-herdsman](https://github.com/Koenkk/zigbee-herdsman) 中缺少支持，要么更可能是制造商的固件命令/API 及文档中本身就缺失该功能。

Zigbee2MQTT 目前不支持仅能使用 ZSE（"Zigbee Smart Energy"）配置文件的设备，这是因为"Zigbee SE"规范并不属于包含更常见的 Zigbee Home Automation 与 Zigbee Lighting 的标准 Zigbee 3.0 规范的一部分，因此在市面上常见的 Zigbee 协调器无线适配器和模块的固件中大多没有实现，通常是因为制造商为 Zigbee Smart Energy 提供了单独的 Zigbee 协议栈 SDK。

## 我的网络不稳定和/或性能不佳，我该怎么办？

- 尝试重启连接不稳定/较差的 Zigbee 设备。将协调器移动到家中其他位置可能会导致路由丢失。
- 阅读[改善网络覆盖范围与稳定性](../../advanced/zigbee/02_improve_network_range_and_stability.md)

## 为什么我的设备无法配对（pairing）或配对失败？

这个问题可以分为两类：完全没有日志输出，或者设备信息交互（interview）失败。

### 完全没有日志输出

- 确保[已启用加入网络](../usage/pairing_devices.md)。
- 可能存在过多干扰，可以尝试通过 USB 延长线连接协调器 USB。这个问题在与 Raspberry Pi 3 和 4 搭配使用时经常出现。
- 如果你使用的是基于 Texas Instruments CC2652 或 CC1352 的适配器，协调器内存中可能缺失路由器（router）信息。请执行[协调器检查](../usage/mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request-coordinator-check)并重新配对缺失的路由器。
- 如果你使用的是 Raspberry Pi，尝试断开其他所有 USB 设备。如果断开后配对成功，可以尝试通过带电源的 USB 集线器连接这些 USB 设备。
- 确保其他 Zigbee 网络/网关已关闭电源。例如，如果你想配对一个之前配对到 IKEA 网关的 IKEA 灯泡，请确保关闭 IKEA 网关的电源。如果这样仍不起作用，也可以尝试关闭连接到 IKEA 网关的所有设备的电源。
- 如果是电池供电设备，尝试更换电池。
- 你可能已达到协调器的设备数量上限，这种情况在使用 CC2531 或 CC2530 并搭配源路由（source routing）固件时尤为常见。尝试重新刷写协调器固件，并在 Zigbee2MQTT 启动后立即配对该设备。
- 尝试在离协调器更近的位置配对设备。
- 仅适用于 CC2531/CC2530 协调器：
    - 停止 Zigbee2MQTT，拔出协调器，等待 10 秒，重新插入协调器，启动 Zigbee2MQTT 后再次尝试配对设备。
    - 如果以上方法都无效，尝试重新刷写协调器固件（不需要重新配对已经配对过的设备）。

### 设备信息交互（interview）失败

- 尝试在离协调器更近的位置配对设备。
- 可能存在过多干扰，可以尝试通过 USB 延长线连接协调器 USB。这个问题在与 Raspberry Pi 4 搭配使用时经常出现。
- 如果是电池供电设备，尝试更换电池。可以通过每 3 秒按一次设备按钮（如果有的话）来让设备保持唤醒状态。
- 尝试重新配对设备 2 到 3 次。
- 这可能是一个 Zigbee2MQTT 的 bug，请[创建一个新 issue](https://github.com/Koenkk/zigbee2mqtt/issues/new) 并附上调试日志。[如何启用调试日志](../configuration/logging.md#debugging)。
- 如果设备以 `ieeeAddress` 为 `0x000000000000000` 的方式加入网络（你会在 Zigbee2MQTT 日志中看到：`Starting interview of '0x0000000000000000'`），你的 CC253X 可能已经损坏。[参见 issue #2761](https://github.com/Koenkk/zigbee2mqtt/issues/2761)。
- 如果设备是灯泡，可以尝试通过 [Touchlink](../usage/touchlink.md) 重置它。
- 尝试在靠近某个灯泡（light）类路由器的位置配对，而不是靠近协调器。

## 如何从一个适配器迁移到另一个适配器？

想从例如 CC2530/CC2531 迁移到更强大的适配器（例如 CC2652/CC1352）？请按照以下步骤操作：

::: warning
从一个适配器迁移到另一个适配器需要备份和恢复支持，目前该功能仅在 `zstack`（Texas Instrument）和 `ember` 适配器上实现。其他适配器（`conbee`、`ezsp`、`zboss` 和 `zigate`）**不支持**备份和恢复。不过你可以尝试使用[这种方法](https://github.com/Koenkk/zigbee2mqtt/discussions/26716)。

请注意，当从 `zstack` 切换到 `ember` 或从 `ember` 切换到 `zstack` 时，**可能不需要**重新配对，但由于官方并不支持此操作，结果可能因情况而异。切换后，请检查所有设备是否正常工作，并重新配对那些无法正常工作的设备。如果新设备无法配对，请尝试在只允许通过协调器加入网络的情况下，重新配对靠近协调器的一些路由器。之后应该就可以通过这些重新配对过的路由器完成配对。
:::

1. 首先确保你正在运行最新版本的 Zigbee2MQTT
1. 停止 Zigbee2MQTT
1. 确定此次迁移[是否需要重新配对你的设备](#what-does-and-does-not-require-re-pairing-of-all-devices)
    - 如果需要重新配对：删除 `data/coordinator_backup.json`（如果存在）和 `data/database.db`（如果作为 Home Assistant 插件运行，`data/` 会改名为 `zigbee2mqtt/`）
    - 如果**不**需要重新配对：[将旧适配器的 ieee 地址复制到新适配器中](../adapters/flashing/copy_ieeaddr.html)
1. 在 `configuration.yaml` 中更新 `serial` -> `port`
    - 注意，如果是从较旧的适配器迁移过来（例如 zbt-1 -> zbt2），某些情况下你可能还需要更新 `baud`
1. 启动 Zigbee2MQTT

- 如果需要重新配对：
    1. 断开所有市电供电设备的电源
    1. 逐个开始重新配对设备
- 如果**不**需要重新配对，但设备没有响应：通过断开路由器的市电供电几秒钟来重启部分路由器。

## 如何将我的 Zigbee2MQTT 实例迁移到另一个环境？

有关你网络的详细信息同时存储在协调器和 `data/` 目录下的文件中（如果作为 Home Assistant 插件运行，`data/` 会改名为 `zigbee2mqtt/`）。
要将实例迁移到另一个环境，请移动 `data` 目录的内容，并在 `configuration.yaml` 中更新协调器的路径。现在你就可以启动 Zigbee2MQTT 了。

## 哪些情况需要/不需要重新配对所有设备？

### 需要重新配对

在以下情况下，你需要重新配对所有设备：

- 更改 `configuration.yaml` 中的网络密钥（`network_key`）或 panID（`pan_id`）。
- 更改 `configuration.yaml` 中的 Zigbee 信道（`channel`）可能需要重新配对**部分**设备，阅读[相关文档了解更多信息](../configuration/zigbee-network.md#changing-the-zigbee-channel)。
- 切换适配器需要重新配对，**但以下情况除外**：
    - 当 `configuration.yaml` 中的 `serial.adapter` 是 `zstack` 或 `ember`，且 `serial.adapter` 保持不变时；例如 `zstack` -> `zstack` **不**需要重新配对。
        - 有一个例外，当从 CC2531 或 CC2530（Z-Stack 1.2）切换到 CC2652/CC1352（Z-Stack 3）时，**需要**重新配对。
    - 当从 `zstack` 切换到 `ember` 或从 `ember` 切换到 `zstack` 时，**可能不需要**重新配对，但由于官方并不支持此操作，结果可能因情况而异。
        - 切换后，请检查所有设备是否正常工作，并重新配对那些无法正常工作的设备。如果新设备无法配对，请尝试在只允许通过协调器加入网络的情况下，重新配对靠近协调器的一些路由器。之后应该就可以通过这些重新配对过的路由器完成配对。

### 不需要重新配对

在以下情况下，你**不**需要重新配对设备：

- 将 Zigbee2MQTT 更新或降级到不同版本。
- 更新协调器固件。
    - 如果刷写后无法控制设备，可以尝试：
        - 等待几分钟，让 Zigbee 网络稳定下来。
        - 向设备发送 Zigbee 命令（例如开/关）。
        - 重启设备（拔插电源）。
- 更换运行 Zigbee2MQTT 的系统。
    - 这样做时，请确保复制 `data` 目录的内容。

## 为什么我的网络拓扑图（network map）中缺少一些连接线？

不用担心，如果这种情况发生在终端设备（end device，电池供电）上，大多数时候**并不**意味着这些设备已经不再连接到网络拓扑图。
一些终端设备（例如 Xiaomi 门窗传感器）会长时间休眠，这会导致其父节点（由于路由器子节点老化机制，router child ageing）将其从子节点表中移除。这就是导致连接线缺失的原因。即使该设备已不在子节点表中，它仍然可以通过路由器进行通信。这种情况并不总是发生，因为并非所有路由器都使用子节点老化机制（这是 Zigbee 3.0 的一项特性）。

## 如何解读 RSSI 和 LQI 数值？

网络拓扑图显示了已配对设备之间的多跳连接，以及它们上报的累积信号强度指示（RSSI）和链路质量指示（LQI）数值。这些数值的具体上报方式取决于每个设备所使用的 Zigbee 网络协议栈。LQI 数值可能会在消息通过网状网络传播的每一步中被修改。

解读 RSSI 和 LQI 数值是一件复杂的事情。除非你自己就是 Zigbee 专家，或者有专家指导，否则请忽略这些数值，因为它们可能具有误导性。如果你想深入研究，重要的是要理解不能仅凭 RSSI 或 LQI 单独的数值来做判断。在排查 Zigbee 消息丢失问题时，你必须结合 RSSI 和 LQI 两者一起解读。

RSSI（Received Signal Strength Indicator，接收信号强度指示）数值表示两个设备之间原始信号强度的指标。RSSI 数值以 -dBm 格式表示的负数（相对于 1 毫瓦参考功率所测得功率的 0 到 -100 分贝功率比）。负值越小（即数值越接近 0）表示干扰越少、信号越好。RSSI 信息仅反映终端设备与其到达的第一跳之间的情况。因此，它不一定表示到 Zigbee 协调器的信号强度，而更可能表示到最近的 Zigbee 路由器设备的信号强度。

- 一般来说，RSSI 在 -60 及以上（即 -50、-40 等）应被视为强信号（不会丢失消息）。
- RSSI 在 -80 及以下（即 -85、-90 等）应被视为存在较多干扰的环境，存在丢失消息的风险。

LQI（Link Quality Index，链路质量指数）数值对于 Zigbee 来说可能较难解读，这是因为 Zigbee 规范以及（IEEE 802.15.4 规范）都没有对如何测量 LQI 做出统一标准。LQI 数值以正数的形式在一个量表上显示。但由于各设备制造商和 Zigbee 协议栈提供的数值并未采用统一的测量标准，因此这些数值并不总是可信的。例如，基于 Silicon Labs EmberZNet 协议栈的 Zigbee 设备使用正向显示的 LQI 数值，数值越高越好，越低越差。Texas Instruments 的 Z-Stack 则是通过将原始的"接收信号强度指数"（RSSI）在该无线电模块所定义的最小和最大射频功率电平之间进行线性缩放，从而为每个接收到的数据包计算出 LQI，这大致上只是根据接收信号的强弱提供一个 LQI 数值。如果用户所处的环境存在同频段干扰导致噪声较大，这种方式可能会产生误导（因为即使真实链路质量下降，RSSI 数值也可能显示为上升）。其他制造商和 Zigbee 协议栈则采用不同的方式来测量和计算 LQI 数值。

- 理论上，LQI 数值为 255 意味着错误率为零，表示绝对完美的链路质量。
- 一般来说，LQI 正值越高越好，数值越低越差。但根据你所使用的设备不同，实际情况可能并非如此。
- 通常，如果某个设备的 LQI 数值稳定在 40 或以上，那么这条链路通常可以被认为在正常运行条件下是可接受的。

## 为什么 `action` 属性总是空的？

当启用了 Home Assistant 旧版动作传感器（在 `configuration.yaml` 中设置 `homeassistant.legacy_action_sensor: true`）时，例如按钮设备的 `action` 属性几乎总是为空。每当发布一个 `action`（例如 `{"action": "single"}`）时，紧接着会立刻发布一个 `{"action": ""}`。这是为了在 Home Assistant 的动作传感器中触发状态变化（以便它可以用于例如自动化场景中）。

## 我读到说 Zigbee2MQTT（在使用 CC2530/CC2531 适配器时）有 20 个设备的数量限制，这是真的吗？

当然不是！举例来说：默认的 Zigbee2MQTT CC2531 固件确实支持**直接**连接到协调器的 20 个设备。然而，通过在网络中加入路由器（router），网络规模是可以扩展的。几乎所有市电供电的设备（例如灯泡）都可以充当路由器，你甚至可以使用另一个 [CC2530/CC2531 作为路由器](../../advanced/zigbee/05_create_a_cc2530_router.md)（其上限为 21 个设备）。

### 示例

使用默认的 Zigbee2MQTT CC2531 协调器固件 + 2 个 CC2531 路由器时，你的设备数量上限将是：

- 协调器：15 - 2 个路由器 = 13
- 路由器 1：21
- 路由器 2：21
- **设备总上限为 55 个**

## 常见错误代码

以下是一些常见错误代码及其应对方法：

- `MAC_CHANNEL_ACCESS_FAILURE`：当无线频谱过于繁忙时会出现此情况。通常发生在微波炉开启时，或者存在使用相同信道的 WiFi 网络时。请参阅[通过更改 Zigbee 信道来减少 WiFi 干扰](../../advanced/zigbee/02_improve_network_range_and_stability.md#reduce-wifi-interference-by-changing-the-zigbee-channel)了解如何解决此问题。
- `NWK_TABLE_FULL`：[据报告](https://github.com/Koenkk/zigbee2mqtt/issues/4964#issuecomment-757022560)与上述 `MAC_CHANNEL_ACCESS_FAILURE` 具有相同的根本原因

## 如何运行多个 Zigbee2MQTT 实例？

如果你要设置多个 Zigbee2MQTT 实例，务必为每个实例使用不同的 `base_topic` 和 `channel`。这些可以在 [`configuration.yaml`](../configuration/README.md) 中进行配置。

## Zigbee2MQTT 运行一段时间后崩溃

如果 Zigbee2MQTT 在运行一段时间后出现类似 `SRSP - AF - dataRequest after 6000ms` 或 `SRSP - ZDO - mgmtPermitJoinReq after 6000ms` 的错误并崩溃，这意味着适配器已经崩溃。

- 通常可以通过重新插拔适配器并重启 Zigbee2MQTT 来解决。
- 如果你使用的是 CC2530 或 CC2531 适配器，建议升级到某个[推荐的适配器](../adapters/README.md)。CC2530/CC2531 已被视为老旧硬件，很容易出现内存损坏问题。
- 确保你的适配器使用的是最新固件，参见[适配器页面](../adapters/README.md)获取最新固件的链接。
- 如果使用的是 Raspberry Pi：这个问题可能是由于使用了质量不佳的电源，或者其他 USB 设备直接连接到了 Pi（尤其常见于外接 SSD）导致的，可以尝试通过带电源的 USB 集线器连接其他 USB 设备。
- 禁用 USB 自动挂起（autosuspend）功能，如果 `cat /sys/module/usbcore/parameters/autosuspend` 返回 `1` 或 `2`，则表示该功能已启用；执行以下命令可将其禁用：

    ```bash
    sed -i 's/GRUB_CMDLINE_LINUX_DEFAULT="/&usbcore.autosuspend=-1 /' /etc/default/grub
    update-grub
    systemctl reboot
    ```

    - 在 Raspberry Pi 上，你需要改为编辑 `/boot/cmdline.txt`，并在该行末尾添加 `usbcore.autosuspend=-1`。
