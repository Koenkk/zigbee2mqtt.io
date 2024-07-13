---
title: "Bosch BSD-2 control via MQTT"
description: "Integrate your Bosch BSD-2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-03-30T17:14:41
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BSD-2

|     |     |
|-----|-----|
| Model | BSD-2  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Smoke alarm II |
| Exposes | smoke, test, alarm_smoke, alarm_burglar, battery, sensitivity, broadcast_alarm, linkquality |
| Picture | ![Bosch BSD-2](https://www.zigbee2mqtt.io/images/devices/BSD-2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
### Pairing
- Before starting the pairing process the device's install code needs to be added to Zigbee2MQTT. Scan the QR code printed on the bottom of the device with the camera of your mobile phone and copy the received value (Attention: The install code printed in plain text on the device is not sufficient!) 
- The install code can be found inside the device before attaching it to the mounting plate
- Add this install code under Settings -> Tools -> Add install code
<!-- Notes END: Do not edit below this line -->




## Exposes

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Test (binary)
Indicates whether the device is currently performing a test.
Value can be found in the published state on the `test` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` test is ON, if `false` OFF.

### Alarm smoke (binary)
Toggle the smoke alarm siren.
Value can be found in the published state on the `alarm_smoke` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_smoke": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_smoke": NEW_VALUE}`.
If value equals `true` alarm smoke is ON, if `false` OFF.

### Alarm burglar (binary)
Toggle the burglar alarm siren.
Value can be found in the published state on the `alarm_burglar` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_burglar": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_burglar": NEW_VALUE}`.
If value equals `true` alarm burglar is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Sensitivity (enum)
Sensitivity of the smoke detector.
Value can be found in the published state on the `sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Broadcast alarm (enum)
Set siren state of all BSD-2 via broadcast.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"broadcast_alarm": NEW_VALUE}`.
The possible values are: `smoke_off`, `smoke_on`, `burglar_off`, `burglar_on`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

