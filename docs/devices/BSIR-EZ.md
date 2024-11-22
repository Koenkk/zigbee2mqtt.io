---
title: "Bosch BSIR-EZ control via MQTT"
description: "Integrate your Bosch BSIR-EZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-30T19:41:12
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BSIR-EZ

|     |     |
|-----|-----|
| Model | BSIR-EZ  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Outdoor siren |
| Exposes | alarm_state, light_delay, siren_delay, siren_duration, light_duration, siren_volume, siren_and_light, power_source, warning, test, tamper, battery, voltage, battery_low, ac_status, linkquality |
| Picture | ![Bosch BSIR-EZ](https://www.zigbee2mqtt.io/images/devices/BSIR-EZ.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
You will need to add the install code from the back of the unit in order to pair the siren. If you do not complete this step the interview will fail and the unit will be shown as unsupported. On the back of the siren is a QR code and a 36 digit code that is called "Install code" - do NOT use this 36 digit code. Instead, scan the QR code with your phone and this will return a 91 long code. Use this code by going to Z2M GUI, Settings, Tools, "Add Install Code".
<!-- Notes END: Do not edit below this line -->




## Exposes

### Alarm state (binary)
Alarm turn ON/OFF.
Value can be found in the published state on the `alarm_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_state": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_state": NEW_VALUE}`.
If value equals `ON` alarm state is ON, if `OFF` OFF.

### Light delay (numeric)
Flashing light delay.
Value can be found in the published state on the `light_delay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_delay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_delay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `30`.
The unit of this value is `s`.

### Siren delay (numeric)
Siren alarm delay.
Value can be found in the published state on the `siren_delay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"siren_delay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"siren_delay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `30`.
The unit of this value is `s`.

### Siren duration (numeric)
Duration of the alarm siren.
Value can be found in the published state on the `siren_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"siren_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"siren_duration": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `15`.
The unit of this value is `m`.

### Light duration (numeric)
Duration of the alarm light.
Value can be found in the published state on the `light_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_duration": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `15`.
The unit of this value is `m`.

### Siren volume (enum)
Volume of the alarm.
Value can be found in the published state on the `siren_volume` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"siren_volume": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"siren_volume": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Siren and light (enum)
Siren and Light behaviour during alarm .
Value can be found in the published state on the `siren_and_light` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"siren_and_light": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"siren_and_light": NEW_VALUE}`.
The possible values are: `only_light`, `only_siren`, `siren_and_light`.

### Power source (enum)
Siren power source.
Value can be found in the published state on the `power_source` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_source": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_source": NEW_VALUE}`.
The possible values are: `solar_panel`, `ac_power_supply`, `dc_power_supply`.

### Warning (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"warning": {"mode": VALUE}}`
- `mode` (enum): Mode of the warning (sound effect) allowed values: `stop`, `burglar`, `fire`, `emergency`, `police_panic`, `fire_panic`, `emergency_panic`

### Test (binary)
Indicates whether the device is being tested.
Value can be found in the published state on the `test` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` test is ON, if `false` OFF.

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

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Ac status (binary)
Is the device plugged in.
Value can be found in the published state on the `ac_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` ac status is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

