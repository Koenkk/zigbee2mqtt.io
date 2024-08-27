---
sidebarDepth: 1
next: ../installation/
---

# Supported Adapters

All officially supported adapters are listed on this page. Note that before an adapter can be used with Zigbee2MQTT it has to be flashed with a coordinator firmware (some adapters come preflashed).

-   [zStack based (Texas Instruments)](./zstack.md)
-   [EmberZNet based (Silicon Labs)](./emberznet.md)
-   [deCONZ based (Dresden Elektronik)](./deconz.md)
-   [ZiGate based](./zigate.md)
-   [ZBOSS based (Nordic Semiconductor)](./zboss.md)

::: tip TIP
Want to migrate to a different adapter? Read [this](../faq/README.md#how-do-i-migrate-from-one-adapter-to-another)
:::

## Notes

Before buying an adapter, please read the notes below!

-   Want to migrate to a different adapter? This may require repairing all your devices in some cases, see [FAQ](../faq/README.md#what-does-and-does-not-require-repairing-of-all-devices)
-   Network adapters connected via WiFi might have reduced stability as the serial protocol does not have enough fault-tolerance to handle packet loss or latency delays that can normally occur over WiFi connections. If cannot use a locally connected USB or UART/GPIO adapter then the recommendation is to use remote adapter that connected via Ethernet (wired) to avoid issues.
-   What are the differences between the various CC2652/CC1352 chips?
    -   Chips ending with `P` have a power amplifier which support up-to 20dBm vs 5dBm on adapters ending with `R`/`RB`.
    -   Chips starting with `CC1352` support the sub-1 GHz frequency (which is not relevant for Zigbee since it uses 2.4 GHz), `CC2652` only supports 2.4 GHz. So for Zigbee2MQTT purposes there is no difference between `CC1352` and `CC2652`.
    -   Chips ending with `RB` don't require a crystal on the PCB, this only makes a difference for the manufacturing process.

### Coordinator backups

Note that only adapters based on zStack or EmberZNet currently support backing up the coordinator (`coordinator_backup.json`).

#### Flashing an existing adapter

Flashing tools can be used to upgrade the firmware on an existing adapter without needing to repair devices. See the [FAQ](https://www.zigbee2mqtt.io/guide/faq/#what-does-and-does-not-require-repairing-of-all-devices) for information on what does and does not require repairing of devices.

#### Is your OS unable to find your device?

If you're asking yourself "Why won't my dongle or adapter show up?" when you are using (for example) Flash Programmer 2, chances are that your OS can't communicate with your device over VCP (Virtual COM Port) serial port, causing your dongle not showing up as a flashable device. To fix this problem, be sure to install a USB-to-UART bridge/converter VCP driver for your operating system like the one at [Silicon Labs](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers), [FTDI Chip](https://ftdichip.com/drivers/vcp-drivers/), or [WCH (CH34x/CH91xx)](http://www.wch-ic.com/downloads/category/30.html).

### Router

Besides serving as a coordinator some adapters can also be used as a Zigbee router (check if there is a router firmware by clicking on your adapter). To factory reset/pair:

-   Texas Instruments CC2531: press the S2 button for 5 seconds.
-   Texas Instruments CC2530: power on/power off the device three times (power on, wait 2 seconds, power off, repeat this cycle three times).
-   Adapters based on CC2652/CC1352: single press (one of the) buttons on the device
-   Adapters based on Silicon Labs EmberZNet:
    -   [Sonoff Dongle-E](https://www.zigbee2mqtt.io/devices/ZBDongle-E.html)
    -   [SMLight SLZB-06M](https://www.zigbee2mqtt.io/devices/SLZB-06M.html)
