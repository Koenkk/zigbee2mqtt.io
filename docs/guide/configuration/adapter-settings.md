---
sidebarDepth: 1
---

# Adapter settings

- Configuration of the Zigbee USB-Adapter.  
You can use `dmesg` command on Linux hosts to find the mounted device. Where possible you should use the `/dev/serial/by-id/` path of the stick, instead of `/dev/tty*`. This is because the `/dev/tty*` path can change - for example `/dev/ttyACM0` may become `/dev/ttyACM1` and then later back to `/dev/ttyACM0`. The `/dev/serial/by-id/` path won't change.
- Configuration of the Zigbee Ethernet-Adapter. 
Find and IP address of your Ethernet Zigbee-Adapter through your router/switch web-interface.

```yaml
# Required: serial settings
serial:
  # Required: location of the adapter (e.g. CC2531).
  # USB adapters - use format "port: /dev/ttyACM0"
  # Ethernet adapters - use format "port: tcp://192.168.1.12:6638".
  # To autodetect the USB port, set 'port: null'. To autodetect the Ethernet-based port, set 'port: mdns://MDNS_ADAPTER_NAME'
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

<!-- TODO: some notes about rtscts? Is it useful, which adapter supports it? -->
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
It's also possible to connect Adapters over TCP. See how to connect a [remote adapter](../../advanced/remote-adapter/connect_to_a_remote_adapter.md).
:::
