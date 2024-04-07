---
title: "Hive SLR1b control via MQTT"
description: "Integrate your Hive SLR1b via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-02-04T20:38:05Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Hive SLR1b

|     |     |
|-----|-----|
| Model | SLR1b  |
| Vendor  | [Hive](/supported-devices/#v=Hive)  |
| Description | Heating thermostat |
| Exposes | climate (occupied_heating_setpoint, local_temperature, system_mode, running_state), temperature_setpoint_hold, temperature_setpoint_hold_duration, linkquality |
| Picture | ![Hive SLR1b](https://www.zigbee2mqtt.io/images/devices/SLR1b.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing

To pair the thermostat with Zigbee2MQTT, follow these steps:

1. Temporarily disconnect any thermostat controllers connected to the thermostat by remove a battery from them.
2. Turn the thermostat and boiler off, then on again to ensure it is not trying to connect to any thermostat controllers.
3. Once the thermostat and boiler are on, hold down the Central heating button on the device until the Central heating'light turns white/ pink, then release the button. This will enable stand-alone mode on the thermostat.
4. Hold down the central heating button again until the Central heating light begins to flash amber. The device is now in pairing mode and should be found by Zigbee2MQTT.
5. You can now re-insert the battery back into any thermostat controllers disconnected in step 1 and pair them to the boiler (and optionally Zigbee2MQTT). For information on pairing the thermostat controllers see the pairing instructions for the [Hive SLT3B](./SLT3.md). Note that the thermostat's Central heating light will remain amber until a controller is paired with the thermostat, however the thermostat will still function correctly.


### How to start/edit native boost
The receiver has support for native Boost, which will allow to display the remaining time on a compatible remote.

To start one, or modify an already active one, send the following payload to the topic `zigbee2mqtt/FRIENDLY_NAME/set`:

```js
{
   "system_mode":"emergency_heating",
   "temperature_setpoint_hold_duration":30,  // Replace with desired duration in minutes. Max 360. 0 to stop
   "temperature_setpoint_hold":1,
   "occupied_heating_setpoint":18  // Replace with desired temperature. Between 5 and 32 C
}
```
Note: For device timing reasons, the payload needs to be sent as one single command. Sending individual commands or settings attributes manually using the Frontend will not work.

Also, the native boost can be used as a method to pause the heating too. To do so, set the temperature to a low value.

### Set heating mode to MANUAL
Send the following payload to the topic `zigbee2mqtt/FRIENDLY_NAME/set`:
```js
{
   "system_mode":"heat",
   "temperature_setpoint_hold":1,
   "occupied_heating_setpoint":20 // Replace with desired temperature. Between 5 and 32 C
}
```
Note: You will also notice that `temperature_setpoint_hold_duration` automatically changes to `65535` which means `undefined` (indefinite).

This will also stop any native boosts that are currently active.


### Set heating mode to OFF
Send the following payload to the topic `zigbee2mqtt/FRIENDLY_NAME/set`:
```js
{
   "system_mode":"off",
   "temperature_setpoint_hold":0
}
```
Note: You will also notice that `temperature_setpoint_hold_duration` automatically changes to `0` which means `not set`. `occupied_heating_setpoint` automatically changes to `1` degree C.

This will also stop any native boosts that are currently active.

### Set heating mode to SCHEDULE
Send the following payload to the topic `zigbee2mqtt/FRIENDLY_NAME/set`:
```js
{
   "system_mode":"heat",
   "temperature_setpoint_hold":0
}
```
Note: This will revert any deviation of ```occupied_heating_setpoint``` previously set to what is defined in the schedule of the thermostat.

This will also stop any native boosts that are currently active.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `32`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.

### Temperature setpoint hold (binary)
Prevent changes. `false` = run normally. `true` = prevent from making changes. Must be set to `false` when system_mode = off or `true` for heat.
Value can be found in the published state on the `temperature_setpoint_hold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold": NEW_VALUE}`.
If value equals `true` temperature setpoint hold is ON, if `false` OFF.

### Temperature setpoint hold duration (numeric)
Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display.
Value can be found in the published state on the `temperature_setpoint_hold_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold_duration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

