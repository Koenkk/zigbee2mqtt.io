---
title: "xyzroe ZigDC control via MQTT"
description: "Integrate your xyzroe ZigDC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-06-30T19:12:33
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# xyzroe ZigDC

|     |     |
|-----|-----|
| Model | ZigDC  |
| Vendor  | [xyzroe](/supported-devices/#v=xyzroe)  |
| Description | ZigDC |
| Exposes | current, voltage, power, temperature, humidity, action, cpu_temperature, switch_type, switch_actions, bind_command, uptime, interval, linkquality |
| Picture | ![xyzroe ZigDC](https://www.zigbee2mqtt.io/images/devices/ZigDC.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
[xyzroe ZigDC](https://xyzroe.cc/ZigDC)
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Current (numeric, ch1 endpoint)
Instantaneous measured electrical current.
Value can be found in the published state on the `current_ch1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric, ch1 endpoint)
Measured electrical potential value.
Value can be found in the published state on the `voltage_ch1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Power (numeric, ch1 endpoint)
Instantaneous measured power.
Value can be found in the published state on the `power_ch1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Current (numeric, ch2 endpoint)
Instantaneous measured electrical current.
Value can be found in the published state on the `current_ch2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric, ch2 endpoint)
Measured electrical potential value.
Value can be found in the published state on the `voltage_ch2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Power (numeric, ch2 endpoint)
Instantaneous measured power.
Value can be found in the published state on the `power_ch2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Current (numeric, ch3 endpoint)
Instantaneous measured electrical current.
Value can be found in the published state on the `current_ch3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric, ch3 endpoint)
Measured electrical potential value.
Value can be found in the published state on the `voltage_ch3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Power (numeric, ch3 endpoint)
Instantaneous measured power.
Value can be found in the published state on the `power_ch3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Current (numeric, ch4 endpoint)
Instantaneous measured electrical current.
Value can be found in the published state on the `current_ch4` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric, ch4 endpoint)
Measured electrical potential value.
Value can be found in the published state on the `voltage_ch4` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Power (numeric, ch4 endpoint)
Instantaneous measured power.
Value can be found in the published state on the `power_ch4` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Current (numeric, ch5 endpoint)
Instantaneous measured electrical current.
Value can be found in the published state on the `current_ch5` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric, ch5 endpoint)
Measured electrical potential value.
Value can be found in the published state on the `voltage_ch5` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Power (numeric, ch5 endpoint)
Instantaneous measured power.
Value can be found in the published state on the `power_ch5` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Current (numeric, ch6 endpoint)
Instantaneous measured electrical current.
Value can be found in the published state on the `current_ch6` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric, ch6 endpoint)
Measured electrical potential value.
Value can be found in the published state on the `voltage_ch6` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Power (numeric, ch6 endpoint)
Instantaneous measured power.
Value can be found in the published state on the `power_ch6` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Temperature (numeric, l6 endpoint)
Measured temperature value.
Value can be found in the published state on the `temperature_l6` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, l6 endpoint)
Measured relative humidity.
Value can be found in the published state on the `humidity_l6` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single`, `double`, `triple`, `hold`, `release`.

### CPU temperature (numeric, l2 endpoint)
Temperature of the CPU.
Value can be found in the published state on the `temperature_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Switch type (enum, l7 endpoint)
IN1.
Value can be found in the published state on the `switch_type_l7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_l7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_l7": NEW_VALUE}`.
The possible values are: `switch`, `single_click`, `multi_click`, `reset_to_defaults`.

### Switch actions (enum, l7 endpoint)
Value can be found in the published state on the `switch_actions_l7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_l7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_l7": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Bind command (enum, l7 endpoint)
Value can be found in the published state on the `bind_command_l7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"bind_command_l7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"bind_command_l7": NEW_VALUE}`.
The possible values are: `on/off`, `toggle`, `change_level_up`, `change_level_down`, `change_level_up_with_off`, `change_level_down_with_off`, `recall_scene_0`, `recall_scene_1`, `recall_scene_2`, `recall_scene_3`, `recall_scene_4`, `recall_scene_5`.

### Switch type (enum, l8 endpoint)
IN2.
Value can be found in the published state on the `switch_type_l8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_l8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_l8": NEW_VALUE}`.
The possible values are: `switch`, `single_click`, `multi_click`, `reset_to_defaults`.

### Switch actions (enum, l8 endpoint)
Value can be found in the published state on the `switch_actions_l8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_l8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_l8": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Bind command (enum, l8 endpoint)
Value can be found in the published state on the `bind_command_l8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"bind_command_l8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"bind_command_l8": NEW_VALUE}`.
The possible values are: `on/off`, `toggle`, `change_level_up`, `change_level_down`, `change_level_up_with_off`, `change_level_down_with_off`, `recall_scene_0`, `recall_scene_1`, `recall_scene_2`, `recall_scene_3`, `recall_scene_4`, `recall_scene_5`.

### Switch type (enum, l1 endpoint)
BTN.
Value can be found in the published state on the `switch_type_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_l1": NEW_VALUE}`.
The possible values are: `switch`, `single_click`, `multi_click`, `reset_to_defaults`.

### Switch actions (enum, l1 endpoint)
Value can be found in the published state on the `switch_actions_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_l1": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Bind command (enum, l1 endpoint)
Value can be found in the published state on the `bind_command_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"bind_command_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"bind_command_l1": NEW_VALUE}`.
The possible values are: `on/off`, `toggle`, `change_level_up`, `change_level_down`, `change_level_up_with_off`, `change_level_down_with_off`, `recall_scene_0`, `recall_scene_1`, `recall_scene_2`, `recall_scene_3`, `recall_scene_4`, `recall_scene_5`.

### Uptime (numeric)
Uptime.
Value can be found in the published state on the `uptime` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `sec`.

### Interval (numeric)
Reporting interval.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"interval": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `600`.
The unit of this value is `sec`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

