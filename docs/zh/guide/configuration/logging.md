---
sidebarDepth: 1
redirectFrom:
    - /information/debug.md
    - /guide/usage/debug.md
---

# 日志

Zigbee2MQTT 可以将日志输出到控制台、日志文件或（远程）Syslog 服务器。

日志级别可以在运行时调整，详见 [MQTT 主题与消息](../usage/mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request)。

```yaml
advanced:
    # Optional: Logging level, options: debug, info, warning, error (default: info)
    log_level: info
    # Optional: Set log levels for certain namespaces hierarchies (default: {})
    log_namespaced_levels:
        z2m:mqtt: warning
    # Optional: log timestamp format (default: shown below)
    # See https://github.com/taylorhakes/fecha?tab=readme-ov-file#formatting-tokens for all supported tokens.
    timestamp_format: 'YYYY-MM-DD HH:mm:ss'
    # Optional: Location of log directory (default: shown below)
    log_directory: data/log/%TIMESTAMP%
    # Optional: Number of log directories to keep before deleting the oldest one (default: shown below)
    log_directories_to_keep: 10
    # Optional: Log file name, can also contain timestamp, e.g.: zigbee2mqtt_%TIMESTAMP%.log (default: shown below)
    log_file: log.txt
    # Optional: Rotate log every 10MB around 3 files (default: true)
    log_rotation: true
    # Optional: format the 'console' output as structured JSON instead of colored plain text.
    log_console_json: false
    # Optional: Output location of the log (default: shown below), leave empty to suppress logging (log_output: [])
    # possible options: 'console', 'file', 'syslog'
    log_output:
        - console
        - file
    # Create a symlink called "current" in the log directory which points to the latests log directory. (default: false)
    log_symlink_current: false
    # Optional: syslog configuration, skip values or entirely to use defaults. Only use when 'syslog' in 'log_output' (see above)
    log_syslog:
        host: localhost # The host running syslogd, defaults to localhost.
        port: 514 # The port on the host that syslog is running on, defaults to syslogd's default port.
        protocol: udp4 # The network protocol to log over (e.g. tcp4, udp4, tls4, unix, unix-connect, etc).
        path: /dev/log # The path to the syslog dgram socket (i.e. /dev/log or /var/run/syslog for OS X).
        pid: process.pid # PID of the process that log messages are coming from (Default process.pid).
        facility: local0 # Syslog facility to use (Default: local0).
        localhost: localhost # Host to indicate that log messages are coming from (Default: localhost).
        type: '5424' # The type of the syslog protocol to use (Default: BSD, also valid: 5424).
        app_name: Zigbee2MQTT # The name of the application (Default: Zigbee2MQTT).
        eol: '\n' # The end of line character to be added to the end of the message (Default: Message without modifications).
```

## 减少 MQTT 流量

日志会对 MQTT 流量产生明显影响。因此，默认情况下只有 `info` 级别及以上的日志会发布到 MQTT（如果想更改此行为，请参阅下文）。你还可以通过 `log_namespaced_levels` 设置，为不需要记录日志的特定命名空间提高其级别，从而进一步减少流量。造成日志流量的一个主要因素是命名空间 `z2m:mqtt`，你可以在保持其余部分为 `info` 的同时提高它的级别：

```yaml
advanced:
    log_level: info
    log_namespaced_levels:
        z2m:mqtt: warning
```

## 为特定命名空间层级定义级别

在 `log_namespaced_levels` 中定义的任何日志级别都会应用于该命名空间本身及其下的所有命名空间，除非另有明确配置。

```yaml
advanced:
    log_level: warning
    log_namespaced_levels:
        zhc: info
        zhc:legacy:fz: debug
```

- `zhc` 及其下的命名空间将以 `info` 级别记录（例如：`zhc`、`zhc:ota:common`、`zhc:legacy:tz`）
- `zhc:legacy:fz` 及其下的命名空间将以 `debug` 级别记录（例如：`zhc:legacy:fz`、`zhc:legacy:fz:tuya`）
- 其他未指定的命名空间将使用 `log_level`，此例中为 `warning`（例如：`z2m:mqtt`、`zh:zstack`）

## 调试

如果 Zigbee2MQTT 的运行不符合预期，以下技巧可以帮助你找到问题所在。
首先在你的 `configuration.yaml` 中添加以下内容以启用调试日志：

```yaml
advanced:
    log_level: debug
```

如果你正在调试某个问题，并希望获得从 Zigbee2MQTT 启动开始的完整日志，请记得关闭 `log_rotation` 并在 `configuration.yaml` 中添加以下内容以开启日志文件输出：

```yaml
advanced:
    log_rotation: false
    log_output:
        - file
```

在日志中你会看到以下缩写：

- `z2m`：Zigbee2MQTT
- `zh`：[zigbee-herdsman](https://github.com/koenkk/zigbee-herdsman)，来自 Zigbee2MQTT 所使用的 Zigbee 库记录的事件。
- `zhc`：[zigbee-herdsman-converters](https://github.com/koenkk/zigbee-herdsman-converters)，来自设备支持库记录的事件。

要在运行时更改日志级别，可以使用前端界面（frontend）或 [MQTT](../usage/mqtt_topics_and_messages.md)

### 发布到 MQTT 和前端界面

为了提升性能，`debug` 级别的日志默认不再发布到 MQTT 和前端界面。如果你希望发布这些日志，可以使用以下设置：

```yaml
advanced:
    log_debug_to_mqtt_frontend: true
```

### 阻止特定命名空间被记录

一种基于正则表达式的方式，可根据命名空间过滤掉某些 `debug` 级别的日志行。

示例：

过滤掉以下列开头的日志命名空间：

- `zhc:legacy:fz:tuya`
- 或 `zhc:legacy:fz:moes`

```yaml
advanced:
    log_debug_namespace_ignore: '^zhc:legacy:fz:(tuya|moes)'
```

过滤掉以下列开头的日志命名空间：

- `zhc:legacy:fz:tuya`
- 或 `zhc:legacy:fz:moes`
- 或 `zh:ember:uart:`（`uart` 之下的任何命名空间）
- 或 `zh:controller`（`controller` 之下的任何命名空间以及 `controller` 本身）

```yaml
advanced:
    log_debug_namespace_ignore: '^zhc:legacy:fz:(tuya|moes)|^zh:ember:uart:|^zh:controller'
```

如果需要构建正则表达式方面的帮助，可参阅 [https://regex101.com/](https://regex101.com/)。请确保使用 Flavor：`ECMAScript (JavaScript)`。
