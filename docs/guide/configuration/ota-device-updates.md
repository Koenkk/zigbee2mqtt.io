# OTA device firmware update

Also see the [OTA firmware update usage guide](../usage/ota_updates.md).

```yaml
# Optional: OTA update settings
# See https://www.zigbee2mqtt.io/guide/usage/ota_updates.html for more info
ota:
    # Optional: Minimum time between OTA update checks
    update_check_interval: 1440
    # Optional: Disable automatic update checks
    disable_automatic_update_check: false
    # Optional: Limits the rate of requests (in milliseconds) during OTA updates to reduce network congestion.
    # You can increase this value if your network appears unstable during OTA
    image_block_response_delay: 250
    # Optional: The size of file chunks sent during an update (in bytes).
    # Note: This value may get ignored for manufacturers that require specific values.
    default_maximum_data_size: 50
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
