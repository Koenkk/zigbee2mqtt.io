---
title: "Bosch BTH-RA control via MQTT"
description: "Integrate your Bosch BTH-RA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-12-01T15:07:19
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BTH-RA

|     |     |
|-----|-----|
| Model | BTH-RA  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Radiator thermostat II |
| Exposes | climate (local_temperature, local_temperature_calibration, occupied_heating_setpoint, system_mode, pi_heating_demand, running_state), battery, operating_mode, window_detection, boost_heating, remote_temperature, setpoint_change_source, child_lock, display_ontime, display_brightness, display_orientation, displayed_temperature, valve_adapt_status, valve_adapt_process, linkquality |
| Picture | ![Bosch BTH-RA](https://www.zigbee2mqtt.io/images/devices/BTH-RA.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To pair this device you have to install the device via its installation code. The installation code can be obtained by scanning the QR-code on the inside of the battery cover with your smartphone. Then get the device into pairing mode. In zigbee2mqtt navigate to  "Settings" --> "Tools" and click on "Add install code". Paste the code you got from the QR-code and confirm by clicking "OK" which will get zigbee2mqtt into pairing mode automatically. Wait for your device to be joined.


### Factory resetting
To factory reset the device remove one of the batteries. While pressing and holding the device's main button on the front, insert the battery back. As soon as the device's LED is starting to blink orange while showing "RES", release the main button and press and hold it again until the device's LED is lighting up green. The device will then restart into the calibration process and look for a Zigbee network to join. In case something went wrong, the device's LED will start to blink red. The process has then to be start all over again.

### Using the manufacturer specific operation mode
The `system_mode` exposed by the device according to zigbee specification is always 'heat'. To set or read the actual operation mode of the device, use the manufacturer-specific feature 'operating mode' (see below)
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Climate 
This climate device supports the following features: `local_temperature`, `local_temperature_calibration`, `occupied_heating_setpoint`, `system_mode`, `pi_heating_demand`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `pi_heating_demand`: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pi_heating_demand": VALUE}` where `VALUE` is the % between `0` and `100`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pi_heating_demand": ""}`.
- `local_temperature`: Temperature used by the heating algorithm. This is the temperature measured on the device (by default) or the remote temperature (if set within the last 30 min). (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.The minimal value is `-5` and the maximum value is `5` with a step size of `0.1`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Operating mode (enum)
Bosch-specific operating mode (overrides system mode).
Value can be found in the published state on the `operating_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operating_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operating_mode": NEW_VALUE}`.
The possible values are: `schedule`, `manual`, `pause`.

### Window detection (binary)
Enable/disable window open (Lo.) mode.
Value can be found in the published state on the `window_detection` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"window_detection": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": NEW_VALUE}`.
If value equals `ON` window detection is ON, if `OFF` OFF.

### Boost heating (binary)
Activate boost heating (5 min. on TRV).
Value can be found in the published state on the `boost_heating` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"boost_heating": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_heating": NEW_VALUE}`.
If value equals `ON` boost heating is ON, if `OFF` OFF.

### Remote temperature (numeric)
Input for remote temperature sensor. Required at least every 30 min. to prevent fallback to internal sensor!.
Value can be found in the published state on the `remote_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"remote_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"remote_temperature": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint change source (enum)
Source of the current setpoint temperature.
Value can be found in the published state on the `setpoint_change_source` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"setpoint_change_source": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"child_lock": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Display ontime (numeric)
Sets the display on-time.
Value can be found in the published state on the `display_ontime` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"display_ontime": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_ontime": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.
The unit of this value is `s`.

### Display brightness (numeric)
Sets brightness of the display.
Value can be found in the published state on the `display_brightness` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"display_brightness": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_brightness": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.

### Display orientation (enum)
Sets orientation of the display.
Value can be found in the published state on the `display_orientation` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"display_orientation": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_orientation": NEW_VALUE}`.
The possible values are: `normal`, `flipped`.

### Displayed temperature (enum)
Temperature displayed on the TRV.
Value can be found in the published state on the `displayed_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"displayed_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"displayed_temperature": NEW_VALUE}`.
The possible values are: `target`, `measured`.

### Valve adapt status (enum)
Specifies the current status of the valve adaptation.
Value can be found in the published state on the `valve_adapt_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"valve_adapt_status": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `none`, `ready_to_calibrate`, `calibration_in_progress`, `error`, `success`.

### Trigger adaptation process (binary)
Trigger the valve adaptation process. Only possible when adaptation status is "ready_to_calibrate" or "error"..
Value can be found in the published state on the `valve_adapt_process` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"valve_adapt_process": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_adapt_process": NEW_VALUE}`.
If value equals `true` trigger adaptation process is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

