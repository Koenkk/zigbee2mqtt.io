---
title: "Slacky-DIY Electricity Meter TLSR8258 control via MQTT"
description: "Integrate your Slacky-DIY Electricity Meter TLSR8258 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-04-01T18:30:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Slacky-DIY Electricity Meter TLSR8258

|     |     |
|-----|-----|
| Model | Electricity Meter TLSR8258  |
| Vendor  | [Slacky-DIY](/supported-devices/#v=Slacky-DIY)  |
| Description | Electricity Meter via optical port |
| Exposes | device_temperature, power, voltage, current, energy, energy_tier_1, energy_tier_2, energy_tier_3, energy_tier_4, model_name, serial_number, date_release, battery_life, tamper, battery_low, device_address_preset, device_password_preset, device_measurement_preset, device_model_preset |
| Picture | ![Slacky-DIY Electricity Meter TLSR8258](https://www.zigbee2mqtt.io/images/devices/Electricity-Meter-TLSR8258.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"device_temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy tier 1 (numeric)
Energy consumed at Tier 1.
Value can be found in the published state on the `energy_tier_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_tier_1": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy tier 2 (numeric)
Energy consumed at Tier 2.
Value can be found in the published state on the `energy_tier_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_tier_2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy tier 3 (numeric)
Energy consumed at Tier 3.
Value can be found in the published state on the `energy_tier_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_tier_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy tier 4 (numeric)
Energy consumed at Tier 4.
Value can be found in the published state on the `energy_tier_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_tier_4": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Model name (text)
Meter Model Name.
Value can be found in the published state on the `model_name` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"model_name": ""}`.
It's not possible to write (`/set`) this value.

### Serial number (text)
Meter Serial Number.
Value can be found in the published state on the `serial_number` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"serial_number": ""}`.
It's not possible to write (`/set`) this value.

### Date release (text)
Meter Date Release.
Value can be found in the published state on the `date_release` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"date_release": ""}`.
It's not possible to write (`/set`) this value.

### Battery life (numeric)
Battery Life.
Value can be found in the published state on the `battery_life` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery_life": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Tamper (binary)
Tamper.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Battery low (binary)
Battery Low.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Device address preset (numeric)
Device Address.
Value can be found in the published state on the `device_address_preset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"device_address_preset": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `9999999`.

### Device password preset (text)
Meter Password.
Value can be found in the published state on the `device_password_preset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"device_password_preset": NEW_VALUE}`.

### Device measurement preset (numeric)
Measurement Period.
Value can be found in the published state on the `device_measurement_preset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"device_measurement_preset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"device_measurement_preset": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Device model preset (enum)
Device Model.
Value can be found in the published state on the `device_model_preset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"device_model_preset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"device_model_preset": NEW_VALUE}`.
The possible values are: `No Device`, `KASKAD-1-MT (MIRTEK)`, `KASKAD-11-C1`, `MERCURY-206`, `ENERGOMERA-CE102M`, `ENERGOMERA-CE208BY`, `NEVA-MT124`, `NARTIS-100`.

