---
title: "Shelly S4SW-0A1X1EUL control via MQTT"
description: "Integrate your Shelly S4SW-0A1X1EUL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-22T19:39:01
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Shelly S4SW-0A1X1EUL

|     |     |
|-----|-----|
| Model | S4SW-0A1X1EUL  |
| Vendor  | [Shelly](/supported-devices/#v=Shelly)  |
| Description | 1L Gen4 |
| Exposes | action, switch_type, momentary_toggle_binding, switch (state), wifi_status, ip_address, dhcp_enabled, wifi_config, identify |
| Picture | ![Shelly S4SW-0A1X1EUL](https://www.zigbee2mqtt.io/images/devices/S4SW-0A1X1EUL.png) |



## Firmware

It is recommended to connect Shelly devices by WiFi / Bluetooth, and update their firmware, until they gain support for OTA updates over Zigbee.

The latest firmware fixes known issues like negative power readings on some models.  
*Note they roll-out updates in phases. Check "beta" channels if you are specifically looking for a fix.*

<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Input actions

In `toggle` mode, an input publishes `input_1_on`/`input_1_off` or `input_2_on`/`input_2_off`. In `momentary` mode, it publishes `single`, `double`, `triple`, and `hold` actions for the relevant input.

### Direct group binding

No additional configuration is needed to use input actions in Zigbee2MQTT. To use a momentary input in a direct group binding that toggles a light on a single click, first set its `switch_type` to `momentary`, then turn on the corresponding `momentary_toggle_binding` switch. For example, publish `{"momentary_toggle_binding_sw1":"ON"}` to `zigbee2mqtt/FRIENDLY_NAME/set` for SW1. This configures the Shelly to send toggle commands to the bound group. Turn the switch off to restore the default behavior.

With direct binding enabled, a single press emits both `input_1_single` (or `input_2_single`) and `input_1_toggle` (or `input_2_toggle`). The single action is sent through `genScenes`; the toggle action controls the bound group through `genOnOff`. The device state contains only the most recent `action`, so the toggle can replace the single action there immediately. Both actions are still published separately to `zigbee2mqtt/FRIENDLY_NAME/action`.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `shelly_wifi_ssid`: Full Wi-Fi SSID to use when the Shelly Wi-Fi setup cluster reports a shortened network name. The value must be textual.

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a maximum value of `30`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `input_1_on`, `input_1_off`, `input_1_toggle`, `input_1_single`, `input_1_double`, `input_1_triple`, `input_1_hold`, `input_2_on`, `input_2_off`, `input_2_toggle`, `input_2_single`, `input_2_double`, `input_2_triple`, `input_2_hold`.

### Switch type (enum, sw1 endpoint)
Switch input type.
Value can be found in the published state on the `switch_type_sw1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_sw1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_sw1": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`.

### Switch type (enum, sw2 endpoint)
Switch input type.
Value can be found in the published state on the `switch_type_sw2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_sw2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_sw2": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`.

### Momentary toggle binding (binary, sw1 endpoint)
Enable or disable toggle commands for a direct group binding with a momentary input.
Value can be found in the published state on the `momentary_toggle_binding_sw1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"momentary_toggle_binding_sw1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"momentary_toggle_binding_sw1": NEW_VALUE}`.
If value equals `ON` momentary toggle binding is ON, if `OFF` OFF.

### Momentary toggle binding (binary, sw2 endpoint)
Enable or disable toggle commands for a direct group binding with a momentary input.
Value can be found in the published state on the `momentary_toggle_binding_sw2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"momentary_toggle_binding_sw2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"momentary_toggle_binding_sw2": NEW_VALUE}`.
If value equals `ON` momentary toggle binding is ON, if `OFF` OFF.

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

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

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.
