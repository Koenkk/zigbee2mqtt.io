---
title: "Shelly S4EM-002CXCEU control via MQTT"
description: "Integrate your Shelly S4EM-002CXCEU via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-05-31T19:17:59
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Shelly S4EM-002CXCEU

|     |     |
|-----|-----|
| Model | S4EM-002CXCEU  |
| Vendor  | [Shelly](/supported-devices/#v=Shelly)  |
| Description | EM Gen4 |
| Exposes | switch (state), power, voltage, ac_frequency, current, energy, produced_energy, wifi_status, ip_address, dhcp_enabled, wifi_config |
| Picture | ![Shelly S4EM-002CXCEU](https://www.zigbee2mqtt.io/images/devices/S4EM-002CXCEU.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `shelly_wifi_ssid`: Full Wi-Fi SSID to use when the Shelly Wi-Fi setup cluster reports a shortened network name. The value must be textual.

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `ac_frequency_calibration`: Calibrates the ac_frequency value (absolute offset), takes into effect on next report of device. The value must be a number.

* `ac_frequency_precision`: Number of digits after decimal point for ac_frequency, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch (1 endpoint)
The current state of this switch is in the published state under the `state_1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_1": "ON"}`, `{"state_1": "OFF"}` or `{"state_1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_1": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Power (numeric, 2 endpoint)
Instantaneous measured power.
Value can be found in the published state on the `power_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Power (numeric, 3 endpoint)
Instantaneous measured power.
Value can be found in the published state on the `power_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Voltage (numeric, 2 endpoint)
Measured electrical potential value.
Value can be found in the published state on the `voltage_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage_2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### Voltage (numeric, 3 endpoint)
Measured electrical potential value.
Value can be found in the published state on the `voltage_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### AC frequency (numeric, 2 endpoint)
Measured electrical AC frequency.
Value can be found in the published state on the `ac_frequency_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ac_frequency_2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `Hz`.

### AC frequency (numeric, 3 endpoint)
Measured electrical AC frequency.
Value can be found in the published state on the `ac_frequency_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ac_frequency_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `Hz`.

### Current (numeric, 2 endpoint)
Instantaneous measured electrical current.
Value can be found in the published state on the `current_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### Current (numeric, 3 endpoint)
Instantaneous measured electrical current.
Value can be found in the published state on the `current_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### Energy (numeric, 2 endpoint)
Sum of consumed energy.
Value can be found in the published state on the `energy_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy (numeric, 3 endpoint)
Sum of consumed energy.
Value can be found in the published state on the `energy_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Produced energy (numeric, 2 endpoint)
Sum of produced energy.
Value can be found in the published state on the `produced_energy_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"produced_energy_2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Produced energy (numeric, 3 endpoint)
Sum of produced energy.
Value can be found in the published state on the `produced_energy_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"produced_energy_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

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

