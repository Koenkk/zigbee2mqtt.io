---
title: "HS-SW300ZB-VNM control via MQTT"
description: "Integrate your HS-SW300ZB-VNM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-03T02:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HS-SW300ZB-VNM

|     |     |
|-----|-----|
| Model | HS-SW300ZB-VNM  |
| Vendor  | [VSmart](/supported-devices/#v=VSmart)  |
| Description | VSmart Wall Switch 3 Gang |
| Exposes | switch (state), ledIndicatorColorOn, ledIndicatorColorOff, vibrationIntensity, timePeriods, morningLedIntensity, eveningLedIntensity, nightLedIntensity, ledBrightnessLevels |
| Picture | ![HS-SW300ZB-VNM](https://www.zigbee2mqtt.io/images/devices/HS-SW300ZB-VNM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
Put the device in pairing mode by pressing and holding the button on the device for 5 seconds until the LED indicator flashes rapidly.

### Reset
To reset the device, press and hold the button for 10 seconds until the LED indicator flashes 3 times.

### Installation
- Turn off power at the circuit breaker before installation
- Remove existing switch and connect wires according to the wiring diagram
- Ensure proper grounding
- Maximum load per channel: 10A resistive, 6A inductive

### Multi-Endpoint Control
This device supports 3 independent switches:
- **Switch 1**: Controls first electrical load
- **Switch 2**: Controls second electrical load
- **Switch 3**: Controls third electrical load
- Each switch can be controlled independently via MQTT

### LED Indicator Features
- **ledIndicatorColorOn**: Set LED color when switch is ON (hex format: #RRGGBB)
- **ledIndicatorColorOff**: Set LED color when switch is OFF (hex format: #RRGGBB)
- **morningLedIntensity**: LED intensity for morning period (0-100%)
- **eveningLedIntensity**: LED intensity for evening period (0-100%)
- **nightLedIntensity**: LED intensity for night period (0-100%)
- **ledBrightnessLevels**: Configure low/medium/high brightness levels

### Vibration Feedback
- **vibrationIntensity**: Button vibration intensity (0-100%)
- Provides tactile feedback when button is pressed

### Time Period Settings
- **timePeriods**: Configure morning, evening, and night periods
- Morning must start before evening, evening must start before night
- LED behavior changes based on time periods

<!-- Notes END: Do not edit below this line -->
