---
title: "CTM Lyng AX_Water_Sensor control via MQTT"
description: "Integrate your CTM Lyng AX_Water_Sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-08-01T15:06:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# CTM Lyng AX_Water_Sensor

|     |     |
|-----|-----|
| Model | AX_Water_Sensor  |
| Vendor  | [CTM Lyng](/supported-devices/#v=CTM%20Lyng)  |
| Description | AX Water Sensor, water leakage detector |
| Exposes | battery, battery_low, water_leak, active_water_leak, linkquality |
| Picture | ![CTM Lyng AX_Water_Sensor](https://www.zigbee2mqtt.io/images/devices/AX_Water_Sensor.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Water leak (binary)
Indicates whether the device detected a water leak.
Value can be found in the published state on the `water_leak` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` water leak is ON, if `false` OFF.

### Active water leak (binary)
Indicates whether there is an active water leak.
Value can be found in the published state on the `active_water_leak` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` active water leak is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

