---
title: "Aqara ZNCLDJ11LM control via MQTT"
description: "Integrate your Aqara ZNCLDJ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara ZNCLDJ11LM

|     |     |
|-----|-----|
| Model | ZNCLDJ11LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Curtain controller |
| Exposes | cover (state, position), running, motor_state, linkquality |
| Picture | ![Aqara ZNCLDJ11LM](https://www.zigbee2mqtt.io/images/devices/ZNCLDJ11LM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing
Hold button for about 5 seconds until blue light turn on.

If you need to reset device first, hold button longer until red light turn on.

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
      payload: "{ \"options\": { \"reset_limits\": true } }"
      # note "" are escaped with \ else will not work if you want to send payload as json
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

### Running (binary)
Whether the motor is moving or not.
Value can be found in the published state on the `running` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` running is ON, if `false` OFF.

### Motor state (enum)
Motor state.
Value can be found in the published state on the `motor_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `stopped`, `opening`, `closing`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

