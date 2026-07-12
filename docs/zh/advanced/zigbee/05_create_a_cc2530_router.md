---
redirectFrom: /how_tos/how_to_create_a_cc2530_router.md
---

# 制作 CC2530 路由器（router）

CC2530 非常适合用作路由器。它带有外接天线，能够大幅提升 Zigbee 网络的覆盖范围。本教程将介绍如何制作一个装在漂亮外壳中的 CC2530 路由器，它可以通过任意普通插座供电。

**免责声明：** CC2530 路由器使用市电供电，如果安装不当会有触电危险。如果你不知道如何安装，请联系专业电工！

![CC2530 in an enclosure](/images/cc2530_router_enclosure.jpg)

## 需要准备什么？

| 名称                                                                                     | 价格                                                           | 图片                                                       |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------- |
| CC2530 <br/> **或** <br/> CC2530 + CC2591 <br/> _CC2530 + CC2591 性能更强，但价格也更贵_ | 约 7.50 美元（AliExpress） <br/><br/> 约 15 美元（AliExpress） | ![CC2530](/images/cc2530.jpg)                              |
| HLK-PM03                                                                                 | 约 2.20 美元（AliExpress）                                     | ![HLK-PM03](/images/HLK-PM03.jpg)                          |
| 外壳（所用外壳尺寸为 100x68x40mm）                                                       | 约 2 美元                                                      | ![Enclosure](/images/enclosure.jpg)                        |
| 电源线                                                                                   | 约 2 美元                                                      | ![Power cable](/images/power_cable.png)                    |
| CC debugger                                                                              | -                                                              | ![CC debugger](/images/cc_debugger.jpg)                    |
| 8 根母对母跳线                                                                           | -                                                              | ![Jumper wires](/images/female_to_female_jumper_wires.jpg) |

## 刷写 CC2530

CC2530 需要刷写路由器固件，这需要使用 CC debugger 和 6 根母对母跳线来完成。引脚需按如下方式连接：

### CC debugger 引脚布局

![CC-Debugger Pins](/images/ccdebugger_pins.png)

| CC debugger | CC2530 |
| ----------- | ------ |
| 1           | GND    |
| 2           | VCC    |
| 3           | P2.2   |
| 4           | P2.1   |
| 7           | RST    |
| 9           | VCC    |

### 各种 CC2530 模块的引脚布局

| 名称                  | 引脚布局                                                                       | 图片                                          |
| --------------------- | ------------------------------------------------------------------------------ | --------------------------------------------- |
| CC2530                | ![CC2530 pin layout](/images/cc2530_pin_layout.png)                            | ![CC2530](/images/cc2530.jpg)                 |
| Webee CC2530 + CC2591 | ![Webee CC2530 + CC2591 pin layout](/images/webee_cc2530_cc2591_pinlayout.png) | ![CC2530 + CC2591](/images/cc2530_cc2591.jpg) |

### 刷写

现在可以按照与 [刷写 CC2531](../../guide/adapters/flashing/flashing_the_cc2531.md) 相同的说明来刷写 CC2530。路由器固件可以在[这里](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router)找到。

![CC debugger connected to CC2530](/images/ccdebugger_cc2530.jpg)

## 装入外壳

请按照以下步骤操作：

- 在外壳上钻 2 个孔：一个用于天线，一个用于电源线
- 在电源线上打一个结，作为应力消除（strain relief）
- 将电源线焊接到 HLK-PM03 的 AC 引脚上
- 使用 2 根母对母跳线，将 HLK-PM03 的 VC+ 引脚连接到 CC2530 的 VCC 引脚，将 HLK-PM03 的 VC- 引脚连接到 CC2530 的 GND 引脚
- 使用双面胶将 CC2530 和 HLK-PM03 固定在外壳内

### 效果

![1](/images/router_1.jpg)

![2](/images/router_2.jpg)

![3](/images/router_3.jpg)

![4](/images/router_4.jpg)

![CC2530 in an enclosure](/images/cc2530_router_enclosure.jpg)

## 完成！

现在将 CC2530 插入电源插座，它就会自动加入你的 Zigbee 网络（别忘了开启新设备加入功能）。尽情享受扩展后的 Zigbee 网络覆盖范围吧！:smile:
