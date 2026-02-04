---
title: "Custom devices (DiY) ACW02-ZB control via MQTT"
description: "Integrate your Custom devices (DiY) ACW02-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-11-30T20:06:49
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Custom devices (DiY) ACW02-ZB

|     |     |
|-----|-----|
| Model | ACW02-ZB  |
| Vendor  | [Custom devices (DiY)](/supported-devices/#v=Custom%20devices%20(DiY))  |
| Description | ACW02 HVAC Thermostat Controller via Zigbee (Router) |
| Exposes | climate (occupied_heating_setpoint, local_temperature, system_mode, running_state), error_text, ac_error_status, switch (state), filter_clean_status, fan_mode |
| Picture | ![Custom devices (DiY) ACW02-ZB](https://www.zigbee2mqtt.io/images/devices/ACW02-ZB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
>> ## Notes
### Description
Adds support for ACW02 HVAC Thermostat - a custom DIY Zigbee device based on ESP32-C6.

ACW02-ZB is an open-source Zigbee-enabled HVAC controller for the Airton series and compatible units (to replace ACW02 WiFi module).

👉 [View the repository on GitHub](https://github.com/Fabiancrg/acw02_zb)

### Device Details
- **Model:** ACW02-ZB
- **Vendor:** Custom devices (DiY)
- **Zigbee Model ID:** acw02-z
- **Manufacturer Name:** Custom devices (DiY)
- **Device Type:** Router
- **Chip:** ESP32-C6 with ESP-Zigbee SDK 5.5.1

### Features
- **Climate Control:**
  - Temperature setpoint: 16-31°C (single setpoint for both heating/cooling)
  - Local temperature reading
  - System modes: off, auto, cool, heat, dry, fan_only
  - Running state: idle, heat, cool, fan_only

- **Fan Control:**
  - Custom fan speeds: quiet, low, low-med, medium, med-high, high, auto
  - Maps to ACW02 protocol values (SILENT, P20, P40, P60, P80, P100, AUTO)

- **Switches (9 endpoints total):**
  - Eco mode (endpoint 2)
  - Swing mode (endpoint 3)
  - Display control (endpoint 4)
  - Night/sleep mode (endpoint 5)
  - Air purifier/ionizer (endpoint 6)
  - Mute beep sounds (endpoint 8)

- **Read-only Sensors:**
  - Filter cleaning status (endpoint 7)
  - Error status indicator (endpoint 9)
  - Error text messages (via locationDesc attribute)

- **Additional:**
  - OTA firmware updates supported
  - Optimized reporting (most attributes auto-report via REPORTING flag)
  - Minimal polling for unreportable attributes (runningMode, fanMode, error_text)


### Device Pairing
1. Power on the device
2. It will automatically enter pairing mode (factory new)
3. Permit joining in Zigbee2MQTT
4. To force pairing, hold the boot button for more than 5 seconds.

### Configuration Options
- `acw02_poll_interval`: Polling interval for unreportable attributes (default: 60s, set to -1 to disable)
>>
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `acw02_poll_interval`: Polling interval in seconds for unreportable attributes (default: 60s, -1 to disable). The value must be a number with a minimum value of `-1`

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `16` and `31`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `auto`, `cool`, `heat`, `dry`, `fan_only`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`, `cool`, `fan_only`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.

### Error text (text)
Error message from AC unit (read-only).
Value can be found in the published state on the `error_text` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"error_text": ""}`.
It's not possible to write (`/set`) this value.

### Ac error status (binary)
Error status indicator (read-only).
Value can be found in the published state on the `ac_error_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ac_error_status": ""}`.
It's not possible to write (`/set`) this value.
If value equals `ON` ac error status is ON, if `OFF` OFF.

### Switch (eco_mode endpoint)
The current state of this switch is in the published state under the `state_eco_mode` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_eco_mode": "ON"}`, `{"state_eco_mode": "OFF"}` or `{"state_eco_mode": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_eco_mode": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (swing_mode endpoint)
The current state of this switch is in the published state under the `state_swing_mode` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_swing_mode": "ON"}`, `{"state_swing_mode": "OFF"}` or `{"state_swing_mode": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_swing_mode": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (display endpoint)
The current state of this switch is in the published state under the `state_display` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_display": "ON"}`, `{"state_display": "OFF"}` or `{"state_display": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_display": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (night_mode endpoint)
The current state of this switch is in the published state under the `state_night_mode` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_night_mode": "ON"}`, `{"state_night_mode": "OFF"}` or `{"state_night_mode": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_night_mode": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (purifier endpoint)
The current state of this switch is in the published state under the `state_purifier` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_purifier": "ON"}`, `{"state_purifier": "OFF"}` or `{"state_purifier": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_purifier": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Filter clean status (binary)
Filter cleaning reminder (read-only).
Value can be found in the published state on the `filter_clean_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"filter_clean_status": ""}`.
It's not possible to write (`/set`) this value.
If value equals `ON` filter clean status is ON, if `OFF` OFF.

### Switch (mute endpoint)
The current state of this switch is in the published state under the `state_mute` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_mute": "ON"}`, `{"state_mute": "OFF"}` or `{"state_mute": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_mute": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Fan mode (enum)
Fan speed: Quiet=SILENT, Low=P20, Low-Med=P40, Medium=P60, Med-High=P80, High=P100, Auto=AUTO.
Value can be found in the published state on the `fan_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"fan_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fan_mode": NEW_VALUE}`.
The possible values are: `auto`, `low`, `low-med`, `medium`, `med-high`, `high`, `quiet`.

