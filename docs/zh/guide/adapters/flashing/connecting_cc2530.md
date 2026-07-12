---
redirectFrom: /information/connecting_cc2530.md
---

# 连接 CC2530

## 引脚布局

各个 CC2530 模块的引脚布局有所不同

| 名称                  | 引脚布局                                                                       | 图片                                          |
| --------------------- | ------------------------------------------------------------------------------ | --------------------------------------------- |
| CC2530                | ![CC2530 pin layout](/images/cc2530_pin_layout.png)                            | ![CC2530](/images/cc2530.jpg)                 |
| Webee CC2530 + CC2591 | ![Webee CC2530 + CC2591 pin layout](/images/webee_cc2530_cc2591_pinlayout.png) | ![CC2530 + CC2591](/images/cc2530_cc2591.jpg) |

## 使用 USB 转串口适配器（adapter）

### 已确认可用

本教程已确认适用于以下基于 CC2530 的设备：

| 设备       | 图片                          |
| ---------- | ----------------------------- |
| **CC2530** | ![CC2530](/images/cc2530.jpg) |

以及以下 USB 转串口适配器：

| 设备       | 图片                          |
| ---------- | ----------------------------- |
| **CP2102** | ![CP2102](/images/CP2102.png) |

##### 刷写固件

所需的协调器（coordinator）固件可以在此处找到：[Zigbee 1.2](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin) 和 [Zigbee 3.0](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)。

### 连接

按照以下映射将 CC2530 连接到 USB 转串口适配器：

| USB-Serial Adapter | CC2530 |
| :----------------: | :----: |
|        3V3         |  VCC   |
|        GND         |  GND   |
|        TXD         |  P02   |
|        RXD         |  P03   |

现在将 USB 转串口适配器插入 USB 端口并启动 Zigbee2MQTT，尽情享受吧！

## 连接到 Raspberry Pi (Zero)

CC2530 可以通过 GPIO 引脚连接到 Raspberry Pi (Zero) —— 不需要 USB2FTDI。

必须禁用已安装的 Linux 系统对 UART 的使用：[详细说明见此](https://www.raspberrypi.org/documentation/configuration/uart.md)

在内核中启用 UART，并禁用蓝牙对 UART 的使用。

在 `/boot/config.txt` 中添加以下几行：

```
enable_uart=1
dtoverlay=pi3-disable-bt
```

禁用调制解调器系统服务（在命令行中）：

```
sudo systemctl disable hciuart
```

如果 `/boot/cmdline.txt` 中存在以下任一条目，请将其移除，以删除控制台条目：

```
console=serial0,115200 console=ttyAMA0,115200

```

重启你的 Raspberry。

### 将 CC2530 接线到 Raspberry

```
CC C2530 -> Raspberry
VCC -> 3,3V (Pin1)
GND -> GND (Pin6)
P02 -> TXD (Pin8 / BCM 14)
P03 -> RXD (Pin10 / BCM 15)
```

![CC2531PI](/images/CC2530_PI.jpg)

### 配置 Zigbee2MQTT

修改 `data/configuration.yaml` 文件中的串口：

```
serial:
  port: /dev/ttyAMA0
```

尽情享受吧。

## 通过 ESP8266 作为串口转 WiFi 网桥

此设置允许你将 CC2530 连接到可以放置在家中任何位置的 ESP8266。Zigbee2MQTT 将通过串口套接字连接到你的 CC2530。

### 接线

按照以下方案将 CC2530 接线到 ESP8266：

| ESP8266 | CC2530 |
| :-----: | :----: |
|   3v3   |  VCC   |
|   GND   |  GND   |
|   TX    |  P02   |
|   RX    |  P03   |
|   GND   |  P20   |
|   GND   |  P04   |
|   GND   |  P05   |

### 方案一 —— 使用 ESPEasy 刷写 ESP8266

ESP8266 需要刷写 ESPEasy 固件。ESPEasy 提供了足够详尽的文档，助你快速上手：

- [如何使用 ESPEasy 刷写 ESP8266](https://www.letscontrolit.com/wiki/index.php?title=Tutorial_ESPEasy_Firmware_Upload)
- ESP8266 固件：[ESP_Easy_mega-XXXXXXXX_normal_ESP8266_4096.bin](https://github.com/letscontrolit/ESPEasy/releases)
- [关于 ESPEasy 的更多信息](https://www.letscontrolit.com/wiki/index.php/ESPEasy#Introduction)

### 设置 ESPEasy

打开 ESPEasy 的网页界面并完成设置。之后再次打开该网页界面。

点击第一个任务的 _Devices_（设备）编辑按钮，并从下拉列表中选择 _Communication - Serial Server_。

按如下方式填写表单：

```
a.    Name: ZIGBEE2MQTT
b.    Enabled: checked
c.    TCP Port: a number between 1000 and 9999 "1775"
d.    Baud Rate: 115200
e.    Data bits: 8
f.    Parity: No Parity
g.    Stop bits: 1
h.    Reset target after boot: - none –
i.    RX receive timeout: 0
j.    Event processing: Generic
```

点击 Submit，设置即完成。

### 方案二 —— 使用 Tasmota 刷写 ESP8266

ESP8266 需要刷写 Tasmota 固件，**"zbbridge" 构建版本**。请在以下指南中查找刷写说明：

- [Tasmota github](https://github.com/arendst/Tasmota)
- [快速上手](https://tasmota.github.io/docs/Getting-Started/)
- [串口转 TCP 网桥文档](https://tasmota.github.io/docs/Serial-to-TCP-Bridge/)

串口转网络功能并不需要 MQTT，但用它来监控你的网桥是个不错的选择。

### 设置 Tasmota

打开 Tasmota 的网页界面并完成基本的网络设置。接下来在 "Configuration"（配置）的 "Configure Module"（配置模块）中定义你的 RX 和 TX 引脚。Rx/Tx 是相对于 ESP 设备而言的。例如对于 ESP8266/ESP01 的硬件串口，将 GPIO1 设为 `TCP Tx`，GPIO3 设为 `TCP Rx`。

接下来，在 Tasmota 的主界面打开 "Console"（控制台）。输入 `TCPBaudRate 115200`。确定要使用的端口号并进行设置。例如端口号为 8888 时运行：

```
Rule1 ON System#Boot do TCPStart 8888 endon
Rule1 1
```

### Zigbee2MQTT 配置

现在将以下内容添加到 Zigbee2MQTT 的 `configuration.yaml` 中：

```yaml
serial:
    port: 'tcp://192.168.2.13:20108'
    adapter: zstack
```

注意修改 IP 地址和端口。
现在你可以启动 Zigbee2MQTT 了。
