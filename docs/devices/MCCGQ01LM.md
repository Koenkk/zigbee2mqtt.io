---
title: "Xiaomi MCCGQ01LM control via MQTT"
description: "Integrate your Xiaomi MCCGQ01LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/MCCGQ01LM.md)*

# Xiaomi MCCGQ01LM

| Model | MCCGQ01LM  |
| Vendor  | Xiaomi  |
| Description | MiJia door & window contact sensor |
| Supports | contact |
| Picture | ![Xiaomi MCCGQ01LM](../images/devices/MCCGQ01LM.jpg) |

## Notes


### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). The reset button is the small hole in the side of the device - you will need a pin or needle to push into the small hole. After this the device will automatically join.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_on: false
    payload_off: true
    value_template: "{{ value_json.contact }}"
    device_class: "door"

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

## OpenHAB integration and configuration
In OpenHAB you need the MQTT Binding to be installed. It is possible to add this sensor as a generic mqtt thing, but here it is described how to add the sensor manually via an editor.

To make the following configuration work it is neccessary to enable the experimental attribute output in the configuration.yaml.
```yaml
experimental:
  output: attribute
```

### Thing
To add this Xiaomi MCCGQ01LM MiJia door & window contact sensor as Thing it is necessary to embed the Thing into a bridge definition of a mqtt broker. Please concider that for the door window sensor OPEN is false (no contact) and CLOSED is true (contact). So make sure that on(OPEN) = "false" and off(CLOSED) = "true". 

```yaml
Bridge mqtt:broker:zigbeeBroker [ host="YourHostname", secure=false, username="your_username", password="your_password" ]
{
    Thing mqtt:topic:MijiaDoorSensor "MiJia door & window contact sensor"  @ "Your room"
    {
        Channels:
            Type contact  : status      "status"      [ stateTopic = "zigbee2mqtt/<FRIENDLY_NAME>/contact", on="false", off="true" ] 
            Type number   : voltage     "voltage"     [ stateTopic = "zigbee2mqtt/<FRIENDLY_NAME>/voltage" ]
            Type number   : battery     "battery"     [ stateTopic = "zigbee2mqtt/<FRIENDLY_NAME>/battery" ]     
            Type number   : linkquality "linkquality" [ stateTopic = "zigbee2mqtt/<FRIENDLY_NAME>/linkquality" ]
    }
}
```

### Items
```yaml
Contact  door_window_sensor_isOpen      "open status" <door>                    {channel="mqtt:topic:MijiaDoorSensor:status"}
Number   door_window_sensor_VOLTAGE     "voltage [%d mV]"                       {channel="mqtt:topic:MijiaDoorSensor:voltage"}
Number   door_window_sensor_BATTERY     "battery [%.1f %%]" <battery>           {channel="mqtt:topic:MijiaDoorSensor:battery"}
Number   door_window_sensor_LINKQUALITY "link qualitiy [%d]" <qualityofservice> {channel="mqtt:topic:MijiaDoorSensor:linkquality"}
```

