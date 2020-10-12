---
title: "CY-LIGHTING DM A60F control via MQTT"
description: "Integrate your CY-LIGHTING DM A60F via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/DM_A60F.md)*

# CY-LIGHTING DM A60F

| Model | DM A60F  |
| Vendor  | CY-LIGHTING  |
| Description | 6W smart dimmable E27 lamp 2700K |
| Supports | on/off, brightness |
| Picture | ![CY-LIGHTING DM A60F](../images/devices/DM-A60F.jpg) |

## Notes


### Pairing
Factory reset the light bulb by turning the bulb on/off seven times.
After resetting the bulb will go into pairing mode for 20 seconds.

While pairing, keep the bulb close to the adapter.

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
light:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    brightness: true
    schema: "json"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    brightness_scale: 254

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


