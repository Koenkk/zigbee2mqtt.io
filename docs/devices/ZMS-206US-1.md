---
title: "Zemismart ZMS-206US-1 control via MQTT"
description: "Integrate your Zemismart ZMS-206US-1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-08-01T15:19:08
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Zemismart ZMS-206US-1

|     |     |
|-----|-----|
| Model | ZMS-206US-1  |
| Vendor  | [Zemismart](/supported-devices/#v=Zemismart)  |
| Description | Smart screen switch 1 gang |
| Exposes | backlight_mode, switch (state), backlight_brightness, child_lock, switch_color_on, switch_color_off, indicator_status, delay_off_schedule, name, relay_status, countdown |
| Picture | ![Zemismart ZMS-206US-1](https://www.zigbee2mqtt.io/images/devices/ZMS-206US-1.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Backlight mode (binary)
Mode of the backlight.
Value can be found in the published state on the `backlight_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_mode": NEW_VALUE}`.
If value equals `ON` backlight mode is ON, if `OFF` OFF.

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Backlight brightness (numeric)
Brightness of the light.
Value can be found in the published state on the `backlight_brightness` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_brightness": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Switch color on (enum)
Switch lightcolor when on.
Value can be found in the published state on the `switch_color_on` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_color_on": NEW_VALUE}`.
The possible values are: `red`, `blue`, `green`, `white`, `yellow`, `magenta`, `cyan`, `warm_white`, `warm_yellow`.

### Switch color off (enum)
Switch lightcolor when off.
Value can be found in the published state on the `switch_color_off` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_color_off": NEW_VALUE}`.
The possible values are: `red`, `blue`, `green`, `white`, `yellow`, `magenta`, `cyan`, `warm_white`, `warm_yellow`.

### Indicator status (enum)
Indicator Light Status.
Value can be found in the published state on the `indicator_status` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_status": NEW_VALUE}`.
The possible values are: `off`, `on_off_status`, `switch_position`.

### Delay off schedule (enum)
Switch lightcolor while delayed.
Value can be found in the published state on the `delay_off_schedule` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"delay_off_schedule": NEW_VALUE}`.
The possible values are: `red`, `blue`, `green`, `white`, `yellow`, `magenta`, `cyan`, `warm_white`, `warm_yellow`.

### Name (text)
Name for switch.
Value can be found in the published state on the `name` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"name": NEW_VALUE}`.

### Relay status (enum)
Relay status for switch.
Value can be found in the published state on the `relay_status` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"relay_status": NEW_VALUE}`.
The possible values are: `power_on`, `power_off`, `restart_memory`.

### Countdown (numeric)
Countdown for switch 1.
Value can be found in the published state on the `countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

