---
title: "DIYRuZ DIYRuZ_R8_8 control via MQTT"
description: "Integrate your DIYRuZ DIYRuZ_R8_8 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-06-29T17:33:31Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# DIYRuZ DIYRuZ_R8_8

|     |     |
|-----|-----|
| Model | DIYRuZ_R8_8  |
| Vendor  | [DIYRuZ](/supported-devices/#v=DIYRuZ)  |
| Description | [DiY 8 Relays + 8 switches](https://modkam.ru/?p=1638) |
| Exposes | switch (state), linkquality |
| Picture | ![DIYRuZ DIYRuZ_R8_8](https://www.zigbee2mqtt.io/images/devices/DIYRuZ_R8_8.jpg) |


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

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


## Exposes

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l2": ""}`.

### Switch (l3 endpoint)
The current state of this switch is in the published state under the `state_l3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l3": "ON"}`, `{"state_l3": "OFF"}` or `{"state_l3": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l3": ""}`.

### Switch (l4 endpoint)
The current state of this switch is in the published state under the `state_l4` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l4": "ON"}`, `{"state_l4": "OFF"}` or `{"state_l4": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l4": ""}`.

### Switch (l5 endpoint)
The current state of this switch is in the published state under the `state_l5` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l5": "ON"}`, `{"state_l5": "OFF"}` or `{"state_l5": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l5": ""}`.

### Switch (l6 endpoint)
The current state of this switch is in the published state under the `state_l6` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l6": "ON"}`, `{"state_l6": "OFF"}` or `{"state_l6": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l6": ""}`.

### Switch (l7 endpoint)
The current state of this switch is in the published state under the `state_l7` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l7": "ON"}`, `{"state_l7": "OFF"}` or `{"state_l7": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l7": ""}`.

### Switch (l8 endpoint)
The current state of this switch is in the published state under the `state_l8` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l8": "ON"}`, `{"state_l8": "OFF"}` or `{"state_l8": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l8": ""}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

