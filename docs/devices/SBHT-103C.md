---
title: "Shelly SBHT-103C control via MQTT"
description: "Integrate your Shelly SBHT-103C via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:12:45
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Shelly SBHT-103C

|     |     |
|-----|-----|
| Model | SBHT-103C  |
| Vendor  | [Shelly](/supported-devices/#v=Shelly)  |
| Description | BLU H&T display Zigbee |
| Exposes | battery, temperature, humidity |
| Picture | ![Shelly SBHT-103C](https://www.zigbee2mqtt.io/images/devices/SBHT-103C.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
Shelly BLU H&T Display ZB Black - SBHT-103C
https://www.shelly.com/blogs/documentation/shelly-blu-h-t-display-zb

## Device setup

Clock sync does not work over ZigBee.

Update firmware and sync clock:
1. Use `Shelly BLE Debug` mobile phone app to scan for devices
1. Click on `Read` in the app
1. On the device push the button on the backside
1. To update the firmware click `OTA`, follow instructions
1. To update the clock enter setup mode on the device (one click, display should say "set")
1. Press the backside button two times fast (upper left corner of the device should say "sync")
1. The clock will be synced with timezone GMT+0
1. Open `Shelly BLE Debug` app
1. Connect to device with `Read`
1. Click on `UTC (0 min)` to set your timezone (offset in minutes)

Single Button

    Press 1 time: Enter setup mode for 3 minutes.

        Press 1 time: Exit setup mode.

        Press 2 times rapidly: Force clock synchronization via a Shelly device set as a Bluetooth gateway.

        Press 4 times rapidly: Enter Bluetooth pairing mode.

        Press 5 times rapidly: Enter Zigbee pairing mode.

        Press and hold for 5 seconds: Toggle Bluetooth on/off.

        Press and hold for 10 seconds: Toggle Zigbee on/off.

        Press and hold for 30 seconds: Resets the device to factory settings.

    Press 2 times rapidly: Toggle the clock display segment between showing the clock or the date.

    Press 3 times rapidly: Switch temperature unit between Celsius and Fahrenheit. When Celsius is selected, the date format is DD.MM; when Fahrenheit is selected, the date format is MM.DD.

    Press 4 times rapidly: Invert the display colors.

    Press 5 times rapidly: Toggle the clock format between 24-hour and 12-hour.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

