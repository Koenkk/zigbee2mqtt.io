---
title: "Xiaomi ZNLDP12LM control via MQTT"
description: "Integrate your Xiaomi ZNLDP12LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docgen/device_page_notes.js)*

# Xiaomi ZNLDP12LM

| Model | ZNLDP12LM  |
| Vendor  | Xiaomi  |
| Description | Aqara smart LED bulb |
| Supports | on/off, brightness, color temperature |
| Picture | ![Xiaomi ZNLDP12LM](../images/devices/ZNLDP12LM.jpg) |

## Notes


### Pairing
Switch the lamp on five times until the bulb blinks several times.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possbile with the following configuration:


### ZNLDP12LM
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


