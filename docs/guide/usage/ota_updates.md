---
---

# OTA updates

This feature allows to update your Zigbee devices over-the-air.

::: tip TIP
Always check if the firmware update will bring you advantages. Firmware updates are often NOT made for Zigbee2MQTT, but for working with apps and hubs from the brand.
In some cases the firmware update can cause your device to react differently than what Zigbee2MQTT expects, resulting in undesired behavior, no-longer accessible features, etc., at least until Zigbee2MQTT is updated to take those changes into account.
If you get annoyed by the notifications that there are updates available, then turn the automatic check off.
:::

Not all manufacturers make their updates available, you can watch for new additions in [zigbee-OTA Releases](https://github.com/Koenkk/zigbee-OTA/releases), which, if available, include the changes in these new updates.

To check whether your specific device supports OTA updates via Zigbee2MQTT, go to the supported devices page, click on your device and look for the _OTA updates_ section.

## Automatic checking for available updates

Zigbee devices supporting OTA can periodically request a firmware update check. Upon reception of such a request, Zigbee2MQTT will automatically check if an update is available and reply to the device accordingly. If an update is available, and you had previously scheduled an auto-update, Zigbee2MQTT will also signal the device to start the update.

The update state will be published to `zigbee2mqtt/[DEVICE_FRIENDLY_NAME]`, example payload: `{"update":{"state":"available"}}`.
The possible states are:

- `idle`: No update available/in progress
- `available`: An update is available for this device
- `scheduled`: An update is scheduled on the next update check request from the device.
- `updating`: An update is in progress.
    - During this the progress in % and remaining time in seconds is also added to the payload (reported every 30sec), example: `{"update":{"state":"updating","progress":13.37,"remaining":219}}`.
    - The first progress report (at 0%) gives an estimated remaining time based on the OTA settings. The actual remaining time will adjust with each progress report based on the current state (greatly affected by the network).

You can set the minimum time that should pass between two firmware update checks, in minutes. The default is 1440 minutes (1 day). This does not prevent a device from requesting, Zigbee2MQTT will just ignore these messages if within that time.
Here it is set to check at most every two days:

```yaml
ota:
    update_check_interval: 2880
```

It is also possible to completely ignore these device-initiated requests for updates checks (Zigbee2MQTT will always reply "no image available") by modifying the `configuration.yaml` file. In the example below, only manual firmware update checks will proceed:

```yaml
ota:
    disable_automatic_update_check: true
```

This is also available per-device. See [Device options](../configuration/devices-groups.md).

:::tip TIP
Disabling automatic update checks does not disable [scheduled OTA](#scheduling-update-on-next-device-request).
:::

## Manually check if an update is available

To check if an upgrade is available for your device send a message to `zigbee2mqtt/bridge/request/device/ota_update/check` with payload `{"id":"deviceID"}` where deviceID can be the `ieee_address` or `friendly_name` of the device. Example; request: `{"id":"my_remote"}`, response: `{"data":{"id":"my_remote","update_available":false},"status":"ok"}`. If an update is available (`"update_available":true`), the response will also contain:

- `source`: the URL or file path to the OTA file
- `release_notes`: (if provided) the release notes for the source
- `downgrade`: true if the availability is for a downgrade

:::tip TIP
For battery powered end-devices you may need to trigger them by e.g. pushing a button right before checking for an OTA.
:::

### Downgrade

Same as above, but send the message to `zigbee2mqtt/bridge/request/device/ota_update/check/downgrade` instead.

## Update firmware

When an update is available for your device, you can upgrade it by sending a message to `zigbee2mqtt/bridge/request/device/ota_update/update` with payload `{"id":"deviceID"}` where deviceID can be the `ieee_address` or `friendly_name` of the device, example request: `{"id":"my_remote"}`. Once the update is completed, a response is sent, example response: `{"data":{"id":"my_remote","from":{"file_version":5,"software_build_id":1,"date_code":"20190101"},"to":{"file_version":10,"software_build_id":2,"date_code":"20190102"}},"status":"ok"}`. Note that since `software_build_id` and `date_code` are optional device attributes, they may not be in the payload if not supported by the device.

::: tip TIP
An update typically takes 10-20 minutes (although some devices may take a lot longer). While a device is updating a lot of traffic is generated on the network, therefore it is not recommended to execute multiple updates at the same time, and ideally to update while the network is less in-demand.
:::

:::tip TIP
Upon completion of uploading an OTA file to a device, the device will apply the update, reboot, then re-announce itself. Zigbee2MQTT allocates 2 minutes before considering the update done, if the device did not re-announce itself. After this, Zigbee2MQTT will re-interview the device to ensure any new capability is detected.
:::

#### Override OTA settings

You can override OTA settings per-request by providing the following in the payload: `image_block_request_timeout`, `image_block_response_delay`, `default_maximum_data_size`. Any combination is accepted; any setting not provided will use the one in the `configuration.yaml` if present, or the default.

See [Advanced configuration](#advanced-configuration) for details about these settings.

### Downgrade

Same as above but send the message to `zigbee2mqtt/bridge/request/device/ota_update/update/downgrade` instead.

### Scheduling update on next device request

:::tip TIP
This can help for battery-powered devices that will usually fail to respond to [manual update requests](#update-firmware) unless physically woken up right before triggering. Some brands/models are also known to only update this way (e.g. some Legrand devices).
:::

You can schedule an automatic update for the next time the device requests an OTA update check.
Send a message to `zigbee2mqtt/bridge/request/device/ota_update/schedule` with payload `{"id":"deviceID"}` where deviceID can be the `ieee_address` or `friendly_name` of the device, example request: `{"id":"my_remote"}`.
The same applies for downgrade with topic `zigbee2mqtt/bridge/request/device/ota_update/schedule/downgrade`.

To unschedule, send the same payload, but with the topic `zigbee2mqtt/bridge/request/device/ota_update/unschedule`.

Any new schedule request for the same device will automatically unschedule the previous (if any). For e.g. sending a downgrade schedule request while an upgrade is already scheduled will result in downgrade being scheduled, and upgrade being unscheduled.

Any [manual update request](#update-firmware) will automatically unschedule any existing schedule for the device if the update succeeds.

If a scheduled update fails, it will remain scheduled (for the next check from the device).

Devices scheduling information is saved in the database, and restored after a Zigbee2MQTT restart.

## Using custom firmware files or index

:::caution CAUTION
Improper use of custom OTA firmware files or index can result in bricked devices. Due to the nature of "custom firmware", several of the regular OTA constraints are bypassed in this mode. **Use trusted sources!**
:::

### URL / file path

The following topics support supplying `url` in the payload, which can point to either an accessible URL, or a location on the file system where Zigbee2MQTT is installed. If `url` is a relative path, Zigbee2MQTT will assume this is relative to its data directory. If the pointed location is a JSON file (`*.json`), it will be treated as an index, else as a firmware file.

- `bridge/request/device/ota_update/check`
    - Only index (JSON) is supported, used for checking for availability of upgrade (instead of the default URL provided by Zigbee2MQTT)
- `bridge/request/device/ota_update/check/downgrade`
    - Only index (JSON) is supported, used for checking for availability of downgrade (instead of the default URL provided by Zigbee2MQTT)
- `bridge/request/device/ota_update/update`
- `bridge/request/device/ota_update/update/downgrade`
- `bridge/request/device/ota_update/schedule`
- `bridge/request/device/ota_update/schedule/downgrade`

### Hex payload

The following topics support supplying `hex` in the payload, which takes the form `"hex":{"data":"1EF1EEB0...","file_name":"my-file.ota"}`, where `data` is the full OTA file in hex string form. The `file_name` is optional, if not provided, one will be generated from the device's IEEE. This is used to store the firmware file under the Zigbee2MQTT data subdirectory `ota` upon receipt.

Note: This is mainly intended for frontend use, where this payload is automatically built in the background from a "file upload" dialog.

- `bridge/request/device/ota_update/update`
- `bridge/request/device/ota_update/update/downgrade`
- `bridge/request/device/ota_update/schedule`
- `bridge/request/device/ota_update/schedule/downgrade`

:::tip TIP
The following tool can be used for various operations (inspect, edit, etc.) related to custom firmware: [https://nerivec.github.io/zigbee-ota-file-editor/](https://nerivec.github.io/zigbee-ota-file-editor/)
:::

## Troubleshooting

- `Device didn't respond to OTA request` or `Update failed with reason: 'aborted by device'`: try restarting the device by disconnecting the power/battery for a few seconds, then try OTA again, make sure to activate the device by pressing a button on it right before sending the update request.
- For battery powered devices make sure that the battery is 70%+ as OTA updating is very power consuming. Some devices check for a minimum battery level prior to updating and will refuse to update if too low.
- Make sure your log level is set to `info`. When set to `warning` or `error`, frontend will not report some messages indicating the current OTA status.

## Advanced configuration

You can increase (or decrease, albeit less useful) the default timeout for the reception of chunk requests from the device. This can help if you notice a device is unusually slow at this. The default is however already 150000ms and should fit most cases.

:::tip TIP
The below settings can also be set per-update-request (see [Update firmware](#update-firmware)), in the request payload directly.
:::

```yaml
ota:
    image_block_request_timeout: 150000
```

You can increase or decrease the default speed (the minimum delay between two chunks) at which Zigbee2MQTT responds during the update process to send chunks of images. The default is 250ms. A higher speed will result in faster OTA updates, but may require a far more stable network to avoid issues, crashes. A lower speed will result in slower OTA updates, but may noticeably increase reliability, and overall network stability.

```yaml
ota:
    image_block_response_delay: 250
```

Minimum: 50

You can increase or decrease the size of image chunks sent by Zigbee2MQTT during the update process. The default is 50 bytes. The behavior is similar to `image_block_response_delay` regarding the effect of higher or lower values.

_Note that for some known combinations (manufacturer/version/etc.), expected sizes will always override this setting to ensure they work correctly._

```yaml
ota:
    default_maximum_data_size: 50
```

Minimum: 10, Maximum: 100

::: warning ATTENTION
Some devices will refuse higher sizes than 50 bytes, some 64 bytes. Several network parameters must also be taken into account to derive this value. It is not recommended to change this setting unless you have a very good reason (instructed to do so in an issue for example).
:::

## Local OTA index and firmware files

:::caution CAUTION
Improper use of local OTA index & firmware files can result in bricked devices. There are special checks that should nearly always be added for certain manufacturers (e.g. Tuya & derived) to prevent mismatches (mostly due to several manufacturers improperly implementing the Zigbee specification).
:::

An OTA index file is a list of firmware images available in designated locations. When checking if an update is available, Zigbee2MQTT determines current hardware and firmware version for a particular device, and then searches for a suitable upgrade image in the index file. Zigbee2MQTT uses the [Zigbee-OTA](https://github.com/Koenkk/zigbee-OTA) firmware repository which contains the [upgrade index file](https://github.com/Koenkk/zigbee-OTA/blob/master/index.json), and the [downgrade index file](https://github.com/Koenkk/zigbee-OTA/blob/master/index1.json).

Sometimes it is necessary to add a firmware image that is not in that repository. This could be helpful when developing a DIY device, or install a test/alternate image for a mass-produced device. In this case you can supply Zigbee2MQTT with an alternate index file, located locally or on a web server. This index file will point Zigbee2MQTT to the firmware image files. Records in the override OTA index file will take precedence over the records in the Zigbee-OTA repository, so that it is possible to alter the image for a particular device. If the default Zigbee2MQTT index URLs (see above) are inaccessible (e.g. air gap network), and a local OTA index is provided, only the local OTA index will be used.

```yaml
ota:
    zigbee_ota_override_index_location: my_index.json
```

A local index file is searched in the data directory (next to `configuration.yaml`). The file name also could be a full path to the file, taking into account that the host file system may not be available when running Zigbee2MQTT in a virtualized environment (Docker, etc.). Alternatively, Zigbee2MQTT supports index files located on a remote HTTP(s) server. In this case `zigbee_ota_override_index_location` should point to the URL of the index file.

```yaml
ota:
    zigbee_ota_override_index_location: https://example.com/ota/my_index.json
```

The override OTA index file shall have the same structure as the [Zigbee-OTA index file](https://github.com/Koenkk/zigbee-OTA/blob/master/index.json).

For local files, only image location is required through `url` (either a full path to the image file, or relative to the Zigbee2MQTT data directory). Zigbee2MQTT can derive the rest from the files themselves:

```json
[
    {
        "url": "./path/to/my/image.ota"
    }
]
```

For hosted files, on top of `url`, all required metadata must be provided (`imageType`, `manufacturerCode`, `fileVersion`, all expected to match that of the file at `url`):

```json
[
    {
        "url": "https://example.com/path/to/my/image.ota",
        "imageType": 1,
        "manufactureCode": 1001,
        "fileVersion": 321
    }
]
```

:::tip TIP
The following tool can help to generate this information: [https://nerivec.github.io/zigbee-ota-file-editor/](https://nerivec.github.io/zigbee-ota-file-editor/)
:::

See [Zigbee-OTA README](https://github.com/Koenkk/zigbee-OTA/tree/master?tab=readme-ov-file#notes-for-maintainers--developers) if an image requires extra metadata.

Normally Zigbee2MQTT compares the current device's firmware version with the version of the available image, and allows flashing only if `fileVersion` is higher than the current one for upgrades, or lower for downgrades. To force Zigbee2MQTT to use an arbitrary version you can set `force` to `true`:

```json
[
    {
        "url": "HelloZigbee.ota",
        "force": true
    }
]
```

::: tip TIP
Even though Zigbee specification allows firmware downgrading, some devices may reject older firmware versions. Additionally, updating to a firmware of same version is not supported by Zigbee specification. This cannot be forced by Zigbee2MQTT.
:::
