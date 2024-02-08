---
title: "Hive KEYPAD001 control via MQTT"
description: "Integrate your Hive KEYPAD001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-09-01T18:11:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Hive KEYPAD001

|     |     |
|-----|-----|
| Model | KEYPAD001  |
| Vendor  | [Hive](/supported-devices/#v=Hive)  |
| Description | Alarm security keypad |
| Exposes | battery, voltage, battery_low, occupancy, tamper, contact, action_code, action_transaction, action_zone, action, linkquality |
| Picture | ![Hive KEYPAD001](https://www.zigbee2mqtt.io/images/devices/KEYPAD001.png) |


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
    "action_zone": 0, // The zone being armed (always 0)
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
Valid `mode` values are `disarm`, `arm_day_zones`, `arm_all_zones`, `invalid_code`, `not_ready`, `already_disarmed`

The automation server must follow the notification with an actual change to the correct arm mode. For the example above, the server should respond with `exit_delay`, count the elapsed time (e.g 30 secs), then change mode again to `arm_all_zones` (see "Arming/Disarming from the server" section above)
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `occupancy_timeout`: Time in seconds after which occupancy is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of `0`


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

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Action code (numeric)
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

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `panic`, `disarm`, `arm_day_zones`, `arm_all_zones`, `exit_delay`, `entry_delay`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

