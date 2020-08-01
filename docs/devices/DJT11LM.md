---
title: "Xiaomi DJT11LM control via MQTT"
description: "Integrate your Xiaomi DJT11LM via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/DJT11LM.md)*

# Xiaomi DJT11LM

| Model | DJT11LM  |
| Vendor  | Xiaomi  |
| Description | Aqara vibration sensor |
| Supports | drop, tilt and touch |
| Picture | ![Xiaomi DJT11LM](../images/devices/DJT11LM.jpg) |

## Notes


### Pairing
Press the reset button for about 5 seconds. The LED lights up 3 times.
Then press the button again every 2 seconds (maximum 20 times).

*NOTE: When you fail to pair a device, try replacing the battery, this could solve the problem.*

### Meaning of `strength` value
The `strength` value, which is reported every 300 seconds after vibration is detected, is the max strength measured during a period of 300 second.


### Troubleshooting: device stops sending messages/disconnects from network
Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network.
Most of the times this happens because of the following reasons:
- Device has a weak signal, you can see the signal quality in the published messages as `linkquality`. A linkquality < 20 is considered weak.
- Low battery voltage, this can even happen when the battery still appears full. Try a different battery.
- The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, OSRAM, Sylvania, SmartThings, Securifi.

More detailed information about this can be found [here](https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623).


### Sensitivity
The sensitivity can be changed by publishing to `zigbee2mqtt/[FRIENDLY_NAME]/set`
`{"sensitivity": "SENSITIVITY"}` where `SENSITIVITY` is one of the following
values: `low`, `medium`,  `high`.

After setting the sensitivity you immediately have to start pressing the reset button with an interval of 1 second until you see Zigbee2MQTT publishing the new sensitivity to MQTT.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:gesture-double-tap"
    value_template: "{{ value_json.action }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "%"
    device_class: "battery"
    value_template: "{{ value_json.battery }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.sensitivity }}"
    icon: "mdi:filter-variant"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.strength }}"
    icon: "mdi:weight"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


