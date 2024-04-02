---
title: "CTM Lyng mTouch_One control via MQTT"
description: "Integrate your CTM Lyng mTouch_One via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-08-01T15:06:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# CTM Lyng mTouch_One

|     |     |
|-----|-----|
| Model | mTouch_One  |
| Vendor  | [CTM Lyng](/supported-devices/#v=CTM%20Lyng)  |
| Description | mTouch One OP, touch thermostat |
| Exposes | lock (state), climate (occupied_heating_setpoint, local_temperature, system_mode, preset, running_state), load, display_text, regulator_mode, mean_power, floor_temp, frost_guard, regulator_setpoint, air_temp, linkquality |
| Picture | ![CTM Lyng mTouch_One](https://www.zigbee2mqtt.io/images/devices/mTouch_One.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Child lock (lock)
The current state of this lock is in the published state under the `child_lock` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": "LOCK"}` or `{"child_lock": "UNLOCK"}`.
It's not possible to read (`/get`) this value.

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `preset`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `40`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `off`, `away`, `sleep`, `home`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.

### Load (numeric)
Load in W when heating is on (between 0-3600 W). The thermostat uses the value as input to the mean_power calculation..
Value can be found in the published state on the `load` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"load": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"load": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3600`.
The unit of this value is `W`.

### Display text (text)
Displayed text on thermostat display (zone). Max 19 characters.
Value can be found in the published state on the `display_text` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"display_text": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_text": NEW_VALUE}`.

### Regulator mode (binary)
Device in regulator or thermostat mode..
Value can be found in the published state on the `regulator_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"regulator_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"regulator_mode": NEW_VALUE}`.
If value equals `regulator` regulator mode is ON, if `thermostat` OFF.

### Mean power (numeric)
Reports average power usage last 10 minutes.
Value can be found in the published state on the `mean_power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"mean_power": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Floor temp (numeric)
Current temperature measured from the floor sensor.
Value can be found in the published state on the `floor_temp` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_temp": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Frost guard (binary)
When frost guard is ON, it is activated when the thermostat is switched OFF with the ON/OFF button.At the same time, the display will fade and the text "Frostsikring x °C" appears in the display and remains until the thermostat is switched on again..
Value can be found in the published state on the `frost_guard` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"frost_guard": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_guard": NEW_VALUE}`.
If value equals `ON` frost guard is ON, if `OFF` OFF.

### Regulator setpoint (numeric)
Setpoint in %, use only when the thermostat is in regulator mode..
Value can be found in the published state on the `regulator_setpoint` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"regulator_setpoint": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"regulator_setpoint": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `99`.
The unit of this value is `%`.

### Air temp (numeric)
Current temperature measured from the air sensor.
Value can be found in the published state on the `air_temp` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"air_temp": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

