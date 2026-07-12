---
sidebarDepth: 1
---

# 适配器设置

::: warning 注意
并非所有功能都受每种适配器（adapter）支持，具体支持情况请查看你的[适配器页面](../../guide/adapters/README.md)。
:::

## 基础配置

如果 Zigbee2MQTT 无法自动检测到你的适配器（启动失败并提示：`USB adapter discovery error (No valid USB adapter found). Specify valid 'adapter' and 'port' in your configuration.`），我们需要在 `configuration.yaml` 中配置 `serial` 部分。

首先确定你的适配器所使用的端口：

- 对于 USB 适配器：在 Windows 上运行时请参考[这些说明](../installation/05_windows.md#starting-zigbee2mqtt)；在 Linux 上执行 `ls -l /dev/serial/by-id`：

    ```bash
    pi@raspberry:/ $ ls -l /dev/serial/by-id
    total 0
    lrwxrwxrwx. 1 root root 13 Oct 19 19:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -> ../../ttyACM0
    ```

    - 如果仍然无法连接，请确认你的适配器处于 USB 模式。部分适配器（例如 [ZigStar](https://xzg.xyzroe.cc/hardware/)）默认以网络模式运行，只有切换到 USB 模式后才能通过 USB 通信。

- 对于网络适配器，你需要通过路由器/交换机的网页管理界面查找适配器的 IP 地址。请确保该适配器已被分配静态 IP 地址！
    - 另外，如果你的适配器支持 mDNS，请参阅下方的 mDNS 相关文档。

接下来，通过查看你的[适配器页面](../adapters/README.md)确定你使用的 `adapter` 类型。
可选的适配器类型有 `zstack`、`ember`、`deconz`、`zigate` 或 `zboss`。

以上面的 USB 适配器示例结合 `zstack` 适配器为例，我们需要在 `configuration.yaml` 中添加以下内容：

```yaml
serial:
    # Location of the adapter
    # USB adapters - use format "port: /dev/serial/by-id/XXX"
    # Ethernet adapters - use format "port: tcp://192.168.1.12:6638"
    port: /dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00
    # Adapter type, allowed values: `zstack`, `ember`, `deconz`, `zigate` or `zboss`
    adapter: zstack
```

这样的 serial 配置应该足以让 Zigbee2MQTT 启动。

## mDNS Zeroconf 发现

Zigbee2MQTT 支持自动发现 Zigbee 网络适配器。要使用此功能，你的适配器必须支持通过 mDNS Zeroconf 进行发现。

如果你有多台设备使用相同的 mDNS 服务类型（名称），启用自动发现选项的 Zigbee2MQTT 会随机连接其中一台。因此为了正常使用，我们建议只连接一台具有相同 mDNS 服务类型（名称）的物理网络适配器。否则，请按照上文所述通过 IP 地址和端口进行设置。

::: warning 注意
使用此自动检测功能时，`configuration.yaml` 中的以下参数将被忽略：`adapter`、`baudrate`
:::

已测试支持 mDNS Zeroconf 自动发现的设备列表：

| 设备    | MDNS 服务类型 |
| :------ | :-----------: |
| SLZB-06 |    slzb-06    |
| UZG-01  |    uzg-01     |
| CZC-01  |      czc      |

```yaml
serial:
    port: mdns://slzb-06
    # port: mdns://uzg-01
    # port: mdns://czc
    # Optional: disable LED of the adapter if supported (default: false)
    disable_led: false
    # Optional: Baud rate speed for serial port, this can be anything firmware support but default is 115200 for Z-Stack and EZSP, 38400 for Deconz, however note that some EZSP firmware need 57600.
    baudrate: 115200
    # Optional: RTS / CTS Hardware Flow Control for serial port (default: false)
    rtscts: false
```

## 高级配置

```yaml
advanced:
    # Optional: configure adapter concurrency (e.g. 2 for CC2531 or 16 for CC26X2R1) (default: null, uses recommended value)
    adapter_concurrent: null
    # Optional: Transmit power setting in dBm (default: 5).
    # This will set the transmit power for devices that bring an inbuilt amplifier.
    # It can't go over the maximum of the respective hardware and might be limited
    # by firmware (for example to migrate heat, or by using an unsupported firmware).
    # For the CC2652R(B) this is 5 dBm, CC2652P/CC1352P-2 20 dBm.
    transmit_power: 5
    # Optional: Set the adapter delay, only used for Conbee/Raspbee adapters (default 0).
    # In case you are having issues try `200`.
    # For more information see https://github.com/Koenkk/zigbee2mqtt/issues/4884
    adapter_delay: 0
```

<!-- TODO: some notes about rtscts? Is it useful, which adapter supports it? -->

::: tip
也可以通过 TCP 连接 USB 适配器。参见如何连接[远程适配器](../../advanced/remote-adapter/connect_to_a_remote_adapter.md)。
:::
