---
title: "TUYATEC GDKES-01TZXD control via MQTT"
description: "Integrate your TUYATEC GDKES-01TZXD via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/GDKES-01TZXD.md)*

# TUYATEC GDKES-01TZXD

| Model | GDKES-01TZXD  |
| Vendor  | TUYATEC  |
| Description | Smart light switch - 1 gang without neutral wire |
| Supports | on/off |
| Picture | ![TUYATEC GDKES-01TZXD](../images/devices/GDKES-01TZXD.jpg) |

## Notes

Also branded as Yagusmart in the UK, with a version that does not require a neutral wire.

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


