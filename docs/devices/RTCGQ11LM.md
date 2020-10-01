---
title: "Xiaomi RTCGQ11LM control via MQTT"
description: "Integrate your Xiaomi RTCGQ11LM via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/RTCGQ11LM.md)*

# Xiaomi RTCGQ11LM

| Model | RTCGQ11LM  |
| Vendor  | Xiaomi  |
| Description | Aqara human body movement and illuminance sensor |
| Supports | occupancy and illuminance |
| Picture | ![Xiaomi RTCGQ11LM](../images/devices/RTCGQ11LM.jpg) |

## Notes


### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join. If this doesn't work, try with a single short button press.


### Troubleshooting: no occupancy, only illuminance is published
Some routers are not able to handle the RTCGQ11LM as a child correctly. This leads to an illuminance value being published but no occupancy.
This mostly seems to happen when the parent of the RTCGQ11LM is an OSRAM device.
A discussion about this can be found [here](https://github.com/Koenkk/zigbee2mqtt/issues/2274). This cannot be fixed from Zigbee2MQTT, make sure the RTCGQ11LM uses another router as it's parent by positioning a non OSRAM device close.


### Troubleshooting: device stops sending messages/disconnects from network
Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network.
Most of the times this happens because of the following reasons:
- Device has a weak signal, you can see the signal quality in the published messages as `linkquality`. A linkquality < 20 is considered weak.
- Low battery voltage, this can even happen when the battery still appears full. Try a different battery.
- The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, OSRAM, Sylvania, SmartThings, Securifi.

More detailed information about this can be found [here](https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623).


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*

* `no_occupancy_since`: Timeout (in seconds) after `no_occupancy_since` is send.
This indicates the time since last occupancy was detected.
For example `no_occupancy_since: [10, 60]` will send a `{"no_occupancy_since": 10}` after 10 seconds
and a `{"no_occupancy_since": 60}` after 60 seconds.
* `occupancy_timeout`: Timeout (in seconds) after the `occupancy: false` message is sent.
If not set, the timeout is `90` seconds.
When set to `0` no `occupancy: false` is send.

**IMPORTANT**: `occupancy_timeout` should not be set to lower than 60 seconds.
The reason is this: after detecting a motion the sensor ignores any movements for
exactly 60 seconds. In case there are movements after this, a new message
(`occupancy: true`) will be sent and the sensor will go for one more minute sleep, and so on.
This is expected behaviour (see [#270](https://github.com/Koenkk/zigbee2mqtt/issues/270#issuecomment-414999973)).
To work around this, a
[hardware modification](https://community.smartthings.com/t/making-xiaomi-motion-sensor-a-super-motion-sensor/139806)
is needed.


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `illuminance_lux_calibration`: Allows to manually calibrate illuminance values,
e.g. `95` would take 95% to the illuminance reported by the device; default `100`.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_on: true
    payload_off: false
    value_template: "{{ value_json.occupancy }}"
    device_class: "motion"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "lx"
    device_class: "illuminance"
    value_template: "{{ value_json.illuminance }}"

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
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


