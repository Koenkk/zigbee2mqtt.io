---
next: ../configuration/
---

# Linux

These instructions explain how to run Zigbee2MQTT on Linux.

For the sake of simplicity this guide assumes running on a Raspberry Pi 4 with Raspbian Stretch Lite, but it should work on any Linux machine.

Therefore the user `pi` is used the following examples, but the user may differ between distributions e.g. `openhabian` should be used on Openhabian.

::: tip TIP
Before starting make sure you have an MQTT broker installed on your system.
There are many tutorials available on how to do this, [example](https://randomnerdtutorials.com/how-to-install-mosquitto-broker-on-raspberry-pi/).
Mosquitto is the recommended MQTT broker but others should also work fine.
:::

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
# NOTE 1: Older i386 hardware can work with [unofficial-builds.nodejs.org](https://unofficial-builds.nodejs.org/download/release/v20.9.0/ e.g. Version 20.9.0 should work.
# NOTE 2: For Ubuntu see tip below
# NOTE 3: Curl might have to be installed first via apt update && apt install curl
sudo curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs git make g++ gcc libsystemd-dev

# Verify that the correct nodejs and npm (automatically installed with nodejs)
# version has been installed
node --version  # Should output V18.x, V20.x, V21.X
npm --version  # Should output 9.X or 10.X

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

> If you are using a Raspberry Pi 1 or Zero AND if you followed this [guide](https://gist.github.com/Koenkk/11fe6d4845f5275a2a8791d04ea223cb), replace `ExecStart=/usr/bin/node index.js` with `ExecStart=/usr/local/bin/node index.js`.

> If you are using a Raspberry Pi or a system running from a SD card, you will likely want to minimize the amount of log files written to disk. Systemd service with `StandardOutput=inherit` will result in logging everything twice: once in `journalctl` through the systemd unit and once from Zigbee2MQTT default logging to files under `data/log`. You will likely want to keep only one of them:
>
> > Keep only the logs under `data/log` --> use `StandardOutput=null` in the systemd unit. **or**
> >
> > Keep only the `journalctl` logging --> set [`advanced.log_output = ['console']`](https://www.zigbee2mqtt.io/guide/configuration/logging.html) in Zigbee2MQTT configuration.

> If you want to use another directory to place all Zigbee2MQTT data, add `Environment=ZIGBEE2MQTT_DATA=/path/to/data` below `[Service]`

> Using `Type=notify` makes systemd aware of when zigbee2mqtt has started up and is e.g. listening on its [Frontend](../configuration/frontend.md) sockets. This is useful for starting other, dependent systemd units or for using the `ExecStartPost=` attribute. For example, to allow a [Reverse Proxy](../configuration/frontend.md#nginx-proxy-configuration) to access zigbee2mqtt's Unix socket, you could add `ExecStartPost=setfacl -m u:www-data:rw /run/zigbee2mqtt/zigbee2mqtt.sock` to the `[Service]` section and `apt install acl`.

Save the file and exit.

You need some **systemd** development files, on **Ubuntu** these can be installed via:

```
$ sudo apt install g++ make libsystemd-dev make
```

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
           └─679 /usr/bin/node index.js

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

## (For later) Update Zigbee2MQTT to the latest version

To update Zigbee2MQTT to the latest version, execute:

```sh
# Run the update script from the Zigbee2MQTT directory
cd /opt/zigbee2mqtt
./update.sh
```
