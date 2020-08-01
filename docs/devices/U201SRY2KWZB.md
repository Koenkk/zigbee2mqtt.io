---
title: "Schneider Electric U201SRY2KWZB control via MQTT"
description: "Integrate your Schneider Electric U201SRY2KWZB via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/U201SRY2KWZB.md)*

# Schneider Electric U201SRY2KWZB

| Model | U201SRY2KWZB  |
| Vendor  | Schneider Electric  |
| Description | Ulti 240V 9.1 A 1 gang relay switch impress switch module, amber LED |
| Supports | on/off |
| Picture | ![Schneider Electric U201SRY2KWZB](../images/devices/U201SRY2KWZB.jpg) |

## Notes

None

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
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


