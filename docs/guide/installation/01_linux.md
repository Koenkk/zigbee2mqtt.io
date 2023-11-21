---
next: ../configuration/
---

# Linux
These instructions explain how to run Zigbee2MQTT on Linux.

For the sake of simplicity this guide assumes running on a Raspberry Pi 4 with Raspbian Stretch Lite, but it should work on any Linux machine.

Therefore the user `pi` is used the following examples, but the user may differ between distributions e.g. `openhabian` should be used on Openhabian.

Before starting make sure you have an MQTT broker installed on your system.
There are many tutorials available on how to do this, [example](https://randomnerdtutorials.com/how-to-install-mosquitto-broker-on-raspberry-pi/).
Mosquitto is the recommended MQTT broker but others should also work fine.

## Determine location of the adapter and checking user permissions
We first need to determine the location of the adapter. Connect the adapter to your Raspberry Pi. Most of the times the location is `/dev/ttyACM0`. This can be verified by:

```bash
pi@raspberry:~ $ ls -l /dev/ttyACM0
crw-rw---- 1 root dialout 166, 0 May 16 19:15 /dev/ttyACM0  # <-- adapter (CC2531 in this case) on /dev/ttyACM0
```

Alternately, if you are using an ethernet connected adapter, follow the instructions given for your specific device.

However, it is **recommended** to use "by ID" mapping of the device (see [Adapter settings](../configuration/adapter-settings.md)). This kind of device path mapping is more stable, but can also be handy if you have multiple serial devices connected to your Raspberry Pi. In the example below the device location is: `/dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00`
```bash
pi@raspberry:/ $ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx. 1 root root 13 Oct 19 19:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -> ../../ttyACM0
```

## Installing
```bash
# Set up Node.js repository and install Node.js + required dependencies
# NOTE 1: Older i386 hardware can work with [unofficial-builds.nodejs.org](https://unofficial-builds.nodejs.org/download/release/v16.15.0/ e.g. Version 16.15.0 should work.
# NOTE 2: For Ubuntu see tip below
sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs git make g++ gcc

# Verify that the correct nodejs and npm (automatically installed with nodejs)
# version has been installed
node --version  # Should output V16.x, V17.x, V18.X or V20.X
npm --version  # Should output 6.X, 7.X or 8.X

# Create a directory for zigbee2mqtt and set your user as owner of it
sudo mkdir /opt/zigbee2mqtt
sudo chown -R ${USER}: /opt/zigbee2mqtt

# Clone Zigbee2MQTT repository
git clone --depth 1 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt

# Install dependencies (as user "pi")
cd /opt/zigbee2mqtt
npm ci
# If this command fails and returns an ERR_SOCKET_TIMEOUT error, run this command instead: npm ci  --maxsockets 1

# Build the app
npm run build
```

If everything went correctly the output of `npm ci` is similar to (the number of packages and seconds is probably different on your device):
```bash
node-pre-gyp info ok
added 383 packages in 111.613s
```

Note that the `npm ci` produces some `warning` which can be ignored.

::: tip TIP
On Ubuntu, Node.js can be installed through Snap

```bash
# Install latest nodejs from snap store
# The --classic argument is required here as Node.js needs full access to your system in order to be useful.
# You can also use the --channel=XX argument to install a legacy version where XX is the version you want to install (we need 14+).
sudo snap install node --classic

# Verify node has been installed
# If you encounter an error at this stage and used the snap store instructions, adjust the BIN path as follows:
## PATH=$PATH:/snap/node/current/bin
# then re-verify nodejs and npm versions as above
node --version
```
:::

## Configuring
Before we can start Zigbee2MQTT we need to copy and edit the `configuration.yaml` file. This file contains the configuration which will be used by Zigbee2MQTT.

Copy and open the configuration file:
```bash
cp /opt/zigbee2mqtt/data/configuration.example.yaml /opt/zigbee2mqtt/data/configuration.yaml
nano /opt/zigbee2mqtt/data/configuration.yaml
```

For a basic configuration, the default settings are probably good. The only thing we need to change is the MQTT server url/authentication and the serial port (in some cases, your adapter might need additional configuration parameters, see [supported Adapters](../adapters/README.md)). This can be done by changing the section below in your `configuration.yaml`.

```yaml
# MQTT settings
mqtt:
  # MQTT base topic for Zigbee2MQTT MQTT messages
  base_topic: zigbee2mqtt
  # MQTT server URL
  server: 'mqtt://localhost'
  # MQTT server authentication, uncomment if required:
  # user: my_user
  # password: my_password

# Serial settings
serial:
  # Location of the adapter (see first step of this guide)
  port: /dev/ttyACM0
```

Save the file and exit.

## Starting Zigbee2MQTT
Now that we have setup everything correctly we can start Zigbee2MQTT.

```bash
cd /opt/zigbee2mqtt
npm start
```

When started successfully, you will see something like:
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

## (Optional) Running as a daemon with systemctl
To run Zigbee2MQTT as daemon (in background) and start it automatically on boot we will run Zigbee2MQTT with systemctl.

```bash
# Create a systemctl configuration file for Zigbee2MQTT
sudo nano /etc/systemd/system/zigbee2mqtt.service
```

Add the following to this file:
```
[Unit]
Description=zigbee2mqtt
After=network.target

[Service]
Environment=NODE_ENV=production
ExecStart=/usr/bin/npm start
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
# Or use StandardOutput=null if you don't want Zigbee2MQTT messages filling syslog, for more options see systemd.exec(5)
StandardError=inherit
Restart=always
RestartSec=10s
User=pi

[Install]
WantedBy=multi-user.target
```

> If you are using a Raspberry Pi 1 or Zero AND if you followed this [guide](https://gist.github.com/Koenkk/11fe6d4845f5275a2a8791d04ea223cb), replace `ExecStart=/usr/bin/npm start` with `ExecStart=/usr/local/bin/npm start`.

> If you are using a Raspberry Pi or a system running from a SD card, you will likely want to minimize the amount of log files written to disk. Systemd service with `StandardOutput=inherit` will result in logging everything twice: once in `journalctl` through the systemd unit and once from Zigbee2MQTT default logging to files under `data/log`. You will likely want to keep only one of them: 
> > Keep only the logs under `data/log` --> use `StandardOutput=null` in the systemd unit.  **or** 
> > 
> > Keep only the `journalctl` logging --> set [`advanced.log_output = ['console']`](https://www.zigbee2mqtt.io/guide/configuration/logging.html) in Zigbee2MQTT configuration.

> If you want to use another directory to place all Zigbee2MQTT data, add `Environment=ZIGBEE2MQTT_DATA=/path/to/data` below `[Service]`

Save the file and exit.

Verify that the configuration works:
```bash
# Start Zigbee2MQTT
sudo systemctl start zigbee2mqtt

# Show status
systemctl status zigbee2mqtt.service
```

Output should look like:
```bash
pi@raspberry:/opt/zigbee2mqtt $ systemctl status zigbee2mqtt.service
● zigbee2mqtt.service - zigbee2mqtt
   Loaded: loaded (/etc/systemd/system/zigbee2mqtt.service; disabled; vendor preset: enabled)
   Active: active (running) since Thu 2018-06-07 20:27:22 BST; 3s ago
 Main PID: 665 (npm)
   CGroup: /system.slice/zigbee2mqtt.service
           ├─665 npm
           ├─678 sh -c node index.js
           └─679 node index.js

Jun 07 20:27:22 raspberry systemd[1]: Started zigbee2mqtt.
Jun 07 20:27:23 raspberry npm[665]: > zigbee2mqtt@1.6.0 start /opt/zigbee2mqtt
Jun 07 20:27:23 raspberry npm[665]: > node index.js
Jun 07 20:27:24 raspberry npm[665]: Zigbee2MQTT:info  2019-11-09T13:04:01: Logging to directory: '/opt/zigbee2mqtt/data/log/2019-11-09.14-04-01'
Jun 07 20:27:25 raspberry npm[665]: Zigbee2MQTT:info  2019-11-09T13:04:01: Starting Zigbee2MQTT version 1.6.0 (commit #720e393)
```

Now that everything works, we want systemctl to start Zigbee2MQTT automatically on boot, this can be done by executing:
```bash
sudo systemctl enable zigbee2mqtt.service
```

Done! 😃

Some tips that can be handy later:
```bash
# Stopping Zigbee2MQTT
sudo systemctl stop zigbee2mqtt

# Starting Zigbee2MQTT
sudo systemctl start zigbee2mqtt

# View the log of Zigbee2MQTT
sudo journalctl -u zigbee2mqtt.service -f
```
## (Optional and alternatively) Running as a daemon with sysvinit.
If you're using a systemd-free distribution, such as Devuan or equivalent,
and you want to run Zigbee2MQTT as a daemon (in the background) and start it automatically on boot we will run Zigbee2MQTT with a sysvinit script
and a corresponding configuration file.
Yes, Devuan runs very well on a Raspberry Pi.

```bash
# Create a sysvinit configuration file for Zigbee2MQTT.
# Here we use `nano`, but you could of course use your preferred editor.
sudo nano /etc/zigbee2mqtt.conf
```

Copy and paste the following into this file:
```
#
# Keep shell syntax in this file, it will be sourced by 'sh'.
#
# During manual installation of zigbee2mqtt, and following the
# instructions on the software website, a particular directory
# was created, software installed into the directory and
# all files in this directory were given ownership for a specific
# user on this computer.
#
# Here, define the user ID that shall run the zigbee2mqtt bridge.
# Do not run the bridge as root, but run as an unpriviledged user.
RUNAS='someuser'
#
# Define the directory where the bridge is installed,
# the default being /opt/zigbee2mqtt'.
RUN_DIR='/opt/zigbee2mqtt'
#
# Make the init script slightly more verbose.
#VERBOSE='yes'
#
# EOF.
```
Save the file and exit the editor.

> Make sure to correctly adjust the name of the user in `RUNAS=''` to the same user ID as was given the ownership of the installed software.
> 
> Also, if you installed the software to a different directory than the one proposed (/opt/zigbee2mqtt), you must modify the `RUN_DIR=''` accordingly.

```bash
# Create a sysvinit init script for Zigbee2MQTT.
# Here again, we use `nano`, but you should use your preferred editor.
sudo nano /etc/init.d/zigbee2mqtt
```

Carefully copy and paste the following into this file:
```
#!/bin/sh
### BEGIN INIT INFO
# Provides:          zigbee2mqtt
# Required-Start:    $local_fs $time $syslog
# Required-Stop:     $local_fs $syslog
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Zigbee to MQTT
# Description:       Zigbee to MQTT bridge
### END INIT INFO

# Author: StafrGotar

PIDFILE=/run/zigbee2mqtt.pid
CONF=/etc/zigbee2mqtt.conf

# PATH should only include /usr/* if it runs after the mountnfs.sh script
PATH=/sbin:/usr/sbin:/bin:/usr/bin
DESC="Zigbee to MQTT bridge"
NAME=zigbee2mqtt

SCRIPTNAME="/etc/init.d/${NAME}" # The name of this init-script.
CONF_FILE="/etc/${NAME}.conf"    # The name of a configuration file.

# This is the program which would be used to manually start zigbee2mqtt.
DAEMON=/usr/bin/npm

# Exit if the npm package is not installed.
[ -x "$DAEMON" ] || exit 0

# Load the VERBOSE setting and other rcS variables
. /lib/init/vars.sh

# Define LSB log_* functions.
# Depend on lsb-base (>= 3.2-14) to ensure that this file is present
# and status_of_proc is working.
. /lib/lsb/init-functions

if [ ! -f "${CONF_FILE}" ]; then
    log_failure_msg " Missing configuration file ${CONF_FILE}." "${NAME}"
    exit 1
else
    . "${CONF_FILE}"
fi

PGREP_BIN=$(which pgrep) # Exists and is executable.
if [ "${?}" != 0 ]; then
    log_failure_msg " Missing 'pgrep' binary." "${NAME}"
    exit 1
fi

if [ ! -d "${RUN_DIR}" ]; then
    log_failure_msg " Execution directory ${RUN_DIR} doesn't exist." "${NAME}"
    exit 1
fi

do_start()
{
    start-stop-daemon --start \
                      --oknodo \
                      --quiet \
                      --background \
                      --make-pidfile \
                      --pidfile "${PIDFILE}" \
                      --chuid "${RUNAS}" \
                      --chdir "${RUN_DIR}" \
                      --exec "${DAEMON}" \
                      --test -- 'start' || return 1
    start-stop-daemon --start \
                      --oknodo \
                      --quiet \
                      --background \
                      --make-pidfile \
                      --pidfile "${PIDFILE}" \
                      --chuid "${RUNAS}" \
                      --chdir "${RUN_DIR}" \
                      --exec "${DAEMON}" -- 'start' || return 2
}

do_stop()
{
    # At start-up, the 'npm start' command leaves 3 processes running.
    #
    # 1) 'npm start' - This is where we obtain the PID we save at start-up.
    # 2) 'sh -c node index.js'
    # 3) 'node index.js'
    #
    # If we simply kill the 'npm' (1) process, then the 'sh' process (2)
    # will be killed too, but the 'node' (3) process will be left dangling.
    #
    # If we kill the 'sh' (2) process, then the 'npm' process (1) will also terminate
    # but will leave the 'node' (3) process dangling.
    #
    # We must explicitly kill the 'node' (3) process and then kill the 'npm' (1) process,
    # which also will terminate the 'sh' (2) process.
    # If successful, we may remove the .pid file.
    #
    # We will need to find the PID of the 'sh' (2) process to find the PID of the 'node' (3) process.
    # The current user could run several nodejs programs, performing different tasks,
    # potentially even several instances of zigbee2mqtt.
    #
    # We want to kill only the 'node' running this instance of zigbee2mqtt.
    # This means we kill the 'node' who's parent is the 'sh' started by our zigbee2mqtt PID.
    #
    if [ ! -f "${PIDFILE}" ]; then
        log_failure_msg "\n${NAME} is not running."
        exit 1
    fi
    NPM_PID="$(cat ${PIDFILE})"
    if [ -z "${NPM_PID}" ]; then
        log_failure_msg " Failed to obtain the current 'npm' pid from the 'pid' file '${PIDFILE}'. Impossible to stop" "${NAME}"
        exit 1
    fi
    SHELL_PID=$(pgrep -u "${RUNAS}" --full --exact 'sh -c node index.js')
    if [ -z "${SHELL_PID}" ]; then
        log_failure_msg " Failed to obtain the pid of the shell started by npm. Impossible to stop" "${NAME}"
        exit 1
    fi
    NODE_PID=$(pgrep -u "${RUNAS}" --parent "${SHELL_PID}" --full --exact 'node index.js')
    if [ -z "${NODE_PID}" ]; then
        log_failure_msg " Failed to obtain the pid of the 'node' started by npm. Impossible to stop" "${NAME}"
        exit 1
    fi
    [ "$VERBOSE" != no ] && log_warning_msg "\nWill kill 'node' with PID ${NODE_PID}."
    kill "${NODE_PID}"
    #
    [ "$VERBOSE" != no ] && log_warning_msg  "Will kill 'npm' with PID ${NPM_PID}."
    #
    # Kill all processes started by the 'npm' process. (Wouldn't kill the 'node' subprocess of the 'sh -c').
    start-stop-daemon --stop \
                      --quiet \
                      --oknodo \
                      --ppid "${NPM_PID}"
    RETVAL="${?}"
    [ "${RETVAL}" = 2 ] && return 2
    rm -f "${PIDFILE}"
    return "${RETVAL}"
}

case "$1" in
    start)
        [ "$VERBOSE" != no ] && log_daemon_msg "Starting ${DESC}" "$NAME"
        do_start
        case "$?" in
            0|1)
                [ "$VERBOSE" != no ] && log_end_msg 0
                ;;
            2) [ "$VERBOSE" != no ] && log_end_msg 1
                ;;
        esac
        ;;
    stop)
        [ "$VERBOSE" != no ] && log_daemon_msg "Stopping ${DESC}" "$NAME"
        do_stop
        case "$?" in
            0|1)
                [ "$VERBOSE" != no ] && log_end_msg 0
                ;;
            2)
                [ "$VERBOSE" != no ] && log_end_msg 1
                ;;
        esac
        ;;
    restart)
        [ "$VERBOSE" != no ] && log_daemon_msg "Restarting ${DESC}" "$NAME"
        do_stop
        case "$?" in
            0|1)
                do_start
                case "$?" in
                    0) log_end_msg 0 ;;
                    1) log_end_msg 1 ;; # Old process is still running
                    *) log_end_msg 1 ;; # Failed to start
                esac
                ;;
            *)
                # Failed to stop
                log_end_msg 1
                ;;
        esac
        ;;
    status)
        status_of_proc -p "${PIDFILE}" "${DAEMON}" "${NAME}" && exit 0 || exit $?
        ;;
    *)
        log_action_msg "Usage: ${SCRIPTNAME} {start|stop|status|restart}"
        exit 1
        ;;
esac

exit 0
```
Save the file and exit the editor.

```bash
# Make sure to set the right access to the init script.
sudo chmod 0755 /etc/init.d/zigbee2mqtt
```

## Starting Zigbee2MQTT with sysvinit
Now that we have setup everything correctly we can start Zigbee2MQTT.

```bash
sudo /etc/init.d/zigbee2mqtt start
```

To stop the service:
```bash
sudo /etc/init.d/zigbee2mqtt stop
```

To check if the service is currently running:
```bash
sudo /etc/init.d/zigbee2mqtt status
```

If this works as expected, you can make sure the init script gets executed automatically at boot.
```bash
sudo update-rc.d zigbee2mqtt defaults
```


## (For later) Update Zigbee2MQTT to the latest version
To update Zigbee2MQTT to the latest version, execute:

```sh
# Run the update script from the Zigbee2MQTT directory
cd /opt/zigbee2mqtt
./update.sh
```
