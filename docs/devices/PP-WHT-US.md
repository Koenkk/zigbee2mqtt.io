---
title: "Securifi PP-WHT-US control via MQTT"
description: "Integrate your Securifi PP-WHT-US via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/PP-WHT-US.md)*

# Securifi PP-WHT-US

| Model | PP-WHT-US  |
| Vendor  | Securifi  |
| Description | Peanut Smart Plug |
| Supports | on/off, power measurement |
| Picture | ![Securifi PP-WHT-US](../images/devices/PP-WHT-US.jpg) |

## Notes


### Pairing
Additional steps are required because the Peanut Smart Plug does not provide a `modelId` in its database entry,
and thus zigbee2mqtt cannot identify the product or how to handle it.

Reset the device and initiate pairing mode by holding the pairing button
(the small button next to the on/off button) for ten seconds, releasing the button,
and unplugging the device.
When plugged back in, the front LED will be blinking red and ready to receive a pairing request.
When paired successfully, the red LED on the plug will stop blinking.

After pairing, you must stop zigbee2mqtt and manually edit the zigbee2mqtt `database.db` file with a
text editor (note that the file may be owned by root).
Find each line where the Peanut Smart Plug is listed (look for "SecuriFi Ltd." in the `ManufName` field)
and **add** `"modelId":"PP-WHT-US",` between two existing fields.

*For example,* change `..."manufId":4098,"manufName":"Securifi Ltd....`
to `..."manufId":4098,"modelId":"PP-WHT-US","manufName":"Securifi Ltd....`
on each line for the device.

Save the file and restart zigbee2mqtt.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possbile with the following configuration:


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
    unit_of_measurement: "W"
    icon: "mdi:factory"
    value_template: "{{ value_json.power }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "A"
    icon: "mdi:power-plug"
    value_template: "{{ value_json.current }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "V"
    icon: "mdi:flash"
    value_template: "{{ value_json.voltage }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


