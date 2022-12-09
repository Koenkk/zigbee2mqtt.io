---
title: "CTM Lyng AX_Valve_Controller control via MQTT"
description: "Integrate your CTM Lyng AX_Valve_Controller via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-08-01T15:06:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# CTM Lyng AX_Valve_Controller

|     |     |
|-----|-----|
| Model | AX_Valve_Controller  |
| Vendor  | [CTM Lyng](/supported-devices/#v=CTM%20Lyng)  |
| Description | AX Valve Controller, water shutoff valve controller |
| Exposes | switch (state), water_leak, active_water_leak, linkquality |
| Picture | ![CTM Lyng AX_Valve_Controller](https://www.zigbee2mqtt.io/images/devices/AX_Valve_Controller.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Water_leak (binary)
Indicates whether the device detected a water leak.
Value can be found in the published state on the `water_leak` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` water_leak is ON, if `false` OFF.

### Active_water_leak (binary)
Indicates whether there is an active water leak.
Value can be found in the published state on the `active_water_leak` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` active_water_leak is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

