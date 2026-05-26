---
---

# OTA updates

This feature allows updating the firmware of Zigbee devices over-the-air.

::: warning
Firmware updates can provide bug fixes, security updates and other welcomed features.
However, they can also change device behavior in ways that may affect Zigbee2MQTT compatibility and potentially introduce buggy, or even malicious functionality.
**Review the release notes before applying a firmware update.**
:::

By default, Zigbee2MQTT matches and retrieves OTA images from the [Koenkk/zigbee-OTA](https://github.com/Koenkk/zigbee-OTA) repository (if it has internet access).
This repository is a mirror of manufacturer-provided firmware updates, both manually and automatically curated.
[Using custom/local sources](#using-custom-firmware-files-or-index) is explained further down the page.

::: tip
Most actions and configurations on this page can be done via the frontend.
:::

## Update status

The update state is published to `zigbee2mqtt/[DEVICE_FRIENDLY_NAME]`, example payload: `{"update":{"state":"available"}}`.
The possible states are:

- `idle`: No update available/in progress
- `available`: An update is available for this device
- `scheduled`: An update may start on the next update check requested by the device
- `updating`: An update is in progress
    - During this the progress in % and remaining time in seconds is also added to the payload (reported every 30sec), example: `{"update":{"state":"updating","progress":13.37,"remaining":219}}`
    - The first progress report (at 0%) gives an estimated remaining time based on the OTA settings. The actual remaining time will adjust with each progress report based on the current state (greatly affected by the network)

## Checking for updates

### Automatic checking

Zigbee devices supporting OTA can periodically request a firmware update check. Upon reception of such a request, Zigbee2MQTT will check for updates (on the default source) and publish the result to MQTT.

Some devices request updates too often. Zigbee2MQTT limits the checks to once per day (1440 min). The **update check interval** is configurable, but it does not prevent a device from requesting. Zigbee2MQTT will just ignore these messages if within that interval.  
Here it is set to check at most once every two days, in `configuration.yaml`:

```yaml
ota:
    update_check_interval: 2880
```

It is also possible to completely **ignore the update checks** initiated by devices (Zigbee2MQTT will always reply "no image available"). If `configuration.yaml` is modified like this, only manual checks will proceed:

```yaml
ota:
    disable_automatic_update_check: true
```

This is also available per-device. See [Device options](../configuration/devices-groups.md).

Disabling automatic update checks does not prevent [scheduled OTA](#scheduling-update-on-next-device-request).

### Manual checking

To manually check for **updates**, send a message to `zigbee2mqtt/bridge/request/device/ota_update/check` with payload `{"id":"deviceID"}` where deviceID can be the `ieee_address` or `friendly_name` of the device.  
To check if a **downgrade** is available, send the message to `zigbee2mqtt/bridge/request/device/ota_update/check/downgrade` instead.

Zigbee2MQTT will request the current firmware information from the device (manufacturer code, image type and installed version). Only after reception, it will look up the OTA index.
If the device does not respond, wake it up (e.g. push a button) right before checking, or wait for the automatic check.

Example request: `{"id":"my_remote"}`, response: `{"data":{"id":"my_remote","update_available":false},"status":"ok"}`.

If an update is available (`"update_available":true`), the response will also contain:

- `source`: the URL or file path to the OTA file
- `release_notes`: (if provided) the release notes for the source
- `downgrade`: true if the availability is for a downgrade

## Starting an update

::: warning WARNINGS
The update process greatly varies in duration: 10-100 minutes depending on device, settings and network stability. The device is usable during this time, but heavy traffic is added on the network. Therefore, the best practice is to **update one device at a time, while the network is in low demand.**

When uploading the OTA file completes, the device will reboot with the new firmware. **The reboot may cause unwanted interruptions or turn-ons, due to power-on behavior (e.g. light-up in the middle of the night)!**

Since updating can drastically change the device behavior, Zigbee2MQTT treats it similarly to pairing a new device. It will automatically re-interview to detect new capabilities and **re-configure to ensure normal operation (this may overwrite custom reporting intervals with the default values)**
:::

### Manual update request

When an **update** is available, start it by sending a message to `zigbee2mqtt/bridge/request/device/ota_update/update` with payload `{"id":"deviceID"}` where deviceID can be the `ieee_address` or `friendly_name` of the device.  
When a **downgrade** is available, start it by sending the message to `zigbee2mqtt/bridge/request/device/ota_update/update/downgrade` instead.

If the device does not respond, wake it up (e.g. push a button) right before starting, or [schedule](#scheduling-update-on-next-device-request) the update.  
The progress is published to the respective device topic, as described [above](#device-state).

Once the update is completed, a response is sent, example response: `{"data":{"id":"my_remote","from":{"file_version":5,"software_build_id":1,"date_code":"20190101"},"to":{"file_version":10,"software_build_id":2,"date_code":"20190102"}},"status":"ok"}`.  
Note that `software_build_id` and `date_code` are optional device attributes.

### Scheduling update on next device request

It's possible to schedule the update for the next time the device requests an OTA update check.

:::tip TIP
This can help for battery-powered devices that usually don't respond to [manual update requests](#manual-update-request) unless physically woken up right before triggering. Some brands/models are known to only update this way (e.g. some Legrand devices).
:::

To schedule, send a message to `zigbee2mqtt/bridge/request/device/ota_update/schedule` with payload `{"id":"deviceID"}` where deviceID can be the `ieee_address` or `friendly_name` of the device, example request: `{"id":"my_remote"}`.  
The same applies for downgrade with topic `zigbee2mqtt/bridge/request/device/ota_update/schedule/downgrade`.

To unschedule, send the same payload, but with the topic `zigbee2mqtt/bridge/request/device/ota_update/unschedule`.

Scheduling status is saved in the database, and restored after Zigbee2MQTT restarts.

If a scheduled update fails, it will remain scheduled (Device will try again, on the next check).  
If there is no update available when the device requests, the schedule is removed.  
A [manual update request](#manual-update-request) will remove the existing schedule, only if the update succeeds.

## Downgrading

Downgrading the firmware is also possible. Follow the same updating steps, but use the respective `downgrade` topics, as described above.

The default source ([Koenkk/zigbee-OTA](https://github.com/Koenkk/zigbee-OTA)) usually stores the latest and latest-1 images. This allows for one version downgrade. Otherwise, the older firmware must be provided by the user as a [custom source](#using-custom-firmware-files-or-index).

Even though Zigbee specification allows firmware downgrading, some devices may reject older firmware versions. Additionally, updating to a firmware of same version is not supported by Zigbee specification. This cannot be forced by Zigbee2MQTT.

Backing-up the currently installed version is not possible.

## Advanced configuration

### Change update parameters

The following OTA settings can be adjusted globally (by editing `configuration.yaml`) or per request (by providing them in the payload): `image_block_request_timeout`, `image_block_response_delay`, `default_maximum_data_size`.

```yaml
ota:
    image_block_request_timeout: 150000
    image_block_response_delay: 250
    default_maximum_data_size: 50
```

Increasing the **timeout for reception of chunk requests** from the device can help if a device is unusually slow at this. The default is however already 150000ms and should fit most cases.

The **minimum delay between two chunks** can be decreased for faster OTA updates, but it may require a far more stable network to avoid issues and crashes. The default is 250ms and the minimum is 50ms.

The **size of image chunks** sent by Zigbee2MQTT is by default limited to 50 bytes. Similarly, bigger chunks will increase the OTA speed, but reduce network stability. Minimum is 10B and maximum is 100B.  
Some devices will refuse higher sizes than 50/64 bytes.  
Zigbee2MQTT will ignore the custom value for some devices and automatically use the correct size that they expect.

### Using custom firmware files or index

Devices can be updated from custom sources, by supplying the firmware files directly, or by listing them in a custom index.

:::caution CAUTION
Improper use of custom OTA index or firmware files can brick devices. Due to the nature of "custom firmware", several of the regular OTA constraints are bypassed in this mode. **Use trusted sources!**
:::

An OTA index file is a list of firmware images available in designated locations. By default, Zigbee2MQTT uses the [upgrade index file](https://github.com/Koenkk/zigbee-OTA/blob/master/index.json), and the [downgrade index file](https://github.com/Koenkk/zigbee-OTA/blob/master/index1.json) from the [zigbee-OTA](https://github.com/Koenkk/zigbee-OTA) repository.

A custom update index can be supplied globally (by editing `configuration.yaml`) or per update request. Accepted formats are: local file path (absolute or relative) and web URL.

The override OTA index file shall have the same structure as the [zigbee-OTA index file](https://github.com/Koenkk/zigbee-OTA/blob/master/index.json).
See the [repository README](https://github.com/Koenkk/zigbee-OTA/tree/master?tab=readme-ov-file#notes-for-maintainers--developers) if an image requires extra metadata.

:::tip TIP
The following tool can generate indexes and do more helpful operations: [https://nerivec.github.io/zigbee-ota-file-editor/](https://nerivec.github.io/zigbee-ota-file-editor/)
:::

If the default Zigbee2MQTT index is inaccessible (e.g. air gapped network), only the local OTA index will be used.  
If both indexes are available, records in the override index will take precedence over the ones in the default index.

#### Global index override

In this example, `my_index.json` is located in the same directory as `configuration.yaml`:

```yaml
ota:
    zigbee_ota_override_index_location: my_index.json
    # or
    zigbee_ota_override_index_location: https://example.com/ota/index.json
```

#### Per request custom index / firmware

The following topics support supplying `url` in the payload (also accepting local paths and web URLs) to update with custom files.

If the pointed location is a JSON file (`*.json`), it will be treated as an index, else as a firmware file.

- Only index supported
    - `bridge/request/device/ota_update/check`
    - `bridge/request/device/ota_update/check/downgrade`
- Index, firmware file and hex data supported
    - `bridge/request/device/ota_update/update`
    - `bridge/request/device/ota_update/update/downgrade`
    - `bridge/request/device/ota_update/schedule`
    - `bridge/request/device/ota_update/schedule/downgrade`

The full OTA file can also be supplied in hex string form: `"hex":{"data":"1EF1EEB0...","file_name":"my-file.ota"}`. The firmware file will be stored in `data/ota/` upon receipt. This is mainly intended for frontend use (where this payload is built from a "file upload" dialog).

## Troubleshooting

- `Device didn't respond to OTA request` or `Update failed with reason: 'aborted by device'`: try restarting the device by disconnecting the power/battery for a few seconds, then try OTA again, make sure to activate the device by pressing a button on it right before sending the update request
- For battery powered devices make sure that the battery is 70%+ as OTA updating is very power consuming. Some devices check for a minimum battery level prior to updating and will refuse to update if too low
- Make sure your log level is set to `info`. When set to `warning` or `error`, frontend will not report some messages indicating the current OTA status
