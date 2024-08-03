---
---

# OTA updates

> An ongoing discussion about this feature can be found in [#2921](https://github.com/Koenkk/zigbee2mqtt/issues/2921)

This feature allows to update your Zigbee devices over-the-air.

::: tip TIP
Always check if the firmware update will bring you advantages. Firmware updates are NOT made for Zigbee2MQTT, but for working with apps and hubs from the brand.
In some cases the firmware update can cause that your device will react different then Zigbee2MQTT expects, making that you can't use it the way you want, at least until Zigbee2MQTT is changed to react to those changes.
If you get annoyed by the notifications that there are updates available, then turn the automatic check off.
:::

Not all manufacturers make their updates available, below is a (not-complete) list of manufacturer/devices that support it:

-   IKEA TRÅDFRI devices
-   Ubisys devices
-   Some Xiaomi devices
-   Salus SP600 Smart plug
-   Osram/Ledvance devices (not every firmware is made available by them, in case not you will see the following exception in the log `No image available for ...`)
-   Philips Hue devices (not every firmware is made available by them, in case not you will see the following exception in the log `No image available for ...`)
-   Jung ZLLxx5004M, Jung ZLLHS4 and Gira 2435-10
    Gira does unfortunately not seem to offer firmware updates for their wall transmitter 2430-100 (which is very similar to the Jung ZLLxx5004M) and the update file for the Jung wall transmitter does not work for Gira (probably because the Gira wall transmitter only has 6 buttons instead of 8 on the Jung).
-   Sengled devices

To check whether your specific device supports OTA updates via Zigbee2MQTT, go to the supported devices page, click on your device and look for the _OTA updates_ section.

## Automatic checking for available updates

Your zigbee devices can request a firmware update check. Zigbee2MQTT obliges this, and will automatically check if updates are available for your devices.

The update state will be published to `zigbee2mqtt/[DEVICE_FRIENDLY_NAME]`, example payload: `{"update": {"state": "available"}}`.
The possible states are:

-   `available`: an update is available for this device
-   `updating`: update is in progress. During this the progress in % and remaining time in seconds is also added to the payload, example: `{"update": {"state": "updating","progress":13.37,"remaining": 219}}`.
-   `idle`: no update available/in progress

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

_NOTE: there is also a property `update_available` which is deprecated_.

## Manually check if an update is available

To check if an update is available for your device send a message to `zigbee2mqtt/bridge/request/device/ota_update/check` with payload `{"id": "deviceID"}` or `deviceID` where deviceID can be the `ieee_address` or `friendly_name` of the device. Example; request: `{"id": "my_remote"}` or `my_remote`, response: `{"data":{"id": "my_remote","updateAvailable":true},"status":"ok"}`. For battery powered end-devices you may need to trigger them by e.g. pushing a button right before checking for an OTA.

## Update to latest firmware

Once an update is available you can update it by sending to `zigbee2mqtt/bridge/request/device/ota_update/update` with payload `{"id": "deviceID"}` or `deviceID` where deviceID can be the `ieee_address` or `friendly_name` of the device, example request: `{"id": "my_remote"}` or `my_remote`. Once the update is completed a response is send, example response: `{"data":{"id": "my_remote","from":{"software_build_id":1,"date_code":"20190101"},"to":{"software_build_id":2,"date_code":"20190102"}},"status":"ok"}`.

An update typically takes +- 10 minutes. While a device is updating a lot of traffic is generated on the network, therefore it is not recommend to execute multiple updates at the same time.

## Using the IKEA TRADFRI test server

If IKEA TRADFRI devices are rejecting OTA updates, it is possible the OTA server is providing a corrupt file. The firmwares published on the IKEA **test** server can be used. In most cases, this is not needed and will result in slower / no OTA updates as the test server is not kept up to date. You can instruct Zigbee2MQTT to use the test server by adding the following to your `configuration.yaml`.

**WARNING: Use at your own risk!**

```yaml
ota:
    ikea_ota_use_test_url: true
```

## Local OTA index and firmware files

OTA Index file is a list of firmware images available on a particular server. When checking if an update is available, Zigbee2MQTT determines current hardware and firmware version for a particular device, and then searches for a suitable upgrade image in the index file. Some vendors (such as IKEA Tradfri, Ledvance, Salus, Ubisys) use their proprietary index files, but the most of the devices use [Zigbee-OTA](https://github.com/Koenkk/zigbee-OTA) firmware repository with a [main index file](https://github.com/Koenkk/zigbee-OTA/blob/master/index.json).

Sometimes it is necessary to add a firmware image that is not on the main index. This could be helpful when developing a DIY device, or install a test/alternate image for a mass-produced device. In this case user can supply Zigbee2MQTT with an alternate index file, located locally or on a web server. This index file will point Zigbee2MQTT to the firmware image files. Records in the override OTA index file will override corresponding records in the main index, so that it is possible to alter the image for a particular device type.

```yaml
ota:
    zigbee_ota_override_index_location: my_index.json
```

Local index file is searched in the configuration directory (next to `configuration.yaml`). The file name could be also a full path to the file, taking into account that host file system may not be available when running Zigbee2MQTT inside a docker container. Alternatively, Zigbee2MQTT supports index files located on a remote HTTP(s) server. In this case `zigbee_ota_override_index_location` key should be an URL of the index file.

The override OTA index file shall have the same structure as the [main index file](https://github.com/Koenkk/zigbee-OTA/blob/master/index.json). To create the index file it is possible to use [add.js](https://github.com/Koenkk/zigbee-OTA/blob/master/scripts/add.js) script (follow instructions [here](https://github.com/Koenkk/zigbee-OTA)). Correct image location and image URL as necessary.

Firmware files can be located either on a web server, or on the local file system. In this case `url` field in the index file entry shall be either a full path to the image file, or relative to the Zigbee2MQTT configuration directory. In case of local image file, index entry can be simplified to only 'url' field. Other fields are still allowed, but if omitted corresponding information (firmware version, image type, manufacturer ID, etc) is read from the image file.

```json
[
    {
        "url": "HelloZigbee.ota"
    }
]
```

Normally Zigbee2MQTT compares current device firmware with available images version, and allows flashing only firmwares with `fileVersion` that is higher than current. To force Zigbee2MQTT to use arbitrary version a `force` field can be used:

```json
[
    {
        "url": "HelloZigbee.ota",
        "force": true
    }
]
```

Please note, even though Zigbee specification basically allows firmware version downgrade, some of the devices may reject older firmwares. This cannot be forced from Zigbee2MQTT side.

## Troubleshooting

-   `Device didn't respond to OTA request` or `Update failed with reason: 'aborted by device'`: try restarting the device by disconnecting the power/battery for a few seconds and try again, make sure to activate the device by pressing a button on it right before sending the update request.
-   For battery powered devices make sure that the battery is 70%+ as OTA updating is very power consuming. Some devices check for a minimum battery level prior to updating and refuse to update.
-   Make sure your log level is set to "info" - when set to warning - the UI will not report the correct info.
