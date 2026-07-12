---
next: 14_securing.md
redirectFrom:
    - /information/windows.md
    - /guide/installation/04_windows.md
---

# Windows

以下说明介绍了如何在 Windows 上运行 Zigbee2MQTT。

::: tip TIP
开始之前，请确保你的系统上已安装了 MQTT 代理（broker）。
网上有很多相关教程，例如[这个示例](https://cedalo.com/blog/how-to-install-mosquitto-mqtt-broker-on-windows/)。
推荐使用 Mosquitto 作为 MQTT 代理，但其他代理通常也能正常工作。
:::

## 安装 USB 转 UART 桥接虚拟串口 (COM) 驱动

为了能够通过虚拟串口与你的 USB 设备通信，你可能需要为操作系统安装相应的驱动，这样刷写软件才能识别到该设备。

- 对于基于 CP210x 的芯片组，可以在 [Silicon Labs 官网](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers)获取驱动。
- 对于基于 CC1352/CC2652/CC2538 的芯片组，请前往 [FTDI 芯片官网](https://ftdichip.com/drivers/vcp-drivers/)查找驱动。

## 安装

1. 从[官网](https://nodejs.org/)下载并安装 Node.js 22 LTS
1. 从开始菜单打开 `Command prompt`（命令提示符）或 `Powershell`（Powershell 的配色更好看）
1. 验证 Node.js 是否安装成功
    ```bash
    node --version
    ```
1. 启用 corepack
    ```bash
    corepack enable
    ```
1. 为 Zigbee2MQTT 选择一个合适的目录，并复制 [Zigbee2MQTT 仓库](https://github.com/koenkk/zigbee2mqtt)中的所有文件
    - 如果你更倾向于使用 git（建议如此），直接克隆整个仓库即可
        ```bash
        git clone --depth 1 https://github.com/Koenkk/zigbee2mqtt/
        ```
    - 否则可以使用绿色的 `Clone or download` 按钮下载 zip 压缩包，然后解压
1. 进入新创建的目录，使用 pnpm 安装依赖：
    ```bash
    pnpm install --frozen-lockfile
    ```

## 启动 Zigbee2MQTT

现在一切都已正确设置好，可以启动 Zigbee2MQTT 了。
进入安装目录的根目录，运行 Zigbee2MQTT：

```bash
pnpm start
```

首次启动时，Zigbee2MQTT 会在 8080 端口启动引导设置（onboarding）。
访问该端口对应的页面并进行相应配置。
关于[引导设置](../getting-started/README.md#引导设置)的更多信息。

引导设置完成后，你将看到类似如下的内容：

```
Zigbee2MQTT:info 2019-10-18 10:56:22 PM Logging to directory: 'D:\Documents\GitHub\zigbee2mqtt\data\log\2019-10-18.22-56-22'
Zigbee2MQTT:info 2019-10-18 10:56:22 PM Starting Zigbee2MQTT version 1.6.0 (commit #e26ad2a)
Zigbee2MQTT:info 2019-10-18 10:56:22 PM Starting zigbee-shepherd
Zigbee2MQTT:info 2019-10-18 10:56:24 PM zigbee-shepherd started
Zigbee2MQTT:info 2019-10-18 10:56:24 PM Coordinator firmware version: '20190608'
```

随时可以按 `CTRL + C` 然后输入 `Y` 确认来停止 Zigbee2MQTT。

::: warning ATTENTION

如果 Zigbee2MQTT 启动失败并提示 `USB adapter discovery error (No valid USB adapter found). Specify valid 'adapter' and 'port' in your configuration.`，我们需要在 `configuration.yaml` 中配置 `serial` 部分。

首先确定分配给你的设备的 COM 端口：

1. 打开开始菜单，输入 `Device Manager`（设备管理器）
1. 展开 `Ports (COM & LPT)`（端口）
1. 查找类似 `USB Serial Device (COM4)` 的节点

![Device Manager](/images/devicemanager.png)

以上面的例子来说，我们会在 `configuration.yaml` 中使用 `port: COM4`。
接下来按照[此处](../configuration/adapter-settings.md)的说明配置 `serial` 部分。

:::

## 更新 Zigbee2MQTT

建议在进行任何修改之前，先备份 Zigbee2MQTT 的 `\data` 子目录。

1. 首先，停止 Zigbee2MQTT
1. 进入在[安装](#安装)步骤中克隆 Zigbee2MQTT 仓库的目录
1. 从配置的源拉取最新内容
    ```bat
    git pull
    ```
1. 更新依赖
    ```bat
    pnpm install --frozen-lockfile
    ```
1. 重启 Zigbee2MQTT
    ```bat
    pnpm start
    ```

下面是一个可供运行的 PowerShell 示例脚本，它会完成以下操作：

- 备份 data 目录
- 更新 Zigbee2MQTT
- 恢复 data 目录内容

该脚本会自动检查 node 是否正在运行（以防 Zigbee2MQTT 仍在运行），如果在运行则会提示关闭。之后你需要手动停止并重启它。

请确保根据你的环境更新脚本中的相关路径。默认情况下，脚本将以 `D:\ProgramData\zigbee2mqtt\` 作为安装目录，以 `C:\Temp\` 作为临时存放 `data` 目录备份的文件夹

请在提升权限的管理员 PowerShell 控制台中运行该脚本

```powershell
# Z2M must not be running
# This script will NOT re-start it

# Modify below paths as necessary
$z2mPath = "D:\ProgramData\zigbee2mqtt"
$backupPath = "C:\Temp"


# DO NOT MODIFY below this line
# ------------------------------------------------------------------------------
# Build paths
$z2mDataPath = Join-Path -Path $z2mPath -ChildPath 'data'
$z2mBackupPath = Join-Path -Path $backupPath -ChildPath 'z2mdata'

# Check if Z2M is running
if (Get-Process -Name "node" -ErrorAction SilentlyContinue) {
    # Found running instance of node, stop script
    "Node still running, please close first" | Write-Host -ForegroundColor Red
    pause
    return
}
else {
    # Continue!
    "Node not running, Zigbee2MQTT upgrade will continue" | Write-Host -ForegroundColor Green
}
# Change working directory to:
"Setting location to ""$($z2mPath)""" | Write-Host
Set-Location -Path $z2mPath
# Back up data directory:
"Backing up data subdirectory" | Write-Host
Copy-Item -Path $z2mDataPath -Destination $z2mBackupPath -Recurse
# Pull the latest release:
"Running ""git pull""" | Write-Host
& git pull
# Update dependencies:
"Running ""pnpm install --frozen-lockfile""" | Write-Host
& pnpm install --frozen-lockfile
# Restore backed-up data:
"Restore backed up data directory" | Write-Host
Copy-Item -Path "$($z2mBackupPath)\*" -Destination $z2mDataPath -Recurse -Force
# Delete back up folder:
"Delete backed up folder" | Write-Host
Remove-Item -Path $z2mBackupPath -Recurse
"Update completed!" | Write-Host -ForegroundColor Green
pause
```
