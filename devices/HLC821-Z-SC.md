---
title: "Shenzhen Homa HLC821-Z-SC control via MQTT"
description: "Integrate your Shenzhen Homa HLC821-Z-SC via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docgen/device_page_notes.js)*

# Shenzhen Homa HLC821-Z-SC

| Model | HLC821-Z-SC  |
| Vendor  | Shenzhen Homa  |
| Description | ZigBee AC phase-cut dimmer |
| Supports | on/off, brightness |
| Picture | ![../images/devices/HLC821-Z-SC.jpg](../images/devices/HLC821-Z-SC.jpg) |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possbile with the following configuration:


### HLC821-Z-SC
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


