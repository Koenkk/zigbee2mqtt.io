---
---
# Groups
*Ongoing discussion can be found here: https://github.com/Koenkk/zigbee2mqtt/issues/764*

Zigbee2mqtt has support for Zigbee groups. By using Zigbee groups you can control multiple devices simultaneously with one command.

## Configuration
Add the following to your `configuration.yaml`.

```yaml
groups:
  # ID, each group should have a different numerical ID
  '1':
    # Name which will be used to control the group
    friendly_name: group_1
    # Retain messages (true/false)
    retain: false
    # Devices of this group,
    # Note: this has to be the ieeeAddr of the device, not the friendly_name!
    devices:
      - '0x00158d00018255df'
```

The group ID (in the above example `'1'`) should be a numerical string. In case you want to use a hexadecimal group ID (e.g. `0xe24c`) you should first convert it to a numerical string (e.g. `57932`).

If using the Hassio add-on, restart it after modifying your `configuration.yaml` as above.

## Commands
The group of a device can also be configured using the following commands:

- `zigbee2mqtt/bridge/group/[GROUP_FRIENDLY_NAME]/add` with payload `DEVICE_FRIENDLY_NAME` will add a device to a group.
- `zigbee2mqtt/bridge/group/[GROUP_FRIENDLY_NAME]/remove` with payload `DEVICE_FRIENDLY_NAME` will remove a device from a group.
- `zigbee2mqtt/bridge/group/remove_all` with payload `DEVICE_FRIENDLY_NAME` will remove a device from **all** groups.

## Controlling
Controlling a group is similar to controlling a single device. For example to turn on all devices that are part of group send a MQTT message to `zigbee2mqtt/[GROUP_FRIENDLY_NAME]/set` with payload:

```json
{
  "state": "ON",
}
```

## State changes
When one of the devices in a group changes it's state, the group state will also update. E.g. device A is in group `1` with `friendly_name: my_group`, when group A turns off, a message to `zigbee2mqtt/my_group` with payload `{"state": "OFF"}` will be published.

## How do groups work?
By using the above `add` command above, a device will be added to a group. The device itself is responsible for storing to which groups it belongs. Others, e.g. the coordinator, do not have knowledge to which device a groups belongs.

When using the `set` command, e.g. to turn on all devices in a group, a broadcast request is send to **all* devices in the network. The device itself then determines if it belongs to that group and if it should execute the command.

## Adding a specific endpoint
In case you want to add a device to a group with multiple endpoints, e.g. a QBKG03LM with 2 buttons you can specify it by sending to `zigbee2mqtt/bridge/group/[GROUP_FRIENDLY_NAME]/add` with payload `DEVICE_FRIENDLY_NAME/ENDPOINT`. In case of the QBKG03LM e.g `my_device/right`
