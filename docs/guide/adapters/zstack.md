# zStack adapters (Texas Instruments)

### Configuration

```yaml
serial:
  adapter: zstack
```

[Other settings](../configuration/adapter-settings.md)

### Firmware flashing

Adapters based on CC1352 or CC2652 chips can be flashed by putting them in the bootloader. See your adapter manual on how to do this. After you have done this one of the following tools can be used to flash it.
- UI tools
  - Texas Instruments [FLASH PROGRAMMER 2](https://www.ti.com/tool/FLASH-PROGRAMMER) (Windows only) (can't find your device? read below!)  
  - [ZigStar GW Multi tool](https://github.com/xyzroe/ZigStarGW-MT) (multi platform GUI tool)
- CLI tools (multi platform Python based command line tools)
  - [CC2538-BSL](https://github.com/JelmerT/cc2538-bsl) ([instructions](./flashing/flashing_via_cc2538-bsl.md))
  - [llama-bsl](https://github.com/electrolama/llama-bsl) (fork of cc2538-bsl with added features)
- Home Assistant addon
  - [TubesZB TI CC2652 FW Flasher](https://github.com/tube0013/tubeszb_addons)
  - [ZigStar TI CC2652 FW Flasher](https://github.com/mercenaruss/zigstar_addons) (fork of TubesZB with added features)

- Some Ethernet adapters support flashing Zigbee firmware over their own web-interface. In this case you do not need any external software and hardware. Just go to the webinterface and press "Update Zigbee firmware". Please refer to the manual of your particular Zigbee adapter for this functionality.

<img src="../../images/flashing/web-interface-ota-flashing.jpg" title="SLZB-06 WEB OTA Zigbee Flashing" height=300 />

## Recommended

### USB

<details>
<summary>Electrolama zig-a-zig-ah! (zzh!)</summary>
    
USB connected adapter with external antenna based on CC2652R chip  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC2652R_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC2652R_router_20221102.zip)  
* [Flashing instructions](https://electrolama.com/radio-docs/#step-3-flash-the-firmware-on-your-stick) or see "Flashing CC1352/CC2652/CC2538 based adapters" below
* [Buy](https://shop.electrolama.com/collections/usb-rf-sticks/products/zzh-multiprotocol-rf-stick)

<img src="../../images/zzh.jpg" width="200" />
</details>  

<details>
<summary>Slaesh's CC2652RB stick</summary>

USB connected adapter with external antenna based on CC2652RB chip  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC2652RB_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC2652RB_router_20221102.zip)  
* [Flashing instructions](https://slae.sh/projects/cc2652/#flashing) or see "Flashing CC1352/CC2652/CC2538 based adapters" below
* [Buy](https://slae.sh/projects/cc2652/)

<img src="../../images/slaeshs_cc2652rb_stick.jpg" width="200" />
</details>

<details>
<summary>Tube's CC2652P2 USB Coordinator</summary>

Open source hardware CC2652P based USB connected adapter with external antenna and USB extension cable  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20221102.zip)  
* [Flashing instructions](https://github.com/tube0013/tube_gateways) or see "Flashing CC1352/CC2652/CC2538 based adapters" below
* [Buy](https://www.tubeszb.com/)

<img src="../../images/Tubes_USB_Coordinator_CC2652P2_variant.png" width="200" />
</details>

<details>
<summary>Egony Stick V4</summary>

Powerful CC2652P Zigbee USB dongle and Raspberry Pi GPIO module. Available in Ebyte (left picture) and RFSTAR (right picture) version.  
* Coordinator firmware: [Ebyte](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_other_coordinator_20230507.zip) [RFSTAR](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20230507.zip)  
* Router firmware: [Ebyte](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_other_router_20221102.zip) [RFSTAR](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20221102.zip)  
* [Flashing instructions](https://github.com/egony/cc2652p_E72-2G4M20S1E/wiki/Flashing-EN) or see "Flashing CC1352/CC2652/CC2538 based adapters" below
* Description: [Ebyte](https://github.com/egony/cc2652p_E72-2G4M20S1E/wiki/Home-EN) [RFSTAR](https://github.com/egony/cc2652p_cc1352p_RF-STAR/wiki/Home-EN)  
* [Contact](http://t.me/Egony)

<img src="../../images/Egony_v4_E72.jpg" widht="200" /> <img src="../../images/Egony_v4_RFS.jpg" width="200" />
</details>

<details>
<summary>ZigStar Stick v4</summary>

Powerful Open source dongle with external antenna based on CC2652P  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20221102.zip)  
* [Description](https://zig-star.com/projects/zigbee-stick-v4/)  
* [Flashing instructions](https://zig-star.com/radio-docs/flash-cc-bsl/) or see "Flashing CC1352/CC2652/CC2538 based adapters" below
* [Buy](https://zig-star.com)

<img src="../../images/ZigStar-USB.png" width="200" />
</details>

<details>
<summary>CircuitSetup's CC2652P2 USB Coordinator</summary>

CC2652P based USB connected adapter pre-programmed with Z-Stack  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20221102.zip)  
* [Flashing instructions](https://circuitsetup.us/product/usb-zigbee-stick-z-stack-coordinator/) or see "Flashing CC1352/CC2652/CC2538 based adapters" below
* [Buy](https://circuitsetup.us/product/usb-zigbee-stick-z-stack-coordinator/)

<img src="../../images/circset_cc2652.jpg" width="200" />
</details>

<details>
<summary>SMLIGHT CC2652P Zigbee USB Adapter SLZB-02</summary>

CC2652P factory-made Zigbee USB coordinator with external 6dB antenna and worldwide delivery  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_other_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_other_router_20221102.zip)  
* [Description](https://smartlight.me/smart-home-devices/zigbee-devices/zigbee-coordinator-v4-cc2652p)  
* [Flashing instructions](https://smartlight.me/flashing_slzb-02) or see "Flashing CC1352/CC2652/CC2538 based adapters" below
* Buy: [Official store](https://smartlight.me/smart-home-devices/zigbee-devices/zigbee-coordinator-v4-cc2652p), [Tindie](https://www.tindie.com/products/smartlightme/zigbee-cc2652p-coordinator-dongle-stick-adapter/)

<img src="../../images/CC2652P_smartlight_zigbee_coordinator.png" width="200" />
</details>

<details>
<summary>SONOFF Zigbee 3.0 USB Dongle Plus ZBDongle-P</summary>

CC2652P based USB connected adapter pre-programmed and with enclosure.

Note before buying that ITead slightly confusingly now sells both the Dongle Plus "ZBDongle-P" (based on CC2652P), and the Dongle Plus V2 "ZBDongle-E" (based on EFR32MG21).
This section is about the "ZBDongle-P", for "ZBDongle-E" see below.

* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20221102.zip)  
* [Flashing instructions](https://sonoff.tech/wp-content/uploads/2021/09/Zigbee-3.0-USB-dongle-plus-firmware-flashing-1-1.docx) ([PDF version](https://github.com/Koenkk/zigbee2mqtt.io/raw/master/docs/guide/adapters/flashing/zigbee-3.0-usb-dongle-plus-firmware_flashing-1-1.pdf) and [required python script](https://github.com/Koenkk/zigbee2mqtt.io/raw/master/docs/guide/adapters/flashing/zigbee-3.0-usb-dongle-plus-uartLog.zip)) or see "Flashing CC1352/CC2652/CC2538 based adapters" below  
* [Buy](https://itead.cc/product/sonoff-zigbee-3-0-usb-dongle-plus/)

<img src="../../images/sonoff_plus_dongle.png" width="200" />
</details>

<details>
<summary>Vision CC2652 dongle</summary>

Adapter or small development board based on CC2652R (VS201) or CC2652P (VS202)  
Coordinator firmware: [VS201](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC2652R_coordinator_20230507.zip) [VS202](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20230507.zip)  
Router firmware: [VS201](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC2652R_router_20221102.zip) [VS202](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20221102.zip)  
* [Flashing instructions](https://www.aliexpress.com/item/1005002823262979.html?spm=a2g0o.productlist.0.0.1a1640b82yeViq&algo_pvid=e01b1872-ca85-4814-971f-ce9b058855b8&algo_exp_id=e01b1872-ca85-4814-971f-ce9b058855b8-0&pdp_ext_f=%7B%22sku_id%22%3A%2212000022351543786%22%7D) or see "Flashing CC1352/CC2652/CC2538 based adapters" below
* Buy: [VS201](https://www.aliexpress.com/item/1005002809329614.html) [VS202](https://www.aliexpress.com/item/1005003393047763.html)

<img src="../../images/cc26x2r1_dongle.jpg" width="200" />
</details>

<details>
<summary>JetHome JetStick Z2/ZB6UX CC2652P1</summary>

Powerful CC2652P1 factory-made Zigbee USB dongle with external antenna.
* [Documentation](https://docs.jethome.ru/en/zigbee/sticks/jetstick_z2.html)
* [Flash instructions](https://docs.jethome.ru/en/zigbee/howto/cc_2538_bsl.html#zigbee-howto-2538-bsl)
* [Firmware](https://docs.jethome.ru/en/zigbee/software/ti_cc2652p.html#zigbee-software-ti-cc2652p)
* Buy: [JetStick Z2](https://jethome.ru/z2/)

<img src="../../images/jetstick_z2.png" width="200" />
</details>

<details>
<summary>SMLIGHT SLZB-07p7 Zigbee USB CC2652P7 adapter</summary>  

Powerful, tiny modern design, developed for Zigbee2MQTT, pre-flashed and ready to use Zigbee adapter. Autodiscovery in Home Assistant. AutoBSL (remote update) enabled.  
Rich packing that includes:
| Package includes | SLZB-07p7 adapter | +3dB antenna 360° | QR-manual |
|:-|:-:|:-:|:-:|
|Quantity: |1 pcs|1 pcs|1 pcs|1 pcs|  
|Image| <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07p7-adapter.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07x-antenna.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07x-qr.jpg" width="200" /> |  

Remote Zigbee update, autodiscovery, LEDs, and flashing pins. It fits home and business use.  

- Zigbee firmware:  
--[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P7_coordinator_20230507.zip).  
- [Product page](https://smlight.tech/product/slzb-07p7/).  
- Buy: [Official Store - Worldwide](https://smartlight.me/smart-home-devices/zigbee-devices/coordinator-slzb-07p7), [Aliexpress - Worldwide](https://www.aliexpress.com/item/1005006273914143.html).  
Local fast delivery: [Australia](https://shop.dialedin.com.au/products/smlight-slzb-07p7-usb-zigbee-adapter), [France](https://www.domadoo.fr/fr/interface-domotique/7045-smlight-dongle-usb-zigbee-cc2652p7-soc-antenne-3db-zigbee2mqtt-et-zha.html), [Poland](https://pcblab.io/szukaj?controller=search&s=slzb).  

    | Product picture 1 | Product picture 2 | Product picture 3 |
    |:-:|:-:|:-:|
    |<img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07p7-main1-title.jpg" width="200">|<img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07p7-main2-title.jpg" width="200">|<img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07p7-main3-title.jpg" width="200">|     

</details>

### Network (TCP)

<details>
<summary>Tube's Zigbee Gateways (CC2652P2 variant)</summary>

Open source hardware CC2652P and ESP32 based Zigbee to Ethernet Coordinator (left picture), POE variant is also available (right picture)  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20221102.zip)  
* [Flashing instructions](https://github.com/tube0013/tube_gateways) or see "Flashing CC1352/CC2652/CC2538 based adapters" below
* [Buy](https://www.tubeszb.com/)

<img src="../../images/Tubes_Zigbee_Gateways_CC2652P2_variant.jpg" width="200" /> <img src="../../images/Tubes_Zigbee_PoE_Coordinator_CC2652P2_variant.jpg" width="200" />
</details>

<details>
<summary>cyijun OpenZ3Gateway</summary>

An open source Zstack3 gateway powered by ESP8266 and CC2652P modules. One costs less than 60 CNY in China.  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20221102.zip)
* Flashing instructions; see "Flashing CC1352/CC2652/CC2538 based adapters" below
* [Description](https://github.com/cyijun/OpenZ3Gateway)  
* [Tindie](https://www.tindie.com/products/cyijun/openz3gateway/)  

<img src="../../images/openz3gateway.jpg" width="200" />
</details>

<details>
<summary>XGG 52PZ2MGateway</summary>

An open source Zstack3 gateway powered by ESP8266 and CC2652P modules. One costs less than 60 CNY in China.  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20221102.zip)  
* Flashing instructions; see "Flashing CC1352/CC2652/CC2538 based adapters" below
* [Description](https://shop68536829.taobao.com/)  
* [Buy](https://shop68536829.taobao.com/)  

<img src="../../images/CC2652P-Z2M.jpg" width="200" />
</details>

<details>
<summary>SMLIGHT Zigbee LAN Adapter CC2652P Model SLZB-05</summary>

Pre-flashed ready-to-use Zigbee LAN CC2652P Adapter, factory made, metal case, 6dB antenna, worldwide delivery, Zigbee firmware can be manually updated via USB in 5 easy steps, customer/tech support, fast order processing.  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_other_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_other_router_20221102.zip)  
* [Description](https://smartlight.me/smart-home-devices/zigbee-devices/smlight-zigbee-lan-adapter-slzb-05en)  
* Flashing instructions; see "Flashing CC1352/CC2652/CC2538 based adapters" below
* Buy: [eBay](https://www.ebay.com/itm/165178757770) [Official store](https://smartlight.me/smart-home-devices/zigbee-devices/smlight-zigbee-lan-adapter-slzb-05en) [Telegram](https://t.me/smartlightme)

<img src="https://smartlight.me/ebay/images/slzb_05/smartlight-zigbee-lan-slzb-05.jpg" width="200" />
</details>

### Hybrid (USB + Network)

<details>
<summary>Gio-dot Z-Bee Duo with CC2652P</summary>

4 in 1 zigbee adapter: USB Stick, WiFi, LAN, PI Zero Hat, with external antenna and 3D printed case. 
* [Description](https://gio-dot.github.io/Z-Bee-Duo/)  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_other_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/blob/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_other_router_20221102.zip)  
* [Flashing instructions](https://gio-dot.github.io/Z-Bee-Duo/Firmware-upgrade) or see "Flashing CC1352/CC2652/CC2538 based adapters" below
* [Buy](https://www.tindie.com/products/gio_dot/z-bee-duo-modular-cc2652p-zigbee-30-adapter/)

<img src="../../images/Z-Bee_Duo-ico.jpg" width="200" />
</details>

<details>
<summary>ZigStar LAN Coordinator</summary>

Powerful Open source LAN Coordinator with external antenna on CC2652P  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20221102.zip)  
* [Description](https://zig-star.com/projects/zigbee-gw-lan/)  
* [Flashing instructions](https://zig-star.com/radio-docs/flash-cc-bsl/) or see "Flashing CC1352/CC2652/CC2538 based adapters" below
* [Buy](https://zig-star.com) [Tindie](https://www.tindie.com/products/zigstar/zigstar-lan-gateway/)

<img src="../../images/ZigStar-LAN.png" width="200" />
</details>

<details>
<summary>ZigStar PoE Coordinator</summary>

Open source PoE af Coordinator with external antenna on CC2652P  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20221102.zip)  
* [Description](https://zig-star.com/projects/zigstar-olizig/)  
* [Flashing instructions](https://zig-star.com/radio-docs/zigstar-multi-tool/) or see "Flashing CC1352/CC2652/CC2538 based adapters" below
* [Buy](https://zig-star.com) [Tindie](https://www.tindie.com/products/zigstar/zigstar-olizig-poe/) 

<img src="../../images/ZigStar-PoE.png" width="200" />
</details>

<details>
<summary>SMLIGHT SLZB-06 Zigbee+Matter/Thread+Bluetooth Ethernet USB POE WiFi LAN adapter</summary>  

Powerful, tiny modern design, developed for Zigbee2MQTT, PoE supported, pre-flashed and ready to use Zigbee adapter.  
It supports **Zigbee 3.0**, experimental **Matter-over-Thread** and **Bluetooth**. Connections: Ethernet (+PoE), LAN, USB, and WiFi.  Rich packing that includes:
| Package includes | SLZB-06 adapter | +5dB antenna 360° | Adhesive tape | Screws | Screwdriver | MicroUSB-Type-C | Screw-fix helper |
|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|Quantity: |1 pcs|1 pcs|2 pcs|2 pcs|1 pcs|1 pcs|1 pcs|  
|Image| <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-adapter.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-antenna.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-adhesive.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-screws.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-screwdriver.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-microusb.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-qr.jpg" width="200" /> |  

Remote update (Zigbee and Core), modern UI firmware. Optoelectronic isolation for Ethernet, LEDs and physical button for interacting with users. It fits home and business use.  

- Zigbee firmware:  
-- [Zigbee chip update process OTA](https://smlight.tech/manual/slzb-06/guide/flashing-and-updating/updating-zigbee.html#zigbee-auto-update-over-the-web-interface-recommended) for automatic updates.  
-- [Firmwares folder](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin) for manual updates.  
- Core firmware:  
-- [Functionality and screenshots](https://smlight.tech/manual/slzb-06/guide/configuration/)  
-- [Video review 1](https://www.youtube.com/watch?v=WwYVRuVpAJI), [Video review 2](https://www.youtube.com/watch?v=q3cWHQ8CdcA)
- [Manual](https://smlight.tech/manual/slzb-06/)
- [Product page](https://smlight.tech/product/slzb-06/)
- Buy: [Official Store - Worldwide](https://smartlight.me/smart-home-devices/zigbee-devices/smlight-slzb-06en), [Aliexpress - Worldwide](https://www.aliexpress.com/item/1005004942648430.html), [Tindie - Worldwide](https://www.tindie.com/products/smartlightme/smlight-slzb-06-zigbee-ethernet-poe-usb-wifi-adapt/).  
Local fast delivery: [AU](https://shop.dialedin.com.au/products/smlight-slzb-06-zigbee-adapter), [AT](https://www.hobbyelectronica.nl/product/slzb-06-zigbee-ethernet-poe-usb-adapter/), [BE](https://www.hobbyelectronica.nl/product/slzb-06-zigbee-ethernet-poe-usb-adapter/), [CH](https://shop.swiss-domotique.ch/de/gateways-antennen/2387-smlight-zigbee-ethernet-poe-usb-wifi-adapter-slzb-06.html), [EE](https://improveit.lt/produktas/smlight-slzb-06-zigbee-ethernet-poe-usb-lan-wifi-adapteris/), [FR](https://www.domadoo.fr/fr/box-domotique/7042-smlight-adaptateur-usb-ethernet-poe-zigbee-30-cc2652p-zigbee2mqtt-et-zha.html), [DE](https://www.hobbyelectronica.nl/product/slzb-06-zigbee-ethernet-poe-usb-adapter/), [LT](https://improveit.lt/produktas/smlight-slzb-06-zigbee-ethernet-poe-usb-lan-wifi-adapteris/), [LV](https://improveit.lt/produktas/smlight-slzb-06-zigbee-ethernet-poe-usb-lan-wifi-adapteris/), [PL](https://pcblab.io/slzb-06-adapter-zigbee-cc2652p-ethernet-poe-usb-lan-wifi.html), [TH](https://shopee.co.th/Zigbee-SLZB-06-LAN-POE-USB-WIFI-Hybrid-Coordinator-CC2652P-SMARTLIGHT-SLZB-06-HASS-Zigbee2mqtt-ZHA-CC2652-CC2531-i.25068823.21062349644), [UK](https://zigbeesmart.co.uk/products/zigbee-lan-poe-coordinator-smlight-slzb-06), [US official](https://cloudfree.shop/product/smlight-zigbee-ethernet-adapter/), [US Amazon](https://www.amazon.com/SMLIGHT-SLZB-06-Ethernet-Zigbee2MQTT-Assistant/dp/B0BL6DQSB3).  

    | Product picture | Interface screenshot | Youtube review |
    |:-:|:-:|:-:|
    |<img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-main-title.jpg" width="200" />|<img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-main-firmware.jpg" width="200" />|[<img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-main-videolink-small.jpg" width="200" />](https://www.youtube.com/watch?v=q3cWHQ8CdcA)|     

</details>

<details>
<summary>ZigStar UZG-01 - Universal ZigBee Gateway</summary>

Open source PoE af Coordinator with external antenna on CC2652P
* [ESP32 Firmware](https://github.com/mercenaruss/uzg-firmware) Repository with latest firmware
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/)  
* [Official site](https://uzg.zig-star.com) with documentation
* [Flashing instructions](https://uzg.zig-star.com/flashing-and-updating/) or see [Flashing CC1352/CC2652/CC2538 based adapters](#flashing-cc1352-cc2652-cc2538-based-adapters)
* Buy: [Official Store](https://uzg.zig-star.com),[Tindie](https://www.tindie.com/stores/zigstar/),[Elecrow](https://www.elecrow.com/zigstar-uzg-01-universal-zigbee-gateway.html)

|           ZigStar UZG-01              |                  Dimensions           | 
| :-----------------------------------: | :-----------------------------------: | 
| <img src="../../images/Zigstar-UZG01-1.png" width="200" /> | <img src="../../images/Zigstar-UZG01-2.png" width="200" /> |

</details>

<details>
<summary>SMLIGHT SLZB-06p7 Zigbee Ethernet USB POE WiFi LAN adapter</summary>  

Powerful, tiny modern design, developed for Zigbee2MQTT, PoE supported, pre-flashed and ready to use Zigbee adapter.  
It supports Zigbee 3.0, Ethernet, LAN, USB, and WiFi connections.  Rich packing that includes:
| Package includes | SLZB-06p7 adapter | +5dB antenna 360° | Adhesive tape | Screws | Screwdriver | MicroUSB-Type-C | Screw-fix helper |
|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|Quantity: |1 pcs|1 pcs|2 pcs|2 pcs|1 pcs|1 pcs|1 pcs|  
|Image| <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06p7-adapter.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-antenna.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-adhesive.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-screws.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-screwdriver.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-microusb.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-qr.jpg" width="200" /> |  

Remote update (Zigbee and Core), modern UI firmware. Optoelectronic isolation for Ethernet, LEDs and physical button for interacting with users. It fits home and business use.  

- Zigbee firmware:  
-- [Zigbee chip update process OTA](https://smlight.tech/manual/slzb-06/guide/flashing-and-updating/updating-zigbee.html#zigbee-auto-update-over-the-web-interface-recommended) for automatic updates.  
-- [Firmwares folder](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin) for manual updates.  
- Core firmware:  
-- [Functionality and screenshots](https://smlight.tech/manual/slzb-06/guide/configuration/)  
-- [Video review](https://www.youtube.com/watch?v=q3cWHQ8CdcA)
- [Manual](https://smlight.tech/manual/slzb-06/)
- [Product page](https://smlight.tech/product/slzb-06p7/)
- Buy: [Official Store - Worldwide](https://smartlight.me/smart-home-devices/zigbee-devices/coordinator-slzb-06p7), [Aliexpress - Worldwide](https://www.aliexpress.com/item/1005004942648430.html).   
Local fast delivery: [AU](https://shop.dialedin.com.au/products/smlight-slzb-06p7-zigbee-adapter), [AT](https://www.hobbyelectronica.nl/product/slzb-06p7-zigbee-ethernet-poe-usb-adapter/), [BE](https://www.hobbyelectronica.nl/product/slzb-06p7-zigbee-ethernet-poe-usb-adapter/), [DE](https://www.hobbyelectronica.nl/product/slzb-06p7-zigbee-ethernet-poe-usb-adapter/), [PL](https://pcblab.io/slzb-06p7-adapter-zigbee-cc2652p7-ethernet-poe-usb-lan-wifi.html).    

    | Product picture | Interface screenshot | Youtube videoreview |
    |:-:|:-:|:-:|
    |<img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06p7-main-title.jpg" width="200" />|<img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06p7-main-firmware.jpg" width="200" />|[<img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-main-videolink-small.jpg" width="200" />](https://www.youtube.com/watch?v=q3cWHQ8CdcA)|     

</details>

<details>
<summary>cod.m Zigbee Coordinator CC2652P7 (CZC-1.0)</summary>

cod.m ZigBee Coordinator (CZC) - Network (LAN/Wi-Fi) with Power over Ethernet (optional) or USB-C.

Features:
* CC2652P7 Texas Instruments multiprotocol 2.4GHz radio module
* ZigBee 3.x, Z-Stack firmware (Koenkk)
* LAN, WLAN or USB mode PoE (802.3af) or USB-C power, <1W power consumption
* ESP32 open source firmware ([cod.m UZG Fork](https://github.com/codm/czc-firmware/releases))
* ZigBee firmware update via network and in future via web interface
* ESP32 firmware update via web interface or USB-C (Auto-BSL)
* [3D-printed housing (CC-BY-NC-SA)](https://www.printables.com/de/model/857864-codm-zigbee-coordinator-cases-czc-10)
* Made in Germany, CE, RoHS, WEEE

Links:
* [ESP32 firmware](https://github.com/codm/czc-firmware/releases)
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin)
* [Documentation](https://docs.codm.de/en/zigbee/coordinator/)
* [Buy](https://shop.codm.de/en/automation/zigbee/40/zigbee-coordinator-cc2652p7-PoE)

<img src="../../images/codm-cc2652p7-zigbee-coordinator.jpg" width="200" /> <img src="../../images/codm-cc2652p7-zigbee-coordinator-schematic.png" width="200" />
</details>

### Hub

<details>
<summary>JetHome JetHub D1+</summary>

Controller with ZigBee module onboard with external antenna.

JetHub D1+ is DIN-rail home automation controller with Ubuntu/Debian OS and a lot of peripherals.

Based on TI CC2652P1.

* [Documentation](https://docs.jethome.ru/en/controllers/linux/din_rail/d1p.html)
* [Buy](https://jethome.ru/d1p/)

<img src="../../images/jethub_d1_full.png" width="200" />
</details>

### Custom

<details>
<summary>cod.m Zigbee CC2652P RPi Module</summary>

Raspberry Pi GPIO module with CC2652P and integrated power amplifier (+20dBm)  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20221102.zip)  
* [Flashing instructions](https://github.com/codm/cc2652-raspberry-pi-module#firmware) or see "Flashing CC1352/CC2652/CC2538 based adapters" below
* [Buy](https://shop.codm.de/automation/zigbee/33/zigbee-cc2652p2-raspberry-pi-module)

<img src="../../images/codm-cc2652p-rpi.jpg" width="200" />
</details>
<details>
<summary>ZigStar ZigiHAT PoE </summary>

Powerful Open source Pi HAT based on CC2652P with PoE,RTC onboard
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20221102.zip)  
* [Description](https://zig-star.com/projects/zigbee-zigihat/)  
* [Flashing instructions](https://zig-star.com/projects/zigbee-zigihat/#flashing) or see "Flashing CC1352/CC2652/CC2538 based adapters" below  
* [Buy](https://zig-star.com)

<img src="../../images/ZigiHAT.png" width="200" />
</details>

<details>
<summary>Texas Instruments LAUNCHXL-CC1352P-2</summary>

USB connected development kit, based on CC1352P chip  
These devices have two serial devices built in. Make sure you put the right serial device in the [configuration](../configuration/) or use auto detect (completely remove the `serial` section from `configuration.yaml`) if you only have one Texas Instruments CC device connected to your system.  
An external antenna can be connected which could increase range: [requires resoldering a tiny capacitor (moving C14 to C24)](http://e2e.ti.com/support/wireless-connectivity/zigbee-and-thread/f/158/t/880219?LAUNCHXL-CC26X2R1-Antenna-CC26X2R1)  

* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_router_20221102.zip)  
* [Flashing instructions](./flashing/flashing_via_uniflash.md) or see "Flashing CC1352/CC2652/CC2538 based adapters" below
* [Buy](http://www.ti.com/tool/LAUNCHXL-CC1352P)

<img src="../../images/cc1352p2.jpg" width="200" />
</details>

<details>
<summary>Texas Instruments LAUNCHXL-CC26X2R1</summary>

USB connected development kit, based on CC2652R chip  
These devices have two serial devices built in. Make sure you put the right serial device in the [configuration](../configuration/) or use auto detect (completely remove the `serial` section from `configuration.yaml`) if you only have one Texas Instruments CC device connected to your system.  
An external antenna can be connected which could increase range: [requires resoldering a tiny capacitor](https://github.com/Koenkk/zigbee2mqtt/issues/2162#issuecomment-570286663)  

* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC2652R_coordinator_20230507.zip)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_router_20221102/router/Z-Stack_3.x.0/bin/CC2652R_router_20221102.zip)  
* [Flashing instructions](./flashing/flashing_via_uniflash.md) or see "Flashing CC1352/CC2652/CC2538 based adapters" below
* [Buy](http://www.ti.com/tool/LAUNCHXL-CC26X2R1)

<img src="../../images/cc26x2r1.jpg" width="200" />
</details>

<details>
<summary>Texas Instruments LP-CC2652R7</summary>

USB connected development kit, based on CC2652R7 chip  
These devices have two serial devices built in. Make sure you put the right serial device in the [configuration](../configuration/) or use auto detect (completely remove the `serial` section from `configuration.yaml`) if you only have one Texas Instruments CC device connected to your system.

* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC2652R7_coordinator_20230507.zip)  
* [Flashing instructions](./flashing/flashing_via_uniflash.md) or see "Flashing CC1352/CC2652/CC2538 based adapters" below
* [Buy](http://www.ti.com/tool/LP-CC2652R7)

<img src="../../images/CC2652R7.png" width="200" />
</details>

<details>
<summary>Texas Instruments LP-CC1352P7</summary>

USB connected development kit, based on CC1352P7 chip  
These devices have two serial devices built in. Make sure you put the right serial device in the [configuration](../configuration/) or use auto detect (completely remove the `serial` section from `configuration.yaml`) if you only have one Texas Instruments CC device connected to your system.

* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_3.x.0_coordinator_20230507/coordinator/Z-Stack_3.x.0/bin/CC1352P7_coordinator_20230507.zip)  
* [Flashing instructions](./flashing/flashing_via_uniflash.md) or see "Flashing CC1352/CC2652/CC2538 based adapters" below
* [Buy](https://www.ti.com/tool/LP-CC1352P7)

<img src="../../images/LP-CC1352P7.jpg" width="200" />
</details>


## Not recommended

### USB

<details>
<summary>Texas Instruments CC2531</summary>

USB connected Zigbee adapter with PCB antenna  
**Warning 1:** requires additional hardware to flash (CC debugger + download cable)  
**Warning 2:** might not be powerful enough to handle networks of 20+ devices  
**Warning 3:** this adapter has bad range  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_Home_1.2/bin)  
* [Flashing instructions](./flashing/flashing_the_cc2531.md)  
* [Buy](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20191108075039&SearchText=cc2531)

<img src="../../images/cc2531.jpg" width="200" />
</details>

### Serial

<details>
<summary>Vision CC2538+CC2592 Dongle(VS203)</summary>

Adapter or small development board based on CC2538 and CC2592 chip  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)  
* [Flashing instructions](https://www.aliexpress.com/item/1005002809329614.html?spm=a2g0o.store_pc_allProduct.8148356.2.4d7f1012TTc3uX)  
* [Buy](https://www.aliexpress.com/item/1005002809329614.html?spm=a2g0o.store_pc_allProduct.8148356.2.4d7f1012TTc3uX)

<img src="../../images/cc2538_cc2592_dongle.jpg" width="200" />
</details>

<details>
<summary>Texas Instruments CC2530</summary>

Serial connected adapter with external antenna optionally with CC2591 or CC2592 RF frontend  
**Warning 1:** requires additional hardware to flash (CC debugger + download cable)  
**Warning 2:** might not be powerful enough to handle networks of 20+ devices  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin)  
* [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_Home_1.2/bin)  
* [Flashing instructions](../../advanced/zigbee/05_create_a_cc2530_router.md#2-flashing-the-cc2530)  
* [Connecting](./flashing/connecting_cc2530.md)  
* Buy: [AliExpress](http://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20181213104041&SearchText=cc2530) [GBAN](http://www.gban.cn/en/product_show.asp?id=43) [Tindie](https://www.tindie.com/products/GiovanniCas/cc2530-cc2592-zigbee-dongle/)

<img src="../../images/cc2530.jpg" width="200" />
</details>
<details>
<summary>Texas Instruments CC2538</summary>

Serial connected adapter with CC2592 RF Amplifier  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)  
* [Flashing](./flashing/flashing_the_cc2538.md)  
* Buy: [AliExpress](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20191108075039&SearchText=cc2538)

<img src="../../images/cc2538.jpg" width="200" />
</details>

### Network

<details>
<summary>XGG gateway</summary>

An open source zigbee gateway powered by ESP8266 and CC2538+CC2592PA (XGG 38PZ2MGateway) or CC2530 (XGG 30Z2MGateway)  
Coordinator firmware: [XGG 38PZ2MGateway](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin) [XGG 30Z2MGateway](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin)  
* [Contact](https://shop68536829.taobao.com/)

<img src="../../images/CC2652P-Z2M.jpg" width="200" />
</details>

### Custom

<details>
<summary>Texas Instruments CC2538 HAT</summary>

Raspberry pinout compatible HAT with CC2538 and optional external antenna  
* [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)  
* [Flashing](./flashing/flashing_the_cc2538.md)  
* [Buy](https://www.tindie.com/products/GiovanniCas/zigbee-hat-with-cc2538-for-raspberry/)

<img src="../../images/cc2538hat.jpg" width="200" />
</details>
