---
redirectFrom: /how_tos/how_to_connect_to_a_remote_adapter.md
---

# 连接远程适配器（adapter）

这篇操作指南说明如何让 Zigbee2MQTT 使用位于远程位置的适配器（adapter）。
我们将使用 ser2net 来实现这一点，它允许通过 TCP 连接到串口。
这样你就可以，例如，搭建一台连接了适配器的 Raspberry Pi Zero，而在另一台系统上运行 Zigbee2MQTT。下面的说明需要在连接适配器的那台系统上执行。

::: warning
请注意，不建议通过 WiFi、WAN 或 VPN 连接，经由 Serial-Proxy-Server（也称为 Serial-to-IP 网桥或 Ser2Net 远程适配器）使用 Zigbee 协调器（coordinator）。

Zigbee 协调器所使用的串行协议没有足够的健壮性、韧性或容错能力，无法应对不稳定连接中可能出现的丢包和延迟。

Zigbee 协调器需要与其串口接口保持稳定的本地连接，在它与运行于主机上的 Zigbee 网关应用程序之间不能出现通信中断。

因此需要提醒你：通过 WiFi/WAN/VPN，使用 Ser2Net 或其他串行代理/转发隧道工具连接网络接入的远程 Zigbee 协调器，在正常使用场景下是不受支持的。
:::

## 1. 安装 ser2net

```bash
sudo apt-get install ser2net
```

## 2(a). 配置 ser2net (<4.0)

```bash
sudo nano /etc/ser2net.conf
```

添加以下条目，将 `/dev/ttyACM0` 替换为你的适配器的正确路径。

```
20108:raw:0:/dev/ttyACM0:115200 8DATABITS NONE 1STOPBIT
```

完成后重启系统。

```bash
reboot
```

## 2(b). 配置 ser2net (>=4.0)

```bash
sudo nano /etc/ser2net.yaml
```

添加以下条目，将 `/dev/ttyACM0` 替换为你的适配器的正确路径。

```
connection: &con01
  accepter: tcp,20108
  connector: serialdev,/dev/ttyACM0,115200n81,local
  options:
    kickolduser: true
```

如果使用 Slaesh 协调器，你需要以特定方式设置 RS232 接口的 DTR 和 RTS 引脚。截至目前（2023-02-04），Raspberry Pi OS 自带的 ser2net 版本还不够新，无法正确完成这项设置，详见 https://github.com/cminyard/ser2net/issues/46 。你可能需要在你的树莓派上自行编译 "gensi" 和 "ser2net" 软件包。其他发行版可能已经自带更新的版本。当你拥有支持 "dtr=off" 设置的 ser2net 版本后，使用以下配置：

```
connection: &con01
  accepter: tcp,20108
  connector: serialdev,/dev/ttyACM0,115200n81,local,dtr=off,rts=off
  options:
    kickolduser: true
```

对于 ConBee II / RaspBee II，使用以下配置：

```
connection: &con01
  accepter: tcp,20108
  connector: serialdev,/dev/ttyACM0,115200n81,nobreak,local
  options:
    kickolduser: true
```

完成后重启系统。

```bash
reboot
```

## 3. 配置

现在相应地编辑 Zigbee2MQTT 的 `configuration.yaml`，将 `192.168.2.13` 替换为连接适配器的那台系统的 IP 地址或主机名。

```yaml
serial:
    port: 'tcp://192.168.2.13:20108'
```

完成！现在你可以启动 Zigbee2MQTT 了。
