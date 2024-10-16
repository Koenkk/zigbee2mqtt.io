---
title: "Hive SLR2 control via MQTT"
description: "Integrate your Hive SLR2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-11-01T12:47:02Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Hive SLR2

|     |     |
|-----|-----|
| Model | SLR2  |
| Vendor  | [Hive](/supported-devices/#v=Hive)  |
| Description | Dual channel heating and hot water receiver |
| Exposes | climate (occupied_heating_setpoint, local_temperature, system_mode, running_state), temperature_setpoint_hold, temperature_setpoint_hold_duration, linkquality |
| Picture | ![Hive SLR2](https://www.zigbee2mqtt.io/images/devices/SLR2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing

To pair the receiver with Zigbee2MQTT, follow these steps:

1. Temporarily disconnect any thermostat controllers connected to the receiver by removing a battery from them.
2. Turn the receiver and boiler off, then on again to ensure it is not trying to connect to any thermostat controllers.
3. Once the receiver and boiler are on, hold down the Central heating button on the device until the Central heating'light turns white/ pink, then release the button. This will enable stand-alone mode on the receiver.
4. Hold down the central heating button again until the Central heating light begins to flash amber. The device is now in pairing mode and should be found by Zigbee2MQTT.
5. You can now re-insert the battery back into any thermostat controllers disconnected in step 1 and pair them to the receiver (and optionally Zigbee2MQTT). For information on pairing the thermostat controllers see the pairing instructions for the [Hive SLT3B](./SLT3.md). Note that the receiver's Central heating light will remain amber until a thermostat controller is paired with the receiver, however the receiver will still function correctly.


### Sending payloads on dual channel receivers
As the receiver makes use of two endpoints, `water` and `heat` there are two methods of sending payloads, both equally valid. For example, the `heat` endpoint:

Topic `zigbee2mqtt/FRIENDLY_NAME/set`
```js
{
    "system_mode_heat":"heat"
}
```

Topic `zigbee2mqtt/FRIENDLY_NAME/heat/set`
```json
{
    "system_mode":"heat"
}
```

Notice that `heat` must be part of either the topic or the attribute. With that in mind, adjust the commands in this documentation based on your preferred style.

### How to start/edit native boost (heat endpoint)
The receiver has support for native Boost, which will allow to display the remaining time on a compatible remote.

To start one, or modify an already active one, send the following payload to the topic `zigbee2mqtt/FRIENDLY_NAME/set`:

```js
{
   "system_mode_heat":"emergency_heating",
   "temperature_setpoint_hold_duration_heat":30,  // Replace with desired duration in minutes. Max 360. 0 to stop
   "temperature_setpoint_hold_heat":1,
   "occupied_heating_setpoint_heat":18  // Replace with desired temperature. Between 5 and 32 C
}
```
Note: For device timing reasons, the payload needs to be sent as one single command. Sending individual commands or settings attributes manually using the Frontend will not work.

Also, the native boost can be used as a method to pause the heating too. To do so, set the temperature to a low value.

### Set heating mode to ON (heat endpoint)
Send the following payload to the topic `zigbee2mqtt/FRIENDLY_NAME/set`:
```js
{
   "system_mode_heat":"heat",
   "temperature_setpoint_hold_heat":1,
   "occupied_heating_setpoint_heat":20 // Replace with desired temperature. Between 5 and 32 C
}
```
Note: You will also notice that `temperature_setpoint_hold_duration_heat` automatically changes to `65535` which means `undefined` (indefinite).

This will also stop any native boosts that are currently active.


### Set heating mode to OFF (heat endpoint)
Send the following payload to the topic `zigbee2mqtt/FRIENDLY_NAME/set`:
```js
{
   "system_mode_heat":"off",
   "temperature_setpoint_hold_heat":0
}
```
Note: You will also notice that `temperature_setpoint_hold_duration_heat` automatically changes to `0` which means `not set`. `occupied_heating_setpoint_heat` automatically changes to `1` degree C.

This will also stop any native boosts that are currently active.

### How to start/edit native boost (water endpoint)
The receiver has support for native Boost, which will allow to display the remaining time on a compatible remote.

To start one, or modify an already active one, send the following payload to the topic `zigbee2mqtt/FRIENDLY_NAME/set`:

```js
{
   "system_mode_water":"emergency_heating",
   "temperature_setpoint_hold_duration_water":30,  // Replace with desired duration in minutes. Max 360. 0 to stop
   "temperature_setpoint_hold_water":1
}
```
Note: For device timing reasons, the payload needs to be sent as one single command. Sending individual commands or settings attributes manually using the Frontend will not work.

### Set heating mode to ON (water endpoint)
Send the following payload to the topic `zigbee2mqtt/FRIENDLY_NAME/set`:
```js
{
   "system_mode_water":"heat",
   "temperature_setpoint_hold_water":1
}
```
Note: You will also notice that `temperature_setpoint_hold_duration_heat` automatically changes to `65535` which means `undefined` (indefinite).

This will also stop any native boosts that are currently active.


### Set heating mode to OFF (water endpoint)
Send the following payload to the topic `zigbee2mqtt/FRIENDLY_NAME/set`:
```js
{
   "system_mode_water":"off",
   "temperature_setpoint_hold_water":0
}
```
Note: You will also notice that `temperature_setpoint_hold_duration_heat` automatically changes to `0` which means `not set`.

This will also stop any native boosts that are currently active.

### Local and occupied temperature (water endpoint)
The water endpoint functions as what could be considered an on/off switch based on `system_mode_water`. Because of that, the device uses fixed values for temperature. `local_temperature_water` is always 21 and `occupied_heating_setpoint_water` is always 22.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Climate (heat endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_heat": VALUE}` where `VALUE` is the °C between `5` and `32`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_heat": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_heat": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_heat": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_heat": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_heat": ""}`.

### Temperature setpoint hold (binary, heat endpoint)
Prevent changes. `false` = run normally. `true` = prevent from making changes. Must be set to `false` when system_mode = off or `true` for heat.
Value can be found in the published state on the `temperature_setpoint_hold_heat` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold_heat": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold_heat": NEW_VALUE}`.
If value equals `true` temperature setpoint hold is ON, if `false` OFF.

### Temperature setpoint hold duration (numeric, heat endpoint)
Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display.
Value can be found in the published state on the `temperature_setpoint_hold_duration_heat` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold_duration_heat": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold_duration_heat": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.

### Climate (water endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_water": VALUE}` where `VALUE` is the °C between `22` and `22`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_water": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_water": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_water": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`, `emergency_heating`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_water": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_water": ""}`.

### Temperature setpoint hold (binary, water endpoint)
Prevent changes. `false` = run normally. `true` = prevent from making changes. Must be set to `false` when system_mode = off or `true` for heat.
Value can be found in the published state on the `temperature_setpoint_hold_water` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold_water": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold_water": NEW_VALUE}`.
If value equals `true` temperature setpoint hold is ON, if `false` OFF.

### Temperature setpoint hold duration (numeric, water endpoint)
Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display.
Value can be found in the published state on the `temperature_setpoint_hold_duration_water` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold_duration_water": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold_duration_water": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

