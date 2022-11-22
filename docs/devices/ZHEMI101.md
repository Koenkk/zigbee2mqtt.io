---
title: "Develco ZHEMI101 control via MQTT"
description: "Integrate your Develco ZHEMI101 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-02-28T13:58:01Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Develco ZHEMI101

|     |     |
|-----|-----|
| Model | ZHEMI101  |
| Vendor  | [Develco](/supported-devices/#v=Develco)  |
| Description | Energy meter |
| Exposes | power, energy, battery_low, pulse_configuration, interface_mode, current_summation, check_meter, linkquality |
| Picture | ![Develco ZHEMI101](https://www.zigbee2mqtt.io/images/devices/ZHEMI101.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Exposes

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Battery_low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery_low is ON, if `false` OFF.

### Pulse_configuration (numeric)
Pulses per kwh. Default 1000 imp/kWh. Range 0 to 65535.
Value can be found in the published state on the `pulse_configuration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pulse_configuration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pulse_configuration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.

### Interface_mode (enum)
Operating mode/probe.
Value can be found in the published state on the `interface_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"interface_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"interface_mode": NEW_VALUE}`.
The possible values are: `electricity`, `gas`, `water`, `kamstrup-kmp`, `linky`, `IEC62056-21`, `DSMR-2.3`, `DSMR-4.0`.

### Current_summation (numeric)
Current summation value sent to the display. e.g. 570 = 0,570 kWh.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_summation": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10000`.

### Check_meter (binary)
Is true if communication problem with meter is experienced.
Value can be found in the published state on the `check_meter` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` check_meter is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

