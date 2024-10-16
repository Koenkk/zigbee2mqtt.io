---
title: "Inovelli VZM31-SN control via MQTT"
description: "Integrate your Inovelli VZM31-SN via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-06-01T15:16:10
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Inovelli VZM31-SN

|     |     |
|-----|-----|
| Model | VZM31-SN  |
| Vendor  | [Inovelli](/supported-devices/#v=Inovelli)  |
| Description | 2-in-1 switch + dimmer |
| Exposes | light (state, brightness), power, energy, led_effect, individual_led_effect, dimmingSpeedUpRemote, dimmingSpeedUpLocal, rampRateOffToOnRemote, rampRateOffToOnLocal, dimmingSpeedDownRemote, dimmingSpeedDownLocal, rampRateOnToOffRemote, rampRateOnToOffLocal, minimumLevel, maximumLevel, invertSwitch, autoTimerOff, defaultLevelLocal, defaultLevelRemote, stateAfterPowerRestored, loadLevelIndicatorTimeout, powerType, switchType, internalTemperature, overheat, buttonDelay, deviceBindNumber, smartBulbMode, doubleTapUpToParam55, doubleTapDownToParam56, brightnessLevelForDoubleTapUp, brightnessLevelForDoubleTapDown, ledColorWhenOn, ledColorWhenOff, ledIntensityWhenOn, ledIntensityWhenOff, singleTapBehavior, fanControlMode, lowLevelForFanControlMode, mediumLevelForFanControlMode, highLevelForFanControlMode, ledColorForFanControlMode, auxSwitchUniqueScenes, bindingOffToOnSyncLevel, localProtection, remoteProtection, onOffLedMode, firmwareUpdateInProgressIndicator, defaultLed1ColorWhenOn, defaultLed1ColorWhenOff, defaultLed1IntensityWhenOn, defaultLed1IntensityWhenOff, defaultLed2ColorWhenOn, defaultLed2ColorWhenOff, defaultLed2IntensityWhenOn, defaultLed2IntensityWhenOff, defaultLed3ColorWhenOn, defaultLed3ColorWhenOff, defaultLed3IntensityWhenOn, defaultLed3IntensityWhenOff, defaultLed4ColorWhenOn, defaultLed4ColorWhenOff, defaultLed4IntensityWhenOn, defaultLed4IntensityWhenOff, defaultLed5ColorWhenOn, defaultLed5ColorWhenOff, defaultLed5IntensityWhenOn, defaultLed5IntensityWhenOff, defaultLed6ColorWhenOn, defaultLed6ColorWhenOff, defaultLed6IntensityWhenOn, defaultLed6IntensityWhenOff, defaultLed7ColorWhenOn, defaultLed7ColorWhenOff, defaultLed7IntensityWhenOn, defaultLed7IntensityWhenOff, outputMode, doubleTapClearNotifications, fanLedLevelType, activePowerReports, periodicPowerAndEnergyReports, activeEnergyReports, quickStartTime, quickStartLevel, higherOutputInNonNeutral, ledBarScaling, relayClick, identify, action, linkquality |
| Picture | ![Inovelli VZM31-SN](https://www.zigbee2mqtt.io/images/devices/VZM31-SN.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `identify_timeout`: Sets duration of identification procedure in seconds (i.e., how long device would flash). Value ranges from 1 to 30 seconds (default 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Light 
This light supports the following features: `state`, `brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.

#### Transition
For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property `transition` to the payload which is the transition time in seconds.
Examples: `{"brightness":156,"transition":3}`, `{"color_temp":241,"transition":1}`.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Led effect (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_effect": {"effect": VALUE, "color": VALUE, "level": VALUE, "duration": VALUE}}`
- `effect` (enum): Animation Effect to use for the LEDs allowed values: `off`, `solid`, `fast_blink`, `slow_blink`, `pulse`, `chase`, `open_close`, `small_to_big`, `aurora`, `slow_falling`, `medium_falling`, `fast_falling`, `slow_rising`, `medium_rising`, `fast_rising`, `medium_blink`, `slow_chase`, `fast_chase`, `fast_siren`, `slow_siren`, `clear_effect`
- `color` (numeric): Calculated by using a hue color circle(value/255*360) If color = 255 display white max value is 255
- `level` (numeric): Brightness of the LEDs max value is 100
- `duration` (numeric): 1-60 is in seconds calculated 61-120 is in minutes calculated by(value-60) Example a value of 65 would be 65-60 = 5 minutes - 120-254 Is in hours calculated by(value-120) Example a value of 132 would be 132-120 would be 12 hours. - 255 Indefinitely max value is 255

### Individual led effect (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"individual_led_effect": {"led": VALUE, "effect": VALUE, "color": VALUE, "level": VALUE, "duration": VALUE}}`
- `led` (enum): Individual LED to target. allowed values: `1`, `2`, `3`, `4`, `5`, `6`, `7`
- `effect` (enum): Animation Effect to use for the LED allowed values: `off`, `solid`, `fast_blink`, `slow_blink`, `pulse`, `chase`, `falling`, `rising`, `aurora`, `clear_effect`
- `color` (numeric): Calculated by using a hue color circle(value/255*360) If color = 255 display white max value is 255
- `level` (numeric): Brightness of the LED max value is 100
- `duration` (numeric): 1-60 is in seconds calculated 61-120 is in minutes calculated by(value-60) Example a value of 65 would be 65-60 = 5 minutes - 120-254 Is in hours calculated by(value-120)  Example a value of 132 would be 132-120 would be 12 hours. - 255 Indefinitely max value is 255

### DimmingSpeedUpRemote (numeric)
This changes the speed that the light dims up when controlled from the hub. A setting of 0 turns the light immediately on. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 25 (2.5s).
Value can be found in the published state on the `dimmingSpeedUpRemote` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dimmingSpeedUpRemote": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmingSpeedUpRemote": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `127`.

### DimmingSpeedUpLocal (numeric)
This changes the speed that the light dims up when controlled at the switch. A setting of 0 turns the light immediately on. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with dimmingSpeedUpRemote setting..
Value can be found in the published state on the `dimmingSpeedUpLocal` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dimmingSpeedUpLocal": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmingSpeedUpLocal": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `127`.

### RampRateOffToOnRemote (numeric)
This changes the speed that the light turns on when controlled from the hub. A setting of 0 turns the light immediately on. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with dimmingSpeedUpRemote setting..
Value can be found in the published state on the `rampRateOffToOnRemote` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"rampRateOffToOnRemote": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rampRateOffToOnRemote": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `127`.

### RampRateOffToOnLocal (numeric)
This changes the speed that the light turns on when controlled at the switch. A setting of 0 turns the light immediately on. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with dimmingSpeedUpRemote setting..
Value can be found in the published state on the `rampRateOffToOnLocal` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"rampRateOffToOnLocal": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rampRateOffToOnLocal": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `127`.

### DimmingSpeedDownRemote (numeric)
This changes the speed that the light dims down when controlled from the hub. A setting of 0 turns the light immediately off. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with dimmingSpeedUpRemote setting..
Value can be found in the published state on the `dimmingSpeedDownRemote` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dimmingSpeedDownRemote": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmingSpeedDownRemote": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `127`.

### DimmingSpeedDownLocal (numeric)
This changes the speed that the light dims down when controlled at the switch. A setting of 0 turns the light immediately off. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with dimmingSpeedUpLocal setting..
Value can be found in the published state on the `dimmingSpeedDownLocal` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dimmingSpeedDownLocal": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmingSpeedDownLocal": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `127`.

### RampRateOnToOffRemote (numeric)
This changes the speed that the light turns off when controlled from the hub. A setting of 'instant' turns the light immediately off. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with rampRateOffToOnRemote setting..
Value can be found in the published state on the `rampRateOnToOffRemote` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"rampRateOnToOffRemote": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rampRateOnToOffRemote": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `127`.

### RampRateOnToOffLocal (numeric)
This changes the speed that the light turns off when controlled at the switch. A setting of 'instant' turns the light immediately off. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with rampRateOffToOnLocal setting..
Value can be found in the published state on the `rampRateOnToOffLocal` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"rampRateOnToOffLocal": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rampRateOnToOffLocal": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `127`.

### MinimumLevel (numeric)
The minimum level that the dimmer allows the bulb to be dimmed to. Useful when the user has an LED bulb that does not turn on or flickers at a lower level..
Value can be found in the published state on the `minimumLevel` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"minimumLevel": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"minimumLevel": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `254`.

### MaximumLevel (numeric)
The maximum level that the dimmer allows the bulb to be dimmed to.Useful when the user has an LED bulb that reaches its maximum level before the dimmer value of 99 or when the user wants to limit the maximum brightness..
Value can be found in the published state on the `maximumLevel` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"maximumLevel": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"maximumLevel": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `255`.

### InvertSwitch (enum)
Inverts the orientation of the switch. Useful when the switch is installed upside down. Essentially up becomes down and down becomes up..
Value can be found in the published state on the `invertSwitch` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"invertSwitch": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"invertSwitch": NEW_VALUE}`.
The possible values are: `Yes`, `No`.

### AutoTimerOff (numeric)
Automatically turns the switch off after this many seconds. When the switch is turned on a timer is started. When the timer expires, the switch is turned off. 0 = Auto off is disabled..
Value can be found in the published state on the `autoTimerOff` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"autoTimerOff": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"autoTimerOff": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `32767`.
The unit of this value is `seconds`.
Besides the numeric values the following values are accepted: `Disabled`.

### DefaultLevelLocal (numeric)
Default level for the load when it is turned on at the switch. A setting of 255 means that the switch will return to the level that it was on before it was turned off..
Value can be found in the published state on the `defaultLevelLocal` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLevelLocal": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLevelLocal": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### DefaultLevelRemote (numeric)
Default level for the load when it is turned on from the hub. A setting of 255 means that the switch will return to the level that it was on before it was turned off..
Value can be found in the published state on the `defaultLevelRemote` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLevelRemote": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLevelRemote": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### StateAfterPowerRestored (numeric)
The state the switch should return to when power is restored after power failure. 0 = off, 1-254 = level, 255 = previous..
Value can be found in the published state on the `stateAfterPowerRestored` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"stateAfterPowerRestored": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"stateAfterPowerRestored": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### LoadLevelIndicatorTimeout (enum)
Shows the level that the load is at for x number of seconds after the load is adjusted and then returns to the Default LED state. 0 = Stay Off, 1-10 = seconds, 11 = Stay On..
Value can be found in the published state on the `loadLevelIndicatorTimeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"loadLevelIndicatorTimeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"loadLevelIndicatorTimeout": NEW_VALUE}`.
The possible values are: `Stay Off`, `1 Second`, `2 Seconds`, `3 Seconds`, `4 Seconds`, `5 Seconds`, `6 Seconds`, `7 Seconds`, `8 Seconds`, `9 Seconds`, `10 Seconds`, `Stay On`.

### PowerType (enum)
Set the power type for the device..
Value can be found in the published state on the `powerType` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"powerType": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `Non Neutral`, `Neutral`.

### SwitchType (enum)
Set the switch configuration..
Value can be found in the published state on the `switchType` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switchType": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switchType": NEW_VALUE}`.
The possible values are: `Single Pole`, `3-Way Dumb Switch`, `3-Way Aux Switch`, `Single-Pole Full Sine Wave`.

### InternalTemperature (numeric)
The temperature measured by the temperature sensor inside the chip, in degrees Celsius.
Value can be found in the published state on the `internalTemperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"internalTemperature": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `127`.

### Overheat (enum)
Indicates if the internal chipset is currently in an overheated state..
Value can be found in the published state on the `overheat` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"overheat": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `No Alert`, `Overheated`.

### ButtonDelay (enum)
This will set the button press delay. 0 = no delay (Disables Button Press Events), Default = 500ms..
Value can be found in the published state on the `buttonDelay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"buttonDelay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"buttonDelay": NEW_VALUE}`.
The possible values are: `0ms`, `100ms`, `200ms`, `300ms`, `400ms`, `500ms`, `600ms`, `700ms`, `800ms`, `900ms`.

### DeviceBindNumber (numeric)
The number of devices currently bound (excluding gateways) and counts one group as two devices.
Value can be found in the published state on the `deviceBindNumber` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"deviceBindNumber": ""}`.
It's not possible to write (`/set`) this value.

### SmartBulbMode (enum)
For use with Smart Bulbs that need constant power and are controlled via commands rather than power..
Value can be found in the published state on the `smartBulbMode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"smartBulbMode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"smartBulbMode": NEW_VALUE}`.
The possible values are: `Disabled`, `Smart Bulb Mode`.

### DoubleTapUpToParam55 (enum)
Enable or Disable setting level to parameter 55 on double-tap UP..
Value can be found in the published state on the `doubleTapUpToParam55` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"doubleTapUpToParam55": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"doubleTapUpToParam55": NEW_VALUE}`.
The possible values are: `Disabled`, `Enabled`.

### DoubleTapDownToParam56 (enum)
Enable or Disable setting level to parameter 56 on double-tap DOWN..
Value can be found in the published state on the `doubleTapDownToParam56` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"doubleTapDownToParam56": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"doubleTapDownToParam56": NEW_VALUE}`.
The possible values are: `Disabled`, `Enabled`.

### BrightnessLevelForDoubleTapUp (numeric)
Set this level on double-tap UP (if enabled by P53). 255 = send ON command..
Value can be found in the published state on the `brightnessLevelForDoubleTapUp` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightnessLevelForDoubleTapUp": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightnessLevelForDoubleTapUp": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `255`.

### BrightnessLevelForDoubleTapDown (numeric)
Set this level on double-tap DOWN (if enabled by P54). 255 = send OFF command..
Value can be found in the published state on the `brightnessLevelForDoubleTapDown` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightnessLevelForDoubleTapDown": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightnessLevelForDoubleTapDown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### LedColorWhenOn (numeric)
Set the color of the LED Indicator when the load is on..
Value can be found in the published state on the `ledColorWhenOn` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ledColorWhenOn": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ledColorWhenOn": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.
Besides the numeric values the following values are accepted: `Red`, `Orange`, `Yellow`, `Green`, `Cyan`, `Blue`, `Violet`, `Pink`, `White`.

### LedColorWhenOff (numeric)
Set the color of the LED Indicator when the load is off..
Value can be found in the published state on the `ledColorWhenOff` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ledColorWhenOff": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ledColorWhenOff": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.
Besides the numeric values the following values are accepted: `Red`, `Orange`, `Yellow`, `Green`, `Cyan`, `Blue`, `Violet`, `Pink`, `White`.

### LedIntensityWhenOn (numeric)
Set the intensity of the LED Indicator when the load is on..
Value can be found in the published state on the `ledIntensityWhenOn` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ledIntensityWhenOn": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ledIntensityWhenOn": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### LedIntensityWhenOff (numeric)
Set the intensity of the LED Indicator when the load is off..
Value can be found in the published state on the `ledIntensityWhenOff` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ledIntensityWhenOff": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ledIntensityWhenOff": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### SingleTapBehavior (enum)
Behavior of single tapping the on or off button. Old behavior turns the switch on or off. New behavior cycles through the levels set by P131-133. Down Always Off is like the new behavior but down always turns the switch off instead of going to next lower speed..
Value can be found in the published state on the `singleTapBehavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"singleTapBehavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"singleTapBehavior": NEW_VALUE}`.
The possible values are: `Old Behavior`, `New Behavior`, `Down Always Off`.

### FanControlMode (enum)
Which mode to use when binding EP3 (config button) to another device (like a fan module)..
Value can be found in the published state on the `fanControlMode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"fanControlMode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fanControlMode": NEW_VALUE}`.
The possible values are: `Disabled`, `Multi Tap`, `Cycle`.

### LowLevelForFanControlMode (numeric)
Level to send to device bound to EP3 when set to low..
Value can be found in the published state on the `lowLevelForFanControlMode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"lowLevelForFanControlMode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lowLevelForFanControlMode": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `254`.

### MediumLevelForFanControlMode (numeric)
Level to send to device bound to EP3 when set to medium..
Value can be found in the published state on the `mediumLevelForFanControlMode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"mediumLevelForFanControlMode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mediumLevelForFanControlMode": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `254`.

### HighLevelForFanControlMode (numeric)
Level to send to device bound to EP3 when set to high..
Value can be found in the published state on the `highLevelForFanControlMode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"highLevelForFanControlMode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"highLevelForFanControlMode": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `254`.

### LedColorForFanControlMode (numeric)
LED color used to display fan control mode..
Value can be found in the published state on the `ledColorForFanControlMode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ledColorForFanControlMode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ledColorForFanControlMode": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.
Besides the numeric values the following values are accepted: `Red`, `Orange`, `Yellow`, `Green`, `Cyan`, `Blue`, `Violet`, `Pink`, `White`.

### AuxSwitchUniqueScenes (enum)
Have unique scene numbers for scenes activated with the aux switch..
Value can be found in the published state on the `auxSwitchUniqueScenes` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"auxSwitchUniqueScenes": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auxSwitchUniqueScenes": NEW_VALUE}`.
The possible values are: `Disabled`, `Enabled`.

### BindingOffToOnSyncLevel (enum)
Send Move_To_Level using Default Level with Off/On to bound devices..
Value can be found in the published state on the `bindingOffToOnSyncLevel` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"bindingOffToOnSyncLevel": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"bindingOffToOnSyncLevel": NEW_VALUE}`.
The possible values are: `Disabled`, `Enabled`.

### LocalProtection (enum)
Ability to control switch from the wall..
Value can be found in the published state on the `localProtection` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"localProtection": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"localProtection": NEW_VALUE}`.
The possible values are: `Disabled`, `Enabled`.

### RemoteProtection (enum)
Ability to control switch from the hub..
Value can be found in the published state on the `remoteProtection` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"remoteProtection": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `Disabled`, `Enabled`.

### OnOffLedMode (enum)
When the device is in On/Off mode, use full LED bar or just one LED..
Value can be found in the published state on the `onOffLedMode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"onOffLedMode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"onOffLedMode": NEW_VALUE}`.
The possible values are: `All`, `One`.

### FirmwareUpdateInProgressIndicator (enum)
Display progress on LED bar during firmware update..
Value can be found in the published state on the `firmwareUpdateInProgressIndicator` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"firmwareUpdateInProgressIndicator": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"firmwareUpdateInProgressIndicator": NEW_VALUE}`.
The possible values are: `Disabled`, `Enabled`.

### DefaultLed1ColorWhenOn (numeric)
0-254:This is the color of the LED strip in a hex representation. 255:Synchronization with default all LED strip color parameter..
Value can be found in the published state on the `defaultLed1ColorWhenOn` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed1ColorWhenOn": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed1ColorWhenOn": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### DefaultLed1ColorWhenOff (numeric)
0-254:This is the color of the LED strip in a hex representation. 255:Synchronization with default all LED strip color parameter..
Value can be found in the published state on the `defaultLed1ColorWhenOff` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed1ColorWhenOff": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed1ColorWhenOff": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### DefaultLed1IntensityWhenOn (numeric)
Intesity of LED strip when on. 101 = Synchronized with default all LED strip intensity parameter..
Value can be found in the published state on the `defaultLed1IntensityWhenOn` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed1IntensityWhenOn": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed1IntensityWhenOn": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `101`.

### DefaultLed1IntensityWhenOff (numeric)
Intesity of LED strip when off. 101 = Synchronized with default all LED strip intensity parameter..
Value can be found in the published state on the `defaultLed1IntensityWhenOff` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed1IntensityWhenOff": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed1IntensityWhenOff": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `101`.

### DefaultLed2ColorWhenOn (numeric)
0-254:This is the color of the LED strip in a hex representation. 255:Synchronization with default all LED strip color parameter..
Value can be found in the published state on the `defaultLed2ColorWhenOn` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed2ColorWhenOn": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed2ColorWhenOn": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### DefaultLed2ColorWhenOff (numeric)
0-254:This is the color of the LED strip in a hex representation. 255:Synchronization with default all LED strip color parameter..
Value can be found in the published state on the `defaultLed2ColorWhenOff` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed2ColorWhenOff": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed2ColorWhenOff": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### DefaultLed2IntensityWhenOn (numeric)
Intesity of LED strip when on. 101 = Synchronized with default all LED strip intensity parameter..
Value can be found in the published state on the `defaultLed2IntensityWhenOn` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed2IntensityWhenOn": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed2IntensityWhenOn": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `101`.

### DefaultLed2IntensityWhenOff (numeric)
Intesity of LED strip when off. 101 = Synchronized with default all LED strip intensity parameter..
Value can be found in the published state on the `defaultLed2IntensityWhenOff` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed2IntensityWhenOff": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed2IntensityWhenOff": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `101`.

### DefaultLed3ColorWhenOn (numeric)
0-254:This is the color of the LED strip in a hex representation. 255:Synchronization with default all LED strip color parameter..
Value can be found in the published state on the `defaultLed3ColorWhenOn` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed3ColorWhenOn": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed3ColorWhenOn": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### DefaultLed3ColorWhenOff (numeric)
0-254:This is the color of the LED strip in a hex representation. 255:Synchronization with default all LED strip color parameter..
Value can be found in the published state on the `defaultLed3ColorWhenOff` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed3ColorWhenOff": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed3ColorWhenOff": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### DefaultLed3IntensityWhenOn (numeric)
Intesity of LED strip when on. 101 = Synchronized with default all LED strip intensity parameter..
Value can be found in the published state on the `defaultLed3IntensityWhenOn` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed3IntensityWhenOn": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed3IntensityWhenOn": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `101`.

### DefaultLed3IntensityWhenOff (numeric)
Intesity of LED strip when off. 101 = Synchronized with default all LED strip intensity parameter..
Value can be found in the published state on the `defaultLed3IntensityWhenOff` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed3IntensityWhenOff": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed3IntensityWhenOff": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `101`.

### DefaultLed4ColorWhenOn (numeric)
0-254:This is the color of the LED strip in a hex representation. 255:Synchronization with default all LED strip color parameter..
Value can be found in the published state on the `defaultLed4ColorWhenOn` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed4ColorWhenOn": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed4ColorWhenOn": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### DefaultLed4ColorWhenOff (numeric)
0-254:This is the color of the LED strip in a hex representation. 255:Synchronization with default all LED strip color parameter..
Value can be found in the published state on the `defaultLed4ColorWhenOff` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed4ColorWhenOff": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed4ColorWhenOff": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### DefaultLed4IntensityWhenOn (numeric)
Intesity of LED strip when on. 101 = Synchronized with default all LED strip intensity parameter..
Value can be found in the published state on the `defaultLed4IntensityWhenOn` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed4IntensityWhenOn": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed4IntensityWhenOn": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `101`.

### DefaultLed4IntensityWhenOff (numeric)
Intesity of LED strip when off. 101 = Synchronized with default all LED strip intensity parameter..
Value can be found in the published state on the `defaultLed4IntensityWhenOff` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed4IntensityWhenOff": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed4IntensityWhenOff": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `101`.

### DefaultLed5ColorWhenOn (numeric)
0-254:This is the color of the LED strip in a hex representation. 255:Synchronization with default all LED strip color parameter..
Value can be found in the published state on the `defaultLed5ColorWhenOn` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed5ColorWhenOn": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed5ColorWhenOn": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### DefaultLed5ColorWhenOff (numeric)
0-254:This is the color of the LED strip in a hex representation. 255:Synchronization with default all LED strip color parameter..
Value can be found in the published state on the `defaultLed5ColorWhenOff` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed5ColorWhenOff": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed5ColorWhenOff": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### DefaultLed5IntensityWhenOn (numeric)
Intesity of LED strip when on. 101 = Synchronized with default all LED strip intensity parameter..
Value can be found in the published state on the `defaultLed5IntensityWhenOn` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed5IntensityWhenOn": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed5IntensityWhenOn": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `101`.

### DefaultLed5IntensityWhenOff (numeric)
Intesity of LED strip when off. 101 = Synchronized with default all LED strip intensity parameter..
Value can be found in the published state on the `defaultLed5IntensityWhenOff` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed5IntensityWhenOff": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed5IntensityWhenOff": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `101`.

### DefaultLed6ColorWhenOn (numeric)
0-254:This is the color of the LED strip in a hex representation. 255:Synchronization with default all LED strip color parameter..
Value can be found in the published state on the `defaultLed6ColorWhenOn` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed6ColorWhenOn": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed6ColorWhenOn": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### DefaultLed6ColorWhenOff (numeric)
0-254:This is the color of the LED strip in a hex representation. 255:Synchronization with default all LED strip color parameter..
Value can be found in the published state on the `defaultLed6ColorWhenOff` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed6ColorWhenOff": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed6ColorWhenOff": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### DefaultLed6IntensityWhenOn (numeric)
Intesity of LED strip when on. 101 = Synchronized with default all LED strip intensity parameter..
Value can be found in the published state on the `defaultLed6IntensityWhenOn` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed6IntensityWhenOn": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed6IntensityWhenOn": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `101`.

### DefaultLed6IntensityWhenOff (numeric)
Intesity of LED strip when off. 101 = Synchronized with default all LED strip intensity parameter..
Value can be found in the published state on the `defaultLed6IntensityWhenOff` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed6IntensityWhenOff": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed6IntensityWhenOff": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `101`.

### DefaultLed7ColorWhenOn (numeric)
0-254:This is the color of the LED strip in a hex representation. 255:Synchronization with default all LED strip color parameter..
Value can be found in the published state on the `defaultLed7ColorWhenOn` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed7ColorWhenOn": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed7ColorWhenOn": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### DefaultLed7ColorWhenOff (numeric)
0-254:This is the color of the LED strip in a hex representation. 255:Synchronization with default all LED strip color parameter..
Value can be found in the published state on the `defaultLed7ColorWhenOff` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed7ColorWhenOff": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed7ColorWhenOff": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### DefaultLed7IntensityWhenOn (numeric)
Intesity of LED strip when on. 101 = Synchronized with default all LED strip intensity parameter..
Value can be found in the published state on the `defaultLed7IntensityWhenOn` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed7IntensityWhenOn": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed7IntensityWhenOn": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `101`.

### DefaultLed7IntensityWhenOff (numeric)
Intesity of LED strip when off. 101 = Synchronized with default all LED strip intensity parameter..
Value can be found in the published state on the `defaultLed7IntensityWhenOff` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"defaultLed7IntensityWhenOff": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"defaultLed7IntensityWhenOff": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `101`.

### OutputMode (enum)
Use device as a Dimmer or an On/Off switch..
Value can be found in the published state on the `outputMode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"outputMode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"outputMode": NEW_VALUE}`.
The possible values are: `Dimmer`, `On/Off`.

### DoubleTapClearNotifications (enum)
Double-Tap the Config button to clear notifications..
Value can be found in the published state on the `doubleTapClearNotifications` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"doubleTapClearNotifications": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"doubleTapClearNotifications": NEW_VALUE}`.
The possible values are: `Enabled (Default)`, `Disabled`.

### FanLedLevelType (numeric)
Level display of the LED Strip.
Value can be found in the published state on the `fanLedLevelType` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"fanLedLevelType": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fanLedLevelType": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
Besides the numeric values the following values are accepted: `Limitless (like VZM31)`, `Adaptive LED`.

### ActivePowerReports (numeric)
Percent power level change that will result in a new power report being sent. 0 = Disabled.
Value can be found in the published state on the `activePowerReports` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"activePowerReports": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"activePowerReports": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### PeriodicPowerAndEnergyReports (numeric)
Time period between consecutive power & energy reports being sent (in seconds). The timer is reset after each report is sent..
Value can be found in the published state on the `periodicPowerAndEnergyReports` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"periodicPowerAndEnergyReports": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"periodicPowerAndEnergyReports": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `32767`.

### ActiveEnergyReports (numeric)
Energy reports Energy level change which will result in sending a new energy report.0 = disabled, 1-32767 = 0.01kWh-327.67kWh. Default setting: 10 (0.1 kWh).
Value can be found in the published state on the `activeEnergyReports` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"activeEnergyReports": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"activeEnergyReports": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `32767`.

### QuickStartTime (numeric)
Duration of full power output while lamp tranisitions from Off to On. In 60th of second. 0 = disable, 1 = 1/60s, 60 = 1s.
Value can be found in the published state on the `quickStartTime` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"quickStartTime": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"quickStartTime": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `60`.

### QuickStartLevel (numeric)
Level of power output during Quick Start Light time (P23)..
Value can be found in the published state on the `quickStartLevel` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"quickStartLevel": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"quickStartLevel": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `254`.

### HigherOutputInNonNeutral (enum)
Increase level in non-neutral mode.
Value can be found in the published state on the `higherOutputInNonNeutral` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"higherOutputInNonNeutral": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"higherOutputInNonNeutral": NEW_VALUE}`.
The possible values are: `Disabled (default)`, `Enabled`.

### LedBarScaling (enum)
Method used for scaling..
Value can be found in the published state on the `ledBarScaling` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ledBarScaling": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ledBarScaling": NEW_VALUE}`.
The possible values are: `Gen3 method (VZM-style)`, `Gen2 method (LZW-style)`.

### RelayClick (enum)
In neutral on/off setups, the default is to have a clicking sound to notify you that the relay is open or closed. You may disable this sound by creating a, “simulated” on/off where the switch only will turn onto 100 or off to 0..
Value can be found in the published state on the `relayClick` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"relayClick": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"relayClick": NEW_VALUE}`.
The possible values are: `Disabled (Click Sound On)`, `Enabled (Click Sound Off)`.

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
The possible values are: `down_single`, `up_single`, `config_single`, `down_release`, `up_release`, `config_release`, `down_held`, `up_held`, `config_held`, `down_double`, `up_double`, `config_double`, `down_triple`, `up_triple`, `config_triple`, `down_quadruple`, `up_quadruple`, `config_quadruple`, `down_quintuple`, `up_quintuple`, `config_quintuple`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

