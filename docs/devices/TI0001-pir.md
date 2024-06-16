---
title: "Livolo TI0001-pir control via MQTT"
description: "Integrate your Livolo TI0001-pir via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-02-06T22:00:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Livolo TI0001-pir

|     |     |
|-----|-----|
| Model | TI0001-pir  |
| Vendor  | [Livolo](/supported-devices/#v=Livolo)  |
| Description | Zigbee motion Sensor |
| Exposes | occupancy, linkquality |
| Picture | ![Livolo TI0001-pir](https://www.zigbee2mqtt.io/images/devices/TI0001-pir.png) |


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




## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

