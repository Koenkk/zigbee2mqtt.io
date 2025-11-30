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
| Exposes | climate (local_temperature, local_temperature_calibration, occupied_heating_setpoint, system_mode, running_state, pi_heating_demand), setpoint_change_source, operating_mode, window_detection, boost_heating, remote_temperature, child_lock, display_brightness, display_switch_on_duration, display_orientation, displayed_temperature, valve_adapt_status, automatic_valve_adapt, valve_adapt_process, error_state, battery, battery_low |
| Picture | ![Bosch BTH-RA](https://www.zigbee2mqtt.io/images/devices/BTH-RA.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To pair this device you have to install the device via its installation code. Since this TRV comes in two different flavors (Zigbee only vs. Zigbee and Matter), the pairing process slightly differs between the two.

#### Pairing Zigbee Only TRV (Non-Matter variant)
The installation code can be obtained by scanning the QR-code on the inside of the battery cover with your smartphone. Then put the device into pairing mode, by reseating a battery. The device is in pairing mode, when the display shows ">o<". Don't press the button on the valve, before pairing is completed. Now proceed to section "Zigbee2MQTT Install Code" below.

#### Pairing Zigbee and Matter TRV (`Smart radiator thermostat II [+M]`)
In case you are trying to pair the variant with Matter-support, the QR code is for Matter only. You can construct Install code from the IEEE Address and Install code (it is next to QR code): Bosch prefix (40 characters), IEEE Address (16), DLK, Install code (36). Example of Install code: `RB01SG0D83101826480080000000000000000000XXXXXXXXXXXXXXXXDLKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`
The device also needs to be in Zigbee-pairing mode. After resetting it, it will indicate its pairing mode by LED-flash:
- Blue flashing: Matter pairing Mode
- Orange flashing: Zigbee pairing Mode
To leave Matter pairing Mode and enter Zigbee pairing mode, hold the main button for 3 seconds after Factory reset. The display should confirm with a "Z" that you switched to Zigbee paring Mode. Now proceed to section "Zigbee2MQTT Install Code" below.

### Enter Install Code in Zigbee2MQTT
In zigbee2mqtt navigate to  "Settings" --> "Tools" and click on "Add install code". Paste the Install Code and confirm by clicking "OK" which will get zigbee2mqtt into pairing mode automatically. Wait for your device to be joined. The valve should still show ">o<" on its display. Now you can press the button on the valve to initiate valve adaption.

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
This climate device supports the following features: `local_temperature`, `local_temperature_calibration`, `occupied_heating_setpoint`, `system_mode`, `running_state`, `pi_heating_demand`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `pi_heating_demand`: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pi_heating_demand": VALUE}` where `VALUE` is the % between `0` and `100`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pi_heating_demand": ""}`.
- `local_temperature`: Temperature used by the heating algorithm. This is the temperature measured on the device (by default) or the remote temperature (if set within the last 30 min). (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.The minimal value is `-5` and the maximum value is `5` with a step size of `0.1`.

### Setpoint change source (enum)
Source of the current setpoint temperature.
Value can be found in the published state on the `setpoint_change_source` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"setpoint_change_source": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Operating mode (enum)
Bosch-specific operating mode.
Value can be found in the published state on the `operating_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operating_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operating_mode": NEW_VALUE}`.
The possible values are: `schedule`, `manual`, `pause`.

### Window detection (binary)
Activates the window open mode, where the thermostat disables any heating/cooling to prevent unnecessary energy consumption. Please keep in mind that the device itself does not detect any open windows!.
Value can be found in the published state on the `window_detection` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"window_detection": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": NEW_VALUE}`.
If value equals `ON` window detection is ON, if `OFF` OFF.

### Activate boost heating (binary)
Activate boost heating (opens TRV for 5 minutes).
Value can be found in the published state on the `boost_heating` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"boost_heating": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_heating": NEW_VALUE}`.
If value equals `ON` activate boost heating is ON, if `OFF` OFF.

### Remote temperature (numeric)
Input for remote temperature sensor. Required at least every 30 minutes to prevent fallback to the internal sensor!.
Value can be found in the published state on the `remote_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"remote_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"remote_temperature": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `35`.
The unit of this value is `°C`.

### Child lock (binary)
Enables/disables physical input on the thermostat.
Value can be found in the published state on the `child_lock` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"child_lock": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Display brightness (numeric)
Sets brightness of the display.
Value can be found in the published state on the `display_brightness` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"display_brightness": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_brightness": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Display switch-on duration (numeric)
Sets the time before the display is automatically switched off.
Value can be found in the published state on the `display_switch_on_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"display_switch_on_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_switch_on_duration": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.
The unit of this value is `s`.

### Display orientation (enum)
You can rotate the display content by 180° here. This is recommended if your thermostat is fitted vertically, for instance..
Value can be found in the published state on the `display_orientation` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"display_orientation": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_orientation": NEW_VALUE}`.
The possible values are: `standard_arrangement`, `rotated_by_180_degrees`.

### Displayed temperature (enum)
Select which temperature should be displayed on your radiator thermostat display.
Value can be found in the published state on the `displayed_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"displayed_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"displayed_temperature": NEW_VALUE}`.
The possible values are: `set_temperature`, `measured_temperature`.

### Valve adaptation status (enum)
Specifies the current status of the valve adaptation.
Value can be found in the published state on the `valve_adapt_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"valve_adapt_status": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `none`, `ready_to_calibrate`, `calibration_in_progress`, `error`, `success`.

### Automatic valve adaptation requested (binary)
Specifies if an automatic valve adaptation is being requested by the thermostat (for example after a successful firmware upgrade). If this is the case, the valve adaptation will be automatically started as soon as the adaptation status is 'ready_to_calibrate' or 'error'..
Value can be found in the published state on the `automatic_valve_adapt` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"automatic_valve_adapt": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` automatic valve adaptation requested is ON, if `false` OFF.

### Trigger adaptation process (enum)
Trigger the valve adaptation process. Only possible when the adaptation status is 'ready_to_calibrate' or 'error'..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_adapt_process": NEW_VALUE}`.
The possible values are: `adapt`.

### Error state (text)
Indicates whether the device encounters any errors or not.
Value can be found in the published state on the `error_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"error_state": ""}`.
It's not possible to write (`/set`) this value.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Battery low (binary)
Empty battery indicator.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

