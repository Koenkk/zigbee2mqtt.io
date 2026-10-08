---
title: "Heiman HS1SA-E-PLUS control via MQTT"
description: "Integrate your Heiman HS1SA-E-PLUS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-03-31T19:04:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Heiman HS1SA-E-PLUS

|     |     |
|-----|-----|
| Model | HS1SA-E-PLUS  |
| Vendor  | [Heiman](/supported-devices/#v=Heiman)  |
| Description | Smart smoke alarm |
| Exposes | battery, identify, temperature, smoke, battery_low, test, fault_state, muted, trigger_selftest, temporary_mute, heartbeat_indicator, interconnectable, smoke_level, smoke_unit, chamber_contamination, link_available, siren_for_automation_only, temperature_offset, reported_packages, rejoin_count, reboot_count |
| Picture | ![Heiman HS1SA-E-PLUS](https://www.zigbee2mqtt.io/images/devices/HS1SA-E-PLUS.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Exposed values and controls

`muted` is a **read-only silencing status**, not a switch for disabling smoke detection.
`normal` means no mute flags are set. Otherwise, the converter reports one or more of
`muted` (general), `alarm_muted`, `fault_muted`, `low_battery_muted`, `endoflife_muted`,
and `warning_muted`, separated by ` | `. These distinguish which sounds are silenced;
they do not mean the detector is permanently disabled. Not every firmware necessarily
reports every flag.

`temporary_mute` is the separate remote hush control. Heiman confirms that, on
HS1SA-E-PLUS firmware 2.2.0, it only works while a smoke alarm is active: requesting
it while idle does not pre-emptively silence a future alarm. Use it after confirming
that an alarm is false. The converter writes `true` as 1 and `false` as 0 to the
mute-control attribute, but an explicit unmute action for `false` is not confirmed
for this firmware; use `muted` to check the actual silencing status. The physical
test/mute button also provides hush, but identical remote/button timing, the hush
duration, and when persistent smoke makes the alarm sound again are not confirmed
for this model.

| Entity | Meaning and use |
|--------|-----------------|
| `trigger_selftest`, `test` | Request the built-in alarm self-check; `test` reports whether a test is running. This can exercise an interconnection automation as well. Test beeps have been observed on PLUS samples, but the complete internal checks are undocumented; a successful self-test alone does not establish smoke-sensing performance. |
| `heartbeat_indicator` | Controls the periodic heartbeat LED indication during normal operation, useful for avoiding flashes in a bedroom. It is not a smoke-detection or sound control. Whether this setting also changes alarm/test LED indications is not confirmed. |
| `interconnectable`, `link_available` | Read-only triggers for propagating this detector's event through an automation, not a capability or configuration switch. Both represent the same attribute: `interconnectable` is false for zero and true for a nonzero value; `link_available` identifies the event type. `inactive` means no linkage event; `smoke_active`, `co_active`, `gas_active`, and `heat_active` identify smoke, CO, gas, and heat events respectively in the shared protocol. These enum choices do not imply that this smoke-only model detects all four hazards. |
| `siren_for_automation_only` | Lets an automation use the detector as a remotely triggered sounder: `smoke_siren` and `co_siren` select the built-in smoke and CO sound profiles; `stop` stops the automation siren. The CO profile does not add CO detection. This control is for sounding other alarms in response to an originating detector's linkage event. |
| `smoke_level`, `smoke_unit` | Manufacturer-reported optical smoke level. The converter divides the reported level by 100 and exposes its unit separately: `dB/m` means optical attenuation in decibels per metre; `%ft OBS` means percent light obscuration per foot. These describe light loss through smoke, not a percentage of smoke in the air. The exposed 0–20 range is not a documented alarm threshold. No model-specific calibration, threshold, or guarantee of a strictly increasing response is documented; treat the level as diagnostic/trend information and use `smoke` for the detector's alarm decision. |
| `chamber_contamination` | The detector's estimate of contamination in its optical sensing chamber: `normal`, then increasing severity from `light_contamination` through `medium_contamination` to `critical_contamination`. Deposits such as cooking grease and smoke particles can reduce sensitivity and increase false alarms. Useful for maintenance alerts; Heiman has not specified cleaning/replacement actions for each exposed level in the available PLUS documentation. Follow the supplied maintenance instructions. |
| `fault_state` | `normal` means no mapped fault bits are set. The converter can report `fault` (general), `open_circuit_fault`, `short_circuit_fault`, and `pollution_fault` (contamination), joining simultaneous faults with ` \| `. These are fault categories, not identification of a particular failed component; which bits this firmware uses is undocumented. |
| `temperature_offset` | A calibration offset in °C stored on the detector for its own temperature reporting. This is separate from Zigbee2MQTT's `temperature_calibration` option, which adjusts received readings in software. |
| `reported_packages`, `rejoin_count`, `reboot_count` | Device diagnostic counters for reported Zigbee packets, network rejoins, and restarts. The converter describes `reported_packages` as a daily count, but does not define the day's boundary or reset rules. The time span, persistence, and reset rules of the other counters are also undocumented. Watch changes: repeated rejoins can help investigate connectivity, while unexpected restarts can help investigate power/device problems. |

Heiman describes interconnection on this model as **Home Assistant/Zigbee2MQTT
automation**, rather than detectors directly triggering one another over Zigbee.
The linkage triggers activate during self-test and real alarms, and become inactive
when the originating alarm is hushed. An automation can use these transitions to
start and stop the other detectors' `siren_for_automation_only` controls. Receiving
a remote siren command does not itself establish local smoke or CO detection.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a maximum value of `30`


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Battery low (binary)
Indicates whether the battery of the device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Test (binary)
Indicates whether the device is currently performing a test.
Value can be found in the published state on the `test` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` test is ON, if `false` OFF.

### Fault state (text)
Device fault status (normal or fault types)..
Value can be found in the published state on the `fault_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"fault_state": ""}`.
It's not possible to write (`/set`) this value.

### Muted (text)
Device mute status (normal or mute types)..
Value can be found in the published state on the `muted` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"muted": ""}`.
It's not possible to write (`/set`) this value.

### Trigger selftest (enum)
Trigger alarm self-check..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"trigger_selftest": NEW_VALUE}`.
The possible values are: `test`.

### Temporary mute (binary)
Silence the alarm temporarily.
Value can be found in the published state on the `temporary_mute` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temporary_mute": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temporary_mute": NEW_VALUE}`.
If value equals `true` temporary mute is ON, if `false` OFF.

### Heartbeat indicator (binary)
Enable/disable the indicator on product.
Value can be found in the published state on the `heartbeat_indicator` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"heartbeat_indicator": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"heartbeat_indicator": NEW_VALUE}`.
If value equals `true` heartbeat indicator is ON, if `false` OFF.

### Interconnectable (binary)
used for interconnection automation..
Value can be found in the published state on the `interconnectable` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"interconnectable": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` interconnectable is ON, if `false` OFF.

### Smoke level (numeric)
smoke level.
Value can be found in the published state on the `smoke_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"smoke_level": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `20`.

### Smoke unit (enum)
smoke level unit.
Value can be found in the published state on the `smoke_unit` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"smoke_unit": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `dB/m`, `%ft OBS`.

### Chamber contamination (enum)
it indicates that how serious the smoke chamber get contaminated..
Value can be found in the published state on the `chamber_contamination` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"chamber_contamination": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `normal`, `light_contamination`, `medium_contamination`, `critical_contamination`.

### Link available (enum)
used for interconnection automation..
Value can be found in the published state on the `link_available` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"link_available": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `smoke_active`, `co_active`, `gas_active`, `heat_active`.

### Siren for automation only (enum)
siren effect.
Value can be found in the published state on the `siren_for_automation_only` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"siren_for_automation_only": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"siren_for_automation_only": NEW_VALUE}`.
The possible values are: `stop`, `smoke_siren`, `co_siren`.

### Temperature offset (numeric)
used for temperature offset, unit: ℃.
Value can be found in the published state on the `temperature_offset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_offset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_offset": NEW_VALUE}`.
The minimal value is `-15` and the maximum value is `15`.

### Reported packages (numeric)
for diagnostic purpose, how many zigbee packages has the reported in a day..
Value can be found in the published state on the `reported_packages` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"reported_packages": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `60000`.

### Rejoin count (numeric)
for diagnostic purpose, how many times has the product rejoined to zigbee network..
Value can be found in the published state on the `rejoin_count` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"rejoin_count": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `60000`.

### Reboot count (numeric)
for diagnostic purpose, how many times has the product rebooted..
Value can be found in the published state on the `reboot_count` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"reboot_count": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `60000`.

