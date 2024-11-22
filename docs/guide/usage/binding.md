---
sidebarDepth: 1
---

# Binding

Zigbee supports binding, allowing devices to directly control each other without the intervention of Zigbee2MQTT or any home automation software.

## When to use this

A use case for binding is, for example, the TRADFRI wireless dimmer. Binding the dimmer directly to a bulb or group has the following advantages:

-   **Smoothness:** Improves dimming feedback by directly controlling the bulb, reducing the need for MQTT/home automation software roundtrip.
-   **Reliability:** Works even when home automation software, Zigbee2MQTT, or the coordinator is down.

## Commands

::: tip
All commands below can also be executed via the frontend, click on your device and go to the _Bind_ tab.
:::

Binding can be configured by using either `zigbee2mqtt/bridge/request/device/bind` to bind and `zigbee2mqtt/bridge/request/device/unbind` to unbind. The payload should be `{"from": SOURCE, "to": TARGET}` where `SOURCE` and `TARGET` can be the `friendly_name` of a group or device. Example request payload: `{"from": "my_remote", "to": "my_bulb"}`, example response payload: `{"data":{"from":"my_remote","to":"my_bulb","clusters":["genScenes","genOnOff","genLevelCtrl"],"failed":[]},"status":"ok"}`. The `clusters` in the response indicate the bound/unbound clusters, `failed` indicates any failed to bind/unbind clusters. In case all clusters fail to bind the `status` is set to `error`.

By default all supported clusters are bound. To restrict which clusters are being bound/unbound add `clusters` to the request payload e.g. `{"from": "my_remote", "to": "my_bulb", "clusters": ["genOnOff"]}`. Possible clusters are: `genScenes`, `genOnOff`, `genLevelCtrl`, `lightingColorCtrl` and `closuresWindowCovering`.

When binding reporting is setup on the target device. This makes the target device update their state when it is changed by the source of the bind. When unbinding this reporting is removed again, if you want to skip this use `skip_disable_reporting` (e.g. `{"from": "my_remote", "to": "my_bulb", "skip_disable_reporting": true}`).

When binding/unbinding of a battery powered device fails, this is most of the time caused because the device is sleeping. This can be fixed by waking it up right before sending the MQTT message. To wake it up press a button on the remote.

In the above example, the TRADFRI wireless dimmer would be the `SOURCE` device and the bulb the `TARGET` device. When using a group as target, using the group's friendly name is mandatory, group ID will not work.

### Binding specific endpoint

**This is not applicable for most users**

By default, the first endpoint is taken. In case your device has multiple endpoints, e.g. `left` and `right`. You can specify `SOURCE` or `TARGET` as e.g. `my_switch/right` to bind/unbind the `right` endpoint.

It is also possible to specify the endpoints in numeric, use e.g. `my_switch/3` for the `SOURCE` or `TARGET`.

### Binding a remote to a group

Binding a remote to a group allows a remote to directly control a group of devices without intervention of Zigbee2MQTT.

When we for example have an IKEA E1743 remote called `my_remote` and two bulbs called `bulb_1` and `bulb_2`, we can control the 2 bulbs with the remote by putting them in the same group and binding the remote to it.

To do this execute the following steps:

1. Create a new group in `configuration.yaml` and give it a `friendly_name` (see [Groups](./groups.md)). In this example we will set the `friendly_name` to `my_group`.
2. Add the 2 bulbs to the group by sending the following two MQTT messages.
    - `zigbee2mqtt/bridge/request/group/members/add` with payload `{"group":"my_group","device":"bulb_1"}`
    - `zigbee2mqtt/bridge/request/group/members/add` with payload `{"group":"my_group","device":"bulb_2"}`
3. Bind the remote to the group by sending the following MQTT message.
    - `zigbee2mqtt/bridge/request/device/bind` with payload `{"from": "my_remote", "to": "my_group"}`

## Devices

Not all devices support this, it basically comes down to the Zigbee implementation of the device itself. Check the device specific page for more info (can be reached via the supported devices page)

## State changes

When a devices is being bound to, Zigbee2MQTT will automatically configure reporting for these devices. This will make the device report state changes when the state is changed through a bound device.

In order for this feature to work, the device has to support it. As devices from the same manufacturer (mostly) have the same features the table below might help to find out if your device supports it.

| Brand            | On/Off | Brightness | Color | Color temperature | Color Mode |
| :--------------- | :----: | :--------: | :---: | :---------------: | :--------: |
| Philips Hue      |  N(1)  |    N(2)    |   N   |         N         |     N      |
| Philips Hue (BT) |   Y    |     Y      |   Y   |         Y         |     N      |
| Trådfri(3)       |   Y    |     Y      |   Y   |         N         |     Y      |
| Innr             |   Y    |     Y      |   Y   |         Y         |     Y      |
| GLEDOPTO         |   N    |     N      |   N   |         N         |     N      |
| OSRAM            |   Y    |     Y      |   N   |         N         |     Y      |
| Müller Licht     |   N    |     N      |   N   |         N         |     Y      |

1. Bulbs on old firmware (date 20170908 or older) do report On/Off
2. Zigbee2MQTT will manual poll for change if a binding updates the bulb.
3. The color/brightness of a Trådfri bulb can be changed while the state=off, it also reports back the change.

If your devices do **not** support reporting put the device in a group and bind the remote to the group instead of directly to the device. This will make Zigbee2MQTT poll the device for updates when the bound remote controls the device. To minimize traffic this has not been enabled for all devices. If this does not work please create an issue for it [here](https://github.com/Koenkk/zigbee2mqtt/issues).

Any manual setup reportings of the clusters `genOnOff`, `genLevelCtrl` `lightingColorCtrl` and `closuresWindowCovering` will be removed if there are no binds to the device or group a device is in when unbinding. You have to setup these reportings again.
