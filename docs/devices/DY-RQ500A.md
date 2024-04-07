---
title: "DYGSM DY-RQ500A control via MQTT"
description: "Integrate your DYGSM DY-RQ500A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-01T18:54:40
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# DYGSM DY-RQ500A

|     |     |
|-----|-----|
| Model | DY-RQ500A  |
| Vendor  | [DYGSM](/supported-devices/#v=DYGSM)  |
| Description | Gas sensor |
| Exposes | gas, gas_value, self_test, self_test_result, silence, alarm_ringtone, alarm_time, preheat, linkquality |
| Picture | ![DYGSM DY-RQ500A](https://www.zigbee2mqtt.io/images/devices/DY-RQ500A.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Gas (binary)
Indicates whether the device detected gas.
Value can be found in the published state on the `gas` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` gas is ON, if `false` OFF.

### Gas value (numeric)
Measured gas concentration.
Value can be found in the published state on the `gas_value` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `LEL`.

### Self test (binary)
Indicates whether the device is being self-tested.
Value can be found in the published state on the `self_test` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"self_test": NEW_VALUE}`.
If value equals `true` self test is ON, if `false` OFF.

### Self test result (enum)
Result of the self-test.
Value can be found in the published state on the `self_test_result` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `checking`, `success`, `failure`, `others`.

### Silence (binary)
Silence the alarm.
Value can be found in the published state on the `silence` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"silence": NEW_VALUE}`.
If value equals `true` silence is ON, if `false` OFF.

### Alarm ringtone (enum)
Ringtone of the alarm.
Value can be found in the published state on the `alarm_ringtone` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_ringtone": NEW_VALUE}`.
The possible values are: `melody_1`, `melody_2`, `melody_3`, `melody_4`, `melody_5`.

### Alarm time (numeric)
Alarm time.
Value can be found in the published state on the `alarm_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_time": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `180`.
The unit of this value is `s`.

### Preheat (binary)
Indicates sensor preheat is active.
Value can be found in the published state on the `preheat` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` preheat is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

