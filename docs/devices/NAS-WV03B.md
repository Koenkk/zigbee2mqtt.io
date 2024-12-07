---
title: "Neo NAS-WV03B control via MQTT"
description: "Integrate your Neo NAS-WV03B via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-06-30T19:12:33
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Neo NAS-WV03B

|     |     |
|-----|-----|
| Model | NAS-WV03B  |
| Vendor  | [Neo](/supported-devices/#v=Neo)  |
| Description | Smart sprinkler timer |
| Exposes | switch (state), status, countdown, countdown_left, water_current, battery_percentage, water_total, fault, weather_delay, normal_timer, switch_enabled, smart_irrigation, total_flow_reset_switch, quantitative_watering, flow_switch, child_lock, surplus_flow, single_watering_duration, single_watering_amount, linkquality |
| Picture | ![Neo NAS-WV03B](https://www.zigbee2mqtt.io/images/devices/NAS-WV03B.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Status (enum)
Status.
Value can be found in the published state on the `status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `off`, `auto`, `disabled`.

### Countdown (numeric)
Countdown.
Value can be found in the published state on the `countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `240`.
The unit of this value is `min`.

### Countdown left (numeric)
Countdown left.
Value can be found in the published state on the `countdown_left` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `1` and the maximum value is `240`.
The unit of this value is `min`.

### Water current (numeric)
Current water flow (L/min).
Value can be found in the published state on the `water_current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `3785.41`.
The unit of this value is `L/min`.

### Battery percentage (numeric)
Battery percentage.
Value can be found in the published state on the `battery_percentage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Water total (numeric)
Total water flow (L).
Value can be found in the published state on the `water_total` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `378541`.
The unit of this value is `L`.

### Fault (binary)
Fault status.
Value can be found in the published state on the `fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `DETECTED` fault is ON, if `NOT_DETECTED` OFF.

### Weather delay (enum)
Weather delay.
Value can be found in the published state on the `weather_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weather_delay": NEW_VALUE}`.
The possible values are: `24h`, `48h`, `72h`, `cancel`.

### Normal timer (text)
Normal timer.
Value can be found in the published state on the `normal_timer` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"normal_timer": NEW_VALUE}`.

### Switch enabled (binary)
Switch enabled.
Value can be found in the published state on the `switch_enabled` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_enabled": NEW_VALUE}`.
If value equals `ON` switch enabled is ON, if `OFF` OFF.

### Smart irrigation (numeric)
Smart irrigation.
Value can be found in the published state on the `smart_irrigation` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Total flow reset switch (binary)
Total flow reset switch.
Value can be found in the published state on the `total_flow_reset_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"total_flow_reset_switch": NEW_VALUE}`.
If value equals `ON` total flow reset switch is ON, if `OFF` OFF.

### Quantitative watering (numeric)
Quantitative watering.
Value can be found in the published state on the `quantitative_watering` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"quantitative_watering": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10000`.
The unit of this value is `L`.

### Flow switch (binary)
Flow switch.
Value can be found in the published state on the `flow_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"flow_switch": NEW_VALUE}`.
If value equals `ON` flow switch is ON, if `OFF` OFF.

### Child lock (binary)
Child lock.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `ON` child lock is ON, if `OFF` OFF.

### Surplus flow (numeric)
Surplus flow.
Value can be found in the published state on the `surplus_flow` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Single watering duration (numeric)
Single watering duration.
Value can be found in the published state on the `single_watering_duration` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Single watering amount (numeric)
Single watering amount.
Value can be found in the published state on the `single_watering_amount` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

