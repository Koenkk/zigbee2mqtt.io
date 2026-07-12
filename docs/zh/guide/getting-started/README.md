---
sidebarDepth: 1
next: ../usage/
redirectFrom: /getting_started/what_do_i_need.md
---

# 快速入门

## 前置条件

要使用 Zigbee2MQTT，我们需要以下硬件：

1. <img src="/images/zzh.jpg" title="ZZH" class="float-left" /> **一个 Zigbee 适配器（adapter）**，它是运行 Zigbee2MQTT 的主机系统与 Zigbee 无线通信之间的接口。Zigbee2MQTT 支持多种连接方式的适配器，比如 USB、GPIO，或者通过 WIFI、以太网远程连接。
   推荐使用的适配器是 [zStack](../adapters/zstack.md) 和 [EmberZNet](../adapters/emberznet.md)。查看 [支持的适配器](../adapters/README.md) 了解所有受支持的适配器。建议在安装前先查看你所用适配器的相关说明，确认是否需要额外的配置参数。<br class="clear" />

2. <img src="/images/pi.jpg" title="Raspberry Pi" class="float-left" /> **一台主机系统**，用来运行 Zigbee2MQTT（例如 Raspberry Pi 或 Intel NUC）。Zigbee2MQTT 可以在多种计算机和平台上运行，包括 Linux、Windows 和 MacOS。该主机上需要安装 MQTT 代理（broker）。推荐使用 [Mosquitto](https://www.mosquitto.org/download/)（[Raspberry Pi 教程](https://randomnerdtutorials.com/how-to-install-mosquitto-broker-on-raspberry-pi/)），不过[其他](https://mqtt.org/software/)代理通常也可以正常工作。<br class="clear" />

3. <img src="/images/xiaomi_sensors.jpg" title="Zigbee devices" class="float-left" /> 一个或多个将与 Zigbee2MQTT 配对（pairing）的 **Zigbee 设备**。<br class="clear" />

::: tip 提示
<img alt="USB Cable" src="/images/usb_extension_cable.jpg" class="float-left" /> 使用 USB 延长线可以提升网络覆盖范围和稳定性。如果你的设备出现任何问题（超时、无法配对、设备不可达、设备从网络中掉线等），这是首先应该尝试的措施，以避免干扰。
参见 [提升网络覆盖范围和稳定性](../../advanced/zigbee/02_improve_network_range_and_stability.md)。<br class="clear" />
:::

## 安装

下一步是安装 Zigbee2MQTT，请根据你的平台按照[安装说明](../installation/)进行操作。Zigbee2MQTT 启动后，即可继续下面的引导流程。

## 引导设置

Zigbee2MQTT 在首次运行时（即不存在 `configuration.yaml` 文件时）会提供一个引导设置流程。

引导设置页面默认与前端界面（frontend）使用相同的 URL（`http://localhost:8080`）。_注意：对于某些特殊设置（例如 Home Assistant），此 URL 可能会有所不同。_

<img src="/images/onboarding.png" alt="Onboarding" style="border: 2px solid black;">

如果发现流程无法识别 `adapter type`（适配器类型），你可以在对应页面中找到最常见适配器的清单：[zstack](../adapters/zstack.md)、[ember](../adapters/emberznet.md)、[deconz](../adapters/deconz.md)、[zigate](../adapters/zigate.md)、[zboss](../adapters/zboss.md)。

:::tip 提示
适配器发现流程会尝试查找串口设备和可通过 mDNS 发现的设备。
刷新页面会重新执行发现流程。

_注意：并非所有配置都支持此功能。如果不支持，你需要手动输入适配器路径和类型。_
:::

如果提交配置后 Zigbee2MQTT 验证失败，页面会显示错误详情。

如果提交初始配置后 Zigbee2MQTT 启动失败（例如适配器路径填写错误），下次启动时会再次执行引导设置流程。

:::tip 提示
在引导设置失败页面中，`node` 进程会一直保持运行，直到页面上的 `Close` 按钮被点击，或该进程被手动退出。
:::

:::tip 提示
如果需要修改配置，你也可以通过环境变量 `Z2M_ONBOARD_FORCE_RUN=1` 强制稍后再次运行引导设置流程。
根据你的具体环境，这可能会以开关选项的形式提供（例如 Home Assistant 加载项），也可能需要你手动为 `node` 进程设置该变量。
:::

:::details 可用于自定义引导流程的环境变量
如果你的环境需要自定义引导设置服务，可以使用以下环境变量：

- `Z2M_ONBOARD_NO_SERVER=1` => 完全禁用引导设置服务（_优先级高于以下所有选项_）
- `Z2M_ONBOARD_URL=http://0.0.0.0:8080` => 设置可访问引导设置页面的 URL
- `Z2M_ONBOARD_NO_FAILURE_PAGE=1` => 禁用失败页面（_失败信息仍会被记录到日志，进程会立即退出_）
- `Z2M_ONBOARD_FORCE_RUN=1` => 参见上方提示
- `Z2M_ONBOARD_NO_REDIRECT=1` => 如果启用了前端界面，阻止引导验证页面尝试跳转到前端界面（_适用于前端界面 URL 较特殊的环境_）

:::

## 连接设备

在[支持的设备](/supported-devices/)中搜索你的设备，并按照说明进行配对（pairing）。

如果没有相关说明，通常将设备恢复出厂设置后即可完成配对。

当日志中出现类似下方的内容时，说明你的设备已配对成功，此时你便可以通过前端界面和 MQTT 消息来控制它了。

```
Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired
```
