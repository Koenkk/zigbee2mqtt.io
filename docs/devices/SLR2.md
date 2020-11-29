---
title: "Hive SLR2 control via MQTT"
description: "Integrate your Hive SLR2 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/SLR2.md)*

# Hive SLR2

| Model | SLR2  |
| Vendor  | Hive  |
| Description | Dual channel heating and hot water thermostat |
| Supports | thermostat, occupied heating, weekly schedule |
| Picture | ![Hive SLR2](../images/devices/SLR2.jpg) |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
climate:
  - platform: "mqtt"
    availability_topic: "zigbee2mqtt/bridge/state"
    temperature_unit: "C"
    min_temp: "7"
    max_temp: "30"
    mode_state_topic: true
    mode_state_template: "{{ value_json.system_mode_heat }}"
    mode_command_topic: true
    current_temperature_topic: true
    current_temperature_template: "{{ value_json.local_temperature_heat }}"
    temp_step: 1
    action_topic: true
    action_template: "{% set values = {'idle':'off','heat':'heating','cool':'cooling','fan only':'fan'} %}{{ values[value_json.running_state_heat] }}"
    state_topic_postfix: "heat"
    modes: 
      - "off"
      - "auto"
      - "heat"
    temperature_state_topic: true
    temperature_state_template: "{{ value_json.occupied_heating_setpoint_heat }}"
    temperature_command_topic: "occupied_heating_setpoint"

climate:
  - platform: "mqtt"
    availability_topic: "zigbee2mqtt/bridge/state"
    temperature_unit: "C"
    min_temp: "7"
    max_temp: "30"
    mode_state_topic: true
    mode_state_template: "{{ value_json.system_mode_cool }}"
    mode_command_topic: true
    current_temperature_topic: true
    current_temperature_template: "{{ value_json.local_temperature_cool }}"
    temp_step: 1
    action_topic: true
    action_template: "{% set values = {'idle':'off','heat':'heating','cool':'cooling','fan only':'fan'} %}{{ values[value_json.running_state_cool] }}"
    state_topic_postfix: "cool"
    modes: 
      - "off"
      - "auto"
      - "heat"
    temperature_state_topic: true
    temperature_state_template: "{{ value_json.occupied_heating_setpoint_cool }}"
    temperature_command_topic: "occupied_heating_setpoint"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


