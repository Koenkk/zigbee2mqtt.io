# Connect to a remote Sonoff ZBBridge

This how-to explains how to run Zigbee2MQTT with a comercial Sonoff ZBBridge Gateway.
We will use a Sonoff ZBBridge Gateway with custom firmware to connect to a serial port over TCP.
In this way you can use a simple premade Hub/Gateway flash it with custom firmware and then use it as your coordinator.

::: warning
Keep in mind that the EZSP support is currently **experimental**.
:::

::: warning
WiFi-based Serial-to-IP bridges are **not recommended** as the serial protocol does not have enough fault-tolerance to handle packet loss or latency delays that can normally occur over WiFi connections.
:::

## 1. Flash Tasmota ZBBridge

In order for the gateway to be useful for us we want it flashed with custom firmware ([tasmota-zbbridge](https://tasmota.github.io/docs/Zigbee/)) so we can free ourselves from the cloud.
For flashing procedure follow [DigiBlurs guide](https://www.digiblur.com/2020/07/how-to-use-sonoff-zigbee-bridge-with.html) up until step 6.

## 2. Configure

Now edit the Zigbee2MQTT `configuration.yaml` accordingly, replace `192.168.2.13` with the IP or hostname of your system where the adapter is connected to. Also replace `20108` with the port you configured while flashing the Gateway (in step 6 from previous point).

Keep in mind that the EZSP support is currently **experimental**.

```yaml
serial:
    port: 'tcp://192.168.2.13:20108'
    adapter: ezsp
```

Done! Now you can start Zigbee2MQTT.
