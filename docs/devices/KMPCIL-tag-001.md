---
title: "KMPCIL KMPCIL-tag-001 control via MQTT"
description: "Integrate your KMPCIL KMPCIL-tag-001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-06-01T15:00:02
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# KMPCIL KMPCIL-tag-001

|     |     |
|-----|-----|
| Model | KMPCIL-tag-001  |
| Vendor  | [KMPCIL](/supported-devices/#v=KMPCIL)  |
| Description | Arrival sensor |
| Exposes | battery, presence, power_state, occupancy, vibration, temperature, linkquality |
| Picture | ![KMPCIL KMPCIL-tag-001](https://www.zigbee2mqtt.io/images/devices/KMPCIL-tag-001.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Installation
The Arrival Sensor will be in pairing mode when it is first powered up.  You can force it to go back into pairing mode by factory resetting the sensor in the following steps.

1.remove all power (battery and dc)
2.press the button on the back of the board.
3.plug the dc power and count to 4 to 5 seconds (not more).
4.release the button. At this point, the module is in pairing mode.

Once the Arrival Sensor is in pairing mode,  please follow the standard Zigbee2Mqtt pairing process for a new device. 

### Additional notes
Please visit https://community.home-assistant.io/t/zigbee-arrival-sensor-for-car/382529/7
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `presence_timeout_dc`: Time in seconds after which presence is cleared after detecting it (default 60 seconds) while in DC. The value must be a number with a minimum value of `60`

* `presence_timeout_battery`: Time in seconds after which presence is cleared after detecting it (default 420 seconds) while in Battery. The value must be a number with a minimum value of `120`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Power state (binary)
Value can be found in the published state on the `power_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` power state is ON, if `false` OFF.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Vibration (binary)
Indicates whether the device detected vibration.
Value can be found in the published state on the `vibration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` vibration is ON, if `false` OFF.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

