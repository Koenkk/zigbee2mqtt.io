---
title: "Bosch RFPR-ZB-SH-EU control via MQTT"
description: "Integrate your Bosch RFPR-ZB-SH-EU via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-03-01T15:36:39
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch RFPR-ZB-SH-EU

|     |     |
|-----|-----|
| Model | RFPR-ZB-SH-EU  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Wireless motion detector |
| Exposes | temperature, battery, occupancy, battery_low, tamper |
| Picture | ![Bosch RFPR-ZB-SH-EU](https://www.zigbee2mqtt.io/images/devices/RFPR-ZB-SH-EU.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To pair this device you have to install the device via its installation code. The installation code can be obtained by scanning the QR-code on the inside of the battery cover with your smartphone. Then get the device into pairing mode. In zigbee2mqtt navigate to  "Settings" --> "Tools" and click on "Add install code". Paste the code you got from the QR-code and confirm by clicking "OK" which will get zigbee2mqtt into pairing mode automatically. Wait for your device to be joined.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

