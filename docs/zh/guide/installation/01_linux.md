---
next: 14_securing.md
---

# Linux

::: warning
我们推荐改用 [Docker](./02_docker.md) 进行安装。
这样可以避免设置 NodeJS 和安装依赖时常见的各种问题。
:::

本文说明如何在 Linux 上运行 Zigbee2MQTT。

为简单起见，本指南假设运行环境为 Raspberry Pi 4，但它应该也能在任何 Linux 机器上运行。

因此以下示例中使用的是 `pi` 用户，但不同发行版所用的用户可能不同，例如在 Openhabian 上应使用 `openhabian`。

::: tip TIP
开始之前，请确保你的系统上已经安装了 MQTT 代理（broker）。
网上有许多相关教程，[示例](https://randomnerdtutorials.com/how-to-install-mosquitto-broker-on-raspberry-pi/)。
推荐使用 Mosquitto 作为 MQTT 代理，但其他代理应该也能正常工作。
:::

## 安装

```bash
# Set up Node.js repository, install Node.js and required dependencies.
# NOTE 1: Older i386 hardware can work with [unofficial-builds.nodejs.org](https://unofficial-builds.nodejs.org/download/release/v20.9.0/ e.g. Version 20.9.0 should work.
# NOTE 2: For Ubuntu see installing through Snap below.
sudo apt-get install -y curl
sudo curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs git make g++ gcc libsystemd-dev
corepack enable

# Verify that the correct Node.js version has been installed
node --version  # Should output V20.x, V22.X

# Create a directory for zigbee2mqtt and set your user as owner of it
sudo mkdir /opt/zigbee2mqtt
sudo chown -R ${USER}: /opt/zigbee2mqtt

# Clone Zigbee2MQTT repository
git clone --depth 1 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt

# Install dependencies (as user "pi")
cd /opt/zigbee2mqtt
pnpm install --frozen-lockfile
```

::: tip TIP
在 Ubuntu 上，Node.js 也可以通过 Snap 安装

```bash
# Install latest nodejs from snap store
# The --classic argument is required here as Node.js needs full access to your system in order to be useful.
# You can also use the --channel=XX argument to install a legacy version where XX is the version you want to install (we need 14+).
sudo snap install node --classic
corepack enable

# Verify node has been installed
# If you encounter an error at this stage and used the snap store instructions, adjust the BIN path as follows:
## PATH=$PATH:/snap/node/current/bin
# then re-verify Node.js as above
node --version
```

:::

## 启动 Zigbee2MQTT

现在一切都已正确设置完毕，我们可以启动 Zigbee2MQTT 了。

```bash
cd /opt/zigbee2mqtt
pnpm start
```

首次启动时，Zigbee2MQTT 会在 8080 端口启动引导设置（onboarding）。
访问该端口对应的页面并按提示完成配置。
更多信息请参阅[引导设置](../getting-started/README.md#引导设置)。

引导设置完成后，你会看到类似下面的输出：

```bash
Zigbee2MQTT:info  2019-11-09T13:04:01: Logging to directory: '/opt/zigbee2mqtt/data/log/2019-11-09.14-04-01'
Zigbee2MQTT:info  2019-11-09T13:04:01: Starting Zigbee2MQTT version 1.6.0 (commit #720e393)
Zigbee2MQTT:info  2019-11-09T13:04:01: Starting zigbee-herdsman...
Zigbee2MQTT:info  2019-11-09T13:04:03: zigbee-herdsman started
Zigbee2MQTT:info  2019-11-09T13:04:03: Coordinator firmware version: '{"type":"zStack30x","meta":{"transportrev":2,"product":2,"majorrel":2,"minorrel":7,"maintrel":2,"revision":20190425}}'
Zigbee2MQTT:info  2019-11-09T13:04:03: Currently 0 devices are joined:
Zigbee2MQTT:info  2019-11-09T13:04:03: Connecting to MQTT server at mqtt://localhost
Zigbee2MQTT:info  2019-11-09T13:04:03: Connected to MQTT server
```

按 `CTRL + C` 可以停止 Zigbee2MQTT。

## （可选）使用 systemctl 作为守护进程运行

若要将 Zigbee2MQTT 作为守护进程（在后台）运行，并在系统启动时自动启动它，我们将使用 systemctl 来运行 Zigbee2MQTT。

```bash
# Create a systemctl configuration file for Zigbee2MQTT
sudo nano /etc/systemd/system/zigbee2mqtt.service
```

在该文件中添加以下内容：

```
[Unit]
Description=zigbee2mqtt
After=network.target

[Service]
Environment=NODE_ENV=production
Type=notify
ExecStart=/usr/bin/node index.js
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
# Or use StandardOutput=null if you don't want Zigbee2MQTT messages filling syslog, for more options see systemd.exec(5)
StandardError=inherit
WatchdogSec=10s
Restart=always
RestartSec=10s
User=pi

[Install]
WantedBy=multi-user.target
```

::: tip NOTE

> 如果你使用的是 Raspberry Pi 1 或 Zero，并且按照这份[指南](https://gist.github.com/Koenkk/11fe6d4845f5275a2a8791d04ea223cb)进行了操作，请将 `ExecStart=/usr/bin/node index.js` 替换为 `ExecStart=/usr/local/bin/node index.js`。

:::

::: tip

如果你使用的是 Raspberry Pi 或从 SD 卡运行的系统，你可能希望尽量减少写入磁盘的日志文件数量。使用 `StandardOutput=inherit` 的 Systemd 服务会导致日志被记录两次：一次通过 systemd 单元记录到 `journalctl`，另一次是 Zigbee2MQTT 默认记录到 `data/log` 下的文件。你可能只想保留其中一种：

- 只保留 `data/log` 下的日志 --> 在 systemd 单元中使用 `StandardOutput=null`。**或者**
- 只保留 `journalctl` 日志 --> 在 Zigbee2MQTT 配置中设置 [`advanced.log_output = ['console']`](https://www.zigbee2mqtt.io/guide/configuration/logging.html)。

:::

::: tip

如果你想使用其他目录来存放所有 Zigbee2MQTT 数据，请在 `[Service]` 下方添加 `Environment=ZIGBEE2MQTT_DATA=/path/to/data`

:::

::: tip

使用 `Type=notify` 可以让 systemd 知道 Zigbee2MQTT 何时启动完成，例如何时开始监听其[前端界面（frontend）](../configuration/frontend.md)的套接字。这对于启动其他依赖此服务的 systemd 单元，或使用 `ExecStartPost=` 属性很有用。例如，若要让[反向代理](../configuration/frontend.md#nginx-代理配置)能够访问 Zigbee2MQTT 的 Unix 套接字，你可以在 `[Service]` 部分添加 `ExecStartPost=setfacl -m u:www-data:rw /run/zigbee2mqtt/zigbee2mqtt.sock`，并执行 `apt install acl`。保存文件并退出。

:::

验证配置是否生效：

```bash
# Start Zigbee2MQTT
sudo systemctl start zigbee2mqtt

# Show status
systemctl status zigbee2mqtt.service
```

输出应类似于：

```bash
pi@raspberry:/opt/zigbee2mqtt $ systemctl status zigbee2mqtt.service
● zigbee2mqtt.service - zigbee2mqtt
   Loaded: loaded (/etc/systemd/system/zigbee2mqtt.service; disabled; vendor preset: enabled)
   Active: active (running) since Thu 2018-06-07 20:27:22 BST; 3s ago
 Main PID: 665 (pnpm)
   CGroup: /system.slice/zigbee2mqtt.service
           └─679 /usr/bin/node index.js

Jun 07 20:27:22 raspberry systemd[1]: Started zigbee2mqtt.
Jun 07 20:27:23 raspberry pnpm[665]: > zigbee2mqtt@1.6.0 start /opt/zigbee2mqtt
Jun 07 20:27:23 raspberry pnpm[665]: > node index.js
Jun 07 20:27:24 raspberry pnpm[665]: Zigbee2MQTT:info  2019-11-09T13:04:01: Logging to directory: '/opt/zigbee2mqtt/data/log/2019-11-09.14-04-01'
Jun 07 20:27:25 raspberry pnpm[665]: Zigbee2MQTT:info  2019-11-09T13:04:01: Starting Zigbee2MQTT version 1.6.0 (commit #720e393)
```

现在一切正常，我们希望 systemctl 能在系统启动时自动启动 Zigbee2MQTT，可以通过执行以下命令实现：

```bash
sudo systemctl enable zigbee2mqtt.service
```

完成！😃

以下是一些之后可能用得上的小技巧：

```bash
# Stopping Zigbee2MQTT
sudo systemctl stop zigbee2mqtt

# Starting Zigbee2MQTT
sudo systemctl start zigbee2mqtt

# View the log of Zigbee2MQTT
sudo journalctl -u zigbee2mqtt.service -f
```

## （后续）将 Zigbee2MQTT 更新到最新版本

要将 Zigbee2MQTT 更新到最新版本，执行：

```sh
# Run the update script from the Zigbee2MQTT directory
cd /opt/zigbee2mqtt
./update.sh
```
