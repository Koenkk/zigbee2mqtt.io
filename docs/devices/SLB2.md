---
title: "Hive SLB2 control via MQTT"
description: "Integrate your Hive SLB2 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/SLB2.md)*

# Hive SLB2

| Model | SLB2  |
| Vendor  | Hive  |
| Description | Signal booster |
| Exposes | linkquality |
| Picture | ![Hive SLB2](../images/devices/SLB2.jpg) |

## Notes

None


## Exposes

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

