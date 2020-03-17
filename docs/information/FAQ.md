---
---
# Frequently asked questions

## Why does my device not or fail to pair?
This problem can be divided in 2 categories; no logging is shown at all OR interview fails.

### No logging is shown at all
- Make sure joining is enabled by setting `permit_join: true` in the [configuration](https://www.zigbee2mqtt.io/information/configuration.html).
- There can be too much interference, try connecting the coordinator USB through an USB extension cable. This problem occurs a lot when used in combination with a Raspberry Pi 4.
- Make sure that any other Zigbee networks/hubs are powered down. When you e.g. want to pair an IKEA bulb which was first paired to the IKEA gateway make sure to power down the IKEA gateway. If that doesn't help also try powering down all devices that are connected to the IKEA hub.
- If it's a battery powered device, try replacing the battery.
- You've hit the device limit of the coordinator, especially occurs when using the CC2531 or CC2530 in combination with the source routing firmware. Try reflashing the coordinator and immidiately pair the device after starting Zigbee2mqtt.
- Try pairing the device closer to the coordinator.
- CC2531/CC2530 coordinator only:
  - Stop Zigbee2mqtt, unplug the coordinator, wait 10 seconds, plug the coordinator, start Zigbee2mqtt and try to pair the device again.
  - If none of the above helps, try to reflash the coordinator (does not require repairing of already paired devices).

### Interview fails
- Try repairing the device again for 2 or 3 times.
- This might be a Zigbee2mqtt bug, [Create a new issue](https://github.com/Koenkk/zigbee2mqtt/issues/new) with the zigbee-herdsman debug logging attached to it. [How to enable zigbee-herdsman debug logging](https://www.zigbee2mqtt.io/information/debug.html#zigbee-herdsman-debug-logging).
- If device joins with `0x000000000000000` as `ieeeAddress` (you will see: `Starting interview of '0x0000000000000000'` in the Zigbee2mqtt log) your CC253X might be broken. [See issue #2761](https://github.com/Koenkk/zigbee2mqtt/issues/2761).


## What does and does not require repairing of all devices?
### Requires repairing
You need to re-pair all you devices when:
- Changing the network key (`network_key`) in `configuration.yaml`.
- Changing the Zigbee channel (`channel`) in `configuration.yaml`.
- Swiching between a Zigbee 1.2/3.0 coordinator firmware
- Switching between adapter types (e.g. CC2531 -> CC26X2R1)

### Doesn't require repairing
You **don't** need to re-pair your devices when:
- Updating or downgrading Zigbee2mqtt to a different version.
- Updating the coordinator (e.g. CC2530/CC2531 stick) firmware.
  - This is only applicable when flashing firmware version `20190215` or later. It doesn't matter from which firmware version you come from.
  - If after flashing you fail to control your devices it helps to:
    - Wait a few minutes so that the Zigbee network can settle.
    - Send Zigbee commands (e.g. turn on/off) to the device.
    - Reboot the device (unplug and plug power).
    - If all of the above doens't work, and you previously re-flashed a firmware older then `20190215` it could be that the `pan_id` has silently been changed. To fix this add to your `configuration.yaml`:
    ```js
    advanced:
        pan_id: 0x1a63
    ```
- Switching from CC2530/CC2531 device (physically).
- Switching the system running Zigbee2mqtt.
    - When doing this, make sure to copy over the contents of the `data` directory.

## Help, Zigbee2mqtt fails to start!
Most of the times this is caused by zigbee-herdsman not being able to communicate with your adapter (e.g. CC2531).

### Verify that you put the correct port in configuration.yaml
Execute the following command to find out the correct path:
```bash
pi@raspberry:/ $ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx. 1 root root 13 Oct 19 19:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -> ../../ttyACM0
```

In this example the correct `port` would be `/dev/ttyACM0`.

### Verify that the user you run Zigbee2mqtt as has write access to the port
This can be tested by executing: `test -w [PORT] && echo success || echo failure` (e.g. `test -w /dev/ttyACM0 && echo success || echo failure`).

If it outputs `failure`. Assign write acces by executing: `sudo chown [USER] [PORT]` (e.g. `sudo chown pi /dev/ttyACM0`).

You need to apply this on every reboot. To fix this you can use a 'udev' rule:

1. `udevadm info -a -n /dev/ttyACM0 | grep 'serial'`
get the serial to your device `YOURSERIAL`

2. Create the rule file with:
`sudo nano /etc/udev/rules.d/99-usb-serial.rules`

3. add this line:
`SUBSYSTEM=="tty", ATTRS{idVendor}=="0451", ATTRS{idProduct}=="16a8", ATTRS{serial}=="YOURSERIAL", SYMLINK="ttyUSB.CC2531-01", OWNER="pi"`

4. modify your zigbee2mqtt config to adjust new SYMLINK name:
`nano /opt/zigbee2mqtt/data/configuration.yaml`

`…
serial:
  port: /dev/ttyUSB.CC2531-01
…`

After reboot your dedvice will have the right permissions and always the same name.

### In case of a CC2530 or CC2531 adapter, verify that don't have a CC2540
The CC2540 can be confused easily with the CC2531 as it looks (almost) exactly the same. However, this device does not support zigbee but bluetooth. This can be verified by looking at the chip.

### [ModemManager](https://www.freedesktop.org/wiki/Software/ModemManager/) is installed
ModemManger, which is default installed on e.g. Ubuntu, is known to cause problems. It can easily be fixed by removing ModemManager through `sudo apt-get purge modemmanager`.

### CC1352P-2 coordinators only: press the reset button on the device
If zigbee2mqtt fails to start with a CC1352P-2 with `Error: SRSP - SYS - version after 6000ms`, you most probably have connected your device to a system that requires pressing the reset button (the one next to the USB connector) momentarily/shortly after connecting the USB cable. This issue has primarily been observed on x86 architectures only (e.g., Intel NUC, HPE Microserver, i7 laptop), see also [#2162](https://github.com/Koenkk/zigbee2mqtt/issues/2162). The procedure has to be repeated every time the CC1352P-2 is re-connected and it's not clear yet, whether this can be fixed at all. It does not seem to occur on ARM based boards (Raspberry Pi, ODROID XU4).

### CC2531 coordinators only: press the reset button on the device
When you plug the CC2531 in your computer, the green LED should go on.
By pressing the reset button on the CC2531 the green LED should go off.
The CC2531 has 2 buttons on it, the reset button is the one which is closest to the USB port.
Now try starting Zigbee2mqtt again.

### CC26XR1 LaunchPad coordinators only: verify that you have the correct revision
The revision of your board can be seen in UniFlash by clicking *more info* in the top, now press *Read device info*.

The correct revision is: **E** like shown below.

![cc26xr1_revision](../images/cc26xr1_revision.png)

All earlier version are not supported (these are development boards). Return this board to the seller immidiately.

## I read that zigbee2mqtt has a limit of 20 devices, is this true?
Definitely not! Example given: the default Zigbee2mqtt CC2531 firmware indeed supports 20 devices connected **directly** to the coordinator. However, by having routers in your network the network size can be extended. Probably all AC powered devices e.g. bulbs serve as a router, you can even use another [CC2530/CC2531 as a router](../information/cc_sniffer_devices.md) (which has a limit of 21 devices).

### Example
When using the default Zigbee2mqtt CC2531 coordinator firmware + 2 CC2531 routers your device limit will be:
- Coordinator: 15 - 2 routers = 13
- Router 1: 21
- Router 2: 21
- **Device limit of 55 devices**

## Which port should I use for CC26X2R1/CC1352P-2, /dev/ttyACM0 or /dev/ttyACM1?
The CC26X2R1 has a build in debugger. This debugger also registers a port next to the device data port. Of course this is not necessarily number 0 and 1. But normally the lowest number is the device data port and the other the debugger.

To find the correct port, execute:
```bash
pi@raspberry:/ $ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Jan  6 19:07 usb-Texas_Instruments_XDS110__03.00.00.05__Embed_with_CMSIS-DAP_L1100BTD-if00 -> ../../ttyACM0
lrwxrwxrwx 1 root root 13 Jan  6 19:07 usb-Texas_Instruments_XDS110__03.00.00.05__Embed_with_CMSIS-DAP_L1100BTD-if03 -> ../../ttyACM1
```
The device with id ending with *if00* is for device data. Use this port in your configuration.
