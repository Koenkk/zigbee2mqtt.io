---
title: "TuYa TS0601_rcbo control via MQTT"
description: "Integrate your TuYa TS0601_rcbo via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-10-30T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TuYa TS0601_rcbo

|     |     |
|-----|-----|
| Model | TS0601_rcbo  |
| Vendor  | [TuYa](/supported-devices/#v=TuYa)  |
| Description | DIN mount RCBO with smart energy metering |
| Exposes | meter_number, state, alarm, trip, child_lock, power_on_behavior, countdown_timer, voltage_rms, current, current_average, power, voltage, energy, temperature, power_l1, power_l2, power_l3, energy_consumed, clear_device_data, linkquality |
| Picture | ![TuYa TS0601_rcbo](https://www.zigbee2mqtt.io/images/devices/TS0601_rcbo.jpg) |
| White-label | HOCH ZJSBL7-100Z, WDYK ZJSBL7-100Z |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Meter_number (text)
Meter number.
Value can be found in the published state on the `meter_number` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### State (binary)
State.
Value can be found in the published state on the `state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": NEW_VALUE}`.
If value equals `ON` state is ON, if `OFF` OFF.

### Alarm (text)
Alarm text.
Value can be found in the published state on the `alarm` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Trip (binary)
Trip.
Value can be found in the published state on the `trip` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"trip": NEW_VALUE}`.
If value equals `trip` trip is ON, if `clear` OFF.

### Child_lock (binary)
Child lock.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `ON` child_lock is ON, if `OFF` OFF.

### Power_on_behavior (enum)
Power on behavior.
Value can be found in the published state on the `power_on_behavior` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `previous`.

### Countdown_timer (numeric)
Countdown timer.
Value can be found in the published state on the `countdown_timer` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_timer": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400`.
The unit of this value is `s`.

### Voltage_rms (numeric)
Voltage RMS.
Value can be found in the published state on the `voltage_rms` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Current (numeric)
Current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Current_average (numeric)
Current average.
Value can be found in the published state on the `current_average` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

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

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Power_l1 (numeric)
Instantaneous measured power on phase 1.
Value can be found in the published state on the `power_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Power_l2 (numeric)
Instantaneous measured power on phase 2.
Value can be found in the published state on the `power_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Power_l3 (numeric)
Instantaneous measured power on phase 3.
Value can be found in the published state on the `power_l3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Energy_consumed (numeric)
Consumed energy.
Value can be found in the published state on the `energy_consumed` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Clear_device_data (enum)
Clear device data.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"clear_device_data": NEW_VALUE}`.
The possible values are: ``.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

