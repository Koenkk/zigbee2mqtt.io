---
title: "TuYa HY08WE control via MQTT"
description: "Integrate your TuYa HY08WE via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/HY08WE.md)*

# TuYa HY08WE

| Model | HY08WE  |
| Vendor  | TuYa  |
| Description | Wall-mount thermostat |
| Supports | thermostat, temperature |
| Picture | ![TuYa HY08WE](../images/devices/HY08WE.jpg) |

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
    temperature_state_template: "{{ value_json.current_heating_setpoint }}"
    temperature_command_topic: "current_heating_setpoint"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


