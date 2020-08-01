---
title: "SONOFF SNZB-03 control via MQTT"
description: "Integrate your SONOFF SNZB-03 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/SNZB-03.md)*

# SONOFF SNZB-03

| Model | SNZB-03  |
| Vendor  | SONOFF  |
| Description | Motion sensor |
| Supports | occupancy |
| Picture | ![SONOFF SNZB-03](../images/devices/SNZB-03.jpg) |
| White-label | eWeLink RHK09 |

## Notes


### Pairing
If brand new, when powered on it will attempt to pair to Zigbee2MQTT automatically. If not (or if has been paired before and needs to be re-paired) - press and hold the  button on the top for about 5 seconds until the light flashes several times. The device will then go into pairing mode  It should then be connected to Zigbee2MQTT. Pressing the button should activate the relay on/off as normal, and the red LED will be on/off.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_on: true
    payload_off: false
    value_template: "{{ value_json.occupancy }}"
    device_class: "motion"

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
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


