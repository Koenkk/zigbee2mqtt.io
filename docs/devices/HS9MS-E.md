---
title: "Heiman HS9MS-E control via MQTT"
description: "Integrate your Heiman HS9MS-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-04-30T19:57:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Heiman HS9MS-E

|     |     |
|-----|-----|
| Model | HS9MS-E  |
| Vendor  | [Heiman](/supported-devices/#v=Heiman)  |
| Description | Smart motion sensor |
| Exposes | occupancy, tamper, battery_low, battery, camera_test_trigger, camera_active_trigger, ambient_light, wifi_ssid, wifi_password, wifi_ssid_candidate, wifi_password_candidate, server_url, server_url_candidate, picture_quantity, picture_quality, sensor_armed, wifi_status, wifi_candidate_status, server_status, server_candidate_status, camera_ready, wifi_rssi |
| Picture | ![Heiman HS9MS-E](https://www.zigbee2mqtt.io/images/devices/HS9MS-E.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Battery low (binary)
Indicates whether the battery of the device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Camera test trigger (enum)
Trigger camera and wifi/server connection test..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"camera_test_trigger": NEW_VALUE}`.
The possible values are: `test`.

### Camera active trigger (enum)
Trigger the camera to take a picture..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"camera_active_trigger": NEW_VALUE}`.
The possible values are: `active`.

### Ambient light (numeric)
ambient illuminance in lux.
Value can be found in the published state on the `ambient_light` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ambient_light": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `Lx`.

### Wifi ssid (text)
Current WiFi SSID.
Value can be found in the published state on the `wifi_ssid` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"wifi_ssid": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"wifi_ssid": NEW_VALUE}`.

### Wifi password (text)
Current WiFi Password.
Value can be found in the published state on the `wifi_password` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"wifi_password": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"wifi_password": NEW_VALUE}`.

### Wifi ssid candidate (text)
Candidate WiFi SSID.
Value can be found in the published state on the `wifi_ssid_candidate` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"wifi_ssid_candidate": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"wifi_ssid_candidate": NEW_VALUE}`.

### Wifi password candidate (text)
Candidate WiFi Password.
Value can be found in the published state on the `wifi_password_candidate` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"wifi_password_candidate": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"wifi_password_candidate": NEW_VALUE}`.

### Server url (text)
Current Server URL.
Value can be found in the published state on the `server_url` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"server_url": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"server_url": NEW_VALUE}`.

### Server url candidate (text)
Candidate WiFi Server URL.
Value can be found in the published state on the `server_url_candidate` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"server_url_candidate": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"server_url_candidate": NEW_VALUE}`.

### Picture quantity (numeric)
picture quantity.
Value can be found in the published state on the `picture_quantity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"picture_quantity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"picture_quantity": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `20`.

### Picture quality (numeric)
picture quality.
Value can be found in the published state on the `picture_quality` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"picture_quality": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"picture_quality": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### Sensor armed (binary)
armed.
Value can be found in the published state on the `sensor_armed` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensor_armed": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor_armed": NEW_VALUE}`.
If value equals `Armed` sensor armed is ON, if `Disarmed` OFF.

### Wifi status (enum)
wifi status.
Value can be found in the published state on the `wifi_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"wifi_status": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `unconfigurated`, `unconnected`, `connected`, `connection_timeout`.

### Wifi candidate status (enum)
wifi candidate status.
Value can be found in the published state on the `wifi_candidate_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"wifi_candidate_status": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `unconfigurated`, `unconnected`, `connected`, `connection_timeout`.

### Server status (enum)
server status.
Value can be found in the published state on the `server_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"server_status": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `unconfigurated`, `unconnected`, `connected`, `api_timeout`.

### Server candidate status (enum)
server candidate status.
Value can be found in the published state on the `server_candidate_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"server_candidate_status": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `unconfigurated`, `unconnected`, `connected`, `api_timeout`.

### Camera ready (enum)
wifi candidate status.
Value can be found in the published state on the `camera_ready` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"camera_ready": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `unavailable`, `low_power`, `normal`, `advanced`.

### Wifi rssi (numeric)
wifi rssi.
Value can be found in the published state on the `wifi_rssi` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"wifi_rssi": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"wifi_rssi": NEW_VALUE}`.
The minimal value is `-127` and the maximum value is `127`.

