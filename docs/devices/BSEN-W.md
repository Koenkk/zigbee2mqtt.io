---
title: "Bosch BSEN-W control via MQTT"
description: "Integrate your Bosch BSEN-W via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-31T19:12:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BSEN-W

|     |     |
|-----|-----|
| Model | BSEN-W  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Water alarm (formerly known as BWA-1) |
| Exposes | water_leak, tamper, water_leak_alarm_control, alarm_on_motion, test_mode, test_mode_timeout, battery, battery_low |
| Picture | ![Bosch BSEN-W](https://www.zigbee2mqtt.io/images/devices/BSEN-W.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To pair this device you have to install the device via its installation code. The installation code can be obtained by scanning the QR-code on the inside of the battery cover with your smartphone. Then get the device into pairing mode. In zigbee2mqtt navigate to  "Settings" --> "Tools" and click on "Add install code". Paste the code you got from the QR-code and confirm by clicking "OK", then ensure permit joining is active. Wait for your device to be joined.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Water leak (binary)
Indicates whether the device detected a water leak.
Value can be found in the published state on the `water_leak` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` water leak is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Mute water leak alarm (binary)
In case of an water leak, you can mute and unmute the audible alarm here.
Value can be found in the published state on the `water_leak_alarm_control` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"water_leak_alarm_control": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"water_leak_alarm_control": NEW_VALUE}`.
If value equals `MUTED` mute water leak alarm is ON, if `UNMUTED` OFF.

### Alarm on motion (binary)
If your water alarm is moved, an acoustic signal sounds.
Value can be found in the published state on the `alarm_on_motion` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_on_motion": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_on_motion": NEW_VALUE}`.
If value equals `ON` alarm on motion is ON, if `OFF` OFF.

### Test mode (binary)
Activates the test mode. In this mode, the device acts like it would when detecting any water to verify the installation. Please keep in mind that it can take up to 10 seconds for the test mode to be activated..
Value can be found in the published state on the `test_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"test_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"test_mode": NEW_VALUE}`.
If value equals `ON` test mode is ON, if `OFF` OFF.

### Test mode timeout (numeric)
Determines how long the test mode should be activated. The default length is 3 seconds..
Value can be found in the published state on the `test_mode_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"test_mode_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"test_mode_timeout": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.
The unit of this value is `seconds`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Battery low (binary)
Empty battery indicator.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

