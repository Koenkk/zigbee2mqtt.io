---
title: "OpenLumi GWRJN5169 control via MQTT"
description: "Integrate your OpenLumi GWRJN5169 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/GWRJN5169.md)*

# OpenLumi GWRJN5169

| Model | GWRJN5169  |
| Vendor  | OpenLumi  |
| Description | [Lumi Router (JN5169)](https://github.com/igo-r/Lumi-Router-JN5169) |
| Exposes | device_temperature, linkquality |
| Picture | ![OpenLumi GWRJN5169](../images/devices/GWRJN5169.jpg) |

## Notes


### Firmware
Zigbee Router for __Xiaomi DGNWG05LM__ and __Aqara ZHWG11LM__ gateways.

Open source firmware can be found here: [Github](https://github.com/igo-r/Lumi-Router-JN5169)



## Exposes

### Device_temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.device_temperature }}"
    unit_of_measurement: "°C"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.linkquality }}"
    unit_of_measurement: "lqi"
    enabled_by_default: false
    icon: "mdi:signal"
    state_class: "measurement"
```
{% endraw %}


