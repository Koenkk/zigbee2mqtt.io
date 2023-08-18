---
title: "MiBoxer FUT089Z control via MQTT"
description: "Integrate your MiBoxer FUT089Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-04-30T08:00:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# MiBoxer FUT089Z

|     |     |
|-----|-----|
| Model | FUT089Z  |
| Vendor  | [MiBoxer](/supported-devices/#v=MiBoxer)  |
| Description | RGB+CCT Remote |
| Exposes | battery, voltage, linkquality |
| Picture | ![MiBoxer FUT089Z](https://www.zigbee2mqtt.io/images/devices/FUT089Z.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To pair the device:
- Allow Zigbee2MQTT pairing
- Press the Master ON and OFF buttons simultaneously until the central red LED flashes quickly.

### Working principle

The remote has 7 zone switches plus an eighth zone being controlled by the ON and OFF buttons + 1 Master zone ON and OFF buttons.
Each zone sends commands to a ZigBee group which is currently hardcoded. Zone 1 is mapped to ZigBee group 101, Zone 2 to 102 and so forth. This means that currently each remote controls the same ZigBee groups. To control lights or smartplugs, first create a ZigBee group with the correct ID (10X), name it like you wish then add the devices you intend to control to that group (pay attention to use the right termination point).

Very important : do NOT add the remote itself to the group.

ON and OFF Master Button on top of the remote will command an extra zone with Group ID 108. 
You can for instance use it as a master switch or just as an add on zone.

Obviously you can only have 1 FUT089Z remote per Zigbee network as it always command groups with 101 to 108 ID

There is no support for sending events instead of commands. Which means that there is no other automation you can build out of the group assignement described above.

Beauty is that after you pair remote and define up to 8 zones, the command will work even with Zigbee2MQTT down, ... even better without any alive Zigbee controller.
It looks like a perfect emergency backup.


### Quirks
Like most of battery powered devices, the remote does not respond to any ZigBee commands sent after initial configuration without taking out the battery and putting it back in.
To send any command to it (like a Leave or configure command), take out the battery, send the command and quickly put it back in.

It does also not support binding its light output clusters or manually joining it to a group.

### Touchlink
The remote supports Touchlink. It is unclear how the Touchlink configuration interacts with the regular group configuration so if you intend to use Touchlink it would probably best not to pair it to a network.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported..
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

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

