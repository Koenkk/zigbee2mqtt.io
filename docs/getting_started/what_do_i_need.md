---
---
# What do I need?
In order to run zigbee2mqtt we need the following hardware:

| Name | Price | Picture |
| ------------- | ------------- | ------------- |
| CC debugger (*) | +-9$ on AliExpress | ![CC debugger](../images/cc_debugger.jpg) |
| CC2531 USB sniffer | +-5$ on AliExpress | ![CC2531 USB sniffer](../images/cc2531.jpg) |
| Downloader cable CC2531 (*) | +-2$ on AliExpress | ![Downloader cable CC2531](../images/downloader_cable.png) |
| [Supported Zigbee device(s)](../information/supported_devices.md) | - | ![Zigbee devices](../images/xiaomi_sensors.jpg) |
| PC or Raspberry Pi (*) to run bridge | - | ![Raspberry Pi](../images/pi.jpg) |
| Optional: Male to female USB extension cable ([why?](../how_tos/how_to_improve_network_range.md)) | +-2$ | ![USB extension cable](../images/usb_extension_cable.jpg) |

(*) NOTE: It is also possible to flash the CC2531 sniffer with a Raspberry Pi or an MCU like the Arduino or ESP8266 without a CC debugger. This however requires you to buy 4 female-female Dupont cables. You will also need to bend the debug pins on your CC2531 if you don't want to buy a downloader cable too.


# What's next?
[Flashing the CC2531 USB stick](flashing_the_cc2531.md)
