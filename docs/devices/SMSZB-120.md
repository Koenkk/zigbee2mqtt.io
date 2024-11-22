---
title: "Develco SMSZB-120 control via MQTT"
description: "Integrate your Develco SMSZB-120 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-04-08T17:49:06Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Develco SMSZB-120

|     |     |
|-----|-----|
| Model | SMSZB-120  |
| Vendor  | [Develco](/supported-devices/#v=Develco)  |
| Description | Smoke detector with siren |
| Exposes | smoke, battery_low, test, max_duration, alarm, reliability, fault, temperature, battery, voltage, linkquality |
| Picture | ![Develco SMSZB-120](https://www.zigbee2mqtt.io/images/devices/SMSZB-120.png) |
| White-label | Frient 94430, Cavius 2103 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
The technical manual from Develco states that SMSZB-120 scans Zigbee channels 11-24 when searching for a network to join.

### Warning usage
Warning only support a single mode, `burglar`

Duration of using `warning` can be shorter than `max_duration` but not longer. If `max_duration` are set to 60 seconds, and you try to set `warning` with `duration` of 90 seconds, the warning will only apply for 60 seconds. Default value of `max_duration` are 240 seconds

This device do not support the `strobe` and `strobe_duty_cycle` functionality


### Triggering alarm (using old style `warning`)
This smoke alarm can be triggered manually by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with the payloads:

To start :
* `{"warning":{"duration":60,"level":"low","mode":"burglar","strobe":false,"strobe_duty_cycle":0}}`
Where:
- `duration`: the number of seconds the alarm will be on
- `level`: `low`, `medium`, `high`, `very_high`
- `mode`: `stop`, `burglar`
- `strobe`: not supported
- `strobe_duty_cycle`: not supported

To stop:
* `{"warning":{"duration":60,"level":"low","mode":"stop","strobe":false,"strobe_duty_cycle":0}}`

### Triggering alarm, Simple
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm": "START"}` and `{"alarm": "OFF"}`
Set `max_duration` from the Zigbee2MQTT UI or by publishing `{"max_duration": NEW_VALUE}`
This alarm are preset to highest volume
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


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

### Test (binary)
Indicates whether the device is being tested.
Value can be found in the published state on the `test` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` test is ON, if `false` OFF.

### Max duration (numeric)
Duration of Siren.
Value can be found in the published state on the `max_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_duration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `s`.

### Alarm (binary)
Manual Start of Siren.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm": NEW_VALUE}`.
If value equals `START` alarm is ON, if `OFF` OFF.

### Reliability (enum)
Indicates reason if any fault.
Value can be found in the published state on the `reliability` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `no_fault_detected`, `unreliable_other`, `process_error`.

### Fault (binary)
Indicates whether the device are in fault state.
Value can be found in the published state on the `fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` fault is ON, if `false` OFF.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

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

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

