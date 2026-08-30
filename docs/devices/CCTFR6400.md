---
title: "Schneider Electric CCTFR6400 control via MQTT"
description: "Integrate your Schneider Electric CCTFR6400 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-05-25T17:59:46Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Schneider Electric CCTFR6400

|     |     |
|-----|-----|
| Model | CCTFR6400  |
| Vendor  | [Schneider Electric](/supported-devices/#v=Schneider%20Electric)  |
| Description | Temperature/Humidity measurement with thermostat interface |
| Exposes | keypad_lockout, humidity, battery, voltage, climate (occupied_heating_setpoint, local_temperature, pi_heating_demand), action |
| Picture | ![Schneider Electric CCTFR6400](https://www.zigbee2mqtt.io/images/devices/CCTFR6400.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
Pair the device to Zigbee2MQTT by resetting it:
1. Remove the batteries and re-insert them.
2. When the “Wiser” startup screen appears, press the + and - buttons at the same time for 20 seconds until the unit restarts.

### Device info
This device is a
- thermostat UI for displaying/adjusting target set point.
- temperature sensor
- hygrometry sensor

It can display the heating status of associated climate by setting `pi_heating_demand`

Historically this device was reported to require a Z-Stack controller and to not work with zigate and ConBee II. It has since been confirmed working on an EmberZNet 7.4.4 (EZSP 13) coordinator.

### Setpoint and boost behaviour (hub-less operation)

The thermostat adjusts its setpoint through two mechanisms:

- **+/- buttons**: change the setpoint in 0.5 °C steps (the screen must be
  awake; the wake press itself does not change the value).
- **Boost (center button)**: starts a temporary boost. The boost target is the
  current *room temperature* + 2 °C (adjustable with +/- while the clock icon
  is shown) and the duration is selected by pressing the center button
  repeatedly: 30 min, 1 h, 2 h, 3 h; a fifth press cancels. About 8 seconds
  after the last press the device commits the boost. The clock icon is only a
  selection indicator and disappears shortly after the commit.

The device itself keeps no boost state: all boost timing is handled by this
integration (option `boost_auto_honor`, enabled by default). When a boost
commits, the integration saves the current setpoint, applies the boost
temperature, and restores the saved setpoint when the boost duration ends or
when the boost is cancelled on the device. The boost timer survives a
Zigbee2MQTT restart; a boost that expired during downtime is restored at
startup.

Any later setpoint change — whether written through software
(`occupied_heating_setpoint`) or made with the +/- buttons after the boost
clock has disappeared — cancels the pending restore and becomes the new
setpoint. In short: the last written setpoint always wins; a boost restore
never overwrites newer intent.

All events are always published as `action`
(`button_press_plus_down`/`button_press_minus_down`/`button_press_center_down`,
`screen_wake`/`screen_sleep`, `boost_set`/`boost_cancel` with
`boost_duration` and `boost_temperature`), so external automation can
implement its own boost policy with `boost_auto_honor` disabled.

Further notes:

- The device is a sleepy end device that only reads its display data
  (setpoint, system mode, heating demand) from the coordinator while its
  screen is awake; large setpoint changes (>3 °C) may require an extra wake
  cycle before they render.
- The flame icon follows `pi_heating_demand` (set it from your automation to
  reflect actual heating activity).
- `keypad_lockout` (`lock1`) disables the local UI; button events keep being
  published while locked.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Keypad lockout (enum)
Enables/disables physical input on the device.
Value can be found in the published state on the `keypad_lockout` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"keypad_lockout": NEW_VALUE}`.
The possible values are: `unlock`, `lock1`, `lock2`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `pi_heating_demand`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `4` and `30`. Reading (`/get`) this attribute is not possible.
- `pi_heating_demand`: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pi_heating_demand": VALUE}` where `VALUE` is the % between `0` and `100`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `screen_sleep`, `screen_wake`, `button_press_plus_down`, `button_press_center_down`, `button_press_minus_down`.

