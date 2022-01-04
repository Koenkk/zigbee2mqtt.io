---
title: "TuYa TS011F_plug_3 control via MQTT"
description: "Integrate your TuYa TS011F_plug_3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
addedAt: 2021-10-30T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TuYa TS011F_plug_3

|     |     |
|-----|-----|
| Model | TS011F_plug_3  |
| Vendor  | TuYa  |
| Description | Smart plug (with power monitoring by polling) |
| Exposes | switch (state), power, current, voltage, energy, power_outage_memory, linkquality |
| Picture | ![TuYa TS011F_plug_3](https://www.zigbee2mqtt.io/images/devices/TS011F_plug_3.jpg) |
| White-label | VIKEFON TS011F, BlitzWolf BW-SHP15 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Broken attribute reporting functionality

Starting with firmware version 1.0.5 (which comes pre-flashed on plugs produced since Q4 2021) core functionality on this plug is broken. TuYa has moved attribute reporting of the current plug state (on/off) and energy measurement away from the official Zigbee Cluster Library Specification into a private API. Efforts to implement this private API to restore functionality have not succeeded until now.

A workaround for the energy consumption monitoring has been implemented, by polling the power consumption explicitly instead of receiving updates from the plug. To this date it is impossible to retrieve the current state of the plug (on/off).

<!-- cfr: https://github.com/Koenkk/zigbee2mqtt/issues/9057 -->

### Pairing
Pair this device with a long press (5 seconds) on the on/off button. The button will flash blue to indicate it's in pairing mode. When the blue flashing stops it should be paired and the led will turn solid red. If the led is solid blue, the device is not paired or paring was not successful.
<!-- Notes END: Do not edit below this line -->


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `measurement_poll_interval`: This device does not support reporting electric measurements so it is polled instead. The default poll interval is 60 seconds, set to -1 to disable. The value must be a number with a minimum value of `-1`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Power_outage_memory (enum)
Recover state after power outage.
Value can be found in the published state on the `power_outage_memory` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_outage_memory": NEW_VALUE}`.
The possible values are: `on`, `off`, `restore`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

