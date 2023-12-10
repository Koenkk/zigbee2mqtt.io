---
title: "Schneider Electric CCTFR6100Z3 control via MQTT"
description: "Integrate your Schneider Electric CCTFR6100Z3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-08-26T06:45:18
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Schneider Electric CCTFR6100Z3

|     |     |
|-----|-----|
| Model | CCTFR6100Z3  |
| Vendor  | [Schneider Electric](/supported-devices/#v=Schneider%20Electric)  |
| Description | Wiser radiator thermostat |
| Exposes | climate (occupied_heating_setpoint, local_temperature, running_state, pi_heating_demand), linkquality |
| Picture | ![Schneider Electric CCTFR6100Z3](https://www.zigbee2mqtt.io/images/devices/CCTFR6100Z3.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
Note that the device's firmware will slowly turn off the valve as the set-point temperature is reached to prevent temperature overshoot.
The valve position changes dynamically depending upon set and actual position; it's not a simple on/off device.

### Factory Reset Device
Twist the control dial to + and hold for 10 secs until a solid Red LED is shown. The valve will fully open.
Once factory reset has completed, a solid Yellow LED is shown and the Red / Blue LEDs will flash continuously indicating the device is in the factory delivered state.

### Initial Device Setup
* Insert batteries paying attention to the polarity. A solid Yellow LED will be shown and the Red / Blue LEDs will flash continuously indicating the device is in the factory delivered state.
* Twist the control dial to + and hold for 4 secs until a solid Green LED is shown indicating the device is in binding mode. Once binding is complete, a solid Green LED will show and the and the Red / Blue LEDs will flash continuously.
* Perform 'thermostatic head calibration' - see below.

### Thermostatic Head Calibration
At any time after initial setup, ideally each time after removing and refitting the valve, the endpoint (off) valve position should be set.
* Twist the control dial to - and hold until the a solid blue LED is shown. All LEDs will extinguish after calibration is complete.


<!-- Notes END: Do not edit below this line -->


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


## Exposes

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `running_state`, `pi_heating_demand`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `7` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `pi_heating_demand`: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pi_heating_demand": VALUE}` where `VALUE` is the % between `0` and `100`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

