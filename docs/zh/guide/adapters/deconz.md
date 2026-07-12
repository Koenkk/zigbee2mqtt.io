# deCONZ (Dresden Elektronik)

::: warning 注意
此适配器不支持部分功能，如果你依赖这些功能，请考虑使用其他适配器。

- Inter-PAN（[touchlink](../../guide/usage/touchlink.md) 功能所需）
- 降低[发射功率](../../guide/configuration/adapter-settings.md)
- ConBee II（RaspBee II 也可能）[可能存在网络连接问题（MacNoAck）](https://github.com/Koenkk/zigbee2mqtt/issues/28041)
- [安装代码](../../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestinstall_codeadd)支持需要较新的协调器固件版本，部分设备配对时需要此功能。

:::

### Configuration

```yaml
serial:
    adapter: deconz
```

其他支持的设置项：`baudrate`（[文档](../configuration/adapter-settings.md)）。

## Hardware

ConBee / ConBee II / ConBee III / RaspBee / RaspBee II

USB 连接的适配器（ConBee / ConBee II / ConBee III）以及 Raspberry Pi GPIO 模块（RaspBee 和 RaspBee II）。

在 `configuration.yaml` 的 serial 部分中添加正确的 baudrate。

- 对于 ConBee2：无需指定 baudrate
- 对于 Conbee 和 RaspBee2：为 38400
- 对于 ConBee3：为 115200

建议使用最新的稳定版固件，具体版本可在[固件更新日志](https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Firmware-Changelog)中查看。

- [协调器固件](https://deconz.dresden-elektronik.de/deconz-firmware/)
- [刷写方法](https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Update-deCONZ-manually)
- [购买](https://phoscon.de/conbee2#buy)（ConBee II）
- [购买](https://phoscon.de/conbee3#buy)（ConBee III）
- [购买](https://phoscon.de/raspbee2#buy)（RaspBee II）

<img src="/images/conbee.jpg" width="200" />
