# Docker on Synology DSM 7.0

> **_注意：_** 这可能并非适用于所有 Zigbee 控制器，但已在 CC2531 上测试通过。

从 Disk Station Manager 第 7 版开始，Synology 移除了对 USB 设备（例如 Zigbee 控制器）的内置支持。
可以通过以 _root_ 身份执行以下命令，将 USB 支持安装到 Linux 内核中。

```
modprobe usbserial
modprobe ftdi_sio
modprobe cdc-acm
```

执行完这些命令后，可能需要拔下 Zigbee 控制器再重新插入 USB 端口。

根据你的 USB Zigbee 控制器型号，你可能还需要额外的驱动，例如默认并未包含 CH341 模块。你可以从 jadahl.com 页面下载预编译好的模块——请根据 NAS 的 CPU 架构选择对应的模块目录（DS218+ -> INTEL Celeron J3355 -> Apollo Lake）。

```
cd /lib/modules
wget http://www.jadahl.com/iperf-arp-scan/DSM_7.0/apollolake/ch341.ko
insmod /lib/modules/ch341.ko
```

你可以创建一个启动任务来执行上述命令：

1. 创建一个可执行的脚本文件，其中包含这三条 modprobe 命令。
1. 使用 DSM 的 _控制面板_ -> _任务计划_ -> _新增_ -> _触发的任务_ -> _用户定义的脚本_，设置为：**用户：** root，**事件：** 开机，并在 _任务设置_ 中填入执行该可执行文件的 `bash` 命令。
