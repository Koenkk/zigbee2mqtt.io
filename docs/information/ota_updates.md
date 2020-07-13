---
---
# OTA updates
*An ongoing discussion about this feature can be found here: [#2921](https://github.com/Koenkk/zigbee2mqtt/issues/2921)*

This feature allows to update your Zigbee devices over-the-air.

Not all manufacturers make their updates available, therefore only the following devices support it:
- IKEA TRÅDFRI devices
- Ubysis devices
- Salus SP600 Smart plug
- Osram/Ledvance devices (not every firmware is made available by them, in case not you will see the following exception in the log `No image available for ...`)
- Philips Hue devices (not every firmware is made available by them, in case not you will see the following exception in the log `No image available for ...`)
- Jung ZLLxx5004M (Gira does unfortunately not seem to offer firmware updates for their almost identical 2430-100 devices and the update file for the Jung ZLLxx5004M does not seem to work for Gira)
- Sengled devices

Zigbee2mqtt automatically checks if updates are available for your devices.
In case an update is available it will publish `zigbee2mqtt/[DEVICE_FRIENLDY_NAME]` payload `{"update_available": true}`.

## Check if an update is available
To check if an update is available for your device send a message to `zigbee2mqtt/bridge/request/device/ota_update/check` with payload `{"ID": "deviceID"}` or `deviceID` where deviceID can be the `ieee_address` or `friendly_name` of the device. Example; request: `{"ID": "my_remote"}` or `my_remote`, response: `{"data":{"ID": "my_remote","updateAvailable":true},"status":"ok"}`.

## Update to latest firmware
Once an update is available you can update it by sending to `zigbee2mqtt/bridge/request/device/ota_update/update` with payload `{"ID": "deviceID"}` or `deviceID` where deviceID can be the `ieee_address` or `friendly_name` of the device, example request: `{"ID": "my_remote"}` or `my_remote`. Once the update is completed a response is send, example response: `{"data":{"ID": "my_remote","from":{"software_build_ID":1,"date_code":"20190101"},"to":{"software_build_ID":2,"date_code":"20190102"}},"status":"ok"}`.

An update typically takes +- 10 minutes. While a device is updating a lot of traffic is generated on the network, therefore it is not recommend to execute multiple updates at the same time.

## Troubleshooting
- `Device didn't respond to OTA request` or `Update failed with reason: 'aborted by device'`: try restarting the device by disconnecting the power/battery for a few seconds and try again.
- For battery powered devices make sure that the battery is 70%+ as OTA updating is very power consuming.
