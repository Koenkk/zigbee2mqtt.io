---
title: "Aqara WP-P09D control via MQTT"
description: "Integrate your Aqara WP-P09D via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-08-30T18:06:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara WP-P09D

|     |     |
|-----|-----|
| Model | WP-P09D  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Wall outlet H2 UK |
| Exposes | switch (state), power_outage_count, power_on_behavior, power, energy, current, multi_click, child_lock, overload_protection, led_indicator, flip_indicator_light, identify, action |
| Picture | ![Aqara WP-P09D](https://www.zigbee2mqtt.io/images/devices/WP-P09D.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a maximum value of `30`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch (1 endpoint)
The current state of this switch is in the published state under the `state_1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_1": "ON"}`, `{"state_1": "OFF"}` or `{"state_1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_1": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (2 endpoint)
The current state of this switch is in the published state under the `state_2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_2": "ON"}`, `{"state_2": "OFF"}` or `{"state_2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_2": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (usb endpoint)
The current state of this switch is in the published state under the `state_usb` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_usb": "ON"}`, `{"state_usb": "OFF"}` or `{"state_usb": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_usb": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Power outage count (numeric)
Number of power outages (since last pairing).
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Power on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `on`, `previous`, `off`, `inverted`.

### Power (numeric, 1 endpoint)
Total power consumption of the outlet.
Value can be found in the published state on the `power_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Power socket 1 + USB (numeric, 2 endpoint)
Combined power consumption of socket 1 and the USB ports.
Value can be found in the published state on the `power_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Power socket 2 (numeric, usb endpoint)
Power consumption of socket 2.
Value can be found in the published state on the `power_usb` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Multi click (binary, 1 endpoint)
Multi-click mode for the socket 1 button.
Value can be found in the published state on the `multi_click_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"multi_click_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"multi_click_1": NEW_VALUE}`.
If value equals `true` multi click is ON, if `false` OFF.

### Multi click (binary, 2 endpoint)
Multi-click mode for the socket 2 button.
Value can be found in the published state on the `multi_click_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"multi_click_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"multi_click_2": NEW_VALUE}`.
If value equals `true` multi click is ON, if `false` OFF.

### Child lock (binary, 1 endpoint)
Disables the socket 1 button.
Value can be found in the published state on the `child_lock_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"child_lock_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock_1": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Child lock (binary, 2 endpoint)
Disables the socket 2 button.
Value can be found in the published state on the `child_lock_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"child_lock_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock_2": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Overload protection (numeric)
Maximum allowed load, turns off if exceeded.
Value can be found in the published state on the `overload_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"overload_protection": NEW_VALUE}`.
The minimal value is `100` and the maximum value is `3250`.
The unit of this value is `W`.

### Led indicator (binary)
LED indicator.
Value can be found in the published state on the `led_indicator` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_indicator": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_indicator": NEW_VALUE}`.
If value equals `ON` led indicator is ON, if `OFF` OFF.

### Flip indicator light (binary)
After turn on, the indicator light turns on while switch is off, and vice versa.
Value can be found in the published state on the `flip_indicator_light` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"flip_indicator_light": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"flip_indicator_light": NEW_VALUE}`.
If value equals `ON` flip indicator light is ON, if `OFF` OFF.

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `hold_1`, `hold_2`, `single_1`, `single_2`, `double_1`, `double_2`, `release_1`, `release_2`.

