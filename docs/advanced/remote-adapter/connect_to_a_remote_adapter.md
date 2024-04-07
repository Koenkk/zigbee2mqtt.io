# Connect to a remote adapter
This how-to explains how to run Zigbee2MQTT with an adapter on a remote location.
We will use ser2net for this which allows to connect to a serial port over TCP.
In this way you can e.g. setup a Raspberry Pi Zero with the adapter connected while running Zigbee2MQTT on a different system. The instructions below have to be executed on the system where the adapter is connected to.

::: warning
WiFi-based Serial-to-IP bridges are not recommended as the serial protocol does not have enough fault-tolerance to handle packet loss or latency delays that can normally occur over WiFi connections.
:::

## 1. Install ser2net
```bash
sudo apt-get install ser2net
```

## 2(a). Configure ser2net (<4.0)
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

## 2(b). Configure ser2net (>=4.0)
```bash
sudo nano /etc/ser2net.yaml
```

Add the following entry, replace `/dev/ttyACM0` with the correct path to your adapter.

```
connection: &con01
  accepter: tcp,20108
  connector: serialdev,/dev/ttyACM0,115200n81,local
  options:
    kickolduser: true
```

With a Slaesh coordinator, you need to set the DTR and RTS pins of the RS232 interfece in a specific way. The current (2023-02-04) version of Raspberry Pi OS does not have recent enough of ser2net to do that correctly, see https://github.com/cminyard/ser2net/issues/46. You might need to build the "gensi" and the "ser2net" packages on your rpi yourself. Other distributions might already have a more recent version. Once you have a version of ser2net that supports the "dtr=off" setting, use the following configuration:

```
connection: &con01
  accepter: tcp,20108
  connector: serialdev,/dev/ttyACM0,115200n81,local,dtr=off,rts=off
  options:
    kickolduser: true
```

For ConBee II / RaspBee II, use the following configuration:

```
connection: &con01
  accepter: tcp,20108
  connector: serialdev,/dev/ttyACM0,115200n81,nobreak,local
  options:
    kickolduser: true
```

After this reboot the system.
```bash
reboot
```


## 3. Configure
Now edit the Zigbee2MQTT `configuration.yaml` accordingly, replace `192.168.2.13` with the IP or hostname of your system where the adapter is connected to.

```yaml
serial:
    port: 'tcp://192.168.2.13:20108'
```

Done! Now you can start Zigbee2MQTT.
