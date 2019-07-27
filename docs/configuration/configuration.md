---
---
# Configuration
The following configuration options are available in `data/configuration.yaml`.

The values shown are the default ones.

```yaml
# Required: Home Assistant integration (MQTT discovery)
homeassistant: false

# Required: allow new devices to join.
# WARNING: Disable this after all devices have been paired!
permit_join: true

# Required: MQTT settings
mqtt:
  # Required: MQTT base topic for zigbee2mqtt MQTT messages
  base_topic: zigbee2mqtt
  # Required: MQTT server URL (use mqtts:// for SSL/TLS connection)
  server: 'mqtt://localhost:1883'
  # Optional: absolute path to SSL/TLS certificate of CA used to sign server and client certificates
  ca: '/etc/ssl/mqtt-ca.crt'
  # Optional: absolute paths to SSL/TLS key and certificate for client-authentication
  key: '/etc/ssl/mqtt-client.key'
  cert: '/etc/ssl/mqtt-client.crt'
  # Optional: MQTT server authentication user
  user: my_user
  # Optional: MQTT server authentication password
  password: my_password
  # Optional: MQTT client ID
  client_id: 'MY_CLIENT_ID'
  # Disable self-signed SSL certificates
  reject_unauthorized: true
  # Optional: Include device information to mqtt messages (default: false)
  include_device_information: true

# Required: serial settings
serial:
  # Required: location of CC2531 USB sniffer
  port: /dev/ttyACM0
  # Optional: disable LED of CC2531 USB sniffer
  disable_led: false

# Optional: ban devices from the network (by ieeeAddr)
ban:
  - '0x000b57fffec6a5b2'

# Optional: whitelist devices from the network (by ieeeAddr)
# Note that when devices are whitelisted, all device which are not whitelisted will be removed from the network.
whitelist:
  - '0x000b57fffec6a5b3'

# Optional: advanced settings
advanced:
  # Optional: ZigBee pan ID
  pan_id: 0x1a62
  # Optional: Zigbee extended pan ID
  ext_pan_id: [0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD]
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  channel: 11
  # Optional: state caching
  # https://github.com/Koenkk/zigbee2mqtt/commit/9396bde1f3b022e0f634487d1a37d2a5127c8cb3#diff-f68567477d803b49930337bf7fe1556bR16
  cache_state: true
  # Optional: Logging level, options: debug, info, warn, error
  log_level: info
  # Optional: Location of log directory
  log_directory: data/log/%TIMESTAMP%
  # Optional: Baudrate for serial port
  baudrate: 115200
  # Optional: RTS / CTS Hardware Flow Control for serial port
  rtscts: true
  # Optional: soft reset ZNP after timeout (in seconds); 0 is disabled
  soft_reset_timeout: 0
  # Optional: network encryption key, will improve security (Note: changing requires repairing of all devices)
  network_key: [1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]
  # Optional: Add a last_seen attribute to MQTT messages, contains date/time of last Zigbee message
  # possible values are: disable (default), ISO_8601, ISO_8601_local, epoch
  last_seen: 'disable'
  # Optional: Add an elapsed attribute to MQTT messages, contains milliseconds since the previous msg
  elapsed: false
  # Availability timeout in seconds, disabled by default (0).
  # When enabled, devices will be checked if they are still online.
  # Only AC powered routers are checked for availability.
  availability_timeout: 0
  # Blacklist devices from being checked for availability
  availability_blacklist:
    - DEVICE_FRIENDLY_NAME
  # Enables report feature (see information -> report for more details)
  report: true
  # Home Assistant discovery topic
  homeassistant_discovery_topic: 'homeassistant'
  # Home Assistant status topic
  homeassistant_status_topic: 'hass/status'

# Optional: networkmap options
map_options:
  graphviz:
    # Colors to be used in the graphviz network map
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

# Queue settings, useful when your zigbee stick get's
# unstable when executing many commands
queue:
  # Delay in ms between each command
  delay: 250
  # Max no. of simultaneously running commands
  simultaneously: 5
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
