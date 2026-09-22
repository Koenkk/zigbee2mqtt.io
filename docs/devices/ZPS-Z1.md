---
title: "Zemismart ZPS-Z1 control via MQTT"
description: "Integrate your Zemismart ZPS-Z1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-22T01:52:55.753Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Zemismart ZPS-Z1

|     |     |
|-----|-----|
| Model | ZPS-Z1  |
| Vendor  | [Zemismart](/supported-devices/#v=Zemismart)  |
| Description | 24 GHz mmWave presence sensor |
| Exposes | occupancy, presence_state, illuminance, detection_range, presence_clear_cooldown, sensitivity_preset, auto_calibration, auto_calibration_status, led_indicator, energy_streaming, zone_1_motion_energy, zone_1_presence_energy, zone_2_motion_energy, zone_2_presence_energy, zone_3_motion_energy, zone_3_presence_energy, zone_4_motion_energy, zone_4_presence_energy, zone_5_motion_energy, zone_5_presence_energy, zone_6_motion_energy, zone_6_presence_energy, zone_7_motion_energy, zone_7_presence_energy, zone_8_motion_energy, zone_8_presence_energy, zone_9_motion_energy, zone_9_presence_energy, zone_10_motion_energy, zone_10_presence_energy, zone_1_active, zone_2_active, zone_3_active, zone_4_active, zone_5_active, zone_6_active, zone_7_active, zone_8_active, zone_9_active, zone_10_active, zone_1_motion_threshold, zone_1_presence_threshold, zone_2_motion_threshold, zone_2_presence_threshold, zone_3_motion_threshold, zone_3_presence_threshold, zone_4_motion_threshold, zone_4_presence_threshold, zone_5_motion_threshold, zone_5_presence_threshold, zone_6_motion_threshold, zone_6_presence_threshold, zone_7_motion_threshold, zone_7_presence_threshold, zone_8_motion_threshold, zone_8_presence_threshold, zone_9_motion_threshold, zone_9_presence_threshold, zone_10_motion_threshold, zone_10_presence_threshold |
| Picture | ![Zemismart ZPS-Z1](https://www.zigbee2mqtt.io/images/devices/ZPS-Z1.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Everyday and advanced controls

The default view shows presence, illuminance, sensitivity, absence delay and the LED. Zigbee2MQTT also adds link quality. Enable `show_advanced` in the device-specific settings to expose the raw zone controls, automatic threshold learning and diagnostics.

Changing this option also changes Home Assistant discovery. Keep it enabled if HA automations depend on advanced entities. Existing flat MQTT report and command keys remain available in both views.

### Radar distance setting

The supplier protocol defines `detection_range` as an integer 0–1500 cm with a step of 50. A sample accepted and reported 0→50→0 and was restored. This is a configuration round trip, not proof of detection coverage up to 15 meters. The special meaning of zero is unspecified.

### Energy reporting command

`energy_streaming` accepts ON/OFF; legacy boolean MQTT commands remain accepted. It is a write-only command, not a readable streaming switch. A local session sends 5-second heartbeats and is capped at 5 minutes. An orderly Zigbee2MQTT stop requests explicit OFF after any in-flight ON. If an ON command is not acknowledged, the converter makes a best-effort OFF request because the device may still have received ON.

The supplier document describes a 10-second heartbeat timeout, but the tested sample was still reporting 14.73 seconds after the last heartbeat during a 15-second observation window. Explicit OFF stopped reporting. Do not rely on firmware expiry if the gateway abruptly loses power or becomes unreachable. A command-select value represents the selected command, not an observed streaming state.

### Raw zone and threshold data

DP117 contains ten raw zone values: 0 masked, 1 presence, 2 absence. Physical distance boundaries for each index are not specified. DP102 contains ten motion-energy bytes followed by ten presence-energy bytes, shown as raw 0–255 values.

DP124 contains two groups of ten threshold bytes. Their physical roles are not defined by the supplied document, so UI labels identify group 1 and group 2. Legacy `motion_threshold` and `presence_threshold` property names are retained for compatibility without asserting that semantic order. Writing a threshold does not automatically change the sensitivity preset.

### Known limits

`sensor_close` retains its protocol name; it does not fabricate an absence reading. The last occupancy value remains until a valid presence/absence report. DP105 purpose/cadence and DPs106/107 are not assigned guessed functions. Self-learning duration, full detection coverage, calibrated lux accuracy and long-term battery behavior have not been verified.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `show_advanced`: Show zone tuning, self-learning and diagnostic fields. Disabled by default. This also changes which advanced entities are discovered by Home Assistant; MQTT fields remain available. The value must be `true` or `false`

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Occupancy (binary)
Binary presence detection. Person detected (true) or not detected (false)..
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Presence state (enum)
absence — no one detected. presence — person detected. sensor_close — protocol state 2; its physical meaning is not specified. The last occupancy value is retained..
Value can be found in the published state on the `presence_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `absence`, `presence`, `sensor_close`.

### Illuminance (numeric)
Ambient light level (0–1300 lx)..
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `1300`.
The unit of this value is `lx`.

### Radar distance setting (numeric)
Protocol DP2: 0–1500 cm in steps of 50. The meaning of 0 and actual sensing coverage are not specified. Only the 0-to-50-to-0 setting round trip has been tested on the sample..
Value can be found in the published state on the `detection_range` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"detection_range": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_range": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1500`.
The unit of this value is `cm`.

### Presence clear cooldown (numeric)
Presence clear time before the sensor switches state to "absence". (2–60 s)..
Value can be found in the published state on the `presence_clear_cooldown` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"presence_clear_cooldown": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"presence_clear_cooldown": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `60`.
The unit of this value is `s`.

### Sensitivity preset (enum)
Protocol presets: high=0, medium=1 (named min in the protocol), low=2, custom=3. Detailed detection behavior and its relationship to DP124 thresholds require device verification..
Value can be found in the published state on the `sensitivity_preset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensitivity_preset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity_preset": NEW_VALUE}`.
The possible values are: `high`, `medium`, `low`, `custom`.

### Auto calibration (enum)
Start or cancel automatic threshold learning. The protocol does not specify warm-up time, learning duration or required room conditions. This operation can change thresholds..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_calibration": NEW_VALUE}`.
The possible values are: `start`, `cancel`.

### Auto calibration status (enum)
"standby" — idle. "start" — initiated. "learning" — in progress. "success" — thresholds updated. "fail" — failed. "cancel" — stopped by user..
Value can be found in the published state on the `auto_calibration_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `standby`, `start`, `learning`, `success`, `fail`, `cancel`.

### Led indicator (binary)
Physical LED indicator of the sensor..
Value can be found in the published state on the `led_indicator` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_indicator": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_indicator": NEW_VALUE}`.
If value equals `true` led indicator is ON, if `false` OFF.

### Energy reporting command (enum)
Write-only DP104 command: ON starts 5-second heartbeats; OFF stops them and sends an explicit stop. Legacy boolean commands are accepted. Firmware timeout is not relied on: the tested sample continued beyond the documented 10 seconds. A local 5-minute limit and lifecycle cleanup request OFF; this is a command, not a readable device state..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"energy_streaming": NEW_VALUE}`.
The possible values are: `ON`, `OFF`.

### Zone 1 motion energy (numeric)
Zone 1 live motion energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_1_motion_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 1 presence energy (numeric)
Zone 1 live presence energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_1_presence_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 2 motion energy (numeric)
Zone 2 live motion energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_2_motion_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 2 presence energy (numeric)
Zone 2 live presence energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_2_presence_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 3 motion energy (numeric)
Zone 3 live motion energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_3_motion_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 3 presence energy (numeric)
Zone 3 live presence energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_3_presence_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 4 motion energy (numeric)
Zone 4 live motion energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_4_motion_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 4 presence energy (numeric)
Zone 4 live presence energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_4_presence_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 5 motion energy (numeric)
Zone 5 live motion energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_5_motion_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 5 presence energy (numeric)
Zone 5 live presence energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_5_presence_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 6 motion energy (numeric)
Zone 6 live motion energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_6_motion_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 6 presence energy (numeric)
Zone 6 live presence energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_6_presence_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 7 motion energy (numeric)
Zone 7 live motion energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_7_motion_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 7 presence energy (numeric)
Zone 7 live presence energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_7_presence_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 8 motion energy (numeric)
Zone 8 live motion energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_8_motion_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 8 presence energy (numeric)
Zone 8 live presence energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_8_presence_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 9 motion energy (numeric)
Zone 9 live motion energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_9_motion_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 9 presence energy (numeric)
Zone 9 live presence energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_9_presence_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 10 motion energy (numeric)
Zone 10 live motion energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_10_motion_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 10 presence energy (numeric)
Zone 10 live presence energy (raw 0–255; no physical unit)..
Value can be found in the published state on the `zone_10_presence_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Zone 1 active (binary)
Zone 1: 0 is masked; 1/2 are unmasked presence/absence reports. Physical distance boundaries are not specified..
Value can be found in the published state on the `zone_1_active` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_1_active": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_1_active": NEW_VALUE}`.
If value equals `true` zone 1 active is ON, if `false` OFF.

### Zone 2 active (binary)
Zone 2: 0 is masked; 1/2 are unmasked presence/absence reports. Physical distance boundaries are not specified..
Value can be found in the published state on the `zone_2_active` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_2_active": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_2_active": NEW_VALUE}`.
If value equals `true` zone 2 active is ON, if `false` OFF.

### Zone 3 active (binary)
Zone 3: 0 is masked; 1/2 are unmasked presence/absence reports. Physical distance boundaries are not specified..
Value can be found in the published state on the `zone_3_active` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_3_active": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_3_active": NEW_VALUE}`.
If value equals `true` zone 3 active is ON, if `false` OFF.

### Zone 4 active (binary)
Zone 4: 0 is masked; 1/2 are unmasked presence/absence reports. Physical distance boundaries are not specified..
Value can be found in the published state on the `zone_4_active` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_4_active": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_4_active": NEW_VALUE}`.
If value equals `true` zone 4 active is ON, if `false` OFF.

### Zone 5 active (binary)
Zone 5: 0 is masked; 1/2 are unmasked presence/absence reports. Physical distance boundaries are not specified..
Value can be found in the published state on the `zone_5_active` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_5_active": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_5_active": NEW_VALUE}`.
If value equals `true` zone 5 active is ON, if `false` OFF.

### Zone 6 active (binary)
Zone 6: 0 is masked; 1/2 are unmasked presence/absence reports. Physical distance boundaries are not specified..
Value can be found in the published state on the `zone_6_active` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_6_active": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_6_active": NEW_VALUE}`.
If value equals `true` zone 6 active is ON, if `false` OFF.

### Zone 7 active (binary)
Zone 7: 0 is masked; 1/2 are unmasked presence/absence reports. Physical distance boundaries are not specified..
Value can be found in the published state on the `zone_7_active` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_7_active": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_7_active": NEW_VALUE}`.
If value equals `true` zone 7 active is ON, if `false` OFF.

### Zone 8 active (binary)
Zone 8: 0 is masked; 1/2 are unmasked presence/absence reports. Physical distance boundaries are not specified..
Value can be found in the published state on the `zone_8_active` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_8_active": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_8_active": NEW_VALUE}`.
If value equals `true` zone 8 active is ON, if `false` OFF.

### Zone 9 active (binary)
Zone 9: 0 is masked; 1/2 are unmasked presence/absence reports. Physical distance boundaries are not specified..
Value can be found in the published state on the `zone_9_active` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_9_active": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_9_active": NEW_VALUE}`.
If value equals `true` zone 9 active is ON, if `false` OFF.

### Zone 10 active (binary)
Zone 10: 0 is masked; 1/2 are unmasked presence/absence reports. Physical distance boundaries are not specified..
Value can be found in the published state on the `zone_10_active` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_10_active": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_10_active": NEW_VALUE}`.
If value equals `true` zone 10 active is ON, if `false` OFF.

### Zone 1 threshold group 1 (numeric)
Raw DP124 byte 1 (0–255). Legacy motion_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_1_motion_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_1_motion_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_1_motion_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 1 threshold group 2 (numeric)
Raw DP124 byte 11 (0–255). Legacy presence_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_1_presence_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_1_presence_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_1_presence_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 2 threshold group 1 (numeric)
Raw DP124 byte 2 (0–255). Legacy motion_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_2_motion_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_2_motion_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_2_motion_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 2 threshold group 2 (numeric)
Raw DP124 byte 12 (0–255). Legacy presence_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_2_presence_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_2_presence_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_2_presence_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 3 threshold group 1 (numeric)
Raw DP124 byte 3 (0–255). Legacy motion_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_3_motion_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_3_motion_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_3_motion_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 3 threshold group 2 (numeric)
Raw DP124 byte 13 (0–255). Legacy presence_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_3_presence_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_3_presence_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_3_presence_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 4 threshold group 1 (numeric)
Raw DP124 byte 4 (0–255). Legacy motion_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_4_motion_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_4_motion_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_4_motion_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 4 threshold group 2 (numeric)
Raw DP124 byte 14 (0–255). Legacy presence_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_4_presence_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_4_presence_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_4_presence_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 5 threshold group 1 (numeric)
Raw DP124 byte 5 (0–255). Legacy motion_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_5_motion_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_5_motion_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_5_motion_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 5 threshold group 2 (numeric)
Raw DP124 byte 15 (0–255). Legacy presence_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_5_presence_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_5_presence_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_5_presence_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 6 threshold group 1 (numeric)
Raw DP124 byte 6 (0–255). Legacy motion_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_6_motion_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_6_motion_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_6_motion_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 6 threshold group 2 (numeric)
Raw DP124 byte 16 (0–255). Legacy presence_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_6_presence_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_6_presence_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_6_presence_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 7 threshold group 1 (numeric)
Raw DP124 byte 7 (0–255). Legacy motion_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_7_motion_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_7_motion_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_7_motion_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 7 threshold group 2 (numeric)
Raw DP124 byte 17 (0–255). Legacy presence_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_7_presence_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_7_presence_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_7_presence_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 8 threshold group 1 (numeric)
Raw DP124 byte 8 (0–255). Legacy motion_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_8_motion_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_8_motion_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_8_motion_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 8 threshold group 2 (numeric)
Raw DP124 byte 18 (0–255). Legacy presence_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_8_presence_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_8_presence_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_8_presence_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 9 threshold group 1 (numeric)
Raw DP124 byte 9 (0–255). Legacy motion_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_9_motion_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_9_motion_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_9_motion_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 9 threshold group 2 (numeric)
Raw DP124 byte 19 (0–255). Legacy presence_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_9_presence_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_9_presence_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_9_presence_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 10 threshold group 1 (numeric)
Raw DP124 byte 10 (0–255). Legacy motion_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_10_motion_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_10_motion_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_10_motion_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Zone 10 threshold group 2 (numeric)
Raw DP124 byte 20 (0–255). Legacy presence_threshold key retained; the protocol does not identify the physical role of this group..
Value can be found in the published state on the `zone_10_presence_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_10_presence_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_10_presence_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.
