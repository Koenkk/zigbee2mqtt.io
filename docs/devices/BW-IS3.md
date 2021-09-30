---
title: "BlitzWolf BW-IS3 control via MQTT"
description: "Integrate your BlitzWolf BW-IS3 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/BW-IS3.md)*

# BlitzWolf BW-IS3

| Model | BW-IS3  |
| Vendor  | BlitzWolf  |
| Description | Rechargeable Zigbee PIR motion sensor |
| Exposes | occupancy, linkquality |
| Picture | ![BlitzWolf BW-IS3](../images/devices/BW-IS3.jpg) |

## Notes

None


## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

