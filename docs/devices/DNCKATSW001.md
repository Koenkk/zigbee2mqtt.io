---
title: "Custom devices (DiY) DNCKATSW001 control via MQTT"
description: "Integrate your Custom devices (DiY) DNCKATSW001 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/DNCKATSW001.md)*

# Custom devices (DiY) DNCKATSW001

| Model | DNCKATSW001  |
| Vendor  | Custom devices (DiY)  |
| Description | [DNCKAT single key wired wall light switch](https://github.com/dzungpv/dnckatsw00x/) |
| Supports | on/off |
| Picture | ![Custom devices (DiY) DNCKATSW001](../images/devices/DNCKATSW001.jpg) |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possbile with the following configuration:


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
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


