---
title: "iCasa ICZB-KPD14S control via MQTT"
description: "Integrate your iCasa ICZB-KPD14S via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
addedAt: 2020-02-26T17:45:15Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# iCasa ICZB-KPD14S

|     |     |
|-----|-----|
| Model | ICZB-KPD14S  |
| Vendor  | iCasa  |
| Description | Zigbee 3.0 Keypad Pulse 4S |
| Exposes | battery, action, linkquality |
| Picture | ![iCasa ICZB-KPD14S](https://psi-4ward.github.io/zigbee2mqtt.io/images/devices/ICZB-KPD14S.jpg) |


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


### Legacy integration
By default (for backwards compatibility purposes) the legacy integration is enabled.
For new users it is recommended to **disable** this as it has several fundamental problems.
To disable the legacy integration add the following to your `configuration.yaml`:

{% raw %}
```yaml
'0xabc457fffe679xyz':
    friendly_name: my_remote
    legacy: false
```
{% endraw %}

### Device type specific configuration
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `legacy`: Set to `false` to disable the legacy integration (highly recommended!) (default: true)



## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `recall_*`, `on`, `off`, `brightness_move_up`, `brightenss_move_down`, `brightness_stop`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

