---
title: "Nue / 3A HGZB-41 control via MQTT"
description: "Integrate your Nue / 3A HGZB-41 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/HGZB-41.md)*

# Nue / 3A HGZB-41

| Model | HGZB-41  |
| Vendor  | Nue / 3A  |
| Description | Smart one gang wall switch |
| Supports | on/off |
| Picture | ![Nue / 3A HGZB-41](../images/devices/HGZB-41.jpg) |

## Notes


### Pairing
Reset of device is done by holding button for 20 secs until it starts to flash green. It will now automatically pair.


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
```
{% endraw %}


