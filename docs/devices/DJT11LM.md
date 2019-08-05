---
title: "Xiaomi DJT11LM control via MQTT"
description: "Integrate your Xiaomi DJT11LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docgen/device_page_notes.js)*

# Xiaomi DJT11LM

| Model | DJT11LM  |
| Vendor  | Xiaomi  |
| Description | Aqara vibration sensor |
| Supports | drop, tilt and touch |
| Picture | ![Xiaomi DJT11LM](../images/devices/DJT11LM.jpg) |

## Notes


### Pairing
Press and hold reset button on the device for +- 5 seconds until the
blue light blinks three times, release the reset button (the blue light will blink once more) and wait.
If it does not pair at once, keep pressing the reset button every 1-2 seconds for about
10 times to prevent it from sleeping before it has paired.

*NOTE: When you fail to pair a device, try replacing the battery, this could solve the problem.*


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possbile with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:gesture-double-tap"
    value_template: "{{ value_json.action }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "%"
    device_class: "battery"
    value_template: "{{ value_json.battery }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


