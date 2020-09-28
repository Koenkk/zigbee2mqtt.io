# Supported adapters

Zigbee2MQTT officially supports the following adapters:

### Texas Instruments CC2531
![CC2531](../images/cc2531.jpg)

- USB connected Zigbee adapter with PCB antenna.
- Cheap but not very powerful (+- $5), may not be powerfull enough for larger networks (20+ devices).
- Limited range, ~30m line of sight
- Requires additional hardware to be flashed (CC debugger and downloader cable)
- Coordinator firmware: [Zigbee 1.2 (recommended)](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin) and [Zigbee 3.0](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)
- Router firmware: [Zigbee 1.2](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/CC2531/bin), can be re-paired pressing the S2 button for 5 seconds.
- Can be bought on [AliExpress](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20191108075039&SearchText=cc2531)
- [How to flash with CC debugger](../information/flashing_the_cc2531.md) or [alternative flashing methods](./alternative_flashing_methods.md)

### Electrolama zig-a-zig-ah! (zzh!)
![zzh](../images/zzh.jpg)

- USB connnected Zigbee adapter
- **Very powerful**, will easily handle networks of 100+ devices.
- Very good range (due to external antenna)
- Can be bought on [Tindie](https://www.tindie.com/products/electrolama/zzh-cc2652r-multiprotocol-rf-stick/#product-reviews)
- Coordinator firmware: [Zigbee 3.0](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin) (use **CC26X2R1_*.zip**)
- [Flashing guide](https://electrolama.com/projects/zig-a-zig-ah/#flash-firmware) (requires no additional hardware to flash)
- When migrating from another dongle (e.g. CC2531), make sure to modify your `pan_id` in your [configuration](configuration.md), otherwise Zigbee2MQTT won't start.

### slaesh's CC2652RB stick
![slaesh's CC2652RB stick](../images/slaeshs_cc2652rb_stick.jpg)

- USB connnected Zigbee adapter
- **Very powerful**, will easily handle networks of 100+ devices.
- Very good range (due to external antenna, SMA female connector)
- Can be bought on [Tindie](https://www.tindie.com/products/slaesh/cc2652-zigbee-coordinator-or-openthread-router/#product-reviews)
- Coordinator firmware: [Zigbee 3.0](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin) (use **CC2652RB_*.zip**)
- [Flashing guide](https://slae.sh/projects/cc2652/#flashing) (requires no additional hardware to flash)
- When migrating from another dongle (e.g. CC2531), make sure to modify your `pan_id` in your [configuration](configuration.md), otherwise Zigbee2MQTT won't start.

### Texas Instruments CC2530 (optionally with a CC2591 or CC2592 RF frontend)
![CC2530](../images/cc2530.jpg)

- Serial connected Zigbee adapter with most of the times and external atenna.
- Cheap but not very powerful (+- $10), may not be powerfull enough for larger networks (20+ devices).
- Good range, ~50-60m line of sight, sensitivity can be increased when used together with a CC2591 or CC2592
- Requires additional hardware to be flashed (CC debugger)
- Coordinator firmware: [Zigbee 1.2 (recommended)](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin) and [Zigbee 3.0](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)
- Router firmware: [Zigbee 1.2](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/CC2530/bin), can be re-paired if you power on/power off the device three times (power on, wait 2 seconds, power off, repeat this cycle three times)
- Can be bought on e.g. AliExpress: [CC2530](http://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20181213104041&SearchText=cc2530), [CC2530 + CC2591](http://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20181213104521&SearchText=cc2530+cc2591), [GBAN GB2530](http://www.gban.cn/en/product_show.asp?id=43)
- How to flash: see flashing section of [How to create a CC2530 router](../how_tos/how_to_create_a_cc2530_router.md) or [alternative flashing methods](./alternative_flashing_methods.md)
- [Connecting the CC2530](./connecting_cc2530.md)

### Texas Instruments CC2538 with CC2592 RF Amplifier
![CC2538](../images/cc2538.jpg)

- Serial connected Zigbee adapter with external antenna.
- Cheap but needs specific PCBs to be used as coordinator (+- $5 bare chip)
- Very powerful and capable to handle +150 devices directly connected.
- Very good range, ~800m line of sight, sensitivity is due to the onboard CC2592 Power Amplifier (20db)
- Requires JTAG programmer to be flashed
- Coordinator firmware: [Zigbee 3.0](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)
- Bare module can be bought on [AliExpress](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20191108075039&SearchText=cc2538)
- Complete dongle preflashed can be bought on [Tindie](https://www.tindie.com/products/GiovanniCas/cc2538-cc2592-zigbee-dongle-new-zb30/)
- [How to flash](./flashing_the_cc2538.md)

### Texas Instruments LAUNCHXL-CC26X2R1
![CC26X2R1](../images/cc26x2r1.jpg)

- USB connected Zigbee adapter.
- Expensive but **very powerful** ($40), will easily handle networks of 100+ devices.
- Very good range
- Only available as a development board, therefore it is quite large
- Has an onboard flasher, no additional hardware required to flash
- Coordinator firmware: [Zigbee 3.0](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin) (use **CC26X2R1_*.zip**)
- Can be bought via [Texas Instruments](http://www.ti.com/tool/LAUNCHXL-CC26X2R1)
- [Flash via UNIFLASH](./flashing_via_uniflash.md)
- When migrating from another dongle (e.g. CC2531), make sure to modify your `pan_id` in your [configuration](configuration.md), otherwise Zigbee2MQTT won't start.
- Has UF.L connector for external antenna ([requires resoldering a tiny capacitor (moving C14 to C24)](http://e2e.ti.com/support/wireless-connectivity/zigbee-and-thread/f/158/t/880219?LAUNCHXL-CC26X2R1-Antenna-CC26X2R1)) which could increase range even further.
- This device has two serial devices built in. Make sure you put the right serial device in the [configuration](configuration.md) or use auto detect if you only have one Texas Instruments CC devices connected to your system.

### Texas Instruments LAUNCHXL-CC1352P-2
![CC1352P-2](../images/cc1352p2.jpg)

- USB connected Zigbee adapter.
- Expensive but **very powerful** ($50), will easily handle networks of 100+ devices.
- Very good range
- Only benefit compared to the CC26X2R1 is that it is capable of sub-1GHz  (for Zigbee2MQTT use-case this makes no difference)
- Has SMA connector for external antenna ([requires resoldering a tiny capacitor](https://github.com/Koenkk/zigbee2mqtt/issues/2162#issuecomment-570286663)) which could increase range even further.
- Only available as a development board, therefore it is quite large (it's larger than the CC26X2R1)
- Has an onboard flasher, no additional hardware required to flash
- Coordinator firmware: [Zigbee 3.0](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin) (use **CC1352P_2_*.zip**)
- Can be bought via [Texas Instruments](http://www.ti.com/tool/LAUNCHXL-CC1352P)
- [Flash via UNIFLASH](./flashing_via_uniflash.md)
- When migrating from another dongle (e.g. CC2531), make sure to modify your `pan_id` in your [configuration](configuration.md), otherwise Zigbee2MQTT won't start.
- This device has two serial devices built in. Make sure you put the right serial device in the [configuration](configuration.md) or use auto detect if you only have one Texas Instruments CC devices connected to your system.

### ConBee II
![Conbee II](../images/conbee.jpg)

- USB connnected Zigbee adapter
- **Very powerful**, will easily handle networks of 100+ devices.
- Support is still experimental. ([discussion](https://github.com/Koenkk/zigbee-herdsman/issues/72))
- In case you are getting the following error: `Error: Failed to connect to the adapter (Error: SRSP - SYS - ping after 6000ms)` set the following in your `configuration.yaml`.

```yaml
serial:
  adapter: deconz
```
