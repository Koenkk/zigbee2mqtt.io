---
title: "Tuya BAC-002-ALZB control via MQTT"
description: "Integrate your Tuya BAC-002-ALZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-03-28T13:25:07Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya BAC-002-ALZB

|     |     |
|-----|-----|
| Model | BAC-002-ALZB  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | FCU thermostat temperature controller |
| Exposes | climate (local_temperature, system_mode, fan_mode, current_heating_setpoint, preset, local_temperature_calibration), deadzone_temperature, lock (state), schedule, linkquality |
| Picture | ![Tuya BAC-002-ALZB](https://www.zigbee2mqtt.io/images/devices/BAC-002-ALZB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing
Switch the thermostat off. Press and hold the temperature down button for +- 8 seconds to enable the pairing mode (display lights up and a WiFi-like icon is blinking). After successful interview turn the thermostat on again.

### Stop message flooding
This unit has a bug that makes it send multiple messages when updating. To stop this from flooding your MQTT Queues, please add the following to your `configuration.yaml` file:


devices:
  '0x12345678':
    friendly_name: thermostat
    debounce: 1
<!-- Notes END: Do not edit below this line -->




## Exposes

### Climate 
This climate device supports the following features: `local_temperature`, `system_mode`, `fan_mode`, `current_heating_setpoint`, `preset`, `local_temperature_calibration`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `cool`, `heat`, `fan_only`. Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `auto`, `manual`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-3` and the maximum value is `3` with a step size of `1`.

### Deadzone temperature (numeric)
The delta between local_temperature and current_heating_setpoint to trigger activity.
Value can be found in the published state on the `deadzone_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"deadzone_temperature": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `5`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Child lock (lock)
The current state of this lock is in the published state under the `child_lock` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": "LOCK"}` or `{"child_lock": "UNLOCK"}`.
It's not possible to read (`/get`) this value.

### Schedule (text)
Schedule will work with "auto" preset. In this mode, the device executes a preset week programming temperature time and temperature. Schedule can contains 12 segments. All 12 segments should be defined. It should be defined in the following format: "hh:mm/tt". Segments should be divided by space symbol. Example: "06:00/20 11:30/21 13:30/22 17:30/23 06:00/24 12:00/23 14:30/22 17:30/21 06:00/19 12:30/20 14:30/21 18:30/20".
Value can be found in the published state on the `schedule` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule": NEW_VALUE}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

