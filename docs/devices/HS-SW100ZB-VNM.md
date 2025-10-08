---
title: "HS-SW100ZB-VNM control via MQTT"
description: "Integrate your HS-SW100ZB-VNM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-03T02:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HS-SW100ZB-VNM

|     |     |
|-----|-----|
| Model | HS-SW100ZB-VNM  |
| Vendor  | [VSmart](/supported-devices/#v=VSmart)  |
| Description | Wall switch 1 gang |
| Exposes | switch (state), led_indicator_color_on, led_indicator_color_off, vibration_intensity, time_periods, morning_led_intensity, evening_led_intensity, night_led_intensity, led_brightness_levels |
| Picture | ![HS-SW100ZB-VNM](https://www.zigbee2mqtt.io/images/devices/HS-SW100ZB-VNM.png) |


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
- Maximum load: 10A resistive, 6A inductive

### LED Indicator Features
- **led_indicator_color_on**: Set LED color when switch is ON (hex format: #RRGGBB, e.g., #ff0000 for red)
- **led_indicator_color_off**: Set LED color when switch is OFF (hex format: #RRGGBB, e.g., #ffffff for white)
- **morning_led_intensity**: LED intensity for morning period (0-100%)
- **evening_led_intensity**: LED intensity for evening period (0-100%)
- **night_led_intensity**: LED intensity for night period (0-100%)
- **led_brightness_levels**: Configure low/medium/high brightness levels

### Vibration Feedback
- **vibration_intensity**: Button vibration intensity (0-100%)
- Provides tactile feedback when button is pressed

### Time Period Settings
- **time_periods**: Configure morning, evening, and night periods
- **morning_start_hour**: Morning period start hour (0-23)
- **evening_start_hour**: Evening period start hour (0-23)
- **night_start_hour**: Night period start hour (0-23)
- Morning must start before evening, evening must start before night
- LED behavior changes based on time periods

### LED Brightness Levels
- **led_brightness_levels**: Configure brightness levels for different intensity settings
- **low_brightness_percent**: Low brightness level percentage (0-100%)
- **medium_brightness_percent**: Medium brightness level percentage (0-100%)
- **high_brightness_percent**: High brightness level percentage (0-100%)
- Low must be lower than medium, Medium must be lower than high

<!-- Notes END: Do not edit below this line -->
