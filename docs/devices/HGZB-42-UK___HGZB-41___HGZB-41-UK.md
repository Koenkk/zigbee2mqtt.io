---
title: "Nue / 3A HGZB-42-UK / HGZB-41 / HGZB-41-UK control via MQTT"
description: "Integrate your Nue / 3A HGZB-42-UK / HGZB-41 / HGZB-41-UK via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/HGZB-42-UK___HGZB-41___HGZB-41-UK.md)*

# Nue / 3A HGZB-42-UK / HGZB-41 / HGZB-41-UK

| Model | HGZB-42-UK / HGZB-41 / HGZB-41-UK  |
| Vendor  | Nue / 3A  |
| Description | Smart switch 1 or 2 gang |
| Supports | on/off |
| Picture | ![Nue / 3A HGZB-42-UK / HGZB-41 / HGZB-41-UK](../images/devices/HGZB-42-UK---HGZB-41---HGZB-41-UK.jpg) |

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


