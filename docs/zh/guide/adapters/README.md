---
sidebarDepth: 1
next: ../installation/
redirectFrom: /information/supported_adapters.md
---

# Supported Adapters

本页列出了所有官方支持的适配器。请注意，适配器在用于 Zigbee2MQTT 之前需要先刷入协调器（coordinator）固件（部分适配器出厂时已预刷好固件）。

## 推荐

- [zStack based (Texas Instruments)](./zstack.md)
- [EmberZNet based (Silicon Labs)](./emberznet.md)
- [deCONZ based (Dresden Elektronik)](./deconz.md)

## 不推荐

### 不再维护

- [ZiGate based](./zigate.md)

### 实验性

- [ZBOSS based (Nordic Semiconductor)](./zboss.md)

::: tip TIP
想迁移到另一个适配器？请阅读[这篇文章](../faq/README.md#如何从一个适配器迁移到另一个适配器)
:::

## 说明

购买适配器之前，请先阅读下面的注意事项！

- 想迁移到另一个适配器？在某些情况下这可能需要重新配对（pairing）所有设备，详见 [FAQ](../faq/README.md#哪些情况需要-不需要重新配对所有设备)
- 通过 WiFi 连接的网络适配器可能稳定性较差，因为串行协议没有足够的容错能力来应对 WiFi 连接中常见的丢包或延迟。如果无法使用本地连接的 USB 或 UART/GPIO 适配器，建议使用通过以太网（有线）连接的远程适配器以避免问题。
- 各种 CC2652/CC1352 芯片之间有什么区别？
    - 以 `P` 结尾的芯片带有功率放大器，最高支持 20dBm 发射功率，而以 `R`/`RB` 结尾的适配器仅支持 5dBm。
    - 以 `CC1352` 开头的芯片支持 sub-1 GHz 频段（这对 Zigbee 而言并不相关，因为 Zigbee 使用 2.4 GHz），`CC2652` 只支持 2.4 GHz。因此就 Zigbee2MQTT 的用途而言，`CC1352` 和 `CC2652` 没有区别。
    - 以 `RB` 结尾的芯片在电路板上不需要晶振，这一区别仅影响制造工艺。

### 协调器备份

请注意，目前只有基于 zStack 或 EmberZNet 的适配器支持备份协调器（生成 `coordinator_backup.json`）。

#### 刷写现有适配器

刷写工具可用于升级现有适配器上的固件，而无需重新配对设备。有关哪些操作需要/不需要重新配对设备的信息，请参阅 [FAQ](https://www.zigbee2mqtt.io/guide/faq/#哪些情况需要-不需要重新配对所有设备)。

#### 操作系统找不到你的设备？

如果你在使用（例如）Flash Programmer 2 时，心里正嘀咕"为什么我的加密狗或适配器没有显示出来？"，那很可能是你的操作系统无法通过 VCP（虚拟串口，Virtual COM Port）与设备通信，导致加密狗无法显示为可刷写设备。要解决这个问题，请确保为你的操作系统安装 USB 转 UART 桥接/转换器的 VCP 驱动，例如 [Silicon Labs](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers)、[FTDI Chip](https://ftdichip.com/drivers/vcp-drivers/) 或 [WCH (CH34x/CH91xx)](http://www.wch-ic.com/downloads/category/30.html) 提供的驱动。

### 路由器

除了用作协调器（coordinator），部分适配器也可以用作 Zigbee 路由器（router）（点击你的适配器查看是否提供路由器固件）。恢复出厂设置/配对方法：

- Texas Instruments CC2531：按住 S2 按钮 5 秒。
- Texas Instruments CC2530：连续开关机三次（开机、等待 2 秒、关机，重复此循环三次）。
- 基于 CC2652/CC1352 的适配器：单击设备上的（其中一个）按钮
- 基于 Silicon Labs EmberZNet 的适配器：
    - [Sonoff Dongle-E](/devices/ZBDongle-E.html)
    - [SMLight SLZB-06M](/devices/SLZB-06M.html)
