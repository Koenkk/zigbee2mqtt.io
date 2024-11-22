---
next: ../configuration/
---

# Python Virtual Environment

It is possible to run Zigbee2MQTT in a virtual environment, this has been tested with a Raspberry Pi 3B+.

This guide is similar to the [Running Zigbee2MQTT on Linux guide](./01_linux.md), follow the steps from there by replacing the steps with the ones from below.

## Installing

```bash
# Clone Zigbee2MQTT repository
sudo git clone --depth 1 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
sudo chown -R pi:pi /opt/zigbee2mqtt

# Enter folder
cd /opt/zigbee2mqtt

# Install python env
python3 -m venv .

# Activate environment
source /opt/zigbee2mqtt/bin/activate

# Upgrade pip, wheel and setuptools
pip install --upgrade pip wheel setuptools

# Install node environment
pip install nodeenv

# Init node environment
nodeenv -p -n 20.14.0

# Deactivate and activate environment to be sure
deactivate
source /opt/zigbee2mqtt/bin/activate

# Install dependencies
cd /opt/zigbee2mqtt
npm ci

# Deactivate environment
deactivate
```

## Starting Zigbee2MQTT

```bash
# Enter folder
cd /opt/zigbee2mqtt

# Activate environment
source /opt/zigbee2mqtt/bin/activate

# Start
npm start

# ctrl + c to quit

# Deactivate environment
deactivate
```

## (Optional) Running as a daemon with systemctl

To run Zigbee2MQTT as daemon (in background) and start it automatically on boot we will run Zigbee2MQTT with systemctl.

```bash
# Create a systemctl configuration file for Zigbee2MQTT
sudo nano /etc/systemd/system/zigbee2mqtt.service
```

Add the following to this file:

```bash
[Unit]
Description=zigbee2mqtt
After=network.target

[Service]
Type=notify
Environment=NODE_PATH=/opt/zigbee2mqtt/lib/node_modules
Environment=NPM_CONFIG_PREFIX=/opt/zigbee2mqtt
Environment=npm_config_prefix=/opt/zigbee2mqtt
Environment=NODE_ENV=production
ExecStart=/opt/zigbee2mqtt/bin/node index.js
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
StandardError=inherit
Restart=always
User=pi

[Install]
WantedBy=multi-user.target
```

Now continue with _Verify that the configuration works:_ from the _Running Zigbee2MQTT guide_.

## (For later) Update Zigbee2MQTT to the latest version

To update Zigbee2MQTT to the latest version, execute:

```sh
# Run the update script from the Zigbee2MQTT directory
cd /opt/zigbee2mqtt
./update.sh
```
