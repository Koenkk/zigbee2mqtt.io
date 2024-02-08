---
title: "SONOFF SNZB-03 control via MQTT"
description: "Integrate your SONOFF SNZB-03 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-07-10T21:02:28Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF SNZB-03

|     |     |
|-----|-----|
| Model | SNZB-03  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Motion sensor |
| Exposes | occupancy, battery_low, battery, voltage, linkquality |
| Picture | ![SONOFF SNZB-03](https://www.zigbee2mqtt.io/images/devices/SNZB-03.png) |
| White-label | eWeLink RHK09 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing
If brand new, when powered on it will attempt to pair to Zigbee2MQTT automatically. If not (or if has been paired before and needs to be re-paired) - press and hold the reset button through the small hole at the top for about 5 seconds until the light flashes several times. The device will then go into pairing mode. It should then be connected to Zigbee2MQTT.
<!-- Notes END: Do not edit below this line -->




## Exposes

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

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

