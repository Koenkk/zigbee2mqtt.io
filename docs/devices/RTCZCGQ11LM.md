---
title: "Aqara RTCZCGQ11LM control via MQTT"
description: "Integrate your Aqara RTCZCGQ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-01-31T17:42:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara RTCZCGQ11LM

|     |     |
|-----|-----|
| Model | RTCZCGQ11LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Presence sensor FP1 |
| Exposes | presence, device_temperature, power_outage_count, presence_event, monitoring_mode, approach_distance, motion_sensitivity, reset_nopresence_status, region_upsert, region_delete, action, linkquality |
| Picture | ![Aqara RTCZCGQ11LM](https://www.zigbee2mqtt.io/images/devices/RTCZCGQ11LM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Channel
This sensor [does not work](https://github.com/Koenkk/zigbee2mqtt/issues/11019#issuecomment-1064063808) on Zigbee channel 21-24.

### Adapter firmware
In order for this device to work, at least the following firmware is required on your adapter:
- CC2530/CC2531: [`20211115`](https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin)
- CC1352/CC2652: [`20211114`](https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin)
- CC2538: [`20211222`](https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592)
- Conbee II: [`0x26580700`]( http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26580700.bin.GCF)

*Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.*

### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join. If this doesn't work, try with a single short button press.

![RTCZCGQ11LM pairing](../images/pairing/RTCZCGQ11LM_pairing.jpg)

### Feature support

#### Detection regions (configuration)

Device allows to add up to `10` detection regions, each composed of any number of zones in a `4x7` detection grid, visualized below:  
![RTCZCGQ11LM pairing](../images/device_specific/RTCZCGQ11LM_detection_regions.jpg)

Each zone can be added to any region, for example you can add zone `X1 Y1` to both `Region 1` & `Region 2` at the same time.

Region 1 with X1 and Y[1,2,3] can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{ "region_upsert": { "region_id": 1, "zones": [{"x": 1, "y": 1},{"x": 1, "y": 2},{"x": 1, "y": 3}]}}`

**Note**: multiple zones are in `[]`


#### Detection regions (events)

Once the device detects an event in any of created regions, it exposes this event in `action` expose.  
The events follow the schema of `region_<REGION_ID>_<EVENT_NAME>`, where:
- `<REGION_ID>` is a region identifier, as specified by the user, from `1` to `10`.
- `<EVENT_NAME>` is one of:
  - `enter` - triggered on region enter, quick to trigger
  - `leave` - triggered on region leave, quick to trigger
  - `occupied` - triggered when device is sure about region occupancy, slow to trigger
  - `unoccupied` - triggered when device is sure about region no longer being occupied, slow to trigger

Eg. `region_1_enter` is triggered when a person enters `Region 1`.

#### Other regions

`Other regions` (exits, entrances, interference sources, edges) currently not supported. Reverse engineering efforts documented [here](https://github.com/dresden-elektronik/deconz-rest-plugin/issues/5928#issuecomment-1166545226).
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"presence": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Power outage count (numeric)
Number of power outages (since last pairing).
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Presence event (enum)
Presence events: "enter", "leave", "left_enter", "right_leave", "right_enter", "left_leave", "approach", "away".
Value can be found in the published state on the `presence_event` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `enter`, `leave`, `left_enter`, `right_leave`, `right_enter`, `left_leave`, `approach`, `away`.

### Monitoring mode (enum)
Monitoring mode with or without considering right and left sides.
Value can be found in the published state on the `monitoring_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"monitoring_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"monitoring_mode": NEW_VALUE}`.
The possible values are: `undirected`, `left_right`.

### Approach distance (enum)
The distance at which the sensor detects approaching.
Value can be found in the published state on the `approach_distance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"approach_distance": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"approach_distance": NEW_VALUE}`.
The possible values are: `far`, `medium`, `near`.

### Motion sensitivity (enum)
Different sensitivities means different static human body recognition rate and response speed of occupied.
Value can be found in the published state on the `motion_sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motion_sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Reset nopresence status (enum)
Reset the status of no presence.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reset_nopresence_status": NEW_VALUE}`.
The possible values are: ``.

### Region upsert (composite)
Definition of a new region to be added (or replace existing one). Creating or modifying a region requires you to define which zones of a 7x4 detection grid should be active for that zone. Regions can overlap, meaning that a zone can be defined in more than one region (eg. "zone x = 1 & y = 1" can be added to region 1 & 2). "Zone x = 1 & y = 1" is the nearest zone on the right (from sensor's perspective, along the detection path)..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"region_upsert": {"region_id": VALUE, "zones": VALUE}}`
- `region_id` (numeric) min value is 1, max value is 10
- `zones` (list): list of dictionaries in the format {"x": 1, "y": 1}, {"x": 2, "y": 1} 

### Region delete (composite)
Region definition to be deleted from the device..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"region_delete": {"region_id": VALUE}}`
- `region_id` (numeric) min value is 1, max value is 10

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `region_*_enter`, `region_*_leave`, `region_*_occupied`, `region_*_unoccupied`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

