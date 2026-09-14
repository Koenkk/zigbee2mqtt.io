---
title: "Zemismart ZNS-LRL2E control via MQTT"
description: "Integrate your Zemismart ZNS-LRL2E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-12T00:00:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Zemismart ZNS-LRL2E

|     |     |
|-----|-----|
| Model | ZNS-LRL2E |
| Vendor  | [Zemismart](/supported-devices/#v=Zemismart) |
| Description | 30A immersion switch |
| Exposes | switch (state) |
| Picture | ![Zemismart ZNS-LRL2E](https://www.zigbee2mqtt.io/images/devices/ZNS-LRL2E.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->

## Notes

- Zigbee2MQTT exposes this device as a switch.
- The observed Tuya datapoint is DP 1, which reports the relay state as on/off.
- No metering datapoints were observed during testing; current, voltage, power, and energy are not exposed.

<!-- Notes END: Do not edit below this line -->



## Exposes

### Switch
This switch supports the following features: `state`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}` or `{"state": "OFF"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
