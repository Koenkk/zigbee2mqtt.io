---
sidebarDepth: 1
---

# 配置更新

从 v2.0.0 开始，Zigbee2MQTT 包含了一套自动设置迁移系统。该系统会根据你之前的 `configuration.yaml` 以及新版 Zigbee2MQTT 的要求，负责对其进行调整。如有必要，迁移过程会反复执行，直到你的 `configuration.yaml` 更新到当前版本为止。

在开始迁移之前，迁移系统会自动为你当前的 `data/configuration.yaml` 创建一份备份。备份文件会按照其版本号命名，例如 `data/configuration_backup_v1.yaml`。

:::warning 重要
通过 Home Assistant 插件配置页面，或通过[环境变量](./README.md#环境变量)设置的配置值不会持久化保存到 `configuration.yaml` 中。因此，迁移系统无法处理这些配置值，如果其中任何一项需要迁移，都需要你手动介入处理。
:::

:::warning 重要
虽然该系统会自动迁移 Zigbee2MQTT 的设置，但它**无法**迁移对第三方（例如 Home Assistant）产生的副作用。请务必查看[迁移说明](#迁移说明)，并按照其中给出的链接相应地调整第三方那一侧的配置。
:::

:::caution 注意
请勿手动编辑 `version` 设置项。如果你这样做，将有可能损坏 `configuration.yaml`，导致迁移系统无法正常工作。
:::

## 迁移说明

迁移系统会考虑某个特定版本所需的全部迁移操作，并为你生成一份日志，方便你了解 `configuration.yaml` 中哪些内容发生了变化，以及这些变化对你新的配置产生了什么影响。该文件会按照 Zigbee2MQTT 的版本变更来命名，例如 `data/migration-1-to-2.log`。

### 从 v1 迁移到 v2 的示例迁移说明

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

在此示例场景中：

- 你同时设置了 `advanced.homeassistant_discovery_topic` 和 `homeassistant.discovery_topic`，系统保留了后者，删除了前者。
- 你设置了 `advanced.baudrate`，它被迁移到了 `serial.baudrate`。
- 你同时设置了 `advanced.rtscts` 和 `serial.rtscts`，系统保留了后者，删除了前者。
- 你设置了 `ban`，它被合并到了 `passlist` 中。
- 你将 `log_level` 设置为 `warn`，它被重命名为 `warning`。
- 系统新增了 `version: 2`（未来的迁移会自动更新该版本号）。
- 你将 `advanced.legacy_api` 设置为 true。该功能已不再支持，此设置项已被移除。
- 你在某个或多个设备或组下的 `devices` 或 `groups` 中，将 `retrieve_state` 设置为 true。该功能已不再支持，此设置项已被移除。
