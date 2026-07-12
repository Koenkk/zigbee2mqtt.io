# EmberZNet 适配器（Silicon Labs）

当前支持的固件版本：7.4.x、8.0.x、8.1.x、8.2.x

固件发布说明：[https://www.silabs.com/developers/zigbee-emberznet?tab=documentation](https://www.silabs.com/developers/zigbee-emberznet?tab=documentation)

_不支持多协议固件。若需建立多个网络，推荐的替代方案是每个协议使用一个独立的适配器。_

### 配置

```yaml
serial:
    adapter: ember
```

其他支持的设置有：`adapter_concurrent` 和 `transmit_power`（[文档](../configuration/adapter-settings.md)）。

::: tip 提示
`adapter: ezsp` 现已弃用。参见 [https://github.com/Koenkk/zigbee2mqtt/discussions/21462](https://github.com/Koenkk/zigbee2mqtt/discussions/21462)
:::

### 固件刷写

- 固件仓库：
    - [@darkxst](https://github.com/darkxst/) 提供的多设备固件：[https://github.com/darkxst/silabs-firmware-builder/releases](https://github.com/darkxst/silabs-firmware-builder/releases)
    - [@NabuCasa](https://github.com/NabuCasa) / Home Assistant 设备：[https://github.com/NabuCasa/silabs-firmware-builder/releases](https://github.com/NabuCasa/silabs-firmware-builder/releases)
    - [@TubesZB](https://github.com/tube0013) 设备：[https://github.com/tube0013/tube_gateways/](https://github.com/tube0013/tube_gateways/)
    - [@Nerivec](https://github.com/Nerivec/) 提供的多设备固件：[https://github.com/Nerivec/silabs-firmware-builder/releases](https://github.com/Nerivec/silabs-firmware-builder/releases)
        - 同时提供路由器固件
- 基于网页
    - 多设备：[XZG Multi-tool](https://mt.xyzroe.cc/)
    - [@darkxst](https://github.com/darkxst/) 提供的多设备工具：[Silabs Firmware Flasher](https://darkxst.github.io/silabs-firmware-builder/)
    - 适用于 ZBT-1/ZBT-2，由 [@NabuCasa](https://github.com/NabuCasa) 提供：[ZBT Flasher](https://toolbox.openhomefoundation.org/)
    - SMLight：[Flasher](https://smlight.tech/flasher/)
    - 适用于 SONOFF Dongle：[SONOFF Dongle Flasher](https://dongle.sonoff.tech/sonoff-dongle-flasher/)
- 基于命令行：
    - [@NabuCasa](https://github.com/NabuCasa) 使用 Python 编写的多设备工具：[Universal Silicon Labs Flasher](https://github.com/NabuCasa/universal-silabs-flasher)（也可通过 [Home Assistant 插件](https://github.com/home-assistant/addons/tree/master/silabs_flasher) 使用）
    - [@Nerivec](https://github.com/Nerivec/) 使用 NodeJS 编写的多设备工具：[Ember ZLI](https://github.com/Nerivec/ember-zli)
- Home Assistant 插件
    - [XZG Multi-Tool](https://github.com/xyzroe/XZG-MT)
        - 桥接插件，可与远程串口、USB 和 TCP 设备进行完整交互。
    - [SONOFF Dongle Flasher](https://dongle.sonoff.tech/guide/dongle-lmg21/flash-firmware-via-home-assistant-add-on/)
- 其他：
    - 独立的 J-Link 刷写工具（也包含在 [Simplicity Studio](https://www.silabs.com/developers/simplicity-studio) 中）：[Simplicity Commander](https://www.silabs.com/developers/simplicity-studio/simplicity-commander)
- 部分以太网适配器支持通过自带的网页界面刷写 Zigbee 固件。这种情况下你不需要任何外部软件或硬件，只需进入网页界面并点击“Update Zigbee firmware”（更新 Zigbee 固件）即可。具体操作请参考你所使用的 Zigbee 适配器的说明手册。

## 硬件

每个分类均按芯片排序，较新的系列排在前面。

### USB

::: details Home Assistant Connect ZBT-2

芯片：[EFR32MG24A420F1536IM40](https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-socs/device.EFR32MG24A420F1536IM40?tab=specs)

配备外接天线，并支持硬件流控。请确保将波特率设置为 460800。

```yaml
serial:
    baudrate: 460800
    rtscts: true
```

- [产品页面](https://www.home-assistant.io/connect/zbt-2)
- [协调器固件](https://github.com/NabuCasa/silabs-firmware-builder/releases)
- [刷写方法](https://toolbox.openhomefoundation.org/home-assistant-connect-zbt-2)
- [购买](https://www.home-assistant.io/connect/zbt-2)

<img src="/images/zbt2.jpg" width="200" />

:::

::: details SONOFF Dongle-PMG24

芯片：[efr32mg24a420f1536im48](https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-socs/device.efr32mg24a420f1536im48?tab=specs)

配备外接天线（+3 dBi）。仅支持软件流控（请确保不要设置 `rtscts: true`）。

- [产品页面](https://sonoff.tech/products/sonoff-zigbee-thread-usb-dongle-dongle-plus-mg24)
- [刷写方法](https://dongle.sonoff.tech/sonoff-dongle-flasher/)
- [硬件规格](https://dongle.sonoff.tech/guide/dongle-pmg24/hardware-specification-dongle-pmg24/)
- [购买](https://sonoff.tech/products/sonoff-zigbee-thread-usb-dongle-dongle-plus-mg24)

<img src="/images/dongle-pmg24-device.jpg" width="200" />

:::

::: details SMLIGHT SLZB-07mg24

芯片：[efr32mg24a020f1024im40](https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-socs/device.efr32mg24a020f1024im40?tab=specs)

配备外接天线，并支持硬件流控。

```yaml
serial:
    rtscts: true
```

- [产品页面](https://smlight.tech/product/slzb-07mg24/)（尚未上线，因此链接暂时无法访问）

<img src="/images/smlight-slzb-07mg24.jpg" width="200" />

:::

::: details Aeotec Zi-Stick (ZGA008)

芯片：[efr32mg21a020f1024im32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f1024im32?tab=specs)

配备板载天线，并支持硬件流控。

```yaml
serial:
    rtscts: true
```

- [产品页面](https://aeotec.com/products/aeotec-z-stick-zigbee/)
- [购买](https://store.aeotec.com/products/zi-stick-zigbee-zga008)

<img src="/images/aeotec-zi-stick-zga008.jpg" width="200" />

:::

::: details Sonoff ZBDongle-E (V2 model)

芯片：[efr32mg21a020f768im32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f768im32?tab=specs)

配备外接天线。仅支持软件流控（请确保不要设置 `rtscts: true`）。

**本节介绍的是“ZBDongle-E”，如需了解“ZBDongle-P”，请参阅 [zStack](./zstack.md)。**

- [产品页面](https://sonoff.tech/product/gateway-and-sensors/sonoff-zigbee-3-0-usb-dongle-plus-e/)
- [协调器固件](https://sonoff.tech/product-review/how-to-use-sonoff-dongle-plus-on-home-assistant-how-to-flash-firmware/)
- [刷写方法](https://sonoff.tech/wp-content/uploads/2022/08/SONOFF-Zigbee-3.0-USB-dongle-plus-firmware-flashing-.pdf)
    - **注意**：该 PDF 中链接的是旧版固件。请查看所有 [NCP_X.Y.Z](https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/tree/master/Dongle-E) 版本，并选择 [7.4.4](https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/tree/master/Dongle-E/NCP_7.4.4) 或更新的版本。
- [购买](https://itead.cc/product/zigbee-3-0-usb-dongle/)

<img src="/images/dongle-e.jpg" width="200" />
:::

::: details SMLIGHT SLZB-07

芯片：[efr32mg21a020f768im32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f768im32?tab=specs)

配备外接天线，并支持硬件流控。

```yaml
serial:
    rtscts: true
```

- [产品页面](https://smlight.tech/product/slzb-07/)
- 购买：[官方商店 - 全球](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-07-zigbee-usb-adapter-en)，[Aliexpress - 全球](https://www.aliexpress.com/item/1005006273914143.html)。  
  本地快速配送：[澳大利亚](https://shop.dialedin.com.au/products/smlight-slzb-07-usb-zigbee-adapter)，[奥地利、比利时、德国、荷兰](https://www.hobbyelectronica.nl/product/slzb-07-zigbee-coordinator-usb/)，[法国](https://www.domadoo.fr/fr/interface-domotique/7044-smlight-dongle-usb-zigbee-efr32mg21-cp2102n-soc-antenne-3db-zigbee2mqtt-et-zha.html)，[波兰](https://pcblab.io/szukaj?controller=search&s=slzb)，[美国 Amazon](https://www.amazon.com/LOAMLIN-SMLIGHT-SLZB-07-Zigbee-Coordinator/dp/B0CNVBCCR3)

<img src="/images/smlight-slzb-07.jpg" width="200" />

:::

::: details Home Assistant Connect ZBT-1

芯片：[efr32mg21a020f512im32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f512im32?tab=specs)

配备板载天线，并支持硬件流控。

```yaml
serial:
    rtscts: true
```

- [产品页面](https://www.home-assistant.io/connectzbt1)
- [协调器固件](https://github.com/NabuCasa/silabs-firmware-builder/releases)
- [刷写方法](https://toolbox.openhomefoundation.org/home-assistant-connect-zbt-1)
- [购买](https://www.home-assistant.io/connectzbt1)

<img src="/images/skyconnect_isometric.jpg" width="200" />

:::

::: details Z-WAVE>ME Z-Station (EFR32MG21P)

配备外接天线。

需要 Z-Station 固件 2024.04.22 或更高版本。

```yaml
serial:
    rtscts: false
```

- [产品页面](https://z-wave.me/products/z-station/)
- [固件](https://z-wave.me/support/tools-for-zigbee-openthread-ble/)
- 购买：[官方商店 - 全球](https://smartsd.ch/z-station-usb-adaptor-for-z-wave-zigbee-thread-ble/)

<img src="/images/z-station.jpg" width="200" />

:::

### 网络（TCP）

::: details TubeZB EFR32 MGM24 POE

芯片：[mgm240pa32vnn](https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-modules/device.mgm240pa32vnn?tab=specs)

配备外接天线。

注意：也可以通过 USB 供电（需搭配特殊外壳）并使用普通网线连接（请勿同时使用 USB 和 POE 供电！）。

- [产品页面](https://tubeszb.com/product/efr32-mgm24-poe-coordinator/)
- [购买](https://tubeszb.com/product/efr32-mgm24-poe-coordinator/)

<img src="/images/tubezb-mgm24-poe.jpg" width="200" />

:::

::: details Zbgw_pro EFR32 LAN

芯片：[efr32mg21a020f768im32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f768im32?tab=specs)

```yaml
serial:
    port: tcp://zbgw_efr32_pro.local:6638
    adapter: ember
```

注意：你也可以使用 TCP 方式连接，地址可以是 `zbgw_efr32_pro.local:6638` 或 `<gateway-ip>:6638`。

- [产品页面](https://shop68536829.taobao.com)
- [购买](https://shop68536829.taobao.com)

<img src="/images/zbgw_pro.jpg" width="200" />

:::

### 混合型（USB + 网络）

::: details SMLIGHT SLZB-Ultima - 面向 Zigbee、Thread、Z-Wave、4G/LTE、红外、以太网/Wi-Fi、语音的多射频网关

**SLZB-Ultima 系列**是一款多射频智能家居网关，专为高级 Zigbee2MQTT 及多协议部署而设计。

**主要特性**：

- **双 IEEE 802.15.4 无线电（Zigbee + Thread）：**
-   - **CC2674P10** - 支持并行运行 **Zigbee 协调器/路由器** 或 **Thread 边界路由器（Border Router）**
-   - **EFR32MG24** - 支持并行运行 **Zigbee 协调器/路由器** 或 **Thread 边界路由器（Border Router）**
- **Z-Wave** _（可选附加模块）_ - 增加对 Z-Wave 网络的支持（通过以太网运行 Z-Wave JS）。
- **4G/LTE** _（可选附加模块）_ - 为没有有线以太网或 Wi-Fi 的场所提供移动网络连接，也可作为备用 WAN。
- **连接方式：** 以太网 + Wi-Fi + USB（Type-C）
- **通过以太网的 USB 直通：** 将 USB 设备（存在一些限制）插入 SLZB-Ultima，即可通过网络使用该 USB 设备
- **供电：** USB-C（默认），**PoE** _（可选附加模块）_ - 通过一根网线为设备供电，实现简洁、专业的安装。
- **红外接收器 + 红外发射器：** 可学习并控制电视、空调、音视频设备等红外设备。
- **本地反馈与交互：** 蜂鸣器、**12 颗 WS2812B RGB LED**、按钮、状态指示灯
- **数字麦克风** _（可选附加模块）_ - 在运行基于 ESPHome 的固件时支持音频输入。

专为与 Home Assistant 和 Zigbee2MQTT 配合，实现**本地化、不依赖云端**的运行而设计。

|                                         产品功能                                          |                                    产品照片                                    |                                     界面截图                                      |
| :---------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: |
| <img src="/images/adapters/SMLIGHT/SLZB-Ultima/slzb-ultima-functions.png" width=" 200" /> | <img src="/images/adapters/SMLIGHT/SLZB-Ultima/slzb-ultima.jpg" width="200" /> | <img src="/images/adapters/SMLIGHT/SLZB-Ultima/slzb-ultima-fw.jpg" width="200" /> |

- [产品页面](https://smlight.tech/global/slzb-ultima)
- 购买：[授权商店 - 全球](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-ultima)，[Aliexpress-1 - 全球](https://www.aliexpress.com/item/1005010752270531.html)，[Aliexpress-2 - 全球](https://www.aliexpress.com/item/1005010752555288.html)。

:::

::: details SMLIGHT SLZB-MR 系列（MR1/MR2/MR3/MR4）多射频 Zigbee + Matter-over-Thread 以太网 USB POE Wi-Fi BLE LAN 适配器

SLZB-MRx 系列是一款紧凑型多射频智能家居适配器，MR4/MR3/MR2/MR1 分别搭载 Silicon Labs **EFR32MG26**/EFR32MG24/EFR32MG21 与 Texas Instruments CC2674P10/CC2652P7/CC2652P（两颗 Zigbee/Thread 无线电芯片），以及 ESP32 芯片，可在不同 SoC 上同时支持 Zigbee 3.0 和 Matter-over-Thread，并配备以太网、Wi-Fi 或 USB 连接方式。设备支持 PoE 供电，便于灵活的远程部署。其多 SoC 架构确保了高性能，并可与 Home Assistant、Zigbee2MQTT 等平台完全兼容。设备搭载 SLZB-OS，支持 OTA 固件更新、VPN、DDNS、WireGuard VPN、HA 集成、20 多种语言、IPv6、以太网转 Wi-Fi 桥接等功能。

| 参数                           |                                                               **SLZB-MR4**                                                               |                                                          **SLZB-MR3**                                                           |                                                                 **SLZB-MR2**                                                                 |                                                         **SLZB-MR1**                                                          |
| :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
| **Zigbee/Thread 无线电 1 SoC** |                                                                EFR32MG26                                                                 |                                                            EFR32MG24                                                            |                                                                  EFR32MG21                                                                   |                                                           EFR32MG21                                                           |
| **Zigbee/Thread 无线电 2 SoC** |                                                                CC2674P10                                                                 |                                                            CC2674P10                                                            |                                                                   CC2652P                                                                    |                                                           CC2652P7                                                            |
| **最大支持 Zigbee 设备数量**   |                                                                  ≈ 800                                                                   |                                                              ≈ 750                                                              |                                                                    ≈ 400                                                                     |                                                             ≈ 500                                                             |
| **产品图片**                   |                             <img src="/images/adapters/SMLIGHT/SLZB-MR4/slzb-mr4-device.jpg" width="150" />                              |                         <img src="/images/adapters/SMLIGHT/SLZB-MR3/slzb-mr3-device.jpg" width="150" />                         |                               <img src="/images/adapters/SMLIGHT/SLZB-MR2/slzb-mr2-device.jpg" width="150" />                                |                        <img src="/images/adapters/SMLIGHT/SLZB-MR1/slzb-mr1-device.jpg" width="150" />                        |
| **网页界面**                   |                                                                                                                                          |                       <img src="/images/adapters/SMLIGHT/SLZB-MR3/slzb-mr3-interface.jpg" width="150" />                        |                              <img src="/images/adapters/SMLIGHT/SLZB-MR2/slzb-mr2-interface.jpg" width="150" />                              |                      <img src="/images/adapters/SMLIGHT/SLZB-MR1/slzb-mr1-interface.jpg" width="150" />                       |
| **Youtube 评测**               | [<img src="/images/adapters/SMLIGHT/Common/slzb-mrx-smarthomeaustralia.jpg" width="150" />](https://www.youtube.com/watch?v=2fYrW38R0Jc) | [<img src="/images/adapters/SMLIGHT/Common/slzb-mrx-mrtimtech.jpg" width="150" />](https://www.youtube.com/watch?v=Oc0PkPVUseE) | [<img src="/images/adapters/SMLIGHT/Common/slzb-mrx-simonsayshomeassistant.jpg" width="150" />](https://www.youtube.com/watch?v=hQnM7l5iwsw) | [<img src="/images/adapters/SMLIGHT/Common/slzb-mrx-youtube.jpg" width="150" />](https://www.youtube.com/watch?v=_ER3Hnij1l0) |
| **产品页面**                   |                                             [SLZB-MR4](https://smlight.tech/global/slzbmr4)                                              |                                         [SLZB-MR3](https://smlight.tech/global/slzbmr3)                                         |                                               [SLZB-MR2](https://smlight.tech/global/slzbmr2)                                                |                                        [SLZB-MR1](https://smlight.tech/global/slzbmr2)                                        |

**SLZB-MR4 购买**：[授权商店 - 全球](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-mr3-multiradio-adapter)，[Aliexpress-1 - 全球](https://www.aliexpress.com/item/1005004942648430.html)，[Aliexpress-2 - 全球](https://www.aliexpress.com/item/1005008814854495.html)。  
本地快速配送：[AU](https://shop.dialedin.com.au/products/slzb-mr3-zigbee-and-thread-adapter)，[CH](https://www.swiss-domotique.ch/en/actuators-modules/smlight-usb-ethernet-poe-adapter-zigbee-and-thread-cc2674p10-efr32mg26)，[FR](https://www.domadoo.fr/fr/produits-de-domotique/8369-smlight-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg26-slzb-mr4.html)，[PL](https://pcblab.io/adapter-slzbmr4-zigbee-thread-cc2674p10-efr32mg26-poe-usb-wifi-esp32-lan.html)，[UK](https://zigbeesmart.com/de-de/products/smlight-slzb-mr4-dual-radio-zigbee-thread-ethernet-coordinator?_pos=6&_sid=04f161c3b&_ss=r)

**SLZB-MR3 购买**：[授权商店 - 全球](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-mr3-multiradio-adapter)，[Aliexpress-1 - 全球](https://www.aliexpress.com/item/1005004942648430.html)，[Aliexpress-2 - 全球](https://www.aliexpress.com/item/1005008814854495.html)。  
本地快速配送：[AU](https://shop.dialedin.com.au/products/slzb-mr3-zigbee-and-thread-adapter)，[CH](https://www.swiss-domotique.ch/en/actuators-modules/smlight-zigbee-poe-ethernet-usb-adapter)，[CZ](https://www.homebrainz.shop/p/smlight-slzb-mr3)，[DE](https://mediarath.de/en/products/smlight-slzb-mr3-zigbee-thread-multiradio-cc2652p10-efr32mg24-lan-poe-usb-wifi-adapter)，[FR](https://www.domadoo.fr/fr/produits-de-domotique/8031-smlight-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg24-slzb-mr3.html)，[PL](https://pcblab.io/multi-adapter-slzb-mr3-zigbee-thread-matter-esp32-cc2674p10-mg24-poe-wifi.html)，[UK](https://zigbeesmart.com/de-de/products/smlight-slzb-mr3-multiradio-coordinator)

**SLZB-MR2 购买**：[授权商店 - 全球](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-mr2-multiradio-adapter)，[Aliexpress-1 - 全球](https://www.aliexpress.com/item/1005004942648430.html)，[Aliexpress-2 - 全球](https://www.aliexpress.com/item/1005008814854495.html)。  
本地快速配送：[AU](https://shop.dialedin.com.au/products/slzb-mr2-zigbee-and-thread-adapter)，[CZ](https://www.homebrainz.shop/p/smlight-slzb-mr2)，[DE](https://mediarath.de/en/products/smlight-slzb-mr2-zigbee-thread-multiradio-cc2652p-efr32mg21-lan-poe-usb-wifi-adapter)，[FR](https://www.domadoo.fr/fr/produits-de-domotique/8030-smlight-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2652p-efr32mg21-slzb-mr2.html)，[PL](https://pcblab.io/adapter-slzb-mr2-zigbee-thread-matter-esp32-cc2652p-efr32mg21-poe-wifi-lan.html)，[UK](https://zigbeesmart.com/de-de/products/zigbee-lan-poe-coordinator-smlight-slzb-mr2-multiradio?_pos=13&_sid=04f161c3b&_ss=r)

**SLZB-MR1 购买**：[授权商店 - 全球](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-mr1-multiradio-coordinator)，[Aliexpress-1 - 全球](https://www.aliexpress.com/item/1005004942648430.html)。  
本地快速配送：[AU](https://shop.dialedin.com.au/products/slzb-mr1-zigbee-and-thread-adapter)，[AT](https://www.hobbyelectronica.nl/product/slzb-mr1-zigbee-ethernet-poe-usb-adapter/)，[CZ](https://www.homebrainz.shop/de/p/smlight-slzb-mr1?srsltid=AfmBOorf9TiY1ZBQD7a7hUwDemKbCFsH_dv8ru9uDCT5yoq19AlyHy6z)，[FR+EU](https://www.domadoo.fr/de/smart-home-produkte/7773-smlight-slzb-mr1-usb-ethernet-poe-zigbee-thread-matter-adapter.html)，[BE](https://www.hobbyelectronica.nl/product/slzb-mr1-zigbee-ethernet-poe-usb-adapter/)，[DE](https://mediarath.de/en/products/smlight-slzb-mr1-zigbee-thread-multiradio-cc2652p7-efr32mg21-lan-poe-usb-wifi-adapter)，[NL](https://www.hobbyelectronica.nl/product/slzb-mr1-zigbee-ethernet-poe-usb-adapter/)，[PL](https://pcblab.io/koordynator-slzb-mr1-multiradio-zigbee-thread.html)，[SE](https://www.lohelectronics.se/hemautomation/zigbee/controllers-1473/smlight-slzb-mr1-zigbee-3-0-lan-gateway-med-poe-och-z2m)，[CH](https://www.swiss-domotique.ch/en/gateways-antennas/2752-smlight-slzb-06-adaptateur-zigbee-ethernet-poe-usb-wifi-2.html)，[FI](https://verkkokauppa.nurkantakaa.fi/tuote/smlight-slzb-mr1/)，[UK](https://zigbeesmart.com/de-de/products/zigbee-lan-poe-coordinator-smlight-slzb-mr1-multiradio)，[US](https://cloudfree.shop/product/smlight-slzb-mr1-zigbee-thread/)。

:::

::: details SONOFF Dongle-M

芯片：[efr32mg24a420f1536im48](https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-socs/device.efr32mg24a420f1536im48?tab=specs)

Dongle-M 内置两颗芯片：ESP32-D0WD-R2 和 EFR32MG24。它配备两根外接天线，支持 PoE 供电，内置网页控制台（http://Dongle-M.local），并可通过以太网/Wi-Fi/USB 连接到 Zigbee2MQTT。

- [产品页面](https://sonoff.tech/products/sonoff-dongle-max-zigbee-thread-poe-dongle-dongle-m)
- [刷写方法](https://dongle.sonoff.tech/sonoff-dongle-flasher/)
- [硬件规格](https://dongle.sonoff.tech/guide/dongle-m/hardware-specification-dongle-m/)
- [购买](https://sonoff.tech/products/sonoff-dongle-max-zigbee-thread-poe-dongle-dongle-m)

<img src="/images/Dongle-M_600_600.jpg" width="200" />

:::

::: details SMLIGHT SLZB-06Mg26

芯片：[efr32mg26b420f3200im48](https://www.silabs.com/wireless/zigbee/efr32mg26-series-2-socs/device.efr32mg26b420f3200im48?tab=specs)

配备外接天线。

- [产品页面](https://smlight.tech/global/slzb06mg26)

<img src="/images/adapters/SMLIGHT/SLZB-06MG26/slzb-06mg26-device.jpg" width="200" />

**SLZB-06Mg26 购买**：

- 购买：[授权商店 - 全球](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-06mg26-enadapter)，[Aliexpress-1 - 全球](https://www.aliexpress.com/item/1005004942648430.html)，[Aliexpress-2 - 全球](https://www.aliexpress.com/item/1005008814854495.html)。

:::

::: details SMLIGHT SLZB-06Mg24

芯片：[efr32mg24a020f1024im40](https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-socs/device.efr32mg24a020f1024im40?tab=specs)

配备外接天线。

- [产品页面](https://smlight.tech/global/slzb06mg24)

<img src="/images/smlight-slzb-06mg24.jpg" width="200" />

:::

::: details SMLIGHT SLZB-06M

芯片：[efr32mg21a020f768im32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f768im32?tab=specs)

配备外接天线。

**为获得最佳性能，请确保固件版本至少为 20240510（需要 Core 固件版本 2.2.0 或更高）。
不适用于 WiFi 或其他高延迟连接。**

- [产品页面](https://smlight.tech/product/slzb-06m/)
- 购买：[官方商店 - 全球](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-06m-zigbee-adapter)，[Aliexpress - 全球](https://www.aliexpress.com/item/1005004942648430.html)，[Tindie - 全球](https://www.tindie.com/products/smartlightme/smlight-slzb-06-zigbee-ethernet-poe-usb-wifi-adapt/)。  
  本地快速配送：[AU](https://shop.dialedin.com.au/products/smlight-slzb-06m-efr32mg21-lan-zigbee-adapter)，[AT](https://www.hobbyelectronica.nl/product/slzb-06m-zigbee-ethernet-poe-usb-adapter/)，[BE](https://www.hobbyelectronica.nl/product/slzb-06m-zigbee-ethernet-poe-usb-adapter/)，[CH](https://shop.swiss-domotique.ch/en/gateways-antennas/2390-smlight-slzb-06m-adaptateur-zigbee-ethernet-poe-usb-wifi.html)，[EE](https://improveit.lt/produktas/smlight-slzb-06m-zigbee-ethernet-poe-usb-lan-wifi-adapteris-zha-integracijai/)，[FR](https://www.domadoo.fr/fr/box-domotique/7043-smlight-adaptateur-usb-ethernet-poe-zigbee-30-efr32mg21-zigbee2mqtt-et-zha.html)，[DE](https://www.hobbyelectronica.nl/product/slzb-06m-zigbee-ethernet-poe-usb-adapter/)，[LT](https://improveit.lt/produktas/smlight-slzb-06m-zigbee-ethernet-poe-usb-lan-wifi-adapteris-zha-integracijai/)，[LV](https://improveit.lt/produktas/smlight-slzb-06m-zigbee-ethernet-poe-usb-lan-wifi-adapteris-zha-integracijai/)，[PL](https://pcblab.io/slzb-06m-adapter-zigbee-efr32mg21-ethernet-poe-usb-lan-wifi.html)，[TH](https://shopee.co.th/Zigbee-SLZB-06-LAN-POE-USB-WIFI-Hybrid-Coordinator-CC2652P-SMARTLIGHT-SLZB-06-HASS-Zigbee2mqtt-ZHA-CC2652-CC2531-i.25068823.21062349644)，[美国官方](https://cloudfree.shop/product/smlight-zigbee-ethernet-adapter/)，[美国 Amazon](https://www.amazon.com/SMLIGHT-SLZB-06-Ethernet-Zigbee2MQTT-Assistant/dp/B0BL6DQSB3)。

<img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06m-main-title.jpg" width="200" />

:::

### 集线器

::: details SMLIGHT SMHUB Nano Mg24

SMHUB Nano Mg24 是一款基于 Linux 的多射频智能家居集线器，拥有精美的界面，可直接在设备上运行 Zigbee2MQTT，无需外部服务器。它还预装了 Mosquitto MQTT 代理、Node-RED 和 Matterbridge，开箱即可作为一个完整的智能家居网关使用。SMHUB 集成了 SL SoC EFR32MG24 芯片，具备以太网+POE、Wi-Fi、蓝牙和 USB 连接能力。硬件特性包括 SD 卡、eMMC、按钮和 4 个状态指示灯。通过 SMHUB-OS 提供 OTA 更新、VPN 等功能，为各类生态系统提供了一个强大且面向未来的平台。

|                                             产品图片                                             |                                           界面截图 1                                            |                                           界面截图 2                                            |
| :----------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------: |
| <img src="/images/adapters/SMLIGHT/SMHUB-Nano/SMHHUB-Nano-Mg24/SMHUB-Nano_2.jpg" width=" 200" /> | <img src="/images/adapters/SMLIGHT/SMHUB-Nano/SMHHUB-Nano-Mg24/SMHUB-Nano_4.jpg" width="200" /> | <img src="/images/adapters/SMLIGHT/SMHUB-Nano/SMHHUB-Nano-Mg24/SMHUB-Nano_3.jpg" width="200" /> |

- [产品页面](https://smlight.tech/global/smhub-nano-mg24)
- 购买：[授权商店 - 全球](https://smartlight.me/smart-home-devices/zigbee-devices/smhub-nano)，[Aliexpress-1 - 全球](https://a.aliexpress.com/_EwWCdYC)，[Aliexpress-2 - 全球](https://www.aliexpress.com/item/1005010395706341.html)。

:::

::: details SMLIGHT SMHUB（Essential/Premium 变体）

SMHUB 是一款基于 Linux 的多射频智能家居集线器，拥有精美的界面，可直接在设备上运行 Zigbee2MQTT，无需外部服务器。它还预装了 Mosquitto MQTT 代理、Node-RED 和 Matterbridge，开箱即可作为一个完整的智能家居网关使用。SMHUB 集成了 TI SoC（Essential 版为 CC2652P，Premium 版为 CC2674P10）和 SL SoC（Essential 版为 EFR32MG21，Premium 版为 EFR32MG24），具备以太网、Wi-Fi、USB，以及可选的 Z-Wave 无线电、PoE 和 4G 连接能力。硬件特性包括 12 个 RGB LED、红外接收/发射器、音频、SD 卡、eMMC 以及多个 USB 接口。通过 SMHUB-OS 提供 OTA 更新、VPN 等功能，为各类生态系统提供了一个强大且面向未来的平台。

|                                产品图片                                |                               界面截图                                |                                              Youtube 视频评测                                              |
| :--------------------------------------------------------------------: | :-------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: |
| <img src="/images/adapters/SMLIGHT/SMHUB/smhub_21.jpg" width=" 200" /> | <img src="/images/adapters/SMLIGHT/SMHUB/smhub-os.jpg" width="200" /> | [<img src="/images/adapters/SMLIGHT/SMHUB/smhub-youtube.jpg" width="200" />](https://youtu.be/xQsIt4yYxdw) |

- [产品页面](https://smlight.tech/global/smhub)
- [使用手册](https://smlight.tech/support/manuals/books/smhub)
- 购买：[授权商店 - 全球](https://smartlight.me/smart-home-devices/zigbee-devices/smhub-professional)，[Aliexpress-1 - 全球](https://aliexpress.com/item/1005009942560775.html)，[Aliexpress-2 - 全球](https://aliexpress.com/item/1005009942491630.html)。

:::

::: details Nabu Casa Home Assistant Yellow

芯片：[mgm210pa32jia](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-modules/device.mgm210pa32jia?tab=specs)

配备板载天线，并支持硬件流控。

```yaml
serial:
    rtscts: true
```

- [产品页面](https://www.home-assistant.io/yellow)
- [协调器固件](https://github.com/NabuCasa/silabs-firmware)
- [刷写方法](https://toolbox.openhomefoundation.org/home-assistant-connect-zbt-1)
- [购买](https://www.home-assistant.io/yellow)

<img src="/images/yellow.jpg" width="200" />
:::

### 自定义

::: details Seeed Studio XIAO MG24

芯片：[efr32mg24b220f1536im48](https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-socs/device.efr32mg24b220f1536im48?tab=specs)

- [产品页面](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- [产品页面 - Sense 变体](https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html)
- [入门指南](https://wiki.seeedstudio.com/xiao_mg24_getting_started/)

<img src="/images/seeed-studio-xiao-mg24.jpg" width="200" />
:::

### 不推荐

::: details Easyiot ZB-GW04 (v1.1, v1.2)

硬件资源有限。

:::

::: details All Series 0/1 based-devices

较旧的硬件，Silabs 在较新固件版本（>= 8.0.0）中已不再支持。

参见 [Silicon Labs 公告](https://www.silabs.com/documents/public/release-notes/emberznet-release-notes-7.4.3.0.pdf)。

:::

## 该协议栈特有的日志

### `info` 级别

启动和停止序列详细描述了使用 `ember` 让 Zigbee2MQTT 运行起来所采取的步骤，这有助于定位潜在的启动和停止问题。

协议栈/网络状态变化（上线/下线、信道变更、允许加入的开启/关闭等）。

_Network/Route error（网络/路由错误）_：该错误表示与目标节点之间的消息收发出现了问题（详见下文）。随着时间推移偶尔出现几次是正常的（或在 Zigbee2MQTT 启动时），但如果次数过多、过于频繁，则说明你的网络存在问题。

### `warning` 级别

_Node descriptor reports device is only compliant to revision（节点描述符报告设备仅兼容某个版本）_：表示识别到该设备使用的是较旧的 Zigbee 版本。这可能是问题的根源，尤其是当版本为 `pre-21` 时。

_[EzspConfigId] Failed to SET（设置失败）_：通常发生在协调器的内存比其他设备更小的情况下，此时将改用固件内置的值。

_An ID conflict was detected（检测到 ID 冲突）_：同一网络中两个设备不能拥有相同的 ID。涉及的设备会被踢出网络，随后应会自动重新加入（如果没有，可能需要重新配对）。

_NOT READY - Signaling NCP_：`ember` 驱动暂时过载。协调器会被告知该情况，处理会延迟一小段时间。

### `error` 级别

_NCP EZSP protocol version of XX does not match Host version 13（NCP 的 EZSP 协议版本 XX 与主机版本 13 不匹配）_：`ember` 目前要求固件的 EZSP 版本为 v13（EmberZNet 固件 7.4.x）。你需要升级适配器的固件。[请查看这里的前两个帖子](https://github.com/Koenkk/zigbee2mqtt/discussions/21462)。

_[BACKUP] Current backup file is from an unsupported EZSP version（当前备份文件来自不受支持的 EZSP 版本）_：`ember` 目前仅支持 EZSP v12 及以上版本的备份（可通过打开 `coordinator_backup.json` 文件确认版本）。该文件已被自动重命名，`ember` 成功启动后会自动创建一个新文件。

消息投递失败。无法到达目标设备。造成这种情况的原因可能有多种，其余的日志应该有助于确定具体原因。

请求失败。消息内容应该是不言自明的，并会给出一个 `status` 字段，说明失败的原因。

NCP 致命错误。协调器发生了故障（原因应会在消息中给出）。Zigbee2MQTT 会尝试重置协调器并恢复通信。如果失败，Zigbee2MQTT 将完全停止，系统的看门狗（如果有）会尝试将其重新启动。

## 工具

### Ember ZLI

[https://github.com/Nerivec/ember-zli/](https://github.com/Nerivec/ember-zli/)

一款 NodeJS 命令行工具，使用 [zigbee-herdsman](https://github.com/Koenkk/zigbee-herdsman/) 实现固件刷写、与适配器协议栈交互、抓包等功能。更多详情请查看 [Wiki](https://github.com/Nerivec/ember-zli/wiki)。

### Bellows CLI

[https://github.com/zigpy/bellows](https://github.com/zigpy/bellows)

一款 Python 命令行工具，可用于与适配器的协议栈进行交互。

### Zigbee2MQTT Ember Helper

[https://nerivec.github.io/z2m-ember-helper/](https://nerivec.github.io/z2m-ember-helper/)

在浏览器中分析日志文件，自动获取网络状况的评估报告。

## [专家] 自定义协议栈配置

::: warning 注意
此功能会修改适配器和网络的行为。如果为你的网络使用了不合适的值，可能会导致网络完全瘫痪。只有在你完全确定网络会从中受益时，才应修改这些值。对大多数网络来说，使用默认值就足够了。
:::

::: warning 注意
在 Zigbee2MQTT 中提交新 issue 之前，请先确认使用默认配置时问题依然存在。
:::

你可以通过在 `coordinator_backup.json` 所在的同一文件夹中创建一个 `stack_config.json` 文件，来修改 EmberZNet 的默认协议栈配置。此配置只能手动完成。

格式、可用值及默认值如下：

```json
{
    "CONCENTRATOR_RAM_TYPE": "high",
    "CONCENTRATOR_MIN_TIME": 5,
    "CONCENTRATOR_MAX_TIME": 60,
    "CONCENTRATOR_ROUTE_ERROR_THRESHOLD": 3,
    "CONCENTRATOR_DELIVERY_FAILURE_THRESHOLD": 1,
    "CONCENTRATOR_MAX_HOPS": 0,
    "MAX_END_DEVICE_CHILDREN": 32,
    "TRANSIENT_DEVICE_TIMEOUT": 10000,
    "END_DEVICE_POLL_TIMEOUT": 8,
    "TRANSIENT_KEY_TIMEOUT_S": 300,
    "CCA_MODE": null
}
```

JSON 文件中省略、无效或超出范围的值都将使用默认值。

关于这些值及其行为的文档，可以在 [SiLabs UG100 - 2.3.1 PDF](https://www.silabs.com/documents/public/user-guides/ug100-ezsp-reference-guide.pdf) 和 [concentrator 文章](https://community.silabs.com/s/article/how-does-the-concentrator-plugin-work-x?language=en_US) 中找到。

驱动程序还对取值范围做了如下进一步限制：

- CONCENTRATOR_RAM_TYPE："high" 或 "low"
- CONCENTRATOR_MIN_TIME：最小 1，最大 60
- CONCENTRATOR_MAX_TIME：最小 30，最大 300
- CONCENTRATOR_ROUTE_ERROR_THRESHOLD：最小 1，最大 100
- CONCENTRATOR_DELIVERY_FAILURE_THRESHOLD：最小 1，最大 100
- CONCENTRATOR_MAX_HOPS：最小 0，最大 30
- MAX_END_DEVICE_CHILDREN：最小 6，最大 64
- TRANSIENT_DEVICE_TIMEOUT：最小 0，最大 65535
- END_DEVICE_POLL_TIMEOUT：最小 0，最大 14
- TRANSIENT_KEY_TIMEOUT_S：最小 0，最大 65535
- CCA_MODE：默认为 undefined（即由固件默认值决定），可选值：
    - "RSSI"：基于 RSSI 的 CCA。当检测到高于 -75（默认值）的任何能量时，CCA 会报告信道忙。
    - "SIGNAL"：基于信号识别的 CCA。只有在检测到符合该标准、且调制与扩频特性与当前使用的 PHY 相同的信号时，CCA 才会报告信道忙。
    - "SIGNAL_OR_RSSI"：基于 RSSI 或信号识别的 CCA。当检测到高于 -75（默认值）的能量，或检测到符合该标准、调制与扩频特性与当前使用的 PHY 相同的信号时，CCA 都会报告信道忙。
    - "SIGNAL_AND_RSSI"：基于 RSSI 与信号识别的 CCA。只有同时检测到高于 -75（默认值）的能量，以及符合该标准、调制与扩频特性与当前使用的 PHY 相同的信号时，CCA 才会报告信道忙。
    - "ALWAYS_TRANSMIT"：ALOHA 方式。始终发送 CCA=1，CCA 始终报告信道空闲。

**请注意，部分取值不仅受上述范围限制，还受到适配器可用内存的限制。如果某个值（或值的组合）超出了适配器的处理能力，将会改用固件的默认值。**
