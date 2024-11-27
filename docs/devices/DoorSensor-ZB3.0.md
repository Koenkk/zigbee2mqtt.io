---
title: "Shyugj Door Sensor control via MQTT"
description: "Integrate your Shyugj via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-11-24T15:40:00Z
pageClass: device-page
---

# Shyugj DoorSensor-ZB3.0

|     |     |
|-----|-----|
| Model | DoorSensor-ZB3.0  |
| Vendor  | [Shyugj](/supported-devices/#v=Shyugj)  |
| Description | Door sensor |
| Exposes | battery, alarm_1, alarm_2, tamper, battery_low, linkquality |
| Picture | ![Shyugj Door Sensor](https://www.zigbee2mqtt.io/images/devices/S901D-ZG.png) |

<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->

## Setup

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


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Alarm 1 (binary)
Indicates whether the first alarm is triggered.
Value can be found in the published state on the `alarm` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` alarm is ON, if `false` OFF.

### Alarm 2 (binary)
Indicates whether the second alarm is triggered.
Some devices have this property, but no second alarm.
Value can be found in the published state on the `alarm` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` alarm is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

