---
title: "Tuya _TZE204_3regm3h6 control via MQTT"
description: "Integrate your Tuya _TZE204_3regm3h6 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-30T19:37:29
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya _TZE204_3regm3h6

|     |     |
|-----|-----|
| Model | _TZE204_3regm3h6  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart thermostat for electric radiator with pilot wire |
| Exposes | state, child_lock, climate (current_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, preset), mode, radiators_without_integrated_regulation, comfort_temperature, eco_temperature, antifrost_temperature, temperature_sensibility, antifrost, window_detection, window, power, voltage, current, energy, energy_today, energy_yesterday, device_mode_type |
| Picture | ![Tuya _TZE204_3regm3h6](https://www.zigbee2mqtt.io/images/devices/_TZE204_3regm3h6.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### State (binary)
Turn the heater on or off.
Value can be found in the published state on the `state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": NEW_VALUE}`.
If value equals `ON` state is ON, if `OFF` OFF.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Climate 
This climate device supports the following features: `current_heating_setpoint`, `local_temperature`, `local_temperature_calibration`, `system_mode`, `preset`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `comfort`, `eco`, `antifrost`, `off`, `comfort_1`, `comfort_2`, `program`, `manual`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-9` and the maximum value is `9` with a step size of `1`.

### Mode (enum)
Current running mode.
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `comfort`, `eco`, `antifrost`, `off`, `comfort_1`, `comfort_2`, `program`, `manual`.

### Radiators without integrated regulation (binary)
Enable this for radiator without integrated regulation. OFF if Comfort, Eco and Antifrost temperatures can be defined on the radiator. ON if the radiator has no integrated regulation (i.e define temperatures on the thermostat)..
Value can be found in the published state on the `radiators_without_integrated_regulation` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radiators_without_integrated_regulation": NEW_VALUE}`.
If value equals `ON` radiators without integrated regulation is ON, if `OFF` OFF.

### Comfort temperature (numeric)
Set comfort temperature.
Value can be found in the published state on the `comfort_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `35`.
The unit of this value is `  C`.

### Eco temperature (numeric)
Set ECO temperature.
Value can be found in the published state on the `eco_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.
The unit of this value is `  C`.

### Antifrost temperature (numeric)
Set antifrost temperature.
Value can be found in the published state on the `antifrost_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"antifrost_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `15`.
The unit of this value is `  C`.

### Temperature sensibility (numeric)
Set thermostat sensitivity.
Value can be found in the published state on the `temperature_sensibility` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_sensibility": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `5`.
The unit of this value is `  C`.

### Antifrost (binary)
Enable antifrost protection feature.
Value can be found in the published state on the `antifrost` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"antifrost": NEW_VALUE}`.
If value equals `ON` antifrost is ON, if `OFF` OFF.

### Open window detection (binary)
Enable / Disable open window detection feature.
Value can be found in the published state on the `window_detection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": NEW_VALUE}`.
If value equals `ON` open window detection is ON, if `OFF` OFF.

### Window (enum)
Indicates if window is open.
Value can be found in the published state on the `window` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `close`, `open`.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Energy today (numeric)
Energy consumed today.
Value can be found in the published state on the `energy_today` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Energy yesterday (numeric)
Energy consumed yesterday.
Value can be found in the published state on the `energy_yesterday` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Device mode type (enum)
Indicates the actual pilot wire mode of the thermostat.
Value can be found in the published state on the `device_mode_type` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `four`, `six`, `switch`.

