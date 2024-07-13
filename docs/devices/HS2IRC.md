---
title: "HEIMAN HS2IRC control via MQTT"
description: "Integrate your HEIMAN HS2IRC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-09-30T20:52:56Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HEIMAN HS2IRC

|     |     |
|-----|-----|
| Model | HS2IRC  |
| Vendor  | [HEIMAN](/supported-devices/#v=HEIMAN)  |
| Description | Smart IR Control |
| Exposes | battery, linkquality |
| Picture | ![HEIMAN HS2IRC](https://www.zigbee2mqtt.io/images/devices/HS2IRC.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


Device can learn up to 15 devices and up to 30 keycodes for each device.

### Configuring
By publishing to `zigbee2mqtt/FRIENDLY_NAME/set` various device attributes can be configured:

#### Create device

Request:
```json
{
    "create": {
        "model_type": 55
    }
}
```

- **model_type**: User-defined model ID. Used just for reference. Can be `1..255`.

Response:
```json
{
    "action": "create",
    "action_result": "success",
    "action_model_type": 55,
    "action_id": 1
}
```

- **action_result**: (`success`/`error`). Action result.
- **action_model_type**: User-defined model ID. `1..255`
- **action_id**: Internal device slot ID. Total IR transmitter can store up to 15 devices with ID `1..15`

NOTE: You should call `get_list` manually to refresh `devices` topic.

#### Learn key

Request:
```json
{
    "learn": {
        "id": 1,
        "key_code": 31
    }
}
```

- **id**: Internal device slot ID. `1..15`.
- **key_code**: Keycode slot ID. `1..30` - Store/replace specific key in specified slot ID. `>=31` - Create slot ID.

NOTE: You should store keys one-by-one if you specified `key_code` by yourself.

Response:
```json
{
    "action": "learn",
    "action_result": "success",
    "action_key_code": 1,
    "action_id": 1
}
```

- **action_result**: (`success`/`error`). Action result.
- **action_key_code**: Internal keycode slot ID, where key was stored. `1...30`
- **action_id**: Internal device slot ID. `1..15`

NOTE: You should call `get_list` manually to refresh `devices` topic after learning key.

#### Send stored key

Request:
```json
{
    "send_key": {
        "id": 1,
        "key_code": 1
    }
}
```

- **id**: Internal device slot ID. `1..15`.
- **key_code**: Keycode slot ID. `1..30`.

#### Get list of the stored devices and keys

Request:
```json
{
    "get_list": ""
}
```

Response:

```json
{
  "devices": [
    {
      "id": 1,
      "key_codes": [
        1,
      ],
      "model_type": 55
    }
  ]
}
```


#### Delete device or keycode

Request:
```json
{
    "delete":{
        "id": 1,
        "key_code": 31
    }
}
```

- **id**: `1..15` - Delete specific device with ID. `>=16` - Delete all devices.
- **key_code**: `1..30` -Delete specific keycode. `>=31` - Delete all keycodes for specified device ID.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

