---
---
# OTA updates
*This is an experimental feature, ongoing discussion can be found here: https://github.com/Koenkk/zigbee2mqtt/issues/2921*

This feature allows to update your Zigbee devices over-the-air.

Not all manufacturers make their updates available, therefore only the following devices support it:
- IKEA TRÅDFRI devices
- Salus SP600 Smart plug

Zigbee2mqtt automatically checks if updates are available for your devices.
In case an update is available it will publish `zigbee2mqtt/[DEVICE_FRIENLDY_NAME]` payload `{"update_available": true}`.

## Check if an update is available
To check if an update is available for your device send a message to `zigbee2mqtt/bridge/ota_update/check` with payload `DEVICE_FRIENDLY_NAME`.

## Update to latest firmware
Once an update is available, send to `zigbee2mqtt/bridge/ota_update/update` with payload `DEVICE_FRIENDLY_NAME` to update your device.
An update typically takes +- 10 minutes.
While a device is updating a lot of traffic is generated on the network, therefore it is not recommend to execute multiple updates at the same time.

The Zigbee2mqtt log will show the progress of the OTA update.

## Troubleshooting
- `Device didn't respond to OTA request`: try restarting the device by disconnecting the power.
