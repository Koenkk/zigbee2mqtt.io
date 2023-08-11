---
title: "Climax PRL-1ZBS-12/24V control via MQTT"
description: "Integrate your Climax PRL-1ZBS-12/24V via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-12-31T16:51:16
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Climax PRL-1ZBS-12/24V

|     |     |
|-----|-----|
| Model | PRL-1ZBS-12/24V  |
| Vendor  | [Climax](/supported-devices/#v=Climax)  |
| Description | Zigbee 12-24V relay controller |
| Exposes | switch (state), power_on_behavior, linkquality |
| Picture | ![Climax PRL-1ZBS-12/24V](https://www.zigbee2mqtt.io/images/devices/PRL-1ZBS-12-24V.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Calibration
1. Befor calibration, the external local switches must be connected to the Shutter Control.
2. Press and hold the Function button for 3~10 seconds and release to enter Calubration mode. The Shutter Controller will roll toward the "Open" direction for 4 minutes upon entering Calibration mode.
3. Wait for 4 minutes for Shutter Control to stop rolling to "Open" direction, then activate the connected external local "Close" switch to close the shutter.
4. Activate the "Open" external local switch the moment the shutter is fully closed. The Shutter controll will record to time it took between step 3 and 4 as the new "close time"
5. The Shutter control will roll toward open direction after step 4
6. Activate the "Close" external local switch the moment the shutter is fully opended. The Shutter controll will record to time it took between step 5 and 6 as the new "open time"
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Power_on_behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

