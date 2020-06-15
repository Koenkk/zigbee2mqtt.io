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
    },
    {
        "ieeeAddr":"0x00169a00022256da",
        "type":"Router",
        "networkAddress":22160,
        "supported":false,
        "friendlyName":"my_sensor",
        "definition":null,
        "powerSource":"Battery",
        "dateCode":"04-28-2019",
        "interviewing":false,
        "interviewCompleted":true
    },
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
This can be used to e.g. configure certain settings like allowing new devices to join. Zigbee2mqtt will always respond with the same topic on `zigbee2mqtt/bridge/response/+`. The response payload will at least contain a `status` and `data` property, `status` is either `ok` or `error`. If `status` = `error` it will also contain an `error` property containing a description of the error.

Example: when publishing `zigbee2mqtt/bridge/request/permitJoin` with payload `{"value": true}` Zigbee2mqtt will respond to `zigbee2mqtt/bridge/response/permitJoin` with payload `{"data":{"value":true},"status":"ok"}`. In case this request failed the response will be `{"data":{}, "error": "Failed to connect to adapter","status":"error"}`.

Optionally, a `transaction` property can be included in the request. This allows to easily match requests with responses. When a `transaction` property is included Zigbee2mqtt will include it in the response. Example: `zigbee2mqtt/bridge/request/permitJoin` with payload `{"value": true, "transaction":23}` will be responded to on `zigbee2mqtt/bridge/response/permitJoin` with payload `{"data":{"value":true},"status":"ok","transaction":23}`

### Possible requests

#### zigbee2mqtt/bridge/request/permitJoin
Allows to permit or disable joining of new devices. Allowed payloads are `{"value": true}`, `{"value": false}`, `true` or `false`. Example response: ``{"data":{"value":true},"status":"ok"}`. This is not persistent (will not be saved to `configuration.yaml`).

#### zigbee2mqtt/bridge/request/device/remove
Removes a device from the network. Allowed payloads are `{"ID": "deviceID"}` or `deviceID` where deviceID can be the `ieeeAddress` or `friendlyName` of the device. Example; request: `{"ID": "my_bulb"}` or `my_bulb`, response: `{"data":{"ID": "bulb","ban":false,"force":false},"status":"ok"}`.

Note that in Zigbee the coordinator can only **request** a device to remove itself from the network.
Which means that in case a device refuses to respond to this request it is not removed from the network.
This can happen for e.g. battery powered devices which are sleeping and thus not receiving this request.
In case removal fails the reponse will be e.g. `{"data":{"ID": "bulb","ban":false,"force":false},"status":"error","error":"Failed to remove dimmer (Error: AREQ - ZDO - mgmtLeaveRsp after 10000ms)"}`.

An alternative way to remove the device is by factory resetting it, this probably won't work for all devices as it depends on the device itself.
In case the device did remove itself from the network, you will get a `deviceLeave` event on `zigbee2mqtt/bridge/event`.

In case all of the above fails, you can force remove a device. Note that a force remove will **only** remove the device from the database. Until this device is factory reset, it will still hold the network encryption key and thus is still able to communicate over the network!
To force remove a device add the optional `force` property (default `false`) to the payload, example: `{"ID":"my_bulb","force":true}`.

In case you also want to ban the device the optional `ban` property (default `false`) can be added, example: `{"ID":"my_bulb","ban":true}`. Note that Zigbee doesn't have a ban functionallity, therefore when a device is banned, Zigbee2mqtt will immediately request the device to remove itself from the network when it joins.

#### zigbee2mqtt/bridge/request/group/remove
Removes a group. Allowed payloads are `{"ID": "groupID"}` or `groupID` where groupID can be the `groupID` or `friendlyName` of the group. Example; request: `{"ID": "my_group"}` or `my_group`, response: `{"data":{"ID": "my_group"},"status":"ok"}`.

#### zigbee2mqtt/bridge/request/group/add
Adds a group. Allowed payloads are `{"friendlyName": NAME, "ID": NUMBER}` or `NAME`. Example; request: `{"ID": 9, "friendlyName": "new_group"}` or `new_group`, response: `{"data":{"ID": 9,"friendlyName":"new_group"},"status":"ok"}`. The `ID` property is optional.

#### zigbee2mqtt/bridge/request/device/rename
Allows you to change the `friendly_name` of a device on the fly. Payload format is `{"from": deviceID, "to": deviceID}` where deviceID can be the `ieeeAddress` or `friendlyName` of the device, example: `{"from": "my_bulb", "to": "my_bulb_new_name"}`. Response will be `{"data":{"from":"my_bulb","to":"my_bulb_new_name"},"status":"ok"}`.

In case you want to rename the last joined device, omit the `from` property and set `last` to `true`. Example: `{"last": true, "to": "my_bulb_new_name"}`.

#### zigbee2mqtt/bridge/request/group/rename
Allows you to change the `friendly_name` of a group on the fly. Payload format is `{"from": groupID, "to": groupID}` where groupID can be the `groupID` or `friendlyName` of the group, example: `{"from": "my_group", "to": "my_group_new_name"}`. Response will be `{"data":{"from":"my_group","to":"my_group_new_name"},"status":"ok"}`.

#### zigbee2mqtt/bridge/request/device/options
Allows you to change device options on the fly. Existing options can be changed or new ones can be added. Payload format is `{"ID": deviceID,"options": OPTIONS}` where deviceID can be the `ieeeAddress` or `friendlyName` of the device, example: `{"ID": "my_bulb", "options":{"transition":1}}`. Response will be `{"data":{"from":{"retain":false},"to":{"retain":false,"transition":1},"ID":"my_bulb"},"status":"ok"}`.

#### zigbee2mqtt/bridge/request/group/options
Allows you to change group options on the fly. Existing options can be changed or new ones can be added. Payload format is `{"ID": groupID,"options": OPTIONS}` where groupID can be the `groupID` or `friendlyName` of the group, example: `{"ID": "my_group", "options":{"transition":1}}`. Response will be `{"data":{"from":{"retain":false},"to":{"retain":false,"transition":1},"ID":"my_group"},"status":"ok"}`.

#### zigbee2mqtt/bridge/request/config/lastSeen
Sets `advanced` -> `last_seen` (persistent). Payload format is `{"value": VALUE}`, example: `{"value":"disable"}`, response: `{"data":{"value": "disable"},"status":"ok"}`. See [Configuration](../information/configuration.md) for possible values.

#### zigbee2mqtt/bridge/request/config/elapsed
Sets `advanced` -> `elapsed` (persistent). Payload format is `{"value": VALUE}`, example: `{"value":true}`, response: `{"data":{"value": true},"status":"ok"}`. See [Configuration](../information/configuration.md) for possible values.

#### zigbee2mqtt/bridge/request/config/logLevel
Sets `advanced` -> `log_level` (persistent). Payload format is `{"value": VALUE}`, example: `{"value":"debug"}`, response: `{"data":{"value": "debug"},"status":"ok"}`. See [Configuration](../information/configuration.md) for possible values.

#### zigbee2mqtt/bridge/request/touchlink/factoryReset
See [Touchlink](./touchlink.md).



TODO:
- add feedback from https://github.com/Koenkk/zigbee2mqtt/issues/3281#issuecomment-629787842
EVERYTHING BELOW THIS IS OLD STUFF

-----------------


## zigbee2mqtt/bridge/ota_update/+
See [OTA updates](./ota_updates.md).


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
