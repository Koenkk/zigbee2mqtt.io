---
title: "Hive SLR2b control via MQTT"
description: "Integrate your Hive SLR2b via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/SLR2b.md)*

# Hive SLR2b

| Model | SLR2b  |
| Vendor  | Hive  |
| Description | Dual channel heating and hot water thermostat |
| Exposes | climate (occupied_heating_setpoint, local_temperature, system_mode, running_state), temperature_setpoint_hold, temperature_setpoint_hold_duration, linkquality |
| Picture | ![Hive SLR2b](../images/devices/SLR2b.jpg) |

## Notes

None


## Exposes

### Climate (heat endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_heat": VALUE}` where `VALUE` is the °C between `5` and `32`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_heat": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_heat": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_heat": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_heat": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_heat": ""}`.

### Temperature_setpoint_hold (binary, heat endpoint)
Prevent changes. `false` = run normally. `true` = prevent from making changes. Must be set to `false` when system_mode = off or `true` for heat.
Value can be found in the published state on the `temperature_setpoint_hold_heat` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold_heat": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold_heat": NEW_VALUE}`.
If value equals `true` temperature_setpoint_hold is ON, if `false` OFF.

### Temperature_setpoint_hold_duration (numeric, heat endpoint)
Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display.
Value can be found in the published state on the `temperature_setpoint_hold_duration_heat` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold_duration_heat": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold_duration_heat": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.

### Climate (water endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_water": VALUE}` where `VALUE` is the °C between `22` and `22`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_water": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_water": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_water": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_water": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_water": ""}`.

### Temperature_setpoint_hold (binary, water endpoint)
Prevent changes. `false` = run normally. `true` = prevent from making changes. Must be set to `false` when system_mode = off or `true` for heat.
Value can be found in the published state on the `temperature_setpoint_hold_water` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold_water": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold_water": NEW_VALUE}`.
If value equals `true` temperature_setpoint_hold is ON, if `false` OFF.

### Temperature_setpoint_hold_duration (numeric, water endpoint)
Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display.
Value can be found in the published state on the `temperature_setpoint_hold_duration_water` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold_duration_water": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold_duration_water": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.

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
climate:
  - platform: "mqtt"
    availability_topic: "zigbee2mqtt/bridge/state"
    temperature_unit: "C"
    temp_step: 0.5
    min_temp: "5"
    max_temp: "32"
    current_temperature_topic: true
    current_temperature_template: "{{ value_json.local_temperature_heat }}"
    mode_state_topic: true
    mode_state_template: "{{ value_json.system_mode_heat }}"
    modes: 
      - "off"
      - "auto"
      - "heat"
    mode_command_topic: true
    action_topic: true
    action_template: "{% set values = {'idle':'off','heat':'heating','cool':'cooling','fan only':'fan'} %}{{ values[value_json.running_state_heat] }}"
    temperature_command_topic: "occupied_heating_setpoint"
    temperature_state_template: "{{ value_json.occupied_heating_setpoint_heat }}"
    temperature_state_topic: true

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{% if value_json.temperature_setpoint_hold_heat %} true {% else %} false {% endif %}"
    payload_on: "true"
    payload_off: "false"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/heat/set"
    command_topic_postfix: "temperature_setpoint_hold_heat"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.temperature_setpoint_hold_duration_heat }}"

climate:
  - platform: "mqtt"
    availability_topic: "zigbee2mqtt/bridge/state"
    temperature_unit: "C"
    temp_step: 1
    min_temp: "22"
    max_temp: "22"
    current_temperature_topic: true
    current_temperature_template: "{{ value_json.local_temperature_water }}"
    mode_state_topic: true
    mode_state_template: "{{ value_json.system_mode_water }}"
    modes: 
      - "off"
      - "auto"
      - "heat"
    mode_command_topic: true
    action_topic: true
    action_template: "{% set values = {'idle':'off','heat':'heating','cool':'cooling','fan only':'fan'} %}{{ values[value_json.running_state_water] }}"
    temperature_command_topic: "occupied_heating_setpoint"
    temperature_state_template: "{{ value_json.occupied_heating_setpoint_water }}"
    temperature_state_topic: true

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{% if value_json.temperature_setpoint_hold_water %} true {% else %} false {% endif %}"
    payload_on: "true"
    payload_off: "false"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/water/set"
    command_topic_postfix: "temperature_setpoint_hold_water"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.temperature_setpoint_hold_duration_water }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.linkquality }}"
    unit_of_measurement: "lqi"
    enabled_by_default: false
    icon: "mdi:signal"
    state_class: "measurement"
```
{% endraw %}


