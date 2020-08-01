---
title: "Sengled E1E-G7F control via MQTT"
description: "Integrate your Sengled E1E-G7F via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/E1E-G7F.md)*

# Sengled E1E-G7F

| Model | E1E-G7F  |
| Vendor  | Sengled  |
| Description | Smart switch  |
| Supports | action |
| Picture | ![Sengled E1E-G7F](../images/devices/E1E-G7F.jpg) |

## Notes


### Pairing
Factory reset the switch by pressing and holding the on and off buttons at the same time for at least 33 seconds. The indicator will start flashing, indicating a successul reset. The device will enter pairing mode for one minute. If the device is not connected in one minute, you must restart the pairing process.


### Long press action
The device will sometimes output a single push in addition to a long press. You can mitigate this by using the Debounce device configuration. Refer to *[How to use device type specific configuration](../information/configuration.md)*.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:gesture-double-tap"
    value_template: "{{ value_json.action }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


