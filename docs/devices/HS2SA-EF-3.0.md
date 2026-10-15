---
title: "Heiman HS2SA-EF-3.0 control via MQTT"
description: "Integrate your Heiman HS2SA-EF-3.0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-01T18:20:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Heiman HS2SA-EF-3.0

|     |     |
|-----|-----|
| Model | HS2SA-EF-3.0  |
| Vendor  | [Heiman](/supported-devices/#v=Heiman)  |
| Description | Smart smoke alarm |
| Exposes | smoke, battery_low, battery, test |
| Picture | ![Heiman HS2SA-EF-3.0](https://www.zigbee2mqtt.io/images/devices/HS2SA-EF-3.0.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

The Heiman `HS2SA-1` Zigbee 3.0 smoke detector gets detected as this model, but exposed functions work properly.

### Pairing
To put the device into Zigbee pairing mode, quickly press the "Test/Hush/Networking" button 3 times within 2 seconds.
While in pairing mode, the green LED flashes quickly (5 times per second). Pairing success is indicated by the LED lighting green for 3 seconds and then turning off. If pairing fails, the green LED flashes slowly (2 times per second) for 3 seconds, then turns off. Pairing mode stops automatically after 60 seconds, or can be stopped by pressing the button again.

After successfully pairing the device to your Zigbee network, initiate the test function of the smoke detector by pushing and holding the "Test/Hush/Networking" button for ~1 second. (Please be prepared for the loud noise!) The device state in Z2M only shows all exposed attributes properly after such a test has been performed.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Test (binary)
Indicates whether the device is being tested.
Value can be found in the published state on the `test` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` test is ON, if `false` OFF.

