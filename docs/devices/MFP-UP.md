---
title: "YOKIS MFP-UP control via MQTT"
description: "Integrate your YOKIS MFP-UP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# YOKIS MFP-UP

|     |     |
|-----|-----|
| Model | MFP-UP  |
| Vendor  | [YOKIS](/supported-devices/#v=YOKIS)  |
| Description | Remote module for pilot wire heating system |
| Exposes | identify, power, current, energy, power_failure_mode, actual_order, order_timer, pre_order_timer, timer_unit, led_mode, pilot_wire_relay_mode, order_scrolling_mode, order_number_supported, fallback_order, pilotwire_setOrder, pilotwire_toggleOrder, reset_to_factory_settings, relaunch_ble_advert |
| Picture | ![YOKIS MFP-UP](https://www.zigbee2mqtt.io/images/devices/MFP-UP.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`


## Exposes

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Power failure mode (enum)
Define the device behavior after power failure.
Value can be found in the published state on the `power_failure_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_failure_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_failure_mode": NEW_VALUE}`.
The possible values are: `last_state`, `off`, `on`, `blink`.

### Actual order (enum)
Represent the actual order used by the device:
- 0x00 -> Stop
- 0x01 -> Frost-off
- 0x02 -> Eco (default)
- 0x03 -> Confort-2
- 0x04 -> Confort-1
- 0x05 -> Confort
- 0xF0 -> ShortCut error
- 0xF1 -> Temperature error.
Value can be found in the published state on the `actual_order` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"actual_order": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `stop`, `frost_off`, `eco`, `confort_2`, `confort_1`, `confort`, `shortcut_error`, `temperature_error`.

### Order timer (numeric)
Define the “Order” embedded timer duration. This timer is set when the device changes its order (in second). After that duration, the device is set back to its fallback order..
Value can be found in the published state on the `order_timer` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"order_timer": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"order_timer": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `4294967295`.

### Pre order timer (numeric)
Define the duration before an order is set. This timer is used when a new order is asked, it corresponds to the time before this order is applied. The duration is set in second..
Value can be found in the published state on the `pre_order_timer` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pre_order_timer": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pre_order_timer": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `4294967295`.

### Timer unit (enum)
Represent the actual unit used for local command configuration :
- 0x00 -> Second (default)
- 0x01 -> Minutes.
Value can be found in the published state on the `timer_unit` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"timer_unit": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"timer_unit": NEW_VALUE}`.
The possible values are: `second`, `minutes`.

### Led mode (enum)
Define the product’s LED behavior:
- 0x00 -> LED is always ON and blink during radio activity (default)
- 0x01 -> LED is only OFF during few seconds after a mode transition.
Value can be found in the published state on the `led_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_mode": NEW_VALUE}`.
The possible values are: `led_on`, `led_off`.

### Pilot wire relay mode (enum)
Define if the product must be set into pilot wire relay mode:
- 0x00 -> Relay mode is deactivated (default)
- 0x01 -> Relay mode is activated.
Value can be found in the published state on the `pilot_wire_relay_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pilot_wire_relay_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pilot_wire_relay_mode": NEW_VALUE}`.
The possible values are: `relay_on`, `relay_off`.

### Order scrolling mode (enum)
Define the order scrolling sense:
- 0x00 -> Forward : Confort -> Confort – 1 -> Confort – 2 -> Eco -> Hors-Gel -> Arrêt (default)
- 0x01 -> Backward : Arrêt -> Hors-Gel -> Eco -> Confort – 2 -> Confort – 1 -> Confort.
Value can be found in the published state on the `order_scrolling_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"order_scrolling_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"order_scrolling_mode": NEW_VALUE}`.
The possible values are: `forward`, `backward`.

### Order number supported (enum)
Define the number of orders supported by the device:
- 0x00 -> 4 orders (Confort, Eco, Hors-Gel, Arrêt)
- 0x01 -> 6 orders (Confort, Confort – 1, Confort – 2, Eco, Hors-Gel, Arrêt) - (default).
Value can be found in the published state on the `order_number_supported` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"order_number_supported": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"order_number_supported": NEW_VALUE}`.
The possible values are: `four_orders`, `six_orders`.

### Fallback order (enum)
Represent the fallback order used by the device after the end of an order timer is reached
- 0x00 -> Stop
- 0x01 -> Frost-off
- 0x02 -> Eco (default)
- 0x03 -> Confort-2
- 0x04 -> Confort-1
- 0x05 -> Confor.
Value can be found in the published state on the `fallback_order` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"fallback_order": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fallback_order": NEW_VALUE}`.
The possible values are: `stop`, `frost_off`, `eco`, `confort_2`, `confort_1`, `confort`.

### Pilotwire setOrder (enum)
Set the device in the specified order..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pilotwire_setOrder": NEW_VALUE}`.
The possible values are: `stop`, `frost_off`, `eco`, `confort_2`, `confort_1`, `confort`.

### Pilotwire toggleOrder (enum)
Toggle between order by respecting the scrolling order.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pilotwire_toggleOrder": NEW_VALUE}`.
The possible values are: `pilotwire_toggleOrder`.

### Reset to factory settings (enum)
Reset setting depending on RESET ACTION value.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reset_to_factory_settings": NEW_VALUE}`.
The possible values are: `factory_reset`, `configuration_reset`, `network_reset`.

### Relaunch ble advert (enum)
Relaunch BLE advertising for 15 minutes.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"relaunch_ble_advert": NEW_VALUE}`.
The possible values are: `relaunch_ble_advert`.

