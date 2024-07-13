---
title: "Bosch BSEN-C2 control via MQTT"
description: "Integrate your Bosch BSEN-C2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-02-01T14:45:57
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BSEN-C2

|     |     |
|-----|-----|
| Model | BSEN-C2  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Door/window contact II |
| Exposes | contact, battery, battery_low, action, linkquality |
| Picture | ![Bosch BSEN-C2](https://www.zigbee2mqtt.io/images/devices/BSEN-C2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Indoor / outdoor use
The sensor has a waterproof level IP45 and therefore is suitable for both indoor and outdoor use. (according manufacturer specification) 

### Pairing
To pair this device you have to install the device via its installation code which you can get by scanning the QR-code sticker on the physical device with your smartphone. Then get the device into pairing mode. In zigbee2mqtt navigate to  "Settings" --> "Tools" and click on "Add install code". Paste the code you got from the QR-code and confirm by clicking "OK" which will get zigbee2mqtt into pairing mode automatically. Wait for your device to be joined.


### Factory resetting
To factory reset the device remove the batteries. While pressing and holding the device's main button, insert the battery back. As soon as the device's LED is starting to blink orange (approx 3sec), release the device's main button and press and hold it again until the device's LED is lighting up green.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Contact (binary)
Indicates whether the device is opened or closed.
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Battery low (binary)
Empty battery indicator.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `single`, `long`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

