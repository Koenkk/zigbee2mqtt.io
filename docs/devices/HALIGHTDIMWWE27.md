---
title: "Hive HALIGHTDIMWWE27 control via MQTT"
description: "Integrate your Hive HALIGHTDIMWWE27 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/HALIGHTDIMWWE27.md)*

# Hive HALIGHTDIMWWE27

| Model | HALIGHTDIMWWE27  |
| Vendor  | Hive  |
| Description | Active smart bulb white LED (E27) |
| Supports | on/off, brightness |
| Picture | ![Hive HALIGHTDIMWWE27](../images/devices/HALIGHTDIMWWE27.jpg) |

## Notes


### Pairing
Follow instructions from
[How do I reset my Hive Active Light?](https://www.hivehome.com/ca/support/Help_installing_Hive/HIH_Hive_Active_Light/How-do-I-reset-my-Hive-Active-Light). After resetting the bulb will automatically connect.

### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*

* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.



## Exposes
### Light 
TODO

### Effect (enum)
Triggers an effect on the light (e.g. make light blink for a few seconds).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/[FRIENDLY_NAME]/set` with payload `{"effect": NEW_VALUE}`.
The possible values are: `blink`, `breathe`, `okay`, `channel_change`, `finish_effect`, `stop_effect`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

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
    color_temp: false
    xy: false
    hs: false
    schema: "json"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    brightness_scale: 254
    effect: true
    effect_list: 
      - "blink"
      - "breathe"
      - "okay"
      - "channel_change"
      - "finish_effect"
      - "stop_effect"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
    icon: "mdi:signal"
```
{% endraw %}


