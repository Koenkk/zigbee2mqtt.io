---
title: "YOKIS MVR500E-UP control via MQTT"
description: "Integrate your YOKIS MVR500E-UP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-12-29T16:26:41
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# YOKIS MVR500E-UP

|     |     |
|-----|-----|
| Model | MVR500E-UP  |
| Vendor  | [YOKIS](/supported-devices/#v=YOKIS)  |
| Description | Roller shutter module 500W |
| Exposes | identify, cover (state, position), power_failure_mode, reset_to_factory_settings, relaunch_ble_advert, input_mode, contact_mode, last_local_command_state, last_bp_connect_state, send_press, send_release, select_input_mode, enable_short_press, enable_long_press, long_press_duration, time_between_press, enable_R12M_long_press, enable_local_config_lock, action |
| Picture | ![YOKIS MVR500E-UP](https://www.zigbee2mqtt.io/images/devices/MVR500E-UP.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
- [CSA product page](https://csa-iot.org/csa_product/mvr500e-up/)
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`


## Exposes

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Power failure mode (enum)
Define the device behavior after power failure.
Value can be found in the published state on the `power_failure_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_failure_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_failure_mode": NEW_VALUE}`.
The possible values are: `last_state`, `off`, `on`, `blink`.

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

### Input mode (enum)
Indicate how the input should be handle:
        - 0 -> Unknown
        - 1 -> Push button
        - 2 -> Switch
        - 3 -> Relay
        - 4 -> FP_IN.
Value can be found in the published state on the `input_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_mode": NEW_VALUE}`.
The possible values are: `unknown`, `push_button`, `switch`, `relay`, `fp_in`.

### Contact mode (enum)
Indicate the contact nature of the entry:
        - 0 -> NC
        - 1 -> NO.
Value can be found in the published state on the `contact_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"contact_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"contact_mode": NEW_VALUE}`.
The possible values are: `nc`, `no`.

### Last local command state (binary)
Indicate the last known state of the local BP.
Value can be found in the published state on the `last_local_command_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"last_local_command_state": ""}`.
It's not possible to write (`/set`) this value.
If value equals `PRESSED` last local command state is ON, if `RELEASED` OFF.

### Last bp connect state (binary)
Indicate the last known state of the Bp connect.
Value can be found in the published state on the `last_bp_connect_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"last_bp_connect_state": ""}`.
It's not possible to write (`/set`) this value.
If value equals `PRESSED` last bp connect state is ON, if `RELEASED` OFF.

### Send press (enum)
Send to the server cluster a button press.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"send_press": NEW_VALUE}`.
The possible values are: `SendPress`.

### Send release (enum)
Send to the server cluster a button release.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"send_release": NEW_VALUE}`.
The possible values are: `SendRelease`.

### Select input mode (enum)
Change the Input mode to use switch input, wired relay or simple push button.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"select_input_mode": NEW_VALUE}`.
The possible values are: `unknown`, `push_button`, `switch`, `relay`, `fp_in`.

### Enable short press (binary)
Use to enable short press action.
Value can be found in the published state on the `enable_short_press` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_short_press": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_short_press": NEW_VALUE}`.
If value equals `ON` enable short press is ON, if `OFF` OFF.

### Enable long press (binary)
Use to enable long press action.
Value can be found in the published state on the `enable_long_press` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_long_press": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_long_press": NEW_VALUE}`.
If value equals `ON` enable long press is ON, if `OFF` OFF.

### Long press duration (numeric)
Define long Press duration in milliseconds.
Value can be found in the published state on the `long_press_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"long_press_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"long_press_duration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5000`.
The unit of this value is `ms`.

### Time between press (numeric)
Define the maximum time between 2 press to keep in a sequence (In milliseconds).
Value can be found in the published state on the `time_between_press` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"time_between_press": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"time_between_press": NEW_VALUE}`.
The minimal value is `100` and the maximum value is `600`.
The unit of this value is `ms`.

### Enable R12M long press (binary)
Enable R12M Long Press action.
Value can be found in the published state on the `enable_R12M_long_press` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_R12M_long_press": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_R12M_long_press": NEW_VALUE}`.
If value equals `ON` enable R12M long press is ON, if `OFF` OFF.

### Enable local config lock (binary)
Disable local configuration.
Value can be found in the published state on the `enable_local_config_lock` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_local_config_lock": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_local_config_lock": NEW_VALUE}`.
If value equals `ON` enable local config lock is ON, if `OFF` OFF.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `open`, `close`, `stop`.

