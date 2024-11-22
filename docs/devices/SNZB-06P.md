---
title: "SONOFF SNZB-06P control via MQTT"
description: "Integrate your SONOFF SNZB-06P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-09-28T10:54:36
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF SNZB-06P

|     |     |
|-----|-----|
| Model | SNZB-06P  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee occupancy sensor |
| Exposes | occupancy, occupancy_timeout, occupancy_sensitivity, illumination, linkquality |
| Picture | ![SONOFF SNZB-06P](https://www.zigbee2mqtt.io/images/devices/SNZB-06P.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
Firmware 1.0.3 can be misbehaving, as of December 2023 upgrade to 1.0.5 is recommended.

Additional settings currently not exposed in Z2M can be adjusted via the Dev console:
### Sensitivity
Select the msOccupancySensing Cluster, ultrasonicUToOThreshold Attribute is the sensitivity setting.


1 represents low sensitivity with a detection distance of 2.5m.  
2 represents medium sensitivity with a detection distance of 3.5m.  
3 represents high sensitivity with a detection distance of 4m.

### Detection duration
Select the msOccupancySensing Cluster, ultrasonicOToUDelay is the detection duration setting.


On firmware versions lower than 1.0.5, the shortest detection duration is 30 (seconds), otherwise, the sensor will stay permanently on detected status.

Firmware version 1.0.5 and above allows setting the shortest detection duration to 15 (seconds).

[Source - Sonoff documentation](https://sonoff.tech/product-review/tutorial/snzb-06p-firmware-upgrade-and-home-assistant-operation-guide/)
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be send after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of [object Object].


## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Occupancy timeout (numeric)
Unoccupied to occupied delay.
Value can be found in the published state on the `occupancy_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupancy_timeout": NEW_VALUE}`.
The minimal value is `15` and the maximum value is `65535`.

### Occupancy sensitivity (enum)
Sensitivity of human presence detection.
Value can be found in the published state on the `occupancy_sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupancy_sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Illumination (enum)
Only updated when occupancy is detected.
Value can be found in the published state on the `illumination` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `dim`, `bright`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

