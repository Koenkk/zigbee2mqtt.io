---
title: "AVATTO ZOT60 control via MQTT"
description: "Integrate your AVATTO ZOT60 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-29T18:29:02.759Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# AVATTO ZOT60

|     |     |
|-----|-----|
| Model | ZOT60  |
| Vendor  | [AVATTO](/supported-devices/#v=AVATTO)  |
| Description | Smart Plug |
| Exposes | switch (state), countdown, power, current, voltage, energy, power_on_behavior, backlight_mode |
| Picture | ![AVATTO ZOT60](https://www.zigbee2mqtt.io/images/devices/ZOT60.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Countdown (numeric)
Toggle the device after a set duration (one time action).
Value can be found in the published state on the `countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"energy": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100000`.
The unit of this value is `kWh`.

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Backlight mode (binary)
Mode of the backlight.
Value can be found in the published state on the `backlight_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"backlight_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_mode": NEW_VALUE}`.
If value equals `ON` backlight mode is ON, if `OFF` OFF.

