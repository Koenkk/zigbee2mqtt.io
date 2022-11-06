---
title: "TuYa TYZS1L control via MQTT"
description: "Integrate your TuYa TYZS1L via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-07-20T23:08:11Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TuYa TYZS1L

|     |     |
|-----|-----|
| Model | TYZS1L  |
| Vendor  | TuYa  |
| Description | Led strip controller HSB |
| Exposes | light (state, color_hs), linkquality |
| Picture | ![TuYa TYZS1L](https://www.zigbee2mqtt.io/images/devices/TYZS1L.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Limitations
This device has various limitations:
- Changing brightness is not supported
- On/off and color transition is not supported
- Color can only be set via hue/saturation, example payload `{"color":{"h": 360, "s": 100}}`.
<!-- Notes END: Do not edit below this line -->


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `color_sync`: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be `true` or `false`


## Exposes

### Light 
This light supports the following features: `state`, `color_hs`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `color_hs`: To control the hue/saturation (color) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color": {"hue": HUE, "saturation": SATURATION}}` (e.g. `{"color":{"hue":360,"saturation":100}}`). To read the hue/saturation send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color":{"hue":"","saturation":""}}`. Alternatively it is possible to set the hue/saturation via:
  - HSB space (hue, saturation, brightness): `{"color": {"h": H, "s": S, "b": B}}` e.g. `{"color":{"h":360,"s":100,"b":100}}` or `{"color": {"hsb": "H,S,B"}}` e.g. `{"color":{"hsb":"360,100,100"}}`
  - HSV space (hue, saturation, brightness):`{"color": {"h": H, "s": S, "v": V}}` e.g. `{"color":{"h":360,"s":100,"v":100}}` or `{"color": {"hsv": "H,S,V"}}` e.g. `{"color":{"hsv":"360,100,100"}}`
  - HSL space (hue, saturation, lightness)`{"color": {"h": H, "s": S, "l": L}}` e.g. `{"color":{"h":360,"s":100,"l":100}}` or `{"color": {"hsl": "H,S,L"}}` e.g. `{"color":{"hsl":"360,100,100"}}`

#### Moving/stepping
Instead of setting a value (e.g. brightness) directly it is also possible to:
- move: this will automatically move the value over time, to stop send value `stop` or `0`.
- step: this will increment/decrement the current value by the given one.

The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up.
To do this send a payload like below to `zigbee2mqtt/FRIENDLY_NAME/set`
````js
{
  "hue_move": 40, // Starts moving hue up at 40 units per second, will endlessly loop (allowed value range: -255 till 255)
  "hue_step": -90, // Decrease hue by 90 (allowed value range: -255 till 255)
  "saturation_move": -55, // Starts moving saturation down at -55 units per second (allowed value range: -255 till 255)
  "saturation_step": 66, // Increase saturation by 66 (allowed value range: -255 till 255)
}
````

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

