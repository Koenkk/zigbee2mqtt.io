---
title: "Tuya TS0601_water_valve control via MQTT"
description: "Integrate your Tuya TS0601_water_valve via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-08-01T15:19:08
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_water_valve

|     |     |
|-----|-----|
| Model | TS0601_water_valve  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Ultrasonic water meter valve |
| Exposes | switch (state), water_consumed, flow_rate, temperature, voltage, auto_clean |
| Picture | ![Tuya TS0601_water_valve](https://www.zigbee2mqtt.io/images/devices/TS0601_water_valve.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
The pairing requires 19 steps, here's how to enter pairing mode: https://imgbox.com/LxxyRYiD
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `water_consumed_precision`: Number of digits after decimal point for water_consumed, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `water_consumed_calibration`: Calibrates the water_consumed value (absolute offset), takes into effect on next report of device. The value must be a number.

* `flow_rate_precision`: Number of digits after decimal point for flow_rate, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `flow_rate_calibration`: Calibrates the flow_rate value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Water consumed (numeric)
Total water consumption.
Value can be found in the published state on the `water_consumed` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m³`.

### Flow rate (numeric)
Instantaneous water flow rate.
Value can be found in the published state on the `flow_rate` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m³/h`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Auto clean (binary)
Auto clean mode.
Value can be found in the published state on the `auto_clean` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_clean": NEW_VALUE}`.
If value equals `true` auto clean is ON, if `false` OFF.

