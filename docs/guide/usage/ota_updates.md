---
---
# OTA updates

> An ongoing discussion about this feature can be found in [#2921](https://github.com/Koenkk/zigbee2mqtt/issues/2921)

This feature allows to update your Zigbee devices over-the-air.

Not all manufacturers make their updates available, below is a (not-complete) list of manufacturer/devices that support it:
- IKEA TRÅDFRI devices
- Ubisys devices
- Some Xiaomi devices
- Salus SP600 Smart plug
- Osram/Ledvance devices (not every firmware is made available by them, in case not you will see the following exception in the log `No image available for ...`)
- Philips Hue devices (not every firmware is made available by them, in case not you will see the following exception in the log `No image available for ...`)
- Jung ZLLxx5004M, Jung ZLLHS4 and Gira 2435-10
Gira does unfortunately not seem to offer firmware updates for their wall transmitter 2430-100 (which is very similar to the Jung ZLLxx5004M) and the update file for the Jung wall transmitter does not work for Gira (probably because the Gira wall transmitter only has 6 buttons instead of 8 on the Jung).
- Sengled devices

To check wether your specific device supports OTA updates via Zigbee2MQTT, go to the supported devices page, click on your device and look for the *OTA updates* section.

## Automatic checking for available updates
Your zigbee devices can request a firmware update check. Zigbee2MQTT obliges this, and will automatically check if updates are available for your devices.

The update state will be published to `zigbee2mqtt/[DEVICE_FRIENDLY_NAME]`, example payload: `{"update": {"state": "available"}}`.
The possible states are:
- `available`: an update is available for this device
- `updating`: update is in progress. During this the progress in % and remaining time in seconds is also added to the payload, example: `{"update": {"state": "updating","progress":13.37,"remaining": 219}}`.
- `idle`: no update available/in progress

To protect privacy it is possible to limit how often third party servers may be contacted. You can set the minimum time that should pass between two firmware update checks, in minutes. The default is 1440 minutes (1 day). Here it is set to check at most every two days:

```yaml
ota:
    update_check_interval: 2880
```

It is also possible to completely ignore these device-initiated requests for updates checks by modifying the configuration.yaml file. In the example below, only manual firmware update checks will be possible:

```yaml
ota:
    disable_automatic_update_check: true
```


*NOTE: there is also a property `update_available` which is deprecated*.

## Manually check if an update is available
To check if an update is available for your device send a message to `zigbee2mqtt/bridge/request/device/ota_update/check` with payload `{"id": "deviceID"}` or `deviceID` where deviceID can be the `ieee_address` or `friendly_name` of the device. Example; request: `{"id": "my_remote"}` or `my_remote`, response: `{"data":{"id": "my_remote","updateAvailable":true},"status":"ok"}`.

## Update to latest firmware
Once an update is available you can update it by sending to `zigbee2mqtt/bridge/request/device/ota_update/update` with payload `{"id": "deviceID"}` or `deviceID` where deviceID can be the `ieee_address` or `friendly_name` of the device, example request: `{"id": "my_remote"}` or `my_remote`. Once the update is completed a response is send, example response: `{"data":{"id": "my_remote","from":{"software_build_id":1,"date_code":"20190101"},"to":{"software_build_id":2,"date_code":"20190102"}},"status":"ok"}`.

An update typically takes +- 10 minutes. While a device is updating a lot of traffic is generated on the network, therefore it is not recommend to execute multiple updates at the same time.

## Using the IKEA TRADFRI test server
If IKEA TRADFRI devices are rejecting OTA updates, it is possible the OTA server is providing a corrupt file. The firmwares published on the IKEA **test** server can be used. In most cases, this is not needed and will result in slower / no OTA updates as the test server is not kept up to date. You can instruct Zigbee2MQTT to use the test server by adding the following to your `configuration.yaml`.

**WARNING: Use at your own risk!**

```yaml
advanced:
  ikea_ota_use_test_url: true
```

## Troubleshooting
- `Device didn't respond to OTA request` or `Update failed with reason: 'aborted by device'`: try restarting the device by disconnecting the power/battery for a few seconds and try again.
- For battery powered devices make sure that the battery is 70%+ as OTA updating is very power consuming.
