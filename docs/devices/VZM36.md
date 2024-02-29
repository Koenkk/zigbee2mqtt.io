---
title: "Inovelli VZM36 control via MQTT"
description: "Integrate your Inovelli VZM36 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-02-29T20:20:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Inovelli VZM36

|     |     |
|-----|-----|
| Model | VZM36  |
| Vendor  | [Inovelli](/supported-devices/#v=Inovelli)  |
| Description | Fan canopy module |
| Exposes | light (state, brightness), fan (state, mode), breeze mode, dimmingSpeedUpRemote_1, rampRateOffToOnRemote_1, dimmingSpeedDownRemote_1, rampRateOnToOffRemote_1, minimumLevel_1, maximumLevel_1, autoTimerOff_1, defaultLevelRemote_1, stateAfterPowerRestored_1, higherOutputInNonNeutral_1, quickStartLightTime_1, quickStartLightLevel_1, smartBulbMode_1, ledColorWhenOn_1, ledIntensityWhenOn_1, outputMode_1, dimmingSpeedUpRemote_2, rampRateOffToOnRemote_2, dimmingSpeedDownRemote_2, rampRateOnToOffRemote_2, minimumLevel_2, maximumLevel_2, autoTimerOff_2, defaultLevelRemote_2, stateAfterPowerRestored_2, quickStartFan_2, smartBulbMode_2, outputMode_2, linkquality |
| Picture | ![Inovelli VZM36](https://www.zigbee2mqtt.io/images/devices/VZM36.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Light 
This light supports the following features: `state`, `brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionnaly an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the light will not answer to other on with timed off commands.
Support depend on the light firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Fan 
The current state of this fan is in the published state under the `fan_state` property (value is `ON` or `OFF`).
To control this fan publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fan_state": "ON"}` or `{"fan_state": "OFF"}`.
To read the current state of this fan publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"fan_state": ""}`.
To change the mode publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fan_mode": VALUE}` where `VALUE` can be: `low`, `smart`, `medium`, `high`, `on`.

### Breeze mode (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"breezeMode": {"speed1": VALUE, "time1": VALUE, "speed2": VALUE, "time2": VALUE, "speed3": VALUE, "time3": VALUE, "speed4": VALUE, "time4": VALUE, "speed5": VALUE, "time5": VALUE}}`
- `speed1` (enum): Step 1 Speed allowed values: `low`, `medium`, `high`
- `time1` (numeric): Duration (s) for fan in Step 1   min value is 1, max value is 80
- `speed2` (enum): Step 2 Speed allowed values: `low`, `medium`, `high`
- `time2` (numeric): Duration (s) for fan in Step 2   min value is 1, max value is 80
- `speed3` (enum): Step 3 Speed allowed values: `low`, `medium`, `high`
- `time3` (numeric): Duration (s) for fan in Step 3   min value is 1, max value is 80
- `speed4` (enum): Step 4 Speed allowed values: `low`, `medium`, `high`
- `time4` (numeric): Duration (s) for fan in Step 4   min value is 1, max value is 80
- `speed5` (enum): Step 5 Speed allowed values: `low`, `medium`, `high`
- `time5` (numeric): Duration (s) for fan in Step 5   min value is 1, max value is 80

### DimmingSpeedUpRemote 1 (numeric)
This changes the speed that the light dims up when controlled from the hub. A setting of 0 turns the light immediately on. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 25 (2.5s).
Value can be found in the published state on the `dimmingSpeedUpRemote_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dimmingSpeedUpRemote_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmingSpeedUpRemote_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `127`.

### RampRateOffToOnRemote 1 (numeric)
This changes the speed that the light turns on when controlled from the hub. A setting of 0 turns the light immediately on. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with dimmingSpeedUpRemote setting..
Value can be found in the published state on the `rampRateOffToOnRemote_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"rampRateOffToOnRemote_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rampRateOffToOnRemote_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `127`.

### DimmingSpeedDownRemote 1 (numeric)
This changes the speed that the light dims down when controlled from the hub. A setting of 0 turns the light immediately off. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with dimmingSpeedUpRemote setting..
Value can be found in the published state on the `dimmingSpeedDownRemote_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dimmingSpeedDownRemote_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmingSpeedDownRemote_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `127`.

### RampRateOnToOffRemote 1 (numeric)
This changes the speed that the light turns off when controlled from the hub. A setting of 'instant' turns the light immediately off. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with rampRateOffToOnRemote setting..
Value can be found in the published state on the `rampRateOnToOffRemote_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"rampRateOnToOffRemote_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rampRateOnToOffRemote_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `127`.

### MinimumLevel 1 (numeric)
The minimum level that the dimmer allows the bulb to be dimmed to. Useful when the user has an LED bulb that does not turn on or flickers at a lower level..
Value can be found in the published state on the `minimumLevel_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"minimumLevel_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"minimumLevel_1": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `253`.

### MaximumLevel 1 (numeric)
The maximum level that the dimmer allows the bulb to be dimmed to.Useful when the user has an LED bulb that reaches its maximum level before the dimmer value of 99 or when the user wants to limit the maximum brightness..
Value can be found in the published state on the `maximumLevel_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"maximumLevel_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"maximumLevel_1": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `254`.

### AutoTimerOff 1 (numeric)
Automatically turns the light off after this many seconds. When the light is turned on a timer is started. When the timer expires, the light is turned off. 0 = Auto off is disabled..
Value can be found in the published state on the `autoTimerOff_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"autoTimerOff_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"autoTimerOff_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `32767`.
The unit of this value is `seconds`.
Besides the numeric values the following values are accepted: `Disabled`.

### DefaultLevelRemote 1 (numeric)
Default level for the light when it is turned on from the hub. A setting of 255 means that the light will return to the level that it was on before it was turned off..
Value can be found in the published state on the `defaultLevelRemote_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLevelRemote_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLevelRemote_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### StateAfterPowerRestored 1 (numeric)
The state the light should return to when power is restored after power failure. 0 = off, 1-254 = level, 255 = previous..
Value can be found in the published state on the `stateAfterPowerRestored_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"stateAfterPowerRestored_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"stateAfterPowerRestored_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### HigherOutputInNonNeutral 1 (enum)
Increase level in non-neutral mode.
Value can be found in the published state on the `higherOutputInNonNeutral_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"higherOutputInNonNeutral_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"higherOutputInNonNeutral_1": NEW_VALUE}`.
The possible values are: `Disabled (default)`, `Enabled`.

### QuickStartLightTime 1 (numeric)
Duration of full power output while lamp tranisitions from Off to On. In 60th of second. 0 = disable, 1 = 1/60s, 60 = 1s.
Value can be found in the published state on the `quickStartLightTime_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"quickStartLightTime_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"quickStartLightTime_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `60`.

### QuickStartLightLevel 1 (numeric)
Level of power output during Quick Start Light time (P34)..
Value can be found in the published state on the `quickStartLightLevel_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"quickStartLightLevel_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"quickStartLightLevel_1": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `254`.

### SmartBulbMode 1 (enum)
For use with Smart Bulbs that need constant power and are controlled via commands rather than power..
Value can be found in the published state on the `smartBulbMode_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"smartBulbMode_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"smartBulbMode_1": NEW_VALUE}`.
The possible values are: `Disabled`, `Smart Bulb Mode`.

### LedColorWhenOn 1 (numeric)
Set the color of the LED Indicator when the load is on..
Value can be found in the published state on the `ledColorWhenOn_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ledColorWhenOn_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ledColorWhenOn_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.
Besides the numeric values the following values are accepted: `Red`, `Orange`, `Yellow`, `Green`, `Cyan`, `Blue`, `Violet`, `Pink`, `White`.

### LedIntensityWhenOn 1 (numeric)
Set the intensity of the LED Indicator when the load is on..
Value can be found in the published state on the `ledIntensityWhenOn_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ledIntensityWhenOn_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ledIntensityWhenOn_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### OutputMode 1 (enum)
Use device as a Dimmer or an On/Off switch..
Value can be found in the published state on the `outputMode_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"outputMode_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"outputMode_1": NEW_VALUE}`.
The possible values are: `Dimmer`, `On/Off`.

### DimmingSpeedUpRemote 2 (numeric)
This changes the speed that the fan ramps up when controlled from the hub. A setting of 0 turns the fan immediately on. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 25 (2.5s).
Value can be found in the published state on the `dimmingSpeedUpRemote_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dimmingSpeedUpRemote_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmingSpeedUpRemote_2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `127`.

### RampRateOffToOnRemote 2 (numeric)
This changes the speed that the fan turns on when controlled from the hub. A setting of 0 turns the fan immediately on. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with dimmingSpeedUpRemote setting..
Value can be found in the published state on the `rampRateOffToOnRemote_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"rampRateOffToOnRemote_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rampRateOffToOnRemote_2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `127`.

### DimmingSpeedDownRemote 2 (numeric)
This changes the speed that the fan ramps down when controlled from the hub. A setting of 0 turns the fan immediately off. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with dimmingSpeedUpRemote setting..
Value can be found in the published state on the `dimmingSpeedDownRemote_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dimmingSpeedDownRemote_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmingSpeedDownRemote_2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `127`.

### RampRateOnToOffRemote 2 (numeric)
This changes the speed that the fan turns off when controlled from the hub. A setting of 'instant' turns the fan immediately off. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with rampRateOffToOnRemote setting..
Value can be found in the published state on the `rampRateOnToOffRemote_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"rampRateOnToOffRemote_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rampRateOnToOffRemote_2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `127`.

### MinimumLevel 2 (numeric)
The minimum level that the fan can be set to..
Value can be found in the published state on the `minimumLevel_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"minimumLevel_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"minimumLevel_2": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `253`.

### MaximumLevel 2 (numeric)
The maximum level that the fan can be set to..
Value can be found in the published state on the `maximumLevel_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"maximumLevel_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"maximumLevel_2": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `254`.

### AutoTimerOff 2 (numeric)
Automatically turns the fan off after this many seconds. When the fan is turned on a timer is started. When the timer expires, the switch is turned off. 0 = Auto off is disabled..
Value can be found in the published state on the `autoTimerOff_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"autoTimerOff_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"autoTimerOff_2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `32767`.
The unit of this value is `seconds`.
Besides the numeric values the following values are accepted: `Disabled`.

### DefaultLevelRemote 2 (numeric)
Default level for the fan when it is turned on from the hub. A setting of 255 means that the fan will return to the level that it was on before it was turned off..
Value can be found in the published state on the `defaultLevelRemote_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLevelRemote_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLevelRemote_2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### StateAfterPowerRestored 2 (numeric)
The state the fan should return to when power is restored after power failure. 0 = off, 1-254 = level, 255 = previous..
Value can be found in the published state on the `stateAfterPowerRestored_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"stateAfterPowerRestored_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"stateAfterPowerRestored_2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### QuickStartFan 2 (numeric)
Duration of full power output while fan tranisitions from Off to On. In 60th of second. 0 = disable, 1 = 1/60s, 60 = 1s.
Value can be found in the published state on the `quickStartFan_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"quickStartFan_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"quickStartFan_2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `60`.

### SmartBulbMode 2 (enum)
For use with Smart Fans that need constant power and are controlled via commands rather than power..
Value can be found in the published state on the `smartBulbMode_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"smartBulbMode_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"smartBulbMode_2": NEW_VALUE}`.
The possible values are: `Disabled`, `Smart Fan Mode`.

### OutputMode 2 (enum)
Use device as a Dimmer or an On/Off switch..
Value can be found in the published state on the `outputMode_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"outputMode_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"outputMode_2": NEW_VALUE}`.
The possible values are: `Dimmer`, `On/Off`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

