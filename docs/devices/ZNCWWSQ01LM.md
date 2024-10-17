---
title: "Aqara ZNCWWSQ01LM control via MQTT"
description: "Integrate your Aqara ZNCWWSQ01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-12-01T15:07:19
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara ZNCWWSQ01LM

|     |     |
|-----|-----|
| Model | ZNCWWSQ01LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Smart pet feeder C1 |
| Exposes | feed, feeding_source, feeding_size, portions_per_day, weight_per_day, error, schedule, led_indicator, lock (state), mode, serving_size, portion_weight, linkquality |
| Picture | ![Aqara ZNCWWSQ01LM](https://www.zigbee2mqtt.io/images/devices/ZNCWWSQ01LM.png) |
| White-label | Aqara PETC1-M01 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
### Pairing

To put the device in pairing mode, hold the reset button for 5 seconds. The LED light should blink quickly and it makes a beep sound once paired.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Feed (enum)
Start feeding.
Value can be found in the published state on the `feed` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"feed": NEW_VALUE}`.
The possible values are: ``, `START`.

### Feeding source (enum)
Feeding source.
Value can be found in the published state on the `feeding_source` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `schedule`, `manual`, `remote`.

### Feeding size (numeric)
Feeding size.
Value can be found in the published state on the `feeding_size` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `portion`.

### Portions per day (numeric)
Portions per day.
Value can be found in the published state on the `portions_per_day` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Weight per day (numeric)
Weight per day.
Value can be found in the published state on the `weight_per_day` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `g`.

### Error (binary)
Indicates whether there is an error with the feeder.
Value can be found in the published state on the `error` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` error is ON, if `false` OFF.

### Schedule (list)
Feeding schedule.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule": [{"days": VALUE, "hour": VALUE, "minute": VALUE, "size": VALUE}]}`
- `days` (enum) allowed values: `everyday`, `workdays`, `weekend`, `mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`, `mon-wed-fri-sun`, `tue-thu-sat`
- `hour` (numeric) 
- `minute` (numeric) 
- `size` (numeric) 

### Disable LED at night (binary)
LED indicator will be disabled every day from 21:00 to 09:00.
Value can be found in the published state on the `led_indicator` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_indicator": NEW_VALUE}`.
If value equals `ON` disable LED at night is ON, if `OFF` OFF.

### Child lock (lock)
The current state of this lock is in the published state under the `child_lock` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": "LOCK"}` or `{"child_lock": "UNLOCK"}`.
It's not possible to read (`/get`) this value.

### Mode (enum)
Feeding mode.
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `schedule`, `manual`.

### Serving size (numeric)
One serving size.
Value can be found in the published state on the `serving_size` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"serving_size": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `10`.
The unit of this value is `portion`.

### Portion weight (numeric)
Portion weight.
Value can be found in the published state on the `portion_weight` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"portion_weight": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `20`.
The unit of this value is `g`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

