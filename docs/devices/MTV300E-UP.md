---
title: "YOKIS MTV300E-UP control via MQTT"
description: "Integrate your YOKIS MTV300E-UP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# YOKIS MTV300E-UP

|     |     |
|-----|-----|
| Model | MTV300E-UP  |
| Vendor  | [YOKIS](/supported-devices/#v=YOKIS)  |
| Description | Remote dimmer with timer 300W |
| Exposes | light (state, brightness), effect, identify, PrevState, eOnTimer, onTimer, ePreOnDelay, PreOnDelay, ePreOffDelay, PreOffDelay, PulseDuration, TimeType, LongOnDuration, OperatingMode, eStopAnnounce, StopAnnounceTime, eDeaf, DeafBlinkAmount, DeafBlinkTime, eBlink, BlinkAmount, BlinkOnTime, BlinkOffTime, StateAfterBlink, eNcCommand, moveToPositionCommand, pulseCommand, blinkCommand, deafBlinkCommand, longOnCommand, CurrentPosition, MemoryPosition, eRampUp, RampUp, eRampDown, RampDown, RampContinuousTime, StepUp, LowDimLimit, HighDimLimit, NightLightStartingDelay, NightLightStartingBrightness, NightLightEndingBrightness, NightLightRampTime, NightLightOnTime, FavoritePosition1, FavoritePosition2, FavoritePosition3, StepControllerMode, MemoryPositionMode, StepDown, StepContinuous, StepNightLigth, dimmerDim, DimmerUpDown, dimmerDimMinMax, DimmerMoveToFavorite1, DimmerStarnightModeCurrent, dimmerStartNightLightMode, linkquality |
| Picture | ![YOKIS MTV300E-UP](https://www.zigbee2mqtt.io/images/devices/MTV300E-UP.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Light 
This light supports the following features: `state`, `brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the light will not answer to other on with timed off commands.
Support depends on the light firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

#### Transition
For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property `transition` to the payload which is the transition time in seconds.
Examples: `{"brightness":156,"transition":3}`, `{"color_temp":241,"transition":1}`.

#### Moving/stepping
Instead of setting a value (e.g. brightness) directly it is also possible to:
- move: this will automatically move the value over time, to stop send value `stop` or `0`.
- step: this will increment/decrement the current value by the given one.

The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up.
To do this send a payload like below to `zigbee2mqtt/FRIENDLY_NAME/set`

**NOTE**: brightness move/step will stop at the minimum brightness and won't turn on the light when it's off. In this case use `brightness_move_onoff`/`brightness_step_onoff`
````js
{
  "brightness_move": -40, // Starts moving brightness down at 40 units per second
  "brightness_move": 0, // Stop moving brightness
  "brightness_step": 40 // Increases brightness by 40
}
````

### Effect (enum)
Triggers an effect on the light (e.g. make light blink for a few seconds).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"effect": NEW_VALUE}`.
The possible values are: `blink`, `breathe`, `okay`, `channel_change`, `finish_effect`, `stop_effect`.

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

### CurrentPosition (numeric)
This attribute defines the current position, in %.
Value can be found in the published state on the `CurrentPosition` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"CurrentPosition": ""}`.
It's not possible to write (`/set`) this value.

### MemoryPosition (numeric)
This attribute defines the memory position, in %.
Value can be found in the published state on the `MemoryPosition` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"MemoryPosition": ""}`.
It's not possible to write (`/set`) this value.

### ERampUp (binary)
This attribute defines if a ramp up should be used or not..
Value can be found in the published state on the `eRampUp` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"eRampUp": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eRampUp": NEW_VALUE}`.
If value equals `ON` eRampUp is ON, if `OFF` OFF.

### RampUp (numeric)
This attribute defines the time taken during the ramp up in ms..
Value can be found in the published state on the `RampUp` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"RampUp": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"RampUp": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400000`.

### ERampDown (binary)
This attribute defines if a ramp down should be used or not..
Value can be found in the published state on the `eRampDown` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"eRampDown": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eRampDown": NEW_VALUE}`.
If value equals `ON` eRampDown is ON, if `OFF` OFF.

### RampDown (numeric)
This attribute defines the time taken during the ramp down in ms..
Value can be found in the published state on the `RampDown` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"RampDown": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"RampDown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400000`.

### RampContinuousTime (numeric)
This attribute defines the time taken during the ramp loop in ms..
Value can be found in the published state on the `RampContinuousTime` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"RampContinuousTime": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"RampContinuousTime": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400000`.

### StepUp (numeric)
This attribute defines the value of each step during a dimming up. This value is set in %..
Value can be found in the published state on the `StepUp` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"StepUp": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"StepUp": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### LowDimLimit (numeric)
This attribute defines the value of the low dim limit, used during a dimming loop, on a long press for example. This value is set in %.
Value can be found in the published state on the `LowDimLimit` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"LowDimLimit": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"LowDimLimit": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### HighDimLimit (numeric)
This attribute defines the value of the high dim limit, used during a dimming loop, on a long press for example. This value is set in %.
Value can be found in the published state on the `HighDimLimit` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"HighDimLimit": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"HighDimLimit": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### NightLightStartingDelay (numeric)
This attribute defines the time before the nightlight begin. This value is set in seconds..
Value can be found in the published state on the `NightLightStartingDelay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"NightLightStartingDelay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"NightLightStartingDelay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `4294967294`.

### NightLightStartingBrightness (numeric)
This attribute defines the dimming value at the start of the nightlight. This value is set in %..
Value can be found in the published state on the `NightLightStartingBrightness` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"NightLightStartingBrightness": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"NightLightStartingBrightness": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### NightLightEndingBrightness (numeric)
This attribute defines the dimming value at the last step of the nightlight. This attribute must be lower than 0x000D : Nightlight starting brightness. This value is set in %..
Value can be found in the published state on the `NightLightEndingBrightness` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"NightLightEndingBrightness": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"NightLightEndingBrightness": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### NightLightRampTime (numeric)
This attribute defines the ramp duration of the nightlight. The ramp is running after the end of the starting delay and until the ending bright is reached. This value is set in seconds..
Value can be found in the published state on the `NightLightRampTime` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"NightLightRampTime": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"NightLightRampTime": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400000`.

### NightLightOnTime (numeric)
This attribute defines the total duration of the nightlight. It must not be lower than 0x000F : Nightlight ramp time. This value is set in seconds..
Value can be found in the published state on the `NightLightOnTime` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"NightLightOnTime": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"NightLightOnTime": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `4233600`.

### FavoritePosition1 (numeric)
This attribute defines the value of the favorite position 1. This value is set in %..
Value can be found in the published state on the `FavoritePosition1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"FavoritePosition1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"FavoritePosition1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### FavoritePosition2 (numeric)
This attribute defines the value of the favorite position 2. This value is set in %..
Value can be found in the published state on the `FavoritePosition2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"FavoritePosition2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"FavoritePosition2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### FavoritePosition3 (numeric)
This attribute defines the value of the favorite position 3. This value is set in %..
Value can be found in the published state on the `FavoritePosition3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"FavoritePosition3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"FavoritePosition3": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### StepControllerMode (binary)
This attribute enables or disables the 2-step controller mode. This mode enable product to run without any ramp before and after ON or OFF. It acts like a relay..
Value can be found in the published state on the `StepControllerMode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"StepControllerMode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"StepControllerMode": NEW_VALUE}`.
If value equals `ON` stepControllerMode is ON, if `OFF` OFF.

### MemoryPositionMode (binary)
This attribute enables or disables the memory position mode at first push button release. .
Value can be found in the published state on the `MemoryPositionMode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"MemoryPositionMode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"MemoryPositionMode": NEW_VALUE}`.
If value equals `ON` memoryPositionMode is ON, if `OFF` OFF.

### StepDown (numeric)
This attribute defines the value of each step during a dimming down. This value is set in %..
Value can be found in the published state on the `StepDown` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"StepDown": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"StepDown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### StepContinuous (numeric)
This attribute defines the value of each step during a dimming loop. This value is set in %..
Value can be found in the published state on the `StepContinuous` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"StepContinuous": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"StepContinuous": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### StepNightLigth (numeric)
This attribute defines the value of each step during the ramp down of the nightlight mode. This value is set in %..
Value can be found in the published state on the `StepNightLigth` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"StepNightLigth": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"StepNightLigth": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### DimmerDim (composite)
Start the dimming loop process for the selected duration..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimProp": {"ul_RampContinuousDuration": VALUE, "uc_StepContinuous": VALUE}}`
- `ul_RampContinuousDuration` (numeric): Set the duration of the ramp for the continuous variation, otherwise use 0xFFFFFFFF to use the one configured in the product. unit is ms
- `uc_StepContinuous` (numeric): Set the step size, otherwise use 0xFF to use the one configured in the product.. Value is in %. unit is s

### DimmerUpDown (enum)
Dim up or Down.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"DimmerUpDown": NEW_VALUE}`.
The possible values are: `dimUp`, `dimDown`.

### DimmerDimMinMax (composite)
Start dimming to the min or max value set in the device.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimMinMaxProp": {"ul_TransitionTime": VALUE, "action": VALUE}}`
- `ul_TransitionTime` (numeric): Set the transition time to the selected value, otherwise use 0xFFFFFFFF to use the one configured in the product. Value is in ms. unit is ms
- `action` (enum) allowed values: `dimToMin`, `dimToMax`

### DimmerMoveToFavorite1 (enum)
Start dimming to the favorite position 1, 2 or 3.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"DimmerMoveToFavorite1": NEW_VALUE}`.
The possible values are: `moveToFavorite1`, `moveToFavorite2`, `moveToFavorite3`.

### DimmerStarnightModeCurrent (enum)
Trigger Starnight mode from the current diming value.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"DimmerStarnightModeCurrent": NEW_VALUE}`.
The possible values are: `startNightLightModeCurrent`.

### DimmerStartNightLightMode (composite)
Start the nightlight mode with the given parameters.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmerStartNightLightModeProp": {"ul_ChildModeStartingDelay": VALUE, "uc_ChildModeBrightnessStart": VALUE, "uc_ChildModeBrightnessEnd": VALUE, "ul_ChildModeRampDuration": VALUE, "ul_ChildModeOnDuration": VALUE, "uc_ChildStep": VALUE}}`
- `ul_ChildModeStartingDelay` (numeric): Set the starting delay value, used before the start of the nightlight, otherwise use 0xFFFFFFFF to use the one configured in the product. Value is in ms. unit is ms
- `uc_ChildModeBrightnessStart` (numeric): Set the brightness at the beginning of the ramp, otherwise use 0xFF to use the one configured in the product. Value is in %. unit is %
- `uc_ChildModeBrightnessEnd` (numeric): Set the brightness at the end of the ramp, otherwise use 0xFF to use the one configured in the product. Value is in %. unit is %
- `ul_ChildModeRampDuration` (numeric): Set the ramp duration, otherwise use 0xFFFFFFFF to use the one configured in the product. Value is in ms. unit is ms
- `ul_ChildModeOnDuration` (numeric): Set the total duration of the nightlight, otherwise use 0xFFFFFFFF to use the one configured in the product. Value is in ms. unit is ms
- `uc_ChildStep` (numeric): Set the step size between each dim, otherwise use 0xFF to use the one configured in the product. Value is in %. unit is %

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

