---
title: "Livolo TI0001-hygrometer control via MQTT"
description: "Integrate your Livolo TI0001-hygrometer via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-06-30T19:11:08
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Livolo TI0001-hygrometer

|     |     |
|-----|-----|
| Model | TI0001-hygrometer  |
| Vendor  | [Livolo](/supported-devices/#v=Livolo)  |
| Description | Zigbee Digital Humidity and Temperature Sensor |
| Exposes | humidity, temperature, linkquality |
| Picture | ![Livolo TI0001-hygrometer](https://www.zigbee2mqtt.io/images/devices/TI0001-hygrometer.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

After pairing device will be shown as "TI0001" device. Need to manually trigger a re-configure of the device either using web-frontend
of Zigbee2MQTT or using [MQTT message](../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestdeviceconfigure) right after pairing.
In case of problems it's recommended to remove device and than retry pairing and re-configuring device.

### Important
These devices can only be used on channel 26.
These devices are locked to the manufacturer's network key (ext_pan_id).
Your configuration file [data/configuration.yaml](../guide/configuration/) must contain the following:

```yaml
advanced:
  ext_pan_id: [33,117,141,25,0,75,18,0]
  channel: 26
```

These devices may not co-exist with other Zigbee devices on the same network.
You may need to add a dedicated coordinator and create a new network for Livolo.  The Deconz adapter may not work as a coordinator.  Pairing with the Deconz dongle needs to take place immediately after pairing the device with the Livolo hub, but status messages from the device are not then reflected in Zigbee2MQTT (so you can't see when the button has been pressed on the device).  The Sonoff Zigbee 3.0 USB Dongle Plus ZBDongle-P does seem to work once reflashed.  To allow the device to complete its interview, re-pairing needs to be initiated on the device before the device exits pairing mode (ie before the rapid flashing sequence finishes and as soon as the device appears for the first time in Zigbee2MQTT).
If you decided to create a new network, you should specify another 'pan_id'.

```yaml
advanced:
  pan_id: 6756
```
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

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

