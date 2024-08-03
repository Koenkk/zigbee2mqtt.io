---
sidebarDepth: 1
---

# Adapter settings

::: warning ATTENTION
Not all features are supported for every adapter, to see what's supported, go to your [adapter page](../../guide/adapters/README.md).
:::

## Configuration of the Zigbee adapter

For USB apdaters you can use `dmesg` command on Linux hosts to find the mounted device. Where possible you should use the `/dev/serial/by-id/` path of the stick, instead of `/dev/tty*`. This is because the `/dev/tty*` path can change - for example `/dev/ttyACM0` may become `/dev/ttyACM1` and then later back to `/dev/ttyACM0`. The `/dev/serial/by-id/` path won't change.

For Zigbee network adapters you need to find IP address of your adapter through router/switch web-interface.\
::: warning ATTENTION
IP address of the Zigbee network adapter can change if it has not been assigned a static IP address
:::

```yaml
# Required: serial settings
serial:
    # Required: location of the adapter (e.g. CC2531).
    # USB adapters - use format "port: /dev/ttyACM0"
    # To autodetect the USB port, set 'port: null'.
    # Ethernet adapters - use format "port: tcp://192.168.1.12:6638"
    port: /dev/ttyACM0
    # Optional: disable LED of the adapter if supported (default: false)
    disable_led: false
    # Optional: adapter type, specify if you are experiencing startup problems (default: shown below, options: zstack, deconz, ember, zigate)
    adapter: null
    # Optional: Baud rate speed for serial port, this can be anything firmware support but default is 115200 for Z-Stack and EZSP, 38400 for Deconz, however note that some EZSP firmware need 57600.
    baudrate: 115200
    # Optional: RTS / CTS Hardware Flow Control for serial port (default: false)
    rtscts: false
```

## mDNS Zeroconf discovery.

Zigbee2MQTT supports automatic discovery of Zigbee network Adapters. In order to use this feature, your adapter must support discovery via mDNS Zeroconf.

If you have a more than 1 device with the same mDNS service type (name), Zigbee2MQTT with autodiscover option will connect to the random one. So for proper use we recommend to have only one physically connected network adapter with the same mDNS service type (name). Otherwise, please set-up a settings over IP address and port, as described on the passage above.

::: warning ATTENTION
When using this autodetection, the following parameters in `configuration.yaml` will be ignored: `adapter`, `baudrate`
:::

List of tested devices supporting mDNS Zeroconf autodiscovery:
| Device | MDNS service type |
| :--- | :---: |
| SLZB-06 | slzb-06 |
| UZG-01 | uzg-01 |
| CZC-01 | czc |

```yaml
serial:
    port: mdns://slzb-06
    # port: mdns://uzg-01
    # port: mdns://czc
    # Optional: disable LED of the adapter if supported (default: false)
    disable_led: false
```

<!-- TODO: some notes about rtscts? Is it useful, which adapter supports it? -->

## Advanced configuration.

```yaml
advanced:
    # Optional: configure adapter concurrency (e.g. 2 for CC2531 or 16 for CC26X2R1) (default: null, uses recommended value)
    adapter_concurrent: null
    # Optional: Transmit power setting in dBm (default: 5).
    # This will set the transmit power for devices that bring an inbuilt amplifier.
    # It can't go over the maximum of the respective hardware and might be limited
    # by firmware (for example to migrate heat, or by using an unsupported firmware).
    # For the CC2652R(B) this is 5 dBm, CC2652P/CC1352P-2 20 dBm.
    transmit_power: 5
    # Optional: Set the adapter delay, only used for Conbee/Raspbee adapters (default 0).
    # In case you are having issues try `200`.
    # For more information see https://github.com/Koenkk/zigbee2mqtt/issues/4884
    adapter_delay: 0
```

::: tip
It's also possible to connect USB Adapters over TCP. See how to connect a [remote adapter](../../advanced/remote-adapter/connect_to_a_remote_adapter.md).
:::
