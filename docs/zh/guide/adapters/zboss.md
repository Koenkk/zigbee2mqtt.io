# ZBOSS 适配器（adapter）

::: warning 注意

此适配器目前的支持状态为**实验性**，尚不建议用于生产环境

:::

ZBOSS 协议的适配器基于 ZBOSS NCP Host 的示例 [Zigbee NCP（网络协处理器）](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/zigbee/ncp/README.html)，适用于 Nordic Semiconductor 的 nRF5340、nRF52840、nRF52833、nRF21540 等芯片。

此外，得益于专用固件 https://github.com/tostmann/esp-coordinator，ZBOSS 协议也可以用于与 Espressif ESP32-C6/H2 芯片进行交互。

芯片与主机之间的交互遵循 [ZBOSS NCP Serial Protocol](https://cloud.dsr-corporation.com/index.php/s/BAn4LtRWbJjFiAm)。

该适配器的代码基于 [zigpy-zboss 库](https://github.com/kardia-as/zigpy-zboss)。

::: warning 注意
目前，此适配器不支持多项功能，如果你需要用到这些功能，请考虑使用其他适配器。

- [更改信道](../configuration/zigbee-network.md#changing-the-zigbee-channel)，更改信道需要重新配对所有设备。
- 添加[安装代码](../../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestinstall_codeadd)，部分设备配对时需要用到此功能。
- [备份](../../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestbackup)
- Inter-PAN，[touchlink](../../guide/usage/touchlink.md) 功能需要用到它

:::

### 配置

```yaml
serial:
    adapter: zboss
```

其他支持的设置项包括：`adapter_concurrent` 和 `transmit_power`（[文档](../configuration/adapter-settings.md)）。

## 硬件

目前已在 nRF52840 Dongle、Nice!Nano v2（nRF52840）以及 ESP32-C6/H2 开发板上测试通过。

- [适用于搭载 nRF52840 SoC 的 Nordic Semiconductor 的预编译协调器（coordinator）固件](https://github.com/kardia-as/nrf-zboss-ncp)

<img src="https://docs-be.nordicsemi.com/bundle/ncs-latest/page/nrf/_images/zigbee_ncp_sample_overview.svg" width="500" />

- [适用于搭载 nRF52840 SoC 的 Nice!Nano v2 的预编译协调器固件](https://github.com/captainlettuce/zboss_adapter_nice_nano_v2)

<img alt="Nice!Nano v2" src="https://github.com/user-attachments/assets/db2f3041-e36c-4921-b078-7cf0236eeae3" width="75" />

- [ESP32-C6 固件](https://github.com/tostmann/esp-coordinator) — 是原始项目 `andryblack/esp-coordinator`（该项目已被归档，并指向此处）的积极维护的后继项目；同时提供了一个[基于浏览器的网页烧录工具](https://install.busware.de/zboss/)

<img src="https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32c6/_images/esp32-c6-devkitc-1-isometric_v1.2.png" width="200" />
