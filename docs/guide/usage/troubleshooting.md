---
sidebarDepth: 1
---

# Troubleshooting

Here you may find answers to common issues regarding Zigbee2MQTT usage and Zigbee networks in general.

**For device-specific troubles, check the device's own page instead.**

[[toc]]

## Crash issues

See [Zigbee2MQTT fails to start/crashes runtime](../installation/20_zigbee2mqtt-fails-to-start_crashes-runtime.md).

## Network stability issues

See [Improve network range and stability](../../advanced/zigbee/02_improve_network_range_and_stability.md).

## Temporary disruption after heavy network operation

Some operations like moving a router, removing a router, re-pairing a router, migrating the coordinator, can temporarily disrupt the network because of changed routes, tables, etc..
The network will self-heal, but until things settle, you may experience any or all of:

- increase in route errors
- increase in device response time
- device not responding

The best course of action after such operations is to let the network settle without any further operation.
Good networks will usually resolve this in a matter of minutes (seconds even), but it can otherwise take up to a few hours.

## EmberZNet coordinators

### Post-IEEE (EUI64) migration troubles

In some circumstances, after an IEEE migration, the IEEE is not propagated properly by the stack causing issues like:

- unable to pair some devices
- some devices leave a few seconds after pairing (usually with `VERIFY_KEY_TIMEOUT` in the logs shortly before)
- device seemingly paired but isn't talking anymore

First step is to check the IEEE migration was done correctly.
Make sure you did not inadvertently reverse the order of bytes (e.g. 3412 instead of 1234).
Then re-do the migration for good measure.

Second step is to check for a known bug in the stack.
You can do this with [`ember-zli`](https://github.com/Nerivec/ember-zli/wiki/Stack#check-for-eui64-mismatch).

Third step is to reset your adapter to factory settings (clear NVM3), and re-do the migration.
You can do this with [`ember-zli`](https://github.com/Nerivec/ember-zli/wiki/Bootloader#clear-nvm3).
Some TCP adapters also allow you to do that from their own interface.
**Make sure you have a `coordinator_backup.json` and `configuration.yaml` present in your Zigbee2MQTT data folder before doing this; Zigbee2MQTT will need them to restore the network after the reset.**

> [!TIP]
> Installation details for `ember-zli` can be found here: https://github.com/Nerivec/ember-zli/wiki#installation

> [!IMPORTANT]
> If you have known-good devices in your network, migrating the IEEE is not usually necessary.
> In most cases, the network will adapt, and you can avoid any of the above completely.
> _You may have to re-pair some devices if not all properly adapt._

> [!TIP]
> If you have been fighting against post-migration issues for a while, you may want to do the factory reset step mentioned above,
> **but** skip the migration after that, to see if your network repairs itself naturally.
> Be sure to let the network settle for a day after this.

## Spammy devices

Devices that spam data reports can quickly crowd the network and reduce the overall stability. Using several devices like that can even go as far as crashing the network on a regular basis. This is a well known problem of brands like Tuya (and derived). Some mmWave sensors have been known to have that problem as well (especially earlier variants).

You can disable or decrease the rate of reports of a device (for all or specific states). If possible, configure [reporting](../usage/mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request-device-reporting-configure) to better match your need and fit what your network can handle.
However, often enough the devices cited above also don't allow proper configuration, in that case, there is no real way to fix them, you can only replace them with better ones.

::: tip TIP
Several Open Source projects offer alternative Tuya OTA update firmware (be sure to read all associated documentation before using these). Examples:

- [https://github.com/romasku/tuya-zigbee-switch](https://github.com/romasku/tuya-zigbee-switch)
- [https://github.com/pvvx/ZigbeeTLc](https://github.com/pvvx/ZigbeeTLc)
- [https://github.com/Andrik45719/ZY-M100](https://github.com/Andrik45719/ZY-M100)
- [https://github.com/slacky1965](https://github.com/slacky1965)

:::

## Disconnect with MQTT v5

If you use an MQTT broker with version 5 of the MQTT specification, you may get disconnects when something is misbehaving.
This can happen, for example, when "maximum packet size" is exceeded (large networks).

To remedy that, configure your broker accordingly, and check if Zigbee2MQTT has a corresponding setting to adjust too. See [MQTT configuration](../configuration/mqtt.md#server-connection).
