---
title: "WETEN PCI E control via MQTT"
description: "Integrate your WETEN PCI E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-01-31T20:08:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# WETEN PCI E

|     |     |
|-----|-----|
| Model | PCI E  |
| Vendor  | [WETEN](/supported-devices/#v=WETEN)  |
| Description | Remote Control PCI E Card for PC |
| Exposes | switch (state), restart_mode, rf_pairing, rf_remote_control, buzzer_feedback, power_on_behavior, child_lock, linkquality |
| Picture | ![WETEN PCI E](https://www.zigbee2mqtt.io/images/devices/PCI-E.png) |
| White-label | Weten Tuya PRO |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing
Long press the reset button for 5s until the LED indicator flashes three times, which means the device has entered pairing mode. If buzzer feedback is on then you'll also hear 3 short beeps.
The reset button can be found on the PCIe card.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Restart mode (enum)
Restart Mode.
Value can be found in the published state on the `restart_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"restart_mode": NEW_VALUE}`.
The possible values are: `restart`, `force restart`, `–`.

### Rf pairing (binary)
Enables/disables RF 433 remote pairing mode.
Value can be found in the published state on the `rf_pairing` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rf_pairing": NEW_VALUE}`.
If value equals `ON` rf pairing is ON, if `OFF` OFF.

### Rf remote control (binary)
Enables/disables RF 433 remote control.
Value can be found in the published state on the `rf_remote_control` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rf_remote_control": NEW_VALUE}`.
If value equals `ON` rf remote control is ON, if `OFF` OFF.

### Buzzer feedback (binary)
Enable buzzer feedback..
Value can be found in the published state on the `buzzer_feedback` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"buzzer_feedback": NEW_VALUE}`.
If value equals `ON` buzzer feedback is ON, if `OFF` OFF.

### Power on behavior (enum)
Power On Behavior.
Value can be found in the published state on the `power_on_behavior` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `on`, `off`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

