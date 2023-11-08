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
| Description | [Configurable firmware](https://ptvo.info/zigbee-configurable-firmware-features/) |
| Exposes | battery, l3, l5, switch (state), linkquality |
| Picture | ![Custom devices (DiY) ptvo_counter_2ch](https://www.zigbee2mqtt.io/images/devices/ptvo_counter_2ch.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Build guide
Instructions on how to build this device, configure firmware can be found [here](https://dzen.ru/a/ZUnKTY3_Dkue45gb)
<!-- Notes END: Do not edit below this line -->


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `l3`: Counter value. Write zero or positive value to set a counter value. Write a negative value to set a wakeup interval in minutes.

* `l5`: Counter value. Write zero or positive value to set a counter value. Write a negative value to set a wakeup interval in minutes.


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported..
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### l3 (numeric)
Counter value.
Write zero or positive value to set a counter value. Write a negative value to set a wakeup interval in minutes.
It's possible to write (`/set`) this value.

### l5 (numeric)
Counter value.
Write zero or positive value to set a counter value. Write a negative value to set a wakeup interval in minutes.
It's possible to write (`/set`) this value.

### Switch (l6 endpoint)
Leakage sensor state.
The current state of this switch is in the published state under the `state_l6` property (value is `ON` or `OFF`).
Changes position to `ON` when contacts are connected. Default `OFF`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

