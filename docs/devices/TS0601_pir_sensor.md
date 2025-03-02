---
title: "Tuya TS0601_pir_sensor control via MQTT"
description: "Integrate your Tuya TS0601_pir_sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-01-22T20:00:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_pir_sensor

|     |     |
|-----|-----|
| Model | TS0601_pir_sensor |
| Vendor  | [Tuya](/supported-devices/#v=Tuya) |
| Description | Luminance motion sensor |
| Exposes | occupancy, illuminance, battery, sensitivity, keep_time, illuminance_interval, linkquality |
| Picture | ![Tuya TS0601_pir_sensor](/public/images/devices/TS0601_pir_sensor.png) |

<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To start pairing, press and hold the reset button (located inside the device) for about 10 seconds until the LED starts blinking. The device will now attempt to connect to Zigbee2MQTT.

### Reading and Setting Values
- The sensor is a low-power device and will only respond to configuration changes or value requests when it is active (e.g., detecting motion).
- Requests for values like `sensitivity` or `keep_time` will be queued if the sensor is inactive and will be sent when it wakes up.

### Known Issues
- Battery percentage (`battery_percentage`) may not always report correctly. Ensure the firmware is updated if incorrect values persist.
- Illuminance (`illuminance_value`) may fluctuate due to environmental factors. It is recommended to calibrate if needed.

<!-- Notes END: Do not edit below this line -->

## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true`, occupancy is ON. If `false`, occupancy is OFF.

### Illuminance (numeric)
Measured illuminance in lux (lx).
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Battery (numeric)
Remaining battery in percentage.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Sensitivity (enum)
PIR sensor sensitivity.
Value can be found in the published state on the `sensitivity` property.
To read (`/get`) the value, publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensitivity": ""}`.
To write (`/set`) a value, publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Keep time (numeric)
PIR keep time in seconds.
Value can be found in the published state on the `keep_time` property.
To read (`/get`) the value, publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"keep_time": ""}`.
To write (`/set`) a value, publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"keep_time": NEW_VALUE}`.
The unit of this value is `seconds`.

### Illuminance interval (numeric)
Brightness acquisition interval in minutes.
Value can be found in the published state on the `illuminance_interval` property.
To read (`/get`) the value, publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"illuminance_interval": ""}`.
To write (`/set`) a value, publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_interval": NEW_VALUE}`.
The unit of this value is `minutes`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.
