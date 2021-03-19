---
title: "DIYRuZ DIYRuZ_Geiger control via MQTT"
description: "Integrate your DIYRuZ DIYRuZ_Geiger via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/DIYRuZ_Geiger.md)*

# DIYRuZ DIYRuZ_Geiger

| Model | DIYRuZ_Geiger  |
| Vendor  | DIYRuZ  |
| Description | [DiY Geiger counter](https://modkam.ru/?p=1591) |
| Exposes | action, radioactive_events_per_minute, radiation_dose_per_hour, led_feedback, buzzer_feedback, alert_threshold, sensors_type, sensors_count, sensitivity, linkquality |
| Picture | ![DIYRuZ DIYRuZ_Geiger](../images/devices/DIYRuZ_Geiger.jpg) |

## Notes

None


## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`.

### Radioactive_events_per_minute (numeric)
Current count radioactive pulses per minute.
Value can be found in the published state on the `radioactive_events_per_minute` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `rpm`.

### Radiation_dose_per_hour (numeric)
Current radiation level.
Value can be found in the published state on the `radiation_dose_per_hour` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `μR/h`.

### Led_feedback (binary)
Enable LED feedback.
Value can be found in the published state on the `led_feedback` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_feedback": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_feedback": NEW_VALUE}`.
If value equals `ON` led_feedback is ON, if `OFF` OFF.

### Buzzer_feedback (binary)
Enable buzzer feedback.
Value can be found in the published state on the `buzzer_feedback` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"buzzer_feedback": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"buzzer_feedback": NEW_VALUE}`.
If value equals `ON` buzzer_feedback is ON, if `OFF` OFF.

### Alert_threshold (numeric)
Critical radiation level.
Value can be found in the published state on the `alert_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alert_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alert_threshold": NEW_VALUE}`.
The unit of this value is `μR/h`.

### Sensors_type (enum)
Type of installed tubes.
Value can be found in the published state on the `sensors_type` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensors_type": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensors_type": NEW_VALUE}`.
The possible values are: `СБМ-20/СТС-5/BOI-33`, `СБМ-19/СТС-6`, `Others`.

### Sensors_count (numeric)
Count of installed tubes.
Value can be found in the published state on the `sensors_count` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensors_count": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensors_count": NEW_VALUE}`.

### Sensitivity (numeric)
This is applicable if tubes type is set to other.
Value can be found in the published state on the `sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.action }}"
    icon: "mdi:gesture-double-tap"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.radioactive_events_per_minute }}"
    unit_of_measurement: "rpm"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.radiation_dose_per_hour }}"
    unit_of_measurement: "μR/h"

binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.led_feedback }}"
    payload_on: "ON"
    payload_off: "OFF"

binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.buzzer_feedback }}"
    payload_on: "ON"
    payload_off: "OFF"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.alert_threshold }}"
    unit_of_measurement: "μR/h"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.sensors_type }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.sensors_count }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.sensitivity }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.linkquality }}"
    unit_of_measurement: "lqi"
    icon: "mdi:signal"
```
{% endraw %}


