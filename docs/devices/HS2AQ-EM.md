---
title: "HEIMAN HS2AQ-EM control via MQTT"
description: "Integrate your HEIMAN HS2AQ-EM via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/HS2AQ-EM.md)*

# HEIMAN HS2AQ-EM

| Model | HS2AQ-EM  |
| Vendor  | HEIMAN  |
| Description | Air quality monitor |
| Exposes | battery, temperature, humidity, pm25, hcho, voc, aqi, pm10, battery_state, linkquality |
| Picture | ![HEIMAN HS2AQ-EM](../images/devices/HS2AQ-EM.jpg) |

## Notes

None


## Exposes
### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Pm25 (numeric)
Measured PM2.5 (particulate matter) concentration.
Value can be found in the published state on the `pm25` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `µg/m³`.

### Hcho (numeric)
Measured Hcho value.
Value can be found in the published state on the `hcho` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `µg/m³`.

### Voc (numeric)
Measured VOC value.
Value can be found in the published state on the `voc` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ppb`.

### Aqi (numeric)
Air quality index.
Value can be found in the published state on the `aqi` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Pm10 (numeric)
Measured PM10 (particulate matter) concentration.
Value can be found in the published state on the `pm10` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `µg/m³`.

### Battery_state (enum)
Value can be found in the published state on the `battery_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `not_charging`, `charging`, `charged`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimimal value is `0` and the maximum value is `255`.
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
    unit_of_measurement: "%"
    value_template: "{{ value_json.battery }}"
    device_class: "battery"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "°C"
    value_template: "{{ value_json.temperature }}"
    device_class: "temperature"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "%"
    value_template: "{{ value_json.humidity }}"
    device_class: "humidity"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "µg/m³"
    value_template: "{{ value_json.pm25 }}"
    icon: "mdi:air-filter"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "µg/m³"
    value_template: "{{ value_json.hcho }}"
    icon: "mdi:air-filter"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "ppb"
    value_template: "{{ value_json.voc }}"
    icon: "mdi:air-filter"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.aqi }}"
    icon: "mdi:air-filter"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "µg/m³"
    value_template: "{{ value_json.pm10 }}"
    icon: "mdi:air-filter"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.battery_state }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
    icon: "mdi:signal"
```
{% endraw %}


