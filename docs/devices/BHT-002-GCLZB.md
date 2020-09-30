---
title: "Moes BHT-002-GCLZB control via MQTT"
description: "Integrate your Moes BHT-002-GCLZB via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/BHT-002-GCLZB.md)*

# Moes BHT-002-GCLZB

| Model | BHT-002-GCLZB  |
| Vendor  | Moes  |
| Description | Room thermostat water/gas boiler |
| Supports | thermostat, temperature |
| Picture | ![Moes BHT-002-GCLZB](../images/devices/BHT-002-GCLZB.jpg) |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
lock:
  - platform: "mqtt"
    state_topic: true
    availability_topic: "zigbee2mqtt/bridge/state"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    command_topic_postfix: "child_lock"
    payload_lock: "LOCK"
    payload_unlock: "UNLOCK"
    state_locked: "LOCKED"
    state_unlocked: "UNLOCKED"
    value_template: "{{ value_json.child_lock }}"

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
    temp_step: 1
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


