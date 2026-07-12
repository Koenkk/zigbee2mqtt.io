# zStack 适配器（Texas Instruments）

### 配置

```yaml
serial:
    adapter: zstack
```

其他支持的设置项还有：`disable_led`、`adapter_concurrent` 和 `transmit_power`（[文档](../configuration/adapter-settings.md)）。

### 固件刷写

可以将适配器置于 BSL（bootloader，引导加载程序）模式来进行刷写。
具体操作方法请参阅下方你的适配器对应的“Vendor flashing instructions（厂商刷写说明）”。
成功将适配器置入 BSL 模式后，可使用下面任意一种工具进行刷写。

- 基于浏览器（最简单，推荐）
    - [XZG Multi-Tool](https://mt.xyzroe.cc/)
        - 从内置下拉列表中选择并刷写固件。
        - 检测芯片版本、已安装的固件版本，并备份当前固件。
        - NVRAM 操作：读取／写入／擦除。
        - 读取／写入 IEEE 地址。
        - 远程设备：通过提供的 `bridge`（可执行程序、Docker 或 HA 插件）访问串口、USB 和 TCP 设备。
    - [SMLIGHT firmware updater](https://smlight.tech/flasher/#other_cc)
        - 推荐用于 SLZB 系列适配器，也可用于刷写其他适配器
    - [SONOFF Dongle Flasher](https://dongle.sonoff.tech/sonoff-dongle-flasher/)
- 图形界面工具
    - Texas Instruments [FLASH PROGRAMMER 2](https://www.ti.com/tool/FLASH-PROGRAMMER)（仅支持 Windows）（找不到你的设备？请看下文！）
- 命令行工具（跨平台，基于 Python 的命令行工具）
    - [CC2538-BSL](https://github.com/JelmerT/cc2538-bsl)（[使用说明](./flashing/flashing_via_cc2538-bsl.md)）
    - [llama-bsl](https://github.com/electrolama/llama-bsl)（cc2538-bsl 的分支，增加了一些新功能）
- Home Assistant 插件
    - [XZG Multi-Tool](https://github.com/xyzroe/XZG-MT)
        - 用于与远程串口、USB 和 TCP 设备完全交互的桥接插件。
    - [TubesZB TI CC2652 FW Flasher](https://github.com/tube0013/tubeszb_addons)
    - [ZigStar TI CC2652 FW Flasher](https://github.com/mercenaruss/zigstar_addons)（TubesZB 的分支，增加了一些新功能）
    - [SONOFF Dongle Flasher](https://dongle.sonoff.tech/guide/dongle-lmg21/flash-firmware-via-home-assistant-add-on/)

- 部分以太网适配器支持通过自带的网页界面刷写 Zigbee 固件。这种情况下你不需要任何外部软件和硬件，只需打开网页界面并点击“Update Zigbee firmware”即可。具体操作请参阅你所用 Zigbee 适配器的说明手册。例如通用的 [XZG Firmware](https://github.com/xyzroe/XZG) 就适用于任何基于 CC1352/CC2652 的网关（[视频](https://github.com/Koenkk/zigbee2mqtt.io/assets/6440415/c2ca1d4c-166a-4bd9-b642-86595da1dcdb)）

<img src="/images/flashing/web-interface-ota-flashing.jpg" title="SLZB-06 WEB OTA Zigbee Flashing" height=300 />

## 硬件

### USB

::: details Electrolama zig-a-zig-ah! (zzh!)

基于 CC2652R 芯片、带外置天线的 USB 接口适配器

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC2652R_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC2652R_router_20250403.zip)
- [Vendor flashing instructions](https://electrolama.com/radio-docs/#step-3-flash-the-firmware-on-your-stick)
- [Buy](https://shop.electrolama.com/collections/usb-rf-sticks/products/zzh-multiprotocol-rf-stick)

<img src="/images/zzh.jpg" width="200" />
:::

::: details Slaesh's CC2652RB stick

基于 CC2652RB 芯片、带外置天线的 USB 接口适配器

**警告：** 有[反馈](https://github.com/Koenkk/zigbee2mqtt/discussions/6702)称发货时间非常缓慢，且缺乏沟通。

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC2652RB_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC2652RB_router_20250403.zip)
- [Vendor flashing instructions](https://slae.sh/projects/cc2652/#flashing)
- [Buy](https://slae.sh/projects/cc2652/)

<img src="/images/slaeshs_cc2652rb_stick.jpg" width="200" />
:::

::: details Tube's CC2652P2 USB Coordinator

基于 CC2652P 的开源硬件 USB 接口适配器，带外置天线和 USB 延长线

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [Vendor flashing instructions](https://github.com/tube0013/tube_gateways)
- [Buy](https://www.tubeszb.com/)

<img src="/images/Tubes_USB_Coordinator_CC2652P2_variant.png" width="200" />
:::

::: details Egony Stick V4

强大的 CC2652P Zigbee USB 加密狗，同时也是 Raspberry Pi GPIO 模块。提供 Ebyte（左图）和 RFSTAR（右图）两个版本。

- Coordinator firmware：[Ebyte](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_other_coordinator_20250321.zip) [RFSTAR](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- Router firmware：[Ebyte](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_other_router_20250403.zip) [RFSTAR](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [Vendor flashing instructions](https://github.com/egony/cc2652p_E72-2G4M20S1E/wiki/Flashing-EN)
- 介绍：[Ebyte](https://github.com/egony/cc2652p_E72-2G4M20S1E/wiki/Home-EN) [RFSTAR](https://github.com/egony/cc2652p_cc1352p_RF-STAR/wiki/Home-EN)
- [联系方式](http://t.me/Egony)

<img src="/images/Egony_v4_E72.jpg" width="200" /> <img src="/images/Egony_v4_RFS.jpg" width="200" />

:::

::: details ZigStar Stick v4

强大的基于 CC2652P、带外置天线的开源加密狗

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [Description](https://zig-star.com/projects/zigbee-stick-v4/)
- [Vendor flashing instructions](https://zig-star.com/radio-docs/flash-cc-bsl/)
- [Buy](https://zig-star.com)

<img src="/images/ZigStar-USB.png" width="200" />
:::

::: details CircuitSetup's CC2652P2 USB Coordinator

基于 CC2652P、预刷 Z-Stack 固件的 USB 接口适配器

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [Vendor flashing instructions](https://circuitsetup.us/product/usb-zigbee-stick-z-stack-coordinator/)
- [Buy](https://circuitsetup.us/product/usb-zigbee-stick-z-stack-coordinator/)

<img src="/images/circset_cc2652.jpg" width="200" />
:::

::: details SMLIGHT CC2652P Zigbee USB Adapter SLZB-02

基于 CC2652P、工厂原装的 Zigbee USB 协调器，带 6dB 外置天线，支持全球发货

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_other_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_other_router_20250403.zip)
- [Description](https://smartlight.me/smart-home-devices/zigbee-devices/zigbee-coordinator-v4-cc2652p)
- [Vendor flashing instructions](https://smartlight.me/flashing_slzb-02)
- Buy: [官方商店](https://smartlight.me/smart-home-devices/zigbee-devices/zigbee-coordinator-v4-cc2652p), [Tindie](https://www.tindie.com/products/smartlightme/zigbee-cc2652p-coordinator-dongle-stick-adapter/)

<img src="/images/CC2652P_smartlight_zigbee_coordinator.png" width="200" />
:::

::: details SONOFF Zigbee 3.0 USB Dongle Plus ZBDongle-P

基于 CC2652P、预刷固件并带外壳的 USB 接口适配器。

购买前请注意：ITead 目前同时在售 Dongle Plus “ZBDongle-P”（基于 CC2652P）和 Dongle Plus V2 “ZBDongle-E”（基于 EFR32MG21），两者名称容易混淆。

**本节介绍的是“ZBDongle-P”，“ZBDongle-E”请参阅 [EmberZNet](./emberznet.md)。**

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [Vendor flashing from web](https://dongle.sonoff.tech/sonoff-dongle-flasher/) 插入加密狗，打开网页，连接设备，选择 custom（自定义），上传上面的 hex 文件，然后刷写。无需安装任何软件。
- [Vendor flashing instructions](https://sonoff.tech/wp-content/uploads/2021/09/Zigbee-3.0-USB-dongle-plus-firmware-flashing-1-1.docx)（[PDF 版本](https://github.com/Koenkk/zigbee2mqtt.io/raw/master/docs/guide/adapters/flashing/zigbee-3.0-usb-dongle-plus-firmware_flashing-1-1.pdf) 及[所需 python 脚本](https://github.com/Koenkk/zigbee2mqtt.io/raw/master/docs/guide/adapters/flashing/zigbee-3.0-usb-dongle-plus-uartLog.zip)）
- [Buy](https://itead.cc/product/sonoff-zigbee-3-0-usb-dongle-plus/)

<img src="/images/sonoff_plus_dongle.png" width="200" />
:::

::: details Vision CC2652 dongle

基于 CC2652R（VS201）或 CC2652P（VS202）的适配器或小型开发板  
Coordinator firmware: [VS201](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC2652R_coordinator_20250321.zip) [VS202](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)  
Router firmware: [VS201](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC2652R_router_20250403.zip) [VS202](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)

- [Vendor flashing instructions](https://www.aliexpress.com/item/1005002823262979.html?spm=a2g0o.productlist.0.0.1a1640b82yeViq&algo_pvid=e01b1872-ca85-4814-971f-ce9b058855b8&algo_exp_id=e01b1872-ca85-4814-971f-ce9b058855b8-0&pdp_ext_f=%7B%22sku_id%22%3A%2212000022351543786%22%7D)
- Buy: [VS201](https://www.aliexpress.com/item/1005002809329614.html) [VS202](https://www.aliexpress.com/item/1005003393047763.html)

<img src="/images/cc26x2r1_dongle.jpg" width="200" />
:::

::: details JetHome JetStick Z2/ZB6UX CC2652P1

强大的基于 CC2652P1、工厂原装的 Zigbee USB 加密狗，带外置天线。

- [Documentation](https://docs.jethome.ru/en/zigbee/sticks/jetstick_z2.html)
- [Vendor flashing instructions](https://docs.jethome.ru/en/zigbee/howto/cc_2538_bsl.html#zigbee-howto-2538-bsl)
- [Firmware](https://docs.jethome.ru/en/zigbee/software/ti_cc2652p.html#zigbee-software-ti-cc2652p)
- Buy: [JetStick Z2](https://jethome.ru/z2/)

<img src="/images/jetstick_z2.png" width="200" />
:::

::: details SMLIGHT SLZB-07p7 Zigbee USB CC2652P7 adapter

强大、小巧、设计现代，专为 Zigbee2MQTT 开发，出厂预刷固件、开箱即用的 Zigbee 适配器。支持 Home Assistant 自动发现。已启用 AutoBSL（远程更新）功能。  
包装内容丰富，包括：

| Package includes |                                                   SLZB-07p7 adapter                                                   |                                                  +3dB antenna 360°                                                   |                                                    QR-manual                                                    |
| :--------------- | :-------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
| Quantity:        |                                                         1 pcs                                                         |                                                        1 pcs                                                         |                                                      1 pcs                                                      | 1 pcs |
| Image            | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07p7-adapter.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07x-antenna.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07x-qr.jpg" width="200" /> |

支持 Zigbee 远程更新、自动发现、指示灯以及刷写引脚，适用于家庭和商业场景。

- Zigbee firmware:  
  --[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P7_coordinator_20250321.zip)。
- [Product page](https://smlight.tech/product/slzb-07p7/)。
- Buy: [Official Store - Worldwide](https://smartlight.me/smart-home-devices/zigbee-devices/coordinator-slzb-07p7), [Aliexpress - Worldwide](https://www.aliexpress.com/item/1005006273914143.html)。  
  Local fast delivery: [Australia](https://shop.dialedin.com.au/products/smlight-slzb-07p7-usb-zigbee-adapter), [France](https://www.domadoo.fr/fr/interface-domotique/7045-smlight-dongle-usb-zigbee-cc2652p7-soc-antenne-3db-zigbee2mqtt-et-zha.html), [Poland](https://pcblab.io/szukaj?controller=search&s=slzb)。

|                                                    Product picture 1                                                    |                                                    Product picture 2                                                    |                                                    Product picture 3                                                    |
| :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07p7-main1-title.jpg" width="200"> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07p7-main2-title.jpg" width="200"> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07p7-main3-title.jpg" width="200"> |

:::

### 网络（TCP）

::: details Tube's Zigbee Gateways (CC2652P2 variant)

基于 CC2652P 和 ESP32 的开源硬件 Zigbee 转以太网协调器（左图），也提供 POE 版本（右图）

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [Vendor flashing instructions](https://github.com/tube0013/tube_gateways)
- [Buy](https://www.tubeszb.com/)

<img src="/images/Tubes_Zigbee_Gateways_CC2652P2_variant.jpg" width="200" /> <img src="/images/Tubes_Zigbee_PoE_Coordinator_CC2652P2_variant.jpg" width="200" />

:::

::: details cyijun OpenZ3Gateway

一款基于 ESP8266 和 CC2652P 模块的开源 Zstack3 网关，在中国国内成本不到 60 元人民币。

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [Description](https://github.com/cyijun/OpenZ3Gateway)
- [Tindie](https://www.tindie.com/products/cyijun/openz3gateway/)

<img src="/images/openz3gateway.jpg" width="200" />
:::

::: details XGG 52PZ2MGateway

一款基于 ESP8266 和 CC2652P 模块的开源 Zstack3 网关，在中国国内成本不到 60 元人民币。

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [Description](https://shop68536829.taobao.com/)
- [Buy](https://shop68536829.taobao.com/)

<img src="/images/CC2652P-Z2M.jpg" width="200" />
:::

::: details SMLIGHT Zigbee LAN Adapter CC2652P Model SLZB-05

出厂预刷固件、开箱即用的 Zigbee LAN CC2652P 适配器，工厂原装、金属外壳、6dB 天线、支持全球发货，可通过 USB 分 5 个简单步骤手动更新 Zigbee 固件，提供客户/技术支持，订单处理迅速。

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_other_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_other_router_20250403.zip)
- [Description](https://smartlight.me/smart-home-devices/zigbee-devices/smlight-zigbee-lan-adapter-slzb-05en)
- Buy: [eBay](https://www.ebay.com/itm/165178757770) [官方商店](https://smartlight.me/smart-home-devices/zigbee-devices/smlight-zigbee-lan-adapter-slzb-05en) [Telegram](https://t.me/smartlightme)

<img src="https://smartlight.me/ebay/images/slzb_05/smartlight-zigbee-lan-slzb-05.jpg" width="200" />
:::

### 混合型（USB + 网络）

::: details Gio-dot Z-Bee Duo with CC2652P

四合一 zigbee 适配器：USB 加密狗、WiFi、LAN、Pi Zero HAT，带外置天线和 3D 打印外壳。

- [Description](https://gio-dot.github.io/Z-Bee-Duo/)
- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_other_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/blob/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_other_router_20250403.zip)
- [Vendor flashing instructions](https://gio-dot.github.io/Z-Bee-Duo/Firmware-upgrade)
- [Buy](https://www.tindie.com/products/gio_dot/z-bee-duo-modular-cc2652p-zigbee-30-adapter/)

<img src="/images/Z-Bee_Duo-ico.jpg" width="200" />
:::

::: details ZigStar LAN Coordinator

强大的基于 CC2652P、带外置天线的开源 LAN 协调器

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [Description](https://zig-star.com/projects/zigbee-gw-lan/)
- [Vendor flashing instructions](https://zig-star.com/radio-docs/flash-cc-bsl/)
- [Buy](https://zig-star.com) [Tindie](https://www.tindie.com/products/zigstar/zigstar-lan-gateway/)

<img src="/images/ZigStar-LAN.png" width="200" />
:::

::: details ZigStar PoE Coordinator

开源的基于 CC2652P、带外置天线的 PoE af 协调器

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [Description](https://zig-star.com/projects/zigstar-olizig/)
- [Vendor flashing instructions](https://zig-star.com/radio-docs/zigstar-multi-tool/)
- [Buy](https://zig-star.com) [Tindie](https://www.tindie.com/products/zigstar/zigstar-olizig-poe/)

<img src="/images/ZigStar-PoE.png" width="200" />
:::

::: details SMLIGHT SLZB-06 Zigbee+Matter/Thread+Bluetooth Ethernet USB POE WiFi LAN adapter

强大、小巧、设计现代，专为 Zigbee2MQTT 开发，支持 PoE，出厂预刷固件、开箱即用的 Zigbee 适配器。  
支持 **Zigbee 3.0**、实验性的 **Matter-over-Thread** 以及 **Bluetooth**。连接方式：以太网（+PoE）、LAN、USB 和 WiFi。包装内容丰富，包括：

| Package includes |                                              SLZB-06 adapter                                              |                                             +5dB antenna 360°                                             |                                               Adhesive tape                                                |                                                  Screws                                                  |                                                  Screwdriver                                                  |                                              MicroUSB-Type-C                                               |                                           Screw-fix helper                                           |
| :--------------- | :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: |
| Quantity:        |                                                   1 pcs                                                   |                                                   1 pcs                                                   |                                                   2 pcs                                                    |                                                  2 pcs                                                   |                                                     1 pcs                                                     |                                                   1 pcs                                                    |                                                1 pcs                                                 |
| Image            | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-adapter.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-antenna.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-adhesive.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-screws.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-screwdriver.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-microusb.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-qr.jpg" width="200" /> |

支持远程更新（Zigbee 和核心系统），现代化 UI 固件。以太网具备光电隔离，配有指示灯和物理按键供用户交互，适用于家庭和商业场景。

- Zigbee firmware:  
  -- [Zigbee chip update process OTA](https://smlight.tech/manual/slzb-06/guide/flashing-and-updating/updating-zigbee.html#zigbee-auto-update-over-the-web-interface-recommended)，用于自动更新。
  -- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_other_coordinator_20250321.zip)
- Core firmware:  
  -- [Functionality and screenshots](https://smlight.tech/manual/slzb-06/guide/configuration/)  
  -- [Video review 1](https://www.youtube.com/watch?v=WwYVRuVpAJI), [Video review 2](https://www.youtube.com/watch?v=q3cWHQ8CdcA)
- [Manual](https://smlight.tech/manual/slzb-06/)
- [Product page](https://smlight.tech/product/slzb-06/)
- Buy: [Official Store - Worldwide](https://smartlight.me/smart-home-devices/zigbee-devices/smlight-slzb-06en), [Aliexpress - Worldwide](https://www.aliexpress.com/item/1005004942648430.html), [Tindie - Worldwide](https://www.tindie.com/products/smartlightme/smlight-slzb-06-zigbee-ethernet-poe-usb-wifi-adapt/)。  
  Local fast delivery: [AU](https://shop.dialedin.com.au/products/smlight-slzb-06-zigbee-adapter), [AT](https://www.hobbyelectronica.nl/product/slzb-06-zigbee-ethernet-poe-usb-adapter/), [BE](https://www.hobbyelectronica.nl/product/slzb-06-zigbee-ethernet-poe-usb-adapter/), [CH](https://shop.swiss-domotique.ch/de/gateways-antennen/2387-smlight-zigbee-ethernet-poe-usb-wifi-adapter-slzb-06.html), [EE](https://improveit.lt/produktas/smlight-slzb-06-zigbee-ethernet-poe-usb-lan-wifi-adapteris/), [FR](https://www.domadoo.fr/fr/box-domotique/7042-smlight-adaptateur-usb-ethernet-poe-zigbee-30-cc2652p-zigbee2mqtt-et-zha.html), [DE](https://www.hobbyelectronica.nl/product/slzb-06-zigbee-ethernet-poe-usb-adapter/), [LT](https://improveit.lt/produktas/smlight-slzb-06-zigbee-ethernet-poe-usb-lan-wifi-adapteris/), [LV](https://improveit.lt/produktas/smlight-slzb-06-zigbee-ethernet-poe-usb-lan-wifi-adapteris/), [PL](https://pcblab.io/slzb-06-adapter-zigbee-cc2652p-ethernet-poe-usb-lan-wifi.html), [TH](https://shopee.co.th/Zigbee-SLZB-06-LAN-POE-USB-WIFI-Hybrid-Coordinator-CC2652P-SMARTLIGHT-SLZB-06-HASS-Zigbee2mqtt-ZHA-CC2652-CC2531-i.25068823.21062349644), [UK](https://zigbeesmart.co.uk/products/zigbee-lan-poe-coordinator-smlight-slzb-06), [US official](https://cloudfree.shop/product/smlight-zigbee-ethernet-adapter/), [US Amazon](https://www.amazon.com/SMLIGHT-SLZB-06-Ethernet-Zigbee2MQTT-Assistant/dp/B0BL6DQSB3)。

|                                               Product picture                                                |                                              Interface screenshot                                               |                                                                            Youtube review                                                                             |
| :----------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-main-title.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-main-firmware.jpg" width="200" /> | [<img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-main-videolink-small.jpg" width="200" />](https://www.youtube.com/watch?v=q3cWHQ8CdcA) |

:::

::: details ZigStar UZG-01 - Universal Zigbee Gateway

开源的基于 CC2652P、带外置天线的 PoE af 协调器

- [ESP32 Firmware](https://github.com/mercenaruss/uzg-firmware) 最新固件仓库
- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P7_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/)
- [Official site](https://uzg.zig-star.com) 提供相关文档
- [Vendor flashing instructions](https://uzg.zig-star.com/flashing-and-updating/)
- Buy: [官方商店](https://uzg.zig-star.com),[Tindie](https://www.tindie.com/stores/zigstar/),[Elecrow](https://www.elecrow.com/zigstar-uzg-01-universal-zigbee-gateway.html)

|                    ZigStar UZG-01                     |                      Dimensions                       |
| :---------------------------------------------------: | :---------------------------------------------------: |
| <img src="/images/Zigstar-UZG01-1.png" width="200" /> | <img src="/images/Zigstar-UZG01-2.png" width="200" /> |

:::

::: details SMLIGHT SLZB-06p7 Zigbee Ethernet USB POE WiFi LAN adapter

强大、小巧、设计现代，专为 Zigbee2MQTT 开发，支持 PoE，出厂预刷固件、开箱即用的 Zigbee 适配器。  
支持 Zigbee 3.0、以太网、LAN、USB 和 WiFi 连接。包装内容丰富，包括：

| Package includes |                                              SLZB-06p7 adapter                                              |                                             +5dB antenna 360°                                             |                                               Adhesive tape                                                |                                                  Screws                                                  |                                                  Screwdriver                                                  |                                              MicroUSB-Type-C                                               |                                           Screw-fix helper                                           |
| :--------------- | :---------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: |
| Quantity:        |                                                    1 pcs                                                    |                                                   1 pcs                                                   |                                                   2 pcs                                                    |                                                  2 pcs                                                   |                                                     1 pcs                                                     |                                                   1 pcs                                                    |                                                1 pcs                                                 |
| Image            | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06p7-adapter.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-antenna.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-adhesive.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-screws.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-screwdriver.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-microusb.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-qr.jpg" width="200" /> |

支持远程更新（Zigbee 和核心系统），现代化 UI 固件。以太网具备光电隔离，配有指示灯和物理按键供用户交互，适用于家庭和商业场景。

- Zigbee firmware:  
  -- [Zigbee chip update process OTA](https://smlight.tech/manual/slzb-06/guide/flashing-and-updating/updating-zigbee.html#zigbee-auto-update-over-the-web-interface-recommended)，用于自动更新。  
  -- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P7_coordinator_20250321.zip)
- Core firmware:  
  -- [Functionality and screenshots](https://smlight.tech/manual/slzb-06/guide/configuration/)  
  -- [Video review](https://www.youtube.com/watch?v=q3cWHQ8CdcA)
- [Manual](https://smlight.tech/manual/slzb-06/)
- [Product page](https://smlight.tech/product/slzb-06p7/)
- Buy: [Official Store - Worldwide](https://smartlight.me/smart-home-devices/zigbee-devices/coordinator-slzb-06p7), [Aliexpress - Worldwide](https://www.aliexpress.com/item/1005004942648430.html)。  
  Local fast delivery: [AU](https://shop.dialedin.com.au/products/smlight-slzb-06p7-zigbee-adapter), [AT](https://www.hobbyelectronica.nl/product/slzb-06p7-zigbee-ethernet-poe-usb-adapter/), [BE](https://www.hobbyelectronica.nl/product/slzb-06p7-zigbee-ethernet-poe-usb-adapter/), [DE](https://www.hobbyelectronica.nl/product/slzb-06p7-zigbee-ethernet-poe-usb-adapter/), [PL](https://pcblab.io/slzb-06p7-adapter-zigbee-cc2652p7-ethernet-poe-usb-lan-wifi.html)。

|                                                Product picture                                                 |                                               Interface screenshot                                                |                                                                          Youtube videoreview                                                                          |
| :------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06p7-main-title.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06p7-main-firmware.jpg" width="200" /> | [<img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-main-videolink-small.jpg" width="200" />](https://www.youtube.com/watch?v=q3cWHQ8CdcA) |

:::

::: details cod.m Zigbee Coordinator CC2652P7 (CZC-1.0)

cod.m Zigbee Coordinator（CZC）——网络连接（LAN/Wi-Fi），可选以太网供电（PoE）或 USB-C 供电。

Features:

- CC2652P7 Texas Instruments 多协议 2.4GHz 射频模块
- Zigbee 3.x，Z-Stack firmware（Koenkk）
- LAN、WLAN 或 USB 模式，支持 PoE（802.3af）或 USB-C 供电，功耗 <1W
- ESP32 开源固件（[cod.m UZG Fork](https://github.com/codm/czc-firmware/releases)）
- 支持通过网络更新 Zigbee 固件，未来将支持通过网页界面更新
- 支持通过网页界面或 USB-C（Auto-BSL）更新 ESP32 固件
- [3D-printed housing (CC-BY-NC-SA)](https://www.printables.com/de/model/857864-codm-zigbee-coordinator-cases-czc-10)
- 德国制造，符合 CE、RoHS、WEEE 认证

Links:

- [ESP32 firmware](https://github.com/codm/czc-firmware/releases)
- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P7_coordinator_20250321.zip)
- [Documentation](https://docs.codm.de/en/zigbee/coordinator/)
- [Buy](https://shop.codm.de/en/automation/zigbee/40/zigbee-coordinator-cc2652p7-PoE)

<img src="/images/codm-cc2652p7-zigbee-coordinator.jpg" width="200" /> <img src="/images/codm-cc2652p7-zigbee-coordinator-schematic.png" width="200" />

:::

::: details SMLIGHT SLZB-MR1 MultiRadio Zigbee+Matter-over-Thread Ethernet USB POE WiFi LAN adapter

SLZB-MR1 是一款紧凑型多射频智能家居适配器，搭载 CC2652P7、EFR32MG21 和 ESP32 芯片，可在不同 SoC 上同时支持 Zigbee 3.0 与 Matter-over-Thread。它可通过以太网、Wi-Fi 或 USB 连接，并支持 PoE，便于灵活的远程部署。其多 SoC 架构确保了高性能，并与 Home Assistant、Zigbee2MQTT 等平台完全兼容。由 SLZB-OS 驱动，支持 OTA 固件更新、VPN、HA 集成、20 多种语言、IPv6、以太网转 Wi-Fi 桥接等功能。

|                                 Product picture                                 |                                Interface screenshot                                |                                                      Youtube videoreview                                                      |
| :-----------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
| <img src="/images/adapters/SMLIGHT/SLZB-MR1/slzb-mr1-device.jpg" width="200" /> | <img src="/images/adapters/SMLIGHT/SLZB-MR1/slzb-mr1-interface.jpg" width="200" /> | [<img src="/images/adapters/SMLIGHT/Common/slzb-mrx-youtube.jpg" width="200" />](https://www.youtube.com/watch?v=_ER3Hnij1l0) |

- [Product page](https://smlight.tech/product/slzb-mr1/)
- Buy: [Authorized Store - Worldwide](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-mr1-multiradio-coordinator), [Aliexpress - Worldwide](https://www.aliexpress.com/item/1005004942648430.html)。  
  Local fast delivery: [AU](https://shop.dialedin.com.au/products/slzb-mr1-zigbee-and-thread-adapter), [AT](https://www.hobbyelectronica.nl/product/slzb-mr1-zigbee-ethernet-poe-usb-adapter/), [CZ](https://www.homebrainz.shop/de/p/smlight-slzb-mr1?srsltid=AfmBOorf9TiY1ZBQD7a7hUwDemKbCFsH_dv8ru9uDCT5yoq19AlyHy6z), [FR+EU](https://www.domadoo.fr/de/smart-home-produkte/7773-smlight-slzb-mr1-usb-ethernet-poe-zigbee-thread-matter-adapter.html), [BE](https://www.hobbyelectronica.nl/product/slzb-mr1-zigbee-ethernet-poe-usb-adapter/), [DE](https://mediarath.de/en/products/smlight-slzb-mr1-zigbee-thread-multiradio-cc2652p7-efr32mg21-lan-poe-usb-wifi-adapter), [NL](https://www.hobbyelectronica.nl/product/slzb-mr1-zigbee-ethernet-poe-usb-adapter/), [PL](https://pcblab.io/koordynator-slzb-mr1-multiradio-zigbee-thread.html), [SE](https://www.lohelectronics.se/hemautomation/zigbee/controllers-1473/smlight-slzb-mr1-zigbee-3-0-lan-gateway-med-poe-och-z2m), [CH](https://www.swiss-domotique.ch/en/gateways-antennas/2752-smlight-slzb-06-adaptateur-zigbee-ethernet-poe-usb-wifi-2.html), [FI](https://verkkokauppa.nurkantakaa.fi/tuote/smlight-slzb-mr1/), [UK](https://zigbeesmart.com/de-de/products/zigbee-lan-poe-coordinator-smlight-slzb-mr1-multiradio), [US](https://cloudfree.shop/product/smlight-slzb-mr1-zigbee-thread/),

:::

::: details SMLIGHT SLZB-MR2 MultiRadio Zigbee+Matter-over-Thread Ethernet USB POE WiFi LAN adapter

SLZB-MR2 是一款紧凑型多射频智能家居适配器，搭载 CC2652P、EFR32MG21 和 ESP32 芯片，可在不同 SoC 上同时支持 Zigbee 3.0 与 Matter-over-Thread。它可通过以太网、Wi-Fi 或 USB 连接，并支持 PoE，便于灵活的远程部署。其多 SoC 架构确保了高性能，并与 Home Assistant、Zigbee2MQTT 等平台完全兼容。由 SLZB-OS 驱动，支持 OTA 固件更新、VPN、HA 集成、20 多种语言、IPv6、以太网转 Wi-Fi 桥接等功能。

|                                 Product picture                                 |                                Interface screenshot                                |                                                      Youtube videoreview                                                      |
| :-----------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
| <img src="/images/adapters/SMLIGHT/SLZB-MR2/slzb-mr2-device.jpg" width="200" /> | <img src="/images/adapters/SMLIGHT/SLZB-MR2/slzb-mr2-interface.jpg" width="200" /> | [<img src="/images/adapters/SMLIGHT/Common/slzb-mrx-youtube.jpg" width="200" />](https://www.youtube.com/watch?v=_ER3Hnij1l0) |

- [Product page](https://smlight.tech/product/slzb-mr2/)
- Buy: [Authorized Store - Worldwide](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-mr2-multiradio-adapter), [Aliexpress - Worldwide](https://www.aliexpress.com/item/1005004942648430.html), [Aliexpress-2 - Worldwide](https://www.aliexpress.com/item/1005008814854495.html)。
  Local fast delivery: [AU](https://shop.dialedin.com.au/products/slzb-mr2-zigbee-and-thread-adapter),

:::

::: details SMLIGHT SLZB-MR3 MultiRadio Zigbee+Matter-over-Thread Ethernet USB POE WiFi LAN adapter

SLZB-MR3 是一款紧凑型多射频智能家居适配器，搭载 CC2674P10、EFR32MG24 和 ESP32 芯片，可在不同 SoC 上同时支持 Zigbee 3.0 与 Matter-over-Thread。它可通过以太网、Wi-Fi 或 USB 连接，并支持 PoE，便于灵活的远程部署。其多 SoC 架构确保了高性能，并与 Home Assistant、Zigbee2MQTT 等平台完全兼容。由 SLZB-OS 驱动，支持 OTA 固件更新、VPN、HA 集成、20 多种语言、IPv6、以太网转 Wi-Fi 桥接等功能。

|                                 Product picture                                 |                                Interface screenshot                                |                                                      Youtube videoreview                                                      |
| :-----------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
| <img src="/images/adapters/SMLIGHT/SLZB-MR3/slzb-mr3-device.jpg" width="200" /> | <img src="/images/adapters/SMLIGHT/SLZB-MR3/slzb-mr3-interface.jpg" width="200" /> | [<img src="/images/adapters/SMLIGHT/Common/slzb-mrx-youtube.jpg" width="200" />](https://www.youtube.com/watch?v=_ER3Hnij1l0) |

- [Product page](https://smlight.tech/product/slzb-mr3/)
- Buy: [Authorized Store - Worldwide](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-mr3-multiradio-adapter), [Aliexpress - Worldwide](https://www.aliexpress.com/item/1005004942648430.html), [Aliexpress-2 - Worldwide](https://www.aliexpress.com/item/1005008814854495.html)。  
  Local fast delivery: [AU](https://shop.dialedin.com.au/products/slzb-mr3-zigbee-and-thread-adapter),

:::

::: details SMLIGHT SLZB-Ultima - Multi-radio gateway for Zigbee, Thread, Z-Wave, 4G/LTE, IR, Ethernet/Wi-Fi, Voice

**SLZB-Ultima 系列**是一款多射频智能家居网关，专为高级 Zigbee2MQTT 及多协议部署场景设计。

**主要特性**：

- **双 IEEE 802.15.4 射频（Zigbee + Thread）：**
-   - **CC2674P10** —— 支持并行运行 **Zigbee 协调器/路由器** 或 **Thread 边界路由器（Border Router）**
-   - **EFR32MG24** —— 支持并行运行 **Zigbee 协调器/路由器** 或 **Thread 边界路由器（Border Router）**
- **Z-Wave** _（可选附加模块）_ —— 增加对 Z-Wave 网络的支持（通过以太网运行 Z-Wave JS）。
- **4G/LTE** _（可选附加模块）_ —— 为没有有线以太网或 Wi-Fi 的场所提供移动网络连接，或作为备用 WAN。
- **连接方式：** 以太网 + Wi-Fi + USB（Type-C）
- **通过以太网实现 USB 直通：** 将 USB 设备（存在一定限制）插入 SLZB-Ultima，即可通过网络使用该 USB 设备
- **供电：** USB-C（默认），**PoE** _（可选附加模块）_ —— 通过一根网线为设备供电，实现简洁、专业的安装。
- **红外接收器 + 红外发射器：** 可学习并控制电视、空调、音视频设备等红外设备。
- **本地反馈与交互：** 蜂鸣器、**12 颗 WS2812B RGB LED**、按键、指示灯
- **数字麦克风** _（可选附加模块）_ —— 在运行基于 ESPHome 的固件时支持音频输入。

专为与 Home Assistant 和 Zigbee2MQTT 配合的**本地化、不依赖云端**运行而设计。

|                                     Product functions                                     |                                 Porduct photo                                  |                               Interface screenshot                                |
| :---------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: |
| <img src="/images/adapters/SMLIGHT/SLZB-Ultima/slzb-ultima-functions.png" width=" 200" /> | <img src="/images/adapters/SMLIGHT/SLZB-Ultima/slzb-ultima.jpg" width="200" /> | <img src="/images/adapters/SMLIGHT/SLZB-Ultima/slzb-ultima-fw.jpg" width="200" /> |

- [Product page](https://smlight.tech/global/slzb-ultima)
- Buy: [Authorized Store - Worldwide](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-ultima), [Aliexpress-1 - Worldwide](https://www.aliexpress.com/item/1005010752270531.html), [Aliexpress-2 - Worldwide](https://www.aliexpress.com/item/1005010752555288.html)。

:::

### 集线器

::: details SMLIGHT SMHUB (Essential/Premium variants)

SMHUB 是一款基于 Linux 的多射频智能家居集线器，拥有精美的 UI，可直接在设备上运行 Zigbee2MQTT，无需外部服务器。它还预装了 Mosquitto MQTT 代理、Node-RED 和 Matterbridge，开箱即是一套完整的智能家居网关。SMHUB 集成了 TI SoC（Essential 版为 CC2652P，Premium 版为 CC2674P10）和 SL SoC（Essential 版为 EFR32MG21，Premium 版为 EFR32MG24），并具备以太网、Wi-Fi、USB，以及可选的 Z-Wave 射频、PoE 和 4G 连接能力。硬件特性包括 12 颗 RGB LED、红外接收/发射器、音频、SD 卡、eMMC 以及多个 USB 接口。通过 SMHUB-OS 提供 OTA 更新、VPN 等功能，为任何生态系统提供强大且面向未来的平台。

|                            Product picture                             |                         Interface screenshot                          |                                            Youtube videoreview                                             |
| :--------------------------------------------------------------------: | :-------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: |
| <img src="/images/adapters/SMLIGHT/SMHUB/smhub_21.jpg" width=" 200" /> | <img src="/images/adapters/SMLIGHT/SMHUB/smhub-os.jpg" width="200" /> | [<img src="/images/adapters/SMLIGHT/SMHUB/smhub-youtube.jpg" width="200" />](https://youtu.be/xQsIt4yYxdw) |

- [Product page](https://smlight.tech/global/smhub)
- [Manual](https://smlight.tech/support/manuals/books/smhub)
- Buy: [Authorized Store - Worldwide](https://smartlight.me/smart-home-devices/zigbee-devices/smhub-professional), [Aliexpress-1 - Worldwide](https://aliexpress.com/item/1005009942560775.html), [Aliexpress-2 - Worldwide](https://aliexpress.com/item/1005009942491630.html)。

:::

::: details JetHome JetHub D1+

内置 Zigbee 模块并带外置天线的控制器。

JetHub D1+ 是一款导轨式（DIN-rail）家庭自动化控制器，运行 Ubuntu/Debian 系统，配备大量外设接口。

基于 TI CC2652P1。

- [Documentation](https://docs.jethome.ru/en/controllers/linux/din_rail/d1p.html)
- [Buy](https://jethome.ru/d1p/)

<img src="/images/jethub_d1_full.png" width="200" />
:::

### 定制类

::: details cod.m Zigbee CC2652P RPi Module

带 CC2652P 及集成功率放大器（+20dBm）的 Raspberry Pi GPIO 模块

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [Vendor flashing instructions](https://github.com/codm/cc2652-raspberry-pi-module#firmware)
- [Buy](https://shop.codm.de/automation/zigbee/33/zigbee-cc2652p2-raspberry-pi-module)

<img src="/images/codm-cc2652p-rpi.jpg" width="200" />
:::

::: details ZigStar ZigiHAT PoE

强大的基于 CC2652P 的开源 Pi HAT，板载 PoE 和 RTC

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [Description](https://zig-star.com/projects/zigbee-zigihat/)
- [Vendor flashing instructions](https://zig-star.com/projects/zigbee-zigihat/#flashing)
- [Buy](https://zig-star.com)

<img src="/images/ZigiHAT.png" width="200" />
:::

::: details Texas Instruments LAUNCHXL-CC1352P-2

基于 CC1352P 芯片的 USB 接口开发套件  
此类设备内置两个串行设备。请确保在[配置](../configuration/)中填入正确的串行设备；如果你的系统只连接了一个 Texas Instruments CC 设备，也可以使用自动检测（从 `configuration.yaml` 中完全删除 `serial` 部分）。  
可连接外置天线以增加信号范围：[需要重新焊接一个微小电容（将 C14 移至 C24）](http://e2e.ti.com/support/wireless-connectivity/zigbee-and-thread/f/158/t/880219?LAUNCHXL-CC26X2R1-Antenna-CC26X2R1)

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [Vendor flashing instructions](./flashing/flashing_via_uniflash.md)
- [Buy](http://www.ti.com/tool/LAUNCHXL-CC1352P)

<img src="/images/cc1352p2.jpg" width="200" />
:::

::: details Texas Instruments LAUNCHXL-CC26X2R1

基于 CC2652R 芯片的 USB 接口开发套件  
此类设备内置两个串行设备。请确保在[配置](../configuration/)中填入正确的串行设备；如果你的系统只连接了一个 Texas Instruments CC 设备，也可以使用自动检测（从 `configuration.yaml` 中完全删除 `serial` 部分）。  
可连接外置天线以增加信号范围：[需要重新焊接一个微小电容](https://github.com/Koenkk/zigbee2mqtt/issues/2162#issuecomment-570286663)

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC2652R_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC2652R_router_20250403.zip)
- [Vendor flashing instructions](./flashing/flashing_via_uniflash.md)
- [Buy](http://www.ti.com/tool/LAUNCHXL-CC26X2R1)

<img src="/images/cc26x2r1.jpg" width="200" />
:::

::: details Texas Instruments LP-CC2652R7

基于 CC2652R7 芯片的 USB 接口开发套件  
此类设备内置两个串行设备。请确保在[配置](../configuration/)中填入正确的串行设备；如果你的系统只连接了一个 Texas Instruments CC 设备，也可以使用自动检测（从 `configuration.yaml` 中完全删除 `serial` 部分）。

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC2652R7_coordinator_20250321.zip)
- [Vendor flashing instructions](./flashing/flashing_via_uniflash.md)
- [Buy](http://www.ti.com/tool/LP-CC2652R7)

<img src="/images/CC2652R7.png" width="200" />
:::

::: details Texas Instruments LP-CC1352P7

基于 CC1352P7 芯片的 USB 接口开发套件  
此类设备内置两个串行设备。请确保在[配置](../configuration/)中填入正确的串行设备；如果你的系统只连接了一个 Texas Instruments CC 设备，也可以使用自动检测（从 `configuration.yaml` 中完全删除 `serial` 部分）。

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P7_coordinator_20250321.zip)
- [Vendor flashing instructions](./flashing/flashing_via_uniflash.md)
- [Buy](https://www.ti.com/tool/LP-CC1352P7)

<img src="/images/LP-CC1352P7.jpg" width="200" />
:::

### 不推荐

::: details Texas Instruments CC2531

带 PCB 天线的 USB 接口 Zigbee 适配器  
**警告 1：** 刷写需要额外的硬件（CC debugger + 下载线）  
**警告 2：** 性能可能不足以支撑 20 个以上设备的网络  
**警告 3：** 该适配器信号范围较差

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_Home_1.2/bin)
- [Flashing instructions](./flashing/flashing_the_cc2531.md)
- [Buy](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20191108075039&SearchText=cc2531)

<img src="/images/cc2531.jpg" width="200" />
:::

::: details Vision CC2538+CC2592 Dongle(VS203)

基于 CC2538 和 CC2592 芯片的适配器或小型开发板

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)
- [Flashing instructions](https://www.aliexpress.com/item/1005002809329614.html?spm=a2g0o.store_pc_allProduct.8148356.2.4d7f1012TTc3uX)
- [Buy](https://www.aliexpress.com/item/1005002809329614.html?spm=a2g0o.store_pc_allProduct.8148356.2.4d7f1012TTc3uX)

<img src="/images/cc2538_cc2592_dongle.jpg" width="200" />
:::

::: details Texas Instruments CC2530

带外置天线的串口适配器，可选配 CC2591 或 CC2592 射频前端  
**警告 1：** 刷写需要额外的硬件（CC debugger + 下载线）  
**警告 2：** 性能可能不足以支撑 20 个以上设备的网络

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_Home_1.2/bin)
- [Flashing instructions](../../advanced/zigbee/05_create_a_cc2530_router.md#2-flashing-the-cc2530)
- [Connecting](./flashing/connecting_cc2530.md)
- Buy: [AliExpress](http://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20181213104041&SearchText=cc2530) [GBAN](http://www.gban.cn/en/product_show.asp?id=43) [Tindie](https://www.tindie.com/products/GiovanniCas/cc2530-cc2592-zigbee-dongle/)

<img src="/images/cc2530.jpg" width="200" />
:::

::: details Texas Instruments CC2538

带 CC2592 射频放大器的串口适配器

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)
- [Flashing instructions](./flashing/flashing_the_cc2538.md)
- Buy: [AliExpress](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20191108075039&SearchText=cc2538)

<img src="/images/cc2538.jpg" width="200" />
:::

::: details XGG gateway

一款基于 ESP8266 的开源 zigbee 网关，配备 CC2538+CC2592PA（XGG 38PZ2MGateway）或 CC2530（XGG 30Z2MGateway）  
Coordinator firmware: [XGG 38PZ2MGateway](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin) [XGG 30Z2MGateway](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin)

- [Contact](https://shop68536829.taobao.com/)

<img src="/images/CC2652P-Z2M.jpg" width="200" />
:::

::: details Texas Instruments CC2538 HAT

兼容 Raspberry Pi 引脚布局的 HAT，配备 CC2538，可选外置天线

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)
- [Flashing instructions](./flashing/flashing_the_cc2538.md)
- [Buy](https://www.tindie.com/products/GiovanniCas/zigbee-hat-with-cc2538-for-raspberry/)

<img src="/images/cc2538hat.jpg" width="200" />
:::
