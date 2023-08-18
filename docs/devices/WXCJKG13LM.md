---
title: "Xiaomi WXCJKG13LM control via MQTT"
description: "Integrate your Xiaomi WXCJKG13LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-12-15T17:27:48Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi WXCJKG13LM

|     |     |
|-----|-----|
| Model | WXCJKG13LM  |
| Vendor  | [Xiaomi](/supported-devices/#v=Xiaomi)  |
| Description | Aqara Opple switch 3 bands |
| Exposes | battery, voltage, action, operation_mode, power_outage_count, linkquality |
| Picture | ![Xiaomi WXCJKG13LM](https://www.zigbee2mqtt.io/images/devices/WXCJKG13LM.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing Instructions
Press and hold the button on the backside of the device until the blue light starts blinking, release it and the pairing should begin.

### Binding
By default the switch is bound to the coordinator but this device can also be used to directly control other lights and switches in the network.

First unbind it from the coordinator, then you can bind it to any other device or group. (see ../guide/usage/binding.md )

Now change the operation mode of the device, by default it is in `event` mode, but when binding we need to change it to `command` mode.
To do this send to `zigbee2mqtt/FRIENDLY_NAME/set` payload `{"operation_mode": "command"}`, right before doing this make sure to wakeup the device.

As the device is sleeping by default, you need to wake it up after sending the bind/unbind command by pressing the reset button once.


When bound to a lamp, the behavior is as follows (for WXCJKG11LM Aqara Opple switch 1 band):
- left click: turn off
- right click: turn on
- left double click: light dim down (by steps of 33%)
- right double click: light dim up (by steps of 33%)
- long left click: warm white
- long right click: cold white
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported..
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `button_1_hold`, `button_1_release`, `button_1_single`, `button_1_double`, `button_1_triple`, `button_2_hold`, `button_2_release`, `button_2_single`, `button_2_double`, `button_2_triple`, `button_3_hold`, `button_3_release`, `button_3_single`, `button_3_double`, `button_3_triple`, `button_4_hold`, `button_4_release`, `button_4_single`, `button_4_double`, `button_4_triple`, `button_5_hold`, `button_5_release`, `button_5_single`, `button_5_double`, `button_5_triple`, `button_6_hold`, `button_6_release`, `button_6_single`, `button_6_double`, `button_6_triple`.

### Operation_mode (enum)
Operation mode, select "command" to enable bindings (wake up the device before changing modes!).
Value can be found in the published state on the `operation_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode": NEW_VALUE}`.
The possible values are: `command`, `event`.

### Power_outage_count (numeric)
Number of power outages.
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

