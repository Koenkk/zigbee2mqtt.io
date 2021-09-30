---
title: "TuYa SNTZ009 control via MQTT"
description: "Integrate your TuYa SNTZ009 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/SNTZ009.md)*

# TuYa SNTZ009

| Model | SNTZ009  |
| Vendor  | TuYa  |
| Description | Water leak sensor |
| Exposes | water_leak, linkquality |
| Picture | ![TuYa SNTZ009](../images/devices/SNTZ009.jpg) |

## Notes

None


## Exposes

### Water_leak (binary)
Indicates whether the device detected a water leak.
Value can be found in the published state on the `water_leak` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` water_leak is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

