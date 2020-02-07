---
---
# Zigbee2mqtt fails to start
Most of the times this is caused by zigbee-herdsman not being able to communicate with your CC2530 or CC2531.

## Verify that you put the correct port in configuration.yaml
Execute the following command to find out the correct path:
```bash
pi@raspberry:/ $ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx. 1 root root 13 Oct 19 19:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -> ../../ttyACM0
```

In this example the correct `port` would be `/dev/ttyACM0`.

## Verify that the user you run Zigbee2mqtt as has write access to the port
This can be tested by executing: `test -w [PORT] && echo success || echo failure` (e.g. `test -w /dev/ttyACM0 && echo success || echo failure`).

If it outputs `failure`. On Debian-based Linux (Debian/Ubuntu/Raspbian) add your user to the dialout group so you have appropriate permissions on the device(s) by executing `sudo usermod -a -G dialout $USER`. You need to logout and back in for the new group to take effect. On other Linux distributions assign write acces by executing: `sudo chown [USER] [PORT]` (e.g. `sudo chown pi /dev/ttyACM0`).

## Verify that you have a CC2530 or CC2531 (and not a CC2540)
The CC2540 can be confused easily with the CC2531 as it looks (almost) exactly the same. However, this device does not support zigbee but bluetooth. This can be verified by looking at the chip.

## [ModemManager](https://www.freedesktop.org/wiki/Software/ModemManager/) is installed
ModemManger, which is default installed on e.g. Ubuntu, is known to cause problems. It can easily be fixed by removing ModemManager through `sudo apt-get purge modemmanager`.
