---
title: "Custom devices (DiY) ZigUP control via MQTT"
description: "Integrate your Custom devices (DiY) ZigUP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Custom devices (DiY) ZigUP

|     |     |
|-----|-----|
| Model | ZigUP  |
| Vendor  | Custom devices (DiY)  |
| Description | [CC2530 based ZigBee relais, switch, sensor and router](https://github.com/formtapez/ZigUP/) |
| Exposes | switch (state), linkquality |
| Picture | ![Custom devices (DiY) ZigUP](https://psi-4ward.github.io/zigbee2mqtt.io/images/devices/ZigUP.jpg) |


## Notes

None



## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

