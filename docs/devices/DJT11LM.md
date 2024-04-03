---
title: "Aqara DJT11LM control via MQTT"
description: "Integrate your Aqara DJT11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara DJT11LM

|     |     |
|-----|-----|
| Model | DJT11LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Vibration sensor |
| Exposes | battery, device_temperature, vibration, strength, sensitivity, angle_x, angle_y, angle_z, x_axis, y_axis, z_axis, voltage, power_outage_count, action, linkquality |
| Picture | ![Aqara DJT11LM](https://www.zigbee2mqtt.io/images/devices/DJT11LM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Battery
Uses a CR2032 battery

### Pairing
Press the reset button for about 5 seconds. The LED lights up 3 times.
Then press the button again every 2 seconds to keep it awake (maximum 20 times).

*NOTE: When you fail to pair a device, try replacing the battery, this could solve the problem.*

### Meaning of `strength` value
The `strength` value, which is reported every 300 seconds after vibration is detected, is the max strength measured during a period of 300 second.

### Frequency of `vibration` actions
The subtopic `/action` with payload `vibration` and associated status JSON blobs are emitted about one second after onset, but not more frequently than once per minute regardless of whether vibrations are continuous or intermittent within that minute.  This action message is distinct from the status JSON blob message emitted approximately every hour and after `vibration_timeout` described below.

If vibrations should persist, another `vibration` action will be emitted after that minute interval expires.  There is no evident way of changing the duration of this hold-off period.

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
* Ensure the x, y and z offset are set to 0 in the device specific settings
* Put the device on a level surface, face up.
  * A few seconds after the tilt action, the angles and accelerometer values (``x_axis``, ``y_axis``, ``z_axis``) are updated
  * ``x_axis`` and ``y_axis`` should be small, ``z_axis`` around 1000
  * Set the offset for x and y to the opposite values of ``x_axis`` and ``y_axis`` to compensate.
* Put the device on a side
  * After a few seconds, te values update, and ``z_axis`` should be small, as well as one of the ``x_axis`` or ``y_axis``, the other being around ±1000
  * Set the offset for z to the opposite of ``z_axis``
You can fine tune the values of the offset by trying other sides and picking values that match best.
Remember that the device sends accelerometer values a few seconds after the actual tilt event.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `vibration_timeout`: Time in seconds after which vibration is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of `0`

* `x_calibration`: Calibrates the x value (absolute offset), takes into effect on next report of device. The value must be a number.

* `y_calibration`: Calibrates the y value (absolute offset), takes into effect on next report of device. The value must be a number.

* `z_calibration`: Calibrates the z value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
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

### X axis (numeric)
Accelerometer X value.
Value can be found in the published state on the `x_axis` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Y axis (numeric)
Accelerometer Y value.
Value can be found in the published state on the `y_axis` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Z axis (numeric)
Accelerometer Z value.
Value can be found in the published state on the `z_axis` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Power outage count (numeric)
Number of power outages.
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `vibration`, `tilt`, `drop`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

