---
title: "Sunricher SR-ZG9001K4-DIM2 control via MQTT"
description: "Integrate your Sunricher SR-ZG9001K4-DIM2 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/SR-ZG9001K4-DIM2.md)*

# Sunricher SR-ZG9001K4-DIM2

| Model | SR-ZG9001K4-DIM2  |
| Vendor  | Sunricher  |
| Description | ZigBee double key wall switch |
| Supports | on/off, brightness |
| Picture | ![Sunricher SR-ZG9001K4-DIM2](../images/devices/SR-ZG9001K4-DIM2.jpg) |

## Notes

###Pairing

First reset. Press and hold the upper two buttons for 5 seconds untill led turns blue. Then press the upper "0" 5 times really quickly - practise. Second pair. Press and hold the upper two buttons for 5 seconds again, untill the led turns blue. Then press the "0" once. It should now enter pair mode.

### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


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

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:toggle-switch"
    value_template: "{{ value_json.click }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


