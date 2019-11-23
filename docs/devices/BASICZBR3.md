---
title: "ITEAD BASICZBR3 control via MQTT"
description: "Integrate your ITEAD BASICZBR3 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/BASICZBR3.md)*

# ITEAD BASICZBR3

| Model | BASICZBR3  |
| Vendor  | ITEAD  |
| Description | SONOFF ZigBee DIY Smart Switch |
| Supports | on/off |
| Picture | ![ITEAD BASICZBR3](../images/devices/BASICZBR3.jpg) |

## Notes


### Pairing
If brand new, when powered on it will attempt to pair to Zigbee2mqtt automatically. If not (or if has been paired before and needs to be re-paired) - press and hold the (relay) button on the top for about 5 seconds until the relay cliks and the red LED flashes several times. The device will then go into pairing mode and the blue LED will begin to flash. When connected, the blue LED will turn on solid. It should then be connected to Zigbee2mqtt. Pressing the button should activate the relay on/off as normal, and the red LED will be on/off.


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


