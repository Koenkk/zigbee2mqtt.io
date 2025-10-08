---
title: "Bosch BSIR-EZ control via MQTT"
description: "Integrate your Bosch BSIR-EZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-30T19:41:12
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BSIR-EZ

|     |     |
|-----|-----|
| Model | BSIR-EZ  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Outdoor siren |
| Exposes | device_state, trigger_alarm, stop_alarm, external_trigger, tamper, power_outage, battery, battery_low, alarm_mode, siren_volume, siren_duration, light_duration, siren_delay, light_delay, primary_power_source, current_power_source, solar_panel_voltage |
| Picture | ![Bosch BSIR-EZ](https://www.zigbee2mqtt.io/images/devices/BSIR-EZ.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
If new, the device will be in pairing mode when powered on, but you will need to add the install code from the back of the unit in order to pair the siren. If you do not complete this step the interview will fail and the unit will be shown as unsupported. On the back of the siren is a QR code and a 36 digit code that is called "Install code" - do NOT use this 36 digit code. Instead, scan the QR code with your phone and this will return a 91 or 95 character code. Use this code by going to Z2M GUI, Settings, Tools, "Add Install Code". Z2M will automatically enable pairing and start listening for new devices.
IMPORTANT: [Check DIP switchers](https://github.com/Koenkk/zigbee2mqtt/issues/28088) factory settings and set switch number 8 to ON - "Smart" mode (Operation Bosch Smart Home controller).

If the device is not in pairing mode, you must
- turn the device off
- press the Reset button and keep it pressed, while you turn the device back on
- as soon as the status LED starts blinking orange, release and long-press the Reset button again until the LED turns green
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Device state (enum)
Current state of the siren and light. Please keep in mind that these activate after the specified delay time (except when using an external alarm trigger)..
Value can be found in the published state on the `device_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"device_state": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `siren_active_from_external_trigger`, `light_active_from_external_trigger`, `siren_and_light_active_from_external_trigger`, `siren_active`, `light_active`, `siren_and_light_active`, `idle`.

### Trigger alarm (enum)
Trigger an alarm on the device.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"trigger_alarm": NEW_VALUE}`.
The possible values are: `trigger`.

### Stop alarm (enum)
Stop an active alarm on the device. Please keep in mind that the alarm stops automatically after the configured duration for the light and siren is expired..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"stop_alarm": NEW_VALUE}`.
The possible values are: `stop`.

### External trigger state (binary)
Indicates whether an external alarm via the 'TRIGGER_IN' connectors on the back of the device is being received. Please keep in mind that the device automatically activates/deactivates an alarm in that case..
Value can be found in the published state on the `external_trigger` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` external trigger state is ON, if `false` OFF.

### Tamper state (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper state is ON, if `false` OFF.

### Power outage state (binary)
Indicates the configured primary power source experiences a power outage. This only works when using ac or dc power..
Value can be found in the published state on the `power_outage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `outage_detected` power outage state is ON, if `power_ok` OFF.

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

### Alarm mode (enum)
Select if you only want a visual warning, an acoustic warning or both.
Value can be found in the published state on the `alarm_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_mode": NEW_VALUE}`.
The possible values are: `only_light`, `only_siren`, `siren_and_light`.

### Siren volume (enum)
Volume of the siren.
Value can be found in the published state on the `siren_volume` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"siren_volume": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"siren_volume": NEW_VALUE}`.
The possible values are: `reduced`, `medium`, `loud`.

### Siren duration (numeric)
Duration of the alarm siren.
Value can be found in the published state on the `siren_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"siren_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"siren_duration": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `15`.
The unit of this value is `min`.

### Light duration (numeric)
Duration of the alarm light.
Value can be found in the published state on the `light_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_duration": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `15`.
The unit of this value is `min`.

### Siren delay (numeric)
Delay of the siren activation after an alarm is being triggered.
Value can be found in the published state on the `siren_delay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"siren_delay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"siren_delay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `180`.
The unit of this value is `sec`.

### Light delay (numeric)
Delay of the light activation after an alarm is being triggered.
Value can be found in the published state on the `light_delay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_delay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_delay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `180`.
The unit of this value is `sec`.

### Primary power source (enum)
Select which power source you want to use. Note: The battery is always being used as backup source..
Value can be found in the published state on the `primary_power_source` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"primary_power_source": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"primary_power_source": NEW_VALUE}`.
The possible values are: `solar_panel`, `ac_power_supply`, `dc_power_supply`.

### Current power source (enum)
Currently used power source for device operation.
Value can be found in the published state on the `current_power_source` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_power_source": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `battery`, `solar_panel`, `ac_power`, `dc_power`.

### Solar panel voltage (numeric)
Current voltage level received from the integrated solar panel.
Value can be found in the published state on the `solar_panel_voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `volt`.

