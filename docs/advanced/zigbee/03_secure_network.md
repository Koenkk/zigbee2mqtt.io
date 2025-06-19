---
---

# Secure your Zigbee network

To make sure your Zigbee network is as secure as possible, consider the following:

## Disable joining

To disable joining it's important that `permit_join: false` is set in your `configuration.yaml`. Otherwise rogue devices are able to join allowing them to send and receive Zigbee traffic.

## Change Zigbee network encryption key

**Changing the network key requires re-pairing of all devices!**

Zigbee2MQTT releases prior to 1.33.0 use a known default encryption key (Zigbee Transport Key). Therefore it is recommended to change the network encryption key on those versions. Release 1.33.0 and later will generate a random encryption key on startup.

To use a different encryption key add the following to your `configuration.yaml`:

**Do not use this exact key.**

```yaml
advanced:
    network_key: [7, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 11, 12, 13]
```

The network encryption key size is `128-bit` which is essentially 16 decimal values between `0` and `255` or 16 hexadecimal values between `0x00`and `0xFF`.

If you need to transform your decimals to hexadecimals (or vice versa) please use a [converter](https://www.binaryhexconverter.com/decimal-to-hex-converter). Example: 92 (decimal) would become 5C (hexadecimal).

To let Zigbee2MQTT generate a new network key on next startup, add the following to `configuration.yaml`:

```yaml
advanced:
    network_key: GENERATE
```
