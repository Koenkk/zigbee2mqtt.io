---
title: "TERNCY TERNCY-SD01 control via MQTT"
description: "Integrate your TERNCY TERNCY-SD01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-02-26T17:45:15Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TERNCY TERNCY-SD01

|     |     |
|-----|-----|
| Model | TERNCY-SD01  |
| Vendor  | [TERNCY](/supported-devices/#v=TERNCY)  |
| Description | Knob smart dimmer |
| Exposes | battery, action, direction, linkquality |
| Picture | ![TERNCY TERNCY-SD01](https://www.zigbee2mqtt.io/images/devices/TERNCY-SD01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Channel
This device [does not work](https://github.com/Koenkk/zigbee2mqtt/discussions/7259#discussioncomment-6012304) on Zigbee channel 20-24.

### Pairing
Press and hold the knob on the device for 8 seconds (until the indicator blinks blue light 3 times) the indicator will continue blinking blue light if pairing is successful otherwise it will blink red light.

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


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single`, `double`, `triple`, `quadruple`, `rotate`.

### Direction (text)
Value can be found in the published state on the `direction` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

