---
title: "Xiaomi DJT11LM control via MQTT"
description: "Integrate your Xiaomi DJT11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi DJT11LM

|     |     |
|-----|-----|
| Model | DJT11LM  |
| Vendor  | [Xiaomi](/supported-devices/#v=Xiaomi)  |
| Description | Aqara vibration sensor |
| Exposes | battery, device_temperature, vibration, action, strength, sensitivity, angle_x, angle_y, angle_z, voltage, power_outage_count, linkquality |
| Picture | ![Xiaomi DJT11LM](https://www.zigbee2mqtt.io/images/devices/DJT11LM.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Battery
Uses a CR2032 battery

### Pairing
Press the reset button for about 5 seconds. The LED lights up 3 times.
Then press the button again every 2 seconds (maximum 20 times).

*NOTE: When you fail to pair a device, try replacing the battery, this could solve the problem.*

### Meaning of `strength` value
The `strength` value, which is reported every 300 seconds after vibration is detected, is the max strength measured during a period of 300 second.


### Troubleshooting: device stops sending messages/disconnects from network
Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network.
Most of the times this happens because of the following reasons:
- Device has a weak signal, you can see the signal quality in the published messages as `linkquality`. A linkquality < 20 is considered weak.
- Low battery voltage, this can even happen when the battery still appears full. Try a different battery.
- The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, Legrand, OSRAM, Sylvania, SmartThings, Securifi. A possible solution is to connect the device directly to the central coordinator by pushing the reset button while being physically close to it.

More detailed information about this can be found [here](https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623).


### Sensitivity
The sensitivity can be changed by publishing to `zigbee2mqtt/FRIENDLY_NAME/set`
`{"sensitivity": "SENSITIVITY"}` where `SENSITIVITY` is one of the following
values: `low`, `medium`,  `high`.

After setting the sensitivity you immediately have to start pressing the reset button with an interval of 1 second until you see Zigbee2MQTT publishing the new sensitivity to MQTT.


### Calibration
In order to improve the factory calibration or lack thereof, you can get a better result with a 2 step offset calibration:
* Put the device on a level surface, face up.
  * a few seconds after the tilt action the angles and ``raw_x``, ``raw_y``, ``raw_z`` values are updated
  * ``raw_x`` and ``raw_y`` should be small, ``raw_z`` around 1000
  * set the offset for x and y to the opposite values of ``raw_x`` and ``raw_y`` respectively.
* Put the device on a side
  * after a few seconds, ``raw_z`` should be small, as well as one of the ``raw_x`` or ``raw_y``, the other being around 1000
  * set the offset for z to the opposite of ``raw_z``
You can fine tune the values of the offset by trying other sides and picking values that match best.
After calibration, you can remove the raw values from the payload by adding  ``raw_[xyz]`` to the ``filtered_attributes`` device setting 
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `vibration_timeout`: Time in seconds after which vibration is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of `0`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported..
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Vibration (binary)
Indicates whether the device detected vibration.
Value can be found in the published state on the `vibration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` vibration is ON, if `false` OFF.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `vibration`, `tilt`, `drop`.

### Strength (numeric)
Value can be found in the published state on the `strength` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Sensitivity (enum)
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Angle x (numeric)
Value can be found in the published state on the `angle_x` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `-90` and the maximum value is `90`.
The unit of this value is `°`.

### Angle y (numeric)
Value can be found in the published state on the `angle_y` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `-90` and the maximum value is `90`.
The unit of this value is `°`.

### Angle z (numeric)
Value can be found in the published state on the `angle_z` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `-90` and the maximum value is `90`.
The unit of this value is `°`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Power outage count (numeric)
Number of power outages.
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

