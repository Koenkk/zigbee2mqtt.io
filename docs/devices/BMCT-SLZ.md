---
title: "Bosch BMCT-SLZ control via MQTT"
description: "Integrate your Bosch BMCT-SLZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-04-27T17:34:39
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BMCT-SLZ

|     |     |
|-----|-----|
| Model | BMCT-SLZ  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Light/shutter control unit II |
| Exposes | device_mode, linkquality |
| Picture | ![Bosch BMCT-SLZ](https://www.zigbee2mqtt.io/images/devices/BMCT-SLZ.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To pair this device you have to install the device via its installation code. The installation code can be obtained by scanning the QR-code on the device with your smartphone. Then get the device into pairing mode. In zigbee2mqtt navigate to  "Settings" --> "Tools" and click on "Add install code". Paste the code you got from the QR-code and confirm by clicking "OK" which will get zigbee2mqtt into pairing mode automatically. Wait for your device to be joined.

### Configuration
The device can operate either as a two-channel light switch or as roller shutter/window blind. After pairing, the device mode is initially set to 'disabled' and will not accept any switching or open/close commands. The device mode must be set to 'light' or 'shutter' via the frontend or by publishing `{"device_mode": "shutter"}` or `{"device_mode": "light"}` to `zigbee2mqtt/FRIENDLY_NAME/set`.

### Factory reset
To reset the device to factory settings, press and hold the device's main button on the front until the device's LED starts flashing. Release the main button and press and hold it again until the device's LED is lighting up green. The device will then restart and look for a Zigbee network to join. In case something went wrong, the device's LED will flash red.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Device mode (enum)
Device mode.
Value can be found in the published state on the `device_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"device_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"device_mode": NEW_VALUE}`.
The possible values are: `light`, `shutter`, `disabled`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

