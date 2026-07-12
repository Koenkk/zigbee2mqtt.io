---
sidebarDepth: 0
redirectFrom:
    - /guide/installation/20_zigbee2mqtt-fails-to-start.md
    - /information/zigbee2mqtt_fails_to_start.md
---

# Zigbee2MQTT 无法启动/运行时崩溃

大多数情况下，这是由于 Zigbee2MQTT 无法与你的 Zigbee 适配器（adapter）通信导致的。

[[toc]]

## 错误：`USB adapter discovery error (No valid USB adapter found). Specify valid 'adapter' and 'port' in your configuration.`

按照[这里](../configuration/adapter-settings.md)的说明配置 `serial` 部分。

## zStack 出现 `SRSP - SYS - ping after 6000ms` 错误，或 EmberZNet 出现 `HOST_FATAL_ERROR` 错误

导致此错误的常见原因：

1. 你的串口适配器的端口发生了变化。
   查看[这里](../configuration/adapter-settings.md)以找出适配器的端口。
2. 如果你使用的是 CC2530 或 CC2531，该适配器（由于其硬件较为老旧）经常会出现崩溃问题。
   重新刷写固件应该可以解决这个问题。如果经常发生，可以考虑刷写[源路由固件](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/source_routing)，或升级到[性能更强的适配器](../adapters/README.md)。
3. 你的适配器需要额外的配置参数。查看[支持的适配器](../adapters/README.md)一节，了解你的适配器是否需要额外参数（例如 ConBee II / RaspBee II）。
4. Home Assistant 的“Zigbee Home Automation”（ZHA）集成处于启用状态。请尝试禁用 ZHA 集成并重启 Zigbee2MQTT 附加组件。
5. 你的硬件适配器刷写的是路由器（router）固件而非协调器（coordinator）固件。
6. 你的网络型 Zigbee 适配器无法通过局域网访问。
7. 你机器上的其他软件（包括 Home Assistant 集成）正在干扰 USB 设备（例如：[HA EDL21 集成](https://www.home-assistant.io/integrations/edl21)会尝试查找某个 USB 设备）。

## EmberZNet 出现 `ERROR_EXCEEDED_MAXIMUM_ACK_TIMEOUT_COUNT` 错误

常见原因：

- USB 或 2.4GHz 频段存在干扰
    - 请参考各类降低干扰的指南
- 电源不合格/不稳定（USB、POE 等）
    - 检查线缆和额定功率，更换可疑的硬件
- 运行 Zigbee2MQTT 的机器出现资源使用峰值（磁盘、CPU 或内存）——在低配置机器上更为明显
    - 如有必要，升级组件或分配更多资源（对于虚拟化环境）
- TCP 适配器的“核心”芯片出现资源使用峰值
    - 确认是否有可修复已知问题的新版“核心”固件
- [高频上报设备](#高频上报设备)（尤其是 Tuya 及其同类产品）
    - 使用来自 [darkxst](https://github.com/darkxst/silabs-firmware-builder/releases) 或 [Nerivec](https://github.com/Nerivec/silabs-firmware-builder/releases) 的 8.0.2 及以上版本协调器固件，或来自 [Nabu Casa](https://github.com/NabuCasa/silabs-firmware-builder/releases) 的 7.4.4.5 及以上版本

## 确认你在 configuration.yaml 中填写了正确的端口

执行以下命令以找出正确的路径：

```bash
pi@raspberry:/ $ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx. 1 root root 13 Oct 19 19:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -> ../../ttyACM0
```

在此示例中，正确的 `port` 应为 `/dev/ttyACM0`。

你也可以强制重新[引导设置（onboarding）](../getting-started/README.md#onboarding)以重新进行配置

### 对于德州仪器（Texas Instruments）LAUNCHXL-CC26X2R1/CC1352P-2，应该使用 /dev/ttyACM0 还是 /dev/ttyACM1 端口？

德州仪器的 launchpad 内置了一个调试器。这个调试器也会在设备数据端口旁边注册一个端口。当然，这两个端口不一定是编号 0 和 1，但通常编号较低的是设备数据端口，另一个是调试器端口。

要找到正确的端口，请执行：

```bash
pi@raspberry:/ $ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Jan  6 19:07 usb-Texas_Instruments_XDS110__03.00.00.05__Embed_with_CMSIS-DAP_L1100BTD-if00 -> ../../ttyACM0
lrwxrwxrwx 1 root root 13 Jan  6 19:07 usb-Texas_Instruments_XDS110__03.00.00.05__Embed_with_CMSIS-DAP_L1100BTD-if03 -> ../../ttyACM1
```

id 以 _if00_ 结尾的设备是设备数据端口。请在你的配置中使用这个端口。

## 确认运行 Zigbee2MQTT 的用户对该端口拥有写入权限

可以通过执行以下命令测试：`test -w [端口] && echo success || echo failure`（例如 `test -w /dev/ttyACM0 && echo success || echo failure`）。

如果输出 `failure`，可能意味着你的用户没有该端口的访问权限。可以通过执行 `sudo chown [用户] [端口]`（例如 `sudo chown pi /dev/ttyACM0`）来测试赋予写入权限。

如果输出仍是 `failure`，那么你需要为你的用户永久授予该设备的访问权限。

### 方法一：让你的用户在每次重启后都拥有权限

你可以创建一个 “udev” 规则，使你的用户在每次重启后都能获得权限：

1. `udevadm info -a -n /dev/ttyACM0 | grep 'serial'`
   获取你设备的序列号 `YOURSERIAL`

2. 创建规则文件：
   `sudo nano /etc/udev/rules.d/99-usb-serial.rules`

3. 添加以下这一行：
   `SUBSYSTEM=="tty", ATTRS{idVendor}=="0451", ATTRS{idProduct}=="16a8", ATTRS{serial}=="YOURSERIAL", SYMLINK="ttyUSB.CC2531-01", OWNER="pi"`

4. 修改你的 Zigbee2MQTT 配置以匹配新的 SYMLINK 名称：
   `nano /opt/zigbee2mqtt/data/configuration.yaml`

`… serial:
port: /dev/ttyUSB.CC2531-01 …`

重启后，你的设备将拥有正确的权限，并且名称始终保持一致。

### 方法二：将你的用户添加到指定的用户组

正如 https://github.com/esp8266/source-code-examples/issues/26 中提到的，根据你的 Linux 发行版不同，可能会有不同的用户组拥有该设备的所有权。

将你的用户添加到 `uucp `、`tty `、`dialout ` 用户组：

```
sudo usermod -a -G uucp $USER
sudo usermod -a -G tty $USER
sudo usermod -a -G dialout $USER
```

重启你的设备，此时你的用户应该已经拥有该设备的访问权限。

## 错误：`Coordinator failed to start, probably the panID is already in use, try a different panID or channel`

- 如果你按照[这里](../configuration/zigbee-network.md#network-config)的说明增大了 panID 之后仍然出现此错误，并且你使用的树莓派上还连接了其他 USB 设备（例如 SSD），请尝试通过带电源的 USB 集线器连接该 SSD 或适配器。
- 如果你是在首次成功启动并配对（pairing）一个设备之后才出现此错误，可能是固件刷写有误。请尝试在另一台电脑上重新刷写该适配器（[详细信息](https://github.com/Koenkk/zigbee2mqtt/issues/6302)）。此问题主要出现在配合 Slaesh 的 CC2652RB 适配器使用时。
- 如果你之前已经拥有一个 Zigbee 网络，换了新的 Zigbee 适配器后出现此错误，请尝试关闭之前连接到旧 Zigbee 网络的 Zigbee 路由器（router），然后重启 Zigbee2MQTT。

## 错误：`Resource temporarily unavailable Cannot lock port`

当另一个程序已经在使用（从而锁定）该适配器时会出现此错误。你可以通过以下命令找出是哪个程序：`ls -l /proc/[0-9]/fd/ |grep /dev/ttyACM0`（将 `/dev/ttyACM0` 替换为你的适配器端口）。

## 树莓派用户

## Raspberry Pi OS

请确保你使用的是 Raspberry Pi OS 11 或更高版本。
可以执行以下命令查看你正在运行的版本：

```bash
cat /etc/issue.net
```

## 使用一个良好的电源

劣质电源会导致你的系统及其 USB 设备不稳定。请务必使用质量良好的电源。

如果你在运行 `dmesg -w` 时看到类似下面的信息，说明你使用的电源不合格。

```
[44870.355590] Under-voltage detected! (0x00050005)
[44874.515618] Voltage normalised (0x00000000)
[44880.755718] Under-voltage detected! (0x00050005)
[44889.075627] Voltage normalised (0x00000000)
```

也可以尝试通过带电源的 USB 集线器连接适配器（特别是当你的树莓派还连接了 SSD 时）。

## 确认延长线正常可用

劣质的延长线可能导致系统与适配器之间出现连接问题。此类问题的症状是在 `dmesg -w` 日志中出现如下的断开连接信息。

```
[44929.156957] usb 1-1.5: USB disconnect, device number 119
[44929.455555] usb 1-1.5: new full-speed USB device number 120 using dwc_otg
[44929.604582] usb 1-1.5: New USB device found, idVendor=0451, idProduct=16a8, bcdDevice= 0.09
[44929.604596] usb 1-1.5: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[44929.604606] usb 1-1.5: Product: TI CC2531 USB CDC
[44929.604615] usb 1-1.5: Manufacturer: Texas Instruments
```

## Openhab 用户：禁用 zwave binding

Openhab 的 zwave binding 会与 Zigbee2MQTT 产生冲突，
点击[这里](https://community.openhab.org/t/apparently-the-zwave-binding-blocks-the-dev-ttyusb0-port-in-combination-with-a-cc2652rb-zigbee2mqtt-dongle/103245)查看更多信息。

## 如果使用的是 CC2530 或 CC2531 适配器，请确认它不是 CC2540

CC2540 很容易与 CC2531 混淆，因为它们外观几乎完全一样。但是，CC2540 并不支持 Zigbee，而是支持蓝牙。可以通过查看芯片本身来加以确认。

## 已安装 [ModemManager](https://www.freedesktop.org/wiki/Software/ModemManager/)

ModemManager（例如在 Ubuntu 上默认安装）已知会导致问题。可以通过 `sudo apt-get purge modemmanager` 卸载 ModemManager 来轻松解决。

## 确保你的电脑有足够的可用资源

如果你的电脑资源不足，串口通信可能会出现不稳定的情况。
如果你的 CPU 和内存持续处于满负荷运行状态，这可能意味着资源不足。
例如，在树莓派 3 上使用 Home Assistant 中的 Zigbee2MQTT 附加组件可能会导致资源耗尽。

## hciuart 正在运行

可以通过执行 `sudo systemctl disable hciuart` 来禁用 hciuart。

## 仅限德州仪器 LAUNCHXL-CC1352P-2/CC26X2R1：按下设备上的复位按钮

如果 Zigbee2MQTT 在使用德州仪器 LAUNCHXL-CC1352P-2/CC26X2R1 时启动失败，并报出 `Error: SRSP - SYS - version after 6000ms` 错误，那么你很可能是把设备连接到了这样一种系统：需要在插入 USB 线缆之后立即/短暂按下复位按钮（就是 USB 接口旁边的那个按钮）。此问题主要出现在 x86 架构上（例如 Intel NUC、HPE Microserver、i7 笔记本电脑），另请参见 [#2162](https://github.com/Koenkk/zigbee2mqtt/issues/2162)。每次重新连接适配器时都需要重复这个操作，目前尚不清楚这个问题是否能够彻底解决。这个问题似乎不会出现在基于 ARM 的板子上（树莓派、ODROID XU4）。

重新插拔 USB 线缆也有可能解决这个问题。

## 仅限 CC2531 协调器：按下设备上的复位按钮

当你将 CC2531 插入电脑时，绿色 LED 灯应该会亮起。按下 CC2531 上的复位按钮后，绿色 LED 灯应该会熄灭。CC2531 上有两个按钮，复位按钮是靠近 USB 接口的那一个。然后再次尝试启动 Zigbee2MQTT。

## 仅限德州仪器 LAUNCHXL-CC26X2R1 协调器：确认你使用的是正确的版本

你可以在 UniFlash 中点击顶部的 _more info_，然后点击 _Read device info_，来查看你的板子版本。

正确的版本是：如下图所示的 **E** 版本。

![cc26xr1_revision](/images/cc26xr1_revision.png)

更早的版本均不受支持（那些是开发板）。请立即将这类板子退回给卖家。

## 仅限 EmberZNet 协调器

参见 [EmberZNet 错误](../adapters/emberznet.md#error-level)。

## 多个廉价 USB-UART 设备

如果你连接了多个使用廉价 USB-UART 转换芯片（CH341）的设备，你的系统可能无法区分它们，因为它们很可能拥有相同的 idProduct、SerialNumber 等信息，因此会共用同一个 /dev/serial/by-id。
最简单的解决办法是将其中一个设备更换为使用不同 UART-USB 转换芯片的设备。第二种办法是更换整个转换器，或者为没有序列号的芯片（例如 CH341）加装外部 EEPROM 存储器，从而为其添加一个序列号。

## MQTT v5 断开连接

如果你使用支持 MQTT 规范第 5 版的 MQTT 代理（broker），在出现异常情况时可能会遇到断开连接的问题。
例如，当“最大数据包大小”（maximum packet size）被超出时（大型网络中）就可能发生这种情况。

要解决这个问题，请相应地配置你的代理，并检查 Zigbee2MQTT 中是否也有对应的设置需要调整。参见 [MQTT 配置](../configuration/mqtt.md#server-connection)。

## 错误：`startup failed - configuration-adapter mismatch - see logs above for more information`

当你修改了 `configuration.yml` 中的一个或多个 `pan_id`、`network_key` 或 `ext_pan_id` 值时，就会出现这个问题。如果这确实是你的本意，解决此错误最简单的办法是删除 `data/coordinator-backup.json` 文件并重新启动。请注意，这样做会重置你的网络，**所有设备都需要重新配对（pairing）！**。另外，你也可以恢复为之前的值。这种情况下，请查看日志中该错误前几行的内容，你会看到类似下面的信息：

```
[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: Configuration is not consistent with adapter state/backup!
[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: - PAN ID: configured=****, adapter=****
[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: - Extended PAN ID: configured=****, adapter=****
[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: - Network Key: configured=****, adapter=****
[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: - Channel List: configured=**, adapter=**
```

（在此示例中，实际的值已被替换为 `*`）你可以使用日志中针对适配器（adapter）列出的值，并将其填回配置文件。请注意，你不能直接原样粘贴回去：日志中这些键是以十六进制字符串的形式打印的，但在配置文件中，`ext_pan_id` 和 `ext_pan_id` 应以数组形式填写。假设你的网络密钥在日志中显示为 `39af4d83h2dcb389`，那么你应该在配置文件中填写如下内容：

```
ext_pan_id: [0x39,0xaf,0x4d,0x83,0xh2,0xdc,0xb3,0x89]
```

## 通过网络连接的 Zigbee 适配器：在 Zigbee2MQTT 服务器上使用稳定可靠的网络适配器

如果你使用的是通过 WiFi 或以太网连接的 Zigbee 适配器，Zigbee2MQTT 是通过局域网、借助 serial-over-IP 协议与该 Zigbee 适配器通信的。

不建议在 Zigbee2MQTT 服务器上使用 USB-WiFi 或 USB-以太网适配器，因为尽管它们在规格上看起来与机载适配器相当，但它们通常采用较小的外壳设计，往往通风不良，容易过热。
这类适配器在高负载或过热的情况下容易出现卡死或停止工作的已知问题，从而导致如下错误：

```
[2024-06-24 03:37:22] error: zh:ember:uart:ash: Received ERROR from NCP while connecting, with code=ERROR_EXCEEDED_MAXIMUM_ACK_TIMEOUT_COUNT.
[2024-06-24 03:37:22] error: zh:ember:uart:ash: ASH disconnected | NCP status: ASH_NCP_FATAL_ERROR
[2024-06-24 03:37:22] error: zh:ember:uart:ash: Error while parsing received frame, status=ASH_NCP_FATAL_ERROR.
```

这表明 serial-over-IP 协议出现了超时；或者：

```
[2024-06-24 03:37:24] warning: zh:ember:uart:ash: Frame(s) in progress cancelled in [1ac1020b0a527e]
[2024-06-24 03:37:24] error: zh:ember:uart:ash: Received unexpected reset from NCP, with reason=RESET_SOFTWARE.
[2024-06-24 03:37:24] error: zh:ember:uart:ash: ASH disconnected: ASH_ERROR_NCP_RESET | NCP status: ASH_NCP_FATAL_ERROR
[2024-06-24 03:37:24] error: zh:ember:uart:ash: Error while parsing received frame, status=HOST_FATAL_ERROR.
[2024-06-24 03:37:24] error: zh:ember: !!! NCP FATAL ERROR reason=HOST_FATAL_ERROR. ATTEMPTING RESET... !!!
```

这表明主机与 NCP 之间的通信出现了不同步，此外，下面这种情况也是网络存在问题的明显提示：

```
[2024-06-24 03:38:05] error: z2m:mqtt: Not connected to MQTT server!
[2024-06-24 03:38:05] error: z2m:mqtt: Cannot send message: topic: 'zigbee2mqtt/bridge/state', payload: '{"state":"offline"}
[2024-06-24 03:38:05] info: z2m:mqtt: Disconnecting from MQTT server
```

这表明 Zigbee2MQTT 无法通过局域网连接到 MQTT 服务器。

针对这种情况，最好的方案是使用 Zigbee2MQTT 服务器主板上内置的以太网接口，这样可以保证在任何负载条件下通信的可靠性。
其次可以使用机载的 WiFi 适配器，它同样应该是为可靠性而设计的，但同时也要考虑你 WiFi 网络本身的稳定性。
如果所有机载适配器都已被占用，而你还需要添加另一个网络适配器，最好的选择是在 PCIe 总线上安装一块内置网卡，并做好相应的散热设计。

## 错误：出现超时错误导致的持续崩溃，或在串口打开后启动失败

当 Zigbee 适配器与 Zigbee2MQTT 之间的串口通信意外停止工作时，可能会出现这些错误。

可能导致此错误的原因包括：

1. 主机电脑与 Zigbee 适配器之间的硬件连接不可靠。
   下图对比了因劣质 USB 线缆导致连接不可靠的情况与使用优质 USB 线缆的情况：
   ![good-vs-bad-usb-cable](/images/good-vs-bad-usb-cable.jpg)
   使用这种劣质线缆时，只需轻轻碰一下线缆就足以导致 USB 断开连接。

2. Zigbee2MQTT 运行在虚拟机中，且主机与虚拟机之间的 USB 直通（passthrough）不可靠。
   这可能是由虚拟化环境、USB 硬件本身或两者共同造成的。
   如果出现这些错误，我们可以采取一些措施来降低配置的复杂度、提升稳定性，并帮助排查与主机之间的 USB 连接问题。
   我们不再将整个 USB 设备直通给虚拟机，而是直通串口设备。
   虚拟机的配置将从
   主机-（USB 直通）->虚拟机->USB 转串口->串口（供 Zigbee2MQTT 配置使用）
   变为
   主机-（串口直通）->虚拟机->串口（供 Zigbee2MQTT 配置使用）

举例来说，以下是将串口设备直通给一台 Proxmox 上的 Home Assistant OS 安装实例的步骤：

- 在 Proxmox 虚拟机硬件中添加一个 serial0（或 serial1、2、3）
  默认情况下，Proxmox 虚拟机硬件配置中的串口是一个 socket（"serial0: socket"），因此我们需要修改虚拟机配置文件 /etc/pve/quemu-server/{VMID}.conf 中的这个参数，使其指向真实的串口设备，例如："serial0: /dev/serial/by-id/usb-ITEAD_SONOFF_Zigbee_3.0_USB_Dongle_Plus_V2_20240122184528-if00"
- 在 Home Assistant OS 中释放被 getty 占用的 ttyS0 串口
  在虚拟机中，这个被直通的串口会被识别为 ttyS0，但 Home Assistant OS 的 systemd 默认会在 /dev/ttyS0 上启动一个 agetty，实际上，在 /mnt/boot/cmdline.txt 的内核命令行参数中，ttyS0 被设置为控制台（内容为 "console=ttyS0 console=tty0"）。
  我们需要修改虚拟机中的这个 cmdline.txt 文件，让 systemd 不再对 ttyS0 进行处理、不启动 agetty，因此我们移除 ttyS0 这一部分，cmdline.txt 变为 "console=tty0"。

现在 Zigbee2MQTT 就可以通过 /dev/ttyS0 访问该适配器了，这在虚拟机内部是一个“真实”的串口。
USB 设备的任何问题都会被主机内核记录下来，并可以很容易地通过 dmesg 发现，这样我们就能将它们与串口设备本身的问题区分开来。

## 高频上报设备

有些设备会频繁发送数据上报，从而迅速占用网络资源、降低整体稳定性。使用多个这类设备甚至可能导致网络经常性崩溃。这是 Tuya（及其衍生品牌）等品牌的一个众所周知的问题。一些毫米波（mmWave）传感器（尤其是早期型号）也被发现存在这个问题。

你可以禁用或降低某个设备（针对全部或特定状态）的上报频率。如果可行，配置[上报（reporting）](../usage/mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request-device-reporting-configure)，使其更好地匹配你的需求，并适应你的网络所能承受的负载。
然而，上面提到的这些设备往往也不允许进行合适的配置，在这种情况下，实际上没有真正的办法可以修复它们，你只能用更好的产品替换它们。

::: tip 提示
一些开源项目提供了替代性的 Tuya OTA 更新固件（使用前请务必阅读所有相关文档）。例如：

- [https://github.com/romasku/tuya-zigbee-switch](https://github.com/romasku/tuya-zigbee-switch)
- [https://github.com/pvvx/ZigbeeTLc](https://github.com/pvvx/ZigbeeTLc)
- [https://github.com/Andrik45719/ZY-M100](https://github.com/Andrik45719/ZY-M100)
- [https://github.com/slacky1965](https://github.com/slacky1965)

:::
