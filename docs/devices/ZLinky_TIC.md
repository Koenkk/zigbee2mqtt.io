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
| Exposes | ADCO, BASE, OPTARIF, ISOUSC, HCHC, HCHP, BBRHCJW, BBRHPJW, BBRHCJR, BBRHPJR, IINST, IINST2, IINST3, IMAX, IMAX2, IMAX3, PMAX, PAPP, PTEC, DEMAIN, HHPHC, PPOT, PEJP, ADPS, ADIR1, ADIR2, ADIR3, LTARF, NTARF, VTIC, DATE, EASF07, EASF08, EASF09, EASF10, EASD01, EASD02, EASD03, EASD04, EAIT, ERQ1, ERQ2, ERQ3, ERQ4, URMS1, URMS2, URMS3, STGE, PCOUP, SINSTI, SMAXIN, SMAXIN-1, CCASN, CCASN-1, CCAIN, CCAIN-1, UMOY1, UMOY2, UMOY3, SINSTS2, SINSTS3, SMAXN2, SMAXN3, SMAXN-1, SMAXN2-1, SMAXN3-1, MSG1, MSG2, PRM, DPM1, FPM1, DPM2, FPM2, DPM3, FPM3, RELAIS, NJOURF, NJOURF+1, PJOURF+1, PPOINTE1, MOTDETAT, linkquality |
| Picture | ![LiXee ZLinky_TIC](https://www.zigbee2mqtt.io/images/devices/ZLinky_TIC.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `measurement_poll_interval`: This device does not support reporting electric measurements so it is polled instead. The default poll interval is 60 seconds, set to -1 to disable. The value must be a number with a minimum value of `-1`

* `linky_mode`: Counter with TIC in mode standard or historique. May require restart (default: auto). The value must be one of `auto`, `historique`, `standard`

* `energy_phase`: Power with single or three phase. May require restart (default: auto). The value must be one of `auto`, `single_phase`, `three_phase`

* `production`: If you produce energy back to the grid (works ONLY when linky_mode: standard, default: auto). The value must be one of `auto`, `true`, `false`

* `tarif`: Overrides the automatic current tarif. This option will exclude unnecesary attributes. Open a issue to support more of them. Default: auto. The value must be one of `Historique - BASE`, `Historique - HCHP`, `Historique - EJP`, `Historique - BBR`, `Standard - Sem WE Lundi`, `Standard - Sem WE Mercredi`, `Standard - Sem WE Vendredi`, `Standard - BASE`, `Standard - Heure Pleine Heure Creuse`, `auto`

* `kWh_precision`: Number of digits after decimal point for kWh, takes into effect on next report of device. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `measurement_poll_chunk`: During the poll, request multiple exposes to the Zlinky at once for reducing Zigbee network overload. Too much request at once could exceed device limit. Requieres Z2M restart. Default: 1. The value must be a number with a minimum value of `1`

* `tic_command_whitelist`: List of TIC commands to be exposed (separated by comma). Reconfigure device after change. Default: all. The value must be textual.


## Exposes

### ADCO (text)
Serial Number.
Value can be found in the published state on the `meter_serial_number` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### BASE (numeric)
Base index.
Value can be found in the published state on the `current_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### OPTARIF (text)
Tarif option.
Value can be found in the published state on the `current_tarif` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### ISOUSC (numeric)
Subscribed intensity level.
Value can be found in the published state on the `available_power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### HCHC (numeric)
HCHC index.
Value can be found in the published state on the `current_tier1_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### HCHP (numeric)
HCHP index.
Value can be found in the published state on the `current_tier2_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### BBRHCJW (numeric)
BBRHCJW index.
Value can be found in the published state on the `current_tier3_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### BBRHPJW (numeric)
BBRHPJW index.
Value can be found in the published state on the `current_tier4_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### BBRHCJR (numeric)
BBRHCJR index.
Value can be found in the published state on the `current_tier5_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### BBRHPJR (numeric)
BBRHPJR index.
Value can be found in the published state on the `current_tier6_summ_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### IINST (numeric)
RMS current.
Value can be found in the published state on the `rms_current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### IINST2 (numeric)
RMS current (phase 2).
Value can be found in the published state on the `rms_current_ph_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### IINST3 (numeric)
RMS current (phase 3).
Value can be found in the published state on the `rms_current_ph_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### IMAX (numeric)
RMS current peak.
Value can be found in the published state on the `rms_current_max` property.
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

### PMAX (numeric)
Three-phase power peak.
Value can be found in the published state on the `active_power_max` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### PAPP (numeric)
Apparent power.
Value can be found in the published state on the `apparent_power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### PTEC (text)
Current pricing period.
Value can be found in the published state on the `active_register_tier_delivered` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### DEMAIN (text)
Tomorrow color.
Value can be found in the published state on the `tomorrow_color` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### HHPHC (numeric)
Schedule HPHC.
Value can be found in the published state on the `schedule_h_p_h_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### PPOT (numeric)
Presence of potentials.
Value can be found in the published state on the `presence_potential` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### PEJP (numeric)
EJP start notice (30min).
Value can be found in the published state on the `start_notice_e_j_p` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `min`.

### ADPS (numeric)
Subscribed Power Exceeded Warning.
Value can be found in the published state on the `warn_d_p_s` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

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

### LTARF (text)
Current supplier price label.
Value can be found in the published state on the `current_price` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### NTARF (numeric)
Current tariff index number.
Value can be found in the published state on the `current_index_tarif` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### VTIC (numeric)
Customer tele-information protocol version.
Value can be found in the published state on the `software_revision` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### DATE (text)
Current date and time.
Value can be found in the published state on the `current_date` property.
It's not possible to read (`/get`) or write (`/set`) this value.

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

### EASD01 (numeric)
Active energy withdrawn Distributor (index 01).
Value can be found in the published state on the `active_enerfy_out_d01` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EASD02 (numeric)
Active energy withdrawn Distributor (index 02).
Value can be found in the published state on the `active_enerfy_out_d02` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EASD03 (numeric)
Active energy withdrawn Distributor (index 03).
Value can be found in the published state on the `active_enerfy_out_d03` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EASD04 (numeric)
Active energy withdrawn Distributor (index 04).
Value can be found in the published state on the `active_enerfy_out_d04` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### EAIT (numeric)
Total active power injected.
Value can be found in the published state on the `current_summ_received` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

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

### URMS1 (numeric)
RMS voltage.
Value can be found in the published state on the `rms_voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

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

### STGE (text)
Register of Statutes.
Value can be found in the published state on the `status_register` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### PCOUP (numeric)
Apparent power threshold.
Value can be found in the published state on the `power_threshold` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kVA`.

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

### UMOY1 (numeric)
Average RMS voltage (phase 1).
Value can be found in the published state on the `average_rms_voltage_meas_period` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### UMOY2 (numeric)
Average RMS voltage (phase 2).
Value can be found in the published state on the `average_rms_voltage_measure_period_ph_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### UMOY3 (numeric)
Average RMS voltage (phase 3).
Value can be found in the published state on the `average_rms_voltage_meas_period_ph_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

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

### SMAXN-1 (numeric)
Apparent power max. draw-off n-1.
Value can be found in the published state on the `drawn_v_a_max_n1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

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

### MSG1 (text)
Message short.
Value can be found in the published state on the `message1` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### MSG2 (text)
Message ultra-short.
Value can be found in the published state on the `message2` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### PRM (text)
PRM number.
Value can be found in the published state on the `site_id` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### DPM1 (numeric)
Start mobile point 1.
Value can be found in the published state on the `start_mobile_point1` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### FPM1 (numeric)
Stop mobile point 1.
Value can be found in the published state on the `stop_mobile_point1` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### DPM2 (numeric)
Start mobile point 2.
Value can be found in the published state on the `start_mobile_point2` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### FPM2 (numeric)
Stop mobile point 2.
Value can be found in the published state on the `stop_mobile_point2` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### DPM3 (numeric)
Start mobile point 3.
Value can be found in the published state on the `start_mobile_point3` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### FPM3 (numeric)
Stop mobile point 3.
Value can be found in the published state on the `stop_mobile_point3` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### RELAIS (numeric)
Value can be found in the published state on the `relais` property.
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

### MOTDETAT (text)
Meter Status Word.
Value can be found in the published state on the `MOTDETAT` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

