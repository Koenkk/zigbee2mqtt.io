---
sidebarDepth: 1
---

# Logging

Zigbee2MQTT can output logs to the console, a logfile or a (remote) Syslog server.

The log-level can be adjusted at runtime, see [MQTT Topics and Messages](../usage/mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request) for details.

```yaml
advanced:
    # Optional: Logging level, options: debug, info, warning, error (default: info)
    log_level: info
    # Optional: Set log levels for certain namespaces hierarchies (default: {})
    log_namespaced_levels:
        z2m:mqtt: warning
    # Optional: log timestamp format (default: shown below)
    timestamp_format: 'YYYY-MM-DD HH:mm:ss'
    # Optional: Location of log directory (default: shown below)
    log_directory: data/log/%TIMESTAMP%
    # Optional: Log file name, can also contain timestamp, e.g.: zigbee2mqtt_%TIMESTAMP%.log (default: shown below)
    log_file: log.txt
    # Optional: Rotate log every 10MB around 3 files (default: true)
    log_rotation: true
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

## Reducing MQTT traffic

Logging can have a significant impact on MQTT traffic. For that reason, only `info` level and above are published to MQTT by default (see below if you want to change this behavior). You can reduce it further by increasing specific levels for certain namespaces you do not need to log with the setting `log_namespaced_levels`. One of the big factors in traffic from logging is the namespace `z2m:mqtt`, you can increase its level while keeping the rest at `info` using:

```yaml
advanced:
    log_level: info
    log_namespaced_levels:
        z2m:mqtt: warning
```

## Defining levels for specific namespace hierarchy

Any log level defined in `log_namespaced_levels` will apply to the namespace itself and all namespaces below it, unless explicitly configured.

```yaml
advanced:
    log_level: warning
    log_namespaced_levels:
        zhc: info
        zhc:legacy:fz: debug
```

-   `zhc` and below namespaces will be logged as `info` (examples: `zhc`, `zhc:ota:common`, `zhc:legacy:tz`)
-   `zhc:legacy:fz` and below namespaces will be logged as `debug` (examples: `zhc:legacy:fz`, `zhc:legacy:fz:tuya`)
-   Other unspecified namespaces will use `log_level`, in this case, `warning` (examples: `z2m:mqtt`, `zh:zstack`)

## Debugging

In case Zigbee2MQTT isn't working as expected the following tips can help you in finding the problem.
First enable debug logging by adding the following in your `configuration.yaml`:

```yaml
advanced:
    log_level: debug
```

In the logging you will see the following abbreviations:

-   `z2m`: Zigbee2MQTT
-   `zh`: [zigbee-herdsman](https://github.com/koenkk/zigbee-herdsman), logged events from the Zigbee library used by Zigbee2MQTT.
-   `zhc`: [zigbee-herdsman-converters](https://github.com/koenkk/zigbee-herdsman-converters), logged events from the devices support library.

To change log level at runtime, use the frontend or [MQTT](../usage/mqtt_topics_and_messages.md)

### Publishing to MQTT and to frontend

In an effort to improve performance, `debug`-level logs are no longer published to MQTT and to frontend by default. If you want them published, you can use the following setting:

```yaml
advanced:
    log_debug_to_mqtt_frontend: true
```

### Preventing specific namespaces from being logged

A regex-based way to filter out certain `debug` lines based on their namespaces.

Examples:

Filter out log namespaces starting with:

-   `zhc:legacy:fz:tuya`
-   or `zhc:legacy:fz:moes`

```yaml
advanced:
    log_debug_namespace_ignore: '^zhc:legacy:fz:(tuya|moes)'
```

Filter out log namespaces starting with:

-   `zhc:legacy:fz:tuya`
-   or `zhc:legacy:fz:moes`
-   or `zh:ember:uart:` (any namespace below `uart`)
-   or `zh:controller` (any namespace below `controller` and `controller` itself)

```yaml
advanced:
    log_debug_namespace_ignore: '^zhc:legacy:fz:(tuya|moes)|^zh:ember:uart:|^zh:controller'
```

See [https://regex101.com/](https://regex101.com/) if you need some help building a regex. Make sure to use Flavor: `ECMAScript (JavaScript)`.
