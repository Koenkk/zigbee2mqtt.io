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