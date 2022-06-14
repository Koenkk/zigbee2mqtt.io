---
title: "Alecto SMART-SMOKE10 control via MQTT"
description: "Integrate your Alecto SMART-SMOKE10 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-06-14T22:06:16
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Alecto SMART-SMOKE10

|     |     |
|-----|-----|
| Model | SMART-SMOKE10  |
| Vendor  | Alecto  |
| Description | Smart smoke detector |
| Exposes | smoke_state, battery_state, checking_result, smoke_value, battery, lifecycle, self_checking, silence, linkquality |
| Picture | ![SMART-SMOKE10](https://www.zigbee2mqtt.io/images/devices/SMART-SMOKE10.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

## Exposes

### Smoke State (text)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Battery state (text)
Indicates the battery level. Reported in 'low', 'middle', 'high'. 
It's not possible to read (`/get`) or write (`/set`) this value.

### Checking result (text)
Indicates the state of the self_checking mode. Reported in 'checking', 'check_success', 'check_failure', 'others'.
It's not possible to read (`/get`) or write (`/set`) this value.

### Smoke value (text)
This function doesn't seem to work. Altough it is also shown in the original app with the hub, there is never a value reported. 

### Battery (numeric)
Indicates the battery level. Reported in percentage. 
It's not possible to read (`/get`) or write (`/set`) this value.

### Lifecycle (binary)
Indicates if the smoke detector is still in it's lifecycle. If value equals `true` it is within the lifecycle , if `false` it should be replaced.
It's not possible to read (`/get`) or write (`/set`) this value.

### Self Checking (binary)
Allows to test the smoke detector. The value can be (`/set`) to 'true' which will trigger the test modus. This will be reported in the checking_result and the alarm will sound for 5 seconds. 

### Silence (binary)
This value should enable the tamper function to temporary disable the alarm, but it doesn't appear to work. The value can be ('/set') to 'true' but this will not have an effect. 

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.