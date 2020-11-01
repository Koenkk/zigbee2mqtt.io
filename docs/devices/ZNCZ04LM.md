---
title: "Xiaomi ZNCZ04LM control via MQTT"
description: "Integrate your Xiaomi ZNCZ04LM via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ZNCZ04LM.md)*

# Xiaomi ZNCZ04LM

| Model | ZNCZ04LM  |
| Vendor  | Xiaomi  |
| Description | Mi power plug ZigBee EU |
| Supports | on/off, power measurement |
| Picture | ![Xiaomi ZNCZ04LM](../images/devices/ZNCZ04LM.jpg) |

## Notes


### Power outage memory
This option allows the device to restore the last on/off state when it's reconnected to power.
To set this option publish to `zigbee2mqtt/[FRIENDLY_NAME]/set` payload `{"power_outage_memory": true}` (or `false`).
Now toggle the plug/switch once with the button on it, from now on it will restore its state when reconnecting to power.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "W"
    value_template: "{{ value_json.power }}"
    icon: "mdi:flash"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "kWh"
    value_template: "{{ value_json.energy }}"
    icon: "mdi:power-plug"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "°C"
    value_template: "{{ value_json.temperature }}"
    device_class: "temperature"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "V"
    value_template: "{{ value_json.voltage }}"
    icon: "mdi:alpha-v"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "A"
    value_template: "{{ value_json.current }}"
    icon: "mdi:current-ac"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
    icon: "mdi:signal"
```
{% endraw %}


