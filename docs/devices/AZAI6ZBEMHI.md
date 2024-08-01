---
title: "Airzone AZAI6ZBEMHI control via MQTT"
description: "Integrate your Airzone AZAI6ZBEMHI via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-06-30T19:12:33
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Airzone AZAI6ZBEMHI

|     |     |
|-----|-----|
| Model | AZAI6ZBEMHI  |
| Vendor  | [Airzone](/supported-devices/#v=Airzone)  |
| Description | Gateway for two-way control and integration of AirCon Units.AZAI6ZBEMHI for Mitsubishi Heavy |
| Exposes | climate (local_temperature, system_mode, fan_mode, occupied_heating_setpoint, occupied_cooling_setpoint), switch (state), linkquality |
| Picture | ![Airzone AZAI6ZBEMHI](https://www.zigbee2mqtt.io/images/devices/AZAI6ZBEMHI.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To put the device in pairing mode, press the Association Button on the front

### Factory reset
Aidoo Zigbee can be reset to the original factory settings by long pressing over the Factoy
Reset button until all of the front side LEDs light up for a second.

### More info
See here for technical info -> https://doc.airzonecloud.com/Documentation/AZ6/AI6/MI_AZAI6ZBE_MUL.pdf?_gl=1*14wx2dy*_gcl_au*MTgzNTcwNDkyMi4xNzE3Nzg3NDM3*_ga*MTUyNzAzMjc0My4xNzE3NjIyNTIx*_ga_DKEBFNDEXJ*MTcxODI5ODI2My44LjEuMTcxODI5ODM0MC4wLjAuMA..
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Climate 
This climate device supports the following features: `local_temperature`, `system_mode`, `fan_mode`, `occupied_heating_setpoint`, `occupied_cooling_setpoint`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `occupied_cooling_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_cooling_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_cooling_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `auto`, `cool`, `heat`, `fan_only`, `dry`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

