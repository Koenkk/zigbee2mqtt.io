---
sidebar: auto
redirectFrom: /how_tos/how-to-switch-to-dev-branch.md
---

# 切换到 dev 分支

Zigbee2MQTT 的 dev 分支包含最新的功能、改进和支持的设备。
如果你想尝试这些内容，可以切换到 dev 分支。

::: warning
该分支是开发分支！其稳定性可能不如发布版本！
:::

## Linux

```bash
# Stop Zigbee2MQTT and go to directory
sudo systemctl stop zigbee2mqtt
cd /opt/zigbee2mqtt

# Backup configuration
cp -R data data-backup

# Update
git fetch origin dev:dev
# If you get an `error: pathspec 'dev' did not match any file(s) known to git` execute: `git fetch origin --unshallow`
git checkout dev  # Change 'dev' to 'master' to switch back to the release version
git pull
pnpm install --frozen-lockfile

# Restore configuration
cp -R data-backup/* data
rm -rf data-backup

# Start Zigbee2MQTT
sudo systemctl start zigbee2mqtt
```

## Docker

使用带有 `latest-dev` 标签的 Docker 镜像。

## Home Assistant 附加组件

使用 [`edge`](https://github.com/zigbee2mqtt/hassio-zigbee2mqtt) 版本。

- 停止"常规"附加组件
- 关闭"常规"附加组件的 `Start on boot`
- 关闭"常规"附加组件的 `Watchdog`
- 进入附加组件商店
- 选择并安装 `Zigbee2MQTT Edge`
- 如果"常规"附加组件的 `Configuration` 页面中有任何设置，将其复制到 `Edge` 附加组件对应的页面中
- 启动 `Edge` 附加组件（并根据需要配置 `Start on boot`、`Watchdog` 和 `Show in sidebar`）

:::caution 注意
不要同时使用相同的配置启动两个附加组件，这样会导致失败。
:::

:::tip 提示
要更新 `Edge` 附加组件，只需将其卸载（**不要删除数据**），然后重新安装即可。
:::

:::tip 提示
如果你打算长期使用 `Edge` 附加组件，在确认 `Edge` 工作正常后，可以卸载"常规"附加组件（**不要删除数据**）。
:::

:::tip 提示
在经常切换附加组件时，建议始终直接使用 `configuration.yaml`，而不是附加组件的 `Configuration` 页面，以避免设置不匹配的问题。一旦设置成功迁移到 `configuration.yaml` 中，你就可以清空附加组件 `Configuration` 页面中对应的输入框（`mqtt`、`serial`），然后重新启动 Zigbee2MQTT。
:::
