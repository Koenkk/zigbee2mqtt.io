---
title: "Dawon DNS PM-S140-ZB control via MQTT"
description: "Integrate your Dawon DNS PM-S140-ZB via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/PM-S140-ZB.md)*

# Dawon DNS PM-S140-ZB

| Model | PM-S140-ZB  |
| Vendor  | Dawon DNS  |
| Description | IOT smart switch 1 gang without neutral wire |
| Supports | on/off |
| Picture | ![Dawon DNS PM-S140-ZB](../images/devices/PM-S140-ZB.jpg) |

## Notes


### Routing functionallity
This device does **not** act as a router.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


