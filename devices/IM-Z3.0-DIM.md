---
title: "Immax IM-Z3.0-DIM control via MQTT"
description: "Integrate your Immax IM-Z3.0-DIM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docgen/device_page_notes.js)*

# Immax IM-Z3.0-DIM

| Model | IM-Z3.0-DIM  |
| Vendor  | Immax  |
| Description | LED E14/230V C35 5W TB 440LM ZIGBEE DIM |
| Supports | on/off, brightness |
| Picture | ![../images/devices/IM-Z3.0-DIM.jpg](../images/devices/IM-Z3.0-DIM.jpg) |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possbile with the following configuration:


### IM-Z3.0-DIM
{% raw %}
```yaml
light:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    brightness: true
    schema: "json"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


