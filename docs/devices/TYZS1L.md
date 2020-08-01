---
title: "TuYa TYZS1L control via MQTT"
description: "Integrate your TuYa TYZS1L via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/TYZS1L.md)*

# TuYa TYZS1L

| Model | TYZS1L  |
| Vendor  | TuYa  |
| Description | Zigbee LED Strip controller HSB |
| Supports | on/off, color hs |
| Picture | ![TuYa TYZS1L](../images/devices/TYZS1L.jpg) |

## Notes

### Limitations
This device has various limitations:
- Changing brightness is not supported
- On/off and color transition is not supported
- Color can only be set via hue/saturation, example payload `{"hue": 360, "saturation": 100}`.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
light:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    brightness: true
    color_temp: true
    xy: true
    schema: "json"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    brightness_scale: 254

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


