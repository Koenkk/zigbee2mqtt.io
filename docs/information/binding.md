---
---
# Binding
*Ongoing discussion about this feature can be found here: <https://github.com/Koenkk/zigbee2mqtt/issues/782>*

Zigbee has support for binding which makes it possible that devices can directly control each other without the intervention of Zigbee2mqtt or any home automation software.

## When to use this
A use case for this is e.g. the TRADFRI wireless dimmer. Binding the dimmer directly to a bulb or group has the following advantages:
- Smoothness; this will greatly improve the dimming feedback as the dimmer directly dims the bulb and thus does not have to make the MQTT/home automation software roundtrip.
- It will work even when home automation software, zigbee2mqtt or the coordinator is down.

## Commands
Binding can be configured by using either `zigbee2mqtt/bridge/request/device/bind` to bind and `zigbee2mqtt/bridge/request/device/unbind` to unbind. The payload should be `{"from": SOURCE, "to": TARGET}` where `SOURCE` and `TARGET` can be the `friendly_name` of a group or device. Example request payload: `{"from": "my_remote", "to": "my_bulb"}`, example response payload: `{"data":{"from":"my_remote","to":"my_bulb","clusters":["genScenes","genOnOff","genLevelCtrl"],"failed":[]},"status":"ok"}`. The `clusters` in the response indicate the bound/unbound clusters, `failed` indicates any failed to bind/unbind clusters. In case all clusters fail to bind the `status` is set to `error`.

When binding/unbinding of a battery powered device fails, this is most of the time caused becuase the device is sleeping. This can be fixed by waking it up right before sending the MQTT message. To wake it up press a button on the remote.

In the above example, the TRADFRI wireless dimmer would be the `SOURCE` device and the bulb the `TARGET` device. When using a group as target, using the group's friendly name is mandatory, group ID will not work.

### Binding specific endpoint
**This is not applicable for most users**

By default, the first endpoint is taken. In case your device has multiple endpoints, e.g. `left` and `right`. You can specify `SOURCE` or `TARGET` as e.g. `my_switch/right` to bind/unbind the `right` endpoint.

### Binding a remote to a group
Binding a remote to a group allows a remote to directly control a group of devices without intervention of Zigbee2mqtt.

When we for example have an IKEA E1743 remote called `my_remote` and two bulbs called `bulb_1` and `bulb_2`, we can control the 2 bulbs with the remote by putting them in the same group and binding the remote to it.

To do this execute the following steps:
1. Create a new group in `configuration.yaml` and give it a `friendly_name` (see [Groups](./groups)). In this example we will set the `friendly_name` to `my_group`.
2. Add the 2 bulbs to the group by sending the following two MQTT messages.
    - `zigbee2mqtt/bridge/request/group/members/add` with payload `{"group":"my_group","device":"bulb_1"}`
    - `zigbee2mqtt/bridge/request/group/members/add` with payload `{"group":"my_group","device":"bulb_2"}`
3. Bind the remote to the group by sending the following MQTT message.
    - `zigbee2mqtt/bridge/request/device/bind` with payload `{"from": "my_remote", "to": "my_group"}`

## Devices
Not all devices support this, it basically comes down to the Zigbee implementation of the device itself. Check the device specific page for more info (can be reached via the supported devices page)

## Report
When using this feature you are probably also interested in using the report feature. This allows you to get state changes when e.g. a bulb state changes by a bound dimmer. Read more about it here [Report](./report.md).
