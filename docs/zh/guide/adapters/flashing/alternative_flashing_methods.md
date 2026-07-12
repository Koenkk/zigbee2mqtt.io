---
redirectFrom: /information/alternative_flashing_methods.md
---

# 备用刷写方法

- [使用 Raspberry Pi](#raspberry_pi)
- [Arduino/ESP8266 + CCLoader](#arduino_ccloader)
- [Arduino/ESP8266 + CCLib](#arduino_cclib)
- [通过 RP2040 拖放刷写](#rp2040_dragndrop)

---

### <a name=raspberry_pi></a> 使用 Raspberry Pi（约 3 分钟）

1. 安装 [wiringPi](https://github.com/WiringPi/WiringPi/releases)（如果尚未安装）。

2. 安装 [flash_cc2531](https://github.com/jmichault/flash_cc2531)：

```bash
git clone https://github.com/jmichault/flash_cc2531.git
```

3. 将调试端口的以下引脚连接到 GPIO 端口：

- pin 1 (GND) --> pin 39 (GND)
- pin 7 (reset) --> pin 35 (GPIO24, BCM19)
- pin 3 (DC) --> pin 36 (GPIO27, BCM16)
- pin 4 (DD) --> pin 38 (GPIO28, BCM20)

<img src="/images/CC2531_wiring_raspi-header.jpg" width="40%"/>

（可选）将 Target Voltage Sense 连接到 3.3v 电源（红线）可以省去将设备插入 usb 端口的步骤，因此也可以选择连接以下引脚：

- pin 2 (Target Voltage Sense) --> Raspi 上的 pin 1 或 pin 17（3.3v）

CC2531 上引脚的排布见上文，Raspberry 上的引脚可参考 [https://pinout.xyz/](https://pinout.xyz/)。

一根 CC2531 下载线 ![](/images/downloader_cable.png) 加上 4 根母对母杜邦线非常适合这个用途。如果你不想购买下载线，则需要把调试引脚向外掰弯，才能连接杜邦线，因为这些引脚间距太近，无法直接插入杜邦线。

现在将 usb 加密狗插入 USB 端口：

 <img src="https://raw.githubusercontent.com/jmichault/files/master/Raspberry-CC2531.jpg" width="40%"/>

4. 运行以下命令进行测试：

```bash
cd flash_cc2531
./cc_chipid
```

应返回：

```
  ID = b524.
```

如果显示的是 0000 或 ffff，说明存在问题，你应该检查一下接线。

如果出现 `./cc_chipid: cannot execute: required file not found`，则需要运行 `make` 命令

5. 下载并解压最新固件 [CC2531_DEFAULT_20211115.zip](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip)。

```bash
cd ~/flash_cc2531       #assuming you git-cloned the program to your home directory
wget https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip
unzip CC2531_DEFAULT_20211115.zip
```

6. 擦除并刷写 CC2531：

```bash
./cc_erase
./cc_write CC2531ZNP-Prod.hex
```

大约需要 3 分钟。

### <a name=arduino_ccloader></a>通过 Arduino Uno/ESP8266 使用 CCLoader 刷写（约 3 分钟）

**该方法已在正品 Arduino Uno、山寨版 Arduino Pro Micro 以及 NodeMCU ESP8266 上测试通过，速度明显快于 CCLib**

#### 准备固件

1. 下载正确的固件（本例中我们使用 [CC2531 固件](https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_Home_1.2/bin/)）
1. 解压固件，并使用 `objcopy` 将 hex 文件转换为二进制文件（不要使用其中自带的二进制文件！）

    **_Windows_**：请参照 StackOverflow 上的[这个](https://stackoverflow.com/questions/11054534/how-to-use-install-gnu-binutils-objdump)回答下载 `objcopy.exe`。

    ```
    objcopy.exe --gap-fill 0xFF --pad-to 0x040000 -I ihex CC2531ZNP-Prod.hex -O binary CC2531ZNP-Prod.bin
    ```

    **Linux 或 Windows 上的 Bash on Ubuntu**：使用你的包管理器安装 `binutils` 软件包

    ```bash
    objcopy --gap-fill 0xFF --pad-to 0x040000 -I ihex CC2531ZNP-Prod.hex -O binary /tmp/CC2531ZNP-Prod.bin
    ```

#### 准备 CCLoader

1. 下载并解压 [CCLoader](https://github.com/RedBearLab/CCLoader)
1. 在 Windows 上可以直接使用预编译好的 `CCloader.exe`
1. 在 Linux 上需要自行编译 `CCLoader`，切换到 `CCLoader/SourceCode/Linux` 目录后运行
    ```bash
    gcc main.c -o CCLoader
    ```

#### 刷写 Arduino 或 ESP8266 与 CC2531 设备

1. 对于 Arduino，保持 `Arduino\CCLoader\CCLoader.ino`（第 86-90 行）中的引脚设置为默认值：

```
// Debug control pins & the indicate LED
int DD = 6;
int DC = 5;
int RESET = 4;
int LED = 13;
```

对于 ESP8266（NodeMCU 或 WeMos D1 Mini），需要在 `Arduino\CCLoader\CCLoader.ino`（第 86-90 行）中把这些引脚改成 ESP8266 上可用的引脚，以下配置对我是有效的（注意这里的数字是 GPIO 编号，而不是 NodeMCU 上标注的名称）：

```
// Debug control pins & the indicate LED
int DD = 14; //GPIO14=D5 on NodeMCU/WeMos D1 Mini
int DC = 4; //GPIO4=D2 on NodeMCU/WeMos D1 Mini
int RESET = 5; //GPIO5=D1 on NodeMCU/WeMos D1 Mini
int LED = 2; //GPIO2=D4 and the Blue LED on the WeMos D1 Mini and the ESP-12E module on the NodeMCU, or can use GPIO16=D0 for the other Blue LED on NodeMCU
```

1. 使用 `Arduino\CCLoader\CCLoader.ino` 刷写 Arduino Uno 或 ESP8266 开发板（对于 Windows 上的 NodeMCU：先安装 [Arduino IDE](https://www.arduino.cc/en/main/software)，然后在 Preferences 中，将以下网址添加到 Additional Boards Manager URL 字段：http://arduino.esp8266.com/stable/package_esp8266com_index.json ，再进入 Boards Manager 安装 esp8266 软件包，然后将开发板设置为 "NodeMCU 1.0 (ESP-12E module)"，如果使用的是 WeMos D1 Mini 则设置为 "LOLIN(WEMOS) D1 R2 & Mini"，接着将 Port 设置为正确的 COM 端口（对我来说是 NodeMCU 对应的 COM3），最后上传该 sketch。）
1. 记下 COM 端口号或设备名称，后面会用到
1. 按下表将 Arduino 引脚连接到 CC 设备的调试排针

    | Arduino | CC Pin | CC Name          |
    | ------- | ------ | ---------------- |
    | GND     | 1      | GND              |
    | D4      | 7      | RESETn           |
    | D5      | 3      | DC (Debug Clock) |
    | D6      | 4      | DD (Debug Data)  |

<img src="https://www.waveshare.com/img/devkit/CC-Debugger/CC-Debugger-JTAG-Header.jpg" width="40%"/> <img src="https://user-images.githubusercontent.com/35885181/67834765-dcab2280-faad-11e9-8755-971f0e456217.jpg" width="20%"/> <img src="https://user-images.githubusercontent.com/35885181/67834764-dc128c00-faad-11e9-8e06-0937e1bb6790.jpg" width="23%"/>

如果你的 Arduino 是 3.3V 的，可以选择连接 `3.3V -> Target Voltage Sense (Pin 2)`，这样在下一步中给 CC2531 刷写时就不需要再把 CC2531 连接到 USB。

按下表将 ESP8266 引脚连接到 CC 设备的调试排针

| ESP8266   | CC Pin | CC Name          |
| --------- | ------ | ---------------- |
| GND       | 1      | GND              |
| D1/GPIO5  | 7      | RESETn           |
| D2/GPIO4  | 3      | DC (Debug Clock) |
| D5/GPIO14 | 4      | DD (Debug Data)  |

1. 先连接 Arduino/ESP8266，几秒钟后再将 CC2531 接入 USB 电源
1. 将准备好的 `CC2531ZNP-Prod.bin` 放到可执行文件旁边
1. 开始刷写过程

    **Windows**

    ```
    CCLoader_x86_64.exe [Number of the COM port] CC2531ZNP-Prod.bin 0
    ```

    _示例：_ Arduino UNO 在 COM7 上

    ```
    CCLoader_x86_64.exe 7 CC2531ZNP-Prod.bin 0
    ```

    **Linux**

    ```
    ./CCLoader [Name of the USB device] CC2531ZNP-Prod.bin 0
    ```

    _示例：_ Arduino Uno 在 `/dev/ttyACM0` 上

    ```
    ./CCLoader /dev/ttyACM0 CC2531ZNP-Prod.bin 0
    ```

一般几分钟内就能完成。

如果刷写失败/卡在 `Request sent already! Waiting for respond...`——请重试，检查接线，或尝试把最后一个参数由 `0` 改为 `1`。也可以尝试用 `sudo` 运行该命令。

### <a name=arduino_cclib></a> 通过 Arduino/ESP8266 使用 CCLib 刷写（约 3 小时）

通过 Arduino 刷写固件是基于 https://github.com/wavesoft/CCLib 项目实现的
**不过做了一些小改进！！！**

[AndrewLinden](https://github.com/AndrewLinden) 曾表示他使用 CCLib 成功刷写了 CC2531，[相关评论见此](https://github.com/wavesoft/CCLib/issues/19)。

如前所述，[我基于 CCLib 库做了一个 fork，加入了一些小改动](https://github.com/kirovilya/CCLib)，用于通过 Arduino 刷写固件：

- 操作超时设置
- 打开串口后（在我的 Windows 7 上）Arduino 会重启，因此暂时不会响应请求——加入了 3 秒的暂停（从网上找到的方法）。
- 串口速率降到了 9600，因为使用其他速率会出现通信错误：
  `ERROR: Could not read from the serial port!`

刷写流程：

1. 下载并解压该库的压缩包 https://github.com/kirovilya/CCLib。

2. 通过 Arduino IDE 刷写 Arduino sketch
   CCLib\Arduino\CCLib\Examples\CCLib_proxy\CCLib_proxy.ino

**如果通过 esp8266（wemos d1 mini）刷写，需要更改接线方式（第 5 步）以及 Arduino/CCLib/Examples/CCLib_proxy/CCLib_proxy.ino 中的引脚配置：**

```
int CC_RST   = 5;
int CC_DC    = 4;
int CC_DD_I  = 14;
int CC_DD_O  = 12;
```

3. 安装 Python 2.7 或更高版本（已在 python 2.7.13 上测试），如果尚未安装

4. 安装 pyserial 3.0.1，如果尚未安装
   `pip install -r CCLib\Python\requirements.txt`
   或
   `pip install pyserial==3.0.1`

5. 按照 https://github.com/kirovilya/CCLib#1-prepare-your-arduino-board 中的说明连接触点
   **但在我的情况下，我完全没有使用电阻，而是把 CC_DD_I 和 CC_DD_O 两个触点接在一起，再连接到 DEBUG 接口的 DD 引脚上！**

![](https://www.waveshare.com/img/devkit/CC-Debugger/CC-Debugger-JTAG-Header.jpg)

我只连接了这 3 个指定触点以及 GND。刷写固件期间，加密狗和 Arduino 都必须连接到 USB。

<img src="/images/kirovilya/IMG_20180111_193941.jpg" width="35%"/> <img src="/images/kirovilya/IMG_20180111_193923.jpg" width="35%"/> <img src="/images/kirovilya/IMG_20180110_234401.jpg" width="15%"/>

6. 之后，尝试获取芯片信息——如果成功，则说明连接正确（以 COM9 端口为例——即 Arduino 端口）：

```
C:\Projects\CCLib\Python>python cc_info.py -p COM9
```

::: details 命令输出

```
INFO: Found a CC2531 chip on COM9

Chip information:
      Chip ID : 0xb524
   Flash size : 256 Kb
    Page size : 2 Kb
    SRAM size : 8 Kb
          USB : Yes

Device information:
 IEEE Address : 00124b0014aa
           PC : 0000

Debug status:
 [ ] CHIP_ERASE_BUSY
 [ ] PCON_IDLE
 [X] CPU_HALTED
 [ ] PM_ACTIVE
 [ ] HALT_STATUS
 [ ] DEBUG_LOCKED
 [X] OSCILLATOR_STABLE
 [ ] STACK_OVERFLOW

Debug config:
 [ ] SOFT_POWER_MODE
 [ ] TIMERS_OFF
 [X] DMA_PAUSE
 [X] TIMER_SUSPEND
```

:::

[另一个 MacOS 上的连接示例](https://github.com/wavesoft/CCLib/issues/22#issuecomment-384452424)

7. 如果一切顺利，下载[固件](https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_Home_1.2/bin/)。
   在刷写固件之前，我们需要先对它做一点修改。用文本编辑器打开 `.hex`
   文件，**删除倒数第二行**。然后保存文件。

8. 开始刷写固件（耗时较长，大约 2-3 小时）：

```
C:\Projects\Zigbee>python cc_write_flash.py -e -p COM9 --in=CC2531ZNP-Pro-Secure_LinkKeyJoin_mod.hex
```

::: details 命令输出

```
INFO: Found a CC2531 chip on COM9

Chip information:
      Chip ID : 0xb524
   Flash size : 256 Kb
    Page size : 2 Kb
    SRAM size : 8 Kb
          USB : Yes
Sections in CC2531ZNP-Pro-Secure_LinkKeyJoin_mod.hex:

 Addr.    Size
-------- -------------
 0x0000   8176 B
 0x1ff6   10 B
 0x3fff0   1 B
 0x2000   239616 B

This is going to ERASE and REPROGRAM the chip. Are you sure? <y/N>:  y

Flashing:
 - Chip erase...
 - Flashing 4 memory blocks...
 -> 0x0000 : 8176 bytes
    Progress 100%... OK
 -> 0x1ff6 : 10 bytes
    Progress 100%... OK
 -> 0x3fff0 : 1 bytes
    Progress 100%... OK
 -> 0x2000 : 239616 bytes
    Progress 100%... OK

Completed
```

:::

### <a name=rp2040_dragndrop></a> 通过 RP2040 开发板与 [pico_cc_flasher](https://github.com/stolen/pico_cc_flasher) 刷写（约 3 分钟）

这种方法不需要专门的编程器软件。刷写就像把文件拖放到 U 盘一样简单。

#### 准备固件

1. 下载正确的固件（本例中我们使用 [CC2531 固件](https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_Home_1.2/bin/)）
1. 解压固件，并使用 `objcopy` 将 hex 文件转换为二进制文件（不要使用其中自带的二进制文件！）

    **_Windows_**：请参照 StackOverflow 上的[这个](https://stackoverflow.com/questions/11054534/how-to-use-install-gnu-binutils-objdump)回答下载 `objcopy.exe`。

    ```
    objcopy.exe --gap-fill 0xFF --pad-to 0x040000 -I ihex CC2531ZNP-Prod.hex -O binary CC2531ZNP-Prod.bin
    ```

    **Linux 或 Windows 上的 Bash on Ubuntu**：使用你的包管理器安装 `binutils` 软件包

    ```bash
    objcopy --gap-fill 0xFF --pad-to 0x040000 -I ihex CC2531ZNP-Prod.hex -O binary /tmp/CC2531ZNP-Prod.bin
    ```

#### 刷写你的 RP2040

我用的是 Waveshare 的 RP2040-Zero，但换成其他开发板应该也没有问题，唯一的区别是没有可视化的指示灯。

- 自动安装
    - 克隆仓库 `git clone https://github.com/stolen/pico_cc_flasher.git && cd pico_cc_flasher`
    - 将处于 bootloader 模式的 RP2040 开发板连接到电脑
    - 运行 `make install`
- 手动安装
    - 安装 [CircuitPython](https://circuitpython.org/downloads)
    - 将[发行版压缩包](https://github.com/stolen/pico_cc_flasher/releases/latest/download/pico_cc_flasher.zip)解压到 CircuitPython 的 USB 盘中

#### 将 RP2040 连接到 CC2531 加密狗

<img src="https://github.com/stolen/pico_cc_flasher/raw/master/pictures/overview.jpg" width="20%"/> <img src="https://github.com/stolen/pico_cc_flasher/raw/master/pictures/closeup.jpg" width="30%"/> <img src="https://github.com/stolen/pico_cc_flasher/raw/master/pictures/stick_pinout.png" width="35%"/>
将一些引脚连接到你的 CC2531 加密狗

- `GND   ->    GND`
- `GP27  ->    DD`
- `GP28  ->    DC`
- `GP29  ->   nRST`

#### 将 RP2040 连接到电脑，并将加密狗连接到任意电源

当 pico_cc_flasher 检测到芯片后，会读取芯片固件。这可能需要大约一分钟。
之后它会重启，你就可以浏览到 `cc25xx` 目录：

- `data.read.bin` 是芯片闪存的备份文件
- 将除 `data.read.bin` 之外的任意 `*.bin` 文件拖入该目录即可对其进行刷写
- 删除 `control.skip_flash_read` 文件可以重新读取闪存

<img src="https://github.com/stolen/pico_cc_flasher/raw/master/pictures/shell_demo.png" width="40%"/> <img src="https://github.com/stolen/pico_cc_flasher/raw/master/pictures/filemanager.jpg" width="40%"/>
