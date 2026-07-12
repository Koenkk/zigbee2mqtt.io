---
redirectFrom: /how_tos/how_to_connect_to_a_remote_sonoff_zbbridge.md
---

# 连接远程 Sonoff ZBBridge

这篇操作指南说明如何让 Zigbee2MQTT 搭配使用商用 Sonoff ZBBridge 网关。
我们将使用刷入自定义固件的 Sonoff ZBBridge 网关，通过 TCP 连接到串口。
这样你就可以使用一个简单的现成 Hub/网关，为其刷入自定义固件，然后将其用作你的协调器（coordinator）。

::: warning
请注意，目前对 EZSP 的支持仍处于**实验性**阶段。
:::

::: warning
不建议使用基于 WiFi 的 Serial-to-IP 网桥，因为串行协议没有足够的容错能力，无法应对 WiFi 连接中通常会出现的丢包或延迟。
:::

## 1. 刷入 Tasmota ZBBridge 固件

为了让网关对我们有用，我们希望为其刷入自定义固件（[tasmota-zbbridge](https://tasmota.github.io/docs/Zigbee/)），这样我们就可以摆脱云服务。
刷写流程请参照 [DigiBlur 的指南](https://www.digiblur.com/2020/07/how-to-use-sonoff-zigbee-bridge-with.html)，执行到第 6 步为止。

## 2. 配置

现在相应地编辑 Zigbee2MQTT 的 `configuration.yaml`，将 `192.168.2.13` 替换为连接适配器的那台系统的 IP 地址或主机名。同时将 `20108` 替换为你在刷写网关时（前一点的第 6 步中）配置的端口。

请注意，目前对 EZSP 的支持仍处于**实验性**阶段。

```yaml
serial:
    port: 'tcp://192.168.2.13:20108'
    adapter: ezsp
```

完成！现在你可以启动 Zigbee2MQTT 了。
