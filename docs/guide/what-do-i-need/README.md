---
sidebarDepth: 0
next: ../adapters/
---

# What do I need?
In order to run Zigbee2MQTT we need the following hardware:

| Name | Price | Picture |
| ------------- | ------------- | ------------- |
| A supported [Zigbee adapter](../adapters/) | 5$ - 40$ | ![ZZH](../../images/zzh.jpg) |
| One or more [supported Zigbee device(s)](../../supported-devices/) | - | ![Zigbee devices](../../images/xiaomi_sensors.jpg) |
| A computer (e.g. a Raspberry Pi) to run the Zigbee2MQTT software | - | ![Raspberry Pi](../../images/pi.jpg) |
| **Highly recommended**: Male to female USB extension cable ([why?](../../how-to/improve_network_range_and_stability.md)) | +-2$ | ![USB extension cable](../../images/usb_extension_cable.jpg) |

## Supported Zigbee adapter
Zigbee2MQTT supports a variety of Zigbee adapters, the full list can be found [here](../adapters/). What adapter to chose depends on your requirements in terms of price, size, connection (USB vs GPIO) and network size. Recommended adapters are the ones with a CC2652R, CC2652P, CC2652RB or CC1352P chip (e.g. "zig-a-zig-ah! (zzh!)" adapter by Electrolama).

Previously the Texas Instruments CC2531 was the most recommended adapter. This adapter is not recommended anymore since it's not very powerful, doesn't have good range, and struggles with a larger network (20+ devices). It also requires additional hardware to flash the firmware, see [Flashing the CC2531](../adapters/flashing/flashing_the_cc2531.md).

### Flashing the adapter
Before your Zigbee adapter can be used with Zigbee2MQTT it needs to be flashed with a custom firmware. This process varies per adapter and is described on the [Supported adapters](../adapters/README.md) page. If an adapter provides both a router and coordinator firmware, use the **coordinator** firmware.

