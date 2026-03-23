---
sidebarDepth: 1
---

# Health

Health related info is published to the `zigbee2mqtt/bridge/health` topic, example payload:

```json
{
    "response_time": 1749991304357, // UTC timestamp when this info was generated (Unix time format)
    "os": {
        "load_average": [15.8, 13.2, 19.2], // Average CPU load of the system ([1 minute, 5 minutes, 15 minutes]), not supported for Windows (will be [0,0,0])
        "memory_used_mb": 1098.2, // Amount of  used memory of the system in MB
        "memory_percent": 8.3 // Amount of used memory of the system in %
    },
    "process": {
        "uptime_sec": 192, // Uptime of Zigbee2MQTT
        "memory_used_mb": 89.2, // Memory used by Zigbee2MQTT in MB
        "memory_percent": 1.2 // Memory used by Zigbee2MQTT in %
    },
    "mqtt": {
        "connected": true, // Whether Zigbee2MQTT is connected to MQTT
        "queued": 0, // Amount of queued messages to be sent to MQTT
        "published": 9, // Amount of published MQTT messages since Zigbee2MQTT started (or since the last check if 'reset_on_check: true')
        "received": 2 // Amount of received MQTT messages since Zigbee2MQTT started (or since the last check if 'reset_on_check: true')
    },
    "devices": {
        // Health info per device since Zigbee2MQTT started (or since the last check if 'reset_on_check: true') where the key is the device IEEE address
        "0x12345678": {
            "leave_count": 1, // Amount of times the device left the network
            "network_address_changes": 1, // Amount of times the device changed its network address
            "messages": 4, // Amount of messages received from the device
            "messages_per_sec": 0.0033, // Amount of messages received from the device per second
        },
        ...
    }
}
```

## Configuration

```yaml
health:
    # Interval between checks in minutes (default: 10)
    interval: 10
    # If true, will reset stats every time the health check is executed (only applicable to stats that can be reset). (default: false)
    reset_on_check: false
```
