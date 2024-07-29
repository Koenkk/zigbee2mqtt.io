---
---

# Groups

Zigbee2MQTT has support for Zigbee groups. By using Zigbee groups you can control multiple devices simultaneously with one command.

::: tip
Groups can also be managed via the frontend _Groups_ tab.
:::

## Configuration

Add the following to your `configuration.yaml`.

```yaml
groups:
    # ID, each group should have a different numerical ID
    '1':
        # Required: Name which will be used to control the group
        friendly_name: group_1
        # Required: Retain messages (true/false) (default: false)
        retain: false
        # Optional: Default transition to be used when e.g. changing brightness (in seconds) (default: 0)
        transition: 2
        # Optional: Change group state when one of the devices in it changes state, see 'State changes' below (default: true)
        optimistic: true
        # Optional: Control when state OFF is published for a group, see "State changes" below (default: all_members_off)
        off_state: 'all_members_off'
        # Optional: Devices of this group,
        # Note: This can be the ieeeAddr of the device or the friendly_name (default: empty)
        devices:
            - '0x00158d00018255df'
            - 'some_device_friendly_name'
```

The groupID (in the above example `'1'`) should be a numerical string. In case you want to use a hexadecimal groupID (e.g. `0xe24c`) you should first convert it to a numerical string (e.g. `57932`).

If using the Hassio add-on, restart it after modifying your `configuration.yaml` as above.

## MQTT commands

Devices can also be added/removed from groups via MQTT, the possible topics are:

-   `zigbee2mqtt/bridge/request/group/members/add`: add a device to a group
-   `zigbee2mqtt/bridge/request/group/members/remove` remove a device from a group
-   `zigbee2mqtt/bridge/request/group/members/remove_all` remove a device from all groups

The payload should be `{"group": GROUP, "device": DEVICE}` where `GROUP` is the `friendly_name` of the group you want to add/remove the device from, `DEVICE` is the `friendly_name` of the device you want to add/remove from the group. Example payload: `{"group":"my_group","device":"my_bulb"}`, example response: `{"data":{"device":"my_bulb","group":"my_group"},"status":"ok"}`. In case of executing a `remove_all` the `group` property in the request can be omitted.

When removing a device from a group and when the group has any devices bound to it. The reporting of this members will be disabled, if you want to skip this use `skip_disable_reporting` (e.g. `{"group":"my_group","device":"my_bulb", "skip_disable_reporting": true}`).

## Controlling

Controlling a group is similar to controlling a single device. For example to turn on all devices that are part of group send a MQTT message to `zigbee2mqtt/[GROUP_FRIENDLY_NAME]/set` with payload:

```json
{
    "state": "ON"
}
```

## State changes

By default when one of the devices in a group changes its state, the group state will update to reflect the change. The behaviour of the `state` property can be controlled through the `off_state` option. There are 2 possible options:

-   `all_members_off` (default): The group `state` will stay `ON` if at least one of the group member is in `state` `ON`.
-   `last_member_state`: The group `state` will equal the `state` of the member who last changed state.

When the state of a group is changed by a command (so not via a state change of a device in it), all devices in the group will also change its state. This behavior can be disabled by setting `optimistic: false` for the group.

## How do groups work?

By using the above `add` command above, a device will be added to a group. The device itself is responsible for storing to which groups it belongs. Others, e.g. the coordinator, do not have knowledge to which groups a device belongs.

When using the `set` command, e.g. to turn on all devices in a group, a broadcast request is send to **all** devices in the network. The device itself then determines if it belongs to that group and if it should execute the command.

## Adding a specific endpoint

In case you want to add a device to a group with multiple endpoints, e.g. a QBKG03LM with 2 buttons you can specify it by adding the endpoint name to the `DEVICE` in the request payload in the format of `DEVICE/ENDPOINT`. Example request payload `{"group":"my_group","device":"my_switch/right"}`.
