---
title: "SONOFF ZBMINI control via MQTT"
description: "Integrate your SONOFF ZBMINI via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-12-01T19:02:25Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF ZBMINI

|     |     |
|-----|-----|
| Model | ZBMINI  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee two way smart switch |
| Exposes | switch (state) |
| Picture | ![SONOFF ZBMINI](https://www.zigbee2mqtt.io/images/devices/ZBMINI.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing the Device

To manually pair the device, press and hold the pairing button for approximately 5 seconds until the ZigBee LED indicator starts flashing, then release the button.

Be aware that the device also enters pairing mode automatically after a power cycle. Therefore, whenever power is restored, make sure pairing mode is active.

### Device Stuck After Coordinator Change

When switching ZigBee coordinators, the device may enter an error state—indicated by a slow blinking light (approximately one flash per second).
To resolve this, power off the device for at least 10 seconds. Upon powering it back on, the device will automatically enter pairing mode.

### Re-pairing with a Hue Dimmer Remote

If the ZBMINI is not easily accessible (e.g. mounted inside a wall box), it can be reset or re-paired using a Hue dimmer switch. For detailed instructions, refer to the [Hue dimmer reset guide](https://www.zigbee2mqtt.io/devices/324131092621.html#using-the-dimmer-to-reset-other-zigbee-devices).
<!-- Notes END: Do not edit below this line -->



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

