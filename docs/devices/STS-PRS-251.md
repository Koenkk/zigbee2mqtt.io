---
title: "SmartThings STS-PRS-251 control via MQTT"
description: "Integrate your SmartThings STS-PRS-251 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/STS-PRS-251.md)*

# SmartThings STS-PRS-251

| Model | STS-PRS-251  |
| Vendor  | SmartThings  |
| Description | Arrival sensor |
| Supports | presence |
| Picture | ![SmartThings STS-PRS-251](../images/devices/STS-PRS-251.jpg) |

## Notes


### Let the device beep.
```json
{
    "beep": 5
}
```

### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*

* `presence_timeout`: Timeout (in seconds) after which `presence: false` will be send when the device has not checked-in. By default 100 seconds, don't go lower then 30 seconds.


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
    value_template: "{{ value_json.presence }}"
    device_class: "presence"

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


