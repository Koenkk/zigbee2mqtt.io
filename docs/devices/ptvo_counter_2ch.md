---
title: "Custom devices (DiY) ptvo_counter_2ch control via MQTT"
description: "Integrate your Custom devices (DiY) ptvo_counter_2ch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-07T00:31:40Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Custom devices (DiY) ptvo_counter_2ch

|     |     |
|-----|-----|
| Model | ptvo_counter_2ch  |
| Vendor  | [Custom devices (DiY)](/supported-devices/#v=Custom%20devices%20(DiY))  |
| Description | 2 channel counter |
| Exposes | battery, l3, l5, switch (state), voltage, linkquality |
| Picture | ![Custom devices (DiY) ptvo_counter_2ch](https://www.zigbee2mqtt.io/images/devices/ptvo_counter_2ch.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Build guide
Instructions on how to build this device, configure firmware can be found [here](https://dzen.ru/a/ZUnKTY3_Dkue45gb)
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### L3 (numeric)
Counter 1 value. Write zero or positive value to set a counter value. Write a negative value to set a wakeup interval in minutes.
Value can be found in the published state on the `l3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l3": NEW_VALUE}`.
The minimal value is `-999999999` and the maximum value is `999999999`.

### L5 (numeric)
Counter 2 value. Write zero or positive value to set a counter value. Write a negative value to set a wakeup interval in minutes.
Value can be found in the published state on the `l5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"l5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"l5": NEW_VALUE}`.
The minimal value is `-999999999` and the maximum value is `999999999`.

### Switch (l6 endpoint)
The current state of this switch is in the published state under the `state_l6` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l6": "ON"}`, `{"state_l6": "OFF"}` or `{"state_l6": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l6": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

