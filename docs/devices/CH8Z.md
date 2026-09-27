---
title: "AutomatOn CH8Z control via MQTT"
description: "Integrate your AutomatOn CH8Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# AutomatOn CH8Z

|     |     |
|-----|-----|
| Model | CH8Z  |
| Vendor  | [AutomatOn](/supported-devices/#v=AutomatOn)  |
| Description | Underfloor heating controller - 8 zones |
| Exposes | switch (state), countdown, power_on_behavior, child_lock |
| Picture | ![AutomatOn CH8Z](https://www.zigbee2mqtt.io/images/devices/CH8Z.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->

## Notes

### Pairing

If the controller does not show up when joining, the vendor's manual says to hold the front-panel `Switch` button for 10 seconds, until the LED starts flashing rapidly, which means it is ready to connect. Enable permit-join in Zigbee2MQTT before holding the button.

The installation manual labels that button `ON/OFF` and suggests using it to check that the controller works, but a short press does nothing over Zigbee and does not switch any channel.

### Supported firmware

Only units reporting `_TZE284_1oft6qso` are supported, tested with firmware 1.0.10. Earlier `_TZE204_1oft6qso` units (firmware 1.0.6) are deliberately not fingerprinted: no such unit was tested, the firmware cannot be updated in the field, and the vendor's changelog for 1.0.10 lists "DP first report" as a new feature, which suggests 1.0.6 reports differently.

### Countdown

The countdown datapoints are *toggle* timers, not auto-off timers. When a countdown expires the controller inverts whatever state its channel is in, so a countdown started on a zone that is off will **switch that zone on**.

A running countdown cannot be cancelled. Switching the channel off does not stop the timer, it keeps running and toggles the channel when it expires, which switches the zone back on. The only way to influence a running timer is to write a new countdown value, which restarts it.

Writing `0` is not a cancel either, unlike some other Tuya devices. It is a toggle with no delay, so on a zone that is off it switches that zone on immediately.

The controller echoes the value written to it but never reports the remaining time, so the number shown in Zigbee2MQTT is the last value that was written. It does not count down and it is not cleared when the timer expires.

### Pump and boiler

The controller drives its own pump and boiler outputs. That logic lives entirely in the controller's firmware and is not exposed over Zigbee, so neither output is exposed by Zigbee2MQTT and neither can be monitored or tuned from it.

Observed behaviour: the pump and boiler engage roughly two minutes after the first zone opens, which is consistent with waiting for the thermal actuators to open, and they drop out immediately once all channels are off.

### Channel 5 as a voltage-free contact

The installation manual describes removing an internal jumper to turn channel 5 into a voltage-free contact, intended for driving a boiler that needs a dry contact. In that configuration the channel does not carry mains voltage. This does not change how the channel behaves over Zigbee.

### State after a power cut

The controller does not send a Zigbee device announcement when it is powered back on, and it does not report its datapoints on boot. After a power cut Zigbee2MQTT therefore keeps showing the state from before the cut.

The controller does report changes as they happen, but each report carries only the datapoint that changed, so switching one channel refreshes that channel alone and leaves the others stale. To refresh everything at once, run **Reconfigure** on the device in Zigbee2MQTT, which queries all datapoints.

<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l3 endpoint)
The current state of this switch is in the published state under the `state_l3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l3": "ON"}`, `{"state_l3": "OFF"}` or `{"state_l3": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l4 endpoint)
The current state of this switch is in the published state under the `state_l4` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l4": "ON"}`, `{"state_l4": "OFF"}` or `{"state_l4": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l5 endpoint)
The current state of this switch is in the published state under the `state_l5` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l5": "ON"}`, `{"state_l5": "OFF"}` or `{"state_l5": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l6 endpoint)
The current state of this switch is in the published state under the `state_l6` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l6": "ON"}`, `{"state_l6": "OFF"}` or `{"state_l6": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l7 endpoint)
The current state of this switch is in the published state under the `state_l7` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l7": "ON"}`, `{"state_l7": "OFF"}` or `{"state_l7": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l8 endpoint)
The current state of this switch is in the published state under the `state_l8` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l8": "ON"}`, `{"state_l8": "OFF"}` or `{"state_l8": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Countdown (numeric, l1 endpoint)
Toggle the device after a set duration (one time action).
Value can be found in the published state on the `countdown_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Countdown (numeric, l2 endpoint)
Toggle the device after a set duration (one time action).
Value can be found in the published state on the `countdown_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Countdown (numeric, l3 endpoint)
Toggle the device after a set duration (one time action).
Value can be found in the published state on the `countdown_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l3": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Countdown (numeric, l4 endpoint)
Toggle the device after a set duration (one time action).
Value can be found in the published state on the `countdown_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l4": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Countdown (numeric, l5 endpoint)
Toggle the device after a set duration (one time action).
Value can be found in the published state on the `countdown_l5` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l5": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Countdown (numeric, l6 endpoint)
Toggle the device after a set duration (one time action).
Value can be found in the published state on the `countdown_l6` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l6": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Countdown (numeric, l7 endpoint)
Toggle the device after a set duration (one time action).
Value can be found in the published state on the `countdown_l7` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l7": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Countdown (numeric, l8 endpoint)
Toggle the device after a set duration (one time action).
Value can be found in the published state on the `countdown_l8` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l8": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

