# deCONZ (Dresden Elektronik)

### Note

If Zigbee2MQTT fails to start, try adding the following to your `configuration.yaml`

```yaml
serial:
  adapter: deconz
```

## Hardware

ConBee / ConBee II / ConBee III / RaspBee / RaspBee II

USB connected adapters (ConBee / ConBee II / ConBee III) and Raspberry Pi GPIO modules (RaspBee and RaspBee II).

Add the correct baudrate to the `configuration.yaml` into the serial section.
* For ConBee2: specifying the baudrate is not necessary
* For RaspBee2 it is 38400
* For ConBee3 it is 115200

**Warning:** Conbee 2 firmware versions newer than 0x26580700 will result in an unstable network with devices dropping randomly, see [Issue 9554](https://github.com/Koenkk/zigbee2mqtt/issues/9554)
* [Coordinator firmware](https://deconz.dresden-elektronik.de/deconz-firmware/)
* [Flashing](https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Update-deCONZ-manually)
* [Buy](https://phoscon.de/conbee2#buy) (ConBee II)
* [Buy](https://phoscon.de/conbee3#buy) (ConBee III)
* [Buy](https://phoscon.de/raspbee2#buy) (RaspBee II)

<img src="../../images/conbee.jpg" width="200" />
