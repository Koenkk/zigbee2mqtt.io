---
title: "BTicino FC80GCS control via MQTT"
description: "Integrate your BTicino FC80GCS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-05-01T19:17:56
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# BTicino FC80GCS

|     |     |
|-----|-----|
| Model | FC80GCS  |
| Vendor  | [BTicino](/supported-devices/#v=BTicino)  |
| Description | DIN power consumption module |
| Exposes | power, power_apparent, power_alarm_active, power_alarm, linkquality |
| Picture | ![BTicino FC80GCS](https://www.zigbee2mqtt.io/images/devices/FC80GCS.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `identity_effect`: Defines the identification effect to simplify the device identification. Example:
```yaml
identity_effect:
  effect: blink 3 # allowed: 'blink 3', 'fixed', 'blink green', 'blink blue'
  color: red # allowed: 'default', 'red', 'green', 'blue', 'lightblue', 'yellow', 'pink', 'white'
```


## Exposes

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Power apparent (numeric)
Instantaneous measured apparent power.
Value can be found in the published state on the `power_apparent` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### Power alarm active (binary)
Value can be found in the published state on the `power_alarm_active` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` power alarm active is ON, if `false` OFF.

### Power alarm (binary)
Enable/disable the power alarm.
Value can be found in the published state on the `power_alarm` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_alarm": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_alarm": NEW_VALUE}`.
If value equals `true` power alarm is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

