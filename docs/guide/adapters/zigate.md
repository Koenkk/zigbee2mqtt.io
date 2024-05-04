# ZiGate adapters

Initial development started on experimental (alpha stage) support for various ZigGate adapters.  This includes all ZiGate compatible hardware adapters which are currently based on NXP Zigbee MCU chips like JN5168 and JN5169 with ZigGate 3.1d firmware or later.

::: warning ATTENTION
zigbee-herdsman is looking for maintainers for the ZiGate adapter. See https://github.com/Koenkk/zigbee-herdsman/issues/1037
:::

### Note

If Zigbee2MQTT fails to start, try adding the following to your `configuration.yaml`

```yaml
serial:
  adapter: zigate
```

## Hardware

* [Coordinator firmware](https://zigate.fr/tag/firmware/)  
* [Discussion](https://github.com/Koenkk/zigbee-herdsman/issues/242)  
* [Buy](https://zigate.fr/boutique/?orderby=date_desc)

<img src="../../images/zigate_usb_ttl.png" width="200" />
