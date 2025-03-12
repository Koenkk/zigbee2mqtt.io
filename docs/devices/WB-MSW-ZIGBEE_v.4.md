---
title: "Wirenboard WB-MSW-ZIGBEE v.4 control via MQTT"
description: "Integrate your Wirenboard WB-MSW-ZIGBEE v.4 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-08-01T15:09:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Wirenboard WB-MSW-ZIGBEE v.4

|     |     |
|-----|-----|
| Model | WB-MSW-ZIGBEE v.4  |
| Vendor  | [Wirenboard](/supported-devices/#v=Wirenboard)  |
| Description | Wall-mounted multi sensor |
| Exposes | switch (state), activity_led, uart_connection, temperature, temperature_offset, humidity, th_heater, co2, illuminance, occupancy, occupancy_sensitivity, occupancy_level, occupancy_timeout, noise, noise_detect_level, noise_detected, noise_timeout, voc, uart_baud_rate |
| Picture | ![Wirenboard WB-MSW-ZIGBEE v.4](https://www.zigbee2mqtt.io/images/devices/WB-MSW-ZIGBEE-v.4.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Description
Wiren Board WB-MSW v.4 — hybrid digital sensor of motion, temperature, humidity, illumination, noise, CO2 and VOC level. It is equipped with the IR blaster (and the receiver for learning). Designed for climate control in residential and office premises.

### Switch endpoints
The device allways exposes 3 on/off endpoints named `l1`, `l2` and `l3`. Frist two of them only work if illuminannce + IR blaster addon is installed. Their finctuons as follows:
- `l1` – controls blinking red led
- `l2` – controls blinking green led
- `l3` – controlls buzzer

Warning, the installed buzzer is very loud.

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

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `co2_calibration`: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voc_calibration`: Calibrates the voc value (absolute offset), takes into effect on next report of device. The value must be a number.

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`

* `illuminance_raw`: Expose the raw illuminance value. The value must be `true` or `false`

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be send after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of [object Object].


## Exposes

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l2": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (l3 endpoint)
The current state of this switch is in the published state under the `state_l3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l3": "ON"}`, `{"state_l3": "OFF"}` or `{"state_l3": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l3": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Activity led (binary, indicator endpoint)
Controls green activity LED.
Value can be found in the published state on the `activity_led_indicator` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"activity_led_indicator": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"activity_led_indicator": NEW_VALUE}`.
If value equals `true` activity led is ON, if `false` OFF.

### Uart connection (binary)
Indicates whether the device is communicating with sensors via UART.
Value can be found in the published state on the `uart_connection` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"uart_connection": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` uart connection is ON, if `false` OFF.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Temperature offset (numeric)
Self-heating compensation. The compensation value is subtracted from the measured temperature (default: 0).
Value can be found in the published state on the `temperature_offset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_offset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_offset": NEW_VALUE}`.
The minimal value is `-10` and the maximum value is `10`.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Th heater (binary)
Turn on when working in conditions of high humidity (more than 70 %, RH) or condensation, if the sensor shows 0 or 100 %..
Value can be found in the published state on the `th_heater` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"th_heater": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"th_heater": NEW_VALUE}`.
If value equals `true` th heater is ON, if `false` OFF.

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

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Occupancy sensitivity (numeric)
If the sensor is triggered by the slightest movement, reduce the sensitivity, otherwise increase it (default: 50).
Value can be found in the published state on the `occupancy_sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupancy_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `2000`.

### Occupancy level (numeric)
Measured occupancy level.
Value can be found in the published state on the `occupancy_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_level": ""}`.
It's not possible to write (`/set`) this value.

### Occupancy timeout (numeric)
Time in seconds after which occupancy is cleared after detecting it (default: 60).
Value can be found in the published state on the `occupancy_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupancy_timeout": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `2000`.
The unit of this value is `s`.

### Noise (numeric)
Measured noise level.
Value can be found in the published state on the `noise` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"noise": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `dBA`.

### Noise detect level (numeric)
The minimum noise level at which the detector will work (default: 50).
Value can be found in the published state on the `noise_detect_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"noise_detect_level": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"noise_detect_level": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `150`.
The unit of this value is `dBA`.

### Noise detected (binary)
Indicates whether the device detected noise.
Value can be found in the published state on the `noise_detected` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"noise_detected": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` noise detected is ON, if `false` OFF.

### Noise timeout (numeric)
Time in seconds after which noise is cleared after detecting it (default: 60).
Value can be found in the published state on the `noise_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"noise_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"noise_timeout": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `2000`.
The unit of this value is `s`.

### VOC (numeric)
Measured VOC level.
Value can be found in the published state on the `voc` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voc": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `µg/m³`.

### Uart baud rate (enum)
UART baud rate.
Value can be found in the published state on the `uart_baud_rate` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"uart_baud_rate": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"uart_baud_rate": NEW_VALUE}`.
The possible values are: `9600`, `19200`, `38400`, `57600`, `115200`.

