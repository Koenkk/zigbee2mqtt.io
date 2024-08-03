---
title: "Tuya TS011F_plug_1 control via MQTT"
description: "Integrate your Tuya TS011F_plug_1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-10-30T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS011F_plug_1

|     |     |
|-----|-----|
| Model | TS011F_plug_1  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart plug (with power monitoring) |
| Exposes | switch (state), countdown, power_outage_memory, indicator_mode, power, current, voltage, energy, lock (state), linkquality |
| Picture | ![Tuya TS011F_plug_1](https://www.zigbee2mqtt.io/images/devices/TS011F_plug_1.png) |
| White-label | LELLKI TS011F_plug, Neo NAS-WR01B, BlitzWolf BW-SHP15, BlitzWolf BW-SHP13, MatSee Plus PJ-ZSW01, MODEMIX MOD037, MODEMIX MOD048, Coswall CS-AJ-DE2U-ZG-11, Aubess TS011F_plug_1 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Issues with device turning off
[It's been reported by several people that this plug turns off randomly](https://github.com/Koenkk/zigbee2mqtt/issues/11648).  
If you're affected by this, try if it can be solved by [installing an OTA update](../guide/usage/ota_updates.md).

### Broken attribute reporting functionality

Starting with firmware version 1.0.5 (which comes pre-flashed on plugs produced since Q4 2021) core functionality on this plug is broken. TuYa has disabled the automatic reporting of power, voltage and current values meaning they need to be polled instead. The poll interval can be controlled through the `measurement_poll_interval` option.

If your plug is affected, it will be detected as [TS011F_plug_3](TS011F_plug_3.md) instead of `TS011F_plug_1`.

<!-- cfr: https://github.com/Koenkk/zigbee2mqtt/issues/9057 -->

### Broken attribute reporting functionality in devices sold as BW-SHP13

In 2022, BlitzWolf started to sell BW-SHP13 that identify as ```_TZ3000_amdymr7l```. Those devices report power, current and voltage unreliably: Changes in any of those metrics sometimes take a few minutes before being reported and constant loads are reported as 0 for a few minutes just to return to their expected values a few minutes later. There is no known workaround for that behaviour.

<!-- cfr: https://github.com/Koenkk/zigbee2mqtt/issues/11800 -->

### Reset energy

To reset `Sum of consumed energy`, use the Dev console and execute:  
`Endpoint`: `1`   
`Cluster`: `0x00`  
`Command`: `0`  
`Payload`: (don't change this)  

Next time the plug gets polled, `Sum of consumed energy` will start from zero again.

### Reset lock

To reset `Child Lock` without Z2M, quickly press the physical button 4 times

### Pairing
Pair this device with a long press (5 seconds) on the on/off button. The button will flash blue to indicate it's in pairing mode. When the blue flashing stops it should be paired and the led will turn solid red. If the led is solid blue, the device is not paired or paring was not successful.

### Alternative firmware
An alternative firmware version can be installed by creating a custom my_index.json file and setting zigbee_ota_override_index_location as described in the [guide](../guide/usage/ota_updates.md#local-ota-index-and-firmware-files). This firmware can be used if the plug automatically turns off indeterminably or when the overvoltage protection from later versions is unwanted. To use v1.0.13 use the following json file:

```
[
    {
        "fileVersion": 77,
        "fileSize": 307682,
        "manufacturerCode": 4417,
        "imageType": 54179,
        "sha512": "97ea8413e8ab662f2bebf3b013b3030754cbc2c0744b91b14741fff17a2d8d99e7088aa22a3b6e43b3595ccd65433f96d32516fc057fddcc13a816c921af8c97",
        "url": "https://github.com/Koenkk/zigbee-OTA/raw/master/images/Telink/1654157434-oem_zg_tl8258_plug_OTA_1.0.13.bin"
    }
]
```
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Countdown (numeric)
Countdown to turn device off after a certain time.
Value can be found in the published state on the `countdown` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"countdown": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Power outage memory (enum)
Recover state after power outage.
Value can be found in the published state on the `power_outage_memory` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_outage_memory": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_outage_memory": NEW_VALUE}`.
The possible values are: `on`, `off`, `restore`.

### Indicator mode (enum)
LED indicator mode.
Value can be found in the published state on the `indicator_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"indicator_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_mode": NEW_VALUE}`.
The possible values are: `off`, `off/on`, `on/off`, `on`.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Child lock (lock)
The current state of this lock is in the published state under the `child_lock` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": "LOCK"}` or `{"child_lock": "UNLOCK"}`.
It's not possible to read (`/get`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

