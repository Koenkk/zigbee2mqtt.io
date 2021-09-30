---
title: "Digi XBee control via MQTT"
description: "Integrate your Digi XBee via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/XBee.md)*

# Digi XBee

| Model | XBee  |
| Vendor  | Digi  |
| Description | Router |
| Exposes | linkquality |
| Picture | ![Digi XBee](../images/devices/XBee.jpg) |

## Notes

None


## Exposes

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

