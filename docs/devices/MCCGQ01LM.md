---
title: "Xiaomi MCCGQ01LM control via MQTT"
description: "Integrate your Xiaomi MCCGQ01LM via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/MCCGQ01LM.md)*

# Xiaomi MCCGQ01LM

| Model | MCCGQ01LM  |
| Vendor  | Xiaomi  |
| Description | MiJia door & window contact sensor |
| Exposes | battery, contact, voltage, linkquality |
| Picture | ![Xiaomi MCCGQ01LM](../images/devices/MCCGQ01LM.jpg) |

## Notes


### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). The reset button is the small hole in the side of the device - you will need a pin or needle to push into the small hole. After this the device will automatically join.


### Troubleshooting: device stops sending messages/disconnects from network
Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network.
Most of the times this happens because of the following reasons:
- Device has a weak signal, you can see the signal quality in the published messages as `linkquality`. A linkquality < 20 is considered weak.
- Low battery voltage, this can even happen when the battery still appears full. Try a different battery.
- The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, OSRAM, Sylvania, SmartThings, Securifi.

More detailed information about this can be found [here](https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623).


## OpenHAB integration and configuration
In OpenHAB you need the MQTT Binding to be installed. It is possible to add this sensor as a generic MQTT thing, but here it is described how to add the sensor manually via an editor.

To make the following configuration work it is necessary to enable the experimental attribute output in the configuration.yaml.
```yaml
experimental:
    output: attribute
```

### Thing
To add this Xiaomi MCCGQ01LM MiJia door & window contact sensor as Thing it is necessary to embed the Thing into a bridge definition of a MQTT broker. Please consider that for the door window sensor OPEN is false (no contact) and CLOSED is true (contact). So make sure that on(OPEN) = "false" and off(CLOSED) = "true".

```yaml
Bridge mqtt:broker:zigbeeBroker [ host="YourHostname", secure=false, username="your_username", password="your_password" ]
{
    Thing topic MijiaDoorSensor "MiJia door & window contact sensor"  @ "Your room"
    {
        Channels:
            Type contact  : status      "status"      [ stateTopic = "zigbee2mqtt/<FRIENDLY_NAME>/contact", on="false", off="true" ]
            Type number   : voltage     "voltage"     [ stateTopic = "zigbee2mqtt/<FRIENDLY_NAME>/voltage" ]
            Type number   : battery     "battery"     [ stateTopic = "zigbee2mqtt/<FRIENDLY_NAME>/battery" ]
            Type number   : linkquality "linkquality" [ stateTopic = "zigbee2mqtt/<FRIENDLY_NAME>/linkquality" ]
            /****************************************************************************************************
            If you want to know when the sensor has been last changed you can add to your configuration.yaml:
            advanced:
                last_seen: ISO_8601_local

            and add another channel:
            ****************************************************************************************************/
            Type datetime : last_change "last change" [ stateTopic = "zigbee2mqtt/<FRIENDLY_NAME>/last_seen" ]
    }
}
```

### Items
```yaml
Contact  door_window_sensor_isOpen      "open status" <door>                                {channel="mqtt:topic:zigbeeBroker:MijiaDoorSensor:status"}
Number   door_window_sensor_VOLTAGE     "voltage [%d mV]"                                   {channel="mqtt:topic:zigbeeBroker:MijiaDoorSensor:voltage"}
Number   door_window_sensor_BATTERY     "battery [%.1f %%]" <battery>                       {channel="mqtt:topic:zigbeeBroker:MijiaDoorSensor:battery"}
Number   door_window_sensor_LINKQUALITY "link qualitiy [%d]" <qualityofservice>             {channel="mqtt:topic:zigbeeBroker:MijiaDoorSensor:linkquality"}
/* See comment above */
DateTime door_window_sensor_last_change "last change [%1$td.%1$tm.%1$tY %1$tH:%1$tM:%1$tS]" {channel="mqtt:topic:zigbeeBroker:MijiaDoorSensor:last_change"}
```



## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

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
    value_template: "{{ value_json.battery }}"
    unit_of_measurement: "%"
    device_class: "battery"

binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.contact }}"
    payload_on: false
    payload_off: true
    device_class: "door"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.voltage }}"
    unit_of_measurement: "mV"
    device_class: "voltage"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.linkquality }}"
    unit_of_measurement: "lqi"
    icon: "mdi:signal"
```
{% endraw %}


