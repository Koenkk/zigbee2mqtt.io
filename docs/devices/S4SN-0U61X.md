---
title: "Shelly S4SN-0U61X control via MQTT"
description: "Integrate your Shelly S4SN-0U61X via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-04-30T19:57:28
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Shelly S4SN-0U61X

|     |     |
|-----|-----|
| Model | S4SN-0U61X  |
| Vendor  | [Shelly](/supported-devices/#v=Shelly)  |
| Description | Presence Gen4 Zigbee |
| Exposes | occupancy, light_level, dark_threshold, bright_threshold, identify, wifi_status, ip_address, dhcp_enabled, wifi_config |
| Picture | ![Shelly S4SN-0U61X](https://www.zigbee2mqtt.io/images/devices/S4SN-0U61X.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a maximum value of `30`

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be sent after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of numbers.


## Exposes

### Occupancy (binary, 1 endpoint)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_1": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Occupancy (binary, 2 endpoint)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_2": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Occupancy (binary, 3 endpoint)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_3": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Occupancy (binary, 4 endpoint)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_4": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Occupancy (binary, 5 endpoint)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_5": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Occupancy (binary, 6 endpoint)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_6": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Occupancy (binary, 7 endpoint)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_7": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Occupancy (binary, 8 endpoint)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_8": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Occupancy (binary, 9 endpoint)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_9": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Occupancy (binary, 10 endpoint)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_10": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Light level (enum)
Coarse light level.
Value can be found in the published state on the `light_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_level": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `dark`, `twilight`, `bright`.

### Dark threshold (numeric)
Lux threshold below which light level is dark.
Value can be found in the published state on the `dark_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dark_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dark_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.
The unit of this value is `lx`.

### Bright threshold (numeric)
Lux threshold above which light level is bright.
Value can be found in the published state on the `bright_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"bright_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"bright_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.
The unit of this value is `lx`.

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Wi-Fi status (text)
Current connection status.
Value can be found in the published state on the `wifi_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"wifi_status": ""}`.
It's not possible to write (`/set`) this value.

### IP address (text)
IP address currently assigned to the device.
Value can be found in the published state on the `ip_address` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ip_address": ""}`.
It's not possible to write (`/set`) this value.

### DHCP enabled (binary)
Indicates whether DHCP is used to automatically assign network settings.
Value can be found in the published state on the `dhcp_enabled` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dhcp_enabled": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` dHCP enabled is ON, if `false` OFF.

### Wi-Fi Configuration (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"wifi_config": {"enabled": VALUE, "ssid": VALUE, "password": VALUE, "static_ip": VALUE, "net_mask": VALUE, "gateway": VALUE, "name_server": VALUE}}`
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"wifi_config": ""}`.
- `enabled` (binary): Enable/disable Wi-Fi connectivity allowed values: `true` or `false`
- `ssid` (text): Name (SSID) of the Wi-Fi network to connect to 
- `password` (text): Password for the selected Wi-Fi network 
- `static_ip` (text): Manually assigned IP address (used when DHCP is disabled) 
- `net_mask` (text): Subnet mask for the static IP configuration 
- `gateway` (text): Default gateway address for static IP configuration 
- `name_server` (text): Name server address for static IP configuration 

