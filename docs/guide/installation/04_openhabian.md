---
next: ../configuration/
---

# openHABian

## Installation

If you are using openHABian on a Raspberry Pi then the installation is pretty easy:

1. Launch the configuration utility with `sudo openhabian-config`.
1. Under _Select Branch_ choose option _main_.
1. Go to _optional components_.
1. If you don't have a MQTT-server yet, then first choose Mosquitto and follow the instructions. After installation of Mosquitto come back to the _optional components_ and select _Zigbee2MQTT_.
1. After selecting your Zigbee USB adapter, or specifying the ip:port of your ethernet adapter, you have to enter your MQTT username and if necessary a password.
1. After about 3 to 4 minutes Zigbee2MQTT should be up and running. You can test if the configuration page is available on port 8081.

## Update

1. Go to _optional components_.
2. Select _Zigbee2MQTT_.
3. After are asked if you want to update.
4. After about 3 to 4 minutes Zigbee2MQTT should be up and running. You can test if the configuration page is available on port 8081.
