# OTA 设备固件更新

另请参阅 [OTA 固件更新使用指南](../usage/ota_updates.md)。

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

## OTA 索引覆盖文件

```yaml
ota:
    zigbee_ota_override_index_location: my_index.json
```

该键的值是配置目录（与 `configuration.yaml` 同级）中的一个文件名。
该文件名也可以是文件的完整路径，需要注意的是，当 Zigbee2MQTT 在 docker 容器中运行时，主机文件系统可能不可用。

此外，Zigbee2MQTT 也支持位于远程 HTTP(s) 服务器上的索引文件。在这种情况下，`zigbee_ota_override_index_location` 键的值应为该索引文件的 URL。

关于 Zigbee2MQTT 如何获取 OTA 镜像、如何为 DIY 设备添加镜像、以及如何用其他镜像覆盖官方镜像等更多细节，请参阅 [OTA 固件更新使用指南](../usage/ota_updates.md)。
