---
next: 14_securing.md
---

# FreeBSD jail

本文说明如何在 [FreeBSD jail](https://en.wikipedia.org/wiki/FreeBSD_jail) 中运行 Zigbee2MQTT。

为简单起见，本指南假定运行在 [TrueNAS CORE](https://www.truenas.com/truenas-core/) 上，并将 Zigbee2MQTT 安装到 _Mosquitto MQTT_ jail 中，配合 Home Assistant 使用。此设置仅使用 MQTT 来实现 Zigbee 与 Home Assistant 之间的对接。除此之外，本说明应该也适用于任何 FreeBSD 主机。

## 创建 jail

首先我们需要创建将同时运行 Zigbee2MQTT 和 Mosquitto 的 jail。打开 TrueNAS Web UI，导航到 `Plugins`，选择 `Community` 插件，再选择 `Mosquitto MQTT`。

要进入该 jail 的终端，可以使用 Web UI 中 _Jails_ 下的 _Shell_ 功能，或者通过 SSH 登录 TrueNAS 后执行：

```sh
sudo iocage console <jail-name>
```

## 安装

在 jail 的 shell 中输入以下命令：

```bash
# Install Node.js and required dependencies:
# - It is recommended to install Node 22 from the official Node repository. Check https://github.com/nodesource/distributions/blob/master/README.md on how to do this.
# - Older i386 hardware can work with [unofficial-builds.nodejs.org](https://unofficial-builds.nodejs.org/download/release/v20.9.0/ e.g. Version 20.9.0 should work.
# - Selecting `npm` also installs `node`.
pkg install git gmake gcc
corepack enable

# Verify that the correct Node.js version has been installed
node --version  # Should output V20.x, V22.X

# Create installation folder (/usr/local prefix is used for software not part of the base system)
mkdir -p /usr/local/opt/zigbee2mqtt
cd /usr/local/opt/zigbee2mqtt

# Clone Zigbee2MQTT repository
git clone --depth 1 https://github.com/Koenkk/zigbee2mqtt.git .

# Install dependencies
pnpm install --frozen-lockfile

# Build Zigbee2MQTT
pnpm run build
```

## 启动 Zigbee2MQTT

完成上述所有设置后，我们就可以启动 Zigbee2MQTT 了。

```bash
cd /usr/local/opt/zigbee2mqtt
pnpm start
```

首次启动时，Zigbee2MQTT 会在 8080 端口启动引导设置（onboarding）。
访问该地址并按照提示完成配置。
关于引导设置的更多信息请参阅[相关说明](../getting-started/README.md#引导设置)。

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

按下 `CTRL + C` 即可停止 Zigbee2MQTT。

## （可选）使用 rc 作为守护进程运行

要让 Zigbee2MQTT 作为守护进程（在后台）运行，并在 jail 启动时自动启动，我们需要为它创建一个服务文件。

```sh
# Create service file for Zigbee2MQTT (assuming `nano` is installed, `vi` can also be used)
nano /usr/local/etc/rc.d/zigbee2mqtt
```

将以下内容添加到该文件中：

```
#!/bin/sh

# PROVIDE: zigbee2mqtt
# REQUIRE: DAEMON NETWORKING
# BEFORE: LOGIN
# KEYWORD: shutdown

. /etc/rc.subr

name="zigbee2mqtt"
rcvar=zigbee2mqtt_enable

: ${zigbee2mqtt_enable:="NO"}

# enable watchdog
zigbee2mqtt_env="Z2M_WATCHDOG=default"

# daemon
pidfile="/var/run/${name}.pid"
node="/usr/local/bin/node"
script_js="/usr/local/opt/zigbee2mqtt/index.js"
command=/usr/sbin/daemon
procname="daemon"
command_args=" -c -f -P ${pidfile} ${node} ${script_js}"

load_rc_config $name
run_rc_command "$1"
```

保存文件并退出。

赋予其可执行权限：

```sh
chmod +x /usr/local/etc/rc.d/zigbee2mqtt
```

验证该配置是否可用：

```sh
# Start Zigbee2MQTT without enabling it
service zigbee2mqtt onestart

# Show status
service zigbee2mqtt onestatus
```

输出应类似于：

```
root@zigbee2mqtt:/usr/local/opt/zigbee2mqtt # service zigbee2mqtt onestatus
zigbee2mqtt is running as pid 80246.
```

一切正常后，我们希望初始化系统在 jail 启动时自动启动 Zigbee2MQTT。可以通过执行以下命令实现：

```sh
service zigbee2mqtt enable
```

完成！😃

以下是一些之后可能会用到的小提示：

```sh
# Stopping Zigbee2MQTT
service zigbee2mqtt stop

# Starting Zigbee2MQTT
service zigbee2mqtt start
```

## （后续可用）将 Zigbee2MQTT 更新到最新版本

要将 Zigbee2MQTT 更新到最新版本，执行：

```sh
# Run the update script from the Zigbee2MQTT directory
cd /usr/local/opt/zigbee2mqtt
./update.sh
```
