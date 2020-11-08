---
title: "Sercomm SZ-ESW01-AU control via MQTT"
description: "Integrate your Sercomm SZ-ESW01-AU via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/SZ-ESW01-AU.md)*

# Sercomm SZ-ESW01-AU

| Model | SZ-ESW01-AU  |
| Vendor  | Sercomm  |
| Description | Telstra smart plug |
| Supports | on/off, power consumption |
| Picture | ![Sercomm SZ-ESW01-AU](../images/devices/SZ-ESW01-AU.jpg) |

## Notes


### Pairing
With the device upplugged (or socket switched off), press and hold the pairing button for ~4 seconds. Continue holding the pairing button while plugging in the device (or switching the socket on) and continue to hold for 2 seconds. If pairing is successful the red LED will switch off for ~2 seconds, then flash.


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
    unit_of_measurement: "W"
    value_template: "{{ value_json.power }}"
    icon: "mdi:flash"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
    icon: "mdi:signal"
```
{% endraw %}


