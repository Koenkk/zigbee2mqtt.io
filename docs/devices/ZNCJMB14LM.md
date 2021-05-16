---
title: "Xiaomi ZNCJMB14LM control via MQTT"
description: "Integrate your Xiaomi ZNCJMB14LM via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ZNCJMB14LM.md)*

# Xiaomi ZNCJMB14LM

| Model | ZNCJMB14LM  |
| Vendor  | Xiaomi  |
| Description | Aqara smart scene panel switch S1 |
| Exposes | switch, settings, linkquality |
| Picture | ![Xiaomi ZNCJMB14LM](../images/devices/ZNCJMB14LM.jpg) |

## Notes


### Pairing
On initial boot, the device will display a message "Waiting for accessing the network" permit join and the device will be added.

If the device is already part of a network, swipe down from the top of the screen to access the Settings panel (password may be required), navigate to "Advanced", navigate to "Access New Gateway" and confirm with "Ok".
Once confirmed, proceed as per initial boot.

## Exposes (Entities)

### Switch (left endpoint)
The current state of this switch is in the published state under the `state_left` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_left": "ON"}`, `{"state_left": "OFF"}` or `{"state_left": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_left": ""}`.

### Switch (center endpoint)
The current state of this switch is in the published state under the `state_center` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_center": "ON"}`, `{"state_center": "OFF"}` or `{"state_center": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_center": ""}`.

### Switch (right endpoint)
The current state of this switch is in the published state under the `state_right` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_right": "ON"}`, `{"state_right": "OFF"}` or `{"state_right": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_right": ""}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

## Exposes (Settings)

### Standby enabled (binary)
Enables / disables the device screen standby.
The current state of this setting is in the published state under the `standby_enabled` property (value is `True` or `False`).
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"standby_enabled":true}`, or `{"standby_enabled":false}`.

### Theme (enum)
Sets the device screen theme.
The current state of this setting is in the published state under the `theme` property (value is `Classic` or `Concise`).
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"theme":"classic"}`, or `{"theme":"concise"}`.

### Beep volume (enum)
Sets the device beeper volume.
The current state of this setting is in the published state under the `beep_volume` property (value is `Mute`, `Low`, `Medium` or `High`).
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"beep_volume":"mute"}`, `{"beep_volume":"low"}`, `{"beep_volume":"medium"}` or `{"beep_volume":"high"}`.

### LCD brightness (numeric)
Sets the device screen brightness as a percentage. *Note: if lcd_auto_brightness_enabled is true, this setting will not persist*
The current state of this setting is in the published state under the `lcd_brightness` property (value is between `1` and `100`).
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lcd_brightness":75}`.

### Language (enum)
Sets the device screen language.
The current state of this setting is in the published state under the `language` property (value is `Chinese` or `English`).
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"language":"chinese"}` or `{"language":"english"}`.

### Screen saver style (enum)
Sets the device screen saver. *Note: if screen_saver_enabled is false, screen saver will not show*
The current state of this setting is in the published state under the `screen_saver_style` property (value is `classic` or `analog clock`).
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"screen_saver_style":"classic"}` or `{"screen_saver_style":"analog clock"}`.

### Standby time (numeric)
Sets the device screen standby time in seconds. *Note: if standby_enabled is false, the device will not go into standby after the elapsed period*
The current state of this setting is in the published state under the `standby_time` property (value is between `1` and `65534`).
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"standby_time":15}`.

### Font size (enum)
Sets the device screen font size.
The current state of this setting is in the published state under the `beep_volume` property (value is `Small`, `Medium` or `Large`).
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"font_size":"small"}`, `{"font_size":"medium"}` or `{"font_size":"large"}`.

### LCD auto brightness enabled (binary)
Enables / disables the device screen automatic brightness.
The current state of this setting is in the published state under the `lcd_auto_brightness_enabled` property (value is `True` or `False`).
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lcd_auto_brightness_enabled":true}`, or `{"lcd_auto_brightness_enabled":false}`.

### Homepage (enum)
Sets the device screen homepage.
The current state of this setting is in the published state under the `homepage` property (value is `Scene`, `Feel`, `Thermostat` or `Switch`).
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"homepage":"scene"}`, `{"homepage":"feel"}`, `{"homepage":"thermostat"}` or `{"homepage":"switch"}`.

### Screen saver enabled (binary)
Enables / disables the device screen saver.
The current state of this setting is in the published state under the `screen_saver_enabled` property (value is `True` or `False`).
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"screen_saver_enabled":true}`, or `{"screen_saver_enabled":false}`.

### Standby LCD brightness (numeric)
Sets the device screen brightness as a percentage. *Note: if standby_enabled is false, the device will not go into standby after the elapsed period*
The current state of this setting is in the published state under the `standby_lcd_brightness` property (value is between `1` and `100`).
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"standby_lcd_brightness":10}`.

### Available Switches (enum)
Sets the device switch screen available relays. *Note: if available_switches is none, the device will not show the switches screen*
The current state of this setting is in the published state under the `available_switches` property (value is a set (lowest number first) combination between `none`, `1`, `2`, `3` or `all`).
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"available_switches":"none"}`, `{"available_switches":"1 and 3"}`, `{"available_switches":"1"}` or `{"available_switches":"all"}`.

### Switch 1 Text and Icon (composite)
Sets the device switch screen text and icon for the left switch endpoint.
The current state of this setting is published under the `switch_1_text_icon` property and is a composite of the `switch_1_text` and `switch_1_icon` properties below.
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_1_text_icon":{"switch_1_icon":"1","switch_1_text":"Test"}}`.

### Switch 1 Text (text)
Sets the device switch screen text for the left switch endpoint
The current state of this setting is in the published state under the `switch_1_icon` property.
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_1_text":"Test"}`.

### Switch 1 Icon (enum)
Sets the device switch screen icon for the left switch endpoint
&emsp;The current state of this setting is in the published state under the `switch_1_icon` property (value is between `1` and `11`).
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_1_icon":"1"}` or `{"switch_1_icon":"11"}`.

### Switch 2 Text and Icon (composite)
Sets the device switch screen text and icon for the center switch endpoint.
The current state of this setting is published under the `switch_2_text_icon` property and is a composite of the `switch_2_text` and `switch_2_icon` properties below.
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_2_text_icon":{"switch_2_icon":"1","switch_2_text":"Test"}}`.

### Switch 2 Text (text)
Sets the device switch screen text for the center switch endpoint
The current state of this setting is in the published state under the `switch_2_icon` property.
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_2_text":"Test"}`.

### Switch 2 Icon (enum)
Sets the device switch screen icon for the center switch endpoint
&emsp;The current state of this setting is in the published state under the `switch_2_icon` property (value is between `1` and `11`).
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_2_icon":"1"}` or `{"switch_1_icon":"11"}`.

### Switch 3 Text and Icon (composite)
Sets the device switch screen text and icon for the right switch endpoint.
The current state of this setting is published under the `switch_3_text_icon` property and is a composite of the `switch_3_text` and `switch_3_icon` properties below.
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_3_text_icon":{"switch_3_icon":"1","switch_3_text":"Test"}}`.

### Switch 3 Text (text)
Sets the device switch screen text for the right switch endpoint
The current state of this setting is in the published state under the `switch_3_icon` property.
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_3_text":"Test"}`.

### Switch 3 Icon (enum)
Sets the device switch screen icon for the right switch endpoint
&emsp;The current state of this setting is in the published state under the `switch_3_icon` property (value is between `1` and `11`).
To control this setting publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_3_icon":"1"}` or `{"switch_3_icon":"11"}`.

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
    value_template: "{{ value_json.state_left }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/left/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_center }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/center/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_right }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/right/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.linkquality }}"
    unit_of_measurement: "lqi"
    icon: "mdi:signal"
```
{% endraw %}


