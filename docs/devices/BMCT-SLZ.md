---
title: "Bosch BMCT-SLZ control via MQTT"
description: "Integrate your Bosch BMCT-SLZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-04-27T17:34:39
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BMCT-SLZ

|     |     |
|-----|-----|
| Model | BMCT-SLZ  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Light/shutter control unit II |
| Exposes | device_mode, power, energy, reset_energy_reading |
| Picture | ![Bosch BMCT-SLZ](https://www.zigbee2mqtt.io/images/devices/BMCT-SLZ.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
This device needs to be paired using the installation code, which can be obtained by scanning the QR-code on the device with your smartphone (95 digits, alphanumerical). The device will activate pairing mode for 3 minutes after power on or factory reset. To re-activate pairing mode, press any button while the device is not yet paired. In zigbee2mqtt, navigate to  "Settings" --> "Tools" and click on "Add install code". Paste the code you got from the QR-code and confirm by clicking "OK" which will get zigbee2mqtt into pairing mode automatically. Wait for your device to be joined.

#### Failed pairing after device removal
When the device re-joins the network after being removed, pairing may fail. In this case, the device will be listed in zigbee2mqtt, but discovery fails, and an error message occurs. To fix this issue, just add the installation code again. The device should be correctly rediscovered automatically.

### Configuration
The device can operate either as a two-channel light switch or as roller shutter/window blind. After pairing, the device mode is initially set to 'disabled' and will not accept any switching or open/close commands. The device mode must be set to 'light' or 'shutter' via the frontend or by publishing `{"device_mode": "shutter"}` or `{"device_mode": "light"}` to `zigbee2mqtt/FRIENDLY_NAME/set`.

### Factory reset
To reset the device to factory settings, press and hold the device's system button next to the LED until the device's LED starts flashing yellow. Release the system button and press and hold it again until the LED is lighting up green. The device will then restart and look for a Zigbee network to join. In case something went wrong, e.g. if the second button press was too short, the device's LED will flash red.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Device mode (enum)
Device mode.
Value can be found in the published state on the `device_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"device_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"device_mode": NEW_VALUE}`.
The possible values are: `light`, `shutter`, `disabled`.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Reset energy reading (enum)
Triggers the reset of the energy reading to 0 kWh..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reset_energy_reading": NEW_VALUE}`.
The possible values are: `reset`.

