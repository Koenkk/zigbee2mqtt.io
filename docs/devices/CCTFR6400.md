---
title: "Schneider Electric CCTFR6400 control via MQTT"
description: "Integrate your Schneider Electric CCTFR6400 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
addedAt: 2021-05-25T17:59:46Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Schneider Electric CCTFR6400

|     |     |
|-----|-----|
| Model | CCTFR6400  |
| Vendor  | Schneider Electric  |
| Description | Temperature/Humidity measurement with thermostat interface |
| Exposes | keypad_lockout, humidity, battery, voltage, action, climate (occupied_heating_setpoint, local_temperature, pi_heating_demand), linkquality |
| Picture | ![Schneider Electric CCTFR6400](https://psi-4ward.github.io/zigbee2mqtt.io/images/devices/CCTFR6400.jpg) |


## Notes


### Device info
This device is a
- thermostat UI for displaying/adjusting target set point.
- temperature sensor
- hygrometry sensor
It can display the heating status of associated climate by setting `pi_heating_demand`

It requires a Z-Stack controller (Firmware version > TBD). It is currently not working with zigate and conbee II (maybe supported in further firmware).

### Device type specific configuration
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `humidity_precision`: Controls the precision of `humidity` values, e.g. `0`, `1` or `2`; default `2`.
To control the precision based on the humidity value set it to e.g. `{80: 0, 10: 1}`,
when humidity >= 80 precision will be 0, when humidity >= 10 precision will be 1. Precision will take into affect with next report of device.



## Exposes

### Keypad_lockout (enum)
Enables/disables physical input on the device.
Value can be found in the published state on the `keypad_lockout` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"keypad_lockout": NEW_VALUE}`.
The possible values are: `unlock`, `lock1`, `lock2`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `screen_sleep`, `screen_wake`, `button_press_plus_down`, `button_press_center_down`, `button_press_minus_down`.

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `pi_heating_demand`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `4` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

