---
title: "Shyugj S901D-ZG control via MQTT"
description: "Integrate your Shyugj S901D-ZG via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-11-30T20:27:20
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Shyugj S901D-ZG

|     |     |
|-----|-----|
| Model | S901D-ZG  |
| Vendor  | [Shyugj](/supported-devices/#v=Shyugj)  |
| Description | Door sensor |
| Exposes | battery, alarm_1, alarm_2, tamper, battery_low, linkquality |
| Picture | ![Shyugj S901D-ZG](https://www.zigbee2mqtt.io/images/devices/S901D-ZG.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Factory Reset

Factory reset the sensor by holding the small rear button for 10 seconds. The LED will blink quickly in red for this duration, then go solid for three seconds, indicating a reset.

### Pairing

Short press the small rear button three times. If the device is not in the network, the LED will blink slowly in orange then attempt to join an available network. If the device is already in the network, the LED will blink green for five seconds - a factory reset is needed to pair to a new network.

### LED meanings

| Blink/Solid | Color | Duration | Meaning |
|-----|-----|-----|-----|
| Blink | Green | 7 secs | Power on |
| Blink | Orange | - | Pairing (timeout: 2 mins) |
| Solid | Green | - | Pairing successful |
| Solid | Orange | 3 secs | Pairing failed |
| Blink | Orange | Once per minute | Low battery |
| Blink | Orange | Quickly | Lost network connection |
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Alarm 1 (binary)
Indicates whether IAS Zone alarm 1 is active.
Value can be found in the published state on the `alarm_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` alarm 1 is ON, if `false` OFF.

### Alarm 2 (binary)
Indicates whether IAS Zone alarm 2 is active.
Value can be found in the published state on the `alarm_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` alarm 2 is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Battery low (binary)
Indicates whether the battery of the device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

