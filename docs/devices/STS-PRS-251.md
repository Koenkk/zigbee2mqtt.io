---
title: "SmartThings STS-PRS-251 control via MQTT"
description: "Integrate your SmartThings STS-PRS-251 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SmartThings STS-PRS-251

|     |     |
|-----|-----|
| Model | STS-PRS-251  |
| Vendor  | [SmartThings](/supported-devices/#v=SmartThings)  |
| Description | Arrival sensor |
| Exposes | battery, presence, action, beep, linkquality |
| Picture | ![SmartThings STS-PRS-251](https://www.zigbee2mqtt.io/images/devices/STS-PRS-251.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Let the device beep.
```json
{
    "beep": 5
}
```


* `presence_timeout`: Timeout (in seconds) after which `presence: false` will be send when the device has not checked-in. By default 100 seconds, don't go lower then 30 seconds.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `presence_timeout`: Time in seconds after which presence is cleared after detecting it (default 100 seconds). The value must be a number with a minimum value of `0`

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `beeping`.

### Beep (enum)
Trigger beep for x seconds.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"beep": NEW_VALUE}`.
The possible values are: `2`, `5`, `10`, `15`, `30`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

