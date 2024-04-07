---
title: "Livolo TI0001-dimmer control via MQTT"
description: "Integrate your Livolo TI0001-dimmer via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-02-05T19:15:16Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Livolo TI0001-dimmer

|     |     |
|-----|-----|
| Model | TI0001-dimmer  |
| Vendor  | [Livolo](/supported-devices/#v=Livolo)  |
| Description | Zigbee dimmer |
| Exposes | light (state, brightness), linkquality |
| Picture | ![Livolo TI0001-dimmer](https://www.zigbee2mqtt.io/images/devices/TI0001-dimmer.png) |


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

Therefore these devices may not co-existence with other Zigbee devices.
Maybe, you need to add a dedicated coordinator and create a new network for Livolo.
If you decided to create a new network, you should specify another 'pan_id'.

```yaml
advanced:
  pan_id: 6756
```
<!-- Notes END: Do not edit below this line -->




## Exposes

### Light 
This light supports the following features: `state`, `brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

