---
title: "Schneider Electric 41E2PBSWMZ/356PB2MBTZ control via MQTT"
description: "Integrate your Schneider Electric 41E2PBSWMZ/356PB2MBTZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/41E2PBSWMZ_356PB2MBTZ.md)*

# Schneider Electric 41E2PBSWMZ/356PB2MBTZ

|     |     |
|-----|-----|
| Model | 41E2PBSWMZ/356PB2MBTZ  |
| Vendor  | Schneider Electric  |
| Description | Wiser 40/300-Series Module Switch 2A |
| Exposes | switch (state), linkquality |
| Picture | ![Schneider Electric 41E2PBSWMZ/356PB2MBTZ](https://www.zigbee2mqtt.io/images/devices/41E2PBSWMZ_356PB2MBTZ.jpg) |


## Notes

None


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.
