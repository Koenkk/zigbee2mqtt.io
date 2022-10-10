---
title: "HZC Electric S093TH-ZG control via MQTT"
description: "Integrate your HZC Electric S093TH-ZG Temperature and Humidity Sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-10-10T21:00:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HZC Electric S093TH-ZG

|     |     |
|-----|-----|
| Model | S093TH-ZG |
| Vendor  | HZC Electric |
| Description | Temperature and Humidity Sensor |
| Exposes | temperature, pressure, humidity, linkquality |
| Picture | ![HZC Electric S093TH-ZG](https://www.zigbee2mqtt.io/images/devices/S093TH-ZG.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->

## Notes
The device has an indicator LED (red/orange/green) on the front and a button on the back.

Device supports Zigbee 3.0, is powered by a CR2450 battery, has a temperature accuracy of plus minus 1.5 K and a humidity accuracy of 5 percent. The stated battery life is two years and the operating temperature is from -10C to +45C. The physical dimensions are 45 x 45 x 17.1 mm.

### Factory Reset
Push the button three short and one long time. After about 10 seconds, the LED will blink quickly in red. Then release the button. The LED will stay solid red for three seconds and reset.

### Pairing
Push the button three times.

If the device is not paired, the LED will blink slowly in orange and the device will attempt to pair.

If the device is paired but can't connect, the LED will blink quickly in orange for three seconds.

If the device is paired, the LED will blink slowly in green for five seconds.

### LED indicators
The LED blinks slowly 7 times when powered on.

When pairing, the LED will blink slowly in orange while searching for a network. The search will timeout after two minutes.

When pairing is in progress, the LED will stay on in green. The official documentation is very unclear on what this actually means.

After successfuly pairing, the LED will turn off.

If pairing failed, the LED will stay solidly orange for three seconds.

If the battery is below 10 % the LED will blink orange once a minute.

<!-- Notes END: Do not edit below this line -->



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

