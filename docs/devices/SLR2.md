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
| Exposes | climate (occupied_heating_setpoint, local_temperature, system_mode, running_state, pi_heating_demand), linkquality |
| Picture | ![Hive SLR2](../images/devices/SLR2.jpg) |

## Notes

## Pairing 

Instructions updated/adapted from https://github.com/roadsnail/Hive-SLR2-SLT2-Zigbee2MQTT-with-node-RED

1. Switch off the Hive bridge (the white box connected to your home network / router).  The bridge is no longer required.
2. Remove a battery from the thermostat (SLT2 or SLT3).
3. Enable Zigbee2MQTT to accept new devices.
4. On the heating controller SLR2, press and hold 'Central Heating' button for ~10 seconds until it flashes pink. Release then press and hold it again for another ~10 seconds. It will flash amber and the controller should join the Zigbee2MQTT network relatively quickly (10-15 seconds).
5. With Zigbee2MQTT still in pairing mode, and the SLR2 still flashing Amber, replace the batteries in the thermostat (SLT2 or SLT3) while pressing 'back' and 'menu' buttons on the SLT3 OR the '+' and '-' buttons on the SLT2 to perform a reset - keep holding the buttons until the 10 second reset countdown completes. It will, reset, reboot and join the network - the thermostat will indicate "Searching..." and may take several minutes to finish - typically pairing with Zigbee2MQTT takes ~10-15 seconds, but the whole process may take 5 minutes to complete until the thermostat fully connects to the SLR2 and enters "Welcome" mode.


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*

* `legacy`: Set to `false` to disable the legacy integration (highly recommended!) (default: true)



## Exposes

### Climate (heat endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`, `pi_heating_demand`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/heat/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `7` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/heat/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). Read-only. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/heat/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/heat/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/heat/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Read-only. Possible states are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/heat/get` with payload `{"running_state": ""}`.

### Climate (water endpoint)
This climate device supports the following features: `temperature_setpoint_hold`, `temperature_setpoint_hold_duration`, `system_mode`, `running_state`, `pi_heating_demand`.
- `temperature_setpoint_hold`: Used to hold (`false`) or release (`true`) the hotwater relay. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/water/set` with payload `{temperature_setpoint_hold": VALUE}` where `VALUE` is `true` or  `false`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/water/get` with payload `{"temperature_setpoint_hold": ""}`.
- `temperature_setpoint_hold_duration`: Temperature setpoint hold duration (emergency_heating only) - used to determine how long the emergency heating period isrelay. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/water/set` with payload `{temperature_setpoint_hold_duration": VALUE}` where `VALUE` is number of minutes. There is no read command for this value (i.e. write-only).
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/water/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`,`emergency_heating` . To read send a message to `zigbee2mqtt/FRIENDLY_NAME/water/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Read-only. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/water/get` with payload `{"running_state": ""}`.

To switch water ON send the following messages / payloads:
- `'zigbee2mqtt/FRIENDLY_NAME/water/set' / '{"system_mode": "heat"}'`
- `'zigbee2mqtt/FRIENDLY_NAME/water/get' / '{"system_mode": ""}'`
- `'zigbee2mqtt/FRIENDLY_NAME/water/set' / '{"temperature_setpoint_hold": true}'`

To BOOST water for DURATION minutes send the following messages / payloads (note: the boost time remaining shows up on the SLT3 display):
- `'zigbee2mqtt/FRIENDLY_NAME/water/set' / '{"system_mode": "emergency_heating"}'`
- `'zigbee2mqtt/FRIENDLY_NAME/water/set' / '{"temperature_setpoint_hold_duration": DURATION}'`
- `'zigbee2mqtt/FRIENDLY_NAME/water/get' / '{"system_mode": ""}'`
- `'zigbee2mqtt/FRIENDLY_NAME/water/set' / '{"temperature_setpoint_hold": true}'`

To switch water OFF send the following messages / payloads:
- `'zigbee2mqtt/FRIENDLY_NAME/water/set' / '{"system_mode": "off"}'`
- `'zigbee2mqtt/FRIENDLY_NAME/water/get' / '{"system_mode": ""}'`
- `'zigbee2mqtt/FRIENDLY_NAME/water/set' / '{"temperature_setpoint_hold": false}'`

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
    temp_step: 1
    min_temp: "7"
    max_temp: "30"
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
    state_topic_postfix: "heat"

climate:
  - platform: "mqtt"
    availability_topic: "zigbee2mqtt/bridge/state"
    temperature_unit: "C"
    temp_step: 1
    min_temp: "7"
    max_temp: "30"
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
    state_topic_postfix: "water"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.linkquality }}"
    unit_of_measurement: "lqi"
    icon: "mdi:signal"
```
{% endraw %}


