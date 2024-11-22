---
title: "Siglis ZFP-1A-CH control via MQTT"
description: "Integrate your Siglis ZFP-1A-CH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-06-01T15:08:55
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Siglis ZFP-1A-CH

|     |     |
|-----|-----|
| Model | ZFP-1A-CH  |
| Vendor  | [Siglis](/supported-devices/#v=Siglis)  |
| Description | zigfred plus smart in-wall switch |
| Exposes | action, linkquality |
| Picture | ![Siglis ZFP-1A-CH](https://www.zigbee2mqtt.io/images/devices/ZFP-1A-CH.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `front_surface_enabled`: Front Surface LED enabled. The value must be one of `auto`, `true`, `false`

* `dimmer_1_enabled`: Dimmer 1 enabled. The value must be one of `auto`, `true`, `false`

* `dimmer_1_dimming_enabled`: Dimmer 1 dimmable. The value must be one of `auto`, `true`, `false`

* `dimmer_2_enabled`: Dimmer 2 enabled. The value must be one of `auto`, `true`, `false`

* `dimmer_2_dimming_enabled`: Dimmer 2 dimmable. The value must be one of `auto`, `true`, `false`

* `dimmer_3_enabled`: Dimmer 3 enabled. The value must be one of `auto`, `true`, `false`

* `dimmer_3_dimming_enabled`: Dimmer 3 dimmable. The value must be one of `auto`, `true`, `false`

* `dimmer_4_enabled`: Dimmer 4 enabled. The value must be one of `auto`, `true`, `false`

* `dimmer_4_dimming_enabled`: Dimmer 4 dimmable. The value must be one of `auto`, `true`, `false`

* `cover_1_enabled`: Cover 1 enabled. The value must be one of `auto`, `true`, `false`

* `cover_1_tilt_enabled`: Cover 1 tiltable. The value must be one of `auto`, `true`, `false`

* `cover_2_enabled`: Cover 2 enabled. The value must be one of `auto`, `true`, `false`

* `cover_2_tilt_enabled`: Cover 2 tiltable. The value must be one of `auto`, `true`, `false`

* `color_sync`: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be `true` or `false`

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`


## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `button_1_single`, `button_1_double`, `button_1_hold`, `button_1_release`, `button_2_single`, `button_2_double`, `button_2_hold`, `button_2_release`, `button_3_single`, `button_3_double`, `button_3_hold`, `button_3_release`, `button_4_single`, `button_4_double`, `button_4_hold`, `button_4_release`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

