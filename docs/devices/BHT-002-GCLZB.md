---
title: "Moes BHT-002-GCLZB control via MQTT"
description: "Integrate your Moes BHT-002-GCLZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-09-30T20:52:56Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes BHT-002-GCLZB

|     |     |
|-----|-----|
| Model | BHT-002-GCLZB  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | Moes BHT series Thermostat |
| Exposes | linkquality, lock (state), deadzone_temperature, max_temperature_limit, climate (current_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, running_state, preset), sensor, program |
| Picture | ![Moes BHT-002-GCLZB](https://www.zigbee2mqtt.io/images/devices/BHT-002-GCLZB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing
Switch the thermostat off. Press and hold the temperature down button for +- 8 seconds to enable the pairing mode (display lights up and a WiFi-like icon is blinking). After successful interview turn the thermostat on again.

### Stop message flooding
This unit has a bug that makes it send multiple messages when updating. To stop this from flooding your MQTT Queues, please add the following to your `configuration.yaml` file:

```yaml
devices:
  '0x12345678':
    friendly_name: thermostat
    debounce: 1
```
<!-- Notes END: Do not edit below this line -->




## Exposes

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

### Child lock (lock)
The current state of this lock is in the published state under the `child_lock` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": "LOCK"}` or `{"child_lock": "UNLOCK"}`.
It's not possible to read (`/get`) this value.

### Deadzone temperature (numeric)
The delta between local_temperature and current_heating_setpoint to trigger Heat.
Value can be found in the published state on the `deadzone_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"deadzone_temperature": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5`.
The unit of this value is `°C`.

### Max temperature limit (numeric)
Maximum temperature limit. Cuts the thermostat out regardless of air temperature if the external floor sensor exceeds this temperature. Only used by the thermostat when in AL sensor mode..
Value can be found in the published state on the `max_temperature_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature_limit": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `45`.
The unit of this value is `°C`.

### Climate 
This climate device supports the following features: `current_heating_setpoint`, `local_temperature`, `local_temperature_calibration`, `system_mode`, `running_state`, `preset`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `45`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `hold`, `program`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`, `cool`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-30` and the maximum value is `30` with a step size of `0.1`.

### Sensor (enum)
Select temperature sensor to use.
Value can be found in the published state on the `sensor` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor": NEW_VALUE}`.
The possible values are: `IN`, `AL`, `OU`.

### Program (composite)
Time of day and setpoint to use when in program mode.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program": {"weekdays_p1_hour": VALUE, "weekdays_p1_minute": VALUE, "weekdays_p1_temperature": VALUE, "weekdays_p2_hour": VALUE, "weekdays_p2_minute": VALUE, "weekdays_p2_temperature": VALUE, "weekdays_p3_hour": VALUE, "weekdays_p3_minute": VALUE, "weekdays_p3_temperature": VALUE, "weekdays_p4_hour": VALUE, "weekdays_p4_minute": VALUE, "weekdays_p4_temperature": VALUE, "saturday_p1_hour": VALUE, "saturday_p1_minute": VALUE, "saturday_p1_temperature": VALUE, "saturday_p2_hour": VALUE, "saturday_p2_minute": VALUE, "saturday_p2_temperature": VALUE, "saturday_p3_hour": VALUE, "saturday_p3_minute": VALUE, "saturday_p3_temperature": VALUE, "saturday_p4_hour": VALUE, "saturday_p4_minute": VALUE, "saturday_p4_temperature": VALUE, "sunday_p1_hour": VALUE, "sunday_p1_minute": VALUE, "sunday_p1_temperature": VALUE, "sunday_p2_hour": VALUE, "sunday_p2_minute": VALUE, "sunday_p2_temperature": VALUE, "sunday_p3_hour": VALUE, "sunday_p3_minute": VALUE, "sunday_p3_temperature": VALUE, "sunday_p4_hour": VALUE, "sunday_p4_minute": VALUE, "sunday_p4_temperature": VALUE}}`
- `weekdays_p1_hour` (numeric) max value is 23, unit is h
- `weekdays_p1_minute` (numeric) max value is 59, unit is m
- `weekdays_p1_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `weekdays_p2_hour` (numeric) max value is 23, unit is h
- `weekdays_p2_minute` (numeric) max value is 59, unit is m
- `weekdays_p2_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `weekdays_p3_hour` (numeric) max value is 23, unit is h
- `weekdays_p3_minute` (numeric) max value is 59, unit is m
- `weekdays_p3_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `weekdays_p4_hour` (numeric) max value is 23, unit is h
- `weekdays_p4_minute` (numeric) max value is 59, unit is m
- `weekdays_p4_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `saturday_p1_hour` (numeric) max value is 23, unit is h
- `saturday_p1_minute` (numeric) max value is 59, unit is m
- `saturday_p1_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `saturday_p2_hour` (numeric) max value is 23, unit is h
- `saturday_p2_minute` (numeric) max value is 59, unit is m
- `saturday_p2_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `saturday_p3_hour` (numeric) max value is 23, unit is h
- `saturday_p3_minute` (numeric) max value is 59, unit is m
- `saturday_p3_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `saturday_p4_hour` (numeric) max value is 23, unit is h
- `saturday_p4_minute` (numeric) max value is 59, unit is m
- `saturday_p4_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `sunday_p1_hour` (numeric) max value is 23, unit is h
- `sunday_p1_minute` (numeric) max value is 59, unit is m
- `sunday_p1_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `sunday_p2_hour` (numeric) max value is 23, unit is h
- `sunday_p2_minute` (numeric) max value is 59, unit is m
- `sunday_p2_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `sunday_p3_hour` (numeric) max value is 23, unit is h
- `sunday_p3_minute` (numeric) max value is 59, unit is m
- `sunday_p3_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `sunday_p4_hour` (numeric) max value is 23, unit is h
- `sunday_p4_minute` (numeric) max value is 59, unit is m
- `sunday_p4_temperature` (numeric) min value is 5, max value is 35, unit is °C

