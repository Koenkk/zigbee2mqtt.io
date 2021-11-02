---
next: ../installation/
---

# Supported Adapters

All officially supported adapters are listed on this page. Note that before an adapter can be used with Zigbee2MQTT it has to be flashed with a coordinator firmware (some adapters come preflashed).

## Recommended
The adapters below are recommended because they use powerfull chips, can handle large networks and are well supported.

<ul>
<li>Based on Texas Instruments CC2652/CC1352 chip (in order of first appearance):</li>
<ul>
<li>USB connected (easiest)</li>
<ul style="list-style-type: none;">
<li><details>
<summary>Electrolama zig-a-zig-ah! (zzh!)</summary>

::: tip <span/>
USB connected adapter with external antenna based on CC2652R chip<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC2652R_coordinator_20210708.zip)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC2652R_router_20210128.zip)<br/>
[Flashing instructions](https://electrolama.com/radio-docs/#step-3-flash-the-firmware-on-your-stick)<br/>
[Buy](https://www.tindie.com/products/electrolama/zzh-cc2652r-multiprotocol-rf-stick/#product-reviews)

![](../../images/zzh.jpg)
:::
</details></li>
<li><details>
<summary>Slaesh's CC2652RB stick</summary>

::: tip <span/>
USB connected adapter with external antenna based on CC2652RB chip<br/>
**WARNING: <a href="https://github.com/Koenkk/zigbee2mqtt/discussions/6702">delivery issues reported</a>**<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC2652RB_coordinator_20210708.zip)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC2652RB_router_20210128.zip)<br/>
[Flashing instructions](https://slae.sh/projects/cc2652/#flashing)<br/>
[Buy](https://slae.sh/projects/cc2652/)

![](../../images/slaeshs_cc2652rb_stick.jpg)
:::
</details></li>
<li><details>
<summary>Tube's CC2652P2 USB Coordinator</summary>

::: tip <span/>
Open source hardware CC2652P based USB connected adapter with external antenna and USB extension cable<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20210708.zip)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20210128.zip)<br/>
[Flashing instructions](https://github.com/tube0013/tube_gateways)<br/>
[Buy](https://www.tubeszb.com/)

![](../../images/Tubes_USB_Coordinator_CC2652P2_variant.png)
:::
</details></li>
<li><details>
<summary>Egony Stick V4</summary>

::: tip <span/>
Powerful CC2652P Zigbee USB dongle and Raspberry Pi GPIO module. Available in Ebyte (left picture) and RFSTAR (right picture) version.<br/>
Coordinator firmware: [Ebyte](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_other_coordinator_20210708.zip) [RFSTAR](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20210708.zip)<br/>
Router firmware: [Ebyte](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_other_router_20210128.zip) [RFSTAR](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20210128.zip)<br/>
[Flashing instructions](https://github.com/egony/cc2652p_E72-2G4M20S1E/wiki/Flashing-EN)<br/>
Description: [Ebyte](https://github.com/egony/cc2652p_E72-2G4M20S1E/wiki/Home-EN) [RFSTAR](https://github.com/egony/cc2652p_cc1352p_RF-STAR/wiki/Home-EN)<br/>
[Contact](http://t.me/Egony)

![](../../images/Egony_v4_E72.jpg)
![](../../images/Egony_v4_RFS.jpg)
:::
</details></li>
<li><details>
<summary>ZigStar Stick v4</summary>

::: tip <span/>
Powerfull Open source dongle with external antenna based on CC2652P<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20210708.zip)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20210128.zip)<br/>
[Description](https://zig-star.com/projects/zigbee-stick-v4/)<br/>
[Flashing instructions](https://zig-star.com/radio-docs/flash-cc-bsl/)<br/>
[Buy](https://zig-star.com)

![](../../images/ZigStar-USB.png)
:::
</details></li>
<li><details>
<summary>CircuitSetup's CC2652P2 USB Coordinator</summary>

::: tip <span/>
CC2652P based USB connected adapter pre-programmed with Z-Stack<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20210708.zip)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20210128.zip)<br/>
[Flashing instructions](https://circuitsetup.us/product/usb-zigbee-stick-z-stack-coordinator/)<br/>
[Buy](https://circuitsetup.us/product/usb-zigbee-stick-z-stack-coordinator/)

![](../../images/circset_cc2652.jpg)
:::
</details></li>
<li><details>
<summary>SMARTLIGHT CC2652P Zigbee USB dongle</summary>

::: tip <span/>
CC2652P factory-made Zigbee USB coordinator with external 6dB antenna and worldwide delivery<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_other_coordinator_20210708.zip)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_other_router_20210128.zip)<br/>
[Description](https://smartlight.me/smart-home-devices/zigbee-devices/zigbee-coordinator-v4-cc2652p)<br/>
[Flashing instructions](https://smartlight.me/flashing_slzb-02)<br/>
Buy: [eBay](https://www.ebay.com/itm/164928826521) [Aliexpress](https://www.aliexpress.com/item/1005002684189079.html) [Official store](https://smartlight.me/smart-home-devices/zigbee-devices/zigbee-coordinator-v4-cc2652p) [Telegram](https://t.me/smartlightme)

![](../../images/CC2652P_smartlight_zigbee_coordinator.png)
:::
</details></li>
<li><details>
<summary>SONOFF Zigbee 3.0 USB Dongle Plus</summary>

::: tip <span/>
CC2652P based USB connected adapter pre-programmed and with enclosure<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20210708.zip)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20210128.zip)<br/>
[Flashing instructions](https://sonoff.tech/wp-content/uploads/2021/09/Zigbee-3.0-USB-dongle-plus-firmware-flashing-1-1.docx)<br/>
[Buy](https://itead.cc/product/sonoff-zigbee-3-0-usb-dongle-plus/)

![](../../images/sonoff_plus_dongle.png)
:::
</details></li>
<li><details>
<summary>Vision CC2652 dongle</summary>

::: tip <span/>
Adapter or small development board based on CC2652R (VS201) or CC2652P (VS202)<br/>
Coordinator firmware: [VS201](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC2652R_coordinator_20210708.zip) [VS202](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20210708.zip)<br/>
Router firmware: [VS201](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC2652R_router_20210128.zip) [VS202](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20210128.zip)<br/>
[Flashing instructions](https://www.aliexpress.com/item/1005002823262979.html?spm=a2g0o.productlist.0.0.1a1640b82yeViq&algo_pvid=e01b1872-ca85-4814-971f-ce9b058855b8&algo_exp_id=e01b1872-ca85-4814-971f-ce9b058855b8-0&pdp_ext_f=%7B%22sku_id%22%3A%2212000022351543786%22%7D)<br/>
Buy: [VS201](https://www.aliexpress.com/item/1005002823262979.html?spm=a2g0o.productlist.0.0.1a1640b82yeViq&algo_pvid=e01b1872-ca85-4814-971f-ce9b058855b8&algo_exp_id=e01b1872-ca85-4814-971f-ce9b058855b8-0&pdp_ext_f=%7B%22sku_id%22%3A%2212000022351543786%22%7D) [VS202](https://www.aliexpress.com/item/1005003393047763.html?spm=a2g0o.productlist.0.0.5e6f107dvPTg3a&algo_pvid=c932a9d4-2522-4b73-a001-02609564422e&algo_exp_id=c932a9d4-2522-4b73-a001-02609564422e-1&pdp_ext_f=%7B%22sku_id%22%3A%2212000025577120008%22%7D)

![](../../images/cc26x2r1_dongle.jpg)
:::
</details></li>
</ul>
<li>Hybrid (network + USB)</li>
<ul style="list-style-type: none;">
<li><details>
<summary>Gio-dot Z-Bee Duo with CC2652P</summary>

::: tip <span/>
4 in 1 adapter: USB Stick, Ser2net, LAN, PI Zero Hat, with external antenna and 3D printed case.<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_other_coordinator_20210708.zip)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/blob/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_other_router_20210128.zip)<br/>
[Flashing instructions](https://github.com/Gio-dot/Z-Bee-Duo#how-to-flash)<br/>
[Buy](https://www.tindie.com/products/23046/)

![](../../images/Z-Bee_Duo-ico.jpg)
:::
</details></li>
<li><details>
<summary>ZigStar LAN Coordinator</summary>

::: tip <span/>
Powerfull Open source LAN Coordinator with external antenna on CC2652P<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20210708.zip)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20210128.zip)<br/>
[Description](https://zig-star.com/projects/zigbee-gw-lan/)<br/>
[Flashing instructions](https://zig-star.com/radio-docs/flash-cc-bsl/)<br/>
[Buy](https://zig-star.com)

![](../../images/ZigStar-LAN.png)
:::
</details></li>
</ul>
<li>Network</li>
<ul style="list-style-type: none;">
<li><details>
<summary>Tube's Zigbee Gateways (CC2652P2 variant)</summary>

::: tip <span/>
Open source hardware CC2652P and ESP32 based Zigbee to Ethernet Coordinator (left picture), POE variant is also available (right picture)<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20210708.zip)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20210128.zip)<br/>
[Flashing instructions](https://github.com/tube0013/tube_gateways)<br/>
[Buy](https://www.tubeszb.com/)

![](../../images/Tubes_Zigbee_Gateways_CC2652P2_variant.jpeg)
![](../../images/Tubes_Zigbee_PoE_Coordinator_CC2652P2_variant.jpeg)
:::
</details></li>
<li><details>
<summary>cyijun OpenZ3Gateway</summary>

::: tip <span/>
An open source Zstack3 gateway powered by ESP8266 and CC2652P modules. One costs less than 60 CNY in China.<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20210708.zip)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20210128.zip)<br/>
[Description](https://github.com/cyijun/OpenZ3Gateway)<br/>
[Contact](mailto:cyjason2000@163.com)<br/>

![](../../images/openz3gateway.jpg)
:::
</details></li>
<li><details>
<summary>XGG 52PZ2MGateway</summary>

::: tip <span/>
AAn open source Zstack3 gateway powered by ESP8266 and CC2652P modules. One costs less than 60 CNY in China.<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20210708.zip)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20210128.zip)<br/>
[Description](https://z2m.wiki/)<br/>
[Buy](https://z2m.wiki/)<br/>

![](../../images/CC2652P-Z2M.jpg)
:::
</details></li>
</ul>
<li>Raspberry Pi hat</li>
<ul style="list-style-type: none;">
<li><details>
<summary>cod.m Zigbee CC2652P RPi Module</summary>

::: tip <span/>
Raspberry Pi GPIO module with CC2652P and integrated power amplifier (+20dBm)<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20210708.zip)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20210128.zip)<br/>
[Flashing instructions](https://github.com/codm/cc2652-raspberry-pi-module#firmware)<br/>
[Buy](https://shop.codm.de/automation/zigbee/33/zigbee-cc2652p2-raspberry-pi-module)

![](../../images/codm-cc2652p-rpi.jpg)
:::
</details></li>
<li><details>
<summary>ZigStar Shield</summary>

::: tip <span/>
Powerfull Open source Pi Shield based on CC2652P<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20210708.zip)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20210128.zip)<br/>
[Description](https://zig-star.com/projects/zigbee-shield/)<br/>
[Flashing instructions](https://zig-star.com/radio-docs/flash-cc-bsl/)<br/>
[Buy](https://zig-star.com)

![](../../images/ZigStar-Shield.png)
:::
</details></li>
</ul>
<li>Development board</li>
<ul style="list-style-type: none;">
<li><details>
<summary>Texas Instruments LAUNCHXL-CC1352P-2</summary>

::: tip <span/>
USB connected development kit, based on CC1352P chip<br/>
These devices have two serial devices built in. Make sure you put the right serial device in the [configuration](../configuration/) or use auto detect (completely remove the `serial` section from `configuration.yaml`) if you only have one Texas Instruments CC device connected to your system.<br/>
An external antenna can be connected which could increase range: [requires resoldering a tiny capacitor (moving C14 to C24)](http://e2e.ti.com/support/wireless-connectivity/zigbee-and-thread/f/158/t/880219?LAUNCHXL-CC26X2R1-Antenna-CC26X2R1)<br/>

[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20210708.zip)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20210128.zip)<br/>
[Flashing instructions](./flashing/flashing_via_uniflash.md)<br/>
[Buy](http://www.ti.com/tool/LAUNCHXL-CC1352P)

![](../../images/cc1352p2.jpg)
:::
</details></li>
<li><details>
<summary>Texas Instruments LAUNCHXL-CC26X2R1</summary>

::: tip <span/>
USB connected development kit, based on CC2652R chip<br/>
These devices have two serial devices built in. Make sure you put the right serial device in the [configuration](../configuration/) or use auto detect (completely remove the `serial` section from `configuration.yaml`) if you only have one Texas Instruments CC device connected to your system.<br/>
An external antenna can be connected which could increase range: [requires resoldering a tiny capacitor](https://github.com/Koenkk/zigbee2mqtt/issues/2162#issuecomment-570286663)<br/>

[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC2652R_coordinator_20210708.zip)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/router/Z-Stack_3.x.0/bin/CC2652R_router_20210128.zip)<br/>
[Flashing instructions](./flashing/flashing_via_uniflash.md)<br/>
[Buy](http://www.ti.com/tool/LAUNCHXL-CC26X2R1)

![](../../images/cc26x2r1.jpg)
:::
</details></li>
</ul>
</ul>
<li>Other</li>
<ul style="list-style-type: none;">
<li><details>
<summary>ConBee II</summary>

::: tip <span/>
USB connected adapter<br/><br/>
If Zigbee2MQTT fails to start, try adding the following to your `configuration.yaml`
```yaml
serial:
  adapter: deconz
```

[Coordinator firmware](https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Update-deCONZ-manually)<br/>
[Flashing](https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Update-deCONZ-manually)<br/>
[Buy](https://phoscon.de/en/conbee2?buy=1#buy)

![](../../images/conbee.jpg)
:::
</details></li>
</ul>
</ul>


## Not recommended
The adapters below are well supported but use outdated chips.

<ul>
<li>USB connected</li>
<ul style="list-style-type: none;">
<li><details>
<summary>Texas Instruments CC2531</summary>

::: tip <span/>
USB connected Zigbee adapter with PCB antenna<br/>
**Warning 1:** requires additional hardware to flash (CC debugger + download cable)<br/>
**Warning 2:** might not be powerful enough to handle networks of 20+ devices<br/>
**Warning 3:** this adapter has bad range<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_Home_1.2/bin)<br/>
[Flashing instructions](./flashing/flashing_the_cc2531.md)<br/>
[Buy](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20191108075039&SearchText=cc2531)

![](../../images/cc2531.jpg)
:::
</details></li>
<li><details>
<summary>Vision CC2538+CC2592 Dongle(VS203)</summary>

::: tip <span/>
Adapter or small development board based on CC2538 and CC2592 chip<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)<br/>
[Flashing instructions](https://www.aliexpress.com/item/1005002809329614.html?spm=a2g0o.store_pc_allProduct.8148356.2.4d7f1012TTc3uX)<br/>
[Buy](https://www.aliexpress.com/item/1005002809329614.html?spm=a2g0o.store_pc_allProduct.8148356.2.4d7f1012TTc3uX)

![](../../images/cc2538_cc2592_dongle.jpg)
:::
</details></li>
</ul>
<li>Serial connected</li>
<ul style="list-style-type: none;">
<li><details>
<summary>Texas Instruments CC2530</summary>

::: tip <span/>
Serial connected adapter with external antenna optionally with CC2591 or CC2592 RF frontend<br/>
**Warning 1:** requires additional hardware to flash (CC debugger + download cable)<br/>
**Warning 2:** might not be powerful enough to handle networks of 20+ devices<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin)<br/>
[Router firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_Home_1.2/bin)<br/>
[Flashing instructions](../../advanced/zigbee/05_create_a_cc2530_router.md#2-flashing-the-cc2530)<br/>
[Connecting](./flashing/connecting_cc2530.md)<br/>
Buy: [AliExpress](http://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20181213104041&SearchText=cc2530) [GBAN](http://www.gban.cn/en/product_show.asp?id=43) [Tindie](https://www.tindie.com/products/GiovanniCas/cc2530-cc2592-zigbee-dongle/) [RF ZU USB](https://www.aliexpress.com/item/1005001587860129.html)

![](../../images/cc2530.jpg)
:::
</details></li>
<li><details>
<summary>Texas Instruments CC2538</summary>

::: tip <span/>
Serial connected adapter with CC2592 RF Amplifier<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)<br/>
[Flashing](./flashing/flashing_the_cc2538.md)<br/>
Buy: [AliExpress](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20191108075039&SearchText=cc2538) [Tindie](https://www.tindie.com/products/GiovanniCas/cc2538-cc2592-zigbee-dongle-new-zb30/)

![](../../images/cc2538.jpg)
:::
</details></li>
</ul>
<li>Raspberry Pi</li>
<ul style="list-style-type: none;">
<li><details>
<summary>Texas Instruments CC2538 HAT</summary>

::: tip <span/>
Raspberry pinout compatible HAT with CC2538 and optional external antenna<br/>
[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)<br/>
[Flashing](./flashing/flashing_the_cc2538.md)<br/>
[Buy](https://www.tindie.com/products/GiovanniCas/zigbee-hat-with-cc2538-for-raspberry/)

![](../../images/cc2538hat.jpg)
:::
</details></li>
</ul>
<li>Network</li>
<ul style="list-style-type: none;">
<li><details>
<summary>XGG gateway</summary>

::: tip <span/>
An open source zigbee gateway powered by ESP8266 and CC2538+CC2592PA (XGG 38PZ2MGateway) or CC2530 (XGG 30Z2MGateway)<br/>
Coordinator firmware: [XGG 38PZ2MGateway](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin) [XGG 30Z2MGateway](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin)<br/>
[Contact](https://z2m.wiki/)

![](../../images/CC2652P-Z2M.jpg)
:::
</details></li>
</ul>
</ul>

## Experimental
The adapters below are experimental, don't use these if you want a stable setup.

<ul style="list-style-type: none;">
<li><details>
<summary>ZiGate USB-TTL</summary>

::: tip <span/>
USB connected adapter based on NXP JN516x (JN5168/JN5169), 3.1d firmware or later required<br/><br/>
If Zigbee2MQTT fails to start, try adding the following to your `configuration.yaml`
```yaml
serial:
  adapter: zigate
```

[Coordinator firmware](https://zigate.fr/tag/firmware/)<br/>
[Discussion](https://github.com/Koenkk/zigbee-herdsman/issues/242)<br/>
[Buy](https://zigate.fr/boutique/?orderby=date_desc)

![](../../images/zigate_usb_ttl.png)
:::
</details></li>
<li><details>
<summary>Silicon Labs EZSP v8</summary>

::: tip <span/>
Initial development started on experimental (pre-alpha stage) support for various adapters based on Silicon Labs EM35X and EFR32MG SoC families with EmberZNet NCP 6.7.8 firmware or later via EZSP version 8 (EmberZNet Serial Protocol) interface. This include all hardware based on SoCs/Modules from Silabs EFR32MG21/MGM210 and EFR32MG12/MGM12 series<br/><br/>
If Zigbee2MQTT fails to start, try adding the following to your `configuration.yaml`
```yaml
serial:
  adapter: ezsp
```

[Coordinator firmware](https://github.com/Koenkk/zigbee-herdsman/issues/319)<br/>
[Discussion](https://github.com/Koenkk/zigbee-herdsman/issues/319)<br/>

![](../../images/Silicon_Labs_Gecko_EFR32_SoCs.jpg)
:::
</details></li>
</ul>

## Notes
Before buying an adapter, please read the notes below!

- Want to migrate to a different adapter? This may require repairing all your devices in some cases, see [FAQ](../faq/README.md#what-does-and-does-not-require-repairing-of-all-devices)
- Network adapters connected via WiFi might have reduced stability as the serial protocol does not have enough fault-tolerance to handle packet loss or latency delays that can normally occur over WiFi connections. If cannot use a locally connected USB or UART/GPIO adapter then the recommendation is to use remote adapter that connected via Ethernet (wired) to avoid issues.
- What are the differences between the various CC2652/CC1352 chips?
  - Chips ending with `P` have a power amplifier which support up-to 20dBm vs 5dBm on adapters ending with `R`/`RB`.
  - Chips starting with `CC1352` support the sub-1 GHz frequency (which is not relevant for Zigbee since it uses 2.4 GHz), `CC2652` only supports 2.4 GHz. So for Zigbee2MQTT purposes there is no difference between `CC1352` and `CC2652`.
  - Chips ending with `RB` don't require a crystal on the PCB, this only makes a difference for the manufacturing process.

### Flashing CC1352/CC2652/CC2538 based adapters
Adapters based on CC1352 or CC2652 chips can be flashed by putting them in the bootloader. See your adapter manual on how to do this. After you have done this one of the following tools can be used to flash it.
- [ZigStar GW Multi tool](https://github.com/xyzroe/ZigStarGW-MT) (multi platform GUI tool)
- [CC2538-BSL](https://www.ti.com/tool/FLASH-PROGRAMMER) (multi platform Python based command line tool)
- Texas Instrumens [FLASH PROGRAMMER 2](https://www.ti.com/tool/FLASH-PROGRAMMER) (Windows only)

### Router
Besides serving as a coordinator some adapters can also be used as a Zigbee router (check if there is a router firmware by clicking on your adapter). To factory reset/pair:
- Texas Instruments CC2531: press the S2 button for 5 seconds.
- Texas Instruments CC2530: power on/power off the device three times (power on, wait 2 seconds, power off, repeat this cycle three times).
- Adapters based on CC2652/CC1352: single press (one of the) buttons on the device
