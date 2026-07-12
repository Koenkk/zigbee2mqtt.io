---
sidebarDepth: 1
---

# 设备与组

Zigbee2MQTT 也会将设备和组（group）的定义存储在 `configuration.yml` 中。

大多数选项都是可选的，只有作为 `key` 的 IEEE 地址（或 MAC 地址）和 `friendly_name` 是必需的。

```yaml
devices:
    # First device
    '0x00158d0001d82999':
        friendly_name: 'my_occupancy_sensor'
        retain: true
        disabled: false
        qos: 1
        debounce: 0.5
        debounce_ignore:
            - action
            - brightness
        # Set `homeassistant: null` to skip discovery for this device
        homeassistant:
            # Applied to all discovered entities.
            expire_after: 30
            # Only applied to discovered temperature sensor.
            temperature:
                icon: mdi:oil-temperature
                # Omit values by setting them to null, e.g. don't send device_class
                device_class: null
        # Device type specific examples
        occupancy_timeout: 120
        no_occupancy_since: [10, 600]
        # Ignore update check requests from the device (Zigbee2MQTT will always reply "no image available")
        disable_automatic_update_check: true
    # Another device
    '0x000d6ffffee405eb':
        friendly_name: 'Kitchen bulb'
```

## 通用设备选项

每个 Zigbee 设备都支持以下这些选项。

**`friendly_name`**  
用于设备的 MQTT 主题中。默认情况下，该值为设备 ID（例如 `0x00128d0001d9e1d2`）。

::: tip
你可以在 `friendly_name` 中使用 `/` 分隔符来组织设备结构。
例如，使用 `kitchen/floor_light` 这样的 `friendly_name`，在 MQTT Explorer 中会呈现出对应的 MQTT 结构：`kitchen` 作为文件夹，其中包含 `floor_light`。
:::

::: warning
请注意，`friendly_name` **不允许**以 `/`、`/` + 某个可能的[端点名称](https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/util/utils.ts#L30)（例如 `/left`）或 `/` + 数字（例如 `/4`）结尾。
:::

**`description`**  
该设备的描述信息，例如 `This device is in the kitchen`，会显示在前端界面（frontend）中。

**`retain`**  
保留该设备的 MQTT 消息（默认 `false`）。

**`disabled`**  
禁用该设备。这**不会**阻止该设备在 Zigbee 网络中通信——例如，当收到来自该设备的消息时，Zigbee2MQTT 仍会将其发布出去。此功能适用于会长时间从 Zigbee 网络断开连接的设备（例如圣诞彩灯）。禁用某个设备会产生以下效果：

- 可用性（availability）功能不会再尝试对其进行 ping 探测
- 该设备在 Home Assistant 中将始终显示为 `unavailable`
- Zigbee2MQTT 启动时不会对其进行配置（部分设备需要此步骤才能正常工作）
- 它将被排除在网络扫描（网络拓扑图，network map）之外
- 它将被排除在组的乐观状态更新之外

**`retention`**  
以秒为单位设置 MQTT 消息过期时间，例如 `retention: 900` 表示 15 分钟（默认：未启用）。请确保将 `mqtt.version` 设置为 `5`（参见上文的 `mqtt` 配置）。

**`qos`**  
该设备 MQTT 消息的 QoS 等级。[什么是 QoS？](https://www.npmjs.com/package/mqtt#about-qos)

**`homeassistant`**  
允许覆盖 Home Assistant 发现消息负载中的值。参见上方示例。

**`debounce`**  
对该设备的消息进行防抖处理。例如设置 `debounce: 1` 后，当收到设备的消息时，Zigbee2MQTT 不会立即发布该消息，而是会将其与之后 1 秒内收到的其他消息合并。因此，设备需要有"N 秒的静默期"，之后才会发送合并后的消息。

例如 `debounce: 5` 表示设备需要有"5 秒的静默期"，之后才会发送合并后的消息。

这对于例如 `WSDCGQ11LM` 这样的设备很有用，它会同时发布湿度、温度和气压，但分为 3 条不同的消息。

不要将 debounce 设置得比传感器的上报间隔还长，否则会导致所有消息都被合并防抖，从而完全不会发送出去。

**`debounce_ignore`**  
在 debounce 时间内，保护指定负载属性中值不同的消息不被覆盖。例如设置 `debounce: 1` 和 `debounce_ignore: - action` 后，每个 `action` 值不同的负载都会被发布。这对于例如 `E1744` 这样的设备很有用——转动一次后它会在短时间内发布多条消息，如果只用 `debounce` 而不加 `debounce_ignore`，则只会发布最后一条 action 为 `rotate_stop` 的负载。而 `debounce: 1` 配合 `debounce_ignore: - action` 则会发布所有值不同的 action 消息，至少会有两条（例如 `action: rotate_left` 和 `action: rotate_stop`）。

**`throttle`**  
限制该设备消息的处理频率。例如设置 `throttle: 10` 后，设备的第一条消息会被处理，但接下来 10 秒内的其他所有消息都会被忽略。使用此选项时要小心，与可以忽略部分属性的 `debounce` 不同，此选项会丢弃整条消息。

`debounce` 选项的优先级高于 `throttle`；如果某个设备同时设置了这两个选项，则只有 `debounce` 会生效。

设置此选项可以减少特定设备发送的 MQTT 消息数量，具体减少多少取决于该选项设置的值。若对行为异常的设备设置合适的值，可以大幅减小存储历史数据的外部数据库（例如 Home Assistant）的体积，同时对历史数据质量几乎没有影响。

已知一些环境传感器（如 `TS0601_air_quality_sensor`）以及部分水位传感器等，都能从此选项中受益

**`filtered_attributes`**  
允许阻止某些属性被发布。例如，当设备发布 `{"temperature": 10, "battery": 20}` 时，如果设置了 `filtered_attributes: ["battery"]`，则实际发布的将是 `{"temperature": 10}`。

**`filtered_cache`**  
允许阻止某些属性被写入缓存。这样可以在属性值未发生变化时阻止其被发布。

**`optimistic`**  
乐观（optimistic）模式是一项功能，用于影响在没有收到更新时如何处理设备状态。当为某个设备启用乐观模式后，只要最近发送的命令执行成功，Zigbee2MQTT 就会相应地更新设备状态，而无需等待设备本身返回确认（默认 `true`）。

启用时：例如，如果你发送一条打开灯的命令且命令执行成功，Zigbee2MQTT 会立即更新其内部状态，将灯标记为已打开。如果命令执行失败，则状态不会更新。

禁用时：无论命令是否执行成功，Zigbee2MQTT 只会在设备上报新状态后才更新其内部状态。

**`filtered_optimistic`**  
与 `filtered_attributes` 选项相同，但仅作用于乐观发布的属性。当设置 `optimistic: false` 时此选项不生效。示例：`filtered_optimistic: ["color_mode", "color"]`。

**`icon`**  
允许覆盖前端界面中显示的设备图标（图片），可以是以下之一：

- 图片路径，例如 `device_icons/my-device.png`，注意该图片必须位于 Zigbee2MQTT `configuration.yaml` 旁边的 `device_icons` 目录中，不允许使用其他目录。
- 图片的完整 URL 链接，例如 `https://SOME.SITE/MODEL123.jpg`。

## 特定设备选项

部分 Zigbee 设备（例如 [RTCGQ11LM](/devices/RTCGQ11LM.html)）支持一些特殊属性。要查看你的设备是否有特定于设备类型的配置，请前往[支持的设备](/supported-devices/)页面，点击对应的型号查看设备页面。

在上面的示例中，`occupancy_timeout` 和 `no_occupancy_since` 就是设备特定的选项。

## 默认值

你可以设置默认值，当设备未在其配置块中显式设置某个值时，该默认值会应用于所有设备。你也可以为设备特定选项设置默认值。

```yaml
device_options:
    retain: true
    occupancy_timeout: 120
    no_occupancy_since: [10, 600]
```

## 组

组可以在 `configuration.yaml` 中定义，设备可以通过前端界面或 [MQTT](../usage/mqtt_topics_and_messages.md#组) 添加到组中。更多信息参见[组指南](../usage/groups.md)。

```yaml
groups:
    '1':
        friendly_name: Kitchen lights
        # Optional: Retain messages (true/false) (default: false)
        retain: false
        # Optional: Default transition to be used when e.g. changing brightness (in seconds) (default: 0)
        transition: 2
        # Optional: Change group state when one of the devices in it changes state, see 'State changes' below (default: true)
        optimistic: true
        # Optional: Override Home Assistant discovery properties for this group
        homeassistant:
            name: Kitchen Lights
            icon: mdi:lightbulb-group
```

::: warning
组的 key 必须是唯一的，且为带引号的整数。
:::

**`homeassistant`**  
允许覆盖该组的 Home Assistant 发现消息负载中的值，任何 Home Assistant MQTT 发现属性都可以被覆盖。

## 将配置提取到单独的文件中

通常 `devices` 和 `groups` 会作为对象在 `configuration.yaml` 中指定，但也可以将这部分配置提取到单独的文件中。

```yaml
# Define the files which contains the configs
devices: devices.yaml
groups: groups.yaml
```

```yaml
# devices.yaml
'0x00158d0001d82999':
    friendly_name: 'my_occupancy_sensor'
```

```yaml
# groups.yaml
'1':
    friendly_name: group_1
    devices:
        - 0x00158d0001d82999
```
