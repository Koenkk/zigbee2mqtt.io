---
title: "Xiaomi RTCZCGQ11LM control via MQTT"
description: "Integrate your Xiaomi RTCZCGQ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
addedAt: 2022-01-31T17:42:44.606Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi RTCZCGQ11LM

|     |     |
|-----|-----|
| Model | RTCZCGQ11LM  |
| Vendor  | Xiaomi  |
| Description | Aqara Presence Detector FP1 (regions not supported for now) |
| Exposes | presence, presence_event, monitoring_mode, approach_distance, power_outage_count, linkquality |
| Picture | ![Xiaomi RTCZCGQ11LM](https://www.zigbee2mqtt.io/images/devices/RTCZCGQ11LM.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->

## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `illuminance_precision`: Number of digits after decimal point for illuminance, takes into effect on next report of device. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"presence": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Presence_event (enum)
Presence events: "enter", "leave", "left_enter", "right_leave", "right_enter", "left_leave", "approach", "away".
Value can be found in the published state on the `presence_event` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `enter`, `leave`, `left_enter`, `right_leave`, `right_enter`, `left_leave`, `approach`, `away`.

### Monitoring_mode (enum)
Monitoring mode with or without considering right and left sides.
Value can be found in the published state on the `monitoring_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"monitoring_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"monitoring_mode": NEW_VALUE}`.
The possible values are: `undirected`, `left_right`.

### Approach_distance (enum)
The distance at which the sensor detects approaching.
Value can be found in the published state on the `approach_distance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"approach_distance": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"approach_distance": NEW_VALUE}`.
The possible values are: `far`, `medium`, `near`.

### Power_outage_count (numeric)
Number of power outages (since last pairing).
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

