---
title: "Develco SBTZB-110 control via MQTT"
description: "Integrate your Develco SBTZB-110 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-08-26T06:45:14
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Develco SBTZB-110

|     |     |
|-----|-----|
| Model | SBTZB-110  |
| Vendor  | [Develco](/supported-devices/#v=Develco)  |
| Description | Smart button |
| Exposes | battery, voltage, action, linkquality |
| Picture | ![Develco SBTZB-110](https://www.zigbee2mqtt.io/images/devices/SBTZB-110.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

Pairing:
Press the button to activate search for network. The Smart Button will start searching (up to 15 minutes) for a Zigbee network to join.
• While the device is searching for a Zigbee network to join, the yellow LED flashes.
• When the LED stops flashing, the device has successfully joined the Zigbee network.
• If the scanning has timed out, a short press on the button will restart it.

Resetting the device:
1. Press and hold the button for 10 seconds. Release the button immediately when the LED flashes green. You now have 60 seconds to reset the device.
2. Press the button again and hold it.
3. While you are holding the button down, the LED flashes yellow once, then two times in a row, and finally numerous times in a row.
4. Release the button while the LED is flashing numerous times in a row.
5. After you release the button, the LED shows one long flash, and the reset is completed
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Reported battery voltage in millivolts.
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `mV`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

