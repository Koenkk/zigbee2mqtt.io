---
title: "Xiaomi WXKG01LM control via MQTT"
description: "Integrate your Xiaomi WXKG01LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/WXKG01LM.md)*

# Xiaomi WXKG01LM

| Model | WXKG01LM  |
| Vendor  | Xiaomi  |
| Description | MiJia wireless switch |
| Supports | single, double, triple, quadruple, many, long, long_release click |
| Picture | ![Xiaomi WXKG01LM](../images/devices/WXKG01LM.jpg) |

## Notes


### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).

**IMPORTANT**: Release and start pressing the reset button every second.
This keeps the device awake, otherwise pairing will **fail!**.

*NOTE: When you fail to pair a device, try replacing the battery, this could solve the problem.*


### Device type specific configuration
*[How to use device type specific configuration](../configuration/device_specific_configuration.md)*

* `long_timeout`: The WXKG01LM only reports a button press and release.
By default, Zigbee2mqtt publishes a long click when there is at
least 1000 ms between both events. It could be that due to
delays in the network the release message is received late. This causes a single
click to be identified as a long click. If you are experiencing this you can try
experimenting with this option (e.g. `long_timeout: 2000`).


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possbile with the following configuration:


{% raw %}
```yaml
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
    unit_of_measurement: "%"
    device_class: "battery"
    value_template: "{{ value_json.battery }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


