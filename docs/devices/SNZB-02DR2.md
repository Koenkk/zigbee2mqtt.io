---
title: "SONOFF SNZB-02DR2 control via MQTT"
description: "Integrate your SONOFF SNZB-02DR2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-31T19:12:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF SNZB-02DR2

|     |     |
|-----|-----|
| Model | SNZB-02DR2  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Temperature and humidity sensor with display and relay control |
| Exposes | battery, voltage, temperature, humidity, remote_source_status, source_1_temperature, source_1_temperature_state, source_1_humidity, source_1_humidity_state, source_2_temperature, source_2_temperature_state, source_2_humidity, source_2_humidity_state, comfort_temperature_min, comfort_temperature_max, comfort_humidity_min, comfort_humidity_max, temperature_units, temperature_calibration, humidity_calibration |
| Picture | ![SONOFF SNZB-02DR2](https://www.zigbee2mqtt.io/images/devices/SNZB-02DR2.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Displaying readings from an external sensor

This device can show temperature and humidity coming from another sensor instead
of its own built-in sensor (for example showing an outdoor sensor on the screen).

1. Set `temperature_sensor_select` to `external` to switch the display to the
   external source (set it back to `internal` to show the built-in sensor with
   the min/max view).
2. Push readings to `external_temperature` and `external_humidity`. Values are in
   °C / % (e.g. `external_temperature: 25.5`, `external_humidity: 88`).

Notes:
- Humidity on the external display requires device firmware `1.0.4` or later.
- This is a battery-powered sleepy device, so writes are applied on the next
  poll/check-in; press the button on the back to wake it for an immediate update.

Example Home Assistant automation mirroring another sensor onto the display:

```yaml
alias: SNZB-02DR2 external display
triggers:
  - trigger: state
    entity_id:
      - sensor.outdoor_temperature
      - sensor.outdoor_humidity
conditions:
  - condition: template
    value_template: >-
      {{ states('sensor.outdoor_temperature') not in ['unknown', 'unavailable', 'none']
         and states('sensor.outdoor_humidity') not in ['unknown', 'unavailable', 'none'] }}
actions:
  - action: mqtt.publish
    data:
      topic: zigbee2mqtt/FRIENDLY_NAME/set
      payload: >-
        {
          "temperature_sensor_select": "external",
          "external_temperature": {{ states('sensor.outdoor_temperature') | float | round(1) }},
          "external_humidity": {{ states('sensor.outdoor_humidity') | float | round(0) }}
        }
mode: single
```
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Reported battery voltage in millivolts.
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `mV`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Remote source status (enum)
Overall remote source status. Setting unbound clears all items, offline marks every bound item offline..
Value can be found in the published state on the `remote_source_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"remote_source_status": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"remote_source_status": NEW_VALUE}`.
The possible values are: `unbound`, `using`, `offline`.

### Source 1 temperature (numeric)
Displays the bound remote sensor's temperature on the device screen, updating automatically every 30 minutes or manually by briefly pressing the button on the back of the SNZB-02DR2..
Value can be found in the published state on the `source_1_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"source_1_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"source_1_temperature": NEW_VALUE}`.
The minimal value is `-20` and the maximum value is `60`.
The unit of this value is `°C`.

### Source 1 temperature state (enum)
State of the source 1 temperature item. State-only online/restored updates do not overwrite the stored measurement..
Value can be found in the published state on the `source_1_temperature_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"source_1_temperature_state": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"source_1_temperature_state": NEW_VALUE}`.
The possible values are: `unbound`, `online`, `offline`, `restored`.

### Source 1 humidity (numeric)
Displays the bound remote sensor's humidity on the device screen, updating automatically every 30 minutes or manually by briefly pressing the button on the back of the SNZB-02DR2..
Value can be found in the published state on the `source_1_humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"source_1_humidity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"source_1_humidity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `99.9`.
The unit of this value is `%`.

### Source 1 humidity state (enum)
State of the source 1 humidity item. State-only online/restored updates do not overwrite the stored measurement..
Value can be found in the published state on the `source_1_humidity_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"source_1_humidity_state": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"source_1_humidity_state": NEW_VALUE}`.
The possible values are: `unbound`, `online`, `offline`, `restored`.

### Source 2 temperature (numeric)
Displays the bound remote sensor's temperature on the device screen, updating automatically every 30 minutes or manually by briefly pressing the button on the back of the SNZB-02DR2..
Value can be found in the published state on the `source_2_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"source_2_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"source_2_temperature": NEW_VALUE}`.
The minimal value is `-20` and the maximum value is `60`.
The unit of this value is `°C`.

### Source 2 temperature state (enum)
State of the source 2 temperature item. State-only online/restored updates do not overwrite the stored measurement..
Value can be found in the published state on the `source_2_temperature_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"source_2_temperature_state": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"source_2_temperature_state": NEW_VALUE}`.
The possible values are: `unbound`, `online`, `offline`, `restored`.

### Source 2 humidity (numeric)
Displays the bound remote sensor's humidity on the device screen, updating automatically every 30 minutes or manually by briefly pressing the button on the back of the SNZB-02DR2..
Value can be found in the published state on the `source_2_humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"source_2_humidity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"source_2_humidity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `99.9`.
The unit of this value is `%`.

### Source 2 humidity state (enum)
State of the source 2 humidity item. State-only online/restored updates do not overwrite the stored measurement..
Value can be found in the published state on the `source_2_humidity_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"source_2_humidity_state": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"source_2_humidity_state": NEW_VALUE}`.
The possible values are: `unbound`, `online`, `offline`, `restored`.

### Comfort temperature min (numeric)
Minimum temperature that is considered comfortable. The device will display ❄️ when the temperature is lower than this value. Note: wake up the device by pressing the button on the back before changing this value..
Value can be found in the published state on the `comfort_temperature_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"comfort_temperature_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature_min": NEW_VALUE}`.
The minimal value is `-10` and the maximum value is `60`.
The unit of this value is `°C`.

### Comfort temperature max (numeric)
Maximum temperature that is considered comfortable. The device will display 🔥 when the temperature is higher than this value. Note: wake up the device by pressing the button on the back before changing this value..
Value can be found in the published state on the `comfort_temperature_max` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"comfort_temperature_max": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature_max": NEW_VALUE}`.
The minimal value is `-10` and the maximum value is `60`.
The unit of this value is `°C`.

### Comfort humidity min (numeric)
Minimum relative humidity that is considered comfortable. The device will display ☀️ when the humidity is lower than this value. Note: wake up the device by pressing the button on the back before changing this value..
Value can be found in the published state on the `comfort_humidity_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"comfort_humidity_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_humidity_min": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `95`.
The unit of this value is `%`.

### Comfort humidity max (numeric)
Maximum relative humidity that is considered comfortable. The device will display 💧 when the humidity is higher than this value. Note: wake up the device by pressing the button on the back before changing this value..
Value can be found in the published state on the `comfort_humidity_max` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"comfort_humidity_max": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_humidity_max": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `95`.
The unit of this value is `%`.

### Temperature units (enum)
The unit of the temperature displayed on the device screen. Note: wake up the device by pressing the button on the back before changing this value..
Value can be found in the published state on the `temperature_units` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_units": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_units": NEW_VALUE}`.
The possible values are: `celsius`, `fahrenheit`.

### Temperature calibration (numeric)
Offset to add/subtract to the reported temperature.
Value can be found in the published state on the `temperature_calibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_calibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_calibration": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `°C`.

### Humidity calibration (numeric)
Offset to add/subtract to the reported relative humidity.
Value can be found in the published state on the `humidity_calibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_calibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_calibration": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `%`.

