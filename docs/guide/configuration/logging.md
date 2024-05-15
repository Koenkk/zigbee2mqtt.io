---
sidebarDepth: 1
---

# Logging

Zigbee2MQTT can output logs to the console, a logfile or a (remote) Syslog server.

The log-level can be adjusted at runtime, see [MQTT Topics and Messages](../usage/mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request) for details.

```yaml
advanced:
  # Optional: Logging level, options: debug, info, warn, error (default: info)
  log_level: info
  # Optional: Configure the logging level per namespace (default: {})
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
    type: "5424" # The type of the syslog protocol to use (Default: BSD, also valid: 5424).
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
