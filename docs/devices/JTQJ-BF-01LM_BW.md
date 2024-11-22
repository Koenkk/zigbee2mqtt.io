---
title: "Xiaomi JTQJ-BF-01LM/BW control via MQTT"
description: "Integrate your Xiaomi JTQJ-BF-01LM/BW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi JTQJ-BF-01LM/BW

|     |     |
|-----|-----|
| Model | JTQJ-BF-01LM/BW  |
| Vendor  | [Xiaomi](/supported-devices/#v=Xiaomi)  |
| Description | Mijia Honeywell gas leak detector |
| Exposes | gas, tamper, sensitivity, gas_density, selftest, linkquality |
| Picture | ![Xiaomi JTQJ-BF-01LM/BW](https://www.zigbee2mqtt.io/images/devices/JTQJ-BF-01LM-BW.png) |
| White-label | Xiaomi YTC4019RT |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing
Plug the device in and wait for around 5mins, while it performs its self-tests.
A successful self-test is indicated by couple of beeps and a steady green led.
Now the device is ready for pairing. To initiate pairing quickly press the button three times in a row.


### Sensitivity
The sensitivity can be changed by publishing to `zigbee2mqtt/FRIENDLY_NAME/set`
`{"sensitivity": "SENSITIVITY"}` where `SENSITIVITY` is one of the following
values: `low`, `medium`,  `high`.

### Self-test
A self-test can be trigged by publishing to `zigbee2mqtt/FRIENDLY_NAME/set`
`{"selftest": ""}`.
If the selftest is executed successfully you will hear the device beep in 30 seconds.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Gas (binary)
Indicates whether the device detected gas.
Value can be found in the published state on the `gas` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` gas is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Sensitivity (enum)
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Gas density (numeric)
Value can be found in the published state on the `gas_density` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Selftest (enum)
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"selftest": NEW_VALUE}`.
The possible values are: ``.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

