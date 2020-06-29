---
title: "DIYRuZ DIYRuZ_RT control via MQTT"
description: "Integrate your DIYRuZ DIYRuZ_RT via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/DIYRuZ_RT.md)*

# DIYRuZ DIYRuZ_RT

| Model | DIYRuZ_RT  |
| Vendor  | DIYRuZ  |
| Description | [DiY CC2530 Firmware Support Zigbee 3.0](https://habr.com/ru/company/iobroker/blog/495926/) |
| Supports | on/off, temperature|
| Picture | ![DIYRuZ DIYRuZ_RT](../images/devices/BASICZBR3.jpg) |

## Notes

This firmware can be used to flash any CC2530 device to support zigbee 3.0
For example the Sonoff BasicZBR3
Firmware download: https://github.com/diyruz/diyruz_rt
Blog about supporting Zigbee 3.0 to CC2530: https://habr.com/ru/company/iobroker/blog/495926/

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

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "°C"
    device_class: "temperature"
    value_template: "{{ value_json.temperature }}"

```
{% endraw %}
