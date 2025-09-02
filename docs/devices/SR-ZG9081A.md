---
title: "Sunricher SR-ZG9081A control via MQTT"
description: "Integrate your Sunricher SR-ZG9081A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-01T18:20:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sunricher SR-ZG9081A

|     |     |
|-----|-----|
| Model | SR-ZG9081A  |
| Vendor  | [Sunricher](/supported-devices/#v=Sunricher)  |
| Description | Zigbee curtain control module |
| Exposes | cover (state, position, tilt), power, voltage, current, energy, dev_mode, curtain_type, calibrate, identify |
| Picture | ![Sunricher SR-ZG9081A](https://www.zigbee2mqtt.io/images/devices/SR-ZG9081A.png) |


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

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`


## Exposes

### Cover (1 endpoint)
The current state of this cover is in the published state under the `state_1` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_1": "OPEN"}`, `{"state_1": "CLOSE"}`, `{"state_1": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position_1": VALUE}` where `VALUE` is a number between `0` and `100`.
To change the tilt publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tilt_1": VALUE}` where `VALUE` is a number between `0` and `100`.

### Power (numeric, 3 endpoint)
Instantaneous measured power.
Value can be found in the published state on the `power_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Voltage (numeric, 3 endpoint)
Measured electrical potential value.
Value can be found in the published state on the `voltage_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### Current (numeric, 3 endpoint)
Instantaneous measured electrical current.
Value can be found in the published state on the `current_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### Energy (numeric, 3 endpoint)
Sum of consumed energy.
Value can be found in the published state on the `energy_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Dev mode (enum)
Set device type (curtain or light).
Value can be found in the published state on the `dev_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dev_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dev_mode": NEW_VALUE}`.
The possible values are: `curtain`, `light`.

### Curtain type (enum)
Configure curtain type.
Value can be found in the published state on the `curtain_type` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"curtain_type": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"curtain_type": NEW_VALUE}`.
The possible values are: `normal`, `venetian_blind`.

### Calibrate (enum)
Calibrate curtain (motor will learn travel limits automatically).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibrate": NEW_VALUE}`.
The possible values are: `calibrate`.

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

