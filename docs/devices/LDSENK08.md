---
title: "ADEO LDSENK08 control via MQTT"
description: "Integrate your ADEO LDSENK08 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-08-31T11:26:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ADEO LDSENK08

|     |     |
|-----|-----|
| Model | LDSENK08  |
| Vendor  | [ADEO](/supported-devices/#v=ADEO)  |
| Description | ENKI LEXMAN wireless smart door window sensor with vibration |
| Exposes | battery_low, contact, vibration, tamper, battery, sensitivity, linkquality |
| Picture | ![ADEO LDSENK08](https://www.zigbee2mqtt.io/images/devices/LDSENK08.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
### Reset/pairing:
- To reset, the battery cover must first be removed.
Then press the main button for at least 5 seconds and the red LED start fast flashing.
- Then loose the button, the red LED starts goes to normal flashing, the flashing frequency is 0.5 s on and 0.5 s off, and keep on flashing 3 mins.
- If the vibration sensor is paired successfully, the red LED turns green, and for about 10 seconds, then stop blinking and turns off.
- If the vibration sensor fails to join in the network, the red LED will keep on flashing 3 minutes, then turn off.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Vibration (binary)
Indicates whether the device detected vibration.
Value can be found in the published state on the `vibration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` vibration is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Sensitivity (numeric)
Sensitivity of the motion sensor.
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `4`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

