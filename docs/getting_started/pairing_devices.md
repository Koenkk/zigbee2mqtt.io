---
---
# Allowing devices to join
Before you start, make sure that `permit_join: true` is set in your `configuration.yaml`. Otherwise new devices cannot join the network!

It's equally important that `permit_join: false` is set in your `configuration.yaml` after initial setup is done to keep your Zigbee network safe and to avoid accidental joining of other Zigbee devices.

# Pairing
First check if the device page ([Supported devices](../information/supported_devices.md), click on the model number) contains instructions on how to pair your device.

If no instructions are available, the device can probably be paired by factory resetting it.

Once you see something similar to below in the log your device is paired.
```
zigbee2mqtt:info  2019-11-09T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired
```
