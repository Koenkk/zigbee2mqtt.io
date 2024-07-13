---
title: "Xiaomi JTYJ-GD-01LM/BW control via MQTT"
description: "Integrate your Xiaomi JTYJ-GD-01LM/BW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi JTYJ-GD-01LM/BW

|     |     |
|-----|-----|
| Model | JTYJ-GD-01LM/BW  |
| Vendor  | [Xiaomi](/supported-devices/#v=Xiaomi)  |
| Description | Mijia Honeywell smoke detector |
| Exposes | smoke, battery_low, tamper, battery, sensitivity, smoke_density, selftest, voltage, test, device_temperature, power_outage_count, linkquality |
| Picture | ![Xiaomi JTYJ-GD-01LM/BW](https://www.zigbee2mqtt.io/images/devices/JTYJ-GD-01LM-BW.png) |
| White-label | Xiaomi YTC4020RT |


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



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

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

### Sensitivity (enum)
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Smoke density (numeric)
Value can be found in the published state on the `smoke_density` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Selftest (enum)
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"selftest": NEW_VALUE}`.
The possible values are: ``.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Test (binary)
Test mode activated.
Value can be found in the published state on the `test` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` test is ON, if `false` OFF.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Power outage count (numeric)
Number of power outages.
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

