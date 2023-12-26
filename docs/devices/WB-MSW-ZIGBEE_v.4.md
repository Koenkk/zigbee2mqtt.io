---
title: "Sprut.device WB-MSW-ZIGBEE v.4 control via MQTT"
description: "Integrate your Sprut.device WB-MSW-ZIGBEE v.4 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-08-01T15:09:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sprut.device WB-MSW-ZIGBEE v.4

|     |     |
|-----|-----|
| Model | WB-MSW-ZIGBEE v.4  |
| Vendor  | [Sprut.device](/supported-devices/#v=Sprut.device)  |
| Description | Wall-mounted Zigbee sensor |
| Exposes | temperature, illuminance, illuminance_lux, humidity, occupancy, occupancy_level, co2, voc, noise, noise_detected, switch (state), noise_timeout, occupancy_timeout, temperature_offset, occupancy_sensitivity, noise_detect_level, linkquality |
| Picture | ![Sprut.device WB-MSW-ZIGBEE v.4](https://www.zigbee2mqtt.io/images/devices/WB-MSW-ZIGBEE-v.4.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Description
Wiren Board WB-MSW v.4 — hybrid digital sensor of temperature, humidity, illumination, noise, CO2 and VOC level. It is equipped with the IR blaster (and the receiver for learning). Designed for climate control in residential and office premises.

### Configuring IR
The sensor contains 80 banks for storing IR commands. Training takes place through the built-in IR receiver.

By publishing to `zigbee2mqtt/FRIENDLY_NAME/set` various device attributes can be configured.

#### Start learn to ROM
Request:

```json
{
    "learn_start": {
        "rom":0
    }
}
```
* `rom`: Memory cell number (from 0 to 79)

#### Stop learn to ROM
Request:
```json
{
    "learn_stop": {
        "rom":0
    }
}
```
* `rom`: Memory cell number (from 0 to 79)

#### Play from ROM
Request:
```json
{
    "play_store": {
        "rom":0
    }
}
```
* `rom`: Memory cell number (from 0 to 79)

#### Clear all ROM's
Request:

```json
{
    "clear_store": {}
}
```

#### Start learn to RAM
Request:

```json
{
    "learn_start": {
        "rom":0
    }
}
```

#### Stop learn to RAM
Request:
```json
{
    "learn_ram_stop": {}
}
```

#### Play from RAM
Request:
```json
{
    "play_ram": {}
}
```
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `illuminance_lux_calibration`: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be send after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of [object Object].

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Illuminance (numeric)
Raw measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Illuminance (lux) (numeric)
Measured illuminance in lux.
Value can be found in the published state on the `illuminance_lux` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Occupancy level (numeric)
The measured occupancy value.
Value can be found in the published state on the `occupancy_level` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### CO2 (numeric)
The measured CO2 (carbon dioxide) value.
Value can be found in the published state on the `co2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ppm`.

### VOC (numeric)
Measured VOC value.
Value can be found in the published state on the `voc` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `µg/m³`.

### Noise (numeric)
The measured noise value.
Value can be found in the published state on the `noise` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `dBA`.

### Noise detected (binary)
Indicates whether the device detected noise.
Value can be found in the published state on the `noise_detected` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` noise detected is ON, if `false` OFF.

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionnaly an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depend on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l2": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionnaly an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depend on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (l3 endpoint)
The current state of this switch is in the published state under the `state_l3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l3": "ON"}`, `{"state_l3": "OFF"}` or `{"state_l3": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l3": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionnaly an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depend on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Noise timeout (numeric)
Time in seconds after which noise is cleared after detecting it (default: 60).
Value can be found in the published state on the `noise_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"noise_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"noise_timeout": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `2000`.
The unit of this value is `s`.

### Occupancy timeout (numeric)
Time in seconds after which occupancy is cleared after detecting it (default: 60).
Value can be found in the published state on the `occupancy_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupancy_timeout": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `2000`.
The unit of this value is `s`.

### Temperature offset (numeric)
Self-heating compensation. The compensation value is subtracted from the measured temperature (default: 0).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_offset": NEW_VALUE}`.
The minimal value is `-10` and the maximum value is `10`.
The unit of this value is `°C`.

### Occupancy sensitivity (numeric)
If the sensor is triggered by the slightest movement, reduce the sensitivity, otherwise increase it (default: 50).
Value can be found in the published state on the `occupancy_sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupancy_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `2000`.

### Noise detect level (numeric)
The minimum noise level at which the detector will work (default: 50).
Value can be found in the published state on the `noise_detect_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"noise_detect_level": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"noise_detect_level": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `150`.
The unit of this value is `dBA`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

