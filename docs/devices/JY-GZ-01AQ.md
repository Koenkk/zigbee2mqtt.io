---
title: "Aqara JY-GZ-01AQ control via MQTT"
description: "Integrate your Aqara JY-GZ-01AQ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-04-30T08:00:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara JY-GZ-01AQ

|     |     |
|-----|-----|
| Model | JY-GZ-01AQ  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Smart smoke detector |
| Exposes | smoke, smoke_density, smoke_density_dbm, selftest, test, buzzer, buzzer_manual_alarm, buzzer_manual_mute, heartbeat_indicator, linkage_alarm, linkage_alarm_state, battery, voltage, power_outage_count, linkquality |
| Picture | ![Aqara JY-GZ-01AQ](https://www.zigbee2mqtt.io/images/devices/JY-GZ-01AQ.png) |
| White-label | Aqara JY-GZ-03AQ |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Adapter firmware
In order for this device to work, at least the following firmware is required on your adapter:
- CC2530/CC2531: [`20211115`](https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin)
- CC1352/CC2652: [`20211114`](https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin)
- CC2538: [`20211222`](https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592)
- Conbee II: [`0x26720700`]( http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF)

*Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.*

### Pairing
Quickly press the button three times in a row.
After this the device will automatically join.

![JY-GZ-01AQ pairing](../images/pairing/JY-GZ-01AQ_pairing.jpg)

*Note: When you fail to pair a device, try replacing the battery, this could solve the problem.*
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"smoke": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Smoke density (numeric)
Value of smoke concentration.
Value can be found in the published state on the `smoke_density` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"smoke_density": ""}`.
It's not possible to write (`/set`) this value.

### Smoke density dbm (numeric)
Value of smoke concentration in dB/m.
Value can be found in the published state on the `smoke_density_dbm` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"smoke_density_dbm": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `dB/m`.

### Selftest (enum)
Starts the self-test process (checking the indicator light and buzzer work properly).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"selftest": NEW_VALUE}`.
The possible values are: `selftest`.

### Test (binary)
Self-test in progress.
Value can be found in the published state on the `test` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` test is ON, if `false` OFF.

### Buzzer (enum)
The buzzer can be muted and alarmed manually. During a smoke alarm, the buzzer can be manually muted for 80 seconds ("mute") and unmuted ("alarm"). The buzzer cannot be pre-muted, as this function only works during a smoke alarm. During the absence of a smoke alarm, the buzzer can be manually alarmed ("alarm") and disalarmed ("mute"), but for this "linkage_alarm" option must be enabled.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"buzzer": NEW_VALUE}`.
The possible values are: `mute`, `alarm`.

### Buzzer manual alarm (binary)
Buzzer alarmed (manually).
Value can be found in the published state on the `buzzer_manual_alarm` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"buzzer_manual_alarm": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` buzzer manual alarm is ON, if `false` OFF.

### Buzzer manual mute (binary)
Buzzer muted (manually).
Value can be found in the published state on the `buzzer_manual_mute` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"buzzer_manual_mute": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` buzzer manual mute is ON, if `false` OFF.

### Heartbeat indicator (binary)
When this option is enabled then in the normal monitoring state, the green indicator light flashes every 60 seconds.
Value can be found in the published state on the `heartbeat_indicator` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"heartbeat_indicator": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"heartbeat_indicator": NEW_VALUE}`.
If value equals `true` heartbeat indicator is ON, if `false` OFF.

### Linkage alarm (binary)
When this option is enabled and a smoke alarm has occurred, then "linkage_alarm_state"=true, and when the smoke alarm has ended or the buzzer has been manually muted, then "linkage_alarm_state"=false.
Value can be found in the published state on the `linkage_alarm` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"linkage_alarm": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"linkage_alarm": NEW_VALUE}`.
If value equals `true` linkage alarm is ON, if `false` OFF.

### Linkage alarm state (binary)
"linkage_alarm" is triggered.
Value can be found in the published state on the `linkage_alarm_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` linkage alarm state is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Power outage count (numeric)
Number of power outages.
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

