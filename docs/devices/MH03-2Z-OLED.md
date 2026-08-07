---
title: "Manhot MH03-2Z-OLED control via MQTT"
description: "Integrate your Manhot MH03-2Z-OLED via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-06-09T18:58:47
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Manhot MH03-2Z-OLED

|     |     |
|-----|-----|
| Model | MH03-2Z-OLED  |
| Vendor  | [Manhot](/supported-devices/#v=Manhot)  |
| Description | OLED Screen Switch 2 Gang |
| Exposes | switch (state), countdown_1, countdown_2, child_lock, backlight_switch, backlight_lightness, displayoff_delay, relay_status, light_mode, on_color, off_color, sw1_name, sw2_name, press_on_fun, press_off_fun |
| Picture | ![Manhot MH03-2Z-OLED](https://www.zigbee2mqtt.io/images/devices/MH03-2Z-OLED.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l2": ""}`.

### Countdown 1 (numeric)
Timer for switch 1.
Value can be found in the published state on the `countdown_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Countdown 2 (numeric)
Timer for switch 2.
Value can be found in the published state on the `countdown_2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Child lock (binary)
Child lock.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `ON` child lock is ON, if `OFF` OFF.

### Backlight switch (binary)
Backlight switch.
Value can be found in the published state on the `backlight_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_switch": NEW_VALUE}`.
If value equals `ON` backlight switch is ON, if `OFF` OFF.

### Backlight lightness (numeric)
Backlight brightness %.
Value can be found in the published state on the `backlight_lightness` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_lightness": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `100`.

### Displayoff delay (numeric)
Screen off delay.
Value can be found in the published state on the `displayoff_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"displayoff_delay": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `180`.
The unit of this value is `s`.

### Relay status (enum)
Power-on state.
Value can be found in the published state on the `relay_status` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"relay_status": NEW_VALUE}`.
The possible values are: `off`, `on`, `memory`.

### Light mode (enum)
Indicator light state.
Value can be found in the published state on the `light_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_mode": NEW_VALUE}`.
The possible values are: `none`, `relay`, `pos`.

### On color (enum)
Light-on color.
Value can be found in the published state on the `on_color` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"on_color": NEW_VALUE}`.
The possible values are: `red`, `orange`, `green`, `cyan`, `blue`, `purple`, `magenta`, `cold_white`, `warm_yellow`.

### Off color (enum)
Light-off color.
Value can be found in the published state on the `off_color` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"off_color": NEW_VALUE}`.
The possible values are: `red`, `orange`, `green`, `cyan`, `blue`, `purple`, `magenta`, `cold_white`, `warm_yellow`.

### Sw1 name (text)
Set switch 1 name.
Value can be found in the published state on the `sw1_name` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sw1_name": NEW_VALUE}`.

### Sw2 name (text)
Set switch 2 name.
Value can be found in the published state on the `sw2_name` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sw2_name": NEW_VALUE}`.

### Press on fun (enum)
Long press all on channel.
Value can be found in the published state on the `press_on_fun` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"press_on_fun": NEW_VALUE}`.
The possible values are: `disable`, `press_switch_1`, `press_switch_2`.

### Press off fun (enum)
Long press all off channel.
Value can be found in the published state on the `press_off_fun` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"press_off_fun": NEW_VALUE}`.
The possible values are: `disable`, `press_switch_1`, `press_switch_2`.

