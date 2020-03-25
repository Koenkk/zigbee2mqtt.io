---
---
# Report
*An ongoing discussion about this feature can be found here: https://github.com/Koenkk/zigbee2mqtt/issues/1064*

When report is enabled, devices will report their state changes to zigbee2mqtt even when the change is not directly done by zigbee2mqtt. This is especially handy when the state of a bulb is changed by e.g. a remote or via groups.

To enable report, add the following to your `configuration.yaml`:

```yaml
advanced:
  report: true
```

Zigbee2mqtt will discover devices which are eligible for reporting. The zigbee2mqtt logs shows for which devices report is configured.

## Note for CC2530/CC2531 users
As this feature increases the amount of messages on the Zigbee network, it could cause stability issues when you are using a CC2531 or CC2530 as adapter.

## Support
In order for this feature to work, the device has to support it. As devices from the same manufacturer (mostly) have the same features the table below might help to find out if your device supports it.

| Brand           | On/Off    | Brightness | Color | Color temperature |
| :---            | :---:     | :---:      | :---: | :---:             |
| Philips Hue     | N(1)      | N(2)       | N     | N                 |
| Trådfri(3)      | Y         | Y          | Y     | N                 |
| Innr            | Y         | Y          | Y     | Y                 |
| GLEDOPTO        | N         | N          | N     | N                 |
| OSRAM           | Y         | Y          | N     | N                 | 
| Müller Light    | N         | N          | N     | N                 |

1. Bulbs on old firmware (date 20170908 or older) do report On/Off
2. Zigbee2mqtt will manual poll for change if a binding updates the bulb.
3. The color/brightness of a Trådfri bulb can be changed while the state=off, it also reports back the change.
