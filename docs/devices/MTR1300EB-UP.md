---
title: "YOKIS MTR1300EB-UP control via MQTT"
description: "Integrate your YOKIS MTR1300EB-UP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-02-06T19:24:12
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# YOKIS MTR1300EB-UP

|     |     |
|-----|-----|
| Model | MTR1300EB-UP  |
| Vendor  | [YOKIS](/supported-devices/#v=YOKIS)  |
| Description | Remote power switch with timer 1300W |
| Exposes | switch (state), identify, power_failure_mode, prev_state, on_timer, enable_pre_on_delay, pre_on_delay, enable_pre_off_delay, pre_off_delay, pulse_duration, time_type, long_on_duration, operating_mode, enable_stop_announce, stop_announce_time, enable_deaf, deaf_blink_amount, deaf_blink_time, enable_blink, blink_amount, blink_on_time, blink_off_time, state_after_blink, enable_nc_command, move_to_position_command, pulse_command, blink_command, deaf_blink_command, long_on_command, reset_to_factory_settings, relaunch_ble_advert, input_mode, contact_mode, last_local_command_state, last_bp_connect_state, send_press, send_release, select_input_mode, enable_short_press, enable_long_press, long_press_duration, time_between_press, enable_R12M_long_press, enable_local_config_lock |
| Picture | ![YOKIS MTR1300EB-UP](https://www.zigbee2mqtt.io/images/devices/MTR1300EB-UP.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Power failure mode (enum)
Define the device behavior after power failure.
Value can be found in the published state on the `power_failure_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_failure_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_failure_mode": NEW_VALUE}`.
The possible values are: `last_state`, `off`, `on`, `blink`.

### Prev state (binary)
Indicate the previous state before action.
Value can be found in the published state on the `prev_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"prev_state": ""}`.
It's not possible to write (`/set`) this value.
If value equals `ON` prev state is ON, if `OFF` OFF.

### On timer (numeric)
Define the ON embedded timer duration in seconds. A `0` value will deactivate the timer.
Value can be found in the published state on the `on_timer` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"on_timer": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"on_timer": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3600`.
The unit of this value is `s`.

### Enable pre on delay (binary)
Enable (`0x01`) / Disable (`0x00`) PreOn delay.
Value can be found in the published state on the `enable_pre_on_delay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_pre_on_delay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_pre_on_delay": NEW_VALUE}`.
If value equals `ON` enable pre on delay is ON, if `OFF` OFF.

### Pre on delay (numeric)
Define the PreOn embedded delay in seconds.
Value can be found in the published state on the `pre_on_delay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pre_on_delay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pre_on_delay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3600`.
The unit of this value is `s`.

### Enable pre off delay (binary)
Enable (`0x01`) / Disable (`0x00`) PreOff delay.
Value can be found in the published state on the `enable_pre_off_delay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_pre_off_delay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_pre_off_delay": NEW_VALUE}`.
If value equals `ON` enable pre off delay is ON, if `OFF` OFF.

### Pre off delay (numeric)
Define the PreOff embedded delay in seconds.
Value can be found in the published state on the `pre_off_delay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pre_off_delay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pre_off_delay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3600`.
The unit of this value is `s`.

### Pulse duration (numeric)
Set the value of ON pulse length.
Value can be found in the published state on the `pulse_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pulse_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pulse_duration": NEW_VALUE}`.
The minimal value is `20` and the maximum value is `65534`.
The unit of this value is `ms`.

### Time type (enum)
Indicates the current Type of time selected that will be used during push button configuration:
        - 0x00 -> Seconds
        - 0x01 -> Minutes.
Value can be found in the published state on the `time_type` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"time_type": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"time_type": NEW_VALUE}`.
The possible values are: `seconds`, `minutes`.

### Long on duration (numeric)
Set the value of the LONG ON embedded timer in seconds.
Value can be found in the published state on the `long_on_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"long_on_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"long_on_duration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `4233600`.
The unit of this value is `s`.

### Operating mode (enum)
Indicates the operating mode: 
        - 0x00 -> Timer 
        - 0x01 -> Staircase
        - 0x02 -> Pulse.
Value can be found in the published state on the `operating_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operating_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operating_mode": NEW_VALUE}`.
The possible values are: `timer`, `staircase`, `pulse`.

### Enable stop announce (binary)
Enable (`0x01`) / Disable (`0x00`) the announcement before turning OFF.
Value can be found in the published state on the `enable_stop_announce` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_stop_announce": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_stop_announce": NEW_VALUE}`.
If value equals `ON` enable stop announce is ON, if `OFF` OFF.

### Stop announce time (numeric)
Time before goes off after the stop announce blinking. (In seconds).
Value can be found in the published state on the `stop_announce_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"stop_announce_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"stop_announce_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `4233600`.
The unit of this value is `s`.

### Enable deaf (binary)
Enable (`0x01`) / Disable (`0x00`) Deaf Actions.
Value can be found in the published state on the `enable_deaf` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_deaf": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_deaf": NEW_VALUE}`.
If value equals `ON` enable deaf is ON, if `OFF` OFF.

### Deaf blink amount (numeric)
Define number of blink to do when receiving the DEAF action. One blink is considered as one ON step followed by one OFF step.
Value can be found in the published state on the `deaf_blink_amount` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"deaf_blink_amount": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"deaf_blink_amount": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `20`.

### Deaf blink time (numeric)
Define duration of a blink ON (In millisecond).
Value can be found in the published state on the `deaf_blink_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"deaf_blink_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"deaf_blink_time": NEW_VALUE}`.
The minimal value is `100` and the maximum value is `20000`.

### Enable blink (binary)
Enable (`0x01`) / Disable (`0x00`) Blink  Actions.
Value can be found in the published state on the `enable_blink` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_blink": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_blink": NEW_VALUE}`.
If value equals `ON` enable blink is ON, if `OFF` OFF.

### Blink amount (numeric)
Number of blinks done when receiving the corresponding order. One blink is considered as one ON step followed by one OFF step.
Value can be found in the published state on the `blink_amount` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"blink_amount": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"blink_amount": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `20`.

### Blink on time (numeric)
Duration for the ON time on a blink period (In millisecond).
Value can be found in the published state on the `blink_on_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"blink_on_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"blink_on_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `4233600`.

### Blink off time (numeric)
Duration for the OFF time on a blink period (In millisecond).
Value can be found in the published state on the `blink_off_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"blink_off_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"blink_off_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `4233600`.

### State after blink (enum)
Indicate which state must be apply after a blink sequence:
        - 0x00 -> State before blinking
        - 0x01 -> OFF
        - 0x02 -> ON
        - 0x03 -> Infinite blinking.
Value can be found in the published state on the `state_after_blink` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_after_blink": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_after_blink": NEW_VALUE}`.
The possible values are: `previous`, `off`, `on`, `infinite`.

### Enable nc command (binary)
Define the output relay as Normally close.
Value can be found in the published state on the `enable_nc_command` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_nc_command": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_nc_command": NEW_VALUE}`.
If value equals `ON` enable nc command is ON, if `OFF` OFF.

### Move to position command (composite)
Move to position specified in uc_BrightnessEnd parameter.If TOR mode is set (no dimming) or MTR : if uc_BrightnessEnd under 50% will set to OFF else will be set to ON.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"move_to_position_prop": {"brightness_start": VALUE, "brightness_end": VALUE, "pre_timer_value": VALUE, "enable_pre_timer": VALUE, "timer_value": VALUE, "enable_timer": VALUE, "transition_time": VALUE}}`
- `brightness_start` (numeric): Define the brightness at the beginning of the transition, in % 
- `brightness_end` (numeric): Define the brightness at the end of the transition, in % 
- `pre_timer_value` (numeric): Define the pre timer value, otherwise use 0xFFFFFFFF to use the one configured in the product unit is s
- `enable_pre_timer` (binary): Define whether the device should use the pre timer or not, if 0xFF then use the one configured in product allowed values: `true` or `false`
- `timer_value` (numeric): Define the timer ON value, otherwise use 0xFFFFFFFF to use the one configured in the product unit is s
- `enable_timer` (binary): Define whether the device should use the timer ON or not, if 0xFF then use the one configured in product allowed values: `true` or `false`
- `transition_time` (numeric): Define the transition time from the brightness start to the brightness end, in ms 

### Pulse command (composite)
This command allows the relay to be controlled with an impulse. The pulse time is defined by PulseLength.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pulse_prop": {"pulse_length": VALUE}}`
- `pulse_length` (numeric): Pulse length max value is 65535, unit is ms

### Blink command (composite)
With this command, the module is asked to perform a blinking sequence..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"blink_prop": {"blink_amount": VALUE, "blink_on_period": VALUE, "blink_off_period": VALUE, "state_after_sequence": VALUE, "do_periodic_cycle": VALUE}}`
- `blink_amount` (numeric): If defined will force the number of blink to be done (only for this order) if not the device will use its own value. 
- `blink_on_period` (numeric): If defined will force the blink’s “on time” (only for this order) if not the device will use its own value. 
- `blink_off_period` (numeric): If defined will force the blink’s “off time” (only for this order) if not the device will use its own value. 
- `state_after_sequence` (enum): If defined will force the state after the sequence (only for this order). if not the device will use its own value- allowed values: `previous`, `off`, `on`, `infinite`
- `do_periodic_cycle` (binary): If set to true the blinking will be “infinite” allowed values: `true` or `false`

### Deaf blink command (composite)
Start a deaf sequence on a device only if the attribute “eDeaf” is set to Enable.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"deaf_blink_prop": {"blink_amount": VALUE, "blink_on_time": VALUE, "sequence_amount": VALUE, "sequence_of_blinks": VALUE}}`
- `blink_amount` (numeric): If defined will force the number of blink to be done during one sequence (only for this order) if not the device will use its own value 
- `blink_on_time` (numeric): If defined will force the blink’s “on time” (only for this order) if not the device will use its own value 
- `sequence_amount` (numeric): If defined will set the number of sequence to be done. Each sequence is spaced by 1 second. (Max 6) max value is 6
- `sequence_of_blinks` (list): Array with the number of blink to be done for each sequence. Will override “uc_BlinkAmount“ 

### Long on command (enum)
Switch output ON for LONG ON DURATION time.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"long_on_command": NEW_VALUE}`.
The possible values are: `longOnAction`.

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

