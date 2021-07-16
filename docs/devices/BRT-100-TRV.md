---
title: "Moes BRT-100-TRV control via MQTT"
description: "Integrate your Moes BRT-100-TRV via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/BRT-100-TRV.md)*

# Moes BRT-100-TRV

| Model | BRT-100-TRV  |
| Vendor  | Moes  |
| Description | Thermostatic radiator valve |
| Exposes | battery, lock (state), eco_mode, eco_temperature, max_temperature, min_temperature, position, switch (state), window, climate (local_temperature, current_heating_setpoint, local_temperature_calibration, preset), programming_mode, boost_heating, boost_heating_countdown, boost_heating_countdown_time_set, linkquality |
| Picture | ![Moes BRT-100-TRV](../images/devices/BRT-100-TRV.jpg) |

## Notes

None

## OTA updates
This device supports OTA updates, for more information see [OTA updates](../information/ota_updates.md).


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Lock 
The current state of this lock is in the published state under the `child_lock` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": "LOCK"}` or `{"child_lock": "UNLOCK"}`.
It's not possible to read (`/get`) this value.

### Eco_mode (binary)
ECO mode (energy saving mode).
Value can be found in the published state on the `eco_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_mode": NEW_VALUE}`.
If value equals `ON` eco_mode is ON, if `OFF` OFF.

### Eco_temperature (numeric)
Eco temperature.
Value can be found in the published state on the `eco_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_temperature": NEW_VALUE}`.
The unit of this value is `°C`.

### Max_temperature (numeric)
Maximum temperature.
Value can be found in the published state on the `max_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature": NEW_VALUE}`.
The unit of this value is `°C`.

### Min_temperature (numeric)
Minimum temperature.
Value can be found in the published state on the `min_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_temperature": NEW_VALUE}`.
The unit of this value is `°C`.

### Position (numeric)
Position.
Value can be found in the published state on the `position` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Switch 
The current state of this switch is in the published state under the `window_detection` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": "ON"}`, `{"window_detection": "OFF"}` or `{"window_detection": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Window (binary)
Window status closed or open .
Value can be found in the published state on the `window` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `CLOSED` window is ON, if `OPEN` OFF.

### Climate 
This climate device supports the following features: `local_temperature`, `current_heating_setpoint`, `local_temperature_calibration`, `preset`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `preset`: MANUAL MODE ☝ - In this mode, the device executes manual temperature setting. When the set temperature is lower than the "minimum temperature", the valve is closed (forced closed). PROGRAMMING MODE ⏱ - In this mode, the device executes a preset week programming temperature time and temperature. HOLIDAY MODE ⛱ - In this mode, for example, the vacation mode is set for 10 days and the temperature is setto 15 degrees Celsius. After 10 days, the device will automatically switch to programming mode. TEMPORARY MANUAL MODE - In this mode, ☝ icon will flash. At this time, the device executes the manually set temperature and returns to the weekly programming mode in the next time period. . To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `programming`, `manual`, `temporary_manual`, `holiday`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"preset": ""}`.

### Programming_mode (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"undefined": {"program_weekday": VALUE, "program_saturday": VALUE, "program_sunday": VALUE}}`
- `program_weekday` (text): undefined. 
- `program_saturday` (text): undefined. 
- `program_sunday` (text): undefined. 

### Boost_heating (binary)
Boost Heating: press and hold "+" for 3 seconds, the device will enter the boost heating mode, and the ▷╵◁ will flash. The countdown will be displayed in the APP.
Value can be found in the published state on the `boost_heating` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_heating": NEW_VALUE}`.
If value equals `ON` boost_heating is ON, if `OFF` OFF.

### Boost_heating_countdown (numeric)
Countdown in minutes.
Value can be found in the published state on the `boost_heating_countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_heating_countdown": NEW_VALUE}`.
The unit of this value is `min`.

### Boost_heating_countdown_time_set (numeric)
Boost Time Setting 100 sec - 900 sec, (default = 300 sec).
Value can be found in the published state on the `boost_heating_countdown_time_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_heating_countdown_time_set": NEW_VALUE}`.
The unit of this value is `second`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.battery }}"
    unit_of_measurement: "%"
    device_class: "battery"
    state_class: "measurement"

lock:
  - platform: "mqtt"
    state_topic: true
    availability_topic: "zigbee2mqtt/bridge/state"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    value_template: "{{ value_json.child_lock }}"
    payload_lock: "LOCK"
    payload_unlock: "UNLOCK"
    state_locked: "LOCK"
    state_unlocked: "UNLOCK"
    command_topic_postfix: "child_lock"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.eco_mode }}"
    payload_on: "ON"
    payload_off: "OFF"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    command_topic_postfix: "eco_mode"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.eco_temperature }}"
    unit_of_measurement: "°C"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.max_temperature }}"
    unit_of_measurement: "°C"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.min_temperature }}"
    unit_of_measurement: "°C"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.position }}"
    unit_of_measurement: "%"
    icon: "mdi:valve"
    state_class: "measurement"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.window_detection }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    command_topic_postfix: "window_detection"
    state_off: "OFF"
    state_on: "ON"
    icon: "mdi:window-open-variant"

binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.window }}"
    payload_on: "CLOSED"
    payload_off: "OPEN"

climate:
  - platform: "mqtt"
    availability_topic: "zigbee2mqtt/bridge/state"
    temperature_unit: "C"
    temp_step: 0.5
    min_temp: "5"
    max_temp: "35"
    current_temperature_topic: true
    current_temperature_template: "{{ value_json.local_temperature }}"
    temperature_command_topic: "current_heating_setpoint"
    temperature_state_template: "{{ value_json.current_heating_setpoint }}"
    temperature_state_topic: true
    hold_modes: 
      - "programming"
      - "manual"
      - "temporary_manual"
      - "holiday"
    hold_command_topic: true
    hold_state_template: "{{ value_json.preset }}"
    hold_state_topic: true

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.boost_heating }}"
    payload_on: "ON"
    payload_off: "OFF"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    command_topic_postfix: "boost_heating"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.boost_heating_countdown }}"
    unit_of_measurement: "min"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.boost_heating_countdown_time_set }}"
    unit_of_measurement: "second"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.linkquality }}"
    unit_of_measurement: "lqi"
    enabled_by_default: false
    icon: "mdi:signal"
    state_class: "measurement"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:update"
    value_template: "{{ value_json['update']['state'] }}"
    enabled_by_default: false

binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_on: true
    payload_off: false
    value_template: "{{ value_json.update_available}}"
    enabled_by_default: false
```
{% endraw %}


