---
---
# OTA updates
*This is an experimental feature, ongoing discussion can be found here: https://github.com/Koenkk/zigbee2mqtt/issues/2921*

This feature allows to update your Zigbee devices over-the-air.

Not all manufacturers make their updates available, therefore only the following devices support it:
- IKEA TRÅDFRI devices

## Check if an update is available
To check if an update is available for your device send a message to `zigbee2mqtt/bridge/ota_update/check` with payload `DEVICE_FRIENDLY_NAME`. The Zigbee2mqtt log will show if one is available, example:

```
zigbee2mqtt:info  2020-02-08 19:18:01: Checking if update available for 'bulb'
zigbee2mqtt:info  2020-02-08 19:18:04: Update available for 'bulb'
```

## Update to latest firmware
Once an update is available, send to `zigbee2mqtt/bridge/ota_update/update` with payload `DEVICE_FRIENDLY_NAME` to update your device.
An update typically takes +- 10 minutes.
While a device is updating a lot of traffic is generated on the network, therefore it is not recommend to execute multiple updates at the same time.

The Zigbee2mqtt log will show the progress of the OTA update.

## Troubleshooting
- `Device didn't respond to OTA request`: try restarting the device by disconnecting the power.
