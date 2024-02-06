---
title: "Aqara ZNQBKG41LM control via MQTT"
description: "Integrate your Aqara ZNQBKG41LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-01-31T20:08:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara ZNQBKG41LM

|     |     |
|-----|-----|
| Model | ZNQBKG41LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Smart wall switch Z1 (quadruple rocker) |
| Exposes | power, voltage, device_temperature, switch (state), power_outage_memory, led_disabled_night, operation_mode, lock_relay, click_mode, action, linkquality |
| Picture | ![Aqara ZNQBKG41LM](https://www.zigbee2mqtt.io/images/devices/ZNQBKG41LM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

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

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Switch (top endpoint)
The current state of this switch is in the published state under the `state_top` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_top": "ON"}`, `{"state_top": "OFF"}` or `{"state_top": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_top": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionnaly an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depend on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (middle endpoint)
The current state of this switch is in the published state under the `state_middle` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_middle": "ON"}`, `{"state_middle": "OFF"}` or `{"state_middle": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_middle": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionnaly an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depend on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (bottom endpoint)
The current state of this switch is in the published state under the `state_bottom` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_bottom": "ON"}`, `{"state_bottom": "OFF"}` or `{"state_bottom": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_bottom": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionnaly an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depend on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Power outage memory (enum)
Power Outage Memory.
Value can be found in the published state on the `power_outage_memory` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_outage_memory": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_outage_memory": NEW_VALUE}`.
The possible values are: `on`, `electric_appliances_on`, `electric_appliances_off`, `inverted`.

### LED disabled night (binary)
Enable/disable the LED at night.
Value can be found in the published state on the `led_disabled_night` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_disabled_night": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_disabled_night": NEW_VALUE}`.
If value equals `true` lED disabled night is ON, if `false` OFF.

### Operation mode (enum, top endpoint)
Decoupled mode for top button.
Value can be found in the published state on the `operation_mode_top` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode_top": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode_top": NEW_VALUE}`.
The possible values are: `control_relay`, `decoupled`.

### Operation mode (enum, middle endpoint)
Decoupled mode for middle button.
Value can be found in the published state on the `operation_mode_middle` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode_middle": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode_middle": NEW_VALUE}`.
The possible values are: `control_relay`, `decoupled`.

### Operation mode (enum, bottom endpoint)
Decoupled mode for bottom button.
Value can be found in the published state on the `operation_mode_bottom` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode_bottom": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode_bottom": NEW_VALUE}`.
The possible values are: `control_relay`, `decoupled`.

### Lock relay (binary, top endpoint)
Lock relay mode for top button.
Value can be found in the published state on the `lock_relay_top` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"lock_relay_top": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lock_relay_top": NEW_VALUE}`.
If value equals `true` lock relay is ON, if `false` OFF.

### Lock relay (binary, middle endpoint)
Lock relay mode for middle button.
Value can be found in the published state on the `lock_relay_middle` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"lock_relay_middle": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lock_relay_middle": NEW_VALUE}`.
If value equals `true` lock relay is ON, if `false` OFF.

### Lock relay (binary, bottom endpoint)
Lock relay mode for bottom button.
Value can be found in the published state on the `lock_relay_bottom` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"lock_relay_bottom": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lock_relay_bottom": NEW_VALUE}`.
If value equals `true` lock relay is ON, if `false` OFF.

### Click mode (enum)
Click mode(Wireless button only), fast: only supports single click which will be send immediately after clicking.multi: supports more events like double and hold.
Value can be found in the published state on the `click_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"click_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"click_mode": NEW_VALUE}`.
The possible values are: `fast`, `multi`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single_top`, `single_middle`, `single_bottom`, `hold_wireless`, `single_wireless`, `double_wireless`, `release_wireless`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

