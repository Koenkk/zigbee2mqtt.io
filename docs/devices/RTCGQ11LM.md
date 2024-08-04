---
title: "Aqara RTCGQ11LM control via MQTT"
description: "Integrate your Aqara RTCGQ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara RTCGQ11LM

|     |     |
|-----|-----|
| Model | RTCGQ11LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Motion sensor |
| Exposes | battery, occupancy, device_temperature, voltage, illuminance_lux, illuminance, power_outage_count, linkquality |
| Picture | ![Aqara RTCGQ11LM](https://www.zigbee2mqtt.io/images/devices/RTCGQ11LM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Battery
Uses a CR2450 battery.

### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join. If this doesn't work, try with a single short button press.

In some cases where users are using a CC2531 USB stick (see https://github.com/Koenkk/zigbee2mqtt/issues/839) performing a shutdown of Zigbee2MQTT, removing and reinserting the USB stick, then restarting Zigbee2MQTT has proven successful for pairing via the above method when it has not been working.
Switching to the ember adapter after [upgrading the stick firmware](https://darkxst.github.io/silabs-firmware-builder/) might solve this pairing issue.


### Troubleshooting: device stops sending messages/disconnects from network
Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network.
Most of the times this happens because of the following reasons:
- Device has a weak signal, you can see the signal quality in the published messages as `linkquality`. A linkquality < 20 is considered weak.
- Low battery voltage, this can even happen when the battery still appears full. Try a different battery.
- The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, Legrand, OSRAM, Sylvania, SmartThings, Securifi. A possible solution is to connect the device directly to the central coordinator by pushing the reset button while being physically close to it.

More detailed information about this can be found [here](https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623).

### Note about `occupancy_timeout` option
`occupancy_timeout` should not be set to lower than 60 seconds.
The reason is this: after detecting a motion the sensor ignores any movements for
exactly 60 seconds. In case there are movements after this 60 seconds, a new message
(`occupancy: true`) will be sent and the sensor will go to sleep for another minute, and so on.
Therefore, in order to sustain `occupancy: true`, you need a reasonable window after this 60s sleep
to determine continued occupancy.
This is expected behaviour (see [#270](https://github.com/Koenkk/zigbee2mqtt/issues/270#issuecomment-414999973)).
To work around this, a
[hardware modification](https://community.smartthings.com/t/making-xiaomi-motion-sensor-a-super-motion-sensor/139806)
is needed.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `illuminance_lux_calibration`: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `occupancy_timeout`: Time in seconds after which occupancy is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of `0`

* `no_occupancy_since`: Sends a message the last time occupancy (occupancy: true) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be send after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of [object Object].


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Illuminance (lux) (numeric)
Measured illuminance in lux.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Illuminance (numeric)
Measured illuminance in lux.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

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

