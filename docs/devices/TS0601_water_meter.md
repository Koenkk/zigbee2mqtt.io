---
title: "Tuya TS0601_water_meter control via MQTT"
description: "Integrate your Tuya TS0601_water_meter via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-31T19:12:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_water_meter

|     |     |
|-----|-----|
| Model | TS0601_water_meter  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Ultrasonic water meter |
| Exposes | water_consumed, month_consumption, daily_consumption, flow_rate, reverse_water_consumed, report_period, meter_id, temperature, voltage, fault |
| Picture | ![Tuya TS0601_water_meter](https://www.zigbee2mqtt.io/images/devices/TS0601_water_meter.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `water_consumed_precision`: Number of digits after decimal point for water_consumed, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `water_consumed_calibration`: Calibrates the water_consumed value (absolute offset), takes into effect on next report of device. The value must be a number.

* `month_consumption_precision`: Number of digits after decimal point for month_consumption, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `month_consumption_calibration`: Calibrates the month_consumption value (absolute offset), takes into effect on next report of device. The value must be a number.

* `daily_consumption_precision`: Number of digits after decimal point for daily_consumption, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `daily_consumption_calibration`: Calibrates the daily_consumption value (absolute offset), takes into effect on next report of device. The value must be a number.

* `flow_rate_precision`: Number of digits after decimal point for flow_rate, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `flow_rate_calibration`: Calibrates the flow_rate value (absolute offset), takes into effect on next report of device. The value must be a number.

* `reverse_water_consumed_precision`: Number of digits after decimal point for reverse_water_consumed, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `reverse_water_consumed_calibration`: Calibrates the reverse_water_consumed value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Water consumed (numeric)
Total water consumption.
Value can be found in the published state on the `water_consumed` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m³`.

### Month consumption (numeric)
Monthly water consumption.
Value can be found in the published state on the `month_consumption` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m³`.

### Daily consumption (numeric)
Daily water consumption.
Value can be found in the published state on the `daily_consumption` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m³`.

### Flow rate (numeric)
Instantaneous flow rate.
Value can be found in the published state on the `flow_rate` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m³/h`.

### Reverse water consumed (numeric)
Reverse water consumption.
Value can be found in the published state on the `reverse_water_consumed` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m³`.

### Report period (enum)
Report period.
Value can be found in the published state on the `report_period` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"report_period": NEW_VALUE}`.
The possible values are: `1h`, `2h`, `3h`, `4h`, `6h`, `8h`, `12h`, `24h`.

### Meter id (text)
Meter identification number.
Value can be found in the published state on the `meter_id` property.
It's not possible to read (`/get`) or write (`/set`) this value.

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

### Fault (enum)
Fault status.
Value can be found in the published state on the `fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `no_fault`, `battery_alarm`, `magnetism_alarm`, `cover_alarm`, `credit_alarm`, `switch_gaps_alarm`, `meter_body_alarm`, `abnormal_water_alarm`, `arrearage_alarm`, `overflow_alarm`, `revflow_alarm`, `over_pre_alarm`, `empty_pipe_alarm`, `transducer_alarm`.

