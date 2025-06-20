# deCONZ (Dresden Elektronik)

::: warning ATTENTION
Various features are not supported by this adapter, in case you depend on these features, consider a different adapter.

- Adding [install codes](../../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestinstall_codeadd), which is required to pair some devices.
- Inter-PAN, which is required for [touchlink](../../guide/usage/touchlink.md)
- Lowering the [transmit power](../../guide/configuration/adapter-settings.md)

:::

### Configuration

```yaml
serial:
    adapter: deconz
```

Other supported settings are: `baudrate` ([docs](../configuration/adapter-settings.md)).

## Hardware

ConBee / ConBee II / ConBee III / RaspBee / RaspBee II

USB connected adapters (ConBee / ConBee II / ConBee III) and Raspberry Pi GPIO modules (RaspBee and RaspBee II).

Add the correct baudrate to the `configuration.yaml` into the serial section.

- For ConBee2: specifying the baudrate is not necessary
- For RaspBee2 it is 38400
- For ConBee3 it is 115200

<!--
NOTE(manup) 2025-07-20: Following warning is **very** problematic advice as the old firmware doesn't handle some newer devices well and has various bugs which where ironed out by later versions.
The 0x26780700 stable version is highly recommended to work solid with the new adapter rewrite.

Reference: https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Firmware-Changelog

**Warning:** Conbee 2 firmware versions newer than 0x26580700 will result in an unstable network with devices dropping randomly, see [Issue 9554](https://github.com/Koenkk/zigbee2mqtt/issues/9554)
-->

- [Coordinator firmware](https://deconz.dresden-elektronik.de/deconz-firmware/)
- [Flashing](https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Update-deCONZ-manually)
- [Buy](https://phoscon.de/conbee2#buy) (ConBee II)
- [Buy](https://phoscon.de/conbee3#buy) (ConBee III)
- [Buy](https://phoscon.de/raspbee2#buy) (RaspBee II)

<img src="../../images/conbee.jpg" width="200" />
