---
title: "Aqara DWZTCGQ11LM control via MQTT"
description: "Integrate your Aqara DWZTCGQ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-04-30T19:57:28
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara DWZTCGQ11LM

|     |     |
|-----|-----|
| Model | DWZTCGQ11LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Multi-state sensor P100 |
| Exposes | battery, voltage, device_mode, door_window_type, sensitivity, report_interval, orientation_detection, movement_detection, fall_detection, vibration_detection, triple_tap_detection, orientation, contact, device_posture, action |
| Picture | ![Aqara DWZTCGQ11LM](https://www.zigbee2mqtt.io/images/devices/DWZTCGQ11LM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing mode

The device is shipped in Matter/Thread mode. To use it with Zigbee2MQTT, switch it to Zigbee mode first. This can be done through the Aqara Home app via Bluetooth. An Aqara Zigbee hub is not required for switching the protocol.

After switching to Zigbee mode, enable permit join in Zigbee2MQTT and press and hold the device button for about 5 seconds until the LED starts blinking.

### Door/window calibration

When using the device in door/window mode, the sensor should be calibrated after installation. Close the door or window, then press the device button 3 times. This sets the current position as the closed state.

### Object mode calibration

When using the device in object mode, the sensor should be calibrated before use. Place the sensor face-up on a flat level surface, then press the device button 3 times.

### Actions

`triple_tap`, `movement`, `vibration`, `orientation`, `fall`, `static` are only reported when the device is in Object mode. To use these momentary events in Home Assistant enable `experimental_event_entities` in the Zigbee2MQTT Home Assistant integration settings.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

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

### Device mode (enum)
Device operating mode.
Value can be found in the published state on the `device_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"device_mode": NEW_VALUE}`.
The possible values are: `door_window`, `object`.

### Door/window type (enum)
Door/window type (applies when device_mode = door_window).
Value can be found in the published state on the `door_window_type` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"door_window_type": NEW_VALUE}`.
The possible values are: `casement_window`, `hopper_window`, `composite_window`, `hinged_door`.

### Sensitivity (numeric)
Detection sensitivity (1 = low, 10 = high).
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `10`.

### Report interval (numeric)
Reporting interval in seconds. Also drives the device's 802.15.4 poll cadence — lower values are more responsive but reduce battery life..
Value can be found in the published state on the `report_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"report_interval": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `300`.
The unit of this value is `s`.

### Orientation detection (binary)
Enable orientation event detection (object mode, requires device button press).
Value can be found in the published state on the `orientation_detection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"orientation_detection": NEW_VALUE}`.
If value equals `ON` orientation detection is ON, if `OFF` OFF.

### Movement detection (binary)
Enable movement event detection (object mode, requires device button press).
Value can be found in the published state on the `movement_detection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"movement_detection": NEW_VALUE}`.
If value equals `ON` movement detection is ON, if `OFF` OFF.

### Fall detection (binary)
Enable fall event detection (object mode, requires device button press).
Value can be found in the published state on the `fall_detection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fall_detection": NEW_VALUE}`.
If value equals `ON` fall detection is ON, if `OFF` OFF.

### Vibration detection (binary)
Enable vibration event detection (object mode, requires device button press).
Value can be found in the published state on the `vibration_detection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"vibration_detection": NEW_VALUE}`.
If value equals `ON` vibration detection is ON, if `OFF` OFF.

### Triple tap detection (binary)
Enable triple-tap event detection (object mode, requires device button press).
Value can be found in the published state on the `triple_tap_detection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"triple_tap_detection": NEW_VALUE}`.
If value equals `ON` triple tap detection is ON, if `OFF` OFF.

### Orientation (enum)
Last reported orientation (relevant when action = orientation).
Value can be found in the published state on the `orientation` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `face_up`, `face_down`, `vertical`, `tilt`.

### Contact (binary)
Door/window state (door/window mode only).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Device posture (enum)
Door/window mounting orientation check — 'abnormal' if the sensor is incorrectly installed or needs calibration.
Value can be found in the published state on the `device_posture` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `normal`, `abnormal`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `triple_tap`, `movement`, `vibration`, `orientation`, `fall`, `static`.

