---
title: "DL15S-1BZ control via MQTT"
description: "Integrate your Leviton Lumina RF 15A in-wall Switch via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/DL15S-1BZ.md)*

# Lumina RF DL15S-1BZ

| Model | DL15S-1BZ (Lumina RF) |
| Vendor  | Leviton |
| Description | In-wall smart switch |
| Supports | on/off |
| Picture | ![DL15S-1BZ](../images/devices/DL15S-1BZ.jpg) |

## Notes

To pair this device, hold the ON for few seconds until the red light is blinking. After that, simple tap once on the ON again to start the pairing process.

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


