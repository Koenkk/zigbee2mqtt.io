---
title: "Tuya PJ-ZGD01 control via MQTT"
description: "Integrate your Tuya PJ-ZGD01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-01-31T17:42:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya PJ-ZGD01

|     |     |
|-----|-----|
| Model | PJ-ZGD01  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Garage door opener |
| Exposes | trigger, countdown, garage_door_contact, run_time, open_alarm_time, status |
| Picture | ![Tuya PJ-ZGD01](https://www.zigbee2mqtt.io/images/devices/PJ-ZGD01.png) |
| White-label | MatSee Plus PJ-ZGD01 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Trigger (binary)
Request door to close (= false) or open (= true), will not pulse output if contact shows door is already in requested state.
Value can be found in the published state on the `trigger` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"trigger": NEW_VALUE}`.
If value equals `true` trigger is ON, if `false` OFF.

### Countdown (numeric)
Countdown to trigger door movement after a certain time, will pulse output in all cases.
Value can be found in the published state on the `countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Garage door contact (binary)
Indicates if the garage door contact is closed (= true) or open (= false).
Value can be found in the published state on the `garage_door_contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` garage door contact is ON, if `false` OFF.

### Run time (numeric)
Configure the time to wait for the door contact status to change before triggering a run time alarm.
Value can be found in the published state on the `run_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"run_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `120`.
The unit of this value is `s`.

### Open alarm time (numeric)
Configure the amount of time the door may be open before an open time alarm is triggered.
Value can be found in the published state on the `open_alarm_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"open_alarm_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400`.
The unit of this value is `s`.

### Status (enum)
Indicates run time alarm, door open alarm or normal status, will not return to normal until door is triggered again.
Value can be found in the published state on the `status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `Open Time Alarm`, `Run Time Alarm`, `Normal`.

