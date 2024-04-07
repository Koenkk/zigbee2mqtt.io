---
title: "LiXee ZLinky_TIC control via MQTT"
description: "Integrate your LiXee ZLinky_TIC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-09-08T21:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# LiXee ZLinky_TIC

|     |     |
|-----|-----|
| Model | ZLinky_TIC  |
| Vendor  | [LiXee](/supported-devices/#v=LiXee)  |
| Description | Lixee ZLinky |
| Exposes | EAST, EAIT, EASF01, EASF02, EASF03, EASF04, EASF05, EASF06, EASF07, EASF08, EASF09, EASF10, ADSC, PRM, PREF, PCOUP, VTIC, CCASN, CCASN-1, UMOY1, ERQ1, ERQ2, ERQ3, ERQ4, IRMS1, URMS1, EASD01, EASD02, EASD03, EASD04, DATE, NTARF, LTARF, NGTF, NJOURF, NJOURF+1, PJOURF+1, PPOINTE1, CCAIN, CCAIN-1, SINSTI, SMAXIN, SMAXIN-1, MSG1, MSG2, RELAIS, DPM1, DPM2, DPM3, STGE, FPM1, FPM2, FPM3, SMAXN, SINSTS, SMAXN-1, SMAXN2, SMAXN3, SINSTS2, SINSTS3, UMOY3, UMOY2, IRMS2, IRMS3, URMS2, URMS3, SMAXN2-1, SMAXN3-1, PTEC, MOTDETAT, HHPHC, PEJP, DEMAIN, IMAX, ADPS, IMAX2, IMAX3, PPOT, ADIR1, ADIR2, ADIR3, linkquality |
| Picture | ![LiXee ZLinky_TIC](https://www.zigbee2mqtt.io/images/devices/ZLinky_TIC.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
Pair the sensor to Zigbee2MQTT by long pressing the pair button for more than 10 seconds. The blue light on the front side should flash rapidly.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `measurement_poll_interval`: This device does not support reporting electric measurements so it is polled instead. The default poll interval is 60 seconds, set to -1 to disable. The value must be a number with a minimum value of `-1`

* `linky_mode`: Counter with TIC in mode standard or historique. May require restart (default: auto). The value must be one of `auto`, `historique`, `standard`

* `energy_phase`: Power with single or three phase. May require restart (default: auto). The value must be one of `auto`, `single_phase`, `three_phase`

* `production`: If you produce energy back to the grid (works ONLY when linky_mode: standard, default: auto). The value must be one of `auto`, `true`, `false`

* `tarif`: Overrides the automatic current tarif. This option will exclude unnecessary attributes. Open a issue to support more of them. Default: auto. The value must be one of `Historique - BASE`, `Historique - HCHP`, `Historique - EJP`, `Historique - BBR`, `Standard - Sem WE Lundi`, `Standard - Sem WE Mercredi`, `Standard - Sem WE Vendredi`, `Standard - BASE`, `Standard - Heure Pleine Heure Creuse`, `Standard - Heures Super Creuses`, `Standard - TEMPO`, `Standard - ZEN Flex`, `auto`

* `kWh_precision`: Number of digits after decimal point for kWh, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `measurement_poll_chunk`: During the poll, request multiple exposes to the Zlinky at once for reducing Zigbee network overload. Too much request at once could exceed device limit. Requires Z2M restart. Default: 1. The value must be a number with a minimum value of `1`

* `tic_command_whitelist`: List of TIC commands to be exposed (separated by comma). Reconfigure device after change. Default: all. The value must be textual.


## Exposes

### EAST (numeric)
Total active power delivered.
Value can be found in the published state on the `current_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EAIT (numeric)
Total active power injected.
Value can be found in the published state on the `current_summ_received` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EASF01 (numeric)
Total provider active power delivered (index 01).
Value can be found in the published state on the `current_tier1_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EASF02 (numeric)
Total provider active power delivered (index 02).
Value can be found in the published state on the `current_tier2_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EASF03 (numeric)
Total provider active power delivered (index 03).
Value can be found in the published state on the `current_tier3_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EASF04 (numeric)
Total provider active power delivered (index 04).
Value can be found in the published state on the `current_tier4_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EASF05 (numeric)
Total provider active power delivered (index 05).
Value can be found in the published state on the `current_tier5_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EASF06 (numeric)
Total provider active power delivered (index 06).
Value can be found in the published state on the `current_tier6_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EASF07 (numeric)
Total provider active power delivered (index 07).
Value can be found in the published state on the `current_tier7_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EASF08 (numeric)
Total provider active power delivered (index 08).
Value can be found in the published state on the `current_tier8_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EASF09 (numeric)
Total provider active power delivered (index 09).
Value can be found in the published state on the `current_tier9_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EASF10 (numeric)
Total provider active power delivered (index 10).
Value can be found in the published state on the `current_tier10_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### ADSC (text)
Serial Number.
Value can be found in the published state on the `meter_serial_number` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### PRM (text)
PRM number.
Value can be found in the published state on the `site_id` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### PREF (numeric)
Apparent power of reference.
Value can be found in the published state on the `available_power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kVA`.

### PCOUP (numeric)
Apparent power threshold.
Value can be found in the published state on the `power_threshold` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kVA`.

### VTIC (numeric)
Customer tele-information protocol version.
Value can be found in the published state on the `software_revision` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### CCASN (numeric)
Current point of the active load curve drawn.
Value can be found in the published state on the `active_power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### CCASN-1 (numeric)
Previous point of the active load curve drawn.
Value can be found in the published state on the `active_power_ph_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### UMOY1 (numeric)
Average RMS voltage (phase 1).
Value can be found in the published state on the `average_rms_voltage_meas_period` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### ERQ1 (numeric)
Total reactive power (Q1).
Value can be found in the published state on the `total_reactive_power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VArh`.

### ERQ2 (numeric)
Total reactive power (Q2).
Value can be found in the published state on the `reactive_power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VArh`.

### ERQ3 (numeric)
Total reactive power (Q3).
Value can be found in the published state on the `reactive_power_ph_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VArh`.

### ERQ4 (numeric)
Total reactive power (Q4).
Value can be found in the published state on the `reactive_power_ph_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VArh`.

### IRMS1 (numeric)
RMS current.
Value can be found in the published state on the `rms_current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### URMS1 (numeric)
RMS voltage.
Value can be found in the published state on the `rms_voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### EASD01 (numeric)
Active energy withdrawn Distributor (index 01).
Value can be found in the published state on the `active_energy_out_d01` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EASD02 (numeric)
Active energy withdrawn Distributor (index 02).
Value can be found in the published state on the `active_energy_out_d02` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EASD03 (numeric)
Active energy withdrawn Distributor (index 03).
Value can be found in the published state on the `active_energy_out_d03` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EASD04 (numeric)
Active energy withdrawn Distributor (index 04).
Value can be found in the published state on the `active_energy_out_d04` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### DATE (text)
Current date and time.
Value can be found in the published state on the `current_date` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### NTARF (numeric)
Current tariff index number.
Value can be found in the published state on the `current_index_tarif` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### LTARF (text)
Current supplier price label.
Value can be found in the published state on the `current_price` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### NGTF (text)
Supplier pricing schedule name.
Value can be found in the published state on the `current_tarif` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### NJOURF (numeric)
Current day number supplier calendar.
Value can be found in the published state on the `days_number_current_calendar` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### NJOURF+1 (numeric)
Next day number supplier calendar.
Value can be found in the published state on the `days_number_next_calendar` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### PJOURF+1 (text)
Profile of the next supplier calendar day.
Value can be found in the published state on the `days_profile_current_calendar` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### PPOINTE1 (text)
Profile of the next check-in day.
Value can be found in the published state on the `days_profile_next_calendar` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### CCAIN (numeric)
Point n of the withdrawn active load curve.
Value can be found in the published state on the `injected_active_load_n` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### CCAIN-1 (numeric)
Point n-1 of the withdrawn active load curve.
Value can be found in the published state on the `injected_active_load_n1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### SINSTI (numeric)
Instantaneous apparent power injected.
Value can be found in the published state on the `injected_v_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### SMAXIN (numeric)
Apparent power max. injected n.
Value can be found in the published state on the `injected_v_a_max_n` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### SMAXIN-1 (numeric)
Apparent power max. injected n-1.
Value can be found in the published state on the `injected_v_a_max_n1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### MSG1 (text)
Message short.
Value can be found in the published state on the `message1` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### MSG2 (text)
Message ultra-short.
Value can be found in the published state on the `message2` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### RELAIS (numeric)
Value can be found in the published state on the `relais` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### DPM1 (numeric)
Start mobile point 1.
Value can be found in the published state on the `start_mobile_point1` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### DPM2 (numeric)
Start mobile point 2.
Value can be found in the published state on the `start_mobile_point2` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### DPM3 (numeric)
Start mobile point 3.
Value can be found in the published state on the `start_mobile_point3` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### STGE (text)
Register of Statutes.
Value can be found in the published state on the `status_register` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### FPM1 (numeric)
Stop mobile point 1.
Value can be found in the published state on the `stop_mobile_point1` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### FPM2 (numeric)
Stop mobile point 2.
Value can be found in the published state on the `stop_mobile_point2` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### FPM3 (numeric)
Stop mobile point 3.
Value can be found in the published state on the `stop_mobile_point3` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### SMAXN (numeric)
Apparent power delivered peak.
Value can be found in the published state on the `active_power_max` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### SINSTS (numeric)
Immediate apparent power delivered.
Value can be found in the published state on the `apparent_power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### SMAXN-1 (numeric)
Apparent power max. draw-off n-1.
Value can be found in the published state on the `drawn_v_a_max_n1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### SMAXN2 (numeric)
Apparent power delivered peak (phase 2).
Value can be found in the published state on the `active_power_max_ph_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### SMAXN3 (numeric)
Apparent power delivered peak (phase 3).
Value can be found in the published state on the `active_power_max_ph_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### SINSTS2 (numeric)
Immediate apparent power delivered (phase 2).
Value can be found in the published state on the `apparent_power_ph_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### SINSTS3 (numeric)
Immediate apparent power delivered (phase 3).
Value can be found in the published state on the `apparent_power_ph_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### SINSTS (numeric)
Total immediate apparent power delivered.
Value can be found in the published state on the `total_apparent_power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### UMOY3 (numeric)
Average RMS voltage (phase 3).
Value can be found in the published state on the `average_rms_voltage_meas_period_ph_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### UMOY2 (numeric)
Average RMS voltage (phase 2).
Value can be found in the published state on the `average_rms_voltage_measure_period_ph_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### IRMS2 (numeric)
RMS current (phase 2).
Value can be found in the published state on the `rms_current_ph_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### IRMS3 (numeric)
RMS current (phase 3).
Value can be found in the published state on the `rms_current_ph_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### URMS2 (numeric)
RMS voltage (phase 2).
Value can be found in the published state on the `rms_voltage_ph_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### URMS3 (numeric)
RMS voltage (phase 3).
Value can be found in the published state on the `rms_voltage_ph_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### SMAXN2-1 (numeric)
Apparent power max. draw-off n-1 (phase 2).
Value can be found in the published state on the `drawn_v_a_max_n1_p2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### SMAXN3-1 (numeric)
Apparent power max. draw-off n-1 (phase 3).
Value can be found in the published state on the `drawn_v_a_max_n1_p3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### PTEC (text)
Current pricing period.
Value can be found in the published state on the `active_register_tier_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### MOTDETAT (text)
Meter Status Word.
Value can be found in the published state on the `MOTDETAT` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### HHPHC (numeric)
Schedule HPHC.
Value can be found in the published state on the `schedule_h_p_h_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### PEJP (numeric)
EJP start notice (30min).
Value can be found in the published state on the `start_notice_e_j_p` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `min`.

### DEMAIN (text)
Tomorrow color.
Value can be found in the published state on the `tomorrow_color` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### IMAX (numeric)
RMS current peak.
Value can be found in the published state on the `rms_current_max` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### ADPS (numeric)
Subscribed Power Exceeded Warning.
Value can be found in the published state on the `warn_d_p_s` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### IMAX2 (numeric)
RMS current peak (phase 2).
Value can be found in the published state on the `rms_current_max_ph_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### IMAX3 (numeric)
RMS current peak (phase 3).
Value can be found in the published state on the `rms_current_max_ph_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### PPOT (numeric)
Presence of potentials.
Value can be found in the published state on the `presence_potential` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### ADIR1 (numeric)
Over Current Warning (phase 1).
Value can be found in the published state on the `warn_d_i_r1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### ADIR2 (numeric)
Over Current Warning (phase 2).
Value can be found in the published state on the `warn_d_i_r2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### ADIR3 (numeric)
Over Current Warning (phase 3).
Value can be found in the published state on the `warn_d_i_r3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

