---
title: "Schneider Electric CCTFR6700 control via MQTT"
description: "Integrate your Schneider Electric CCTFR6700 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-05-25T17:59:46Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Schneider Electric CCTFR6700

|     |     |
|-----|-----|
| Model | CCTFR6700  |
| Vendor  | [Schneider Electric](/supported-devices/#v=Schneider%20Electric)  |
| Description | Heating thermostat |
| Exposes | power, energy, schneider_pilot_mode, climate (occupied_heating_setpoint, local_temperature, system_mode, pi_heating_demand), linkquality |
| Picture | ![Schneider Electric CCTFR6700](https://www.zigbee2mqtt.io/images/devices/CCTFR6700.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Device info
This device is a thermostat to drive an electric heater.
It supports two modes:
- Contactor mode, that switches the heater power supply on and off
- Pilot mode, for compatible heaters

### Pairing and configuring
After pairing the device requires:
- the pilot mode to be configured (Contactor/Pilot)
- an external temperature measurement, either through a bind from a sensor, or report from the coordinator through automation. The temperature must be refreshed at least every 10mn
- the target thermostat set point

### Local temperature
In order to provide external temperature measurement from the coordinator through automation, can be set by publishing a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_measured_value": VALUE}` where `VALUE` is the temperature eg: `18`.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Schneider pilot mode (enum)
Controls piloting mode.
Value can be found in the published state on the `schneider_pilot_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"schneider_pilot_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schneider_pilot_mode": NEW_VALUE}`.
The possible values are: `contactor`, `pilot`.

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `pi_heating_demand`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `4` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `pi_heating_demand`: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pi_heating_demand": VALUE}` where `VALUE` is the % between `0` and `100`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

