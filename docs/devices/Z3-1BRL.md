---
title: "Lutron Z3-1BRL control via MQTT"
description: "Integrate your Lutron Z3-1BRL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-09-08T21:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lutron Z3-1BRL

|     |     |
|-----|-----|
| Model | Z3-1BRL  |
| Vendor  | [Lutron](/supported-devices/#v=Lutron)  |
| Description | Aurora smart bulb dimmer |
| Exposes | brightness, battery, action |
| Picture | ![Lutron Z3-1BRL](https://www.zigbee2mqtt.io/images/devices/Z3-1BRL.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Enter pairing mode

For new devices:
* Quickly double tap the dimmer button.

For previously paired devices:
1. Quickly tap the dimmer button 4x.
2. On the fourth tap, hold until the LED begins to blink.
3. Immediately, quickly tap the dimmer button 3 more times.

See this [configuration guide](https://www.lutron.com/TechnicalDocumentLibrary/0301916_Aurora_Advanced_Install_Guide.pdf#page=7) for more information.

If a red light flashes, the battery is low and must be replaced before pairing.

### Device Binding

When binding this device to a device, the dimmer creates a group and associates the targeted device with the group. This dimmer cannot directly control devices that do not support groups.  The dimmer also cannot be bound to a group through the Binding tab in Zigbee2MQTT, even though it uses groups under the hood.

The dial has been observed creating groups with id `0x2fed` / `12269`. Consider creating that group in Zigbee2MQTT to avoid accidentally creating a conflicting group. If a device is having difficulty with the binding procedure, this can also be used as a workaround to enable direct control of the device.

If you suspect your dial is using a different group ID, you can find it by following these steps:

1. Enable debug logging and restarting Zigbee2MQTT.
2. Open the `Clusters` tab in the Zigbee2MQTT web interface for a device that has been bound to the dimmer.
3. Find the endpoint number that contains the `genGroups` cluster.
4. Open the dev console tab, and enter the number from step 3 under `Execute Command`.
5. Enter `2` for the command (which corresponds to `Get Group Membership`).
6. Enter `{"groupcount": 0, "grouplist": []}` for the `Payload` and click `Execute`.
7. In the debug logs, you will see a line with `commandGetMembershipRsp` and the array of group IDs as `grouplist`, in decimal format.
8. You can now turn off debug logging and restart Zigbee2MQTT.

<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `simulated_brightness`: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:
```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```


## Exposes

### Brightness (numeric)
Value can be found in the published state on the `brightness` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `brightness`.

