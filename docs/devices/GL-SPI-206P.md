---
title: "Gledopto GL-SPI-206P control via MQTT"
description: "Integrate your Gledopto GL-SPI-206P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-08-27T14:37:38Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Gledopto GL-SPI-206P

|     |     |
|-----|-----|
| Model | GL-SPI-206P  |
| Vendor  | [Gledopto](/supported-devices/#v=Gledopto)  |
| Description | SPI pixel controller RGBCCT/RGBW/RGB |
| Exposes | light (state, color_hs), brightness, color_temp, scene, music_mode, music_sensitivity, countdown, do_not_disturb, light_bead_sequence, chip_type, lightpixel_number_set, work_mode |
| Picture | ![Gledopto GL-SPI-206P](https://www.zigbee2mqtt.io/images/devices/GL-SPI-206P.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
# Button Functions

**Opt:**

1. **Short press:** Turn lights on/off.
2. **Double short press:** Cycle through lighting dynamic effects (Total 24 dynamicmodes).
   **Triple short press:** Toggle power-on memory function, the connected strip3.fashes once to confrm.(Default is memory off. The power-on memoryfunction determines whether the controller remembers its on/off statebefore power loss).
3. **Long press:** Reset the controller-clear Wi-Fi network and RF remotepairing and return to initial factory settings. (indication: strip flashes fivetimes, then the status LED blinks).Initial settings are:
   1.Chip type: WS2811;2.Color order: RGB; 3. Number of chips: 60.

**Push:**

1. **Short press:** Turn lights on/off.2.Double short press: Cycle through lighting dynamic effects (Total 24 dynamicmodes).
2. **Long press:** Adjust brightness (holding increases brightness; after release,holding again decreases brightness).

# Supported chips

| Chip model     | Compatible chip models                                       |
| -------------- | ------------------------------------------------------------ |
| WS2801         | WS2803                                                       |
| LPD6803        | LPD1101,D705,UCS6909,UCS6912                                 |
| LPD8803        | LPD8806                                                      |
| TM1809         | TM1804,TM1812,UCS1903,UCS1909,UCS1912,SK6813,UCS2903,UCS2909,UCS2912,WS2811,WS2812,WS2813,WS2815,SM16703P,GS8206 |
| TM1814B(RGBW)  |                                                              |
| TM1934A        |                                                              |
| SK6812(RGBW)   | UCS2904(RGBW),SM16704(RGBW)                                  |
| SK9822         |                                                              |
| UCS2904B(RGBW) |                                                              |
| UCS8904B(RGBW) |                                                              |

# Indicator Light Status

**Flashing:** Not Connected to Network

**Steady On:** Connected to Network
<!-- Notes END: Do not edit below this line -->




## Exposes

### Light 
This light supports the following features: `state`, `color_hs`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `color_hs`: To control the hue/saturation (color) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color": {"hue": HUE, "saturation": SATURATION}}` (e.g. `{"color":{"hue":360,"saturation":100}}`). To read the hue/saturation send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color":{"hue":"","saturation":""}}`. Alternatively it is possible to set the hue/saturation via:
  - HSB space (hue, saturation, brightness): `{"color": {"h": H, "s": S, "b": B}}` e.g. `{"color":{"h":360,"s":100,"b":100}}` or `{"color": {"hsb": "H,S,B"}}` e.g. `{"color":{"hsb":"360,100,100"}}`
  - HSV space (hue, saturation, value):`{"color": {"h": H, "s": S, "v": V}}` e.g. `{"color":{"h":360,"s":100,"v":100}}` or `{"color": {"hsv": "H,S,V"}}` e.g. `{"color":{"hsv":"360,100,100"}}`
  - HSL space (hue, saturation, lightness)`{"color": {"h": H, "s": S, "l": L}}` e.g. `{"color":{"h":360,"s":100,"l":100}}` or `{"color": {"hsl": "H,S,L"}}` e.g. `{"color":{"hsl":"360,100,100"}}`

### Brightness (numeric)
Value can be found in the published state on the `brightness` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1000`.

### Color temp (numeric)
Color temperature (0=warm, 1000=cold).
Value can be found in the published state on the `color_temp` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_temp": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1000`.

### Scene (enum)
Scenes selection.
Value can be found in the published state on the `scene` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene": NEW_VALUE}`.
The possible values are: `ice_land_blue`, `glacier_express`, `sea_of_clouds`, `fireworks_at_sea`, `firefly_night`, `grass_land`, `northern_lights`, `late_autumn`, `game`, `holiday`, `party`, `trend`, `meditation`, `dating`, `valentines_day`, `neon_world`.

### Music mode (enum)
Local music.
Value can be found in the published state on the `music_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"music_mode": NEW_VALUE}`.
The possible values are: `rock`, `jazz`, `classic`, `rolling`, `energy`, `spectrum`.

### Music sensitivity (numeric)
Music rhythm sensitivity (1-100).
Value can be found in the published state on the `music_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"music_sensitivity": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `100`.

### Countdown (numeric)
Countdown to turn device off after a certain time.
Value can be found in the published state on the `countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Do not disturb (binary)
Value can be found in the published state on the `do_not_disturb` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"do_not_disturb": NEW_VALUE}`.
If value equals `ON` do not disturb is ON, if `OFF` OFF.

### Light bead sequence (enum)
Value can be found in the published state on the `light_bead_sequence` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_bead_sequence": NEW_VALUE}`.
The possible values are: `RGB`, `RBG`, `GRB`, `GBR`, `BRG`, `BGR`, `RGBW`, `RBGW`, `GRBW`, `GBRW`, `BRGW`, `BGRW`, `WRGB`, `WRBG`, `WGRB`, `WGBR`, `WBRG`, `WBGR`.

### Chip type (enum)
Value can be found in the published state on the `chip_type` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"chip_type": NEW_VALUE}`.
The possible values are: `WS2801`, `LPD6803`, `LPD8803`, `WS2811`, `TM1814B`, `TM1934A`, `SK6812`, `SK9822`, `UCS8904B`, `WS2805`.

### Lightpixel number set (numeric)
Value can be found in the published state on the `lightpixel_number_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lightpixel_number_set": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `1000`.

### Work mode (enum)
Value can be found in the published state on the `work_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"work_mode": NEW_VALUE}`.
The possible values are: `white`, `colour`, `scene`, `music`.

