---
title: "Aqara WS-USC04 control via MQTT"
description: "Integrate your Aqara WS-USC04 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-06-10T16:45:59Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara WS-USC04

|     |     |
|-----|-----|
| Model | WS-USC04  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Smart wall switch (with neutral, double rocker), US |
| Exposes | switch (state), operation_mode, power_outage_count, device_temperature, flip_indicator_light, power, energy, voltage, power_outage_memory, action, linkquality |
| Picture | ![Aqara WS-USC04](https://www.zigbee2mqtt.io/images/devices/WS-USC04.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch (top endpoint)
The current state of this switch is in the published state under the `state_top` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_top": "ON"}`, `{"state_top": "OFF"}` or `{"state_top": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_top": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (bottom endpoint)
The current state of this switch is in the published state under the `state_bottom` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_bottom": "ON"}`, `{"state_bottom": "OFF"}` or `{"state_bottom": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_bottom": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Operation mode (enum, top endpoint)
Decoupled mode for top button.
Value can be found in the published state on the `operation_mode_top` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode_top": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode_top": NEW_VALUE}`.
The possible values are: `control_relay`, `decoupled`.

### Operation mode (enum, bottom endpoint)
Decoupled mode for bottom button.
Value can be found in the published state on the `operation_mode_bottom` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode_bottom": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode_bottom": NEW_VALUE}`.
The possible values are: `control_relay`, `decoupled`.

### Power outage count (numeric)
Number of power outages (since last pairing).
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Flip indicator light (binary)
After turn on, the indicator light turns on while switch is off, and vice versa.
Value can be found in the published state on the `flip_indicator_light` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"flip_indicator_light": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"flip_indicator_light": NEW_VALUE}`.
If value equals `ON` flip indicator light is ON, if `OFF` OFF.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Power outage memory (binary)
Enable/disable the power outage memory, this recovers the on/off mode after power failure.
Value can be found in the published state on the `power_outage_memory` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_outage_memory": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_outage_memory": NEW_VALUE}`.
If value equals `true` power outage memory is ON, if `false` OFF.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single_top`, `single_bottom`, `single_both`, `double_top`, `double_bottom`, `double_both`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

