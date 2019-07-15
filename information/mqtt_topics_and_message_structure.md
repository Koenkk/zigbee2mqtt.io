# MQTT topics and message structure

This page describes which MQTT topics are used by Zigbee2mqtt. Note that the base topic (by default `zigbee2mqtt`) is configurable in the [Zigbee2mqtt `configuration.yaml`](../configuration/configuration.md).

## zigbee2mqtt/bridge/state
zigbee2mqtt publishes the bridge state to this topic. Possible message are:
* `"online"`: published when the bridge is running (on startup)
* `"offline"`: published right before the bridge stops

## zigbee2mqtt/bridge/config
zigbee2mqtt publishes it configuration to this topic containing the `log_level` and `permit_join`.

## zigbee2mqtt/bridge/log
zigbee2mqtt will output log to this endpoint. Message are always in the form of `{"type":"TYPE","message":"MESSAGE"}`. Possible message types are:
* `"pairing"`: logging when device is connecting to the network.
* `"device_connected"`: send when a new device connects to the network.
* `"device_removed"`: send when a device is removed from the network.
* `"device_banned"`: send when a device is banned from the network.
* `"device_whitelisted"`: send when a device is whitelisted from the network.
* `"device_renamed"`: send when a device is renamed.
* `"device_bind"`: send when a device is bound.
* `"device_unbind"`: send when a device is unbound.
* `"device_group_add"`: send when a device is added to a group.
* `"device_group_remove"`: send when a device is removed from a group.
* `"device_group_remove_all"`: send when a device is removed from all groups.
* `"devices"`: a list of all devices, this message can be triggered by sending a message to `zigbee2mqtt/bridge/config/devices` (payload doesn't matter).
* `"groups"`: a list of all groups, this message can be triggered by sending a message to `zigbee2mqtt/bridge/config/groups` (payload doesn't matter).
* `"zigbee_publish_error"`: logged when a Zigbee publish errors occurs, contains the error and metadata containing the device and command.

## zigbee2mqtt/bridge/config/devices/get
Allows you to retrieve all connected devices. Publish an empty payload to this topic. Response will be published to `zigbee2mqtt/bridge/config/devices`.

## zigbee2mqtt/bridge/config/permit_join
Allows you to permit joining of new devices via MQTT. This is not persistent (will not be saved to `configuration.yaml`). Possible messages are:
* `"true"`: permit joining of new devices
* `"false"`: disable joining of new devices

## zigbee2mqtt/bridge/config/last_seen
Allows you to set the `advanced` -> `last_seen` configuration option. See [Configuration](../configuration/configuration.md) for possible values.

## zigbee2mqtt/bridge/config/elapsed
Allows you to set the `advanced` -> `elapsed` configuration option. See [Configuration](../configuration/configuration.md) for possible values.

## zigbee2mqtt/bridge/config/reset
Resets the ZNP (CC2530/CC2531).

## zigbee2mqtt/bridge/config/log_level
Allows you to switch the `log_level` during runtime. This is not persistent (will not be saved to `configuration.yaml`). Possible payloads are: `"debug"`, `"info"`, `"warn"`, `"error"`.

## zigbee2mqtt/bridge/config/device_options
Allows you to change device specific options during runtime. Options can only be changed, not added or deleted. The payload should be a JSON message, example:

```json
{
  "friendly_name": "motion_sensor_toilet",
  "options": {
    "occupancy_timeout": 100
  }
}
```

## zigbee2mqtt/bridge/config/remove
Allows you to remove devices from the network. Payload should be the `friendly_name`, e.g. `0x00158d0001b79111`. On successful remove a [`device_removed`](https://www.zigbee2mqtt.io/information/mqtt_topics_and_message_structure.html#zigbee2mqttbridgelog) message is send.

## zigbee2mqtt/bridge/config/ban
Allows you to ban devices from the network. Payload should be the `friendly_name`, e.g. `0x00158d0001b79111`. On successful ban a [`device_banned`](https://www.zigbee2mqtt.io/information/mqtt_topics_and_message_structure.html#zigbee2mqttbridgelog) message is send.

## zigbee2mqtt/bridge/config/whitelist
Allows you to whitelist devices in the network. Payload should be the `friendly_name`, e.g. `0x00158d0001b79111`. On successful ban a [`device_whitelisted`](https://www.zigbee2mqtt.io/information/mqtt_topics_and_message_structure.html#zigbee2mqttbridgelog) message is send. Note that when devices are whitelisted, all device which are not whitelisted will be removed from the network.

## zigbee2mqtt/bridge/config/rename
Allows you to change the `friendly_name` of a device on the fly.
Format should be: `{"old": "OLD_FRIENDLY_NAME", "new": "NEW_FRIENDLY_NAME"}`.

## zigbee2mqtt/bridge/config/add_group
Allows you to add a group, payload should be the name of the group, e.g. `my_group`.

## zigbee2mqtt/bridge/config/remove_group
Allows you to remove a group, payload should be the name of the group, e.g. `my_group`.

## zigbee2mqtt/bridge/networkmap
Allows you to retrieve a map of your zigbee network. Possible payloads are `raw` and `graphviz`. Zigbee2mqtt will send the networkmap to topic `zigbee2mqtt/bridge/networkmap/[graphviz OR raw]`. <br /> Use [webgraphviz.com](http://www.webgraphviz.com/) or other Tools to generate Network Graph. <br /> **NOTE:** zigbee2mqtt 1.2.1+ required.

The graphviz map shows the devices as follows:
* Coordinator :  rectangle with bold outline
* Router : rectangle with rounded corners
* End device : rectangle with rounded corners and dashed outline

Links are labelled with link quality (0..255) and active routes (listed by short 16 bit destination address). Arrow indicates direction of messaging. Coordinator and routers will typically have two lines for each connection showing bi-directional message path. Line style is:
* To end devices : normal line
* To and between coordinator and routers : heavy line for active routes or thin line for no active routes

To request a networkmap with routes use `zigbee2mqtt/bridge/networkmap/routes` as topic.

## zigbee2mqtt/bridge/group/[friendly_name]/(add|remove|remove_all)
See [Groups](groups.md)

## zigbee2mqtt/bridge/(bind|unbind)/[friendly_name]
See [Binding](binding.md)

## zigbee2mqtt/bridge/device/[friendly_name]/get_group_membership
Returns the list of groups a device is in, and its group capacity.

## zigbee2mqtt/[DEVICE_ID]
Where `[DEVICE_ID]` is E.G. `0x00158d0001b79111`. Message published to this topic are **always** in a JSON format. Each device produces a different JSON message, **some** examples:

**Xiaomi MiJia temperature & humidity sensor (WSDCGQ01LM)**
```json
{
  "temperature": 27.34,
  "humidity": 44.72
}
```

**Xiaomi MiJia wireless switch (WXKG01LM)**
```json
{
  "click": "double"
}
```

**Xiaomi MiJia human body movement sensor (RTCGQ01LM)**
```json
{
  "occupancy": true
}
```

**IKEA TRADFRI LED bulb E27 980 lumen, dimmable, white spectrum, opal white (LED1545G12)**
```json
{
  "state": "ON",
  "brightness": 215,
  "color_temp": 325
}
```

**Xiaomi Aqara curtain motor (ZNCLDJ11LM)**
```js
{
  "position": 60,       // Value between 0 and 100, (0 - closed / 100 - open)
  "running": true,      // Curtain is moving
}
```

## zigbee2mqtt/[DEVICE_ID]/set
Publishing messages to this topic allows you to control your Zigbee devices via MQTT. Only accepts JSON messages. An example to control a Philips Hue Go (7146060PH).

```js
{
  "state": "ON", // Or "OFF", "TOGGLE"
  "brightness": 255,
  "color_temp": 155,
  "color": {
    // XY color
    "x": 0.123,
    "y": 0.123,

    // OR

    // RGB color
    "r": 46,
    "g": 102,
    "b": 193,

    // OR

    // HEX color
    "hex": "#547CFF",

    // OR

    // Hue and/or saturation color
    "hue": 360,
    "saturation": 100
  },

  // Blinks the bulbs, possible values:
  // - "select": single blink
  // - "lselect": blinking for a longer time
  // - "none": stop blinking
  "alert": "select",

  // Specifies the number of seconds the transition to this state takes (0 by default).
  "transition": 3,
}
```

`transition` specifies the number of seconds the transition to this state takes (0 by default).

Remove attributes which are not supported for your device. E.G. in case of a Xiaomi Mi power plug ZigBee (ZNCZ02LM) only send the `"state"` attribute.

### Without JSON
In case you don't want to use JSON, publishing to `zigbee2mqtt/[DEVICE_ID]/set/state` with payload `ON` is the same as publishing to `zigbee2mqtt/[DEVICE_ID]/set`
```js
{
  "state": "ON"
}
```

## zigbee2mqtt/[DEVICE_ID]/get
This is the counterpart of the `set` command. It allows you to read a value from a device. To read e.g. the state of a device send the payload:

```js
{
  "state": ""
}
```

## homeassistant/[DEVICE_TYPE]/[DEVICE_ID]/[OBJECT_ID]/config
Only used when `homeassistant: true` in `configuration.yaml`. Required for [Home Assistant MQTT discovery](https://www.home-assistant.io/docs/mqtt/discovery/).

## Device specific
Device specific commands are always send to the topic: `zigbee2mqtt/[DEVICE_ID]/set`. Some commands also support reading of current value by sending request to `zigbee2mqtt/[DEVICE_ID]/get`. Below you will find the possible payloads.

### Philips Hue power-on behavior
Sets the Philips Hue power-on behavior which was introduced with the November/December '18 firmware update.
```js
{
  "hue_power_on_behavior": "on",          //default, on, off, recover, default = on
  "hue_power_on_brightness": 125,         //default, same values as brightness, default = 255
  "hue_power_on_color_temperature": 280,  //default, same values as color_temp, default = 366
}
```

Attribute Value | Description
----------------|-----------------------------------------------
default         | reset to factory default value
on              | lamps on after power loss with configured brightness, color-temperature, color (to-do)
off             | lamps off after power loss
recover         | last running state after power loss

### Philips Hue motion detector (SML001)
Sets the sensors timeout between last motion detected
and sensor reports occupance false
```js
{
    // Value >= 0,
    // 0 - 10: 10sec (min possible timeout)
    //   > 10: timeout in sec
    // (must be written to (default) endpoint 2)
    "occupancy_timeout": 0,
}
```

### Xiaomi Aqara vibration sensor (DJT11LM)
Set the sensitivity of the sensor. **NOTE:** As this device is sleeping most of the time, right before sending this command press the button on the device.
```js
{
  "sensitivity": "medium"     // Possible values: 'low', 'medium', 'high'
}
```

### Xiaomi MiJia gas leak detector (JTQJBF01LMBW)
Set/read the sensitivity of the sensor.
```js
{
  "sensitivity": "medium"     // Possible values; to set: 'low', 'medium', 'high'; to read: 'read'
}
```

Execute selftest
```json
{
  "selftest": ""
}
```

### Xiaomi Aqara curtain motor (ZNCLDJ11LM)
Set the state of the curtain.
```js
{
  "state": "open"       // Possible values to set: 'open', 'close', 'stop'
}
```

Set the position of the curtain.
```js
{
  "position": 50      // Possible values to set: 0 - 100 (0 - closed / 100 - open)
}
```

### Xiaomi Aqara wired wall switch (QBKG03LM, QBKG04LM, QBKG12LM and QBKG11LM)
Decoupled mode allows to turn wired switch into wireless button with separately controlled relay.
This might be useful to assign some custom actions to buttons and control relay remotely.
This command also allows to redefine which button controls which relay for double switch.

Special topics should be used:

`zigbee2mqtt/[DEVICE_ID]/system/set` to modify operation mode.

Payload:
```js
{
  "operation_mode": {
    "button": "single"|"left"|"right",
    "state": "VALUE"
  }
}
```

Values                | Description
----------------------|---------------------------------------------------------
`control_relay`       | Button directly controls relay (for single switch)
`control_left_relay`  | Button directly controls left relay (for double switch)
`control_right_relay` | Button directly controls right relay (for double switch)
`decoupled`           | Button doesn't control any relay

`zigbee2mqtt/[DEVICE_ID]/system/get` to read current mode.

Payload:
```js
{
  "operation_mode": {
    "button": "single"|"left"|"right"
  }
}
```

Response will be sent to `zigbee2mqtt/[DEVICE_ID]`:
```json
{"operation_mode_right":"control_right_relay"}
```

### SmartThings arrival sensor (STS-PRS-251)
Let the device beep.
```json
{
  "beep": 5
}
```

### Osram/Sylvania LED (Various)
**Set default power on/off transition 'osram_set_transition'**

Various Osram/Sylvania LED support setting a default transition when turning a light on and off.
```js
{
  "osram_set_transition": 0.1,            //time in seconds (integer or float)
}
```
**Remember current light state 'osram_remember_state'**

Various Osram/Sylvania LED support remembering their current state in case of power loss, or if a light is manually switched off then on. Lights will remember their respective attributes (i.e. brightness, color, saturation, etc.). NOTE: This must be executed everytime you make changes to a light's attributes for it to then 'remember' it.
```js
{
  "osram_remember_state": true,            // true, false (boolean)
}
```


### eCozy Smart heating thermostat (1TST-EU), Bitron Wireless wall thermostat with relay (AV2010/32)
Get local temperature in degrees Celsius (in the range 0x954d to 0x7fff, i.e. -273.15°C to 327.67 ºC)
```json
{
  "local_temperature": ""
}
```

Get or set offset added to/subtracted from the actual displayed room temperature to NUMBER, in steps of 0.1°C
```js
{
  "local_temperature_calibration": "NUMBER"       // Possible values: –2.5 to +2.5; leave empty to read
}
```

Set temperature display mode
```js
{
  "temperature_display_mode": ""      // Possible values: 0 to set °C or 1 so set °F
}
```

Get room occupancy. Specifies whether the heated/cooled space is occupied or not. If 1, the space is occupied, else it is unoccupied.
```json
{
  "thermostat_occupancy": ""
}
```

Get or set occupied heating setpoint to NUMBER in degrees Celsius.
```js
{
  "occupied_heating_setpoint": "NUMBER"       // Possible values: MinHeatSetpointLimit to  MaxHeatSetpointLimit, i.e. 7 to 30 by default; leave empty to read
}
```

Get or set unoccupied heating setpoint to NUMBER in degrees Celsius
```js
{
  "unoccupied_heating_setpoint": "NUMBER"       // Possible values: MinHeatSetpointLimit to MaxHeatSetpointLimit, i.e. 7 to 30 by default; leave empty to read
}
```

Increase or decrease heating setpoint by NUMBER degrees in °C.
```js
{
  "setpoint_raise_lower": {
    "mode": "0x00",       // Possible values: see table below
    "amount": "NUMBER"    // Possible values: signed 8-bit integer that specifies the amount the setpoint(s) are to be increased (or decreased) by, in steps of 0.1°C
  }
}
```

Attribute Value | Description
----------------|-----------------------------------------------
0x00            | Heat (adjust Heat Setpoint)
0x01            | Cool (adjust Cool Setpoint)
0x02            | Both (adjust Heat Setpoint and Cool Setpoint)

Get or set whether the local temperature, outdoor temperature and occupancy are being sensed by internal sensors or remote networked sensors
```js
{
  "remote_sensing": "NUMBER"      // Possible values: see table below; leave empty to read
}
```

Bit Number | Description
-----------|-----------------------------------------
0          | 0 – local temperature sensed internally <br> 1 – local temperature sensed remotely
1          | 0 – outdoor temperature sensed internally <br> 1 – outdoor temperature sensed remotely
2          | 0 – occupancy sensed internally <br> 1 – occupancy sensed remotely

Get or set control sequence of operation
```js
{
  "control_sequence_of_operation": "VALUE"       // Possible values: see table below; leave empty to read
}
```

Values                                    | Possible Values of SystemMode
------------------------------------------|-------------------------------------
`cooling only`                            | Heat and Emergency are not possible
`cooling with reheat`                     | Heat and Emergency are not possible
`heating only`                            | Cool and precooling are not possible
`heating with reheat`                     | Cool and precooling are not possible
`cooling and heating 4-pipes`             | All modes are possible
`cooling and heating 4-pipes with reheat` | All modes are possible

Get or set system mode
```js
{
  "system_mode": "VALUE"       // Possible values: see table below; leave empty to read
}
```

Values              |
--------------------|
`off`               |
`auto`              |
`cool`              |
`heat`              |
`emergency heating` |
`precooling`        |
`fan only`          |
`dry`               |
`sleep`             |

Get running state
```js
{
  "running_state": ""       // leave empty when reading
}
```
Possible values:

Values |
-------|
`off`  |
`cool` |
`heat` |

Valve position / heating demand
```
{
  "pi_heating_demand": 0       // leave empty when reading
}
```
Will report the valve position or heating amount depending on device. 0=min, 255=max

Get or set weekly schedule
```js
{
  "weekly_schedule": {
    "TemperatureSetpointHold": "0x00",                // 0x00 setpoint hold off or 0x01 on
    "TemperatureSetpointHoldDuration": "0xffff",      // 0xffff to 0x05a0
    "ThermostatProgrammingOperationMode": "00xxxxxx"  //see table below
  }                                                   // leave empty to read
}
```

Attribute Value | Description
----------------|---------------------------------------------------------------------------
0               | 0 – Simple/setpoint mode. This mode means the thermostat setpoint is altered only by manual up/down changes at the thermostat or remotely, not by internal schedule programming. <br> 1 – Schedule programming mode. This enables or disables any programmed weekly schedule configurations. <br> Note: It does not clear or delete previous weekly schedule programming configurations.
1               | 0 - Auto/recovery mode set to OFF <br> 1 – Auto/recovery mode set to ON
2               | 0 – Economy/EnergyStar mode set to OFF <br> 1 – Economy/EnergyStar mode set to ON

Clear weekly schedule
```json
{
  "clear_weekly_schedule": ""
}
```
<!--
Coming soon:
Get weekly schedule response
tz.thermostat_weekly_schedule_rsp
Get relay status log
tz.thermostat_relay_status_log
Get relay status log response
tz.thermostat_relay_status_log_rsp
-->

#### Eurotronic Spirit Zigbee specific attributes
*Current heating setpoint*
```json
{
  "current_heating_setpoint": 21.5
}
```
Current heating setpoint is also modified when occupied or unoccupied heating setpoint is set.

*Eurotronic system mode*

This is a bitmap encoded field to set several device specific features. Please remind it is not possible to set single bits, always the full bitmap is written. Bit 0 doesnt seem to be writeable, it is always reported as set, so expect your written value + 1 to be reported.

Bit | Position
--- | --------
0 | unknown (default 1)
1 | Mirror display
2 | Boost
3 | unknown
4 | disable window open
5 | set window open (is reported as disable window open)
6 | unknown
7 | Child protection

Examples for eurotronic_system_mode:

Mirror display, reported as 3
```json
{
  "eurotronic_system_mode": 2
}
```
signal external window open, current_heating_setpoint will report "5", device display shows "OFF"
```json
{
  "eurotronic_system_mode": 32
}
```
signal external window close, will restore last current_heating_setpoint value
```json
{
  "eurotronic_system_mode": 16
}
```
Mirror display and set child protection.
```json
{
  "eurotronic_system_mode": 66
}
```

*Eurotronic error status*
```json
{
  "eurotronic_error_status": 0
}
```
This field is a readonly bitmap

Bit | Position
--- | --------
0 | reserved
1 | reserved
2 | reserved
3 | Valve adaption failed (E1)
4 | Valve movement too slow (E2)
5 | Valve not moving/blocked (E3)
6 | reserved
7 | reserved
