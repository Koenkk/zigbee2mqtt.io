---
title: "TERNCY TERNCY-DC01 control via MQTT"
description: "Integrate your TERNCY TERNCY-DC01 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/TERNCY-DC01.md)*

# TERNCY TERNCY-DC01

| Model | TERNCY-DC01  |
| Vendor  | TERNCY  |
<<<<<<< HEAD
| Description | Contact & Temperature Sensor |
| Supports | contact sensor, temperature sensor |
=======
| Description | Temperature & contact sensor  |
| Supports | temperature, contact |
>>>>>>> upstream/develop
| Picture | ![TERNCY TERNCY-DC01](../images/devices/TERNCY-DC01.jpg) |

## Notes

<<<<<<< HEAD
None
=======
>>>>>>> upstream/develop

### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the green light starts blinking).
After this the device will automatically join.

<<<<<<< HEAD
## Manual Home Assistant configuration
I am not familiar with Home Assistant. I suggest you have a look at the Home Assistant configuration of other devices.

=======

### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `temperature_precision`: Controls the precision of `temperature` values,
e.g. `0`, `1` or `2`; default `2`.
To control the precision based on the temperature value set it to e.g. `{30: 0, 10: 1}`,
when temperature >= 30 precision will be 0, when temperature >= 10 precision will be 1.
* `temperature_calibration`: Allows to manually calibrate temperature values,
e.g. `1` would add 1 degree to the temperature reported by the device; default `0`.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "°C"
    device_class: "temperature"
    value_template: "{{ value_json.temperature }}"

binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_on: false
    payload_off: true
    value_template: "{{ value_json.contact }}"
    device_class: "door"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}
>>>>>>> upstream/develop


