---
title: "Airam AIRAM-CTR.U control via MQTT"
description: "Integrate your Airam AIRAM-CTR.U via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Airam AIRAM-CTR.U

|     |     |
|-----|-----|
| Model | AIRAM-CTR.U  |
| Vendor  | [Airam](/supported-devices/#v=Airam)  |
| Description | CTR.U remote |
| Exposes | action, linkquality |
| Picture | ![Airam AIRAM-CTR.U](https://www.zigbee2mqtt.io/images/devices/AIRAM-CTR.U.png) |


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


### Pairing
Hold small reset button pressed (located under battery cover on the backside of remote) for 4
seconds and device will reset and will attempt to join network.
Keep clicking any button on the frontside of the device to keep device awake while pairing.
You should be clicking every two seconds until pairing is complete.

Device seems to join network also when it is paired directly to Airam bulb (which is joined to network already)
(https://www.zigbee2mqtt.io/devices/4713407.html) by keeping ON and DIM buttons pressed while holding remote
within 5 centimeters away from Airam bulb.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `brightness_down_click`, `brightness_up_click`, `brightness_down_hold`, `brightness_up_hold`, `brightness_down_release`, `brightness_up_release`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

