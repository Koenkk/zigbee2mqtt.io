---
title: "Climax RS-23ZBS control via MQTT"
description: "Integrate your Climax RS-23ZBS via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/RS-23ZBS.md)*

# Climax RSS-23ZBS

| Model | RSS-23ZBS  |
| Vendor  | Climax  |
| Description | Temperature and humidity sensor |
| Supports | Temperature |
| Picture | ![Climax RS-23ZBS](../images/devices/RS-23ZBS.jpg) |
| Webpage | [Climax RS-23ZBS webpage](https://www.climax.com.tw/new/rs23zb.php) |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:thermometer"
    device_class: "temperature"
    unit_of_measurement: "°C" # "°F" if Fahrenheit configuration is in place.
    value_template: "{{ value_json.temperature }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
```
{% endraw %}


