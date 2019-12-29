---
title: "Stelpro STZB402+ (Ki Zigbee) control via MQTT"
description: "Integrate your Stelpro Ki Zigbee STZB402+ via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/STZB402.md)*

# Stelpro STZB402+

| Model | STZB402+  |
| Vendor  | Stelpro  |
| Description | Zigbee line volt thermostat |
| Supports | local temp, keypad lockout, mode, state, outdoor temp |
| Picture | ![Stelpro STZB402+](../images/devices/STZB402.jpg) |

## Notes

To set _outdoor temperature_, you need to send the value to the following MQTT topic:
```
zigbee2mqtt/<FRIENDLY_NAME>/set/thermostat_outdoor_temperature
```

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
climate:
  - platform: "mqtt"
    availability_topic: "zigbee2mqtt/bridge/state"
    action_topic: "operation"
    min_temp: "5"
    max_temp: "30"
    modes: 
      - "off"
      - "auto"
      - "heat"
    mode_state_topic: true
    mode_state_template: "{{ value_json.system_mode }}"
    mode_command_topic: true
    current_temperature_topic: true
    current_temperature_template: "{{ value_json.local_temperature }}"
    temperature_state_topic: true
    temperature_state_template: "{{ value_json.occupied_heating_setpoint }}"
    temperature_command_topic: "occupied_heating_setpoint"
    temp_step: 0.5

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"

lock:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set/keypad_lockout"
    payload_unlock: "0"
    payload_lock: "1"
    value_template: "{{ value_json.keypad_lockout }}"
```
{% endraw %}


