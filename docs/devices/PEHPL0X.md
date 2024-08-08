---
title: "Perenio PEHPL0X control via MQTT"
description: "Integrate your Perenio PEHPL0X via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-06-01T15:08:55
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Perenio PEHPL0X

|     |     |
|-----|-----|
| Model | PEHPL0X  |
| Vendor  | [Perenio](/supported-devices/#v=Perenio)  |
| Description | Power link |
| Exposes | switch (state), default_on_off_state, rms_voltage, active_power, consumed_energy, alarm_voltage_min, alarm_voltage_max, alarm_power_max, alarm_consumed_energy, voltage_min, voltage_max, power_max, consumed_energy_limit, rssi, linkquality |
| Picture | ![Perenio PEHPL0X](https://www.zigbee2mqtt.io/images/devices/PEHPL0X.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Default on off state (enum)
Value can be found in the published state on the `default_on_off_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"default_on_off_state": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"default_on_off_state": NEW_VALUE}`.
The possible values are: `on`, `off`, `previous`.

### Rms voltage (numeric)
RMS voltage.
Value can be found in the published state on the `rms_voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Active power (numeric)
Active power.
Value can be found in the published state on the `active_power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Consumed energy (numeric)
Consumed energy.
Value can be found in the published state on the `consumed_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W*h`.

### Alarm voltage min (binary)
Indicates if the alarm is triggered on the voltage drop below the limit, allows to reset alarms.
Value can be found in the published state on the `alarm_voltage_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_voltage_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_voltage_min": NEW_VALUE}`.
If value equals `true` alarm voltage min is ON, if `false` OFF.

### Alarm voltage max (binary)
Indicates if the alarm is triggered on the voltage rise above the limit, allows to reset alarms.
Value can be found in the published state on the `alarm_voltage_max` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_voltage_max": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_voltage_max": NEW_VALUE}`.
If value equals `true` alarm voltage max is ON, if `false` OFF.

### Alarm power max (binary)
Indicates if the alarm is triggered on the active power rise above the limit, allows to reset alarms.
Value can be found in the published state on the `alarm_power_max` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_power_max": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_power_max": NEW_VALUE}`.
If value equals `true` alarm power max is ON, if `false` OFF.

### Alarm consumed energy (binary)
Indicates if the alarm is triggered when the consumption energy limit is reached, allows to reset alarms.
Value can be found in the published state on the `alarm_consumed_energy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_consumed_energy": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_consumed_energy": NEW_VALUE}`.
If value equals `true` alarm consumed energy is ON, if `false` OFF.

### Voltage min (numeric)
Minimum allowable voltage limit for alarms..
Value can be found in the published state on the `voltage_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"voltage_min": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `253`.

### Voltage max (numeric)
Maximum allowable voltage limit for alarms..
Value can be found in the published state on the `voltage_max` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage_max": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"voltage_max": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `253`.

### Power max (numeric)
Maximum allowable power limit for alarms..
Value can be found in the published state on the `power_max` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_max": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_max": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65534`.

### Consumed energy limit (numeric)
Limit of electric energy consumption in kW*h. 0 value represents no limit.
Value can be found in the published state on the `consumed_energy_limit` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"consumed_energy_limit": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"consumed_energy_limit": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65534`.

### Rssi (numeric)
RSSI seen by the device.
Value can be found in the published state on the `rssi` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `-128` and the maximum value is `127`.
The unit of this value is `dB`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

