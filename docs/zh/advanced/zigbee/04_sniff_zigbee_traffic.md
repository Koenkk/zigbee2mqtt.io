---
redirectFrom: /how_tos/how_to_sniff_zigbee_traffic.md
---

# 嗅探 Zigbee 流量

嗅探 Zigbee 流量有时会很有用，例如当你想分析某个设备使用的命令时。

## 配置 Wireshark

### Linux

如果使用 Linux，请通过包管理器安装。

对于基于 APT 的发行版：

```
sudo apt install -y wireshark
```

### Windows

下载并安装 [Wireshark](https://www.wireshark.org/download.html)（相关文档可在同一页面找到）。

下载并安装 [Npcap](https://nmap.org/npcap/)，安装时请务必勾选安装 "Npcap Loopback Adapter"。是否使用 Winpcap 兼容模式并不重要。

### 使用方法

使用 Adapter 进行 loopback 流量捕获，然后设置 Zigbee 协议过滤器：`udp.port==17754`（默认的 ZEP 端口），以便只查看 Zigbee 流量。

启动嗅探器后，Wireshark 将开始记录 Zigbee 消息。由于这些消息是加密的，我们需要添加 2 个加密密钥。第一个是 Trust Center link key（信任中心链接密钥），（几乎）所有 Zigbee 网络都使用相同的值。第二个是网络加密密钥（Transport Key）。

::: tip 提示
如果在另一台机器（不同 IP 地址）上使用 Wireshark，根据你的设置，在抓包过程中可能会出现大量 `ICMP: Destination unreachable (Port unreachable)`。你可以使用过滤器 `udp.port==17754 && !icmp` 来去除它们。
:::

::: tip 提示
你可以在 ZSmart Systems 嗅探器的 [PDF - 第 7 页](https://www.opensmarthouse.org/files/download/ZigBeeWiresharkSniffer.pdf) 中找到关于 Wireshark 各种自定义设置的详细说明。**着色规则按顺序处理，直到找到匹配项为止。你可能需要将 `UDP` 重新排到最下面，以便让 Zigbee 规则正确生效。**
:::

### 添加 Trust Center link key

前往 `Edit > Preferences > Protocols > Zigbee` 添加 Trust Center link key。

将 `Security Level` 设置为 `AES-128 Encryption, 32-bit Integrity Protection`。

接着点击 `Pre-configured keys > Edit`，点击 _+_ 并添加 `5A:69:67:42:65:65:41:6C:6C:69:61:6E:63:65:30:39`，Byte Order 选择 `Normal`。

_注意：Hue 网桥使用的是[不同的 Trust Center link key](https://peeveeone.com/2016/11/breakout-breakthrough/)_

![Wireshark Trust Center link key](/images/wireshark_tclink_key.png)

### 添加网络密钥

接下来我们需要确定网络加密密钥（Transport Key）。

默认情况下，如果你没有更改 `configuration.yaml` 中的 `network_key`，该值将为 `01:03:05:07:09:0B:0D:0F:00:02:04:06:08:0A:0C:0D`。

如果你更改了 `network_key`（使用了 `GENERATE`），你需要将其转换为 Wireshark 接受的格式。共有三种方式可以做到这一点：

1. 从 `coordinator_backup.json` 中获取 `network_key` > `key` 下的值，并每 2 个字符用 `:` 分隔一次。例如：`01030507090b0d0f00020406080a0c0d` -> `01:03:05:07:09:0b:0d:0f:00:02:04:06:08:0a:0c:0d`。

2. 从 `configuration.yaml` 中获取 `network_key` 的值，将其中每个数字转换为对应的 2 位十六进制值，再用 `:` 连接起来。例如：`[1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]` -> `01:03:05:07:09:0B:0D:0F:00:02:04:06:08:0A:0C:0D`。

    你可以在下方粘贴你的 `network_key` 进行转换。注意：转换在本地完成，你的密钥不会离开浏览器。
    <NetworkKeyConverter/>

3. 如果你不想手动转换这些数字，网络加密密钥也会在设备加入网络时暴露出来。将一个新设备配对（pairing）到网络（或重新配对一个已有设备），然后找到 Info 为 _Device Announcement...._ 的那条消息。打开该消息并展开 _Zigbee Network Layer Data_ -> _Zigbee Security Header_。

    ![Wireshark network key](/images/wireshark_network_key.png)

复制上图所示的密钥值，然后前往 `Edit > Preferences > Protocols > Zigbee > Pre-configured keys > Edit`，添加该密钥，Byte Order 选择 `Normal`。

现在 Wireshark 已经能够解密消息了。例如打开一盏灯时，你会看到类似下面的消息：

![Wireshark packet](/images/wireshark_packet.png)

## 使用 CC2531

### 前置条件

- 电脑
    - Ubuntu / Debian 机器（已在 Ubuntu 18.04 / 18.10 和 Debian 10 上测试）
    - Windows 机器（已在 Windows 10 上测试）
- CC2531 适配器（adapter）

### 1. 刷写 CC2531 适配器

CC2531 需要刷入嗅探器固件。请按照[刷写 CC2531](../../guide/adapters/flashing/flashing_the_cc2531.md) 中的说明刷写固件。

#### Linux

该固件包含在 [PACKET-SNIFFER](http://www.ti.com/tool/PACKET-SNIFFER)（注意不是 **PACKET-SNIFFER-2！**）中。下载 PACKET-SNIFFER。由于嗅探器固件只包含在 Windows 安装程序中，我们需要提取出 hex 文件。这需要用到 7zip（根据发行版不同，对应软件包为 p7zip-full 或 p7zip-plugins）

```bash
unzip swrc045z.zip -d PACKET-SNIFFER
7z e PACKET-SNIFFER/Setup_SmartRF_Packet_Sniffer_2.18.0.exe bin/general/firmware/sniffer_fw_cc2531.hex
sudo <path-to>/cc-tool -e -w <path-to>/sniffer_fw_cc2531.hex
```

#### Windows（也可能适用于 Ubuntu）

对于 Windows，该固件包含在 [ZBOSS](https://dsr-iot.com/downloads) 中。注册一个账号并下载 _Zigbee sniffer package rev. 2.0_。ZIP 文件中的子文件夹 `zb_sniffer_bin\zb_sniffer_target\CC2531 USB dongle\zboss_sniffer.hex` 内包含固件。请注意，ZBOSS 同样提供 Ubuntu 64 位版本。

### 2. 安装所需工具

#### Linux

对于基于 APT 的发行版：

```bash
cd /opt
sudo apt install -y libusb-1.0-0-dev wireshark
curl -L https://github.com/homewsn/whsniff/archive/v1.3.tar.gz | tar zx
cd whsniff-1.3
make
sudo make install
```

#### Windows

请确保你已安装 Wireshark（见上文[配置 Wireshark](#配置-wireshark)），并已下载并解压 ZBOSS。

### 3. 嗅探流量

#### Linux

启动 wireshark

```bash
sudo whsniff -c ZIGBEE_CHANNEL_NUMBER | wireshark -k -i -
```

::: tip 提示
根据你的发行版和已安装的软件包不同，一段时间后可能会出现管道中断（broken pipe）的情况。你会发现 Wireshark 已停止抓包，尝试点击鲨鱼鳍图标恢复时会出现错误 `end of file on pipe magic during open`，如果发生这种情况，你可能需要改用以下方式启动：

```bash
wireshark -k -i <( path/to/whsniff -c channel_number )
```

其他用法详见 [whsniff 项目主页](https://github.com/homewsn/whsniff#how-to-use-locally)。
:::

如果你只想保存嗅探到的数据以便日后分析，可以运行以下命令（使用 gzip 压缩为可选项）：

```bash
sudo whsniff -c ZIGBEE_CHANNEL_NUMBER | ( gzip -c > "zigbee_sniff_$(date +"%FT%H%M%S").pcap".gz & )
```

#### Windows

运行 `gui\zboss_sniffer.exe` 中的 ZBOSS 可执行文件，输入你的 Wireshark 可执行文件路径，然后点击 `Start` 按钮。对于 ZBOSS，请确保设置了正确的 Zigbee 信道，默认情况下它会在信道 `0x0C (12)` 上进行嗅探，但 Zigbee2MQTT 的默认信道是 11（`0x0B (11)`）。

#### 故障排除

- 如果运行 whsniff 时出现 `couldn't run /usr/bin/dumpcap in child process: permission denied`，请检查 /usr/bin/dumpcap 是否对所有用户可执行，或执行 `chmod 755 /usr/bin/dumpcap`。
- 你可能需要移除 `modemmanager`，因为已知它会导致问题。[操作方法](../../guide/faq/README.md#modemmanager-is-installed)

## 使用 EmberZNet 和 HUSBZB-1 适配器

### USB 适配器的前置条件

#### Linux

该适配器应该可以开箱即用，无需额外步骤。

#### Windows

安装驱动（选择适用于你适配器的那个）：

- [Silicon Labs CP210x Universal Windows Driver](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)
    - 将驱动解压到某个文件夹
    - 在该文件夹中，右键点击 `silabser.inf`，选择 `Show more options`，然后选择 `Install`
- [WCH CH343SER](https://www.wch-ic.com/downloads/CH343SER_EXE.html)
    - 执行并按照安装步骤完成安装。

### 使用 Ember ZLI

#### 前置条件

- 电脑
    - Linux 机器（已在 Debian 12 64 位上测试）
    - Windows 机器（已在 Windows 11 上测试）
    - MacOS 机器
- EmberZNet 或 HUSBZB-1 适配器
- Wireshark（可选，也可以直接写入 [PCAP 文件](https://github.com/Nerivec/ember-zli/wiki/Sniff#sending-to-pcap-file)）
- NodeJS / npm（如果使用基于 npm 的安装方式）

#### 1. 安装所需工具

[https://github.com/Nerivec/ember-zli/wiki](https://github.com/Nerivec/ember-zli/wiki)

#### 2. 嗅探流量

[https://github.com/Nerivec/ember-zli/wiki/Sniff](https://github.com/Nerivec/ember-zli/wiki/Sniff)

### 使用 ZSmart Systems 嗅探器

#### 前置条件

- 电脑
    - Linux 机器（已在 Ubuntu 18.10 上测试）
    - Windows 机器（已在 Windows 10 上测试）
- EmberZNet 或 HUSBZB-1 适配器
- Wireshark
- Java

#### 1. 安装所需工具

Windows 和 Linux 使用相同的程序进行嗅探。你可以从 [ZSmart Systems sniffer releases](https://github.com/zsmartsystems/com.zsmartsystems.zigbee.sniffer/releases) 获取预编译的 jar 文件。

你也可以在[这里](https://www.opensmarthouse.org/files/download/ZigBeeWiresharkSniffer.pdf)找到 ZSmart Systems 提供的 PDF 文档。

::: tip 提示
Linux：部分 EmberZNet 适配器使用的 USB 标识符与 brltty udev 注册的设备完全相同，因此如果你的 EmberZNet USB 适配器未被识别，只需禁用 brltty 中针对 idVendor=1a86、idProduct=7523（与 EmberZNet 适配器所用的 CH340 串口转换器相同）的规则。编辑 /`usr/lib/udev/rules.d/85-brltty.rules`，将 `# ENV{PRODUCT}=="1a86/7523/*", ENV{BRLTTY_BRAILLE_DRIVER}="bm", GOTO="brltty_usb_run"` 这一行注释掉。然后拔出并重新插入 EmberZNet 适配器。
:::

#### 2. 嗅探流量

在终端或命令行中运行 `java -jar ZigbeeSniffer.jar -baud 115200 -flow {OPTION} -port {PORT} -c {CHANNEL}`。

根据你的适配器不同，`OPTION` 应替换为 `none`（Sonoff Dongle-E、SLZB-06m 等）或 `hardware`（HUSBZB-1、ZBT-1 等）。

##### Windows

打开设备管理器（Win+X，M），在 `Ports (COM & LPT)` 中查看你的适配器使用的是哪个 COM 端口，应该类似 COM3、COM6。`PORT` 应替换为该值。

##### Linux

`PORT` 会类似 `/dev/ttyUSB0`，或者是你插入 HUSBZB-1 设备的任何位置。

## 使用 nRF52 适配器

### 前置条件

- Ubuntu Linux / macOS 10.14+ / Windows 10+
- [nRF52 dongle](https://www.digikey.com/en/products/detail/nordic-semiconductor-asa/NRF52840-DONGLE/9491124) 或[开发套件](https://www.digikey.com/en/products/detail/nordic-semiconductor-asa/nrf52840-dk/8593726)
- Wireshark v3.0+

### 1. 对 dongle 编程、安装所需工具

[安装 nRF Sniffer for 802.15.4](https://docs.nordicsemi.com/bundle/ug_sniffer_802154/page/UG/sniffer_802154/installing_sniffer_802154.html)

### 2. 嗅探流量

[使用 nRF Sniffer 捕获数据](https://docs.nordicsemi.com/bundle/ug_sniffer_802154/page/UG/sniffer_802154/capturing_data_sniffer_802154.html)
