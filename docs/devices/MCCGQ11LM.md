---
title: "Aqara MCCGQ11LM control via MQTT"
description: "Integrate your Aqara MCCGQ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara MCCGQ11LM

|     |     |
|-----|-----|
| Model | MCCGQ11LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Door and window sensor |
| Exposes | battery, contact, device_temperature, voltage, power_outage_count, trigger_count, linkquality |
| Picture | ![Aqara MCCGQ11LM](https://www.zigbee2mqtt.io/images/devices/MCCGQ11LM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Battery
Uses a CR1632 battery

### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join.  
If this doesn't work, after starting the pairing process with the long press, keep short pressing the button approximately once a second until the interview process is finished.

In some cases where users are using a CC2531 USB stick (see https://github.com/Koenkk/zigbee2mqtt/issues/839) performing a shutdown of Zigbee2MQTT, removing and reinserting the USB stick, then restarting Zigbee2MQTT has proven successful for pairing via the above method when it has not been working.
Switching to the ember adapter after [upgrading the stick firmware](https://darkxst.github.io/silabs-firmware-builder/) might solve this pairing issue.


### Troubleshooting: device stops sending messages/disconnects from network
Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network.
Most of the times this happens because of the following reasons:
- Device has a weak signal, you can see the signal quality in the published messages as `linkquality`. A linkquality < 20 is considered weak.
- Low battery voltage, this can even happen when the battery still appears full. Try a different battery.
- The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, Legrand, OSRAM, Sylvania, SmartThings, Securifi. A possible solution is to connect the device directly to the central coordinator by pushing the reset button while being physically close to it.

More detailed information about this can be found [here](https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623).

### Recommendation
If the contact is being made via a horizontal slide (e.g. the sensor is placed at the top of a sliding door), the sensor may provide three or more messages with conflicting states. To get around this issue, consider using the `debounce` option in your device specific configuration.

E.g. (devices.yaml)


```yaml
'0xabc457fffe679xyz':
    friendly_name: my_sensor
    debounce: 1
```
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

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

### Power outage count (numeric)
Number of power outages.
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Trigger count (numeric)
Indicates how many times the sensor was triggered (since last scheduled report).
Value can be found in the published state on the `trigger_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

