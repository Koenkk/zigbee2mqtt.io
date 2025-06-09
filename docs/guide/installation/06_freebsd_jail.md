---
next: ../configuration/
---

# FreeBSD jail

These instructions explain how to run Zigbee2MQTT in a [FreeBSD jail](https://en.wikipedia.org/wiki/FreeBSD_jail).

For the sake of simplicity this guide assumes running on [TrueNAS CORE](https://www.truenas.com/truenas-core/) and installing Zigbee2MQTT in the _Mosquitto MQTT_ jail to be used with Home Assistant. This setup only uses MQTT for interfacing between Zigbee and Home Assistant. The instructions should otherwise work on any FreeBSD machine.

## Jail creation

First we have to create the jail that will run both Zigbee2MQTT and Mosquitto. We can do that by opening the TrueNAS Web UI, navigating to `Plugins`, selecting `Community` plugins and then `Mosquitto MQTT`.

To enter the jail's terminal, we can use the Web UI's _Shell_ feature under _Jails_, or SSH into TrueNAS and then

```sh
sudo iocage console <jail-name>
```

## Installing

Enter the following commands inside the jail's shell:

```bash
# Install Node.js and required dependencies:
# - It is recommended to install Node 22 from the official Node repository. Check https://github.com/nodesource/distributions/blob/master/README.md on how to do this.
# - Older i386 hardware can work with [unofficial-builds.nodejs.org](https://unofficial-builds.nodejs.org/download/release/v20.9.0/ e.g. Version 20.9.0 should work.
# - Selecting `npm` also installs `node`.
pkg install npm git gmake gcc
npm install -g pnpm

# Verify that the correct nodejs and pnpm (automatically installed with nodejs)
# version has been installed
node --version  # Should output V20.x, V22.X
pnpm --version  # Should output 10.X

# Create installation folder (/usr/local prefix is used for software not part of the base system)
mkdir -p /usr/local/opt/zigbee2mqtt
cd /usr/local/opt/zigbee2mqtt

# Clone Zigbee2MQTT repository
git clone --depth 1 https://github.com/Koenkk/zigbee2mqtt.git .

# Install dependencies
pnpm i --frozen-lockfile

# Build Zigbee2MQTT
pnpm run build
```

## Starting Zigbee2MQTT

Now that we have setup everything correctly we can start Zigbee2MQTT.

```bash
cd /usr/local/opt/zigbee2mqtt
pnpm start
```

On first start, Zigbee2MQTT will start the onboarding on port 8080.
Navigate to this board and configure accordingly.
More information about [onboarding](../getting-started/README.md#onboarding).

Once the onboarding is completed, you will see something like:

```bash
Zigbee2MQTT:info  2019-11-09T13:04:01: Logging to directory: '/opt/zigbee2mqtt/data/log/2019-11-09.14-04-01'
Zigbee2MQTT:info  2019-11-09T13:04:01: Starting Zigbee2MQTT version 1.6.0 (commit #720e393)
Zigbee2MQTT:info  2019-11-09T13:04:01: Starting zigbee-herdsman...
Zigbee2MQTT:info  2019-11-09T13:04:03: zigbee-herdsman started
Zigbee2MQTT:info  2019-11-09T13:04:03: Coordinator firmware version: '{"type":"zStack30x","meta":{"transportrev":2,"product":2,"majorrel":2,"minorrel":7,"maintrel":2,"revision":20190425}}'
Zigbee2MQTT:info  2019-11-09T13:04:03: Currently 0 devices are joined:
Zigbee2MQTT:warn  2019-11-09T13:04:03: `permit_join` set to  `true` in configuration.yaml.
Zigbee2MQTT:warn  2019-11-09T13:04:03: Allowing new devices to join.
Zigbee2MQTT:warn  2019-11-09T13:04:03: Set `permit_join` to `false` once you joined all devices.
Zigbee2MQTT:info  2019-11-09T13:04:03: Zigbee: allowing new devices to join.
Zigbee2MQTT:info  2019-11-09T13:04:03: Connecting to MQTT server at mqtt://localhost
Zigbee2MQTT:info  2019-11-09T13:04:03: Connected to MQTT server
```

Zigbee2MQTT can be stopped by pressing `CTRL + C`.

## (Optional) Running as a daemon with rc

To run Zigbee2MQTT as a daemon (in background) and start it automatically on jail start we will create a service file for it.

```sh
# Create service file for Zigbee2MQTT (assuming `nano` is installed, `vi` can also be used)
nano /usr/local/etc/rc.d/zigbee2mqtt
```

Add the following to this file:

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

Save the file and exit.

Make it executable:

```sh
chmod +x /usr/local/etc/rc.d/zigbee2mqtt
```

Verify that the configuration works:

```sh
# Start Zigbee2MQTT without enabling it
service zigbee2mqtt onestart

# Show status
service zigbee2mqtt onestatus
```

Output should look like:

```
root@zigbee2mqtt:/usr/local/opt/zigbee2mqtt # service zigbee2mqtt onestatus
zigbee2mqtt is running as pid 80246.
```

Now that everything works, we want the init system to start Zigbee2MQTT automatically when the jail starts. This can be done by executing:

```sh
service zigbee2mqtt enable
```

Done! 😃

Some tips that can be handy later:

```sh
# Stopping Zigbee2MQTT
service zigbee2mqtt stop

# Starting Zigbee2MQTT
service zigbee2mqtt start
```

## (For later) Update Zigbee2MQTT to the latest version

To update Zigbee2MQTT to the latest version, execute:

```sh
# Run the update script from the Zigbee2MQTT directory
cd /usr/local/opt/zigbee2mqtt
./update.sh
```
