---
title: "Halo Smart Labs HALO+ control via MQTT"
description: "Integrate your Halo Smart Labs HALO+ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-03-31T19:04:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Halo Smart Labs HALO+

|     |     |
|-----|-----|
| Model | HALO+  |
| Vendor  | [Halo Smart Labs](/supported-devices/#v=Halo%20Smart%20Labs)  |
| Description | Halo+ smart smoke & CO detector with weather radio |
| Exposes | smoke, carbon_monoxide, tamper, battery_low, test, mains_power_connected, halo_alert_state, room, halo_test_result, test_in_progress, halo_hush_state, hush_active, hush, test_cycle, co_ppm, light (state, brightness, color_hs), battery, voltage, temperature, humidity, pressure, weather_alert, current_weather_alert, weather_alerts_interest, weather_location, weather_station, weather_frequency, weather_playing_state, weather_playback |
| Picture | ![Halo Smart Labs HALO+](https://www.zigbee2mqtt.io/images/devices/HALO+.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `pressure_calibration`: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.

* `pressure_precision`: Number of digits after decimal point for pressure, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `color_sync`: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be `true` or `false`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Carbon monoxide (binary)
Indicates if CO (carbon monoxide) is detected.
Value can be found in the published state on the `carbon_monoxide` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` carbon monoxide is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Test (binary)
Indicates whether the device is being tested.
Value can be found in the published state on the `test` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` test is ON, if `false` OFF.

### Mains power connected (binary)
Indicates whether mains power is currently available.
Value can be found in the published state on the `mains_power_connected` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` mains power connected is ON, if `false` OFF.

### Halo alert state (enum)
Device state reported by the manufacturer cluster.
Value can be found in the published state on the `halo_alert_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `safe`, `pre_smoke`, `smoke`, `carbon_monoxide`, `weather`, `interconnect_smoke`, `interconnect_carbon_monoxide`, `silenced`, `low_battery`, `very_low_battery`, `failed_battery`, `end_of_life`, `other`, `co_test`, `smoke_test`.

### Room (enum)
Spoken room name used in Halo announcements.
Value can be found in the published state on the `room` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"room": NEW_VALUE}`.
The possible values are: `none`, `basement`, `bedroom`, `den`, `dining_room`, `downstairs`, `entryway`, `family_room`, `game_room`, `guest_bedroom`, `hallway`, `kids_bedroom`, `living_room`, `master_bedroom`, `office`, `study`, `upstairs`, `workout_room`.

### Halo test result (enum)
Result of the most recent self-test.
Value can be found in the published state on the `halo_test_result` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `idle`, `running`, `success`, `fail_ion`, `fail_photo`, `fail_co`, `fail_temperature`, `fail_weather`, `fail_other`.

### Test in progress (binary)
Indicates whether a test is running.
Value can be found in the published state on the `test_in_progress` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` test in progress is ON, if `false` OFF.

### Halo hush state (enum)
Current hush status.
Value can be found in the published state on the `halo_hush_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `ready`, `success`, `timeout`, `disabled`.

### Hush active (binary)
Indicates whether the alarm is hushed.
Value can be found in the published state on the `hush_active` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` hush active is ON, if `false` OFF.

### Hush (enum)
Start or cancel hush mode.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"hush": NEW_VALUE}`.
The possible values are: `start`, `stop`.

### Test cycle (enum)
Start or cancel the built-in test.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"test_cycle": NEW_VALUE}`.
The possible values are: `start`, `cancel`.

### Co ppm (numeric)
Current CO concentration reported by the detector.
Value can be found in the published state on the `co_ppm` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ppm`.

### Light (light endpoint)
This light supports the following features: `state`, `brightness`, `color_hs`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_light": "ON"}`, `{"state_light": "OFF"}` or `{"state_light": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_light": ""}`.
                
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_light": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness_light": ""}`.
                
- `color_hs`: To control the hue/saturation (color) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_light": {"hue": HUE, "saturation": SATURATION}}` (e.g. `{"color":{"hue":360,"saturation":100}}`). To read the hue/saturation send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color_light":{"hue":"","saturation":""}}`. Alternatively it is possible to set the hue/saturation via:
                
  - HSB space (hue, saturation, brightness): `{"color": {"h": H, "s": S, "b": B}}` e.g. `{"color":{"h":360,"s":100,"b":100}}` or `{"color": {"hsb": "H,S,B"}}` e.g. `{"color":{"hsb":"360,100,100"}}`
  - HSV space (hue, saturation, value):`{"color": {"h": H, "s": S, "v": V}}` e.g. `{"color":{"h":360,"s":100,"v":100}}` or `{"color": {"hsv": "H,S,V"}}` e.g. `{"color":{"hsv":"360,100,100"}}`
  - HSL space (hue, saturation, lightness)`{"color": {"h": H, "s": S, "l": L}}` e.g. `{"color":{"h":360,"s":100,"l":100}}` or `{"color": {"hsl": "H,S,L"}}` e.g. `{"color":{"hsl":"360,100,100"}}`

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the light will not answer to other on with timed off commands.
Support depends on the light firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

#### Transition
For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property `transition` to the payload which is the transition time in seconds.
Examples: `{"brightness":156,"transition":3}`, `{"color_temp":241,"transition":1}`.

#### Moving/stepping
Instead of setting a value (e.g. brightness) directly it is also possible to:
- move: this will automatically move the value over time, to stop send value `stop` or `0`.
- step: this will increment/decrement the current value by the given one.

The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up.
To do this send a payload like below to `zigbee2mqtt/FRIENDLY_NAME/set`

**NOTE**: brightness move/step will stop at the minimum brightness and won't turn on the light when it's off. In this case use `brightness_move_onoff`/`brightness_step_onoff`
```js
{
  "brightness_move": -40, // Starts moving brightness down at 40 units per second
  "brightness_move": 0, // Stop moving brightness
  "brightness_step": 40 // Increases brightness by 40
  "hue_move": 40, // Starts moving hue up at 40 units per second, will endlessly loop (allowed value range: -255 till 255)
  "hue_step": -90, // Decrease hue by 90 (allowed value range: -255 till 255)
  "saturation_move": -55, // Starts moving saturation down at -55 units per second (allowed value range: -255 till 255)
  "saturation_step": 66, // Increase saturation by 66 (allowed value range: -255 till 255)
}
````

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Reported battery voltage in millivolts.
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `mV`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Pressure (numeric)
The measured atmospheric pressure.
Value can be found in the published state on the `pressure` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pressure": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kPa`.

### Weather alert (binary)
Indicates an active NOAA/SAME weather alert.
Value can be found in the published state on the `weather_alert` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` weather alert is ON, if `false` OFF.

### Current weather alert (enum)
Current NOAA/SAME event code reported by the detector.
Value can be found in the published state on the `current_weather_alert` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `NONE`, `AVA`, `AVW`, `BZW`, `CFA`, `CFW`, `DSW`, `EQW`, `FFA`, `FFS`, `FFW`, `FLA`, `FLS`, `FLW`, `FRW`, `FSW`, `FZW`, `HLS`, `HUA`, `HUW`, `HWA`, `HWW`, `SPS`, `SVA`, `SVR`, `SVS`, `TOA`, `TOR`, `TRA`, `TRW`, `TSA`, `TSW`, `VOW`, `WSA`, `WSW`, `ADR`, `NIC`, `NMN`, `CAE`, `LAE`, `TOE`, `DMO`, `NAT`, `NPT`, `NST`, `RMT`, `RWT`, `CDW`, `CEM`, `EAN`, `EAT`, `EVI`, `HMW`, `NUW`, `RHW`, `SPW`, `LEW`, `SMW`, `??S`, `??M`, `??E`, `??A`, `??W`, `BHW`, `BWW`, `CHW`, `CWW`, `DBA`, `DBW`, `DEW`, `EVA`, `FCW`, `IBW`, `IFW`, `LSW`, `POS`, `WFA`, `WFW`, `EWW`, `SSA`, `SSW`, `UNKNOWN`.

### Weather alerts interest (list)
NOAA/SAME event codes that should trigger the Halo+ speaker.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weather_alerts_interest": ["NONE", "AVA", "AVW", "BZW", "CFA", "CFW", "DSW", "EQW", "FFA", "FFS", "FFW", "FLA", "FLS", "FLW", "FRW", "FSW", "FZW", "HLS", "HUA", "HUW", "HWA", "HWW", "SPS", "SVA", "SVR", "SVS", "TOA", "TOR", "TRA", "TRW", "TSA", "TSW", "VOW", "WSA", "WSW", "ADR", "NIC", "NMN", "CAE", "LAE", "TOE", "DMO", "NAT", "NPT", "NST", "RMT", "RWT", "CDW", "CEM", "EAN", "EAT", "EVI", "HMW", "NUW", "RHW", "SPW", "LEW", "SMW", "??S", "??M", "??E", "??A", "??W", "BHW", "BWW", "CHW", "CWW", "DBA", "DBW", "DEW", "EVA", "FCW", "IBW", "IFW", "LSW", "POS", "WFA", "WFW", "EWW", "SSA", "SSW"]}`

### Weather location (text)
SAME location code (000000-999999) announced by the weather radio.
Value can be found in the published state on the `weather_location` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weather_location": NEW_VALUE}`.

### Weather station (numeric)
Weather radio preset (1-7).
Value can be found in the published state on the `weather_station` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weather_station": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `7`.

### Weather frequency (text)
Frequency of the selected weather radio preset.
Value can be found in the published state on the `weather_frequency` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Weather playing state (enum)
Current playback state of the weather radio.
Value can be found in the published state on the `weather_playing_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `quiet`, `playing`.

### Weather playback (enum)
Start or stop the weather radio audio.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weather_playback": NEW_VALUE}`.
The possible values are: `play`, `stop`.

