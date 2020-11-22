---
title: "Stelpro STZB402 control via MQTT"
description: "Integrate your Stelpro STZB402 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/STZB402.md)*

# Stelpro STZB402

| Model | STZB402  |
| Vendor  | Stelpro  |
| Description | Ki, line-voltage thermostat |
| Supports | temperature |
| Picture | ![Stelpro STZB402](../images/devices/STZB402.jpg) |

## Notes


### Setting outdoor temperature
To set _outdoor temperature_, you need to send the value to the following MQTT topic:
```
zigbee2mqtt/<FRIENDLY_NAME>/set/thermostat_outdoor_temperature
```

If you want to automate the publishing of the outdoor temperature using Home Assistant, you may create an automation like this:

``` yaml
- id: auto_publish_outdoor_temp
  description: publish the outdoor temperature to Stelpro thermostat
  trigger:
    - platform: state
      entity_id: sensor.outdoor_sensor_temperature
      condition: []
  action:
    - service: mqtt.publish
      data_template:
      payload: '{{ states(trigger.entity_id) }}'
      topic: 'zigbee2mqtt/THERMOSTAT_FRIENDLY_NAME/set/thermostat_outdoor_temperature'
```

**IMPORTANT**: The outdoor temperature need to be refreshed at least each 4 hours, or the `EXT` display will be cleared on the thermostat.



## Exposes
### Local_temperature (numeric)
Current temperature measured on the device.
Value can be found in the published state on the `local_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Lock 
The current state of this lock is in the published state under the `keypad_lockout` property (value is `1` or `0`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"keypad_lockout": "1"}` or `{"keypad_lockout": "0"}`.
To read the current state of this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"keypad_lockout": ""}`.

### Climate 
TODO

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimimal value is `0` and the maximum value is `255`.
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
    unit_of_measurement: "°C"
    value_template: "{{ value_json.local_temperature }}"
    device_class: "temperature"

lock:
  - platform: "mqtt"
    state_topic: true
    availability_topic: "zigbee2mqtt/bridge/state"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    value_template: "{{ value_json.keypad_lockout }}"
    payload_lock: "1"
    payload_unlock: "0"
    command_topic_postfix: "keypad_lockout"

climate:
  - platform: "mqtt"
    availability_topic: "zigbee2mqtt/bridge/state"
    temperature_unit: "C"
    temp_step: 0.5
    min_temp: "5"
    max_temp: "30"
    current_temperature_topic: true
    current_temperature_template: "{{ value_json.local_temperature }}"
    mode_state_topic: true
    mode_state_template: "{{ value_json.system_mode }}"
    modes: 
      - "off"
      - "auto"
      - "heat"
    mode_command_topic: true
    action_topic: true
    action_template: "{% set values = {'idle':'off','heat':'heating','cool':'cooling','fan only':'fan'} %}{{ values[value_json.running_state] }}"
    temperature_command_topic: "occupied_heating_setpoint"
    temperature_state_template: "{{ value_json.occupied_heating_setpoint }}"
    temperature_state_topic: true

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
    icon: "mdi:signal"
```
{% endraw %}


