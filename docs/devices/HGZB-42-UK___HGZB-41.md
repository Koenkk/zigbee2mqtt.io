---
title: "Nue / 3A HGZB-42-UK / HGZB-41 control via MQTT"
description: "Integrate your Nue / 3A HGZB-42-UK / HGZB-41 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/HGZB-42-UK / HGZB-41.md)*

# Nue / 3A HGZB-42-UK / HGZB-41

| Model | HGZB-42-UK / HGZB-41  |
| Vendor  | Nue / 3A  |
| Description | Smart switch 1 or 2 gang |
| Supports | on/off |
| Picture | ![Nue / 3A HGZB-42-UK / HGZB-41](../images/devices/HGZB-42-UK---HGZB-41.jpg) |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possbile with the following configuration:


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
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


