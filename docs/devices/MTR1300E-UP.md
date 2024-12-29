---
title: "YOKIS MTR1300E-UP control via MQTT"
description: "Integrate your YOKIS MTR1300E-UP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# YOKIS MTR1300E-UP

|     |     |
|-----|-----|
| Model | MTR1300E-UP  |
| Vendor  | [YOKIS](/supported-devices/#v=YOKIS)  |
| Description | Remote power switch with timer 1300W |
| Exposes | switch (state), identify, PrevState, eOnTimer, onTimer, ePreOnDelay, PreOnDelay, ePreOffDelay, PreOffDelay, PulseDuration, TimeType, LongOnDuration, OperatingMode, eStopAnnounce, StopAnnounceTime, eDeaf, DeafBlinkAmount, DeafBlinkTime, eBlink, BlinkAmount, BlinkOnTime, BlinkOffTime, StateAfterBlink, eNcCommand, moveToPositionCommand, pulseCommand, blinkCommand, deafBlinkCommand, longOnCommand, linkquality |
| Picture | ![YOKIS MTR1300E-UP](https://www.zigbee2mqtt.io/images/devices/MTR1300E-UP.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->

## Notes

- [CSA product page](https://csa-iot.org/csa_product/mtr1300eb-up/)
- `On with timed off` is not supported by this device. Use `OnTimer` instead.
- `powerOnBehavior` from the OnOff cluster is not supported but `powerFailureMode` has the same purpose.

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

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### PrevState (binary)
Indicate the previous state before action.
Value can be found in the published state on the `PrevState` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"PrevState": ""}`.
It's not possible to write (`/set`) this value.
If value equals `ON` prevState is ON, if `OFF` OFF.

### EOnTimer (binary)
Enable (0x01) / Disable (0x00) use of onTimer..
Value can be found in the published state on the `eOnTimer` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"eOnTimer": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eOnTimer": NEW_VALUE}`.
If value equals `ON` eOnTimer is ON, if `OFF` OFF.

### OnTimer (numeric)
Define the ON embedded timer duration in seconds..
Value can be found in the published state on the `onTimer` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"onTimer": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"onTimer": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3600`.
The unit of this value is `s`.

### EPreOnDelay (binary)
Enable (0x01) / Disable (0x00) PreOn delay..
Value can be found in the published state on the `ePreOnDelay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ePreOnDelay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ePreOnDelay": NEW_VALUE}`.
If value equals `ON` ePreOnDelay is ON, if `OFF` OFF.

### PreOnDelay (numeric)
Define the PreOn embedded delay in seconds..
Value can be found in the published state on the `PreOnDelay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"PreOnDelay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"PreOnDelay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3600`.
The unit of this value is `s`.

### EPreOffDelay (binary)
Enable (0x01) / Disable (0x00) PreOff delay..
Value can be found in the published state on the `ePreOffDelay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ePreOffDelay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ePreOffDelay": NEW_VALUE}`.
If value equals `ON` ePreOffDelay is ON, if `OFF` OFF.

### PreOffDelay (numeric)
Define the PreOff embedded delay in seconds..
Value can be found in the published state on the `PreOffDelay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"PreOffDelay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"PreOffDelay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3600`.
The unit of this value is `s`.

### PulseDuration (numeric)
Set the value of ON pulse length..
Value can be found in the published state on the `PulseDuration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"PulseDuration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"PulseDuration": NEW_VALUE}`.
The minimal value is `20` and the maximum value is `65534`.
The unit of this value is `ms`.

### TimeType (enum)
Indicates the current Type of time selected that will be used during push button configuration:
        - 0x00 -> Seconds
        - 0x01 -> Minutes.
Value can be found in the published state on the `TimeType` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"TimeType": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"TimeType": NEW_VALUE}`.
The possible values are: `Seconds`, `Minutes`.

### LongOnDuration (numeric)
Set the value of the LONG ON embedded timer in seconds.
Value can be found in the published state on the `LongOnDuration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"LongOnDuration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"LongOnDuration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `4233600`.
The unit of this value is `s`.

### OperatingMode (enum)
Indicates the operating mode: 
        - 0x00 -> Timer 
        - 0x01 -> Staircase
        - 0x02 -> Pulse.
Value can be found in the published state on the `OperatingMode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"OperatingMode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"OperatingMode": NEW_VALUE}`.
The possible values are: `Timer`, `Staircase`, `Pulse`.

### EStopAnnounce (binary)
Enable (0x01) / Disable (0x00) the announcement before turning OFF.
Value can be found in the published state on the `eStopAnnounce` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"eStopAnnounce": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eStopAnnounce": NEW_VALUE}`.
If value equals `ON` eStopAnnounce is ON, if `OFF` OFF.

### StopAnnounceTime (numeric)
Time before goes off after the stop announce blinking. (In seconds).
Value can be found in the published state on the `StopAnnounceTime` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"StopAnnounceTime": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"StopAnnounceTime": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `4233600`.
The unit of this value is `s`.

### EDeaf (binary)
Enable (0x01) / Disable (0x00) Deaf Actions.
Value can be found in the published state on the `eDeaf` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"eDeaf": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eDeaf": NEW_VALUE}`.
If value equals `ON` eDeaf is ON, if `OFF` OFF.

### DeafBlinkAmount (numeric)
Define number of blink to do when receiving the DEAF action. One blink is considered as one ON step followed by one OFF step..
Value can be found in the published state on the `DeafBlinkAmount` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"DeafBlinkAmount": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"DeafBlinkAmount": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `20`.

### DeafBlinkTime (numeric)
Define duration of a blink ON (In millisecond).
Value can be found in the published state on the `DeafBlinkTime` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"DeafBlinkTime": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"DeafBlinkTime": NEW_VALUE}`.
The minimal value is `100` and the maximum value is `20000`.

### EBlink (binary)
Enable (0x01) / Disable (0x00) Blink  Actions.
Value can be found in the published state on the `eBlink` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"eBlink": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eBlink": NEW_VALUE}`.
If value equals `ON` eBlink is ON, if `OFF` OFF.

### BlinkAmount (numeric)
Number of blinks done when receiving the corresponding order. One blink is considered as one ON step followed by one OFF step..
Value can be found in the published state on the `BlinkAmount` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"BlinkAmount": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"BlinkAmount": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `20`.

### BlinkOnTime (numeric)
Duration for the ON time on a blink period (In millisecond).
Value can be found in the published state on the `BlinkOnTime` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"BlinkOnTime": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"BlinkOnTime": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `4233600`.

### BlinkOffTime (numeric)
Duration for the OFF time on a blink period (In millisecond).
Value can be found in the published state on the `BlinkOffTime` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"BlinkOffTime": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"BlinkOffTime": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `4233600`.

### StateAfterBlink (enum)
Indicate which state must be apply after a blink sequence:
        - 0x00 -> State before blinking
        - 0x01 -> OFF
        - 0x02 -> ON
        - 0x03 -> Infinite blinking.
Value can be found in the published state on the `StateAfterBlink` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"StateAfterBlink": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"StateAfterBlink": NEW_VALUE}`.
The possible values are: `Previous`, `OFF`, `ON`, `INFINITE`.

### ENcCommand (binary)
Define the output relay as Normaly close.
Value can be found in the published state on the `eNcCommand` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"eNcCommand": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eNcCommand": NEW_VALUE}`.
If value equals `ON` eNcCommand is ON, if `OFF` OFF.

### MoveToPositionCommand (composite)
Move to position specified in uc_BrightnessEnd parameter.If TOR mode is set (no dimming) or MTR : if uc_BrightnessEnd under 50% will set to OFF else will be set to ON.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"moveToPositionProp": {"uc_BrightnessStart": VALUE, "uc_BrightnessEnd": VALUE, "ul_PreTimerValue": VALUE, "b_PreTimerEnable": VALUE, "ul_TimerValue": VALUE, "b_TimerEnable": VALUE, "ul_TransitionTime": VALUE}}`
- `uc_BrightnessStart` (numeric) 
- `uc_BrightnessEnd` (numeric) 
- `ul_PreTimerValue` (numeric): If defined will force the pretimer value (only for this order) if not the device will use its own value. unit is s
- `b_PreTimerEnable` (binary): If defined will force the pretimer use (only for this order) if not the device will use its own value. allowed values: `true` or `false`
- `ul_TimerValue` (numeric): If defined will force the OnTimer value (only for this order) if not the device will use its own value. unit is s
- `b_TimerEnable` (binary): If defined will force the OnTimer use (only for this order) if not the device will use its own value. allowed values: `true` or `false`
- `ul_TransitionTime` (numeric) 

### PulseCommand (composite)
This command allows the relay to be controlled with an impulse. The pulse time is defined by PulseLength..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pulseProp": {"pulseLength": VALUE}}`
- `pulseLength` (numeric): Pulse length max value is 65535, unit is ms

### BlinkCommand (composite)
With this command, the module is asked to perform a blinking sequence..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"blinkProp": {"uc_BlinkAmount": VALUE, "ul_BlinkOnPeriod": VALUE, "ul_BlinkOffPeriod": VALUE, "uc_StateAfterSequence": VALUE, "b_DoPeriodicCycle": VALUE}}`
- `uc_BlinkAmount` (numeric): If defined will force the number of blink to be done (only for this order).if not the device will use its own value. 
- `ul_BlinkOnPeriod` (numeric): If defined will force the blink’s “on time” (only for this order) if not the device will use its own value. 
- `ul_BlinkOffPeriod` (numeric): If defined will force the blink’s “off time” (only for this order) if not the device will use its own value. 
- `uc_StateAfterSequence` (enum): If defined will force the state after the sequence (only for this order).if not the device will use its own value- allowed values: `Previous`, `OFF`, `ON`, `INFINITE`
- `b_DoPeriodicCycle` (binary): If set to true the blinking will be “infinite” allowed values: `true` or `false`

### DeafBlinkCommand (composite)
Start a deaf sequene on a device only if the attribute “eDeaf” is set to Enable..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"deafBlinkProp": {"uc_BlinkAmount": VALUE, "ul_BlinkOnTime": VALUE, "uc_SequenceAmount": VALUE, "tuc_BlinkAmount": VALUE}}`
- `uc_BlinkAmount` (numeric): If defined will force the number of blink to be done during one sequence (only for this order).if not the device will use its own value. 
- `ul_BlinkOnTime` (numeric): If defined will force the blink’s “on time” (only for this order) if not the device will use its own value 
- `uc_SequenceAmount` (numeric): If defined will set the number of sequence to be done. Each sequence is spaced by 1 second. (Max 6) max value is 6
- `tuc_BlinkAmount` (list): Array with the number of blink to be done for each sequence. Will override “uc_BlinkAmount“. 

### LongOnCommand (enum)
Ititiate long duration on.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"longOnCommand": NEW_VALUE}`.
The possible values are: `longOnAction`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

