---
title: "ShinaSystem CSM-300ZB_V2 control via MQTT"
description: "Integrate your ShinaSystem CSM-300ZB_V2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-08-31T11:26:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ShinaSystem CSM-300ZB_V2

|     |     |
|-----|-----|
| Model | CSM-300ZB_V2  |
| Vendor  | [ShinaSystem](/supported-devices/#v=ShinaSystem)  |
| Description | SiHAS multipurpose ToF sensor |
| Exposes | battery, voltage, status, people, rf_pairing_on, counting_freeze, tof_init, led_state, rf_state, transaction, fast_in, fast_out, linkquality |
| Picture | ![ShinaSystem CSM-300ZB_V2](https://www.zigbee2mqtt.io/images/devices/CSM-300ZB_V2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

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

### Status (enum)
Currently status.
Value can be found in the published state on the `status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `idle`, `in`, `out`.

### People (numeric)
People count.
Value can be found in the published state on the `people` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"people": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"people": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### Rf pairing on (enum)
Run RF pairing mode.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rf_pairing_on": NEW_VALUE}`.
The possible values are: `run`.

### Counting freeze (binary)
Counting Freeze ON/OFF, not reporting people value when is ON.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"counting_freeze": NEW_VALUE}`.
If value equals `ON` counting freeze is ON, if `OFF` OFF.

### Tof init (enum)
ToF sensor initial.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tof_init": NEW_VALUE}`.
The possible values are: `initial`.

### Led state (binary)
Indicate LED enable/disable, default : enable.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_state": NEW_VALUE}`.
If value equals `enable` led state is ON, if `disable` OFF.

### Rf state (binary)
RF function enable/disable, default : disable.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rf_state": NEW_VALUE}`.
If value equals `enable` rf state is ON, if `disable` OFF.

### Transaction (enum)
Transaction interval, default : 400ms.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"transaction": NEW_VALUE}`.
The possible values are: `0ms`, `200ms`, `400ms`, `600ms`, `800ms`, `1,000ms`.

### Fast in (binary)
Fast process enable/disable when people 0 to 1. default : enable.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fast_in": NEW_VALUE}`.
If value equals `enable` fast in is ON, if `disable` OFF.

### Fast out (binary)
Fast process enable/disable when people 1 to 0. default : enable.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fast_out": NEW_VALUE}`.
If value equals `enable` fast out is ON, if `disable` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

