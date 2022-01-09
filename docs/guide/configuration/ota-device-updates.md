# OTA device firmware update

Also see the [OTA firmware update usage guide](../usage/ota_updates.md).

```yaml
# Optional: OTA update settings
# See https://www.zigbee2mqtt.io/guide/usage/ota_updates.html for more info
ota:
    # Optional: use IKEA TRADFRI OTA test server, see OTA updates documentation (default: false)
    ikea_ota_use_test_url: false
    # Minimum time between OTA update checks
    update_check_interval: 1440
    # Disable automatic update checks
    disable_automatic_update_check: false
```

## OTA Index override file

```yaml
ota:
    zigbee_ota_override_index_location: my_index.json
```

Value of this key is a file name in the configuration directory (next to `configuration.yaml`).
The file name could be also a full path to the file, taking into account that host file system may not be available when running Zigbee2MQTT inside a docker container.

Alternatively, Zigbee2MQTT supports index files located on a remote HTTP(s) server. In this case `zigbee_ota_override_index_location` key should be an URL of the index file.

Please refer to [OTA firmware update usage guide](../usage/ota_updates.md) for more details how Zigbee2MQTT fetches OTA images,
how to add an image for a DIY device, or how to override official images with other ones.
