---
title: "Develco EMIZB-132 control via MQTT"
description: "Integrate your Develco EMIZB-132 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/EMIZB-132.md)*

# Develco EMIZB-132

| Model | EMIZB-132  |
| Vendor  | Develco  |
| Description | Wattle AMS HAN power-meter sensor |
| Exposes | power, energy, current, voltage, current_phase_b, voltage_phase_b, current_phase_c, voltage_phase_c, linkquality |
| Picture | ![Develco EMIZB-132](../images/devices/EMIZB-132.jpg) |

## Notes


### Configuring interface mode
In order to get measurements, after pairing the device you need to configure the interface mode.

To do this send to `zigbee2mqtt/FRIENDLY_NAME/set` payload `{"interface_mode": "INTERFACE_MODE"}`.

Possible values for `INTERFACE_MODE` are:

| Value | Description |
| - | - |
| `norwegian_han` | Norwegian HAN  |
| `norwegian_han_extra_load` | Norwegian HAN – Enable extra load. This is need to enable Adion meter communication |
| `aidon_meter` | Aidon Meter supporting Norwegian HAN HW interface. SW protocol is Aidon Manufacture Specific |
| `kaifa_and_kamstrup` | Kaifa meter and Kamstrup meters running old firmware |

Example of payload: `{"interface_mode": "norwegian_han_extra_load"}`

### Not getting measurements
In case you are not getting any measurements, it could be that your firmware is too old. You can ask Wattle for a replacement.

Related issues:
- https://github.com/Koenkk/zigbee-herdsman-converters/issues/974#issuecomment-590450035
- https://github.com/dresden-elektronik/deconz-rest-plugin/issues/2127#issuecomment-587949747



## Exposes

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

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

### Current_phase_b (numeric)
Instantaneous measured electrical current on phase B.
Value can be found in the published state on the `current_phase_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage_phase_b (numeric)
Measured electrical potential value on phase B.
Value can be found in the published state on the `voltage_phase_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Current_phase_c (numeric)
Instantaneous measured electrical current on phase C.
Value can be found in the published state on the `current_phase_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage_phase_c (numeric)
Measured electrical potential value on phase C.
Value can be found in the published state on the `voltage_phase_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

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
    value_template: "{{ value_json.power }}"
    unit_of_measurement: "W"
    device_class: "power"
    state_class: "measurement"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.energy }}"
    unit_of_measurement: "kWh"
    device_class: "energy"
    state_class: "measurement"
    last_reset_topic: true
    last_reset_value_template: "1970-01-01T00:00:00+00:00"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.current }}"
    unit_of_measurement: "A"
    device_class: "current"
    state_class: "measurement"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.voltage }}"
    unit_of_measurement: "V"
    device_class: "voltage"
    enabled_by_default: false
    state_class: "measurement"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.current_phase_b }}"
    unit_of_measurement: "A"
    device_class: "current"
    state_class: "measurement"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.voltage_phase_b }}"
    unit_of_measurement: "V"
    device_class: "voltage"
    enabled_by_default: false
    state_class: "measurement"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.current_phase_c }}"
    unit_of_measurement: "A"
    device_class: "current"
    state_class: "measurement"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.voltage_phase_c }}"
    unit_of_measurement: "V"
    device_class: "voltage"
    enabled_by_default: false
    state_class: "measurement"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.linkquality }}"
    unit_of_measurement: "lqi"
    enabled_by_default: false
    icon: "mdi:signal"
    state_class: "measurement"
```
{% endraw %}


