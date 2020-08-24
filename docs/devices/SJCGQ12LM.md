---
title: "Xiaomi SJCGQ12LM control via MQTT"
description: "Integrate your Xiaomi SJCGQ12LM via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/SJCGQ12LM.md)*

# Xiaomi SJCGQ12LM

| Model | SJCGQ12LM  |
| Vendor  | Xiaomi  |
| Description | Aqara water leak sensor |
| Supports | water leak true/false |
| Picture | ![Xiaomi SJCGQ12LM](../images/devices/SJCGQ12LM.jpg) |

## Notes


### Pairing
Press and hold water logo on the device for +- 10 seconds until the blue light blinks
three times, release the water logo (the blue light will blink once more) and wait.
    

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "%"
    device_class: "battery"
    value_template: "{{ value_json.battery }}"

binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_on: true
    payload_off: false
    value_template: "{{ value_json.water_leak }}"
    device_class: "moisture"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


