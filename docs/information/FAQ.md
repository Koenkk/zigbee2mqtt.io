---
---
# Frequently asked questions

## Why don't my devices pair when using a Raspberry Pi 4?
When the adapter is plugged directly into the Raspberry Pi 4 it could be that devices refuse to pair. This is because there is too much interference. Connnecting the adapter through a USB extension cable should fix this issue.

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

In this example the correct `port` would be `/dev/ttyAMC0`.

### Verify that the user you run Zigbee2mqtt as has write access to the port
This can be tested by executing: `test -w [PORT] && echo success || echo failure` (e.g. `test -w /dev/ttyACM0 && echo success || echo failure`).

If it outputs `failure`. Assign write acces by executing: `sudo chown [USER] [PORT]` (e.g. `sudo chown pi /dev/ttyACM0`).

### In case of a CC2530 or CC2513 adapter, verify that don't have a CC2540
The CC2540 can be confused easily with the CC2531 as it looks (almost) exactly the same. However, this device does not support zigbee but bluetooth. This can be verified by looking at the chip.

### [ModemManager](https://www.freedesktop.org/wiki/Software/ModemManager/) is installed
ModemManger, which is default installed on e.g. Ubuntu, is known to cause problems. It can easily be fixed by removing ModemManager through `sudo apt-get purge modemmanager`.

## I read that zigbee2mqtt has a limit of 20 devices, is this true?
Definitely not! Example given: the default Zigbee2mqtt CC2531 firmware indeed supports 20 devices connected **directly** to the coordinator. However, by having routers in your network the network size can be extended. Probably all AC powered devices e.g. bulbs serve as a router, you can even use another [CC2530/CC2531 as a router](../information/cc_sniffer_devices.md) (which has a limit of 21 devices).

### Example
When using the default Zigbee2mqtt CC2531 coordinator firmware + 2 CC2531 routers your device limit will be:
- Coordinator: 15 - 2 routers = 13
- Router 1: 21
- Router 2: 21
- **Device limit of 55 devices**