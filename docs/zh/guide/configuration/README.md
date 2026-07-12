---
next: adapter-settings.md
redirectFrom: /information/configuration.md
---

# 配置

::: warning 注意
不要完全依赖 ChatGPT 等 LLM 生成的配置！请务必对照相关文档核实生成的配置内容，否则可能导致你的设置出错。
:::

Zigbee2MQTT 使用基于 [YAML](https://en.wikipedia.org/wiki/YAML) 的 `configuration.yaml` 文件进行配置。
该文件必须位于安装目录下的 `data` 目录中。`data` 目录和 `configuration.yaml` 必须对 Zigbee2MQTT 进程可写，因为它可能会被更新——例如当你在前端界面（frontend）中更改设置时。你可以通过设置 `ZIGBEE2MQTT_DATA` 环境变量来指定自定义的 data 目录。

::: tip 约定
配置项的 _点号表示法_（例如 `mqtt.server`）表示 `mqtt` 分段下的 `server` 属性。所有 _点号表示法_ 引用都是绝对路径。
:::

## 生成最小配置

<Configurator />

## 环境变量

可以通过环境变量覆盖 `configuration.yaml` 中的值。环境变量名称应以 `ZIGBEE2MQTT_CONFIG_` 开头，
后面跟上要设置的属性路径（大写形式），并用 `_` 分隔。

例如，如果你想覆盖：

```yaml
mqtt:
    base_topic: zigbee2mqtt
```

可以将 `ZIGBEE2MQTT_CONFIG_MQTT_BASE_TOPIC` 设置为所需的值。

## 运行时更改配置

可以通过向主题 `zigbee2mqtt/bridge/request/options` 发布相应的 MQTT 消息，在运行时更改配置项。
详情参见 [MQTT 主题与消息](../usage/mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request)。

::: tip 提示
部分选项需要重启后才能生效。
:::
