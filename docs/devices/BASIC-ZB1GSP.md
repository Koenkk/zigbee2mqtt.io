---
title: "SONOFF BASIC-ZB1GSP control via MQTT"
description: "Integrate your SONOFF BASIC-ZB1GSP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-04-30T19:57:28
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF BASIC-ZB1GSP

|     |     |
|-----|-----|
| Model | BASIC-ZB1GSP  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee smart plug with power monitoring |
| Exposes | switch (state), power_on_behavior, inching_control_set, network_indicator, power, current, voltage, total_energy_consumption, energy_today, energy_month, energy_yesterday, outlet_control_protect, ac_current_max_overload_enable, ac_current_max_overload, ac_voltage_max_overload_enable, ac_voltage_max_overload, ac_power_max_overload_enable, ac_power_max_overload, consumption_records, consumption_records_dst, read_consumption_records, clear_history |
| Picture | ![SONOFF BASIC-ZB1GSP](https://www.zigbee2mqtt.io/images/devices/BASIC-ZB1GSP.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

### Inching control set (composite)
Device Inching function Settings. The device will automatically turn off (turn on) after each turn on (turn off) for a specified period of time..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"inching_control_set": {"inching_control": VALUE, "inching_time": VALUE, "inching_mode": VALUE}}`
- `inching_control` (binary): Enable/disable inching function. allowed values: `ENABLE` or `DISABLE`
- `inching_time` (numeric): Delay time for executing a inching action. min value is 0.5, max value is 3599.5, unit is seconds
- `inching_mode` (binary): Set inching off or inching on mode. allowed values: `ON` or `OFF`

### Network indicator (binary)
Network indicator settings, turn off/on the blue online status network indicator..
Value can be found in the published state on the `network_indicator` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"network_indicator": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"network_indicator": NEW_VALUE}`.
If value equals `true` network indicator is ON, if `false` OFF.

### Power (numeric)
Active power.
Value can be found in the published state on the `power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Current (numeric)
Current.
Value can be found in the published state on the `current` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric)
Voltage.
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### Total energy consumption (numeric)
CurrentSummationDelivered.
Value can be found in the published state on the `total_energy_consumption` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"total_energy_consumption": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy today (numeric)
Electricity consumption for the day.
Value can be found in the published state on the `energy_today` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_today": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy month (numeric)
Electricity consumption for the month.
Value can be found in the published state on the `energy_month` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_month": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy yesterday (numeric)
Electricity consumption for the yesterday.
Value can be found in the published state on the `energy_yesterday` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_yesterday": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Outlet control protect (binary)
Outlet overload protection Settings.
Value can be found in the published state on the `outlet_control_protect` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"outlet_control_protect": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"outlet_control_protect": NEW_VALUE}`.
If value equals `true` outlet control protect is ON, if `false` OFF.

### Ac current max overload enable (binary)
AC current overload protection enable.
Value can be found in the published state on the `ac_current_max_overload_enable` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ac_current_max_overload_enable": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ac_current_max_overload_enable": NEW_VALUE}`.
If value equals `ON` ac current max overload enable is ON, if `OFF` OFF.

### Ac current max overload (numeric)
AC current overload threshold.
Value can be found in the published state on the `ac_current_max_overload` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ac_current_max_overload": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ac_current_max_overload": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `32`.
The unit of this value is `A`.

### Ac voltage max overload enable (binary)
AC voltage overload protection enable.
Value can be found in the published state on the `ac_voltage_max_overload_enable` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ac_voltage_max_overload_enable": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ac_voltage_max_overload_enable": NEW_VALUE}`.
If value equals `ON` ac voltage max overload enable is ON, if `OFF` OFF.

### Ac voltage max overload (numeric)
AC voltage overload threshold (runtime validated by detected supply band).
Value can be found in the published state on the `ac_voltage_max_overload` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ac_voltage_max_overload": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ac_voltage_max_overload": NEW_VALUE}`.
The minimal value is `85` and the maximum value is `277`.
The unit of this value is `V`.

### Ac power max overload enable (binary)
AC power overload protection enable.
Value can be found in the published state on the `ac_power_max_overload_enable` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ac_power_max_overload_enable": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ac_power_max_overload_enable": NEW_VALUE}`.
If value equals `ON` ac power max overload enable is ON, if `OFF` OFF.

### Ac power max overload (numeric)
AC power overload threshold (runtime validated by detected supply band).
Value can be found in the published state on the `ac_power_max_overload` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ac_power_max_overload": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ac_power_max_overload": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `7680`.
The unit of this value is `W`.

### Consumption records (text)
Value can be found in the published state on the `consumption_records` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Consumption records dst (text)
Value can be found in the published state on the `consumption_records_dst` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Read consumption records (composite)
Read power-consumption history records (24h / monthly days / halfyear months)..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"read_consumption_records": {"type": VALUE, "index": VALUE, "offset": VALUE}}`
- `type` (enum): Record type: get24Hours, get30Days or get180Days. allowed values: `get24Hours`, `get30Days`, `get180Days`
- `index` (numeric): Block index: 24h => 0/1/240(DST), 30d => 0/1, 180d => 0. For 24h/30d, index=0 auto-fetches block 0+1. max value is 240
- `offset` (numeric): Offset: 24h => 0..6(days), 30d => 0..5(months), 180d => 0. max value is 6

### Clear history (enum)
Clear historical electricity data..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"clear_history": NEW_VALUE}`.
The possible values are: `clear`.

