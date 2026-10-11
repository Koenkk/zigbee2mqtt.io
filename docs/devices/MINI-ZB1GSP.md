---
title: "SONOFF MINI-ZB1GSP control via MQTT"
description: "Integrate your SONOFF MINI-ZB1GSP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-05-31T19:17:59
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF MINI-ZB1GSP

|     |     |
|-----|-----|
| Model | MINI-ZB1GSP  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee smart switch with power monitoring |
| Exposes | switch (state), power_on_behavior, network_indicator, turbo_mode, inching_control_set, delayed_power_on_state, delayed_power_on_time, external_trigger_mode, detach_relay_mode, power, current, voltage, energy_today, output_energy_today, energy_month, output_energy_month, total_energy, total_output_energy, device_overheated, metering_communication_error, overload_protection, power_protector, action |
| Picture | ![SONOFF MINI-ZB1GSP](https://www.zigbee2mqtt.io/images/devices/MINI-ZB1GSP.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

### Network indicator (binary)
Turn the blue network status indicator on or off..
Value can be found in the published state on the `network_indicator` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"network_indicator": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"network_indicator": NEW_VALUE}`.
If value equals `true` network indicator is ON, if `false` OFF.

### Turbo mode (binary)
Boost Zigbee radio transmit power to improve range..
Value can be found in the published state on the `turbo_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"turbo_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"turbo_mode": NEW_VALUE}`.
If value equals `true` turbo mode is ON, if `false` OFF.

### Inching control set (composite)
Device Inching function Settings. The device will automatically turn off (turn on) after each turn on (turn off) for a specified period of time..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"inching_control_set": {"inching_control": VALUE, "inching_time": VALUE, "inching_mode": VALUE}}`
- `inching_control` (binary): Enable/disable inching function. allowed values: `ENABLE` or `DISABLE`
- `inching_time` (numeric): Delay time for executing a inching action. min value is 0.5, max value is 86399.5, unit is seconds
- `inching_mode` (binary): Set inching off or inching on mode. allowed values: `ON` or `OFF`

### Delayed power on state (binary)
Restore the plug output after the configured power-on delay..
Value can be found in the published state on the `delayed_power_on_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"delayed_power_on_state": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"delayed_power_on_state": NEW_VALUE}`.
If value equals `true` delayed power on state is ON, if `false` OFF.

### Delayed power on time (numeric)
Delay before the plug output is restored after power returns..
Value can be found in the published state on the `delayed_power_on_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"delayed_power_on_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"delayed_power_on_time": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `3599.5`.
The unit of this value is `s`.

### External trigger mode (enum)
External trigger mode, which can be one of edge, pulse, following(off), following(on). The appropriate triggering mode can be selected according to the type of external switch to achieve a better use experience..
Value can be found in the published state on the `external_trigger_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"external_trigger_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"external_trigger_mode": NEW_VALUE}`.
The possible values are: `edge`, `pulse`, `following(off)`, `following(on)`.

### Detach relay mode (composite)
Relay separation mode. Can be used when the load is a smart device (such as smart light), when we control the wall switch, do not want to turn off the power of the smart light, but through a scene command to control the smart light on or off, then we can enable the relay separation mode..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detach_relay_mode": {"detach_relay_outlet1": VALUE}}`
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"detach_relay_mode": ""}`.
- `detach_relay_outlet1` (binary): Enable/disable detach relay. allowed values: `ENABLE` or `DISABLE`

### Power (numeric)
Power used by the connected load..
Value can be found in the published state on the `power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Current (numeric)
Current drawn by the connected load..
Value can be found in the published state on the `current` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric)
Supply voltage measured by the plug..
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### Energy today (numeric)
Energy used today by the connected load..
Value can be found in the published state on the `energy_today` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_today": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Export energy today (numeric)
Energy fed back today through the plug..
Value can be found in the published state on the `output_energy_today` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_energy_today": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy this month (numeric)
Energy used this month by the connected load..
Value can be found in the published state on the `energy_month` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_month": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Export energy this month (numeric)
Energy fed back this month through the plug..
Value can be found in the published state on the `output_energy_month` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_energy_month": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Total energy (numeric)
Total energy used by the connected load..
Value can be found in the published state on the `total_energy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"total_energy": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Total export energy (numeric)
Total energy fed back through the plug..
Value can be found in the published state on the `total_output_energy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"total_output_energy": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Device overheated (binary)
Value can be found in the published state on the `device_overheated` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"device_overheated": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Alarm Active` device overheated is ON, if `Normal` OFF.

### Metering communication error (binary)
Value can be found in the published state on the `metering_communication_error` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"metering_communication_error": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Alarm Active` metering communication error is ON, if `Normal` OFF.

### Electrical Status (binary)
Value can be found in the published state on the `overload_protection` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"overload_protection": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Alarm Active` electrical Status is ON, if `Normal` OFF.

### Power protector (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_protector": {"max_current_protect": VALUE, "max_power_protect": VALUE, "max_voltage_protect_enabled": VALUE, "max_voltage_protect": VALUE, "min_voltage_protect_enabled": VALUE, "min_voltage_protect": VALUE, "external_switch_only_recovery": VALUE, "auto_recovery": VALUE}}`
- `max_current_protect` (numeric) min value is 0.1, max value is 16, unit is A
- `max_power_protect` (numeric) min value is 2, max value is 3840, unit is W
- `max_voltage_protect_enabled` (binary) allowed values: `true` or `false`
- `max_voltage_protect` (numeric) min value is 85, max value is 277, unit is V
- `min_voltage_protect_enabled` (binary) allowed values: `true` or `false`
- `min_voltage_protect` (numeric) min value is 85, max value is 277, unit is V
- `external_switch_only_recovery` (binary) allowed values: `true` or `false`
- `auto_recovery` (binary) allowed values: `true` or `false`

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single_click`, `double_click`, `long_press`, `switch_on`, `switch_off`.

