---
title: "Netica FRZ1 control via MQTT"
description: "Integrate your Netica FRZ1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-03-31T19:04:39
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Netica FRZ1

|     |     |
|-----|-----|
| Model | FRZ1  |
| Vendor  | [Netica](/supported-devices/#v=Netica)  |
| Description | FreezBee, a smart thermostat designed to operate with Frisquet boilers |
| Exposes | temperature, humidity, climate (local_temperature, occupied_heating_setpoint, system_mode, running_state, control_sequence_of_operation), remote_temperature, use_remote_temperature, target_water_temperature |
| Picture | ![Netica FRZ1](https://www.zigbee2mqtt.io/images/devices/FRZ1.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Climate 
This climate device supports the following features: `local_temperature`, `occupied_heating_setpoint`, `system_mode`, `running_state`, `control_sequence_of_operation`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Perceived room temperature. Can be measured on the device or defined using the remote temperature attribute. (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.

### Remote temperature (numeric)
The value of a remote temperature sensor. Note: synchronisation of this value with the remote temperature sensor needs to happen outside of Zigbee2MQTT..
Value can be found in the published state on the `remote_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"remote_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"remote_temperature": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `99.9`.
The unit of this value is `°C`.

### Use remote temperature (binary)
Whether to use the value of the internal temperature sensor or a remote temperature sensor for the perceived room temperature..
Value can be found in the published state on the `use_remote_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"use_remote_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"use_remote_temperature": NEW_VALUE}`.
If value equals `ON` use remote temperature is ON, if `OFF` OFF.

### Target water temperature (numeric)
Target water temperature in the heating circuit..
Value can be found in the published state on the `target_water_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"target_water_temperature": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `99.9`.
The unit of this value is `°C`.

