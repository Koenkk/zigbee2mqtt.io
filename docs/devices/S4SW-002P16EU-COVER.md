---
title: "Shelly S4SW-002P16EU-COVER control via MQTT"
description: "Integrate your Shelly S4SW-002P16EU-COVER via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-01T18:20:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Shelly S4SW-002P16EU-COVER

|     |     |
|-----|-----|
| Model | S4SW-002P16EU-COVER  |
| Vendor  | [Shelly](/supported-devices/#v=Shelly)  |
| Description | 2PM Gen4 (Cover mode) |
| Exposes | cover (state, position, tilt) |
| Picture | ![Shelly S4SW-002P16EU-COVER](https://www.zigbee2mqtt.io/images/devices/S4SW-002P16EU-COVER.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->

### Device Modes
The Shelly 2PM Gen4 device operates in two different modes that appear as separate devices in Zigbee2MQTT:

- **Cover Mode** [(`S4SW-002P16EU-COVER`)](/devices/S4SW-002P16EU-COVER.html) - This device supports window covering controls with lift and tilt functionality with power monitoring
- **Switch Mode** [(`S4SW-002P16EU-SWITCH`)](/devices/S4SW-002P16EU-SWITCH.html) - Provides dual switch functionality with power monitoring

The device mode is automatically detected based on the endpoint configuration. 

For now, changing modes is only possible through Shelly WebUI.

### Cover Mode Features
When operating in cover mode, this device provides:
- Window covering controls (lift and tilt)
- Position feedback
- State reporting (OPEN/CLOSE)

Vendor product page: [Shelly 2PM Gen4](https://kb.shelly.cloud/knowledge-base/shelly-2pm-gen4)

<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.
To change the tilt publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tilt": VALUE}` where `VALUE` is a number between `0` and `100`.

