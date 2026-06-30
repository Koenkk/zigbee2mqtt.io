---
title: "Wiren Board WB-MSW-ZIGBEE_v.4_official control via MQTT"
description: "Integrate your Wiren Board WB-MSW-ZIGBEE_v.4_official via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-06-30T19:08:32
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Wiren Board WB-MSW-ZIGBEE_v.4_official

|     |     |
|-----|-----|
| Model | WB-MSW-ZIGBEE_v.4_official  |
| Vendor  | [Wiren Board](/supported-devices/#v=Wiren%20Board)  |
| Description | Wall-mounted multi sensor with official Wiren Board firmware |
| Exposes | switch (state), illuminance, temperature, humidity, occupancy, co2, noise_level, noise, noise_threshold, noise_timeout, status_led, connectivity, modbus_slave_id, serial_number, fw_version, fw_signature, boot_version, component_version, component_signature, temperature_offset, occupancy_level, occupancy_sensitivity, occupancy_timeout, voc |
| Picture | ![Wiren Board WB-MSW-ZIGBEE_v.4_official](https://www.zigbee2mqtt.io/images/devices/WB-MSW-ZIGBEE_v.4_official.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `co2_calibration`: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.

* `voc_calibration`: Calibrates the voc value (absolute offset), takes into effect on next report of device. The value must be a number.

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`

* `illuminance_raw`: Expose the raw illuminance value. The value must be `true` or `false`

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be sent after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of numbers.


## Exposes

### Switch (buzzer endpoint)
The current state of this switch is in the published state under the `state_buzzer` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_buzzer": "ON"}`, `{"state_buzzer": "OFF"}` or `{"state_buzzer": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_buzzer": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (heater endpoint)
The current state of this switch is in the published state under the `state_heater` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_heater": "ON"}`, `{"state_heater": "OFF"}` or `{"state_heater": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_heater": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (led_red endpoint)
The current state of this switch is in the published state under the `state_led_red` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_led_red": "ON"}`, `{"state_led_red": "OFF"}` or `{"state_led_red": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_led_red": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (led_green endpoint)
The current state of this switch is in the published state under the `state_led_green` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_led_green": "ON"}`, `{"state_led_green": "OFF"}` or `{"state_led_green": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_led_green": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"illuminance": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `lx`.

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

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### CO2 (numeric)
Measured value.
Value can be found in the published state on the `co2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"co2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `ppm`.

### Noise level (numeric)
Current noise level.
Value can be found in the published state on the `noise_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"noise_level": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `dBA`.

### Noise (binary)
Noise detected.
Value can be found in the published state on the `noise` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"noise": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` noise is ON, if `false` OFF.

### Noise threshold (numeric)
Noise detection threshold.
Value can be found in the published state on the `noise_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"noise_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"noise_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `150`.
The unit of this value is `dBA`.

### Noise timeout (numeric)
Time in seconds after which noise is cleared.
Value can be found in the published state on the `noise_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"noise_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"noise_timeout": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `2000`.
The unit of this value is `s`.

### Status led (binary)
Status LED control.
Value can be found in the published state on the `status_led` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"status_led": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"status_led": NEW_VALUE}`.
If value equals `ON` status led is ON, if `OFF` OFF.

### Connectivity (enum)
Device connectivity state.
Value can be found in the published state on the `connectivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"connectivity": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `offline`, `online`, `firmware_update`, `component_update`.

### Modbus slave id (numeric)
Device Modbus slave ID.
Value can be found in the published state on the `modbus_slave_id` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"modbus_slave_id": ""}`.
It's not possible to write (`/set`) this value.

### Serial number (numeric)
Device serial number.
Value can be found in the published state on the `serial_number` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"serial_number": ""}`.
It's not possible to write (`/set`) this value.

### Fw version (text)
Device firmware version.
Value can be found in the published state on the `fw_version` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"fw_version": ""}`.
It's not possible to write (`/set`) this value.

### Fw signature (text)
Device firmware signature.
Value can be found in the published state on the `fw_signature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"fw_signature": ""}`.
It's not possible to write (`/set`) this value.

### Boot version (text)
Device bootloader version.
Value can be found in the published state on the `boot_version` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"boot_version": ""}`.
It's not possible to write (`/set`) this value.

### Component version (text)
Device component firmware version.
Value can be found in the published state on the `component_version` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"component_version": ""}`.
It's not possible to write (`/set`) this value.

### Component signature (text)
Device component firmware signature.
Value can be found in the published state on the `component_signature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"component_signature": ""}`.
It's not possible to write (`/set`) this value.

### Temperature offset (numeric)
Offset subtracted from the raw temperature reading.
Value can be found in the published state on the `temperature_offset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_offset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_offset": NEW_VALUE}`.
The minimal value is `-10` and the maximum value is `10`.
The unit of this value is `°C`.

### Occupancy level (numeric)
Raw occupancy level reported by the sensor.
Value can be found in the published state on the `occupancy_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_level": ""}`.
It's not possible to write (`/set`) this value.

### Occupancy sensitivity (numeric)
Occupancy detection sensitivity.
Value can be found in the published state on the `occupancy_sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupancy_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `2000`.

### Occupancy timeout (numeric)
Time in seconds after which occupancy is cleared.
Value can be found in the published state on the `occupancy_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupancy_timeout": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `2000`.
The unit of this value is `s`.

### VOC (numeric)
Measured VOC concentration.
Value can be found in the published state on the `voc` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voc": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `µg/m³`.

