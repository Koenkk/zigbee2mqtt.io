---
title: "Tongou TO-Q-SYS-JZT control via MQTT"
description: "Integrate your Tongou TO-Q-SYS-JZT via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-04-01T18:30:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tongou TO-Q-SYS-JZT

|     |     |
|-----|-----|
| Model | TO-Q-SYS-JZT  |
| Vendor  | [Tongou](/supported-devices/#v=Tongou)  |
| Description | Din rail smart meter |
| Exposes | switch (state), power, current, voltage, energy, ac_frequency, power_factor, temperature, event, over_current_setting, over_current_threshold, over_voltage_setting, over_voltage_threshold, under_voltage_setting, under_voltage_threshold, temperature_setting, temperature_threshold, over_power_setting, over_power_threshold, test1, test5 |
| Picture | ![Tongou TO-Q-SYS-JZT](https://www.zigbee2mqtt.io/images/devices/TO-Q-SYS-JZT.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `ac_frequency_calibration`: Calibrates the ac_frequency value (absolute offset), takes into effect on next report of device. The value must be a number.

* `ac_frequency_precision`: Number of digits after decimal point for ac_frequency, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

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
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### AC frequency (numeric)
Measured electrical AC frequency.
Value can be found in the published state on the `ac_frequency` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `Hz`.

### Power factor (numeric)
Instantaneous measured power factor.
Value can be found in the published state on the `power_factor` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Temperature (numeric)
Current temperature.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Event (enum)
Last event of the device.
Value can be found in the published state on the `event` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `normal`, `over_current_trip`, `over_power_trip`, `high_temp_trip`, `over_voltage_trip`, `under_voltage_trip`, `over_current_alarm`, `over_power_alarm`, `high_temp_alarm`, `over_voltage_alarm`, `under_voltage_alarm`, `remote_on`, `remote_off`, `manual_on`, `manual_off`, `leakage_trip`, `leakage_alarm`, `restore_default`, `automatic_closing`, `electricity_shortage`, `electricity_shortage_alarm`, `timing_switch_On`, `timing_switch_off`.

### Over current setting (enum)
Over current setting.
Value can be found in the published state on the `over_current_setting` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_current_setting": NEW_VALUE}`.
The possible values are: `Ignore`, `Alarm`, `Trip`.

### Over current threshold (numeric)
Setup the value on the device.
Value can be found in the published state on the `over_current_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_current_threshold": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `50`.
The unit of this value is `A`.

### Over voltage setting (enum)
Over voltage setting.
Value can be found in the published state on the `over_voltage_setting` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_voltage_setting": NEW_VALUE}`.
The possible values are: `Ignore`, `Alarm`, `Trip`.

### Over voltage threshold (numeric)
Setup value on the device.
Value can be found in the published state on the `over_voltage_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_voltage_threshold": NEW_VALUE}`.
The minimal value is `240` and the maximum value is `295`.
The unit of this value is `V`.

### Under voltage setting (enum)
Under voltage setting.
Value can be found in the published state on the `under_voltage_setting` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"under_voltage_setting": NEW_VALUE}`.
The possible values are: `Ignore`, `Alarm`, `Trip`.

### Under voltage threshold (numeric)
Setup value on the device.
Value can be found in the published state on the `under_voltage_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"under_voltage_threshold": NEW_VALUE}`.
The minimal value is `90` and the maximum value is `220`.
The unit of this value is `V`.

### Temperature setting (enum)
Temperature setting.
Value can be found in the published state on the `temperature_setting` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setting": NEW_VALUE}`.
The possible values are: `Ignore`, `Alarm`, `Trip`.

### Temperature threshold (numeric)
Setup value on the device.
Value can be found in the published state on the `temperature_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_threshold": NEW_VALUE}`.
The minimal value is `-25` and the maximum value is `80`.
The unit of this value is `°C`.

### Over power setting (enum)
Over power setting.
Value can be found in the published state on the `over_power_setting` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_power_setting": NEW_VALUE}`.
The possible values are: `Ignore`, `Alarm`, `Trip`.

### Over power threshold (numeric)
Setup value on the device.
Value can be found in the published state on the `over_power_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_power_threshold": NEW_VALUE}`.
The minimal value is `1000` and the maximum value is `26000`.
The unit of this value is `W`.

### Test1 (numeric)
Value can be found in the published state on the `test1` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Test5 (numeric)
Value can be found in the published state on the `test5` property.
It's not possible to read (`/get`) or write (`/set`) this value.

