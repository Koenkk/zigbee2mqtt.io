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
| Exposes | climate (local_temperature, occupied_heating_setpoint, local_temperature_calibration, system_mode, pi_heating_demand), boost, window_open, display_orientation, display_ontime, display_brightness, lock (state), battery, linkquality |
| Picture | ![Bosch BTH-RA](https://www.zigbee2mqtt.io/images/devices/BTH-RA.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To pair this device you have to install the device via its installation code. The installation code can be obtained by scanning the QR-code on the inside of the battery cover with your smartphone. Then get the device into pairing mode. In zigbee2mqtt navigate to  "Settings" --> "Tools" and click on "Add install code". Paste the code you got from the QR-code and confirm by clicking "OK" which will get zigbee2mqtt into pairing mode automatically. Wait for your device to be joined.


### Factory resetting
To factory reset the device remove one of the batteries. While pressing and holding the device's main button on the front, insert the battery back. As soon as the device's LED is starting to blink orange while showing "RES", release the main button and press and hold it again until the device's LED is lighting up green. The device will then restart into the calibration process and look for a Zigbee network to join. In case something went wrong, the device's LED will start to blink red. The process has then to be start all over again.
<!-- Notes END: Do not edit below this line -->

## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Climate 
This climate device supports the following features: `local_temperature`, `occupied_heating_setpoint`, `local_temperature_calibration`, `system_mode`, `pi_heating_demand`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `pi_heating_demand`: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pi_heating_demand": VALUE}` where `VALUE` is the % between `0` and `100`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pi_heating_demand": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`, `auto`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `local_temperature_calibration`: Offset to be used in the local_temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-5` and the maximum value is `5` with a step size of `0.1`.

### Boost (binary)
Activate Boost heating.
Value can be found in the published state on the `boost` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"boost": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost": NEW_VALUE}`.
If value equals `ON` boost is ON, if `OFF` OFF.

### Window_open (binary)
Window open.
Value can be found in the published state on the `window_open` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"window_open": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_open": NEW_VALUE}`.
If value equals `ON` window_open is ON, if `OFF` OFF.

### Display_orientation (enum)
Display orientation.
Value can be found in the published state on the `display_orientation` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"display_orientation": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_orientation": NEW_VALUE}`.
The possible values are: `normal`, `flipped`.

### Display_ontime (numeric)
Specifies the diplay On-time.
Value can be found in the published state on the `display_ontime` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"display_ontime": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_ontime": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.

### Display_brightness (numeric)
Specifies the brightness value of the display.
Value can be found in the published state on the `display_brightness` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"display_brightness": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_brightness": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.

### Lock 
The current state of this lock is in the published state under the `child_lock` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": "LOCK"}` or `{"child_lock": "UNLOCK"}`.
To read the current state of this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"child_lock": ""}`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported..
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

