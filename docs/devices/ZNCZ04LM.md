---
title: "Xiaomi ZNCZ04LM control via MQTT"
description: "Integrate your Xiaomi ZNCZ04LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-10-30T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi ZNCZ04LM

|     |     |
|-----|-----|
| Model | ZNCZ04LM  |
| Vendor  | [Xiaomi](/supported-devices/#v=Xiaomi)  |
| Description | Mi smart plug EU |
| Exposes | switch (state), power, energy, device_temperature, voltage, current, consumer_connected, led_disabled_night, power_outage_memory, auto_off, overload_protection |
| Picture | ![Xiaomi ZNCZ04LM](https://www.zigbee2mqtt.io/images/devices/ZNCZ04LM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Issues
- It's been reported that this plug automatically turns off by itself if it looses the connection to the coordinator (e.g.: weak signal). So, a loop task that sends a turn on command would be a possible workaround.

### Pairing
Press and hold the button on the device until the blue light starts blinking, release it and and the device will automatically join.

### Power outage memory
This option allows the device to restore the last on/off state when it's reconnected to power.
To set this option publish to `zigbee2mqtt/FRIENDLY_NAME/set` payload `{"power_outage_memory": true}` (or `false`).
Now toggle the plug/switch once with the button on it, from now on it will restore its state when reconnecting to power.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

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

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Consumer connected (binary)
Indicates whether a plug is physically attached. Device does not have to pull power or even be connected electrically (state of this binary switch can be ON even if main power switch is OFF).
Value can be found in the published state on the `consumer_connected` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` consumer connected is ON, if `false` OFF.

### LED disabled night (binary)
Enable/disable the LED at night.
Value can be found in the published state on the `led_disabled_night` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_disabled_night": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_disabled_night": NEW_VALUE}`.
If value equals `true` lED disabled night is ON, if `false` OFF.

### Power outage memory (binary)
Enable/disable the power outage memory, this recovers the on/off mode after power failure.
Value can be found in the published state on the `power_outage_memory` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_outage_memory": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_outage_memory": NEW_VALUE}`.
If value equals `true` power outage memory is ON, if `false` OFF.

### Auto OFF (binary)
Turn the device automatically off when attached device consumes less than 2W for 20 minutes.
Value can be found in the published state on the `auto_off` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"auto_off": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_off": NEW_VALUE}`.
If value equals `true` auto OFF is ON, if `false` OFF.

### Overload protection (numeric)
Maximum allowed load, turns off if exceeded.
Value can be found in the published state on the `overload_protection` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"overload_protection": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"overload_protection": NEW_VALUE}`.
The minimal value is `100` and the maximum value is `2300`.
The unit of this value is `W`.

