---
sidebarDepth: 1
---

# Adapter settings

# Configuration of the Zigbee USB-Adapter.  
You can use `dmesg` command on Linux hosts to find the mounted device. Where possible you should use the `/dev/serial/by-id/` path of the stick, instead of `/dev/tty*`. This is because the `/dev/tty*` path can change - for example `/dev/ttyACM0` may become `/dev/ttyACM1` and then later back to `/dev/ttyACM0`. The `/dev/serial/by-id/` path won't change.
```yaml
# Required: serial settings
serial:
  # Required: location of the adapter (e.g. CC2531).
  # USB adapters - use format "port: /dev/ttyACM0"
  # To autodetect the USB port, set 'port: null'.
  port: /dev/ttyACM0 
  # Optional: disable LED of the adapter if supported (default: false)
  disable_led: false
  # Optional: adapter type, not needed unless you are experiencing problems (default: shown below, options: zstack, deconz, ezsp)
  adapter: null
  # Optional: Baud rate speed for serial port, this can be anything firmware support but default is 115200 for Z-Stack and EZSP, 38400 for Deconz, however note that some EZSP firmware need 57600.
  baudrate: 115200
  # Optional: RTS / CTS Hardware Flow Control for serial port (default: false)
  rtscts: false
```

# Configuration of the Zigbee Ethernet-Adapter. 
Find IP address of your Ethernet Zigbee-Adapter through your router/switch web-interface.
```yaml
# Required: serial settings
serial:
  # Required: location of the adapter (e.g. CC2531).
  # Ethernet adapters - use format "port: tcp://IP_adress:port".
  port: tcp://192.168.1.12:6638
  # Optional: disable LED of the adapter if supported (default: false)
  disable_led: false
  # Optional: adapter type, not needed unless you are experiencing problems (default: shown below, options: zstack, deconz, ezsp)
  adapter: null
  # Optional: Baud rate speed for serial port, this can be anything firmware support but default is 115200 for Z-Stack and EZSP, 38400 for Deconz, however note that some EZSP firmware need 57600.
  baudrate: 115200
  # Optional: RTS / CTS Hardware Flow Control for serial port (default: false)
  rtscts: false
```

# Automatic discovery of Zigbee Ethernet-Adapter via MDNS Zeroconf.
Your adapter must support discovery via MDNS Zeroconf!\
There should be no other devices on your network with the same MDNS service type.\
When using this autodetection, the following parameters in `configuration.yaml` will be ignored: `adapter, baudrate`\
Consult the user manual or the manufacturer of the device to find out what type of MDNS service it uses.

List of tested devices supporting Zeroconf autodiscovery
| Device  | MDNS type |
| :---    | :---:     |
| SLZB-06 | slzb-06   |

```yaml
# Required: serial settings
serial:
  # Required: location of the adapter (e.g. CC2531).
  # Ethernet adapters - for MDNS autodiscovery use format "port: mdns://device_service_type".
  port: mdns://slzb-06
  # Optional: disable LED of the adapter if supported (default: false)
  disable_led: false
```

<!-- TODO: some notes about rtscts? Is it useful, which adapter supports it? -->
# Advanced configuration.
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
```

::: tip 
It's also possible to connect USB Adapters over TCP. See how to connect a [remote adapter](../../advanced/remote-adapter/connect_to_a_remote_adapter.md).
:::
