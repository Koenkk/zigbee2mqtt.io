---
title: "DIYRuZ DIYRuZ_Geiger control via MQTT"
description: "Integrate your DIYRuZ DIYRuZ_Geiger via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-06-10T16:45:59Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# DIYRuZ DIYRuZ_Geiger

|     |     |
|-----|-----|
| Model | DIYRuZ_Geiger  |
| Vendor  | [DIYRuZ](/supported-devices/#v=DIYRuZ)  |
| Description | DiY Geiger counter |
| Exposes | action, radioactive_events_per_minute, radiation_dose_per_hour, led_feedback, buzzer_feedback, alert_threshold, sensors_type, sensors_count, sensitivity, linkquality |
| Picture | ![DIYRuZ DIYRuZ_Geiger](https://www.zigbee2mqtt.io/images/devices/DIYRuZ_Geiger.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
[DiY Geiger counter](https://modkam.ru/?p=1591)
<!-- Notes END: Do not edit below this line -->




## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`.

### Radioactive events per minute (numeric)
Current count radioactive pulses per minute.
Value can be found in the published state on the `radioactive_events_per_minute` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `rpm`.

### Radiation dose per hour (numeric)
Current radiation level.
Value can be found in the published state on the `radiation_dose_per_hour` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `μR/h`.

### Led feedback (binary)
Enable LED feedback.
Value can be found in the published state on the `led_feedback` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_feedback": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_feedback": NEW_VALUE}`.
If value equals `ON` led feedback is ON, if `OFF` OFF.

### Buzzer feedback (binary)
Enable buzzer feedback.
Value can be found in the published state on the `buzzer_feedback` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"buzzer_feedback": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"buzzer_feedback": NEW_VALUE}`.
If value equals `ON` buzzer feedback is ON, if `OFF` OFF.

### Alert threshold (numeric)
Critical radiation level.
Value can be found in the published state on the `alert_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alert_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alert_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10000`.
The unit of this value is `μR/h`.

### Sensors type (enum)
Type of installed tubes.
Value can be found in the published state on the `sensors_type` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensors_type": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensors_type": NEW_VALUE}`.
The possible values are: `СБМ-20/СТС-5/BOI-33`, `СБМ-19/СТС-6`, `Others`.

### Sensors count (numeric)
Count of installed tubes.
Value can be found in the published state on the `sensors_count` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensors_count": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensors_count": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `50`.

### Sensitivity (numeric)
This is applicable if tubes type is set to other.
Value can be found in the published state on the `sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

