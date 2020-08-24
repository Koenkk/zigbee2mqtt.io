---
title: "Xiaomi JTYJ-GD-01LM/BW control via MQTT"
description: "Integrate your Xiaomi JTYJ-GD-01LM/BW via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/JTYJ-GD-01LM_BW.md)*

# Xiaomi JTYJ-GD-01LM/BW

| Model | JTYJ-GD-01LM/BW  |
| Vendor  | Xiaomi  |
| Description | MiJia Honeywell smoke detector |
| Supports | smoke |
| Picture | ![Xiaomi JTYJ-GD-01LM/BW](../images/devices/JTYJ-GD-01LM-BW.jpg) |

## Notes


### Pairing
Plug the device in and wait for around 5mins, while it performs its self-tests.
A successful self-test is indicated by couple of beeps and a steady green led.
Now the device is ready for pairing. To initiate pairing quickly press the button three times in a row.


### Sensitivity
The sensitivity can be changed by publishing to `zigbee2mqtt/[FRIENDLY_NAME]/set`
`{"sensitivity": "SENSITIVITY"}` where `SENSITIVITY` is one of the following
values: `low`, `medium`,  `high`.

### Self-test
A self-test can be trigged by publishing to `zigbee2mqtt/[FRIENDLY_NAME]/set`
`{"selftest": ""}`.
If the selftest is executed successfully you will hear the device beep in 30 seconds.


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
    value_template: "{{ value_json.smoke }}"
    device_class: "smoke"

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
    value_template: "{{ value_json.sensitivity }}"
    icon: "mdi:filter-variant"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.smoke_density }}"
    icon: "mdi:google-circles-communities"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


