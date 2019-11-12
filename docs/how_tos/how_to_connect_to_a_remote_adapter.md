# How to connect to a remote adapter
This how-to explains how to run Zigbee2mqtt with an adapter on a remote location.
We will use ser2net for this which allows to connect to a serial port over TCP.
In this way you can e.g. setup a Raspberry Pi Zero with the adapter connected while running Zigbee2mqtt on a different system. The instructions below have to be executed on the system where the adapter is connected to.

## 1. Install ser2net
```bash
sudo apt-get install ser2net
```

## 2. Configure ser2net
```bash
sudo nano /etc/ser2net.conf
```

Add the following entry, replace `/dev/ttyACM0` with the correct path to your adapter.

```
20108:raw:0:/dev/ttyACM0:115200 8DATABITS NONE 1STOPBIT
```

After this reboot the system.
```bash
reboot
```

## 3. Configure
Now edit the Zigbee2mqtt `configuration.yaml` accordingly, replace `192.168.2.13` with the IP of your system where the adapter is connectd to.

```yaml
serial:
    port: 'tcp://192.168.2.13:20108'
```

Done! Now you can start Zigbee2mqtt.