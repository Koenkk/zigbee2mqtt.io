---
sidebarDepth: 1
---

# Configuration update

Starting with v2.0.0 Zigbee2MQTT includes an automatic settings migration system. This system will take care of adjusting your `configuration.yaml` according to your previous one, and the requirements of the new Zigbee2MQTT version. If necessary, the migration process is repeated until your `configuration.yaml` is up to the current version.

The migration system will automatically make a backup of your current `data/configuration.yaml` before starting a migration. The backup file will be named according to its version, for example `data/configuration_backup_v1.yaml`.

:::warning IMPORTANT
Configuration values set through Home Assistant add-on configuration page, or through [environment variables](./README.md#environment-variables) are not persisted to the `configuration.yaml`. As such, they cannot be processed by the migration system and will require your intervention if a migration is required for any of them.
:::

:::warning IMPORTANT
While this automatically migrates Zigbee2MQTT settings, it **cannot** migrate side-effects on third parties (like Home Assistant). Make sure you go over the [migration notes](#migration-notes) and the link given to adjust things accordingly on that front.
:::

:::caution CAUTION
Do not edit the `version` setting manually. If you do, you run the risk of corrupting your `configuration.yaml`, the migration system may no longer work properly.
:::

## Migration notes

The migration system will consider every migrations required for a particular version and build a log for you to easily identify what needed changing in your `configuration.yaml` and has an impact on your new configuration. The file will be named according to the Zigbee2MQTT version change, for example `data/migration-1-to-2.log`.

### Example migration notes from v1 to v2

```
[REMOVAL] HA discovery_topic was moved from advanced.homeassistant_discovery_topic to homeassistant.discovery_topic.

[TRANSFER] Baudrate was moved from advanced.baudrate to serial.baudrate.

[REMOVAL] RTSCTS was moved from advanced.rtscts to serial.rtscts.

[TRANSFER] ban was renamed to passlist.

[CHANGE] Log level 'warn' has been renamed to 'warning'.

[ADDITION] Migrated settings to version 2

[REMOVAL] The MQTT legacy API has been removed (advanced.legacy_api setting). See link below for affected topics.

[REMOVAL] Retrieve state option ((devices|groups).xyz.retrieve_state setting)

For more details, see https://github.com/Koenkk/zigbee2mqtt/discussions/24198
```

In this scenario:

- You had set both `advanced.homeassistant_discovery_topic` and `homeassistant.discovery_topic`, the latter was retained, the former removed.
- You had set `advanced.baudrate`, it was moved to `serial.baudrate`.
- You had set both `advanced.rtscts` and `serial.rtscts`, the latter was retained, the former removed.
- You had set `ban`, it was merged into `passlist`.
- You had set `log_level` to `warn`, it was renamed to `warning`.
- `version: 2` was added (future migrations will automatically update it).
- You had set `advanced.legacy_api` to true. This is no longer supported, the setting was removed.
- You had set `retrieve_state` to true for one or more devices or groups under `devices` or `groups`. This is no longer supported, the setting was removed.
