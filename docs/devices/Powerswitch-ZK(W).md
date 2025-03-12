---
title: "Sibling Powerswitch-ZK(W) control via MQTT"
description: "Integrate your Sibling Powerswitch-ZK(W) via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-01-03T20:11:48
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sibling Powerswitch-ZK(W)

|     |     |
|-----|-----|
| Model | Powerswitch-ZK(W)  |
| Vendor  | [Sibling](/supported-devices/#v=Sibling)  |
| Description | Thermostatic radiator valve |
| Exposes | battery, child_lock, eco_mode, eco_temperature, max_temperature, min_temperature, valve_state, position, switch (state), window, climate (local_temperature, current_heating_setpoint, local_temperature_calibration, system_mode, running_state, preset), programming_mode, boost_heating, boost_heating_countdown, boost_heating_countdown_time_set |
| Picture | ![Sibling Powerswitch-ZK(W)](https://www.zigbee2mqtt.io/images/devices/Powerswitch-ZK(W).png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Eco mode (binary)
ECO mode (energy saving mode).
Value can be found in the published state on the `eco_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_mode": NEW_VALUE}`.
If value equals `ON` eco mode is ON, if `OFF` OFF.

### Eco temperature (numeric)
Eco temperature.
Value can be found in the published state on the `eco_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `35`.
The unit of this value is `°C`.

### Max temperature (numeric)
Maximum temperature.
Value can be found in the published state on the `max_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature": NEW_VALUE}`.
The minimal value is `15` and the maximum value is `45`.
The unit of this value is `°C`.

### Min temperature (numeric)
Minimum temperature.
Value can be found in the published state on the `min_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_temperature": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `15`.
The unit of this value is `°C`.

### Valve state (binary)
Valve state if open or closed.
Value can be found in the published state on the `valve_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `OPEN` valve state is ON, if `CLOSED` OFF.

### Position (numeric)
Position.
Value can be found in the published state on the `position` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Window detection (switch)
The current state of this switch is in the published state under the `window_detection` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": "ON"}`, `{"window_detection": "OFF"}` or `{"window_detection": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Window (binary)
Window status closed or open .
Value can be found in the published state on the `window` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `OPEN` window is ON, if `CLOSED` OFF.

### Climate 
This climate device supports the following features: `local_temperature`, `current_heating_setpoint`, `local_temperature_calibration`, `system_mode`, `running_state`, `preset`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `0` and `35`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `heat`. Reading (`/get`) this attribute is not possible.
- `preset`: MANUAL MODE ☝ - In this mode, the device executes manual temperature setting. When the set temperature is lower than the "minimum temperature", the valve is closed (forced closed). PROGRAMMING MODE ⏱ - In this mode, the device executes a preset week programming temperature time and temperature. HOLIDAY MODE ⛱ - In this mode, for example, the vacation mode is set for 10 days and the temperature is setto 15 degrees Celsius. After 10 days, the device will automatically switch to programming mode. TEMPORARY MANUAL MODE - In this mode, ☝ icon will flash. At this time, the device executes the manually set temperature and returns to the weekly programming mode in the next time period. . To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `programming`, `manual`, `temporary_manual`, `holiday`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-9` and the maximum value is `9` with a step size of `1`.

### Programming mode (text)
PROGRAMMING MODE ⏱ - In this mode, the device executes a preset week programming temperature time and temperature. You can set up to 4 stages of temperature every for WEEKDAY ➀➁➂➃➄,  SATURDAY ➅ and SUNDAY ➆..
Value can be found in the published state on the `programming_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"programming_mode": NEW_VALUE}`.

### Boost heating (binary)
Boost Heating: press and hold "+" for 3 seconds, the device will enter the boost heating mode, and the ▷╵◁ will flash. The countdown will be displayed in the APP.
Value can be found in the published state on the `boost_heating` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_heating": NEW_VALUE}`.
If value equals `ON` boost heating is ON, if `OFF` OFF.

### Boost heating countdown (numeric)
Countdown in minutes.
Value can be found in the published state on the `boost_heating_countdown` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `15`.
The unit of this value is `min`.

### Boost heating countdown time set (numeric)
Boost Time Setting 0 sec - 900 sec, (default = 300 sec).
Value can be found in the published state on the `boost_heating_countdown_time_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_heating_countdown_time_set": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `900`.
The unit of this value is `s`.

