---
title: "HEIMAN HS1SA control via MQTT"
description: "Integrate your HEIMAN HS1SA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-11-01T12:47:02Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HEIMAN HS1SA

|     |     |
|-----|-----|
| Model | HS1SA  |
| Vendor  | [HEIMAN](/supported-devices/#v=HEIMAN)  |
| Description | Smoke detector |
| Exposes | smoke, battery_low, battery, linkquality |
| Picture | ![HEIMAN HS1SA](https://www.zigbee2mqtt.io/images/devices/HS1SA.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing

Press the side button of the device with a paper clip for more than 2 seconds. The main button led will flash rapidly. Then make sure the device is awake during pairing phase or the configuration may fail. To ensure device is awake press the side button every 2 seconds until configuration is done in Zigbee2MQTT logs.

### Reset

If you have trouble pairing, the device can be reset by pressing the side button with a paper clip for 5 seconds. The led will flash (slower than in pairing mode) 6 times to confirm. After that you can retry the normal pairing procedure.

### Important
There are 3 versions of this device: Standalone, Zigbee and Z-wave. These are visually identical. Make sure to get the correct version that will work with Zigbee2MQTT:

Supported:
- **HS1SA-M : Zigbee**
- **HS1SA-N : Zigbee**
- **HS1SA-E : Zigbee 3.0**

Unsupported:
- HS1SA : Standalone
- HS1SA-Z : Z-wave

The product code should end in *-M* for the Zigbee version. The label inside the battery compartment should also show the Zigbee logo.

### Issue with regular (false) alarm notifications

If your smoke detector is regularily signalling an alarm over Zigbee (every 1-2 days), without actually making any alarm sound, it is probably affected by a firmware bug. This can be worked around as follows:

1. Open the device in the Z2M web interface
2. Navigate to the Dev console
3. Select the cluster `ssIasZone` from the dropdown list
4. Select the attributes `zoneState`, `zoneType`, `zoneStatus` and `zoneId`
5. Click the *Read* button
5. Wake the device immediately after pressing the *Read* button by pressing it's main button (test alarm button).

Timing is important here so you might need a fews tries. Once you have read these attributes successfully the false alarm messages should be gone. ([Source](https://github.com/dresden-elektronik/deconz-rest-plugin/issues/5824#issuecomment-1092089211))
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

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

