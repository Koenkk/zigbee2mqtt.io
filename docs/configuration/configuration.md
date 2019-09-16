---
---
# Configuration
The following configuration options are available in `data/configuration.yaml`.

The values shown are the default ones.

```yaml
# Required: Home Assistant integration (MQTT discovery) (default: false)
homeassistant: false

# Required: allow new devices to join.
# WARNING: Disable this after all devices have been paired! (default: false)
permit_join: true

# Required: MQTT settings
mqtt:
  # Required: MQTT base topic for zigbee2mqtt MQTT messages
  base_topic: zigbee2mqtt
  # Required: MQTT server URL (use mqtts:// for SSL/TLS connection)
  server: 'mqtt://localhost:1883'
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
  # Optional: disable self-signed SSL certificates (default: false)
  reject_unauthorized: true
  # Optional: Include device information to mqtt messages (default: false)
  include_device_information: true

# Required: serial settings
serial:
  # Required: location of CC2531 USB sniffer
  port: /dev/ttyACM0
  # Optional: disable LED of CC2531 USB sniffer (default: false)
  disable_led: false

# Optional: ban devices from the network (by ieeeAddr) (default: empty)
ban:
  - '0x000b57fffec6a5b2'

# Optional: whitelist devices from the network (by ieeeAddr)
# Note that when devices are whitelisted, all device which are not whitelisted will be removed from the network.
# (default: empty)
whitelist:
  - '0x000b57fffec6a5b3'

# Optional: advanced settings
advanced:
  # Optional: ZigBee pan ID (default: shown below)
  pan_id: 0x1a62
  # Optional: Zigbee extended pan ID (default: shown below)
  ext_pan_id: [0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD]
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 11
  # Optional: state caching
  # https://github.com/Koenkk/zigbee2mqtt/commit/9396bde1f3b022e0f634487d1a37d2a5127c8cb3#diff-f68567477d803b49930337bf7fe1556bR16
  # (default: true)
  cache_state: true
  # Optional: Logging level, options: debug, info, warn, error (default: info)
  log_level: info
  # Optional: Location of log directory (default: shown below)
  log_directory: data/log/%TIMESTAMP%
  # Optional: Baudrate for serial port (default: shown below)
  baudrate: 115200
  # Optional: RTS / CTS Hardware Flow Control for serial port (default: true)
  rtscts: true
  # Optional: soft reset ZNP after timeout (in seconds); 0 is disabled (default: 0)
  soft_reset_timeout: 0
  # Optional: network encryption key, will improve security (Note: changing requires repairing of all devices) (default: shown below)
  network_key: [1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]
  # Optional: Add a last_seen attribute to MQTT messages, contains date/time of last Zigbee message
  # possible values are: disable (default), ISO_8601, ISO_8601_local, epoch (default: disable)
  last_seen: 'disable'
  # Optional: Add an elapsed attribute to MQTT messages, contains milliseconds since the previous msg (default: false)
  elapsed: false
  # Optional: Availability timeout in seconds, disabled by default (0).
  # When enabled, devices will be checked if they are still online.
  # Only AC powered routers are checked for availability. (default: 0)
  availability_timeout: 0
  # Optional: Blacklist devices from being checked for availability (default: empty)
  availability_blacklist:
    - DEVICE_FRIENDLY_NAME
  # Optional: Enables report feature (see information -> report for more details) (default: false)
  report: true
  # Optional: Home Assistant discovery topic (default: shown below)
  homeassistant_discovery_topic: 'homeassistant'
  # Optional: Home Assistant status topic (default: shown below)
  homeassistant_status_topic: 'hass/status'

# Optional: networkmap options
map_options:
  graphviz:
    # Optional: Colors to be used in the graphviz network map (default: shown below)
    colors:
      fill:
        enddevice: '#fff8ce'
        coordinator: '#e04e5d'
        router: '#4ea3e0'
      font:
        coordinator: '#ffffff'
        router: '#ffffff'
        enddevice: '#000000'
      line:
        active: '#009900'
        inactive: '#994444'

# Optional: Queue settings, useful when your zigbee stick get's
# unstable when executing many commands
queue:
  # Optional: Delay in ms between each command (default: shown below)
  delay: 250
  # Optional: Max no. of simultaneously running commands (default: shown below)
  simultaneously: 5

# Optional: Device specific options
device_options:
  # See https://www.zigbee2mqtt.io/configuration/device_specific_configuration.html
```

## Specifying devices and groups in a separate file
Normally devices and groups are specified in the `configuration.yaml`, example:

```yaml
devices:
  '0x00158d0001d82999':
    friendly_name: 'my_occupancy_sensor'
    retain: true

groups:
  '1':
    friendly_name: group_1
    retain: true
```

In case you want to specify devices and groups in a separate file, the following configuration can be used (equivalent of the above example).

**configuration.yaml**
```yaml
devices: devices.yaml
groups: groups.yaml
```

**devices.yaml**
```yaml
'0x00158d0001d82999':
    friendly_name: 'my_occupancy_sensor'
    retain: true
```

**groups.yaml**
```yaml
'1':
    friendly_name: group_1
    retain: true
```
