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
| Supports | power measurements |
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


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "W"
    icon: "mdi:flash"
    value_template: "{{ value_json.power }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "V"
    icon: "mdi:alpha-v"
    value_template: "{{ value_json.voltage }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "A"
    icon: "mdi:current-ac"
    value_template: "{{ value_json.current }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "kWh"
    icon: "mdi:power-plug"
    value_template: "{{ value_json.energy }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "A"
    icon: "mdi:current-ac"
    value_template: "{{ value_json.current_phase_b }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "A"
    icon: "mdi:current-ac"
    value_template: "{{ value_json.current_phase_c }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "V"
    icon: "mdi:alpha-v"
    value_template: "{{ value_json.voltage_phase_b }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "V"
    icon: "mdi:alpha-v"
    value_template: "{{ value_json.voltage_phase_c }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


