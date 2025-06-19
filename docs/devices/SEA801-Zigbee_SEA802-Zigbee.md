---
title: "Saswell SEA801-Zigbee/SEA802-Zigbee control via MQTT"
description: "Integrate your Saswell SEA801-Zigbee/SEA802-Zigbee via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-12-30T11:31:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Saswell SEA801-Zigbee/SEA802-Zigbee

|     |     |
|-----|-----|
| Model | SEA801-Zigbee/SEA802-Zigbee  |
| Vendor  | [Saswell](/supported-devices/#v=Saswell)  |
| Description | Thermostatic radiator valve |
| Exposes | battery_low, switch (state), child_lock, heating, climate (current_heating_setpoint, local_temperature, system_mode, running_state, local_temperature_calibration) |
| Picture | ![Saswell SEA801-Zigbee/SEA802-Zigbee](https://www.zigbee2mqtt.io/images/devices/SEA801-Zigbee-SEA802-Zigbee.png) |
| White-label | HiHome WZB-TRVL, Hama 00176592, Maginon WT-1, RTX ZB-RT1, SETTI+ TRV001, Royal Thermo RTE 77.001B |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing

* SEA801-Zigbee (LCD display on the front, several buttons): Long hold the "AUTO/MANU" and "+" Button until the LCD display shows "----"
* SEA802-Z01 (white LED display on the side, rotary plate): Turn the rotary plate to decrease the temperature until the LED dots show "OF", then long press until the display changes to "--"

### Weekly Schedule

It's not possible to read (`/get`) this value.
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload

`dayofweek` 1-7, 1=sunday
`transitionTime` Minutes after midnight
`numoftrans` It seems that the maximum number of transitions is 4 

``` json
{
  "weekly_schedule": {
    "1": {
      "dayofweek": 1,
      "numoftrans": 2,
      "mode": 1,
      "transitions": [
        {
          "transitionTime": 360,
          "heatSetpoint": 23
        },
        {
          "transitionTime": 570,
          "heatSetpoint": 2200
        }
      ]
    }
  }
}
```
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Window detection (switch)
The current state of this switch is in the published state under the `window_detection` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": "ON"}`, `{"window_detection": "OFF"}` or `{"window_detection": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Away mode (switch)
The current state of this switch is in the published state under the `away_mode` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"away_mode": "ON"}`, `{"away_mode": "OFF"}` or `{"away_mode": "undefined"}`.
It's not possible to read (`/get`) this value.

### Heating (binary)
Device valve is open or closed (heating or not).
Value can be found in the published state on the `heating` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` heating is ON, if `OFF` OFF.

### Climate 
This climate device supports the following features: `current_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`, `local_temperature_calibration`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`, `auto`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-6` and the maximum value is `6` with a step size of `1`.

