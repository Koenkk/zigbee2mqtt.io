# deCONZ (Dresden Elektronik)

### Configuration

```yaml
serial:
  adapter: deconz
  port: /dev/xyz    <<< e.g. ttyUSB0. use `dmesg | grep tty` after plugging the conbee into the usb
  adapter: deconz
  baudrate: 115200  <<< see below
```

[Other settings](../configuration/adapter-settings.md)

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
