---
---
# Configuration
The following configuration options are available in `data/configuration.yaml`.

```yaml
# Optional: Home Assistant integration (MQTT discovery) (default: false)
homeassistant: false

# Optional: allow new devices to join.
# WARNING: Disable this after all devices have been paired! (default: false)
permit_join: true

# Required: MQTT settings
mqtt:
  # Required: MQTT base topic for Zigbee2MQTT MQTT messages
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

# Required: serial settings
serial:
  # Required: location of the adapter (e.g. CC2531).
  # To autodetect the port, set 'port: null'.
  port: /dev/ttyACM0
  # Optional: disable LED of the adapter if supported (default: false)
  disable_led: false
  # Optional: adapter type, not needed unless you are experiencing problems (default: shown below, options: zstack, deconz)
  adapter: null

# Optional: Block devices from the network (by ieeeAddr) (default: empty)
# Previously called `ban` (which is deprecated)
blocklist:
  - '0x000b57fffec6a5b2'

# Optional: Allow only certain devices to join the network (by ieeeAddr)
# Note that all devices not on the passlist will be removed from the network!
# (default: empty)
# Previously called `whitelist` (which is deprecated)
passlist:
  - '0x000b57fffec6a5b3'

# Optional: advanced settings
advanced:
  # Optional: ZigBee pan ID (default: shown below)
  # Setting pan_id: GENERATE will make Zigbee2MQTT generate a new panID on next startup
  pan_id: 0x1a62
  # Optional: Zigbee extended pan ID (default: shown below)
  ext_pan_id: [0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD]
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 11
  # Optional: state caching, MQTT message payload will contain all attributes, not only changed ones.
  # Has to be true when integrating via Home Assistant (default: true)
  cache_state: true
  # Optional: persist cached state, only used when cache_state: true (default: true)
  cache_state_persistent: true
  # Optional: send cached state on startup, only used when cache_state_persistent: true (default: true)
  cache_state_send_on_startup: true
  # Optional: Logging level, options: debug, info, warn, error (default: info)
  log_level: info
  # Optional: Location of log directory (default: shown below)
  log_directory: data/log/%TIMESTAMP%
  # Optional: Log file name, can also contain timestamp, e.g.: zigbee2mqtt_%TIMESTAMP%.log (default: shown below)
  log_file: log.txt
  # Optional: Rotate log every 10MB around 3 files (default: true)
  log_rotation: true
  # Optional: Output location of the log (default: shown below), leave empty to supress logging (log_output: [])
  # possible options: 'console', 'file', 'syslog'
  log_output:
    - console
    - file
  # Create a symlink called "current" in the log directory which points to the latests log directory. (default: false)
  log_symlink_current: false
  # Optional: syslog configuration, skip values or entirely to use defaults. Only use when 'syslog' in 'log_output' (see above)
  log_syslog:
    host: localhost # The host running syslogd, defaults to localhost.
    port: 123 # The port on the host that syslog is running on, defaults to syslogd's default port.
    protocol: tcp4 # The network protocol to log over (e.g. tcp4, udp4, tls4, unix, unix-connect, etc).
    path:  /dev/log # The path to the syslog dgram socket (i.e. /dev/log or /var/run/syslog for OS X).
    pid: process.pid # PID of the process that log messages are coming from (Default process.pid).
    facility: local0 # Syslog facility to use (Default: local0).
    localhost: localhost # Host to indicate that log messages are coming from (Default: localhost).
    type: 5424 # The type of the syslog protocol to use (Default: BSD, also valid: 5424).
    app_name: Zigbee2MQTT # The name of the application (Default: Zigbee2MQTT).
    eol: '\n' # The end of line character to be added to the end of the message (Default: Message without modifications).
  # Optional: Baud rate speed for serial port, this can be anything firmware support but default is 115200 for Z-Stack and EZSP, 38400 for Deconz, however note that some EZSP firmware need 57600.
  baudrate: 115200
  # Optional: RTS / CTS Hardware Flow Control for serial port (default: false)
  rtscts: false
  # Optional: soft reset ZNP after timeout (in seconds); 0 is disabled (default: 0)
  soft_reset_timeout: 0
  # Optional: network encryption key, will improve security (Note: changing requires repairing of all devices) (default: shown below)
  # Setting network_key: GENERATE will make Zigbee2MQTT generate a new network key on next startup
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
  # Optional: Prevent devices from being checked for availability (default: empty)
  # Previously called `availability_blacklist` (which is deprecated)
  availability_blocklist:
    - DEVICE_FRIENDLY_NAME or DEVICE_IEEE_ADDRESS
  # Optional: Only enable availability check for certain devices (default: empty)
  # Previously called `availability_whitelist` (which is deprecated)
  availability_passlist:
    - DEVICE_FRIENDLY_NAME or DEVICE_IEEE_ADDRESS
  # Optional: Enables report feature, this feature is DEPRECATED since reporting is now setup by default
  # when binding devices. Docs can still be found here: https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/information/report.md
  report: true
  # Optional: Home Assistant discovery topic (default: shown below)
  homeassistant_discovery_topic: 'homeassistant'
  # Optional: Home Assistant status topic (default: shown below)
  homeassistant_status_topic: 'homeassistant/status'
  # Optional: Home Assistant legacy entity attributes, (default: shown below), when enabled:
  # Zigbee2MQTT will send additional states as attributes with each entity. For example,
  # A temperature & humidity sensor will have 2 entities for the temperature and
  # humidity, with this setting enabled both entities will also have
  # an temperature and humidity attribute.
  # Note: Disabling this option, requires a Home Assistant restart
  homeassistant_legacy_entity_attributes: true
  # Optional: Home Assistant legacy triggers (default: shown below), when enabled:
  # - Zigbee2mqt will send an empty 'action' or 'click' after one has been send
  # - A 'sensor_action' and 'sensor_click' will be discoverd
  homeassistant_legacy_triggers: true
  # Optional: log timestamp format (default: shown below)
  timestamp_format: 'YYYY-MM-DD HH:mm:ss'
  # Optional: configure adapter concurrency (e.g. 2 for CC2531 or 16 for CC26X2R1) (default: null, uses recommended value)
  adapter_concurrent: null
  # Optional: disables the legacy api (default: shown below)
  legacy_api: true
  # Optional: use IKEA TRADFRI OTA test server, see OTA updates documentation (default: false)
  ikea_ota_use_test_url: false

# Optional: experimental options
experimental:
  # Optional: MQTT output type: json, attribute or attribute_and_json (default: shown below)
  # Examples when 'state' of a device is published
  # json: topic: 'zigbee2mqtt/my_bulb' payload '{"state": "ON"}'
  # attribute: topic 'zigbee2mqtt/my_bulb/state' payload 'ON"
  # attribute_and_json: both json and attribute (see above)
  output: 'json'
  # Optional: Transmit power setting in dBm (default: 5).
  # This will set the transmit power for devices that bring an inbuilt amplifier.
  # It can't go over the maximum of the respective hardware and might be limited
  # by firmware (for example to migrate heat, or by using an unsupported firmware).
  # For the CC2652R(B) this is 5 dBm, CC2652P/CC1352P-2 20 dBm.
  transmit_power: 5

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

# Optional: OTA update settings
ota:
    # Minimum time between OTA update checks, see https://www.zigbee2mqtt.io/information/ota_updates.html for more info
    update_check_interval: 1440
    # Disable automatic update checks, see https://www.zigbee2mqtt.io/information/ota_updates.html for more info
    disable_automatic_update_check: false

# Optional: see 'Device specific configuration' below
device_options: {}
# Optional, see 'External converters configuration' below
external_converters: []
```

### Specifying devices and groups in a separate file
Normally devices and groups are specified in the `configuration.yaml`, example:

```yaml
devices:
  '0x00158d0001d82999':
    friendly_name: 'my_occupancy_sensor'

groups:
  '1':
    friendly_name: group_1
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
```

**groups.yaml**
```yaml
'1':
    friendly_name: group_1
```

To define devices/groups in multiple files put the following in your `configuration.yaml`:

```yaml
devices:
  - devices1.yaml
  - devices2.yaml
groups:
  - groups1.yaml
  - groups2.yaml
```

Any newly added devices will always be added to the first file (`devices1.yaml`/`groups1.yaml` in this example).

### Specifying MQTT user/password and network_key in a different file
To specify the MQTT user/password and network_key in a different file, e.g `secret.yaml`, use the following configuration.

**configuration.yaml**
```yaml
# IMPORTANT: Don't forget the quotes!
mqtt:
  user: '!secret user'
  password: '!secret password'
advanced:
  network_key: '!secret network_key'
```

**secret.yaml**
```yaml
user: mqtt_user
password: mqtt_password
network_key: [1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]
```

## Device specific configuration
The `configuration.yaml` allows to set device specific configuration. This can also be used in combination with groups. The following options are available.

### All devices
* `friendly_name`: Used in the MQTT topic of a device. By default this is the device ID (e.g. `0x00128d0001d9e1d2`).
* `retain`: Retain MQTT messages of this device (default `false`).
* `retention`: Sets the MQTT Message Expiry in seconds e.g. `retention: 900` = 15 minutes (default: not enabled). Make sure to set `mqtt.version` to `5` (see `mqtt` configuration above)
* `qos`: QoS level for MQTT messages of this device. [What is QoS?](https://www.npmjs.com/package/mqtt#about-qos)
* `homeassistant`: Allows to override values of the Home Assistant discovery payload. See example below.
* `debounce`: Debounces messages of this device. When setting e.g. `debounce: 1` and a message from a device is received, Zigbee2MQTT will not immediately publish this message but combine it with other messages received in that same second of that device. This is handy for e.g. the `WSDCGQ11LM` which publishes humidity, temperature and pressure at the same time but as 3 different messages.
* `debounce_ignore` Protects unique payload values of specified payload properties from overriding within debounce time. When setting e.g. `debounce: 1` and `debounce_ignore: - action` every payload with unique `action` value will be published. This is handy for e.g. the `E1744` which publishes multiple messages in short time period after one turn and `debounce` option without `debounce_ignore` publishes only last payload with action `rotate_stop`. On the other hand `debounce: 1` with `debounce_ignore: - action` will publish all unique action messages, at least two (e.g. `action: rotate_left` and `action: rotate_stop`)
* `retrieve_state`: (DEPRECATED) Retrieves the state after setting it. Should only be enabled when the [reporting feature](../information/report.md) does not work for this device.
* `filtered_attributes`: Allows to prevent certain attributes from being published. When a device would e.g. publish `{"temperature": 10, "battery": 20}` and you set `filtered_attributes: ["battery"]` it will publish `{"temperature": 10}`.
* `optimistic`: Publish optimistic state after set, e.g. when a brightness change command succeeds Zigbee2MQTT assumes the brightness of the device changed and will publish this (default `true`).
* `filtered_optimistic`: Same as the `filtered_attributes` option but only applies to the optimistic published attributes. Has no effect when `optimistic: false` is set. Example: `filtered_optimistic: ["color_mode", "color"]`.

### Device type specific
Some devices support device type specific configuration, e.g. [RTCGQ11LM](../devices/RTCGQ11LM.md). To see if your device has device type specific configuration, visit the device page by going to [Supported devices](../information/supported_devices.md) and clicking on the model number.

### External converters configuration
You can define external converters to e.g. add support for a DiY device. The extension can be a file with `.js` extension in the `data` directory or a NPM package. Ensure that default export from your external converter exports an array or device object (refer to the definition in the `devices` folder of zigbee-herdsman-converters). Some examples can be found [here](https://github.com/Koenkk/zigbee2mqtt.io/tree/master/docs/externalConvertersExample). For this example put the files in the `data` folder and add the following to `configuration.yaml`:

```yaml
external_converters:
  - freepad_ext.js
  - one-more-converter.js
```

See also [How to support new devices](../how_tos/how_to_support_new_devices.md).

#### Changing device type specific defaults
The default values used for the device specific configuration can be overriden via e.g.:

```yaml
device_options:
  occupancy_timeout: 130
  temperature_precision: 1
```

### Example
``` yaml
devices:
  '0x00158d0001d82999':
    friendly_name: 'my_occupancy_sensor'
    retain: true
    qos: 1
    debounce: 0.5
    debounce_ignore:
      - action
      - brightness
    # Set `homeassistant: null` to skip discovery for this device
    homeassistant:
      # Applied to all discovered entities.
      expire_after: 30
      # Only applied to discovered temperature sensor.
      temperature:
        icon: mdi:oil-temperature
        # Omit values by setting them to null, e.g. don't send device_class
        device_class: null
    # Device type specific examples
    occupancy_timeout: 120
    no_occupancy_since: [10, 600]
```

## Different location
To specify a different data directory (by default `data`), set the `ZIGBEE2MQTT_DATA` environment variable. The value of `ZIGBEE2MQTT_DATA` should be a path to a directory e.g. `/tmp/z2m_data`, this directory should at least contain a `configuration.yaml`.

## Override via environment variables
It is possible to override the values in `configuration.yaml` via environment variables.
The name of the environment variable should start with `ZIGBEE2MQTT_CONFIG_` followed by the path to the property you want to set in uppercase split by a `_`.

In case you want to for example override:

```yaml
mqtt:
  base_topic: zigbee2mqtt
```

set `ZIGBEE2MQTT_CONFIG_MQTT_BASE_TOPIC` to the desired value.
