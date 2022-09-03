---
title: "Mercator SSWF01G control via MQTT"
description: "Integrate your Mercator Ikuu SSWF01G via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-09-02T12:41:00
pageClass: device-page
---


# Mercator SSWF01G

|     |     |
|-----|-----|
| Model | SSWF01G  |
| Vendor  | Mercator  |
| Description | Ikuü AC Fan Controller |
| Exposes | switch (state), fan (fan_state,fan_mode), linkquality |
| Picture | ![Mercator SPP04G](https://www.zigbee2mqtt.io/images/devices/SSWF01G.jpg) |



## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_left": "ON"}`, `{"state_left": "OFF"}` or `{"state_left": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Fan
The current state of this fan is in the published state under the fan_state property (value is ON or OFF). 
To control this fan publish a message to topic zigbee2mqtt/FRIENDLY_NAME/set with payload {"fan_state": "ON"} or {"fan_state": "OFF"}. 
To read the current state of this fan publish a message to topic zigbee2mqtt/FRIENDLY_NAME/get with payload {"fan_state": ""}. 
To change the mode publish a message to topic zigbee2mqtt/FRIENDLY_NAME/set with payload {"fan_mode": VALUE} where VALUE can be: off, low, medium, high, on

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

