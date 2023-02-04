---
title: "TuYa TS0601_thermostat control via MQTT"
description: "Integrate your TuYa TS0601_thermostat via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-10-30T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TuYa TS0601_thermostat

|     |     |
|-----|-----|
| Model | TS0601_thermostat  |
| Vendor  | [TuYa](/supported-devices/#v=TuYa)  |
| Description | Radiator valve with thermostat |
| Exposes | lock (state), switch (state), window_open, battery_low, position, climate (current_heating_setpoint, local_temperature, system_mode, local_temperature_calibration, preset, running_state), away_preset_days, boost_time, comfort_temperature, eco_temperature, force, max_temperature, min_temperature, away_preset_temperature, programming_mode, linkquality |
| Picture | ![TuYa TS0601_thermostat](https://www.zigbee2mqtt.io/images/devices/TS0601_thermostat.jpg) |
| White-label | Moes HY368, Moes HY369RT, SHOJZJ 378RT, Silvercrest TVR01, Immax 07732B, Evolveo Heat M30 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing

While pairing, keep the valve close to the coordinator.

1. *Turn the display on*: Short press home (🏠).
2. *Enter settings*: Long press home (🏠) for 3sec.
3. *Select WiFi settings*: Press the plus button (➕) button 4 times to see the digital **`5`** on the right hand side and the blinking WiFi logo.
4. *Enter WiFi settings*: Press home (🏠) once again. Now only WiFi logo is showing without blinking.
5. *Enable pairing mode*: Long press home (🏠). WiFi logo is now blinking.
6. *Keep display on*: Touch home (🏠) every few seconds.

### Local temperature
If you'd like to force device to send local_temperature you can use this MQTT command:
* `topic`: zigbee2mqtt/FRIENDLY_NAME/set/local_temperature_calibration
* `payload`: YOUR_CURRENT_CALIBRATION_VALUE

YOUR_CURRENT_CALIBRATION_VALUE can be 0, but if you calibrated temperature for this device send current value.
After this command thermostat responds with two messages. One for calibration change confirmation, and other with current local_temperature.

### Controlling device specific features

- If all you need is to control on and off, you can set "force" with topic `zigbee2mqtt/FRIENDLY_NAME/set`. The payload values are:
  open -> fully opens valve and stays there
  close -> fully closes valve and stays there
  normal -> normal valve operation

    ```json
    {
        "force": "open"
    }
    ```

- Use topic `zigbee2mqtt/FRIENDLY_NAME/set/schedule` to set the schedule of the device with 6 timeslots on workdays or holidays (e.g. weekend). Example payload values are:

    ```json
    {
        "workdays":[
            {"hour":6,"minute":0,"temperature":19},
            {"hour":8,"minute":0,"temperature":20},
            {"hour":18,"minute":0,"temperature":21},
            {"hour":20,"minute":30,"temperature":20},
            {"hour":22,"minute":0,"temperature":19},
            {"hour":23,"minute":30,"temperature":15}
        ]
    }
    ```

    ```json
    {
        "holidays":[
            {"hour":6,"minute":0,"temperature":19},
            {"hour":8,"minute":0,"temperature":20},
            {"hour":18,"minute":0,"temperature":21},
            {"hour":20,"minute":30,"temperature":20},
            {"hour":22,"minute":0,"temperature":19},
            {"hour":23,"minute":30,"temperature":15}
        ]
    }
    ```
- You can set "week" schedule pattern with topic `zigbee2mqtt/FRIENDLY_NAME/set`. The payload values are:
  5+2 -> to be used when workdays for example are monday-friday and saturday & sunday are holidays
  6+1 -> to be used when workdays for example are monday-saturday and sunday is a holiday
  7 -> to be used when workdays schedule will be used for the whole week

    ```json
    {
        "week": "5+2"
    }
    ```

- You can set "boost time" with topic `zigbee2mqtt/FRIENDLY_NAME/set`. But be aware that it rounds the values down to multiple of 100.

    ```json
    {
        "boost_time": 200
    }
    ```
- You can set "comfort temperature" level on the device with topic `zigbee2mqtt/FRIENDLY_NAME/set`.

    ```json
    {
        "comfort_temperature": 21
    }
    ```
- You can set "eco temperature" level on the device with topic `zigbee2mqtt/FRIENDLY_NAME/set`.

    ```json
    {
        "eco_temperature": 17
    }
    ```
<!-- Notes END: Do not edit below this line -->

## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Lock 
The current state of this lock is in the published state under the `child_lock` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": "LOCK"}` or `{"child_lock": "UNLOCK"}`.
It's not possible to read (`/get`) this value.

### Switch 
The current state of this switch is in the published state under the `window_detection` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": "ON"}`, `{"window_detection": "OFF"}` or `{"window_detection": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Window_open (binary)
Window open?.
Value can be found in the published state on the `window_open` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `undefined` window_open is ON, if `undefined` OFF.

### Battery_low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery_low is ON, if `false` OFF.

### Switch 
The current state of this switch is in the published state under the `valve_detection` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_detection": "ON"}`, `{"valve_detection": "OFF"}` or `{"valve_detection": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Position (numeric)
Position.
Value can be found in the published state on the `position` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Climate 
This climate device supports the following features: `current_heating_setpoint`, `local_temperature`, `system_mode`, `local_temperature_calibration`, `preset`, `running_state`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device, in the `heat` mode the TS0601 will remain continuously heating, i.e. it does not regulate to the desired temperature. If you want TRV to properly regulate the temperature you need to use mode `auto` instead setting the desired temperature.. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `heat`, `auto`, `off`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `schedule`, `manual`, `boost`, `complex`, `comfort`, `eco`, `away`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"preset": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.
- `local_temperature_calibration`: Offset to be used in the local_temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-9` and the maximum value is `9` with a step size of `1`.

### Switch 
The current state of this switch is in the published state under the `auto_lock` property (value is `AUTO` or `MANUAL`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_lock": "AUTO"}`, `{"auto_lock": "MANUAL"}` or `{"auto_lock": "undefined"}`.
It's not possible to read (`/get`) this value.

### Switch 
The current state of this switch is in the published state under the `away_mode` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"away_mode": "ON"}`, `{"away_mode": "OFF"}` or `{"away_mode": "undefined"}`.
It's not possible to read (`/get`) this value.

### Away_preset_days (numeric)
Away preset days.
Value can be found in the published state on the `away_preset_days` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"away_preset_days": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### Boost_time (numeric)
Boost time.
Value can be found in the published state on the `boost_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `900`.
The unit of this value is `s`.

### Comfort_temperature (numeric)
Comfort temperature.
Value can be found in the published state on the `comfort_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `30`.
The unit of this value is `°C`.

### Eco_temperature (numeric)
Eco temperature.
Value can be found in the published state on the `eco_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_temperature": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `35`.
The unit of this value is `°C`.

### Force (enum)
Force the valve position.
Value can be found in the published state on the `force` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"force": NEW_VALUE}`.
The possible values are: `normal`, `open`, `close`.

### Max_temperature (numeric)
Maximum temperature.
Value can be found in the published state on the `max_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature": NEW_VALUE}`.
The minimal value is `15` and the maximum value is `35`.
The unit of this value is `°C`.

### Min_temperature (numeric)
Minimum temperature.
Value can be found in the published state on the `min_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_temperature": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `15`.
The unit of this value is `°C`.

### Away_preset_temperature (numeric)
Away preset temperature.
Value can be found in the published state on the `away_preset_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"away_preset_temperature": NEW_VALUE}`.
The minimal value is `-10` and the maximum value is `35`.
The unit of this value is `°C`.

### Programming_mode (composite)
Schedule MODE ⏱ - In this mode, the device executes a preset week programming temperature time and temperature..
- `week` (enum): Week format user for schedule allowed values: `5+2`, `6+1`, `7`
- `workdays_schedule` (text) 
- `holidays_schedule` (text) 

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

