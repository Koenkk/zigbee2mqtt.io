---
title: "xyzroe ZigUSB control via MQTT"
description: "Integrate your xyzroe ZigUSB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-02-29T20:20:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# xyzroe ZigUSB

|     |     |
|-----|-----|
| Model | ZigUSB  |
| Vendor  | [xyzroe](/supported-devices/#v=xyzroe)  |
| Description | Zigbee USB power monitor and switch |
| Exposes | switch (state), restart, button_mode, link_to_output, bind_command, action, current, voltage, power, interval, cpu_temperature, uptime, linkquality |
| Picture | ![xyzroe ZigUSB](https://www.zigbee2mqtt.io/images/devices/ZigUSB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
[xyzroe ZigUSB](https://xyzroe.cc/ZigUSB)
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


## Exposes

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Restart (numeric, l1 endpoint)
OFF time.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"restart_l1": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `30`.
The unit of this value is `seconds`.

### Button mode (enum, l1 endpoint)
Value can be found in the published state on the `button_mode_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"button_mode_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"button_mode_l1": NEW_VALUE}`.
The possible values are: `single_click`, `multi_click`.

### Link to output (enum, l1 endpoint)
Value can be found in the published state on the `link_to_output_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"link_to_output_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"link_to_output_l1": NEW_VALUE}`.
The possible values are: `no`, `yes`.

### Bind command (enum, l1 endpoint)
Value can be found in the published state on the `bind_command_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"bind_command_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"bind_command_l1": NEW_VALUE}`.
The possible values are: `on/off`, `toggle`, `change_level_up`, `change_level_down`, `change_level_up_with_off`, `change_level_down_with_off`, `recall_scene_0`, `recall_scene_1`, `recall_scene_2`, `recall_scene_3`, `recall_scene_4`, `recall_scene_5`.

### Action (enum)
Single click works only with NO link to output.
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single`, `double`, `triple`.

### Current (numeric, l2 endpoint)
Instantaneous measured electrical current.
Value can be found in the published state on the `current_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric, l2 endpoint)
Measured electrical potential value.
Value can be found in the published state on the `voltage_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Power (numeric, l2 endpoint)
Instantaneous measured power.
Value can be found in the published state on the `power_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Interval (numeric, l2 endpoint)
Reporting interval.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"interval_l2": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `3600`.
The unit of this value is `sec`.

### CPU temperature (numeric, l4 endpoint)
Temperature of the CPU.
Value can be found in the published state on the `temperature_l4` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Uptime (numeric, l5 endpoint)
CC2530.
Value can be found in the published state on the `uptime_l5` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `seconds`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

