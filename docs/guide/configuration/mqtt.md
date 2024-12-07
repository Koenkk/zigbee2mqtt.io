---
sidebarDepth: 1
---

# MQTT

## Server connection

Zigbee2MQTT requires a MQTT-Server connection to operate.

```yaml
# Required: MQTT settings
mqtt:
    # Required: MQTT server URL (use mqtts:// for SSL/TLS connection)
    server: 'mqtt://localhost:1883'
    # Optional: MQTT base topic for Zigbee2MQTT MQTT messages (default: zigbee2mqtt)
    base_topic: zigbee2mqtt
    # Optional: absolute path to SSL/TLS certificate of CA used to sign server and client certificates (default: nothing)
    ca: '/etc/ssl/mqtt-ca.crt'
    # Optional: absolute paths to SSL/TLS key and certificate for client-authentication (default: nothing)
    key: '/etc/ssl/mqtt-client.key'
    cert: '/etc/ssl/mqtt-client.crt'
    # Optional: MQTT server authentication user (default: nothing)
    user: my_user
    # Optional: MQTT server authentication password (default: nothing)
    password: my_password
    # Optional: MQTT client ID (default: nothing)
    client_id: 'MY_CLIENT_ID'
    # Optional: disable self-signed SSL certificates (default: true)
    reject_unauthorized: true
    # Optional: Include device information to mqtt messages (default: false)
    include_device_information: true
    # Optional: MQTT keepalive in seconds (default: 60)
    keepalive: 60
    # Optional: MQTT protocol version (default: 4), set this to 5 if you
    # use the 'retention' device specific configuration
    version: 4
    # Optional: Disable retain for all send messages. ONLY enable if you MQTT broker doesn't
    # support retained message (e.g. AWS IoT core, Azure IoT Hub, Google Cloud IoT core, IBM Watson IoT Platform).
    # Enabling will break the Home Assistant integration. (default: false)
    force_disable_retain: false
```

### Specifying MQTT server/user/password and network_key in a different file

To specify the MQTT server/user/password in a different file, e.g `secret.yaml`, use the following
configuration.

**configuration.yaml**

```yaml
# IMPORTANT: Don't forget the quotes!
mqtt:
    server: '!secret.yaml server'
    user: '!secret.yaml user'
    password: '!secret.yaml password'
```

**secret.yaml**

```yaml
server: 'mqtt://localhost:1883'
user: mqtt_user
password: mqtt_password
```

## MQTT behaviour

```yaml
advanced:
    # Optional: state caching, MQTT message payload will contain all attributes, not only changed ones.
    # Has to be true when integrating via Home Assistant (default: true)
    cache_state: true
    # Optional: persist cached state, only used when cache_state: true (default: true)
    cache_state_persistent: true
    # Optional: send cached state on startup, only used when cache_state_persistent: true (default: true)
    cache_state_send_on_startup: true
    # Optional: Add a last_seen attribute to MQTT messages, contains date/time of last Zigbee message
    # possible values are: disable (default), ISO_8601, ISO_8601_local, epoch (default: disable)
    last_seen: 'disable'
    # Optional: Add an elapsed attribute to MQTT messages, contains milliseconds since the previous msg (default: false)
    elapsed: false
    # Optional: Enables report feature, this feature is DEPRECATED since reporting is now setup by default
    # when binding devices. Docs can still be found here: https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/information/report.md
    report: true
    # Optional: disables the legacy api (default: shown below)
    legacy_api: true
    # Optional: MQTT output type: json, attribute or attribute_and_json (default: shown below)
    # Examples when 'state' of a device is published
    # json: topic: 'zigbee2mqtt/my_bulb' payload '{"state": "ON"}'
    # attribute: topic 'zigbee2mqtt/my_bulb/state' payload 'ON"
    # attribute_and_json: both json and attribute (see above)
    output: 'json'
```
