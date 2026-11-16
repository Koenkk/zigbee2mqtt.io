---
title: "Acuity Brands Lighting (ABL) CPXC 2X4 TUWH control via MQTT"
description: "Integrate your Acuity Brands Lighting (ABL) CPXC 2X4 TUWH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-11-01T23:30:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Acuity Brands Lighting (ABL) CPXC 2X4 TUWH

|     |     |
|-----|-----|
| Model | CPXC 2X4 TUWH  |
| Vendor  | [Acuity Brands Lighting (ABL)](/supported-devices/#v=Acuity%20Brands%20Lighting%20(ABL))  |
| Description | Lithonia CPX Connect 2x4 smart tunable white LED troffer with integrated motion sensor |
| Exposes | light (state, brightness, color_temp), power_on_behavior, occupancy, occupancy_timeout, pir_uto_delay, pir_uto_threshold |
| Picture | ![Acuity Brands Lighting (ABL) CPXC 2X4 TUWH](https://www.zigbee2mqtt.io/images/devices/CPXC-2X4-TUWH.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Advertised but non-functional features
The firmware (v1.0, dateCode 20190402) advertises several capabilities it does not implement, so they are not exposed:

- xy color: `colorCapabilities` claims xy support, but color commands produce no light output at all — the panel is tunable-white-only (2700–5000 K).
- Effects and identify: the genIdentify `identify` and `triggerEffect` commands do nothing.
- Attribute reporting: every `configureReporting` request is rejected with `INVALID_VALUE`, so no reporting is configured. The device still sends unsolicited occupancy reports, and state changes commanded through Zigbee2MQTT are reflected normally.

### Integrated motion sensor
The hidden PIR sensor reports `occupancy` and can be tuned with `pir_uto_delay` (seconds without motion before occupancy clears), `pir_uto_threshold` (how much motion within the delay window is needed to keep it occupied) and `occupancy_timeout`. The fixture's standalone turn-on-with-motion behaviour stays dormant while it is joined to a Zigbee network, so motion automation is fully under your controller's control. Note the sensor has a wide field of view and can see through an open doorway.
<!-- Notes END: Do not edit below this line -->
