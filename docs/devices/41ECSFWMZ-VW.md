---
title: "Schneider Electric 41ECSFWMZ-VW control via MQTT"
description: "Integrate your Schneider Electric 41ECSFWMZ-VW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-01-31T20:08:01
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Schneider Electric 41ECSFWMZ-VW

|     |     |
|-----|-----|
| Model | 41ECSFWMZ-VW  |
| Vendor  | [Schneider Electric](/supported-devices/#v=Schneider%20Electric)  |
| Description | Wiser 40/300-Series Module AC Fan Controller |
| Exposes | fan (state, mode), indicator_mode, indicator_orientation, linkquality |
| Picture | ![Schneider Electric 41ECSFWMZ-VW](https://www.zigbee2mqtt.io/images/devices/41ECSFWMZ-VW.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Fan 
The current state of this fan is in the published state under the `fan_state` property (value is `ON` or `OFF`).
To control this fan publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fan_state": "ON"}` or `{"fan_state": "OFF"}`.
To read the current state of this fan publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"fan_state": ""}`.
To change the mode publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fan_mode": VALUE}` where `VALUE` can be: `off`, `low`, `medium`, `high`, `on`.

### Indicator mode (enum)
Set Indicator Mode..
Value can be found in the published state on the `indicator_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"indicator_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_mode": NEW_VALUE}`.
The possible values are: `always_on`, `on_with_timeout_but_as_locator`, `on_with_timeout`.

### Indicator orientation (enum)
Set Indicator Orientation..
Value can be found in the published state on the `indicator_orientation` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"indicator_orientation": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_orientation": NEW_VALUE}`.
The possible values are: `horizontal_left`, `horizontal_right`, `vertical_top`, `vertical_bottom`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

