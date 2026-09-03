---
title: "Tuya TS0601_6gang_switch_2 control via MQTT"
description: "Integrate your Tuya TS0601_6gang_switch_2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-03T18:55:25
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_6gang_switch_2

|     |     |
|-----|-----|
| Model | TS0601_6gang_switch_2  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 6 gang touch panel switch with power monitoring and configurable indicator colors |
| Exposes | switch (state), energy, power, current, voltage, child_lock, backlight, indicator, power_on_behavior, power_on_behavior_1, power_on_behavior_2, power_on_behavior_3, power_on_behavior_4, power_on_behavior_5, power_on_behavior_6, color_hs, brightness_on, brightness_off |
| Picture | ![Tuya TS0601_6gang_switch_2](https://www.zigbee2mqtt.io/images/devices/TS0601_6gang_switch_2.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Switch (button_1 endpoint)
The current state of this switch is in the published state under the `state_button_1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_button_1": "ON"}`, `{"state_button_1": "OFF"}` or `{"state_button_1": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (button_2 endpoint)
The current state of this switch is in the published state under the `state_button_2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_button_2": "ON"}`, `{"state_button_2": "OFF"}` or `{"state_button_2": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (button_3 endpoint)
The current state of this switch is in the published state under the `state_button_3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_button_3": "ON"}`, `{"state_button_3": "OFF"}` or `{"state_button_3": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (button_4 endpoint)
The current state of this switch is in the published state under the `state_button_4` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_button_4": "ON"}`, `{"state_button_4": "OFF"}` or `{"state_button_4": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (button_5 endpoint)
The current state of this switch is in the published state under the `state_button_5` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_button_5": "ON"}`, `{"state_button_5": "OFF"}` or `{"state_button_5": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (button_6 endpoint)
The current state of this switch is in the published state under the `state_button_6` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_button_6": "ON"}`, `{"state_button_6": "OFF"}` or `{"state_button_6": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (all endpoint)
The current state of this switch is in the published state under the `state_all` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_all": "ON"}`, `{"state_all": "OFF"}` or `{"state_all": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Backlight (binary)
Indicator backlight.
Value can be found in the published state on the `backlight` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight": NEW_VALUE}`.
If value equals `ON` backlight is ON, if `OFF` OFF.

### Indicator (binary)
LED indicator.
Value can be found in the published state on the `indicator` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator": NEW_VALUE}`.
If value equals `ON` indicator is ON, if `OFF` OFF.

### Power on behavior (enum)
Power on behavior state.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `previous`.

### Power on behavior 1 (enum)
Button 1 power-on behavior.
Value can be found in the published state on the `power_on_behavior_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_1": NEW_VALUE}`.
The possible values are: `off`, `on`, `previous`.

### Power on behavior 2 (enum)
Button 2 power-on behavior.
Value can be found in the published state on the `power_on_behavior_2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_2": NEW_VALUE}`.
The possible values are: `off`, `on`, `previous`.

### Power on behavior 3 (enum)
Button 3 power-on behavior.
Value can be found in the published state on the `power_on_behavior_3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_3": NEW_VALUE}`.
The possible values are: `off`, `on`, `previous`.

### Power on behavior 4 (enum)
Button 4 power-on behavior.
Value can be found in the published state on the `power_on_behavior_4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_4": NEW_VALUE}`.
The possible values are: `off`, `on`, `previous`.

### Power on behavior 5 (enum)
Button 5 power-on behavior.
Value can be found in the published state on the `power_on_behavior_5` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_5": NEW_VALUE}`.
The possible values are: `off`, `on`, `previous`.

### Power on behavior 6 (enum)
Button 6 power-on behavior.
Value can be found in the published state on the `power_on_behavior_6` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_6": NEW_VALUE}`.
The possible values are: `off`, `on`, `previous`.

### Color (composite, button_1 endpoint)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_button_1": {"hue_button_1": VALUE, "saturation_button_1": VALUE}}`
- `hue` (numeric) max value is 360
- `saturation` (numeric) max value is 100

### On brightness (numeric, button_1 endpoint)
Value can be found in the published state on the `brightness_on_button_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_on_button_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Off brightness (numeric, button_1 endpoint)
Value can be found in the published state on the `brightness_off_button_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_off_button_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Color (composite, button_2 endpoint)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_button_2": {"hue_button_2": VALUE, "saturation_button_2": VALUE}}`
- `hue` (numeric) max value is 360
- `saturation` (numeric) max value is 100

### On brightness (numeric, button_2 endpoint)
Value can be found in the published state on the `brightness_on_button_2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_on_button_2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Off brightness (numeric, button_2 endpoint)
Value can be found in the published state on the `brightness_off_button_2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_off_button_2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Color (composite, button_3 endpoint)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_button_3": {"hue_button_3": VALUE, "saturation_button_3": VALUE}}`
- `hue` (numeric) max value is 360
- `saturation` (numeric) max value is 100

### On brightness (numeric, button_3 endpoint)
Value can be found in the published state on the `brightness_on_button_3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_on_button_3": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Off brightness (numeric, button_3 endpoint)
Value can be found in the published state on the `brightness_off_button_3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_off_button_3": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Color (composite, button_4 endpoint)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_button_4": {"hue_button_4": VALUE, "saturation_button_4": VALUE}}`
- `hue` (numeric) max value is 360
- `saturation` (numeric) max value is 100

### On brightness (numeric, button_4 endpoint)
Value can be found in the published state on the `brightness_on_button_4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_on_button_4": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Off brightness (numeric, button_4 endpoint)
Value can be found in the published state on the `brightness_off_button_4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_off_button_4": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Color (composite, button_5 endpoint)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_button_5": {"hue_button_5": VALUE, "saturation_button_5": VALUE}}`
- `hue` (numeric) max value is 360
- `saturation` (numeric) max value is 100

### On brightness (numeric, button_5 endpoint)
Value can be found in the published state on the `brightness_on_button_5` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_on_button_5": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Off brightness (numeric, button_5 endpoint)
Value can be found in the published state on the `brightness_off_button_5` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_off_button_5": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Color (composite, button_6 endpoint)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_button_6": {"hue_button_6": VALUE, "saturation_button_6": VALUE}}`
- `hue` (numeric) max value is 360
- `saturation` (numeric) max value is 100

### On brightness (numeric, button_6 endpoint)
Value can be found in the published state on the `brightness_on_button_6` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_on_button_6": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Off brightness (numeric, button_6 endpoint)
Value can be found in the published state on the `brightness_off_button_6` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_off_button_6": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

