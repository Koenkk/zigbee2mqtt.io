---
---
# What do I need?
In order to run Zigbee2MQTT we need the following hardware:

| Name | Price | Picture |
| ------------- | ------------- | ------------- |
| A supported [Zigbee adapter](../information/supported_adapters.md) | 5$ - 40$ | ![ZZH](../images/zzh.jpg) |
| One or more [supported Zigbee device(s)](../information/supported_devices.md) | - | ![Zigbee devices](../images/xiaomi_sensors.jpg) |
| A computer (e.g. a Raspberry Pi) to run the Zigbee2MQTT software | - | ![Raspberry Pi](../images/pi.jpg) |
| **Highly recommended**: Male to female USB extension cable ([why?](../how_tos/how_to_improve_network_range_and_stability.md)) | +-2$ | ![USB extension cable](../images/usb_extension_cable.jpg) |

## Supported Zigbee adapter
Zigbee2MQTT supports a variety of Zigbee adapters, the full list can be found [here](../information/supported_adapters.md). What adapter to chose depends on your requirements in terms of price, size, connection (USB vs GPIO) and network size. For most users the recommend adapters are the "zig-a-zig-ah! (zzh!)" adapter by Electrolama OR the "CC2652RB stick" by Slaesh ([currently long shipping times](https://github.com/Koenkk/zigbee2mqtt/discussions/6702)).

Previously the Texas Instruments CC2531 was the most recommended adapter. This adapter is not recommended anymore since it's not very powerfull, doesn't have good range and struggles with larger network (20+ devices). It also requires additional hardware to flash the firmware, see [Flashing the CC2531](../information/flashing_the_cc2531.md).

## Flashing the adapter
Before your Zigbee adapter can be used with Zigbee2MQTT it needs to be flashed with a custom firmware. This process varies per adapter and is described on the [Supported adapters](../information/supported_adapters.md) page. If an adapter provides both a router and coordinator firmware, use the **coordinator** firmware.

# What's next?
[Running Zigbee2MQTT](running_zigbee2mqtt.md)
