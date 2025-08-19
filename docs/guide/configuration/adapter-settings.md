---
sidebarDepth: 1
---

# Adapter settings

::: warning ATTENTION
Not all features are supported for every adapter, to see what's supported, go to your [adapter page](../../guide/adapters/README.md).
:::

## Basic configuration

In case Zigbee2MQTT cannot automatically detect your adapter (fails to start with: `USB adapter discovery error (No valid USB adapter found). Specify valid 'adapter' and 'port' in your configuration.`) we need to configure the `serial` section in the `configuration.yaml`.

First determine the port of your adapter:

- For USB adapters: when running on Windows see [these instructions](../installation/05_windows.md#starting-zigbee2mqtt), for Linux execute `ls -l /dev/serial/by-id`:

    ```bash
    pi@raspberry:/ $ ls -l /dev/serial/by-id
    total 0
    lrwxrwxrwx. 1 root root 13 Oct 19 19:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -> ../../ttyACM0
    ```

- For network adapters you need to find the IP address of your adapter through router/switch web-interface. Make sure that the adapter has been assigned a static IP address!
    - Alternatively, in case your adapter supports mDNS, see the mDNS docs below.

Next determine what `adapter` you are using by going to your [adapter page](../adapters/README.md).
Possible adapters are `zstack`, `ember`, `deconz`, `zigate` or `zboss`.

Given the example of the USB adapter above in combination with a `zstack` adapter, we would add the following to the `configuration.yaml`:

```yaml
serial:
    # Location of the adapter
    # USB adapters - use format "port: /dev/serial/by-id/XXX"
    # Ethernet adapters - use format "port: tcp://192.168.1.12:6638"
    port: /dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00
    # Adapter type, allowed values: `zstack`, `ember`, `deconz`, `zigate` or `zboss`
    adapter: zstack
```

This serial configuration should be enough to make Zigbee2MQTT start.

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
    # Optional: Baud rate speed for serial port, this can be anything firmware support but default is 115200 for Z-Stack and EZSP, 38400 for Deconz, however note that some EZSP firmware need 57600.
    baudrate: 115200
    # Optional: RTS / CTS Hardware Flow Control for serial port (default: false)
    rtscts: false
```

## Advanced configuration

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

<!-- TODO: some notes about rtscts? Is it useful, which adapter supports it? -->

::: tip
It's also possible to connect USB Adapters over TCP. See how to connect a [remote adapter](../../advanced/remote-adapter/connect_to_a_remote_adapter.md).
:::
