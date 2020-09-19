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


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
climate:
  - platform: "mqtt"
    availability_topic: "zigbee2mqtt/bridge/state"
    temperature_unit: "C"
    min_temp: "5"
    max_temp: "30"
    mode_state_topic: true
    mode_state_template: "{{ value_json.system_mode }}"
    mode_command_topic: true
    current_temperature_topic: true
    current_temperature_template: "{{ value_json.local_temperature }}"
    temp_step: 0.5
    action_topic: true
    action_template: "{% set values = {'idle':'off','heat':'heating','cool':'cooling','fan only':'fan'} %}{{ values[value_json.running_state] }}"
    modes: 
      - "off"
      - "auto"
      - "heat"
    temperature_state_topic: true
    temperature_state_template: "{{ value_json.occupied_heating_setpoint }}"
    temperature_command_topic: "occupied_heating_setpoint"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "°C"
    device_class: "temperature"
    value_template: "{{ value_json.local_temperature }}"

lock:
  - platform: "mqtt"
    state_topic: true
    availability_topic: "zigbee2mqtt/bridge/state"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    command_topic_postfix: "keypad_lockout"
    payload_unlock: "0"
    payload_lock: "1"
    value_template: "{{ value_json.keypad_lockout }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


