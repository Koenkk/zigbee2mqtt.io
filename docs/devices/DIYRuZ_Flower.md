---
title: "DIYRuZ DIYRuZ_Flower control via MQTT"
description: "Integrate your DIYRuZ DIYRuZ_Flower via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/DIYRuZ_Flower.md)*

# DIYRuZ DIYRuZ_Flower

| Model | DIYRuZ_Flower  |
| Vendor  | DIYRuZ  |
| Description | [Flower sensor](http://modkam.ru/?p=1700) |
| Exposes | soil_moisture, battery, illuminance, humidity, pressure, temperature, linkquality |
| Picture | ![DIYRuZ DIYRuZ_Flower](../images/devices/DIYRuZ_Flower.jpg) |

## Notes

### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*

* `illuminance_lux_precision`: Controls the precision of `illuminance_lux` values, e.g. `0` or `1`; default `1`.
To control the precision based on the illuminance_lux value set it to e.g. `{1000: 0, 100: 1}`,
when illuminance_lux >= 1000 precision will be 0, when illuminance_lux >= 100 precision will be 1.


* `illuminance_lux_calibration`: Allows to manually calibrate illuminance values,
e.g. `95` would take 95% to the illuminance reported by the device; default `100`.


* `temperature_precision`: Controls the precision of `temperature` values,
e.g. `0`, `1` or `2`; default `2`.
To control the precision based on the temperature value set it to e.g. `{30: 0, 10: 1}`,
when temperature >= 30 precision will be 0, when temperature >= 10 precision will be 1.
* `temperature_calibration`: Allows to manually calibrate temperature values,
e.g. `1` would add 1 degree to the temperature reported by the device; default `0`.


* `humidity_precision`: Controls the precision of `humidity` values, e.g. `0`, `1` or `2`; default `2`.
To control the precision based on the humidity value set it to e.g. `{80: 0, 10: 1}`,
when humidity >= 80 precision will be 0, when humidity >= 10 precision will be 1.


* `pressure_precision`: Controls the precision of `pressure` values, e.g. `0` or `1`; default `1`.
To control the precision based on the pressure value set it to e.g. `{1000: 0, 100: 1}`,
when pressure >= 1000 precision will be 0, when pressure >= 100 precision will be 1.
* `pressure_calibration`: Allows to manually calibrate pressure values,
e.g. `1` would add 1 to the pressure reported by the device; default `0`.



## Exposes

### Soil_moisture (numeric)
Measured soil moisture value.
Value can be found in the published state on the `soil_moisture` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Illuminance (numeric)
Raw measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Pressure (numeric)
The measured atmospheric pressure.
Value can be found in the published state on the `pressure` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `hPa`.

### Temperature (numeric, ds endpoint)
Measured temperature value.
Value can be found in the published state on the `temperature_ds` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Temperature (numeric, bme endpoint)
Measured temperature value.
Value can be found in the published state on the `temperature_bme` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.soil_moisture }}"
    unit_of_measurement: "%"
    icon: "mdi:water-percent"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.battery }}"
    unit_of_measurement: "%"
    device_class: "battery"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.illuminance }}"
    device_class: "illuminance"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.humidity }}"
    unit_of_measurement: "%"
    device_class: "humidity"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.pressure }}"
    unit_of_measurement: "hPa"
    device_class: "pressure"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.temperature_ds }}"
    unit_of_measurement: "°C"
    device_class: "temperature"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.temperature_bme }}"
    unit_of_measurement: "°C"
    device_class: "temperature"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.linkquality }}"
    unit_of_measurement: "lqi"
    icon: "mdi:signal"
```
{% endraw %}


