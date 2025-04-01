---
title: "Moes ZHT-SR control via MQTT"
description: "Integrate your Moes ZHT-SR via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-02-09T20:08:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes ZHT-SR

|     |     |
|-----|-----|
| Model | ZHT-SR  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | Smart ring thermostat |
| Exposes | climate (current_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, running_state, preset), eco_temperature, child_lock, deadzone_temperature, max_temperature_limit, min_temperature_limit, sensor_mode, floor_temperature, high_protect_temperature, low_protect_temperature, backlight_brightness, screen_time, rgb_light |
| Picture | ![Moes ZHT-SR](https://www.zigbee2mqtt.io/images/devices/ZHT-SR.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Climate 
This climate device supports the following features: `current_heating_setpoint`, `local_temperature`, `local_temperature_calibration`, `system_mode`, `running_state`, `preset`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `45`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `Manual`, `Temporary manual`, `Program`, `Eco`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-10` and the maximum value is `10` with a step size of `1`.

### Eco temperature (numeric)
Temperature for eco mode.
Value can be found in the published state on the `eco_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_temperature": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `30`.
The unit of this value is `°C`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Deadzone temperature (numeric)
The delta between local_temperature and current_heating_setpoint to trigger Heat.
Value can be found in the published state on the `deadzone_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"deadzone_temperature": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `5`.
The unit of this value is `°C`.

### Max temperature limit (numeric)
Maximum temperature limit. Cuts the thermostat out regardless of air temperature if the external floor sensor exceeds this temperature. Only used by the thermostat when in AL sensor mode..
Value can be found in the published state on the `max_temperature_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature_limit": NEW_VALUE}`.
The minimal value is `35` and the maximum value is `45`.
The unit of this value is `°C`.

### Min temperature limit (numeric)
Minimum temperature limit for frost protection. Turns the thermostat on regardless of setpoint if the temperature drops below this..
Value can be found in the published state on the `min_temperature_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_temperature_limit": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `15`.
The unit of this value is `°C`.

### Sensor mode (enum)
IN - internal sensor, no heat protection. OU - external sensor, no heat protection. AL - internal sensor for room temperature, external for heat protection.
Value can be found in the published state on the `sensor_mode` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `IN`, `OU`, `AL`.

### Floor temperature (numeric)
Floor temperature.
Value can be found in the published state on the `floor_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### High protect temperature (numeric)
High protect temperature.
Value can be found in the published state on the `high_protect_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_protect_temperature": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `70`.
The unit of this value is `°C`.

### Low protect temperature (numeric)
Low protect temperature.
Value can be found in the published state on the `low_protect_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_protect_temperature": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `°C`.

### Backlight brightness (numeric)
Backlight brightness.
Value can be found in the published state on the `backlight_brightness` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_brightness": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Screen time (enum)
Screen on time.
Value can be found in the published state on the `screen_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"screen_time": NEW_VALUE}`.
The possible values are: `10_seconds`, `20_seconds`, `30_seconds`, `40_seconds`, `50_seconds`, `60_seconds`.

### Rgb light (binary)
Value can be found in the published state on the `rgb_light` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rgb_light": NEW_VALUE}`.
If value equals `ON` rgb light is ON, if `OFF` OFF.

