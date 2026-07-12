---
redirectFrom: /information/flashing_the_cc2531.md
---

# 刷写 CC2531 USB 适配器（adapter）

固件可以使用多种设备刷写。最简单但也最昂贵的方式是使用 Texas Instruments 出品的 _CC Debugger_，或其中国克隆版 _SmartRF04EB_，本页将对此进行介绍。不过，你也可以使用 _Raspberry Pi_，或 _Arduino Uno_ 之类的 MCU，抑或是廉价的 _ESP8266_/_ESP32_，配合四根杜邦线（以及可选的下载线）来完成刷写。关于其他刷写方式的更多信息，请参阅：[固件刷写的其他方法](./alternative_flashing_methods.md)。使用 Arduino/ESP8266/ESP32 时，你可以采用下方"基于网页的方案"一节所介绍的、基于 XZG Multi-Tool 的简易浏览器刷写方法。

**注 1**：如果你已经在运行一个 Zigbee 网络：重新刷写固件并不需要重新配对所有设备，参见[哪些情况需要/不需要重新配对所有设备？](../../faq/README.md#what-does-and-does-not-require-repairing-of-all-devices)

**注 2**：本教程中我们将刷写默认固件。对于较大规模的网络（20 台以上设备）或遇到稳定性问题时，推荐使用[源路由固件](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/source_routing)。该固件对直接子设备（direct children）的数量限制为 5 个，因此请确保网络中有足够多的路由器（router）。

**注 3**：CC2531 USB 适配器也可以刷写 [CC2530 固件](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/default)，通过 P0.2/P0.3 串行引脚（即 IO 扩展接口的第一和第二个引脚）来运行。将 CC2531 与 ESP8266 搭配使用时（就像使用 [CC2530](./connecting_cc2530.md#via-an-esp8266) 那样）需要格外小心：板载 USB 电源可能无法在不过热/故障的情况下再为一块 ESP8266 供电。

## 所需硬件

刷写 CC2531 需要以下额外的硬件：

| 名称          | 价格                   | 图片                                                     |
| ------------- | ---------------------- | -------------------------------------------------------- |
| CC Debugger   | AliExpress 上约 9 美元 | ![CC Debugger](/images/cc_debugger.jpg)                  |
| CC2531 下载线 | AliExpress 上约 2 美元 | ![Downloader cable CC2531](/images/downloader_cable.png) |

或者，使用 XZG Multi-tool 时，你也可以用几乎任何 Arduino、ESP8266 或 ESP32 开发板来代替 CC Debugger。

## 基于网页的方案

### 使用 CC Debugger（适用于任何桌面操作系统和 Android）

1. 主机设备上无需安装任何软件（Windows 用户需要 WinUSB 驱动）
2. 要求：支持 WebUSB 的浏览器（Chrome、Edge 或基于 Chromium 的浏览器）
3. 连接 `CC Debugger --> CC2531 downloader cable --> CC2531 USB stick`
4. 通过 USB **同时**连接 `CC2531 USB stick` 和 `CC Debugger` 到你的设备
5. 如果 CC Debugger 上的 LED 灯是红色，按下 Reset（复位）按钮。LED 灯应变为绿色
6. 下载固件 [CC2531_DEFAULT_20211115.zip](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip)
7. 打开 [XZG Multi-tool](https://mt.xyzroe.cc/)，点击 `Connect Debugger` 并刷写固件（`.hex` 或 `.bin` 文件）

[**完整说明 →**](https://github.com/xyzroe/XZG-MT/blob/main/docs/how-to/cc_debuger.md)

### 使用 Arduino/ESP8266/ESP32（适用于任何桌面操作系统）

1. 电脑上无需安装任何软件
2. 要求：支持 Web Serial API 的浏览器（Chrome、Edge 或基于 Chromium 的浏览器）
3. 为你的 Arduino/ESP8266/ESP32 开发板刷写 CCLoader 固件（可以使用 [XZG Multi-tool](https://mt.xyzroe.cc/) 完成）
   _关于如何将开发板连接到 CC2530 的引脚说明，请在云端固件列表中选择固件后点击 info 按钮，弹窗会显示所需的连接方式。_
4. 连接 `CCLoader (Arduino/ESP) --> CC2531 downloader cable --> CC2531 USB stick`
5. 通过 USB **同时**连接 `CC2531 USB stick` 和 `CCLoader board` 到你的电脑
6. 下载固件 [CC2531_DEFAULT_20211115.zip](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip)
7. 打开 [XZG Multi-tool](https://mt.xyzroe.cc/)，点击 `Connect Loader` 并刷写固件（`.hex` 或 `.bin` 文件）

[**完整说明 →**](https://github.com/xyzroe/XZG-MT/blob/main/docs/how-to/cc_loader.md)

## Windows

1. 安装 [SmartRF Flash programmer](http://www.ti.com/tool/flash-programmer)（**不是 V2 版本**）。该软件免费，但下载时需要 Texas Instruments 账号。
2. 在你的电脑上安装 [CC debugger 驱动](https://www.ti.com/tool/CC-DEBUGGER)（仅限 Windows）。继续之前，请确认 CC Debugger 驱动已正确安装。参见 [Figure 1. Verify Correct Driver Installation @ Chapter 5.1](http://www.ti.com/lit/ug/swru197h/swru197h.pdf)。如果 CC Debugger 未被正确识别，请[手动安装驱动](https://www.youtube.com/watch?v=jyKrxxXOvQY)。
3. 连接 `CC debugger --> Downloader cable CC2531 --> CC2531 USB sniffer`。
4. 通过 USB **同时**连接 `CC2531 USB sniffer` 和 `CC debugger` 到你的电脑。
5. 如果 CC debugger 上的指示灯是红色，按下 CC debugger 上的复位按钮。此时 CC debugger 上的指示灯应变为绿色。如果没有变绿，请使用 [CC debugger 用户指南](http://www.ti.com/lit/ug/swru197h/swru197h.pdf) 排查问题。

    ![How to connect](/images/connected.jpg)

6. 下载固件 [CC2531_DEFAULT_20211115.zip](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip)
7. 启动 SmartRF Flash Programmer，按下图所示进行设置，然后点击 `Perform actions`。请确保选择的是 `.hex` 文件，而不是 `.bin` 文件！

    ![SmartRF Flash Programmer](/images/smartrf.png)

## Linux 或 MacOS

本节大部分说明感谢 [@Frans-Willem](https://github.com/frans-Willem) 提供。

1. 使用包管理器安装 [CC-Tool](https://github.com/dashesy/cc-tool) 所需的前置依赖（例如 macOS 上的 [Homebrew](https://brew.sh/)）

- Ubuntu（版本 >= 20.04）：使用 `sudo apt install cc-tool` 安装 cc-tool，然后跳到第 3 步。
- Ubuntu/Debian：libusb-1.0-0-dev、libboost-all-dev、autoconf、libtool
- Fedora：dh-autoreconf、boost-devel、libusb1-devel、gcc-c++
- Archlinux：dh-autoreconf、libusb、boost
- macOS：`brew install autoconf automake libusb boost pkgconfig libtool`
- Raspbian：dh-autoreconf、libusb-1.0-0-dev、libboost-all-dev

2. 编译 cc-tool

- Linux:

```bash

git clone https://github.com/dashesy/cc-tool.git
cd cc-tool

CPPFLAGS="-I/usr/local/include" \
LDFLAGS="-I/usr/local/include" \
 ./bootstrap

CPPFLAGS="-I/usr/local/opt/boost@1.76/include" \
CXXFLAGS="-std=c++0x" \
LDFLAGS="-L/usr/local/opt/boost@1.76/lib" \
LIBUSB_CFLAGS="-I/usr/local/include/libusb-1.0" \
 ./configure

make
```

- macOS:

```bash

git clone https://github.com/dashesy/cc-tool.git
cd cc-tool

CPPFLAGS="-I/opt/homebrew/include" \
LDFLAGS="-I/opt/homebrew/include" \
 ./bootstrap

CPPFLAGS="-I/opt/homebrew/include" \
CXXFLAGS="-std=c++0x" \
LDFLAGS="-L/opt/homebrew/lib" \
LIBUSB_CFLAGS="-I/opt/homebrew/include" \
 ./configure

make
```

3. 连接 `CC debugger --> Downloader cable CC2531 --> CC2531 USB sniffer`。
4. 通过 USB **同时**连接 `CC2531 USB sniffer` 和 `CC debugger` 到你的电脑。
5. 如果 CC debugger 上的指示灯是红色，按下 CC debugger 上的复位按钮。此时 CC debugger 上的指示灯应变为绿色。如果没有变绿，请尝试重启后重试，或参考 [CC debugger 用户指南](http://www.ti.com/lit/ug/swru197h/swru197h.pdf) 排查问题。

    ![How to connect](/images/connected.jpg)

6. 下载固件 [CC2531_DEFAULT_20211115.zip](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip)。
7. 刷写固件：

```
sudo ./cc-tool -e -w CC2531ZNP-Prod.hex
```

# 如何检查已安装的固件版本

Zigbee2MQTT 启动时会将已安装的固件版本输出到 Zigbee2MQTT 日志中：

```
Zigbee2MQTT:info  2019-11-09T13:01:14: Coordinator firmware version: '{"type":"zStack30x","meta":{"transportrev":2,"product":2,"majorrel":2,"minorrel":7,"maintrel":2,"revision":20190425}}'
```

在上面的示例中，版本号是 `20190425`。
