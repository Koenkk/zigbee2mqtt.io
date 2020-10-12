---
title: "Qmotion QZR-ZIG2400 control via MQTT"
description: "Integrate your Qmotion QZR-ZIG2400 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/QZR-ZIG2400.md)*

# Qmotion QZR-ZIG2400

| Model | QZR-ZIG2400  |
| Vendor  | Qmotion  |
| Description | 5 channel remote |
| Supports | open, close, stop, position |
| Picture | ![Qmotion QZR-ZIG2400](../images/devices/QZR-ZIG2400.jpg) |

## Notes

### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*

* `invert_cover`: By default the position/tilt values mean: open = 100, closed = 0. This can be inverted by setting this option to true (so open = 0, close = 100).


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
```
{% endraw %}


