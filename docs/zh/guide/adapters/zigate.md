# ZiGate 适配器

::: warning ATTENTION
该适配器的实现已**不再维护**。
请考虑购买推荐的适配器。
:::

::: warning ATTENTION

对该适配器的支持仍处于**实验阶段**，暂不建议用于生产环境

:::

对各种 ZiGate 适配器的实验性（alpha 阶段）支持已开始初步开发。这包括所有基于 NXP Zigbee MCU 芯片（如 JN5168 和 JN5169）、运行 ZiGate 3.1d 或更高版本固件的兼容硬件适配器。

::: warning ATTENTION
该适配器不支持多项功能，如果您依赖这些功能，请考虑使用其他适配器。

- [更改信道](../configuration/zigbee-network.md#changing-the-zigbee-channel)，更改需要重新配对所有设备。
- 添加[安装代码](../../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestinstall_codeadd)，这是配对某些设备所必需的。
- [备份](../../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestbackup)
- Inter-PAN，这是 [touchlink](../../guide/usage/touchlink.md) 所必需的

:::

::: warning ATTENTION
zigbee-herdsman 正在为 ZiGate 适配器寻找维护者。详见 [https://github.com/Koenkk/zigbee-herdsman/issues/1037](https://github.com/Koenkk/zigbee-herdsman/issues/1037)
:::

### 配置

```yaml
serial:
    adapter: zigate
```

其他支持的设置有：`adapter_concurrent` 和 `transmit_power`（[文档](../configuration/adapter-settings.md)）。

## 硬件

- [协调器固件](https://zigate.fr/tag/firmware/)
- [讨论](https://github.com/Koenkk/zigbee-herdsman/issues/242)
- [购买](https://zigate.fr/boutique/?orderby=date_desc)

<img src="/images/zigate_usb_ttl.png" width="200" />
