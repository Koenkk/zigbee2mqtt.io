# Supported adapters

Zigbee2mqtt supports the following adapters:

### Texas Instruments CC2531
![CC2531](../images/cc2531.jpg)

- USB connected Zigbee adapter with PCB antenna.
- Cheap but not very powerful (+- $5), may not be powerfull enough for larger networks (30/40+ devices).
- Limited range, ~30m line of sight
- Requires CC debugger to be flashed
- Coordinator firmware: [Zigbee 1.2](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin) and [Zigbee 3.0](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)
- Router firmware: [Zigbee 1.2](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/CC2531/bin), can be re-paired pressing the S2 button for 5 seconds.
- Can be bought on [AliExpress](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20191108075039&SearchText=cc2531)
- [How to flash](../getting_started/flashing_the_cc2531.md) or [alternative flashing methods](./alternative_flashing_methods.md)

### Texas Instruments CC2530 (optionally with a CC2591 or CC2592 RF frontend)
![CC2530](../images/cc2530.jpg)

- Serial connected Zigbee adapter with most of the times and external atenna.
- Cheap but not very powerful (+- $10), may not be powerfull enough for larger networks (30/40+ devices).
- Good range, ~50-60m line of sight, sensitivity can be increased when used together with a CC2591 or CC2592
- Requires CC debugger to be flashed
- Coordinator firmware: [Zigbee 1.2](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin) and [Zigbee 3.0](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)
- Router firmware: [Zigbee 1.2](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/CC2530/bin), can be re-paired if you power on/power off the device three times (power on, wait 2 seconds, power off, repeat this cycle three times)
- Can be bought on e.g. AliExpress: [CC2530](http://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20181213104041&SearchText=cc2530), [CC2530 + CC2591](http://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20181213104521&SearchText=cc2530+cc2591), [GBAN GB2530](http://www.gban.cn/en/product_show.asp?id=43)
- How to flash: see flashing section of [How to create a CC2530 router](../how_tos/how_to_create_a_cc2530_router.md) or [alternative flashing methods](./alternative_flashing_methods.md)
- [Connecting the CC2530](./connecting_cc2530.md)
- Requires following in `configuration.yaml`

```yaml
advanced:
  rtscts: false
```

### Texas Instruments CC26X2R1
![CC26X2R1](../images/cc26x2r1.jpg)

- USB connected Zigbee adapter.
- Expensive but **very powerful** ($40), will easily handle networks of 100+ devices.
- Very good range
- Only available as a development board, therefore it is quite large
- Has an onboard flasher, no additional hardware required to flash
- Coordinator firmware: [Zigbee 3.0](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin)
- Can be bought via [Texas Instruments](http://www.ti.com/tool/LAUNCHXL-CC26X2R1)
- [Flash via UNIFLASH](./flashing_via_uniflash.md)
- When migrating from another dongle (e.g. CC2531), make sure to modify your `pan_id` in your [configuration](configuration.md), otherwise Zigbee2mqtt won't start.
- This device has two serial devices built in. Make sure you put the right serial device in the [configuration](configuration.md) or use auto detect if you only have one Texas Instruments CC devices connected to your system.

### Texas Instruments CC1352P-2
![CC1352P-2](../images/cc1352p2.jpg)

- USB connected Zigbee adapter.
- Expensive but **very powerful** ($50), will easily handle networks of 100+ devices.
- Very good range
- Only benefit compared to the CC26X2R1 is that it allows an external antenna to be connected ([requires resoldering a tiny capacitor](https://github.com/Koenkk/zigbee2mqtt/issues/2162#issuecomment-570286663)) which could increase range even further.
- Only available as a development board, therefore it is quite large (it's larger than the CC26X2R1)
- Has an onboard flasher, no additional hardware required to flash
- Coordinator firmware: [Zigbee 3.0](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin)
- Can be bought via [Texas Instruments](http://www.ti.com/tool/LAUNCHXL-CC1352P)
- [Flash via UNIFLASH](./flashing_via_uniflash.md)
- When migrating from another dongle (e.g. CC2531), make sure to modify your `pan_id` in your [configuration](configuration.md), otherwise Zigbee2mqtt won't start.
- This device has two serial devices built in. Make sure you put the right serial device in the [configuration](configuration.md) or use auto detect if you only have one Texas Instruments CC devices connected to your system.
