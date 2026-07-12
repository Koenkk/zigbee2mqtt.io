---
---

# 复制适配器（adapter）的 ieee 地址

从一个加密狗迁移到另一个时，新加密狗使用与旧加密狗相同的 ieee 地址非常重要。有些设备是通过协调器（coordinator）的 ieee 地址来查找它的，一旦协调器的 ieee 地址发生变化就会导致查找失败。有多种工具可以完成这项操作。

首先你需要确定旧加密狗的 ieee 地址，有 2 种方法：

1. 打开前端界面，进入 "Settings" -> "About" -> "Coordinator IEEE Address"
1. 打开 `data/database.db`，第一行就是协调器的 ieee 地址：

```json
{"id":1,"type":"Coordinator","ieeeAddr":"0x00124b000e89686d","nwkAddr":0...
```

请注意，_primary（主）_ ieee 地址始终保持不变，以下操作只会修改 _secondary（次）_ ieee 地址。下面这些工具通常只会显示主 ieee 地址，因此可能会看起来改动并未生效。按照下述步骤设置次 ieee 地址，就足以避免上述问题。

## XZG Multi-Tool

支持：CC2652、CC1352、CC2538、基于 EFR32 的协调器

1. 打开 [XZG Multi-tool](https://mt.xyzroe.cc/)，选择你的协调器所属的芯片系列，然后点击 `Choose Serial`
2. 连接成功后，你会看到引导程序（bootloader）和固件版本。对于 TI 适配器，`Device Info` 区域还会显示主（固定）IEEE 地址
3. 滚动到 IEEE 区域，点击 `Read` 读取协调器当前的 IEEE 地址（TI 为次地址，基于 EFR32 的适配器为主地址）
4. 在相应字段中输入新的 IEEE 地址，然后点击 `Write`

::: warning
如果你使用的是基于 EFR32 的适配器，在尝试写入新 IEEE 地址时出现错误，说明你设备的固件不支持 NV3 令牌（token）。此时你仍然可以将新 IEEE 地址写入 MFG_CUSTOM_EUI_64 字段，但这是**一次性（ONE-TIME）**写入操作，写入后无法再更改！如果你确定要继续，勾选 `Force` 复选框，再次点击 `Write`。

**`Force` 选项执行的是一次性写入，且不可撤销！**
:::

## ZigStar Multi Tool

支持：CC2652、CC1352、CC2538

1. [下载](https://github.com/xyzroe/ZigStarGW-MT/releases)并运行该工具
1. 插入你的适配器，并使其进入 BSL 模式，具体方法请查阅适配器的说明书
1. 点击刷新图标，选择你的适配器
1. 在 "IEEE" 字段中填入旧协调器的 ieee 地址（可省略开头的 `0x`）
1. 勾选 "Write IEEE"，点击 "Write IEEE"
1. 重新刷写加密狗上的固件（这一步很重要，否则协调器不会使用新的 ieee 地址）

## cc2538-bsl

支持：CC2652、CC1352、CC2538

1. [下载](https://github.com/JelmerT/cc2538-bsl)该工具
1. 插入你的适配器，并使其进入 BSL 模式，具体方法请查阅适配器的说明书（如有需要；部分适配器带有自动引导程序，例如[这一款](https://slae.sh/projects/cc2652/#flash-it)）
1. 运行 `./cc2538-bsl.py -evw --ieee-address 00:12:4b:aa:bb:cc:dd:ee -p /dev/tty.usbserial-10 ./fw.hex`，并将其中：
    - `00:12:4b:aa:bb:cc:dd:ee` 替换为你协调器的 ieee 地址（可省略开头的 `0x`）
    - `/dev/tty.usbserial-10` 替换为你适配器所在的路径（对于 Sonoff Zigbee USB Dongle Plus，还需要加上 `--bootloader-sonoff-usb`）
    - `./fw.hex` 替换为你适配器固件所在的路径

## FLASH-PROGRAMMER-2

支持：CC2652、CC1352、CC2538

1. [下载](https://www.ti.com/tool/FLASH-PROGRAMMER)该工具
1. 插入你的适配器，并使其进入 BSL 模式，具体方法请查阅适配器的说明书
1. 选择你的适配器，进入 "MAC address"
1. 在 "Secondary Address" -> "IEEE 802.15.4 MAC address" 中填入旧协调器的 ieee 地址（可省略开头的 `0x`）
1. 点击 "Write"
1. 重新刷写加密狗上的固件——在右下角 Secondary MAC 下勾选 "Retain secondary IEEE"（这一步很重要，否则协调器不会使用新的 ieee 地址）

## Universal Silicon Labs Flasher

支持：基于 EFR32 的协调器

1. [安装](https://github.com/NabuCasa/universal-silabs-flasher)该工具
2. 插入你的适配器
3. 运行 `universal-silabs-flasher --device /dev/ttyACM0 write-ieee --ieee 0011223344556677`
    - 将 `/dev/ttyACM0` 替换为你新适配器所在的路径
    - 将 `0011223344556677` 替换为你协调器的 IEEE 地址。注意这里不带十六进制前缀（0x）
