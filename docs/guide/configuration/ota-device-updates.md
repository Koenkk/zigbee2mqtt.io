# OTA device firmware update

Also see the [OTA firmware update usage guide](../usage/ota_updates.md).

```yaml
# Optional: OTA update settings
# See https://www.zigbee2mqtt.io/guide/usage/ota_updates.html for more info
ota:
    # Minimum time between OTA update checks
    update_check_interval: 1440
    # Disable automatic update checks
    disable_automatic_update_check: false
```

## IKEA test server 

```yaml
advanced:
  # Optional: use IKEA TRADFRI OTA test server, see OTA updates documentation (default: false)
  ikea_ota_use_test_url: false
```
