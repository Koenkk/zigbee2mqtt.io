---
title: "eCozy 1TST-EU control via MQTT"
description: "Integrate your eCozy 1TST-EU via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# eCozy 1TST-EU

|     |     |
|-----|-----|
| Model | 1TST-EU  |
| Vendor  | [eCozy](/supported-devices/#v=eCozy)  |
| Description | Smart heating thermostat |
| Exposes | battery, climate (occupied_heating_setpoint, local_temperature, system_mode, running_state, local_temperature_calibration, pi_heating_demand), linkquality |
| Picture | ![eCozy 1TST-EU](https://www.zigbee2mqtt.io/images/devices/1TST-EU.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Controlling
Get local temperature in degrees Celsius (in the range 0x954d to 0x7fff, i.e. -273.15°C to 327.67 ºC)
```json
{
    "local_temperature": ""
}
```

Get or set offset added to/subtracted from the actual displayed room temperature to NUMBER, in steps of 0.1°C
```js
{
    "local_temperature_calibration": "NUMBER"       // Possible values: –2.5 to +2.5; leave empty to read
}
```

Set temperature display mode
```js
{
    "temperature_display_mode": ""      // Possible values: 0 to set °C or 1 so set °F
}
```

Get room occupancy. Specifies whether the heated/cooled space is occupied or not. If 1, the space is occupied,
else it is unoccupied.
```json
{
    "thermostat_occupancy": ""
}
```

Get or set occupied heating setpoint to NUMBER in degrees Celsius.
```js
{
    "occupied_heating_setpoint": "NUMBER"       // Possible values: MinHeatSetpointLimit to  MaxHeatSetpointLimit, i.e. 7 to 30 by default; leave empty to read
}
```

Get or set unoccupied heating setpoint to NUMBER in degrees Celsius
```js
{
    "unoccupied_heating_setpoint": "NUMBER"       // Possible values: MinHeatSetpointLimit to MaxHeatSetpointLimit, i.e. 7 to 30 by default; leave empty to read
}
```

Increase or decrease heating setpoint by NUMBER degrees in °C.
```js
{
    "setpoint_raise_lower": {
    "mode": "0x00",       // Possible values: see table below
    "amount": "NUMBER"    // Possible values: signed 8-bit integer that specifies the amount the setpoint(s) are to be increased (or decreased) by, in steps of 0.1°C
    }
}
```

Attribute Value | Description
----------------|-----------------------------------------------
0x00            | Heat (adjust Heat Setpoint)
0x01            | Cool (adjust Cool Setpoint)
0x02            | Both (adjust Heat Setpoint and Cool Setpoint)

Get or set whether the local temperature, outdoor temperature and occupancy are being sensed by internal sensors or remote networked sensors
```js
{
    "remote_sensing": "NUMBER"      // Possible values: see table below; leave empty to read
}
```

Bit Number | Description
-----------|-----------------------------------------
0          | 0 – local temperature sensed internally <br> 1 – local temperature sensed remotely
1          | 0 – outdoor temperature sensed internally <br> 1 – outdoor temperature sensed remotely
2          | 0 – occupancy sensed internally <br> 1 – occupancy sensed remotely

Get or set control sequence of operation
```js
{
    "control_sequence_of_operation": "VALUE"       // Possible values: see table below; leave empty to read
}
```

Values                                    | Possible Values of SystemMode
------------------------------------------|-------------------------------------
`cooling only`                            | Heat and Emergency are not possible
`cooling with reheat`                     | Heat and Emergency are not possible
`heating only`                            | Cool and precooling are not possible
`heating with reheat`                     | Cool and precooling are not possible
`cooling and heating 4-pipes`             | All modes are possible
`cooling and heating 4-pipes with reheat` | All modes are possible

Get or set system mode
```js
{
    "system_mode": "VALUE"       // Possible values: see table below; leave empty to read
}
```

Values              |
--------------------|
`off`               |
`auto`              |
`cool`              |
`heat`              |
`emergency heating` |
`precooling`        |
`fan_only`          |
`dry`               |
`sleep`             |

Get running state
```js
{
    "running_state": ""       // leave empty when reading
}
```
Possible values:

Values |
-------|
`off`  |
`cool` |
`heat` |

Valve position / heating demand
```
{
    "pi_heating_demand": 0       // leave empty when reading
}
```
Will report the valve position or heating amount depending on device. 0=min, 255=max

Get or set weekly schedule
```js
{
    "weekly_schedule": {
    "TemperatureSetpointHold": "0x00",                // 0x00 setpoint hold off or 0x01 on
    "TemperatureSetpointHoldDuration": "0xffff",      // 0xffff to 0x05a0
    "ThermostatProgrammingOperationMode": "00xxxxxx"  //see table below
    }                                                   // leave empty to read
}
```

Attribute Value | Description
----------------|---------------------------------------------------------------------------
0               | 0 – Simple/setpoint mode. This mode means the thermostat setpoint is altered only by manual up/down changes at the thermostat or remotely, not by internal schedule programming. <br> 1 – Schedule programming mode. This enables or disables any programmed weekly schedule configurations. <br> Note: It does not clear or delete previous weekly schedule programming configurations.
1               | 0 - Auto/recovery mode set to OFF <br> 1 – Auto/recovery mode set to ON
2               | 0 – Economy/EnergyStar mode set to OFF <br> 1 – Economy/EnergyStar mode set to ON

Clear weekly schedule
```json
{
    "clear_weekly_schedule": ""
}
```
<!--
Coming soon:
Get weekly schedule response
tz.thermostat_weekly_schedule_rsp
Get relay status log
tz.thermostat_relay_status_log
Get relay status log response
tz.thermostat_relay_status_log_rsp
-->
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`, `local_temperature_calibration`, `pi_heating_demand`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `7` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `pi_heating_demand`: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pi_heating_demand": VALUE}` where `VALUE` is the % between `0` and `100`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pi_heating_demand": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.The minimal value is `-12.8` and the maximum value is `12.7` with a step size of `0.1`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

