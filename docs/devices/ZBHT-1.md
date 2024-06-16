---
title: "Smartenit ZBHT-1 control via MQTT"
description: "Integrate your Smartenit ZBHT-1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-05-11T17:09:57Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Smartenit ZBHT-1

|     |     |
|-----|-----|
| Model | ZBHT-1  |
| Vendor  | [Smartenit](/supported-devices/#v=Smartenit)  |
| Description | Temperature & humidity sensor  |
| Exposes | battery, temperature, humidity, linkquality |
| Picture | ![Smartenit ZBHT-1](https://www.zigbee2mqtt.io/images/devices/ZBHT-1.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Similar Devices
This device is older and seems to be similar to the netvox Z711 (and others).

### Pairing

#### Resetting the Device/Restore to Factory Defaults
1. Remove the battery to power off the device.
2. Press and hold the only button.
3. Re-install the batteries to power on the device
4. Release the button.
 * The LED will blink quickly, and the reset/restore is complete

#### Joining the Network
1. Remove battery from device
2. Enable permit-join on Zigbee2MQTT
3. Re-install battery in the device
 * The LED will flash 5 times to indicate success (no flashing means not successful)
4. After successfully joining, press and hold the only button for 3 seconds to broadcast the binding request.
5. The LED will flash once.
6. The LED flashes 5 times after the binding is completed; otherwise, it flashes 10 times.

#### Waking the Device
If the device is asleep (which is most of the time) and you need it to be awake for some reason, tap the only button on the device. The LED will flash 5 times and the device will be awake for a brief period.

### Status of Functions
1. Temperature monitoring - Works
2. Humidity monitoring - Works
3. Battery monitoring - untested.
 * In theory the device LED will flash ONCE if the voltage falls below 2.4V
 * In theory the device will send a low-power report to the ZigBee network if the voltage falls below 2.4V - no other battery reporting.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

