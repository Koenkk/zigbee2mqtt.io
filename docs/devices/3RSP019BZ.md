---
title: "Third Reality 3RSP019BZ control via MQTT"
description: "Integrate your Third Reality 3RSP019BZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-11-20T23:20:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Third Reality 3RSP019BZ

|     |     |
|-----|-----|
| Model | 3RSP019BZ  |
| Vendor  | [Third Reality](/supported-devices/#v=Third%20Reality)  |
| Description | Zigbee / BLE smart plug |
| Exposes | switch (state), power_on_behavior, linkquality |
| Picture | ![Third Reality 3RSP019BZ](https://www.zigbee2mqtt.io/images/devices/3RSP019BZ.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Switch between BLE and Zigbee mode

Plug comes out of the box in BLE mode (Green LED). To use with zigbee2mqtt you need to change to zigbee mode (Red LED):
#### BLE → ZigBee
1. Press the button and hold, then insert the Smart Plug into an outlet until the green light
is ON.
2. Release the button, then press the button immediately. LED light will flash in red,
indicating that your Smart Plug is in ZigBee mode now.

If you want to restore to BLE to work with most Echo devices: 
#### ZigBee → BLE
1. Press the button and hold, then insert the Smart Plug into an outlet until the red light is
ON.
2. Release the button, then press the button immediately. LED light will alternately flash in
green and red, indicating that your Smart Plug is in BLE mode now.

### Factory Reset
After your Smart Plug is powered on, press and hold the button for more than 10 seconds
until the LED light flashes indicating that your Smart Plug is in pairing mode. (The mode won’t
be change while factory reset your Smart Plug.)
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Power-on behavior (enum)
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

