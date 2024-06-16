---
title: "Aqara ZNCLDJ12LM control via MQTT"
description: "Integrate your Aqara ZNCLDJ12LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-11-09T18:37:38Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara ZNCLDJ12LM

|     |     |
|-----|-----|
| Model | ZNCLDJ12LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Curtain controller B1 |
| Exposes | cover (state, position), battery, running, motor_state, power_outage_count, linkquality |
| Picture | ![Aqara ZNCLDJ12LM](https://www.zigbee2mqtt.io/images/devices/ZNCLDJ12LM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Adapter firmware
In order for this device to work (fully), at least the following firmware is required on your adapter:
- CC2530/CC2531: [`20211115`](https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin)
- CC1352/CC2652: [`20211114`](https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin)
- CC2538: [`20211222`](https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592)
- Conbee II: [`0x26720700`]( http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF)

*Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.*

### Configuration of device attributes
By publishing to `zigbee2mqtt/FRIENDLY_NAME/set` various device attributes can be configured:
```json
{
    "options":{
        "reverse_direction": xxx,
        "hand_open": xxx,
        "reset_limits": xxx
    }
}
```

- **reverse_direction**: (`true`/`false`, default: `false`). Device can be configured to act in an opposite direction.
- **hand_open**: (`true`/`false`, default: `true`). By default motor starts rotating when you pull the curtain by hand. You can disable this behaviour.
- **reset_limits**: (`true`/`false`, default: `false`). Reset the motor. When a path was cleared from obstacles.

You can send a subset of options, all options that won't be specified will be revered to default.

After changing `reverse_direction` you will need to fully open and fully close the curtain so the motor will re-detect edges. `reverse_direction` will get new state only after this recalibration.

### Lost configuration on long power outage
If motor is used without battery it may lose configuration after long power outage. In that case you need to perform end stops calibration again publishing the following command sequence with topic `zigbee2mqtt/FRIENDLY_NAME/set`:
1. `{ "options": { "reset_limits": true } }`
2. `{ "state": "close" }`
3. Wait here for curtain closure.
4. `{ "state": "open" }`

Home Assistant automation example:
```yaml
- alias: Calibrate curtain
  trigger:
  - platform: homeassistant
    event: start
  action:
  - service: mqtt.publish
    data:
      topic: zigbee2mqtt/<FRIENDLY_NAME>/set
      payload: "{ 'options': { 'reset_limits': true } }"
  - service: cover.close_cover
    entity_id: cover.<COVER_ID>
  - delay:
      seconds: 13 #wait for closure complete
  - service: cover.open_cover
    entity_id: cover.<COVER_ID>
```

Motor leaves calibration mode automatically after it reaches the both open and close curtain position limits. Calibration is mandatory for proper position reporting and ability to set intermediate positions.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
To read the current state of this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Running (binary)
Whether the motor is moving or not.
Value can be found in the published state on the `running` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` running is ON, if `false` OFF.

### Motor state (enum)
The current state of the motor..
Value can be found in the published state on the `motor_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `closing`, `opening`, `stopped`.

### Power outage count (numeric)
Number of power outages (since last pairing).
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

