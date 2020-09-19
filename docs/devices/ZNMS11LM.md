---
title: "Xiaomi ZNMS11LM control via MQTT"
description: "Integrate your Xiaomi ZNMS11LM via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ZNMS11LM.md)*

# Xiaomi ZNMS11LM

| Model | ZNMS11LM  |
| Vendor  | Xiaomi  |
| Description | Xiaomi Aqara smart lock |
| Supports | open, close, operation (reporting only) |
| Picture | ![Xiaomi ZNMS11LM](../images/devices/ZNMS11LM.jpg) |

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
    icon: "mdi:gesture-double-tap"
    value_template: "{{ value_json.action }}"

binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_on: "UNLOCK"
    payload_off: "LOCK"
    value_template: "{{ value_json.state}}"
    device_class: "lock"

binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_on: "UNLOCK"
    payload_off: "LOCK"
    value_template: "{{ value_json.reverse}}"
    device_class: "lock"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


