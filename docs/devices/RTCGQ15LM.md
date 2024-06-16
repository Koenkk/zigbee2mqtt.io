---
title: "Aqara RTCGQ15LM control via MQTT"
description: "Integrate your Aqara RTCGQ15LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-08-31T11:26:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara RTCGQ15LM

|     |     |
|-----|-----|
| Model | RTCGQ15LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Motion sensor E1 |
| Exposes | occupancy, illuminance_lux, illuminance, detection_interval, device_temperature, battery, voltage, power_outage_count, linkquality |
| Picture | ![Aqara RTCGQ15LM](https://www.zigbee2mqtt.io/images/devices/RTCGQ15LM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_lux_calibration`: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `occupancy_timeout`: Time in seconds after which occupancy is cleared after detecting it (default is "detection_interval" + 2 seconds). The value must be equal to or greater than "detection_interval", and it can also be a fraction. The value must be a number with a minimum value of `0`

* `no_occupancy_since`: Sends a message the last time occupancy (occupancy: true) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be send after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of [object Object].


## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Illuminance (lux) (numeric)
Measured illuminance in lux.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Illuminance (numeric)
Measured illuminance in lux.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Detection interval (numeric)
Time interval for detecting actions.
Value can be found in the published state on the `detection_interval` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"detection_interval": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_interval": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `65535`.
The unit of this value is `s`.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Power outage count (numeric)
Number of power outages.
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

