---
sidebarDepth: 1
redirectFrom: /information/availability.md
---

# 设备可用性

可用性（availability）功能用于检查你的设备是否在线。设备的可用性状态会发布到
`zigbee2mqtt/[FRIENDLY_NAME]/availability`，payload 为 `{"state":"online"}` 或 `{"state":"offline"}`（这是一条保留的 MQTT 消息）。

```yaml
# Optional: Availability feature
availability:
    # Enable the feature (default: false)
    enabled: true
```

可用性功能对主动型设备和被动型设备的工作方式不同，因为无法对被动型设备进行 ping。

- 主动型设备（_非电池供电_）：默认情况下必须每 10 分钟签入\*\* 一次。
  如果没有签入，则会对其进行 ping，若 ping 失败，该设备将被标记为 `offline`。
- 被动型设备（_电池供电_）：默认情况下必须每 25 小时签入\*\* 一次。
  如果没有签入，则会被标记为 `offline`。

请注意，此超时时间会在 Zigbee2MQTT 重启后依然保留。因此，例如如果你把 Zigbee2MQTT 停止超过 10
分钟，那么在再次签入\*\* 之前，你所有的主动型设备最初都会被标记为 `offline`。

\*\* 签入指的是设备发出的、能够到达 Zigbee2MQTT 的任何一种 Zigbee 消息（甚至包括未显示/未上报的内部更新）。

## 高级配置

```yaml
# Note: all options are optional
availability:
    enabled: true
    active:
        # Time after which an active device will be marked as offline in minutes (default: 10 minutes)
        timeout: 10
        # Maximum jitter (in msec) allowed on timeout to avoid availability pings trying to trigger around the same time (default: 30000, min: 1000)
        max_jitter: 30000
        # Enable timeout backoff on failed availability pings (default: true)
        # Pattern used: x1.5, x3, x6, x12... (with default timeout of 10min: 10, 15, 30, 60, 120...)
        backoff: true
        # Pause availability pings when backoff reaches over this limit until a new Zigbee message is received from the device. (default: 0, min: 0)
        # A value of zero disables pausing, else see `backoff` pattern above.
        pause_on_backoff_gt: 0
    passive:
        # Time after which a passive device will be marked as offline in minutes (default: 1500 minutes aka 25 hours)
        timeout: 1500

devices:
    '0x12345678':
        friendly_name: 'my_bulb'
        # Set availability: false to disable the availability feature for a specific device
        availability: false
    '0x87654321':
        friendly_name: 'my_switch'
        # Change availability timeout to 3 minutes for this device only
        availability:
            timeout: 3
            # active devices also can specify `max_jitter`, `backoff`, `pause_on_backoff_gt` (see above)
```

如果你只想为部分设备启用可用性功能，不要在 `configuration.yaml` 中添加 `availability: enabled: true`，
而是只针对该设备进行设置，例如：

```yaml
devices:
    '0x87654321':
        friendly_name: 'my_switch'
        # Enable availability for just 'my_switch'
        availability: true
```

## 状态获取

当可用性功能启用后，一旦设备重新连接或在网络中进行自我通告，Zigbee2MQTT 就会获取该设备的状态。例如，当一个灯泡在重新接入
市电后自动开启时，这项功能就很有用。以下属性会被读取：`state`、`brightness`、`color_temp` 和 `color`。

## 性能方面的考虑

- ping 操作可能会给协调器（coordinator）带来较大负担，尤其是在使用 CC2530 或 CC2531 适配器（adapter）时。
- 提高主动型设备的 `timeout` 值可以减少 ping 的次数，从而降低对协调器的压力。

## 组

启用设备可用性后，组（group）的可用性也会随之启用。当组内至少有一个设备可用时，该组就会被标记为可用。
