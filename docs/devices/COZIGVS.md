---
title: "Conecto COZIGVS control via MQTT"
description: "Integrate your Conecto COZIGVS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-04-29T19:24:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Conecto COZIGVS

|     |     |
|-----|-----|
| Model | COZIGVS  |
| Vendor  | [Conecto](/supported-devices/#v=Conecto)  |
| Description | Vibration sensor |
| Exposes | vibration, sensitivity, buzzer_mute, linkquality |
| Picture | ![Conecto COZIGVS](https://www.zigbee2mqtt.io/images/devices/COZIGVS.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Vibration (binary)
Indicates whether the device detected vibration.
Value can be found in the published state on the `vibration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` vibration is ON, if `false` OFF.

### Sensitivity (numeric)
Sensitivity of the sensor (single press the button when muted to switch between low (one beep), medium (two beeps) and max (three beeps)).
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `2`.

### Buzzer mute (text)
ON when buzzer is muted (double press the button on device to toggle).
Value can be found in the published state on the `buzzer_mute` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

