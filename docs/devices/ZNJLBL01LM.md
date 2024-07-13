---
title: "Aqara ZNJLBL01LM control via MQTT"
description: "Integrate your Aqara ZNJLBL01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-09-01T18:11:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara ZNJLBL01LM

|     |     |
|-----|-----|
| Model | ZNJLBL01LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Roller shade driver E1 |
| Exposes | cover (state, position), battery, device_temperature, charging_status, motor_state, running, motor_speed, linkquality |
| Picture | ![Aqara ZNJLBL01LM](https://www.zigbee2mqtt.io/images/devices/ZNJLBL01LM.png) |
| White-label | Aqara RSD-M01 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
Hold the reset button, on the bottom of the device, for 5 seconds.

_Pairing the device with a new bridge will **not** reset the fully open/closed position._

### Fully open and fully closed positions
The rotation range (fully open and fully closed) can be reset by holding the both the up and down buttons for 3 seconds until the light turns blue.

#### Fully open position
The fully open position can be set by setting the shade to the desired position and then pressing the up button 5 times in succession. If successful the light turns blue and flashes 3 times.

#### Fully closed position
The fully closed position can be set by setting the shade to the desired position and then pressing the down button 5 times in succession. If successful the light turns blue and flashes 3 times.

### Change button directions
If the up and down buttons are working in the oppsite direction of how your blinds opreate, they can be swapped by pressing the reset button 3 times. If successful the light turns solid blue for 1 second.

### Adapter firmware
In order for this device to work (fully), at least the following firmware is required on your adapter:
- CC2530/CC2531: [`20211115`](https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin)
- CC1352/CC2652: [`20211114`](https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin)
- CC2538: [`20211222`](https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592)
- Conbee II: [`0x26720700`]( http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF)

*Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.*
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
To read the current state of this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Charging status (binary)
The current charging status..
Value can be found in the published state on the `charging_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"charging_status": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` charging status is ON, if `false` OFF.

### Motor state (enum)
The current state of the motor..
Value can be found in the published state on the `motor_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `closing`, `opening`, `stopped`, `blocked`.

### Running (binary)
Whether the motor is moving or not.
Value can be found in the published state on the `running` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` running is ON, if `false` OFF.

### Motor speed (enum)
Controls the motor speed.
Value can be found in the published state on the `motor_speed` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motor_speed": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_speed": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

