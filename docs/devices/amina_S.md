---
title: "Amina Distribution AS amina S control via MQTT"
description: "Integrate your Amina Distribution AS amina S via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-10-31T20:36:06
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Amina Distribution AS amina S

|     |     |
|-----|-----|
| Model | amina S  |
| Vendor  | [Amina Distribution AS](/supported-devices/#v=Amina%20Distribution%20AS)  |
| Description | Amina S EV Charger |
| Exposes | ev_status, alarms, switch (state), charge_limit, total_active_power, total_active_energy, last_session_energy, ev_connected, charging, derated, alarm_active, power, voltage, current, ac_frequency, power_phase_b, power_phase_c, voltage_phase_b, voltage_phase_c, current_phase_b, current_phase_c, single_phase, enable_offline, time_to_offline, offline_current, offline_single_phase, linkquality |
| Picture | ![Amina Distribution AS amina S](https://www.zigbee2mqtt.io/images/devices/amina-S.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `ac_frequency_calibration`: Calibrates the ac_frequency value (absolute offset), takes into effect on next report of device. The value must be a number.

* `power_phase_b_calibration`: Calibrates the power_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_phase_b_precision`: Number of digits after decimal point for power_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `power_phase_c_calibration`: Calibrates the power_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_phase_c_precision`: Number of digits after decimal point for power_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_phase_b_calibration`: Calibrates the voltage_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_phase_b_precision`: Number of digits after decimal point for voltage_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_phase_c_calibration`: Calibrates the voltage_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_phase_c_precision`: Number of digits after decimal point for voltage_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_phase_b_calibration`: Calibrates the current_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_phase_b_precision`: Number of digits after decimal point for current_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_phase_c_calibration`: Calibrates the current_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_phase_c_precision`: Number of digits after decimal point for current_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Ev status (text)
Current charging status.
Value can be found in the published state on the `ev_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ev_status": ""}`.
It's not possible to write (`/set`) this value.

### Alarms (list)
List of active alarms.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarms": ["welded_relay", "wrong_voltage_balance", "rdc_dd_dc_leakage", "rdc_dd_ac_leakage", "high_temperature", "overvoltage", "undervoltage", "overcurrent", "car_communication_error", "charger_processing_error", "critical_overcurrent", "critical_powerloss", "unknown_alarm_bit_12", "unknown_alarm_bit_13", "unknown_alarm_bit_14", "unknown_alarm_bit_15"]}`

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Charge limit (numeric)
Maximum allowed amperage draw.
Value can be found in the published state on the `charge_limit` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"charge_limit": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"charge_limit": NEW_VALUE}`.
The minimal value is `6` and the maximum value is `32`.
The unit of this value is `A`.

### Total active power (numeric)
Instantaneous measured total active power.
Value can be found in the published state on the `total_active_power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"total_active_power": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kW`.

### Total active energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `total_active_energy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"total_active_energy": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Last session energy (numeric)
Sum of consumed energy last session.
Value can be found in the published state on the `last_session_energy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"last_session_energy": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Ev connected (binary)
An EV is connected to the charger.
Value can be found in the published state on the `ev_connected` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` ev connected is ON, if `false` OFF.

### Charging (binary)
Power is being delivered to the EV.
Value can be found in the published state on the `charging` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` charging is ON, if `false` OFF.

### Derated (binary)
Charging derated due to high temperature.
Value can be found in the published state on the `derated` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` derated is ON, if `false` OFF.

### Alarm active (binary)
An active alarm is present.
Value can be found in the published state on the `alarm_active` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` alarm active is ON, if `false` OFF.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### AC frequency (numeric)
Measured electrical AC frequency.
Value can be found in the published state on the `ac_frequency` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ac_frequency": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `Hz`.

### Power phase b (numeric)
Instantaneous measured power on phase B.
Value can be found in the published state on the `power_phase_b` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_phase_b": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Power phase c (numeric)
Instantaneous measured power on phase C.
Value can be found in the published state on the `power_phase_c` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_phase_c": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Voltage phase B (numeric)
Measured electrical potential value on phase B.
Value can be found in the published state on the `voltage_phase_b` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage_phase_b": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### Voltage phase C (numeric)
Measured electrical potential value on phase C.
Value can be found in the published state on the `voltage_phase_c` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage_phase_c": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### Current phase B (numeric)
Instantaneous measured electrical current on phase B.
Value can be found in the published state on the `current_phase_b` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_phase_b": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### Current phase C (numeric)
Instantaneous measured electrical current on phase C.
Value can be found in the published state on the `current_phase_c` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_phase_c": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### Single phase (binary)
Enable single phase charging. A restart of charging is required for the change to take effect..
Value can be found in the published state on the `single_phase` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"single_phase": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"single_phase": NEW_VALUE}`.
If value equals `enable` single phase is ON, if `disable` OFF.

### Enable offline (binary)
Enable offline mode when connection to the network is lost.
Value can be found in the published state on the `enable_offline` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_offline": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_offline": NEW_VALUE}`.
If value equals `enable` enable offline is ON, if `disable` OFF.

### Time to offline (numeric)
Time until charger will behave as offline after connection has been lost.
Value can be found in the published state on the `time_to_offline` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"time_to_offline": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"time_to_offline": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `60`.
The unit of this value is `s`.

### Offline current (numeric)
Maximum allowed amperage draw when device is offline.
Value can be found in the published state on the `offline_current` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"offline_current": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"offline_current": NEW_VALUE}`.
The minimal value is `6` and the maximum value is `32`.
The unit of this value is `A`.

### Offline single phase (binary)
Use single phase charging when device is offline.
Value can be found in the published state on the `offline_single_phase` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"offline_single_phase": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"offline_single_phase": NEW_VALUE}`.
If value equals `enable` offline single phase is ON, if `disable` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

