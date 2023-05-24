---
title: "Custom devices (DiY) ptvo.switch control via MQTT"
description: "Integrate your Custom devices (DiY) ptvo.switch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-09-08T21:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Custom devices (DiY) ptvo.switch

|     |     |
|-----|-----|
| Model | ptvo.switch  |
| Vendor  | [Custom devices (DiY)](/supported-devices/#v=Custom%20devices%20(DiY))  |
| Description | [Multi-channel relay switch](https://ptvo.info/zigbee-switch-configurable-firmware-router-199/) |
| Exposes | action, switch (state), l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, linkquality |
| Picture | ![Custom devices (DiY) ptvo.switch](https://www.zigbee2mqtt.io/images/devices/ptvo.switch.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Deprecated click event
By default this device exposes a deprecated `click` event. It's recommended to use the `action` event instead.

To disable the `click` event, set `legacy: false` for this device in `configuration.yaml`. Example:

```yaml
devices:
  '0x12345678':
    friendly_name: my_device
    legacy: false
```
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


## Exposes

### Action (text)
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"action": NEW_VALUE}`.

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.

### L1 (text, l1 endpoint)
State or sensor value.
Value can be found in the published state on the `l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l1": NEW_VALUE}`.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l2": ""}`.

### L2 (text, l2 endpoint)
State or sensor value.
Value can be found in the published state on the `l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l2": NEW_VALUE}`.

### Switch (l3 endpoint)
The current state of this switch is in the published state under the `state_l3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l3": "ON"}`, `{"state_l3": "OFF"}` or `{"state_l3": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l3": ""}`.

### L3 (text, l3 endpoint)
State or sensor value.
Value can be found in the published state on the `l3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l3": NEW_VALUE}`.

### Switch (l4 endpoint)
The current state of this switch is in the published state under the `state_l4` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l4": "ON"}`, `{"state_l4": "OFF"}` or `{"state_l4": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l4": ""}`.

### L4 (text, l4 endpoint)
State or sensor value.
Value can be found in the published state on the `l4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l4": NEW_VALUE}`.

### Switch (l5 endpoint)
The current state of this switch is in the published state under the `state_l5` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l5": "ON"}`, `{"state_l5": "OFF"}` or `{"state_l5": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l5": ""}`.

### L5 (text, l5 endpoint)
State or sensor value.
Value can be found in the published state on the `l5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l5": NEW_VALUE}`.

### Switch (l6 endpoint)
The current state of this switch is in the published state under the `state_l6` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l6": "ON"}`, `{"state_l6": "OFF"}` or `{"state_l6": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l6": ""}`.

### L6 (text, l6 endpoint)
State or sensor value.
Value can be found in the published state on the `l6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l6": NEW_VALUE}`.

### Switch (l7 endpoint)
The current state of this switch is in the published state under the `state_l7` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l7": "ON"}`, `{"state_l7": "OFF"}` or `{"state_l7": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l7": ""}`.

### L7 (text, l7 endpoint)
State or sensor value.
Value can be found in the published state on the `l7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l7": NEW_VALUE}`.

### Switch (l8 endpoint)
The current state of this switch is in the published state under the `state_l8` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l8": "ON"}`, `{"state_l8": "OFF"}` or `{"state_l8": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l8": ""}`.

### L8 (text, l8 endpoint)
State or sensor value.
Value can be found in the published state on the `l8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l8": NEW_VALUE}`.

### Switch (l9 endpoint)
The current state of this switch is in the published state under the `state_l9` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l9": "ON"}`, `{"state_l9": "OFF"}` or `{"state_l9": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l9": ""}`.

### L9 (text, l9 endpoint)
State or sensor value.
Value can be found in the published state on the `l9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l9": NEW_VALUE}`.

### Switch (l10 endpoint)
The current state of this switch is in the published state under the `state_l10` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l10": "ON"}`, `{"state_l10": "OFF"}` or `{"state_l10": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l10": ""}`.

### L10 (text, l10 endpoint)
State or sensor value.
Value can be found in the published state on the `l10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l10": NEW_VALUE}`.

### Switch (l11 endpoint)
The current state of this switch is in the published state under the `state_l11` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l11": "ON"}`, `{"state_l11": "OFF"}` or `{"state_l11": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l11": ""}`.

### L11 (text, l11 endpoint)
State or sensor value.
Value can be found in the published state on the `l11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l11": NEW_VALUE}`.

### Switch (l12 endpoint)
The current state of this switch is in the published state under the `state_l12` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l12": "ON"}`, `{"state_l12": "OFF"}` or `{"state_l12": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l12": ""}`.

### L12 (text, l12 endpoint)
State or sensor value.
Value can be found in the published state on the `l12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l12": NEW_VALUE}`.

### Switch (l13 endpoint)
The current state of this switch is in the published state under the `state_l13` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l13": "ON"}`, `{"state_l13": "OFF"}` or `{"state_l13": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l13": ""}`.

### L13 (text, l13 endpoint)
State or sensor value.
Value can be found in the published state on the `l13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l13": NEW_VALUE}`.

### Switch (l14 endpoint)
The current state of this switch is in the published state under the `state_l14` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l14": "ON"}`, `{"state_l14": "OFF"}` or `{"state_l14": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l14": ""}`.

### L14 (text, l14 endpoint)
State or sensor value.
Value can be found in the published state on the `l14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l14": NEW_VALUE}`.

### Switch (l15 endpoint)
The current state of this switch is in the published state under the `state_l15` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l15": "ON"}`, `{"state_l15": "OFF"}` or `{"state_l15": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l15": ""}`.

### L15 (text, l15 endpoint)
State or sensor value.
Value can be found in the published state on the `l15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l15": NEW_VALUE}`.

### Switch (l16 endpoint)
The current state of this switch is in the published state under the `state_l16` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l16": "ON"}`, `{"state_l16": "OFF"}` or `{"state_l16": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l16": ""}`.

### L16 (text, l16 endpoint)
State or sensor value.
Value can be found in the published state on the `l16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l16": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l16": NEW_VALUE}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

