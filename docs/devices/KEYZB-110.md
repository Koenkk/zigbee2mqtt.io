---
title: "Develco KEYZB-110 control via MQTT"
description: "Integrate your Develco KEYZB-110 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-10-30T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Develco KEYZB-110

|     |     |
|-----|-----|
| Model | KEYZB-110  |
| Vendor  | [Develco](/supported-devices/#v=Develco)  |
| Description | Keypad |
| Exposes | battery_low, tamper, action_code, action_transaction, action_zone, battery, voltage, action, linkquality |
| Picture | ![Develco KEYZB-110](https://www.zigbee2mqtt.io/images/devices/KEYZB-110.png) |
| White-label | Frient KEPZB-110 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Arming/Disarming from the server
To set arming mode publish the following payload to `zigbee2mqtt/FRIENDLY_NAME/set` topic:

```js
{
    "arm_mode": {
        "mode": "arm_all_zones"
    }
}
```
Valid `mode` values as per ZCL specifications are `disarm`, `arm_day_zones`, `arm_night_zones`, `arm_all_zones`, `exit_delay`, `entry_delay`, `not_ready`, `in_alarm`, `arming_stay`, `arming_night`, `arming_away`.

### Arming/Disarming from the keypad
When an attempt to set arm mode is done on the keypad, Zigbee2MQTT will publish the following payload to topic `zigbee2mqtt/FRIENDLY_NAME`:

```js
{
    "action": "arm_all_zones", // This is the example
    "action_code": "123", // The code being entered
    "action_zone": 23, // The zone being armed (default 23)
    "action_transaction": 99 // The transaction number
}
```

The automation server must validate the request and send a notification to the keypad, confirming or denying the request.

Do so by sending the following payload to `zigbee2mqtt/FRIENDLY_NAME/set`:

```js
{
    "arm_mode": {
        "transaction": 99, // Transaction number (this must be the same as the keypad request `action_transaction`)
        "mode": "arm_all_zones" // Mode (this must be the same as the keypad request `action`)
    }
}
```
Valid `mode` values are `disarm`, `arm_day_zones`, `arm_night_zones`, `arm_all_zones`, `invalid_code`, `not_ready`, `already_disarmed`

The automation server must follow the notification with an actual change to the correct arm mode. For the example above, the server should respond with `exit_delay`, count the elapsed time (e.g 30 secs), then change mode again to `arm_all_zones` (see "Arming/Disarming from the server" section above)
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

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

### Action code (text)
Pin code introduced..
Value can be found in the published state on the `action_code` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Action transaction (numeric)
Last action transaction number..
Value can be found in the published state on the `action_transaction` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Action zone (text)
Alarm zone. Default value 23.
Value can be found in the published state on the `action_zone` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Reported battery voltage in millivolts.
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `mV`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `disarm`, `arm_day_zones`, `arm_night_zones`, `arm_all_zones`, `exit_delay`, `emergency`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

