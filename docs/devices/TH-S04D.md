---
title: "Aqara TH-S04D control via MQTT"
description: "Integrate your Aqara TH-S04D via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-05-01T17:59:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara TH-S04D

|     |     |
|-----|-----|
| Model | TH-S04D  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Climate Sensor W100 |
| Exposes | thermostat_mode, climate (system_mode, fan_mode, occupied_heating_setpoint, local_temperature), PMTSD_from_W100_Data, battery, temperature, humidity, sensor, external_temperature, external_humidity, auto_hide_middle_line, high_temperature, low_temperature, high_humidity, low_humidity, sampling, period, temp_report_mode, temp_period, temp_threshold, humi_report_mode, humi_period, humi_threshold, identify, action |
| Picture | ![Aqara TH-S04D](https://www.zigbee2mqtt.io/images/devices/TH-S04D.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
The device will ship with Thread firmware and in order to pair you will first need to swap it to a Zigbee Firmware.
To do this you must download the Aqara Home app and sign up.   The device should appear in the app (you may need to ignore attempts to set it up via Thread).
The device page will state that the current protocol is Thread but ignore the button at the bottom and instead click the link to switch to Zigbee Protocol.

Once updated the device should be in pairing mode and can be added.   If it fails to add hold the reset button on the back until the signal strength bar starts flashing and the device will re-enter pairing mode.

### Firmware upgrade
Some firmware versions are available as OTA updates in Zigbee2MQTT. The latest builds are only available through the Aqara Home app: reset the device to pairing mode, add a device in the Aqara Home app, select the W100, and select Matter to flash it to Matter.
Then do the process again to switch back to the Zigbee firmware. It will flash the latest build.

### Thermostat mode
The W100 can act as the remote control of a thermostat managed by your home automation system: it does not control any heater by itself.

- `thermostat_mode: ON` shows the thermostat line on the display, the buttons change the mode, setpoint and fan speed, and the changes are published as `system_mode`, `occupied_heating_setpoint` and `fan_mode`.
- `thermostat_mode: OFF` hides it, and the buttons send `action` events.
- Pairing or reconfiguring the device turns the thermostat mode OFF.

Set `system_mode`, `occupied_heating_setpoint` and `fan_mode` to update the display when your thermostat changes. The `system_mode` values are `off`, `heat`, `cool` and `auto`, and the `fan_mode` values are `auto`, `low`, `medium` and `high`.

### Thermostat protocol
Zigbee2MQTT supports two protocols, and detects the right one when the device is paired or rejoins:

- **Firmware 0.0.0_1641 and older**: the setpoint is in whole degrees.
- **Newer firmware**: the device keeps one setpoint per mode, and the setpoint step can be set with the `setpoint_step` option (0.1 to 1 °C, default 0.5 °C). The `min_target_temp` / `max_target_temp` options are also sent to the device and limit the setpoint on the display.

The `thermostat_protocol` option (`auto`, `legacy`, `ha`) forces a protocol, it should not be needed.

### Allowed modes and fan modes
The `system_modes` and `fan_modes` options restrict the modes and fan modes offered by the thermostat, e.g. `off` and `heat` with radiators only. Leave them empty to allow everything. Use `none` in `fan_modes` when there is no fan: the fan mode is then removed.

With firmware 0.0.0_1643 and newer, the W100 only offers the allowed modes and fan modes on its display. With older firmware it still offers all of them: a mode or fan mode that is not allowed is shown briefly, then reverted to the previous one.

### External sensor
Set `sensor` to `external` to show the values of another sensor, sent with `external_temperature` and `external_humidity`.
The W100 is a sleepy end device: a value sent while it sleeps is delivered when it wakes up (only the latest value of each).

### Battery
Some W100 never report their battery by themselves. Zigbee2MQTT reads it when it was not received for 4 hours.

### Temperature and humidity reporting
The W100 reports temperature and humidity according to its own settings: `temp_report_mode`, `temp_period`, `temp_threshold` and the same for humidity. The minimum thresholds are 0.2 °C and 2 %. The reporting configured in the Reporting tab only filters these reports: keep the default configuration (min 1 s, max 3600 s, change 1). With `temp_report_mode: no`, no temperature is reported at all.

If the device rejoins the network or restarts, Zigbee2MQTT sends its bindings and reporting configuration again; without them the W100 stops reporting.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `min_target_temp`: Minimum target temperature for the thermostat (default: 5°C). The value must be a number with a minimum value of `-20` and with a maximum value of `60`

* `max_target_temp`: Maximum target temperature for the thermostat (default: 30°C). The value must be a number with a minimum value of `-20` and with a maximum value of `60`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a maximum value of `30`


## Exposes

### Thermostat mode (binary)
ON: Enables thermostat mode, buttons send encrypted payloads, and the middle line is displayed. OFF: Disables thermostat mode, buttons send actions, and the middle line is hidden..
Value can be found in the published state on the `thermostat_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"thermostat_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"thermostat_mode": "VALUE"}`.
If value equals `ON` thermostat mode is ON, if `OFF` OFF.

### Climate 
This climate device supports the following features: `system_mode`, `fan_mode`, `occupied_heating_setpoint`, `local_temperature`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": "VALUE"}` where `VALUE` is one of: `off`, `heat`, `cool`, `auto`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.

### PMTSD from W100 Data (text)
Latest PMTSD values sent by the W100 when manually changed, formatted as "YYYY-MM-DD HH:mm:ss_Px_Mx_Tx_Sx_Dx".
Value can be found in the published state on the `PMTSD_from_W100_Data` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Sensor (enum)
Select mode to display sensor: internal or both with external.
Value can be found in the published state on the `sensor` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensor": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor": "VALUE"}`.
The possible values are: `internal`, `external`.

### External temperature (numeric)
Value for external temperature sensor.
Value can be found in the published state on the `external_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"external_temperature": VALUE}`.
The minimal value is `-100` and the maximum value is `100`.
The unit of this value is `°C`.

### External humidity (numeric)
Value for external humidity sensor.
Value can be found in the published state on the `external_humidity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"external_humidity": VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Auto hide middle line (binary)
Applies only when thermostat mode is enabled. True: Hides the middle line after 30 seconds of inactivity. False: Always displays the middle line..
Value can be found in the published state on the `auto_hide_middle_line` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"auto_hide_middle_line": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_hide_middle_line": VALUE}`.
If value equals `true` auto hide middle line is ON, if `false` OFF.

### High temperature (numeric)
High temperature alert.
Value can be found in the published state on the `high_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"high_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_temperature": VALUE}`.
The minimal value is `26` and the maximum value is `60`.
The unit of this value is `°C`.

### Low temperature (numeric)
Low temperature alert.
Value can be found in the published state on the `low_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"low_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_temperature": VALUE}`.
The minimal value is `-20` and the maximum value is `20`.
The unit of this value is `°C`.

### High humidity (numeric)
High humidity alert.
Value can be found in the published state on the `high_humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"high_humidity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_humidity": VALUE}`.
The minimal value is `65` and the maximum value is `100`.
The unit of this value is `%`.

### Low humidity (numeric)
Low humidity alert.
Value can be found in the published state on the `low_humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"low_humidity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_humidity": VALUE}`.
The minimal value is `0` and the maximum value is `30`.
The unit of this value is `%`.

### Sampling (enum)
Temperature and Humidity sampling settings.
Value can be found in the published state on the `sampling` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sampling": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sampling": "VALUE"}`.
The possible values are: `low`, `standard`, `high`, `custom`.

### Period (numeric)
Sampling period.
Value can be found in the published state on the `period` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"period": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"period": VALUE}`.
The minimal value is `0.5` and the maximum value is `600`.
The unit of this value is `sec`.

### Temp report mode (enum)
Temperature reporting mode.
Value can be found in the published state on the `temp_report_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temp_report_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temp_report_mode": "VALUE"}`.
The possible values are: `no`, `threshold`, `period`, `threshold_period`.

### Temp period (numeric)
Temperature reporting period.
Value can be found in the published state on the `temp_period` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temp_period": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temp_period": VALUE}`.
The minimal value is `1` and the maximum value is `600`.
The unit of this value is `sec`.

### Temp threshold (numeric)
Temperature reporting threshold.
Value can be found in the published state on the `temp_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temp_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temp_threshold": VALUE}`.
The minimal value is `0.2` and the maximum value is `3`.
The unit of this value is `°C`.

### Humi report mode (enum)
Humidity reporting mode.
Value can be found in the published state on the `humi_report_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humi_report_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humi_report_mode": "VALUE"}`.
The possible values are: `no`, `threshold`, `period`, `threshold_period`.

### Humi period (numeric)
Humidity reporting period.
Value can be found in the published state on the `humi_period` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humi_period": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humi_period": VALUE}`.
The minimal value is `1` and the maximum value is `600`.
The unit of this value is `sec`.

### Humi threshold (numeric)
Humidity reporting threshold.
Value can be found in the published state on the `humi_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humi_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humi_threshold": VALUE}`.
The minimal value is `2` and the maximum value is `10`.
The unit of this value is `%`.

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": "VALUE"}`.
The possible values are: `identify`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `W100_PMTSD_request`, `hold_plus`, `hold_center`, `hold_minus`, `single_plus`, `single_center`, `single_minus`, `double_plus`, `double_center`, `double_minus`, `release_plus`, `release_center`, `release_minus`.

