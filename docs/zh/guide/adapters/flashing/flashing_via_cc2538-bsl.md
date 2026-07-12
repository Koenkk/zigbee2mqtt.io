---
---

# 通过 cc2538-bsl 刷写固件

[TI CC13xx/CC2538/CC26xx Serial Boot Loader](https://github.com/JelmerT/cc2538-bsl)

CC2538-bsl 是由 [Jelmer Tiete](https://github.com/JelmerT) 编写的一个 python 脚本，用于与 Texas Instruments CC2538、CC26xx 和 CC13xx SoC（片上系统）的 boot loader 通信。

本例中我们使用 Sonoff Zigbee 3.0 USB Dongle Plus，无需打开外壳按下"Boot"按钮即可刷写固件。

## 使用 Docker 的方法（仅限 Linux）

```bash
docker run --rm \
    --device /dev/ttyUSB0:/dev/ttyUSB0 \
    -e FIRMWARE_URL=https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip \
    ckware/ti-cc-tool -ewv -p /dev/ttyUSB0 --bootloader-sonoff-usb
```

关于该 Docker 命令的详细说明可见[此处](https://github.com/git-developer/ti-cc-tool)

## 不使用 Docker 的方法

### 准备系统环境（基于 debian）

1. 安装 python 和 python-pip。

```bash
sudo apt update && sudo apt install python3 python3-pip
```

2. 安装所需的 python 包。

```bash
sudo pip3 install pyserial intelhex
```

### 下载 cc2538-bsl

3. 创建一个名为"cc2538-bsl"的目录，下载 cc2538-bsl 最新 master 分支的压缩包并解压到同一目录中。

```bash
mkdir cc2538-bsl
cd cc2538-bsl
curl -sSL https://github.com/JelmerT/cc2538-bsl/archive/refs/heads/master.tar.gz | tar xz --strip 1
```

sonoff 相关功能自 2022 年 1 月 20 日起已合并进 master 分支。

### 下载固件

从[受支持的适配器页面](../README.md)下载适用于你的适配器的固件，并解压到 `c2538-bsl` 目录中，使所需的一切都在同一个文件夹中。

4. 本例中我们将刷写 `CC1352P2_CC2652P_launchpad_coordinator_***.zip`。

```bash
wget https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip
unzip CC1352P2_CC2652P_launchpad_coordinator_20250321.zip

sudo python3 cc2538_bsl/cc2538_bsl.py -ewv -p /dev/ttyUSB0 --bootloader-sonoff-usb ./CC1352P2_CC2652P_launchpad_coordinator_20250321.hex
```

`-ewv` 表示 **M**ass **e**rase（整体擦除）、**w**rite（写入）、**v**erify（校验）  
`-p` 是设备所在的端口，本例中为 `/dev/ttyUSB0`  
`--bootloader-sonoff-usb` 表示由脚本激活 bootloader，通过按 Sonoff USB dongle 所需的方式切换 RTS 和 DTR（如果你的设备不是 Sonoff dongle，请去掉此参数）。

如果刷写过程成功完成，会出现如下输出：

```
sonoff
Opening port /dev/ttyUSB0, baud 500000
Reading data from ../CC1352P2_CC2652P_launchpad_coordinator_20250321.hex
Your firmware looks like an Intel Hex file
Connecting to target...
CC1350 PG2.0 (7x7mm): 352KB Flash, 20KB SRAM, CCFG.BL_CONFIG at 0x00057FD8
Primary IEEE Address: 00:00:00:00:00:00:00:00
    Performing mass erase
Erasing all main bank flash sectors
    Erase done
Writing 360448 bytes starting at address 0x00000000
Write 104 bytes at 0x00057F988
    Write done
Verifying by comparing CRC32 calculations.
    Verified (match: 0xe0c256fd)
```

### 如何检查已安装的固件版本

Zigbee2MQTT 在启动时会将已安装的固件版本输出到 Zigbee2MQTT 日志中：

```
Zigbee2MQTT:info  2022-01-05 22:36:34: Coordinator firmware version: '{"meta":{"maintrel":1,"majorrel":2,"minorrel":7,"product":1,"revision":20250321,"transportrev":2},"type":"zStack3x0"}''
```

在上面的示例中，版本号为 `20250321`。
