---
title: "MindY Leleka control via MQTT"
description: "Integrate your MindY Leleka via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-04-01T18:30:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# MindY Leleka

|     |     |
|-----|-----|
| Model | Leleka  |
| Vendor  | [MindY](/supported-devices/#v=MindY)  |
| Description | Advanced Environmental Monitoring Device |
| Exposes | last_boot, wifi, ip_address, temperature, humidity, pressure, co2, illuminance, light (state, brightness), identify, read_interval, night_mode, night_on_time, night_off_time, co2_control, co2_invert, co2_level_high, co2_level_low, co2_auto_calibration, co2_forced_recalibration, co2_factory_reset, lux_control, lux_invert, lux_level_high, lux_level_low, offset_illuminance, temperature_sensor, offset_temperature, offset_humidity, offset_pressure |
| Picture | ![MindY Leleka](https://www.zigbee2mqtt.io/images/devices/Leleka.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `last_boot_update`: Interval for request boot datetime from device. (default 60 seconds). The value must be a number with a minimum value of `10`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `pressure_calibration`: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.

* `pressure_precision`: Number of digits after decimal point for pressure, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `co2_calibration`: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`

* `illuminance_raw`: Expose the raw illuminance value. The value must be `true` or `false`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Last boot (text)
Device boot date and time.
Value can be found in the published state on the `last_boot` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"last_boot": ""}`.
It's not possible to write (`/set`) this value.

### Wifi (binary)
Device WiFi state.
Value can be found in the published state on the `wifi` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"wifi": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"wifi": NEW_VALUE}`.
If value equals `ON` wifi is ON, if `OFF` OFF.

### Ip address (text)
Device IP address.
Value can be found in the published state on the `ip_address` property.
It's not possible to read (`/get`) or write (`/set`) this value.

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

### CO2 (numeric)
Measured value.
Value can be found in the published state on the `co2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"co2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `ppm`.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"illuminance": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `lx`.

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
````js
{
  "brightness_move": -40, // Starts moving brightness down at 40 units per second
  "brightness_move": 0, // Stop moving brightness
  "brightness_step": 40 // Increases brightness by 40
}
````

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Read interval (numeric)
Read interval of sensors. Default 30.
Value can be found in the published state on the `read_interval` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"read_interval": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"read_interval": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `600`.
The unit of this value is `seconds`.

### Night mode (binary)
Turn OFF LED at night.
Value can be found in the published state on the `night_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"night_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_mode": NEW_VALUE}`.
If value equals `ON` night mode is ON, if `OFF` OFF.

### Night on time (numeric)
Night mode activation time.
Value can be found in the published state on the `night_on_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"night_on_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_on_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `23`.
The unit of this value is `Hr`.

### Night off time (numeric)
Night mode deactivation time.
Value can be found in the published state on the `night_off_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"night_off_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_off_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `23`.
The unit of this value is `Hr`.

### Co2 control (binary)
Enable CO2 bind-control.
Value can be found in the published state on the `co2_control` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"co2_control": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"co2_control": NEW_VALUE}`.
If value equals `ON` co2 control is ON, if `OFF` OFF.

### Co2 invert (binary)
Invert CO2 control logic.
Value can be found in the published state on the `co2_invert` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"co2_invert": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"co2_invert": NEW_VALUE}`.
If value equals `ON` co2 invert is ON, if `OFF` OFF.

### Co2 level high (numeric)
High CO2 threshold.
Value can be found in the published state on the `co2_level_high` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"co2_level_high": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"co2_level_high": NEW_VALUE}`.
The minimal value is `400` and the maximum value is `2000`.
The unit of this value is `ppm`.

### Co2 level low (numeric)
Low CO2 threshold.
Value can be found in the published state on the `co2_level_low` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"co2_level_low": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"co2_level_low": NEW_VALUE}`.
The minimal value is `400` and the maximum value is `2000`.
The unit of this value is `ppm`.

### Co2 auto calibration (binary)
Automatic self calibration.
Value can be found in the published state on the `co2_auto_calibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"co2_auto_calibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"co2_auto_calibration": NEW_VALUE}`.
If value equals `ON` co2 auto calibration is ON, if `OFF` OFF.

### Co2 forced recalibration (numeric)
Start FRC by setting the value.
Value can be found in the published state on the `co2_forced_recalibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"co2_forced_recalibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"co2_forced_recalibration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5000`.
The unit of this value is `ppm`.

### Co2 factory reset (binary)
Factory Reset CO2 sensor.
Value can be found in the published state on the `co2_factory_reset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"co2_factory_reset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"co2_factory_reset": NEW_VALUE}`.
If value equals `ON` co2 factory reset is ON, if `OFF` OFF.

### Lux control (binary)
Enable illuminance bind-control.
Value can be found in the published state on the `lux_control` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"lux_control": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lux_control": NEW_VALUE}`.
If value equals `ON` lux control is ON, if `OFF` OFF.

### Lux invert (binary)
Invert illuminance control logic.
Value can be found in the published state on the `lux_invert` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"lux_invert": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lux_invert": NEW_VALUE}`.
If value equals `ON` lux invert is ON, if `OFF` OFF.

### Lux level high (numeric)
High illuminance threshold.
Value can be found in the published state on the `lux_level_high` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"lux_level_high": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lux_level_high": NEW_VALUE}`.
The minimal value is `100` and the maximum value is `10000`.
The unit of this value is `lx`.

### Lux level low (numeric)
Low illuminance threshold.
Value can be found in the published state on the `lux_level_low` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"lux_level_low": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lux_level_low": NEW_VALUE}`.
The minimal value is `100` and the maximum value is `10000`.
The unit of this value is `lx`.

### Offset illuminance (numeric)
Adjust illuminance.
Value can be found in the published state on the `offset_illuminance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"offset_illuminance": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"offset_illuminance": NEW_VALUE}`.
The minimal value is `-500` and the maximum value is `500`.
The unit of this value is `lx`.

### Temperature sensor (enum)
Active temperature sensor.
Value can be found in the published state on the `temperature_sensor` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_sensor": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_sensor": NEW_VALUE}`.
The possible values are: `CPU`, `SCD4X`, `BMP280`.

### Offset temperature (numeric)
Adjust temperature.
Value can be found in the published state on the `offset_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"offset_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"offset_temperature": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `°C`.

### Offset humidity (numeric)
Adjust humidity.
Value can be found in the published state on the `offset_humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"offset_humidity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"offset_humidity": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `%`.

### Offset pressure (numeric)
Adjust pressure.
Value can be found in the published state on the `offset_pressure` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"offset_pressure": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"offset_pressure": NEW_VALUE}`.
The minimal value is `-100` and the maximum value is `100`.
The unit of this value is `kPa`.

