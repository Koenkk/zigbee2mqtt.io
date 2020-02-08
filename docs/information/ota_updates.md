---
---
# OTA updates
*This is an experimental feature, ongoing discussion can be found here: https://github.com/Koenkk/zigbee2mqtt/issues/2921*

This feature allows to update your Zigbee devices over-the-air.

Not all manufacturers make their updates available, therefore only the following devices support it:
- IKEA TRÅDFRI devices

## Check if an update is available
To check if an update is available for your device send a message to `zigbee2mqtt/bridge/ota_update/check` with payload `DEVICE_FRIENDLY_NAME`. The Zigbee2mqtt log will show if one is available, example:

```
zigbee2mqtt:info  2020-02-08 19:18:01: Checking if update available for 'bulb'
zigbee2mqtt:info  2020-02-08 19:18:04: Update available for 'bulb'
```

## Update to latest firmware
Once an update is available, send to `zigbee2mqtt/bridge/ota_update/update` with payload `DEVICE_FRIENDLY_NAME` to update your device.
An update typically takes +- 10 minutes.
While a device is updating a lot of traffic is generated on the network, therefore it is not recommend to execute multiple updates at the same time.

The Zigbee2mqtt log will show the progress of the OTA update, example:

```
zigbee2mqtt:info  2020-02-08 19:18:01: Checking if update available for '0x90fd9ffffe92968e'
zigbee2mqtt:info  2020-02-08 19:18:04: Update available for '0x90fd9ffffe92968e'
zigbee2mqtt:info  2020-02-08 19:18:04: Starting update of '0x90fd9ffffe92968e'
zigbee2mqtt:info  2020-02-08 19:18:05: Update of '0x90fd9ffffe92968e' at 0%
zigbee2mqtt:info  2020-02-08 19:18:17: Update of '0x90fd9ffffe92968e' at 1%
zigbee2mqtt:info  2020-02-08 19:18:32: Update of '0x90fd9ffffe92968e' at 5%
zigbee2mqtt:info  2020-02-08 19:18:51: Update of '0x90fd9ffffe92968e' at 10%
zigbee2mqtt:info  2020-02-08 19:19:28: Update of '0x90fd9ffffe92968e' at 20%
zigbee2mqtt:info  2020-02-08 19:20:06: Update of '0x90fd9ffffe92968e' at 30%
zigbee2mqtt:info  2020-02-08 19:20:44: Update of '0x90fd9ffffe92968e' at 40%
zigbee2mqtt:info  2020-02-08 19:21:21: Update of '0x90fd9ffffe92968e' at 50%
zigbee2mqtt:info  2020-02-08 19:21:59: Update of '0x90fd9ffffe92968e' at 60%
zigbee2mqtt:info  2020-02-08 19:22:36: Update of '0x90fd9ffffe92968e' at 70%
zigbee2mqtt:info  2020-02-08 19:23:14: Update of '0x90fd9ffffe92968e' at 80%
zigbee2mqtt:info  2020-02-08 19:23:52: Update of '0x90fd9ffffe92968e' at 90%
zigbee2mqtt:info  2020-02-08 19:24:10: Update of '0x90fd9ffffe92968e' at 95%
zigbee2mqtt:info  2020-02-08 19:25:01: Finished update of '0x90fd9ffffe92968e', from '{"softwareBuildID":"1.2.217","dateCode":"20170331"}' to '{"softwareBuildID":"2.3.007","dateCode":"20190520"}'
```