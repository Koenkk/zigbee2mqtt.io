---
title: "YOKIS TLM4TNO-UP control via MQTT"
description: "Integrate your YOKIS TLM4TNO-UP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-30T19:35:14
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# YOKIS TLM4TNO-UP

|     |     |
|-----|-----|
| Model | TLM4TNO-UP  |
| Vendor  | [YOKIS](/supported-devices/#v=YOKIS)  |
| Description | Wall-mounted 4-button transmitter (NO format) |
| Exposes | identify, temperature, battery_low, current_value, min_measured_value, max_measured_value, offset, samplingPeriod, samplingNumber, deltaTemp, minimalSendingPeriod, maximalSendingPeriod, action |
| Picture | ![YOKIS TLM4TNO-UP](https://www.zigbee2mqtt.io/images/devices/TLM4TNO-UP.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`

* `simulated_brightness`: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:
```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```


## Exposes

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Battery low (binary)
Empty battery indicator.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Current value (numeric)
This attribute represents the last value measured..
Value can be found in the published state on the `current_value` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_value": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `-50` and the maximum value is `120`.
The unit of this value is `°C`.

### Min measured value (numeric)
Represent the minimal value set since the last power-on/reset..
Value can be found in the published state on the `min_measured_value` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_measured_value": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `-50` and the maximum value is `120`.
The unit of this value is `°C`.

### Max measured value (numeric)
Represent the maximal value set since the last power-on/reset..
Value can be found in the published state on the `max_measured_value` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_measured_value": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `-50` and the maximum value is `120`.
The unit of this value is `°C`.

### Offset (numeric)
Represent the offset applicated to the temperature measured..
Value can be found in the published state on the `offset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"offset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"offset": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `°C`.

### SamplingPeriod (numeric)
Represent the sampling period used to process the temperature measurement..
Value can be found in the published state on the `samplingPeriod` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"samplingPeriod": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"samplingPeriod": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `120`.
The unit of this value is `s`.

### SamplingNumber (numeric)
Represents the sampling number to sense per sampling period defined before..
Value can be found in the published state on the `samplingNumber` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"samplingNumber": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"samplingNumber": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `20`.

### DeltaTemp (numeric)
Represents the temperature variation to request a new temperature sending through reports..
Value can be found in the published state on the `deltaTemp` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"deltaTemp": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"deltaTemp": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `°C`.

### MinimalSendingPeriod (numeric)
Represents the minimal sending period that the device must respect before sending a new value through reporting..
Value can be found in the published state on the `minimalSendingPeriod` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"minimalSendingPeriod": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"minimalSendingPeriod": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.

### MaximalSendingPeriod (numeric)
Represents the maximal sending period. The device must send a new value through reporting before the end of this period..
Value can be found in the published state on the `maximalSendingPeriod` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"maximalSendingPeriod": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"maximalSendingPeriod": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `toggle`, `brightness_move_to_level`, `brightness_move_up`, `brightness_move_down`, `brightness_step_up`, `brightness_step_down`, `brightness_stop`, `open`, `close`, `stop`.

