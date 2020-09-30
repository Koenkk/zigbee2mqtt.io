---
title: "TuYa TS0601_thermostat control via MQTT"
description: "Integrate your TuYa TS0601_thermostat via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/TS0601_thermostat.md)*

# TuYa TS0601_thermostat

| Model | TS0601_thermostat  |
| Vendor  | TuYa  |
| Description | Radiator valve with thermostat |
| Supports | thermostat, temperature |
| Picture | ![TuYa TS0601_thermostat](../images/devices/TS0601_thermostat.jpg) |
| White-label | Moes HY369RT, SHOJZJ 378RT |

## Notes


### Pairing

While pairing, keep the valve close to the coordinator.

1. *Turn the display on*: Short press home (:house:).
2. *Enter settings*: Long press home (:house:) for 3sec.
3. *Select WiFi settings*: Press the plus button (:heavy_plus_sign:) button 4 times to see the digital **`5`** on the right hand side and the blinking WiFi logo.
4. *Enter WiFi settings*: Press home (:house:) once again. Now only WiFi logo is showing without blinking.
5. *Enable pairing mode*: Long press home (:house:). WiFi logo is now blinking.
6. *Keep display on*: Touch home (:house:) every few seconds.

### Local temperature
If you'd like to force device to send local_temperature you can use this mqtt command:
* `topic`: zigbee2mqtt/FRIENDLY_NAME/set/local_temperature_calibration
* `payload`: YOUR_CURRENT_CALIBRATION_VALUE

YOUR_CURRENT_CALIBRATION_VALUE can be 0, but if you calibrated temperature for this device send current value.
After this command thermostat responds with two messages. One for calibration change confirmation, and other with current local_temperature.


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

switch:
  - platform: "mqtt"
    state_topic: true
    availability_topic: "zigbee2mqtt/bridge/state"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    command_topic_postfix: "window_detection"
    payload_off: "OFF"
    payload_on: "ON"
    state_off: "OFF"
    state_on: "ON"
    value_template: "{{ value_json.window_detection }}"
    icon: "mdi:window-open-variant"

switch:
  - platform: "mqtt"
    state_topic: true
    availability_topic: "zigbee2mqtt/bridge/state"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    command_topic_postfix: "valve_detection"
    payload_off: "OFF"
    payload_on: "ON"
    state_off: "OFF"
    state_on: "ON"
    value_template: "{{ value_json.valve_detection }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "%"
    device_class: "battery"
    value_template: "{{ value_json.battery }}"

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
      - "auto"
    hold_modes: 
      - "schedule"
      - "manual"
      - "away"
      - "boost"
      - "complex"
      - "comfort"
      - "eco"
    hold_command_topic: true
    hold_state_template: "{{ value_json.preset }}"
    hold_state_topic: true
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


