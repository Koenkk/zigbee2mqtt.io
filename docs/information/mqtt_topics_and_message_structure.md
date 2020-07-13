---
---
# MQTT topics and message structure

This page describes which MQTT topics are used by Zigbee2mqtt. Note that the base topic (by default `zigbee2mqtt`) is configurable in the [Zigbee2mqtt `configuration.yaml`](../information/configuration.md).

## zigbee2mqtt/[FRIENDLY_NAME]
Where `[FRIENDLY_NAME]` is e.g. `0x00158d0001b79111`. Message published to this topic are **always** in a JSON format. Each device produces a different JSON message, **some** examples:

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

  // Similar to brightness_move, color_temp_move will move the color temperature.
  "color_temp_move": 40, // Starts moving the color temperature up at 40 units per second
  "color_temp_move": "stop", // Stops the color temperature move
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
    "log_level":"debug",
    "permit_join":true
}
```

## zigbee2mqtt/bridge/state
Contains the state of the bridge, payloads are:
* `online`: published when the bridge is running (on startup)
* `offline`: published right before the bridge stops

## zigbee2mqtt/bridge/devices
Contains the devices connected to the bridge.
Whenever a devices joins or leaves this is republished.
In case `supported` is `false`, `definition` will be `null`.
Example payload:

```json
[
    {
        "ieee_address":"0x00158d00018255df",
        "type":"Router",
        "network_address":29159,
        "supported":true,
        "friendly_name":"my_plug",
        "definition":{
            "model":"ZNCZ02LM",
            "vendor":"Xiaomi",
            "description":"Mi power plug ZigBee",
            "supports":"on/off, power measurement"
        },
        "power_source":"Mains (single phase)",
        "date_code":"02-28-2017",
        "interviewing":false,
        "interview_completed":true
    },
    {
        "ieee_address":"0x90fd9ffffe6494fc",
        "type":"Router",
        "network_address":57440,
        "supported":true,
        "friendly_name":"my_bulb",
        "definition":{
            "model":"LED1624G9",
            "vendor":"IKEA",
            "description":"TRADFRI LED bulb E14/E26/E27 600 lumen, dimmable, color, opal white",
            "supports":"on/off, brightness, color xy"
        },
        "power_source":"Mains (single phase)",
        "software_build_ID":"1.3.009",
        "date_code":"20180410",
        "interviewing":false,
        "interview_completed":true
    },
    {
        "ieee_address":"0x00169a00022256da",
        "type":"Router",
        "network_address":22160,
        "supported":false,
        "friendly_name":"my_sensor",
        "definition":null,
        "power_source":"Battery",
        "date_code":"04-28-2019",
        "interviewing":false,
        "interview_completed":true
    },
]
```

## zigbee2mqtt/bridge/groups
Contains the groups.
Whenever a group is added/removed or when devices are added/removed from a group this is republished.
Example payload:

```json
[
    {
        "ID":1,
        "friendly_name":"my_group",
        "members":[
            {
                "ieee_address":"0x90fd9ffffe6494fc",
                "endpoint":1
            }
        ]
    }
]
```

## zigbee2mqtt/bridge/event
Events will be published to this topic. Possible types are `device_joined`, `device_interview`, `device_leave`. Example payloads:
- `{"type":"device_joined","data":{"friendly_name":"0x90fd9ffffe6494fc","ieee_address":"0x90fd9ffffe6494fc"}}`
- `{"type":"device_interview","data":{"friendly_name":"0x90fd9ffffe6494fc","status":"started","ieee_address":"0x90fd9ffffe6494fc"}}`
- `{"type":"device_interview","data":{"friendly_name":"0x90fd9ffffe6494fc","status":"successful","ieee_address":"0x90fd9ffffe6494fc","supported":true,"definition":{"model":"LED1624G9","vendor":"IKEA","description":"TRADFRI LED bulb E14/E26/E27 600 lumen, dimmable, color, opal white","supports":"on/off, brightness, color xy"}}}`
- `{"type":"device_interview","data":{"friendly_name":"0x90fd9ffffe6494fc","status":"failed","ieee_address":"0x90fd9ffffe6494fc"}}`
- `{"type":"device_leave","data":{"ieee_address":"0x90fd9ffffe6494fc"}}`

## zigbee2mqtt/bridge/request/+
This can be used to e.g. configure certain settings like allowing new devices to join. Zigbee2mqtt will always respond with the same topic on `zigbee2mqtt/bridge/response/+`. The response payload will at least contain a `status` and `data` property, `status` is either `ok` or `error`. If `status` is `error` it will also contain an `error` property containing a description of the error.

Example: when publishing `zigbee2mqtt/bridge/request/permit_join` with payload `{"value": true}` Zigbee2mqtt will respond to `zigbee2mqtt/bridge/response/permit_join` with payload `{"data":{"value":true},"status":"ok"}`. In case this request failed the response will be `{"data":{}, "error": "Failed to connect to adapter","status":"error"}`.

Optionally, a `transaction` property can be included in the request. This allows to easily match requests with responses. When a `transaction` property is included Zigbee2mqtt will include it in the response. Example: `zigbee2mqtt/bridge/request/permit_join` with payload `{"value": true, "transaction":23}` will be responded to on `zigbee2mqtt/bridge/response/permit_join` with payload `{"data":{"value":true},"status":"ok","transaction":23}`

### Possible requests

#### General
<details>
<summary>zigbee2mqtt/bridge/request/permit_join</summary>

Allows to permit or disable joining of new devices. Allowed payloads are `{"value": true}`, `{"value": false}`, `true` or `false`. Example response: `{"data":{"value":true},"status":"ok"}`. This is not persistent (will not be saved to `configuration.yaml`).
</details>

<details>
<summary>zigbee2mqtt/bridge/request/touchlink/factory_reset</summary>

See [Touchlink](./touchlink.md).
</details>

<details>
<summary>zigbee2mqtt/bridge/request/networkmap</summary>

**WARNING: During the networkmap scan your network will be not/less responsive. Depending on the size of your network this can take somewhere between 10 seconds and 2 minutes. Therefore it is recommended to only trigger these scans manually!**

Allows you to retrieve a map of your Zigbee network. Payload format is `{"type": TYPE, "routes": BOOL}` or `TYPE`, example: `graphviz`, response `{"data":{"value": "NETWORKMAP","type":"graphviz","routes":false},"status":"ok"}`. Possible types are `raw`, `graphviz` and `plantuml`. In case you want to include routes set `routes` to `true`, `routes` is optional and is `false` by default.

Use [webgraphviz.com](http://www.webgraphviz.com/) (for `graphviz`), [planttext.com](https://www.planttext.com/) (for `plantuml`), or other tools to generate the network graph.

The graphviz map shows the devices as follows:
* **Coordinator:** rectangle with bold outline
* **Router:** rectangle with rounded corners
* **End device:** rectangle with rounded corners and dashed outline

Links are labelled with link quality (0..255) and active routes (listed by short 16 bit destination address). Arrow indicates direction of messaging. Coordinator and routers will typically have two lines for each connection showing bi-directional message path. Line style is:
* To **end devices**: normal line
* To and between **coordinator** and **routers**: heavy line for active routes or thin line for no active routes
</details>

#### Device
<details>
<summary>zigbee2mqtt/bridge/request/device/remove</summary>

Removes a device from the network. Allowed payloads are `{"ID": "deviceID"}` or `deviceID` where deviceID can be the `ieee_address` or `friendly_name` of the device. Example; request: `{"ID": "my_bulb"}` or `my_bulb`, response: `{"data":{"ID": "my_bulb","ban":false,"force":false},"status":"ok"}`.

Note that in Zigbee the coordinator can only **request** a device to remove itself from the network.
Which means that in case a device refuses to respond to this request it is not removed from the network.
This can happen for e.g. battery powered devices which are sleeping and thus not receiving this request.
In case removal fails the reponse will be e.g. `{"data":{"ID": "my_bulb","ban":false,"force":false},"status":"error","error":"Failed to remove dimmer (Error: AREQ - ZDO - mgmtLeaveRsp after 10000ms)"}`.

An alternative way to remove the device is by factory resetting it, this probably won't work for all devices as it depends on the device itself.
In case the device did remove itself from the network, you will get a `device_leave` event on `zigbee2mqtt/bridge/event`.

In case all of the above fails, you can force remove a device. Note that a force remove will **only** remove the device from the database. Until this device is factory reset, it will still hold the network encryption key and thus is still able to communicate over the network!
To force remove a device add the optional `force` property (default `false`) to the payload, example: `{"ID":"my_bulb","force":true}`.

In case you also want to ban the device the optional `ban` property (default `false`) can be added, example: `{"ID":"my_bulb","ban":true}`. Note that Zigbee doesn't have a ban functionallity, therefore when a device is banned, Zigbee2mqtt will immediately request the device to remove itself from the network when it joins.
</details>

<details>
<summary>zigbee2mqtt/bridge/request/device/ota_update/check</summary>

See [OTA updates](./ota_updates.md).
</details>

<details>
<summary>zigbee2mqtt/bridge/request/device/ota_update/update</summary>

See [OTA updates](./ota_updates.md).
</details>

<details>
<summary>zigbee2mqtt/bridge/request/device/configure</summary>

Allows to manually trigger a re-configure of the device. Should only be used when the device is not working as expected (e.g. not reporting certain values), not all devices can be configured (only when the defintion has a `configure` in [`devices.js`](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/devices.js)). Allowed payloads are `{"ID": "deviceID"}` or `deviceID` where deviceID can be the `ieee_address` or `friendly_name` of the device. Example; request: `{"ID": "my_remote"}` or `my_remote`, response: `{"data":{"ID": "my_remote"},"status":"ok"}`.
</details>

<details>
<summary>zigbee2mqtt/bridge/request/device/options</summary>

Allows you to change device options on the fly. Existing options can be changed or new ones can be added. Payload format is `{"ID": deviceID,"options": OPTIONS}` where deviceID can be the `ieee_address` or `friendly_name` of the device, example: `{"ID": "my_bulb", "options":{"transition":1}}`. Response will be `{"data":{"from":{"retain":false},"to":{"retain":false,"transition":1},"ID":"my_bulb"},"status":"ok"}`.
</details>

<details>
<summary>zigbee2mqtt/bridge/request/device/rename</summary>

Allows you to change the `friendly_name` of a device on the fly. Payload format is `{"from": deviceID, "to": deviceID}` where deviceID can be the `ieee_address` or `friendly_name` of the device, example: `{"from": "my_bulb", "to": "my_bulb_new_name"}`. Response will be `{"data":{"from":"my_bulb","to":"my_bulb_new_name"},"status":"ok"}`.

In case you want to rename the last joined device, omit the `from` property and set `last` to `true`. Example: `{"last": true, "to": "my_bulb_new_name"}`.
</details>

<details>
<summary>zigbee2mqtt/bridge/request/device/bind</summary>

See [Binding](./binding.md).
</details>

<details>
<summary>zigbee2mqtt/bridge/request/device/unbind</summary>

See [Binding](./binding.md).
</details>

#### Group
<details>
<summary>zigbee2mqtt/bridge/request/group/remove</summary>

Removes a group. Allowed payloads are `{"ID": "groupID"}` or `groupID` where groupID can be the `group_ID` or `friendly_name` of the group. Example; request: `{"ID": "my_group"}` or `my_group`, response: `{"data":{"ID": "my_group", "force": false},"status":"ok"}`.

Group removal can fail if one of the devices fails to remove itself from the group (e.g. due to being offline). In this case you can force a group removal by setting the optional `force` property to `true`, example payload `{"ID": "my_group", "force": true}`. Note that in this case the device will still be in the group, in case the groupID is later reused, the device will be part of that group.
</details>

<details>
<summary>zigbee2mqtt/bridge/request/group/add</summary>

Adds a group. Allowed payloads are `{"friendly_name": NAME, "ID": NUMBER}` or `NAME`. Example; request: `{"ID": 9, "friendly_name": "new_group"}` or `new_group`, response: `{"data":{"ID": 9,"friendly_name":"new_group"},"status":"ok"}`. The `ID` property is optional.
</details>

<details>
<summary>zigbee2mqtt/bridge/request/group/rename</summary>

Allows you to change the `friendly_name` of a group on the fly. Payload format is `{"from": groupID, "to": groupID}` where groupID can be the `groupID` or `friendly_name` of the group, example: `{"from": "my_group", "to": "my_group_new_name"}`. Response will be `{"data":{"from":"my_group","to":"my_group_new_name"},"status":"ok"}`.
</details>

<details>
<summary>zigbee2mqtt/bridge/request/group/options</summary>

Allows you to change group options on the fly. Existing options can be changed or new ones can be added. Payload format is `{"ID": groupID,"options": OPTIONS}` where groupID can be the `group_ID` or `friendly_name` of the group, example: `{"ID": "my_group", "options":{"transition":1}}`. Response will be `{"data":{"from":{"retain":false},"to":{"retain":false,"transition":1},"ID":"my_group"},"status":"ok"}`.
</details>

<details>
<summary>zigbee2mqtt/bridge/request/group/members/add</summary>

See [Groups](./groups.md).
</details>

<details>
<summary>zigbee2mqtt/bridge/request/group/members/remove</summary>

See [Groups](./groups.md).
</details>

<details>
<summary>zigbee2mqtt/bridge/request/group/members/remove_all</summary>

See [Groups](./groups.md).
</details>

#### Configuration
<details>
<summary>zigbee2mqtt/bridge/request/config/last_seen</summary>

Sets `advanced` -> `last_seen` (persistent). Payload format is `{"value": VALUE}`, example: `{"value":"disable"}`, response: `{"data":{"value": "disable"},"status":"ok"}`. See [Configuration](../information/configuration.md) for possible values.
</details>

<details>
<summary>zigbee2mqtt/bridge/request/config/elapsed</summary>

Sets `advanced` -> `elapsed` (persistent). Payload format is `{"value": VALUE}`, example: `{"value":true}`, response: `{"data":{"value": true},"status":"ok"}`. See [Configuration](../information/configuration.md) for possible values.
</details>

<details>
<summary>zigbee2mqtt/bridge/request/config/log_level</summary>

Sets `advanced` -> `log_level` (persistent). Payload format is `{"value": VALUE}`, example: `{"value":"debug"}`, response: `{"data":{"value": "debug"},"status":"ok"}`. See [Configuration](../information/configuration.md) for possible values.
</details>
