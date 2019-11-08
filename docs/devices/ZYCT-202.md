---
title: "Trust ZYCT-202 control via MQTT"
description: "Integrate your Trust ZYCT-202 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ZYCT-202.md)*

# Trust ZYCT-202

| Model | ZYCT-202  |
| Vendor  | Trust  |
| Description | Remote control |
| Supports | on, off, stop, up-press, down-press |
| Picture | ![Trust ZYCT-202](../images/devices/ZYCT-202.jpg) |

## Notes


### Pairing
Factory reset the remote by holding the 0 (off) button for +-20 seconds.
To establish a connection keep the remote within 2 meters from the hub.
Press and hold the smart group button (button with two bulbs) and wait until the lights, below the channels, flash.

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possbile with the following configuration:


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
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}

## Home assistant automation

Avoid using a the sensor entity as a trigger from this device, especially when looking to trigger actions based on action_group (The variable identifying the channels).
This is because the device sends an empty mqtt shortly after the desired payload e.g.
{% raw %}
```text
Nov 08 22:50:35 hass.3ke.uk npm[17965]:   zigbee2mqtt:info 11/8/2019, 10:50:35 PM MQTT publish: topic 'zigbee2mqtt/remote_1', payload '{"linkquality":10,"action":"on","action_group":150}'
Nov 08 22:50:35 hass.3ke.uk npm[17965]:   zigbee2mqtt:info 11/8/2019, 10:50:35 PM MQTT publish: topic 'zigbee2mqtt/remote_1', payload '{"linkquality":10,"action":""}'
```
{% endraw %}

When using a conditional to match the action_group, it appears that the state changes so quickly it makes an unreliable trigger.

Instead use an mqtt trigger for automation

E.g.

{% raw %}
```yaml
- id: remote_1_group
  alias: Bedroom lights
  trigger:
  - platform: mqtt
    topic: zigbee2mqtt/remote_1
  condition:
  - condition: template
    value_template: >
      {{ trigger.payload_json.action_group == 150 and (trigger.payload_json.action == 'off' or trigger.payload_json.action == 'on') }}
  action:
    - service_template: "light.turn_{{ trigger.payload_json.action }}"
      data:
        entity_id:
        - light.osram_3_light
        - light.osram_2_light
```
{% endraw %}