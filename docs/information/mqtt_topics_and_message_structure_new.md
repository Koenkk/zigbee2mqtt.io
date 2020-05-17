---
---
# MQTT topics and message structure

This page describes which MQTT topics are used by Zigbee2mqtt. Note that the base topic (by default `zigbee2mqtt`) is configurable in the [Zigbee2mqtt `configuration.yaml`](../information/configuration.md).

## zigbee2mqtt/bridge/info
Contains information of the bridge.
Whenever one of the attributes in the payload changes, this is republished.
Example payload:

```json
{
    "version":"1.13.0-dev",
    "commit":"772f6c0",
    "coordinator":{
        "type":"zStack30x",
        "meta":{"revision":20190425, "transportrev":2, "product":2, "majorrel":2, "minorrel":7, "maintrel":2}
    },
    "logLevel":"debug",
    "permitJoin":true
}
```

## zigbee2mqtt/bridge/state
Contains the state of the bridge, payloads are:
* `online`: published when the bridge is running (on startup)
* `offline`: published right before the bridge stops

## zigbee2mqtt/bridge/devices
Contains the devices connected to the bridge.
Whenever a devices joins or leaves this is republished.
In case `supported = false`, `definition` will be `null`.
Example payload:

```json
[
    {
        "ieeeAddr":"0x00158d00018255df",
        "type":"Router",
        "networkAddress":29159,
        "supported":true,
        "friendlyName":"my_plug",
        "definition":{
            "model":"ZNCZ02LM",
            "vendor":"Xiaomi",
            "description":"Mi power plug ZigBee",
            "supports":"on/off, power measurement"
        },
        "powerSource":"Mains (single phase)",
        "dateCode":"02-28-2017",
        "interviewing":false,
        "interviewCompleted":true
    },
    {
        "ieeeAddr":"0x90fd9ffffe6494fc",
        "type":"Router",
        "networkAddress":57440,
        "supported":true,
        "friendlyName":"my_bulb",
        "definition":{
            "model":"LED1624G9",
            "vendor":"IKEA",
            "description":"TRADFRI LED bulb E14/E26/E27 600 lumen, dimmable, color, opal white",
            "supports":"on/off, brightness, color xy"
        },
        "powerSource":"Mains (single phase)",
        "softwareBuildID":"1.3.009",
        "dateCode":"20180410",
        "interviewing":false,
        "interviewCompleted":true
    }
]
```

## zigbee2mqtt/bridge/groups
Contains the groups.
Whenever a group is added, removed or when devices are added to a group this is republished.
Example payload:

```json
[
    {
        "ID":1,
        "friendlyName":"my_group",
        "members":[
            {
                "ieeeAddr":"0x90fd9ffffe6494fc",
                "endpoint":1
            }
        ]
    }
]
```

## zigbee2mqtt/bridge/event
Events will be published to this topic. Possible types are `deviceJoined`, `deviceInterview`, `deviceLeave`. Example payloads:
- `{"type":"deviceJoined","data":{"friendlyName":"0x90fd9ffffe6494fc","ieeeAddress":"0x90fd9ffffe6494fc"}}`
- `{"type":"deviceInterview","data":{"friendlyName":"0x90fd9ffffe6494fc","status":"started","ieeeAddress":"0x90fd9ffffe6494fc"}}`
- `{"type":"deviceInterview","data":{"friendlyName":"0x90fd9ffffe6494fc","status":"successful","ieeeAddress":"0x90fd9ffffe6494fc","supported":true,"definition":{"model":"LED1624G9","vendor":"IKEA","description":"TRADFRI LED bulb E14/E26/E27 600 lumen, dimmable, color, opal white","supports":"on/off, brightness, color xy"}}}`
- `{"type":"deviceInterview","data":{"friendlyName":"0x90fd9ffffe6494fc","status":"failed","ieeeAddress":"0x90fd9ffffe6494fc"}}`
- `{"type":"deviceLeave","data":{"ieeeAddress":"0x90fd9ffffe6494fc"}}`

## zigbee2mqtt/bridge/request/+
This can be used to e.g. configure certain settings like allowing new devices to join. Zigbee2mqtt will always respond with the same topic on `zigbee2mqtt/bridge/response/+`. The response payload will at least contain a `status` and `data` property. If `status` = `error` it will also contain an `error` property.

Example: when publishing `zigbee2mqtt/bridge/request/permitJoin` with payload `{"value": true}` Zigbee2mqtt will respond to `zigbee2mqtt/bridge/response/permitJoin` with payload `{"data":{"value":true},"status":"ok"}`. In case this request failed the response will be `{"data":{"value":true}, "error": "Permit join failed","status":"error"}`.

Optionally, a `transaction` property can be included in the request. This allows to easily match requests with responses. When a `transaction` property is included Zigbee2mqtt will include it in the response. Example: `zigbee2mqtt/bridge/request/permitJoin` with payload `{"value": true, "transaction":23}` will be responded to on `zigbee2mqtt/bridge/response/permitJoin` with payload `{"data":{"value":true},"status":"ok","transaction":23}`

### Possible requests

#### `zigbee2mqtt/bridge/request/permitJoin`
Allows to permit or disable joining of new devices. Allowed payloads are `{"value": true}`, `{"value": false}`, `true` or `false`. Example response: ``{"data":{"value":true},"status":"ok"}`. This is not persistent (will not be saved to `configuration.yaml`).




TODO:
- add feedback from https://github.com/Koenkk/zigbee2mqtt/issues/3281#issuecomment-629787842
EVERYTHING BELOW THIS IS OLD STUFF

-----------------




## zigbee2mqtt/bridge/config/devices/get
Allows you to retrieve all connected devices. Publish an empty payload to this topic. Response will be published to `zigbee2mqtt/bridge/config/devices`.

## zigbee2mqtt/bridge/config/last_seen
Allows you to set the `advanced` -> `last_seen` configuration option. See [Configuration](../information/configuration.md) for possible values.

## zigbee2mqtt/bridge/config/elapsed
Allows you to set the `advanced` -> `elapsed` configuration option. See [Configuration](../information/configuration.md) for possible values.

## zigbee2mqtt/bridge/config/touchlink/factory_reset
See [Touchlink](./touchlink.md).

## zigbee2mqtt/bridge/ota_update/+
See [OTA updates](./ota_updates.md).

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
Allows you to remove devices from the network. Payload should be the `friendly_name`, e.g. `0x00158d0001b79111`. On successful remove a [`device_removed`](https://www.zigbee2mqtt.io/information/mqtt_topics_and_message_structure.html#zigbee2mqttbridgelog) message is sent.

Note that in Zigbee the coordinator can only **request** a device to remove itself from the network.
Which means that in case a device refuses to respond to this request it is not removed from the network.
This can happen for e.g. battery powered devices which are sleeping and thus not receiving this request.
In this case you will see the following in the zigbee2mqtt log:

```
zigbee2mqtt:info  2019-11-03T13:39:30: Removing 'dimmer'
zigbee2mqtt:error 2019-11-03T13:39:40: Failed to remove dimmer (Error: AREQ - ZDO - mgmtLeaveRsp after 10000ms)
```

An alternative way to remove the device is by factory resetting it, this probably won't work for all devices as it depends on the device itself.
In case the device did remove itself from the network, you will see:

```
zigbee2mqtt:warn  2019-11-03T13:36:18: Device '0x00158d00024a5e57' left the network
```

In case all of the above fails, you can force remove a device. Note that a force remove will **only** remove the device from the database. Until this device is factory reset, it will still hold the network encryption key and thus is still able to communicate over the network!

To force remove a device use the following topic: `zigbee2mqtt/bridge/config/force_remove`

## zigbee2mqtt/bridge/config/ban
Allows you to ban devices from the network. Payload should be the `friendly_name`, e.g. `0x00158d0001b79111`. On successful ban a [`device_banned`](https://www.zigbee2mqtt.io/information/mqtt_topics_and_message_structure.html#zigbee2mqttbridgelog) message is sent.

## zigbee2mqtt/bridge/config/whitelist
Allows you to whitelist devices in the network. Payload should be the `friendly_name`, e.g. `0x00158d0001b79111`. On successful whitelisting a [`device_whitelisted`](https://www.zigbee2mqtt.io/information/mqtt_topics_and_message_structure.html#zigbee2mqttbridgelog) message is sent. Note that when devices are whitelisted, all device which are not whitelisted will be removed from the network.

## zigbee2mqtt/bridge/config/rename
Allows you to change the `friendly_name` of a device or group on the fly.
Format should be: `{"old": "OLD_FRIENDLY_NAME", "new": "NEW_FRIENDLY_NAME"}`.

## zigbee2mqtt/bridge/config/rename_last
Allows you to rename the last joined device. Payload should be the new name e.g. `my_new_device_name`.

## zigbee2mqtt/bridge/config/add_group
Allows you to add a group, payload should be the name of the group, e.g. `my_group`.

In case you also want to specify the group ID, provide the following payload `{"friendly_name": "my_group", "id": 42}`.

## zigbee2mqtt/bridge/config/remove_group
Allows you to remove a group, payload should be the name of the group, e.g. `my_group`.

## zigbee2mqtt/bridge/networkmap
**WARNING: During the networkmap scan your network will be not/less responsive. Depending on the size of your network this can take somewhere between 10 seconds and 2 minutes. Therefore it is recommended to only trigger these scans manually!**

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

## zigbee2mqtt/bridge/configure
Allows to manually trigger a re-configure of the device. Should only be used when the device is not working as expected, also not all devices require this. Payload should be friendly name of the device, e.g. `my_remote`.

## zigbee2mqtt/[FRIENDLY_NAME]
Where `[FRIENDLY_NAME]` is E.G. `0x00158d0001b79111`. Message published to this topic are **always** in a JSON format. Each device produces a different JSON message, **some** examples:

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

## zigbee2mqtt/[FRIENDLY_NAME]/set
Publishing messages to this topic allows you to control your Zigbee devices via MQTT. Only accepts JSON messages. An example to control a Philips Hue Go (7146060PH).

```js
{
  "state": "ON", // Or "OFF", "TOGGLE"
  "brightness": 255, // Value between 0 and 255

  // Color temperature in Reciprocal MegaKelvin, a.k.a. Mirek scale.
  // Mirek = 1,000,000 / Color Temperature in Kelvin
  // Values typically between 50 and 400. The higher the value, the warmer the color.
  "color_temp": 155,

  "color": {
    // XY color
    "x": 0.123,
    "y": 0.123

    // OR

    // RGB color
    "r": 46,
    "g": 102,
    "b": 193

    // OR

    // RGB color
    "rgb": "46,102,193"

    // OR

    // HEX color
    "hex": "#547CFF",

    // OR

    // Hue and/or saturation color
    "hue": 360,
    "saturation": 100

    // OR

    // Hue, saturation, brightness (in HSB space)
    "h": 360,
    "s": 100,
    "b": 100

    // OR

    // Hue, saturation, brightness (in HSB space)
    "hsb": "360,100,100"

    // OR

    // Hue, saturation, brightness (in HSV space)
    "h": 360,
    "s": 100,
    "v": 100

    // OR

    // Hue, saturation, brightness (in HSV space)
    "hsv": "360,100,100"

    // OR

    // Hue, saturation, lightness (in HSL space)
    "h": 360,
    "s": 100,
    "l": 100

    // OR

    // Hue, saturation, brightness (in HSL space)
    "hsl": "360,100,100"
  },

  // Blinks the bulbs, possible values:
  // - "select": single blink
  // - "lselect": blinking for a longer time
  // - "none": stop blinking
  "alert": "select",

  // Specifies the number of seconds the transition to this state takes (0 by default).
  "transition": 3,

  // Instead of setting a brightness by value, you can also move it and stop it after a certain time
  // "brightness_move" will stop at brightnes 1 and won't turn on bulb when they are off.
  // In case you want this you can use "brightness_move_onoff" instead of "brightness_move".
  "brightness_move": -40, // Starts moving the brightness down at 40 units per second
  "brightness_move": "stop", // Stops the brightness move
}
```

`transition` specifies the number of seconds the transition to this state takes (0 by default).

Remove attributes which are not supported for your device. E.G. in case of a Xiaomi Mi power plug ZigBee (ZNCZ02LM) only send the `"state"` attribute.

### Without JSON
In case you don't want to use JSON, publishing to `zigbee2mqtt/[FRIENDLY_NAME]/set/state` with payload `ON` is the same as publishing to `zigbee2mqtt/[FRIENDLY_NAME]/set`
```js
{
  "state": "ON"
}
```

## zigbee2mqtt/[FRIENDLY_NAME]/get
This is the counterpart of the `set` command. It allows you to read a value from a device. To read e.g. the state of a device send the payload:

```js
{
  "state": ""
}
```

## homeassistant/[DEVICE_TYPE]/[IEEEADDR]/[OBJECT_ID]/config
Only used when `homeassistant: true` in `configuration.yaml`. Required for [Home Assistant MQTT discovery](https://www.home-assistant.io/docs/mqtt/discovery/).

## Device specific commands
Some devices offer device specific commands. Example: for the Xiaomi DJT11LM Aqara vibration sensor you can set the `sensitivity`. To find out wether your device supports any specific commands, checkout the device page (which can be reached via the supported devices page).
