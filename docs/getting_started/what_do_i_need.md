---
---
# What do I need?
In order to run Zigbee2MQTT we need the following hardware:

| Name | Price | Picture |
| ------------- | ------------- | ------------- |
| Supported Zigbee adapter | 5$ - 40$ | ![CC2531 USB sniffer](../images/cc2531.jpg) |
| [Supported Zigbee device(s)](../information/supported_devices.md) | - | ![Zigbee devices](../images/xiaomi_sensors.jpg) |
| PC or Raspberry Pi (*) to run bridge | - | ![Raspberry Pi](../images/pi.jpg) |
| **Highly recommended**: Male to female USB extension cable ([why?](../how_tos/how_to_improve_network_range_and_stability.md)) | +-2$ | ![USB extension cable](../images/usb_extension_cable.jpg) |

## Supported Zigbee adapter
Zigbee2MQTT supports a variety of Zigbee adapters, the full list can be found [here](../information/supported_adapters.md). What adapter to chose depends on your requirements in terms of price, size, connection (USB vs GPIO) and network size. However most users can use the following rule of thumb:

- Small network (< 20 devices): Texas Instruments CC2531 (**requires additional hardware to be flashed**, see [Flashing the CC2531](../information/flashing_the_cc2531.md))
- Large network (20+ devices): Electrolama zig-a-zig-ah! (zzh!) OR slaesh's CC2652RB stick

## Flashing the adapter
Before your Zigbee adapter can be used with Zigbee2MQTT it needs to be flashed with a custom firmware. This process varies per adapter and is described on the [Supported adapters](../information/supported_adapters.md) page. If an adapter provides both a router and coordinator firmware, use the **coordinator** firmware.

# What's next?
[Running Zigbee2MQTT](running_zigbee2mqtt.md)
