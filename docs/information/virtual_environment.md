---
---
# Running Zigbee2MQTT in Virtual Environment
It is possible to run Zigbee2MQTT in a virtual environment, this has been tested with a Raspberry Pi 3B+.

This guide is similar to the [Running Zigbee2MQTT guide](../getting_started/running_zigbee2mqtt.md), follow the steps from there by replacing the steps with the ones from below.

## 2. Installing
```bash
# Clone Zigbee2MQTT repository
sudo git clone https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
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
nodeenv -p -n 10.15.1

# Deactivate and activate environment to be sure
deactivate
source /opt/zigbee2mqtt/bin/activate

# Install dependencies
cd /opt/zigbee2mqtt
npm ci

# Deactivate environment
deactivate
```

## 4. Starting Zigbee2MQTT
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

## 5. (Optional) Running as a daemon with systemctl
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
ExecStart=/bin/bash -c 'source /opt/zigbee2mqtt/bin/activate; /opt/zigbee2mqtt/bin/npm start'
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
StandardError=inherit
Restart=always
User=pi

[Install]
WantedBy=multi-user.target
```

Now continue with *Verify that the configuration works:* from the *Running Zigbee2MQTT guide*.

## 6. (For later) Update Zigbee2MQTT to the latest version
To update Zigbee2MQTT to the latest version, execute:

```sh
# Stop Zigbee2MQTT and go to directory
sudo systemctl stop zigbee2mqtt
cd /opt/zigbee2mqtt

# Activate environment
source /opt/zigbee2mqtt/bin/activate

# Backup configuration
cp -R data data-backup

# Update
git checkout HEAD -- npm-shrinkwrap.json
git pull
npm ci

# Restore configuration
cp -R data-backup/* data
rm -rf data-backup

# Deactivate environment
deactivate

# Start Zigbee2MQTT
sudo systemctl start zigbee2mqtt
```
