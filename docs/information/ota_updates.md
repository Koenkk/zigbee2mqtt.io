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

Zigbee2MQTT automatically checks if updates are available for your devices.

The update state will be published to `zigbee2mqtt/[DEVICE_FRIENLDY_NAME]`, example payload: `{"update": {"state": "available"}}`.
The possible states are:
- `available`: an update is available for this device
- `updating`: update is in progress. During this the progress in % and remaining time in seconds is also added to the payload, example: `{"update": {"state": "updating","progress":13.37,"remaining": 219}}`.
- `idle`: no update available/in progress

*NOTE: there is also a property `update_available` which is deprecated*.

## Check if an update is available
To check if an update is available for your device send a message to `zigbee2mqtt/bridge/request/device/ota_update/check` with payload `{"id": "deviceID"}` or `deviceID` where deviceID can be the `ieee_address` or `friendly_name` of the device. Example; request: `{"id": "my_remote"}` or `my_remote`, response: `{"data":{"id": "my_remote","updateAvailable":true},"status":"ok"}`.

## Update to latest firmware
Once an update is available you can update it by sending to `zigbee2mqtt/bridge/request/device/ota_update/update` with payload `{"id": "deviceID"}` or `deviceID` where deviceID can be the `ieee_address` or `friendly_name` of the device, example request: `{"id": "my_remote"}` or `my_remote`. Once the update is completed a response is send, example response: `{"data":{"id": "my_remote","from":{"software_build_id":1,"date_code":"20190101"},"to":{"software_build_id":2,"date_code":"20190102"}},"status":"ok"}`.

An update typically takes +- 10 minutes. While a device is updating a lot of traffic is generated on the network, therefore it is not recommend to execute multiple updates at the same time.

## Troubleshooting
- `Device didn't respond to OTA request` or `Update failed with reason: 'aborted by device'`: try restarting the device by disconnecting the power/battery for a few seconds and try again.
- For battery powered devices make sure that the battery is 70%+ as OTA updating is very power consuming.
