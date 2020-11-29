---
---
# OTA updates
*This is an experimental feature, ongoing discussion can be found here: [#2921](https://github.com/Koenkk/zigbee2mqtt/issues/2921)*

This feature allows to update your Zigbee devices over-the-air.

Not all manufacturers make their updates available, therefore only the following devices support it:
- IKEA TRÅDFRI devices
- Ubysis devices
- Salus SP600 Smart plug
- Osram/Ledvance devices (not every firmware is made available by them, in case not you will see the following exception in the log `No image available for ...`)
- Philips Hue devices (not every firmware is made available by them, in case not you will see the following exception in the log `No image available for ...`)
- Jung ZLLxx5004M, Jung ZLLHS4 and Gira 2435-10  
Gira does unfortunately not seem to offer firmware updates for their wall transmitter 2430-100 (which is very similar to the Jung ZLLxx5004M) and the update file for the Jung wall transmitter does not work for Gira (probably because the Gira wall transmitter only has 6 buttons instead of 8 on the Jung).
- Sengled devices

Zigbee2MQTT automatically checks if updates are available for your devices.
In case an update is available it will publish `zigbee2mqtt/[DEVICE_FRIENLDY_NAME]` payload `{"update_available": true}`.

## Check if an update is available
To check if an update is available for your device send a message to `zigbee2mqtt/bridge/ota_update/check` with payload `DEVICE_FRIENDLY_NAME`.

## Update to latest firmware
Once an update is available, send to `zigbee2mqtt/bridge/ota_update/update` with payload `DEVICE_FRIENDLY_NAME` to update your device.
An update typically takes +- 10 minutes.
While a device is updating a lot of traffic is generated on the network, therefore it is not recommend to execute multiple updates at the same time.

The Zigbee2MQTT log will show the progress of the OTA update.

## Troubleshooting
- `Device didn't respond to OTA request` or `Update failed with reason: 'aborted by device'`: try restarting the device by disconnecting the power/battery for a few seconds and try again.
- For battery powered devices make sure that the battery is 70%+ as OTA updating is very power consuming.
