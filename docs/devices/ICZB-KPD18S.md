---
title: "iCasa ICZB-KPD18S control via MQTT"
description: "Integrate your iCasa ICZB-KPD18S via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-11-09T18:37:38Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# iCasa ICZB-KPD18S

|     |     |
|-----|-----|
| Model | ICZB-KPD18S  |
| Vendor  | [iCasa](/supported-devices/#v=iCasa)  |
| Description | Zigbee 3.0 Keypad Pulse 8S |
| Exposes | battery, action, linkquality |
| Picture | ![iCasa ICZB-KPD18S](https://www.zigbee2mqtt.io/images/devices/ICZB-KPD18S.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing

To Reset the iCasa ICZB-KPD18S do the following:
1) Press and hold down both OFF button and the ON button until the LED indicator on the remote turns on.
2) Than immediately click OFF button 5 times. 3) The LED status indicator flashes 3 times to indicate successful reset.

Pairing mode:
1) Press and hold down OFF and ON button simultaneously until the status LED indicator on the remote turns on,
then immediately click ON button.
2) The status LED indicator on the remote will blink fast.
3) When the pairing is successful the status LED indicator on the remote will blink 6 times.

### Deprecated click event
By default this device exposes a deprecated `click` event. It's recommended to use the `action` event instead.

To disable the `click` event, set `legacy: false` for this device in `configuration.yaml`. Example:

```yaml
devices:
  '0x12345678':
    friendly_name: my_device
    legacy: false
```


### Legacy integration
By default (for backwards compatibility purposes) the legacy integration is enabled.
For new users it is recommended to **disable** this as it has several fundamental problems.
To disable the legacy integration add the following to your `configuration.yaml`:


```yaml
'0xabc457fffe679xyz':
    friendly_name: my_remote
    legacy: false
```
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`

* `simulated_brightness`: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval.  Note: will only work when legacy: false is set. Example:
```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```


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
The possible values are: `on`, `off`, `brightness_stop`, `brightness_move_up`, `brightness_move_down`, `recall_1`, `recall_2`, `recall_3`, `recall_4`, `recall_5`, `recall_6`, `store_1`, `store_2`, `store_3`, `store_4`, `store_5`, `store_6`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

