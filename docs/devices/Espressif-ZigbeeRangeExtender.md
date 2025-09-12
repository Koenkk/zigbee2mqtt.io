---
title: "Espressif ZigbeeRangeExtender control via MQTT"
description: "Integrate your Espressif ZigbeeRangeExtender via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-08T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Espressif ZigbeeRangeExtender 

|     |     |
|-----|-----|
| Model | ZigbeeRangeExtender   |
| Vendor  | [Espressif](/supported-devices/#v=Espressif)  |
| Description | Espressif Zigbee Range Extender |
| Exposes | identify |
| Picture | ![](https://www.zigbee2mqtt.io/images/devices/Espressif-ZigbeeRangeExtender.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

## Readme from Arduino IDE

[Link to Arduino-ESP32 Zigbee Range Extender (Router) Example](https://github.com/espressif/arduino-esp32/blob/master/libraries/Zigbee/examples/Zigbee_Range_Extender/README.md)

### Pairing
power on device via USB and permit join in zigbee2mqtt.

<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`

## Firmware Flashing Guide for ESP32 Zigbee Router
This guide provides step-by-step instructions to compile and flash the standard Zigbee router firmware to an Espressif ESP32-C6/H2 board, enabling it to act as a Zigbee network range extender with Zigbee2MQTT.

# Prerequisites
Arduino IDE: A powerful integrated development environment for coding and compiling.

ESP32-C6/H2 Board: An Espressif board with Zigbee support.

USB Cable: To connect the board to your computer.

1. Prepare the Arduino IDE
1.1. Install ESP32 Board Manager

In the Arduino IDE, go to File > Preferences.

In the Additional Boards Manager URLs field, paste this URL: https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json

Click OK.

Go to Tools > Board > Boards Manager....

Search for "esp32" and install the esp32 package by Espressif.

1.2. Select Your Board

From the Tools menu, hover over Board and select your specific board (e.g., ESP32C6 Dev Module or ESP32H2 Dev Module).

Select the correct COM port under Tools > Port.

2. Configure the Zigbee Sketch
2.1. Open the Example Sketch

Go to File > Examples > ESP Zigbee > Zigbee_Range_Extender. This will open a new sketch in a new window.

2.2. Adjust Board Settings

Navigate to the Tools menu and set the following options:

Zigbee mode: Select Zigbee ZCZR (coordinator/router).

Partition Scheme: Select Zigbee 4MB with spiffs (or a similar size appropriate for your board). This partition layout is optimized for Zigbee firmware.

3. Compile and Upload the Firmware
3.1. Compile the Firmware

In the sketch window, click the Verify button (the checkmark icon) to compile the code. Wait for the process to complete without errors.

3.2. Upload to the Board

Click the Upload button (the right arrow icon) to flash the firmware to your ESP32 board.

The IDE will show progress. If the upload fails, you may need to press and hold the BOOT button on your board while the upload starts.

4. Connect to Zigbee2MQTT
4.1. Enable Zigbee2MQTT Joining

Open the Zigbee2MQTT web interface.

Click Permit join at the top of the screen. This opens your Zigbee network for new devices for a set period.

4.2. Power on the Router

Plug in your newly flashed ESP32 board. The device will automatically attempt to connect to the open Zigbee network.

After a few seconds, it should appear in your Zigbee2MQTT device list. If it doesn't appear, try pressing the BOOT button to trigger a re-join, or refer to the Arduino IDE's Serial Monitor for debugging information.
