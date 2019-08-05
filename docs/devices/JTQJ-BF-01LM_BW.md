---
title: "Xiaomi JTQJ-BF-01LM/BW control via MQTT"
description: "Integrate your Xiaomi JTQJ-BF-01LM/BW via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/JTQJ-BF-01LM/BW.md)*

# Xiaomi JTQJ-BF-01LM/BW

| Model | JTQJ-BF-01LM/BW  |
| Vendor  | Xiaomi  |
| Description | MiJia gas leak detector  |
| Supports | gas |
| Picture | ![Xiaomi JTQJ-BF-01LM/BW](../images/devices/JTQJ-BF-01LM-BW.jpg) |

## Notes


### Pairing
Press and hold reset button on the device for +- 5 seconds until the
blue light blinks three times, release the reset button (the blue light will blink once more) and wait.

*NOTE: When you fail to pair a device, try replacing the battery, this could solve the problem.*


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possbile with the following configuration:


{% raw %}
```yaml
binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_on: true
    payload_off: false
    value_template: "{{ value_json.gas }}"
    device_class: "gas"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.gas_density }}"
    icon: "mdi:google-circles-communities"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


