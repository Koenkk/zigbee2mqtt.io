---
title: "Aqara MCCGQ12LM control via MQTT"
description: "Integrate your Aqara MCCGQ12LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-08-17T18:57:09Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara MCCGQ12LM

|     |     |
|-----|-----|
| Model | MCCGQ12LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Door and window sensor T1 |
| Exposes | contact, battery, voltage, linkquality |
| Picture | ![Aqara MCCGQ12LM](https://www.zigbee2mqtt.io/images/devices/MCCGQ12LM.png) |
| White-label | Aqara DW-S03D, Yandex YNDX-00520 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join, but the interview process may not finish.
If that happens, keep doing short presses to the reset button to keep the light flashing, until the interview process finishes successfully.

### Recommendation
If the contact is being made via a horizontal slide (e.g. the sensor is placed at the top of a sliding door), the sensor may provide three or more messages with conflicting states. To get around this issue, consider using the `debounce` option in your device specific configuration.

E.g. (devices.yaml)


```yaml
'0xabc457fffe679xyz':
    friendly_name: my_sensor
    debounce: 1
```
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

