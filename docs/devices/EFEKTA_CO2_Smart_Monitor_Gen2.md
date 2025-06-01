---
title: "EFEKTA EFEKTA_CO2_Smart_Monitor_Gen2 control via MQTT"
description: "Integrate your EFEKTA EFEKTA_CO2_Smart_Monitor_Gen2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-06-01T17:54:42
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EFEKTA EFEKTA_CO2_Smart_Monitor_Gen2

|     |     |
|-----|-----|
| Model | EFEKTA_CO2_Smart_Monitor_Gen2  |
| Vendor  | [EFEKTA](/supported-devices/#v=EFEKTA)  |
| Description | CO2, illuminance Smart Monitor, rgb indicator, binding, control the relays |
| Exposes | identify, co2, temperature, humidity, illuminance, lifetime, lux_factor, light (state, brightness), night_onoff_backlight, night_on_backlight, night_off_backlight, reading_interval, set_altitude, temperature_offset, humidity_offset, automatic_calibrations, forced_recalibration, factory_reset_co2, manual_forced_recalibration, invert_logic_onoff, enable_co2_gas, high_co2_gas, low_co2_gas |
| Picture | ![EFEKTA EFEKTA_CO2_Smart_Monitor_Gen2](https://www.zigbee2mqtt.io/images/devices/EFEKTA_CO2_Smart_Monitor_Gen2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `co2_calibration`: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `illuminance_raw`: Expose the raw illuminance value. The value must be `true` or `false`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### CO2 (numeric)
Measured value.
Value can be found in the published state on the `co2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ppm`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Lifetime (numeric)
Uptime.
Value can be found in the published state on the `lifetime` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `Hours`.

### Lux factor (numeric)
Lux factor.
Value can be found in the published state on the `lux_factor` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lux_factor": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.

### Light 
This light supports the following features: `state`, `brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.

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
}
````

### Night onoff backlight (binary)
Complete shutdown of the backlight at night mode.
Value can be found in the published state on the `night_onoff_backlight` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_onoff_backlight": NEW_VALUE}`.
If value equals `ON` night onoff backlight is ON, if `OFF` OFF.

### Night on backlight (numeric)
Night mode activation time.
Value can be found in the published state on the `night_on_backlight` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_on_backlight": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `23`.
The unit of this value is `Hr`.

### Night off backlight (numeric)
Night mode deactivation time.
Value can be found in the published state on the `night_off_backlight` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_off_backlight": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `23`.
The unit of this value is `Hr`.

### Reading interval (numeric)
Setting the sensor reading interval..
Value can be found in the published state on the `reading_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reading_interval": NEW_VALUE}`.
The minimal value is `15` and the maximum value is `300`.
The unit of this value is `seconds`.

### Set altitude (numeric)
Setting the altitude above sea level (for high accuracy of the CO2 sensor).
Value can be found in the published state on the `set_altitude` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"set_altitude": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3000`.
The unit of this value is `meters`.

### Temperature offset (numeric)
Adjust temperature.
Value can be found in the published state on the `temperature_offset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_offset": NEW_VALUE}`.
The minimal value is `-10` and the maximum value is `10`.
The unit of this value is `°C`.

### Humidity offset (numeric)
Adjust humidity.
Value can be found in the published state on the `humidity_offset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_offset": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `%`.

### Automatic calibrations (binary)
Automatic calibration of the CO2 sensor.
Value can be found in the published state on the `automatic_calibrations` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"automatic_calibrations": NEW_VALUE}`.
If value equals `ON` automatic calibrations is ON, if `OFF` OFF.

### Forced recalibration (binary)
Start FRC (Perform Forced Recalibration of the CO2 Sensor).
Value can be found in the published state on the `forced_recalibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"forced_recalibration": NEW_VALUE}`.
If value equals `ON` forced recalibration is ON, if `OFF` OFF.

### Factory reset co2 (binary)
Factory Reset CO2 sensor.
Value can be found in the published state on the `factory_reset_co2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"factory_reset_co2": NEW_VALUE}`.
If value equals `ON` factory reset co2 is ON, if `OFF` OFF.

### Manual forced recalibration (numeric)
Start Manual FRC (Perform Forced Recalibration of the CO2 Sensor).
Value can be found in the published state on the `manual_forced_recalibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_forced_recalibration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5000`.
The unit of this value is `ppm`.

### Invert logic onoff (binary)
Enable invert logic onoff.
Value can be found in the published state on the `invert_logic_onoff` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"invert_logic_onoff": NEW_VALUE}`.
If value equals `ON` invert logic onoff is ON, if `OFF` OFF.

### Enable co2 gas (binary)
Enable CO2 Gas Control.
Value can be found in the published state on the `enable_co2_gas` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_co2_gas": NEW_VALUE}`.
If value equals `ON` enable co2 gas is ON, if `OFF` OFF.

### High co2 gas (numeric)
Setting High CO2 Gas Border.
Value can be found in the published state on the `high_co2_gas` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_co2_gas": NEW_VALUE}`.
The minimal value is `400` and the maximum value is `5000`.
The unit of this value is `ppm`.

### Low co2 gas (numeric)
Setting Low CO2 Gas Border.
Value can be found in the published state on the `low_co2_gas` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_co2_gas": NEW_VALUE}`.
The minimal value is `400` and the maximum value is `5000`.
The unit of this value is `ppm`.

