---
sidebarDepth: 1
---

# Zigbee 网络

## 网络配置

```yaml
advanced:
    # Optional: Zigbee pan ID (default: shown below)
    # Setting pan_id: GENERATE will make Zigbee2MQTT generate a new panID on next startup
    pan_id: 0x1a62
    # Optional: Zigbee extended pan ID, GENERATE will make Zigbee2MQTT generate a new extended panID on next startup (default: shown below)
    ext_pan_id: [0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD]
    # Optional: Zigbee channel, changing might require re-pairing of some devices (see docs below). (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid problems)
    # (default: 11)
    channel: 11
    # Optional: network encryption key
    # GENERATE will make Zigbee2MQTT generate a new network key on next startup
    # Note: changing requires repairing of all devices (default: shown below)
    network_key: [1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]
```

::: tip
将 `network_key` 设置为 `GENERATE`，可让 Zigbee2MQTT 在首次启动时生成一个新的随机密钥，`configuration.yml` 会随之更新为新密钥。更改 network_key 需要对所有设备重新配对（pairing）。
:::

::: tip
[通过更改 Zigbee 信道减少 Wi-Fi 干扰](../../advanced/zigbee/02_improve_network_range_and_stability.md#reduce-wi-fi-interference-by-changing-the-zigbee-channel)
:::

### 配置生成器

<Configurator />

### 更改 Zigbee 信道

支持更改现有 Zigbee 网络的信道。在 Zigbee 中，这是通过广播一条网络更新消息来通知信道变更实现的。在广播期间处于休眠状态的设备（通常是电池供电的终端设备（end device））不会立即切换，而是在下次唤醒时才会切换。因此建议在更改信道后主动触发这些设备。

::: warning
部分 Zigbee 设备不支持更改信道。如果某个设备在更改后、且已被触发/唤醒的情况下仍然在数分钟后没有响应，你可能需要手动重新配对该设备。
:::

::: warning
更改信道仅支持 `zstack` 和 `ember` 适配器（adapter）。
:::

如果配置文件中的信道发生了变化，Zigbee2MQTT 会在启动时发送该广播。届时会产生如下日志：

```
[2024-07-12 16:28:27] info: 	z2m: Starting Zigbee2MQTT version 1.39.0 (commit #e3fa0bfb)
...
[2024-07-12 16:28:27] warning: 	zh:controller: Configured channel '18' does not match adapter channel '19', changing channel
[2024-07-12 16:28:27] warning: 	zh:controller: Changing channel from '18' to '19'
[2024-07-12 16:28:37] warning: 	zh:controller: Channel changed to '19'
...
[2024-07-12 16:28:37] info: 	z2m: Zigbee2MQTT started!
```

### 在其他文件中指定 network_key

如需将 network_key 指定在其他文件中（例如 `secret.yaml`），请使用以下配置。

**configuration.yaml**

```yaml
# IMPORTANT: Don't forget the quotes!
advanced:
    network_key: '!secret.yaml network_key'
```

**secret.yaml**

```yaml
network_key: [1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]
```
