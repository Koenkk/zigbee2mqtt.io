---
title: "Vareo HYT001ZB control via MQTT"
description: "Integrate your Vareo HYT001ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-10-31T19:32:47.785Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Vareo HYT001ZB

|     |     |
|-----|-----|
| Model | HYT001ZB  |
| Vendor  | [Vareo](/supported-devices/#v=Vareo)  |
| Description | Smart thermostat for electric floor heating or boilers |
| Exposes | climate (current_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, preset, running_state), hysteresis, sensor_type, holiday_temperature, holiday_days, fault |
| Picture | ![Vareo HYT001ZB](https://www.zigbee2mqtt.io/images/devices/HYT001ZB.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### Climate 
This climate device supports the following features: `current_heating_setpoint`, `local_temperature`, `local_temperature_calibration`, `system_mode`, `preset`, `running_state`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": "VALUE"}` where `VALUE` is one of: `off`, `heat`. Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": "VALUE"}` where `VALUE` is one of: `manual`, `program`, `holiday`, `temporary`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-9` and the maximum value is `9` with a step size of `0.5`.

### Hysteresis (numeric)
Switching hysteresis.
Value can be found in the published state on the `hysteresis` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"hysteresis": VALUE}`.
The minimal value is `0.5` and the maximum value is `5`.
The unit of this value is `°C`.

### Sensor type (enum)
Temperature sensor selection.
Value can be found in the published state on the `sensor_type` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor_type": "VALUE"}`.
The possible values are: `internal`, `external`, `both`.

### Holiday temperature (numeric)
Setpoint in holiday mode.
Value can be found in the published state on the `holiday_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"holiday_temperature": VALUE}`.
The minimal value is `5` and the maximum value is `35`.
The unit of this value is `°C`.

### Holiday days (numeric)
Holiday mode duration.
Value can be found in the published state on the `holiday_days` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"holiday_days": VALUE}`.
The minimal value is `1` and the maximum value is `30`.
The unit of this value is `d`.

### Fault (numeric)
Fault bitmap (4 = external sensor error).
Value can be found in the published state on the `fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.

