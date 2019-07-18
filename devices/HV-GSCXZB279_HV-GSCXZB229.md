---
title: "Hive HV-GSCXZB279_HV-GSCXZB229 control via MQTT"
description: "Integrate your Hive HV-GSCXZB279_HV-GSCXZB229 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docgen/device_page_notes.js)*

# Hive HV-GSCXZB279_HV-GSCXZB229

| Model | HV-GSCXZB279_HV-GSCXZB229  |
| Vendor  | Hive  |
| Description | Active light, warm to cool white (E27 & B22) |
| Supports | on/off, brightness, color temperature |
| Picture | ![../images/devices/HV-GSCXZB279_HV-GSCXZB229.jpg](../images/devices/HV-GSCXZB279_HV-GSCXZB229.jpg) |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possbile with the following configuration:


### HV-GSCXZB279_HV-GSCXZB229
{% raw %}
```yaml
light:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    brightness: true
    color_temp: true
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


