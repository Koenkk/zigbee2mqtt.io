---
title: "TuYa TYZS1L control via MQTT"
description: "Integrate your TuYa TYZS1L via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/TYZS1L.md)*

# TuYa TYZS1L

| Model | TYZS1L  |
| Vendor  | TuYa  |
| Description | Led strip controller HSB |
| Supports | on/off, color (hue/saturation) |
| Picture | ![TuYa TYZS1L](../images/devices/TYZS1L.jpg) |

## Notes


### Limitations
This device has various limitations:
- Changing brightness is not supported
- On/off and color transition is not supported
- Color can only be set via hue/saturation, example payload `{"color":{"h": 360, "s": 100}}`.



## Exposes
### Light 
TODO

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
light:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    brightness: false
    color_temp: false
    xy: false
    hs: true
    schema: "json"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    brightness_scale: 254

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
    icon: "mdi:signal"
```
{% endraw %}


