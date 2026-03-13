---
title: "Tuya TS0601_heat_meter control via MQTT"
description: "Integrate your Tuya TS0601_heat_meter via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-02-28T20:18:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_heat_meter

|     |     |
|-----|-----|
| Model | TS0601_heat_meter  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Ultrasonic heat meter |
| Exposes | water_consumed, monthly_water_consumption, daily_water_consumption, report_period, fault, prepayment_switch, cumulative_heat, meter_id, instantaneous_flow_rate, inlet_water_temperature, outlet_water_temperature, voltage |
| Picture | ![Tuya TS0601_heat_meter](https://www.zigbee2mqtt.io/images/devices/TS0601_heat_meter.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `cumulative_flow_precision`: Number of digits after decimal point for cumulative_flow, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `cumulative_flow_calibration`: Calibrates the cumulative_flow value (absolute offset), takes into effect on next report of device. The value must be a number.

* `monthly_water_consumption_precision`: Number of digits after decimal point for monthly_water_consumption, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `monthly_water_consumption_calibration`: Calibrates the monthly_water_consumption value (absolute offset), takes into effect on next report of device. The value must be a number.

* `daily_water_consumption_precision`: Number of digits after decimal point for daily_water_consumption, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `daily_water_consumption_calibration`: Calibrates the daily_water_consumption value (absolute offset), takes into effect on next report of device. The value must be a number.

* `instantaneous_flow_rate_precision`: Number of digits after decimal point for instantaneous_flow_rate, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `instantaneous_flow_rate_calibration`: Calibrates the instantaneous_flow_rate value (absolute offset), takes into effect on next report of device. The value must be a number.

* `cumulative_heat_precision`: Number of digits after decimal point for cumulative_heat, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `cumulative_heat_calibration`: Calibrates the cumulative_heat value (absolute offset), takes into effect on next report of device. The value must be a number.

* `inlet_water_temperature_precision`: Number of digits after decimal point for inlet_water_temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `inlet_water_temperature_calibration`: Calibrates the inlet_water_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `outlet_water_temperature_precision`: Number of digits after decimal point for outlet_water_temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `outlet_water_temperature_calibration`: Calibrates the outlet_water_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (absolute offset), takes into effect on next report of device. The value must be a number.

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Water consumed (numeric)
Total water consumption.
Value can be found in the published state on the `water_consumed` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m³`.

### Monthly water consumption (numeric)
Monthly water consumption.
Value can be found in the published state on the `monthly_water_consumption` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m³`.

### Daily water consumption (numeric)
Daily water consumption.
Value can be found in the published state on the `daily_water_consumption` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m³`.

### Report period (enum)
Report period.
Value can be found in the published state on the `report_period` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"report_period": NEW_VALUE}`.
The possible values are: `1h`, `2h`, `3h`, `4h`, `6h`, `8h`, `12h`, `24h`, `48h`, `72h`.

### Fault (text)
Alarm event status.
Value can be found in the published state on the `fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Prepayment switch (binary)
Cumulative metering switch.
Value can be found in the published state on the `prepayment_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"prepayment_switch": NEW_VALUE}`.
If value equals `ON` prepayment switch is ON, if `OFF` OFF.

### Cumulative heat (numeric)
Cumulative heat.
Value can be found in the published state on the `cumulative_heat` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Meter id (text)
Meter identification number.
Value can be found in the published state on the `meter_id` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Instantaneous flow rate (numeric)
Instantaneous flow rate.
Value can be found in the published state on the `instantaneous_flow_rate` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m³/h`.

### Inlet water temperature (numeric)
Inlet water temperature.
Value can be found in the published state on the `inlet_water_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Outlet water temperature (numeric)
Outlet water temperature.
Value can be found in the published state on the `outlet_water_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Voltage (numeric)
Power supply voltage.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

