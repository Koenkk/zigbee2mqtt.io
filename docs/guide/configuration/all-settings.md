---
sidebarDepth: 1
editLink: false
pageClass: settings-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen, do not edit! -->
<!-- !!!! -->

# All settings

This page contains all currently supported settings in `configuration.yaml`.

::: tip NOTE
The code blocks show an **example value** for each setting (may be the default or any value derived from the possibilities/examples/boundaries).
:::

## advanced

Advanced

### log_rotation

```yaml
advanced:
    log_rotation: true
```

- Type: `boolean`
- Default: `true`
- <span style="color: red">Restart required to be effective</span>

### log_console_json

```yaml
advanced:
    log_console_json: false
```

- Type: `boolean`
- Default: `false`
- <span style="color: red">Restart required to be effective</span>

### log_symlink_current

Create symlink to current logs in the log directory

```yaml
advanced:
    log_symlink_current: false
```

- Type: `boolean`
- Default: `false`
- <span style="color: red">Restart required to be effective</span>

### log_output

Output location of the log, leave empty to suppress logging

```yaml
advanced:
    log_output: ['console', 'file']
```

- Type: `array` of `string`
- Default: `["console","file"]`
- Possible array values: `console`, `file`, `syslog`
- <span style="color: red">Restart required to be effective</span>

### log_directory

Location of log directory

```yaml
advanced:
    log_directory: 'data/log/%TIMESTAMP%'
```

- Type: `string`
- Examples:
    - `"data/log/%TIMESTAMP%"`
- <span style="color: red">Restart required to be effective</span>

### log_file

Log file name, can also contain timestamp

```yaml
advanced:
    log_file: 'log.log'
```

- Type: `string`
- Default: `"log.log"`
- Examples:
    - `"zigbee2mqtt_%TIMESTAMP%.log"`
- <span style="color: red">Restart required to be effective</span>

### log_level

Logging level

```yaml
advanced:
    log_level: 'info'
```

- Type: `string`
- Default: `"info"`
- Possible values: `error`, `warning`, `info`, `debug`

### log_namespaced_levels

Set individual log levels for certain namespaces

```yaml
advanced:
    log_namespaced_levels: {}
```

- Type: `object`
- Default: `{}`
- Examples:
    - `{"z2m:mqtt":"warning"}`
    - `{"zh:ember:uart:ash":"info"}`

### log_debug_to_mqtt_frontend

Log debug level to MQTT and frontend (may decrease overall performance)

```yaml
advanced:
    log_debug_to_mqtt_frontend: false
```

- Type: `boolean`
- Default: `false`
- <span style="color: red">Restart required to be effective</span>

### log_debug_namespace_ignore

Do not log these namespaces (regex-based) for debug level

```yaml
advanced:
    log_debug_namespace_ignore: ''
```

- Type: `string`
- Default: `""`
- Examples:
    - `"^zhc:legacy:fz:(tuya|moes)"`
    - `"^zhc:legacy:fz:(tuya|moes)|^zh:ember:uart:|^zh:controller"`

### log_directories_to_keep

Number of log directories to keep before deleting the oldest one

```yaml
advanced:
    log_directories_to_keep: 10
```

- Type: `number`
- Default: `10`
- Minimum: `5`
- Maximum: `1000`

### channel

Zigbee channel, changing might require re-pairing some devices! (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid problems)

```yaml
advanced:
    channel: 11
```

- Type: `number`
- Default: `11`
- Minimum: `11`
- Maximum: `26`
- Examples:
    - `15`
    - `20`
    - `25`
- <span style="color: red">Restart required to be effective</span>

### adapter_concurrent

Adapter concurrency (e.g. 2 for CC2531 or 16 for CC26X2R1) (default: null, uses recommended value)

```yaml
advanced:
    adapter_concurrent: null
```

- Type: `number,null`
- Minimum: `1`
- Maximum: `64`
- <span style="color: red">Restart required to be effective</span>

### adapter_delay

```yaml
advanced:
    adapter_delay: null
```

- Type: `number,null`
- Minimum: `0`
- Maximum: `1000`
- <span style="color: red">Restart required to be effective</span>

### cache_state

MQTT message payload will contain all attributes, not only changed ones. Has to be true when integrating via Home Assistant

```yaml
advanced:
    cache_state: true
```

- Type: `boolean`
- Default: `true`

### cache_state_persistent

Persist cached state, only used when cache_state: true

```yaml
advanced:
    cache_state_persistent: true
```

- Type: `boolean`
- Default: `true`

### cache_state_send_on_startup

Send cached state on startup, only used when cache_state: true

```yaml
advanced:
    cache_state_send_on_startup: true
```

- Type: `boolean`
- Default: `true`

### last_seen

Add a last_seen attribute to MQTT messages, contains date/time of last Zigbee message

```yaml
advanced:
    last_seen: 'disable'
```

- Type: `string`
- Default: `"disable"`
- Possible values: `disable`, `ISO_8601`, `ISO_8601_local`, `epoch`

### elapsed

Add an elapsed attribute to MQTT messages, contains milliseconds since the previous msg

```yaml
advanced:
    elapsed: false
```

- Type: `boolean`
- Default: `false`

### timestamp_format

Log timestamp format

```yaml
advanced:
    timestamp_format: 'YYYY-MM-DD HH:mm:ss'
```

- Type: `string`
- Default: `"YYYY-MM-DD HH:mm:ss"`
- Examples:
    - `"YYYY-MM-DD HH:mm:ss.SSS"`
- <span style="color: red">Restart required to be effective</span>

### transmit_power

Transmit power of adapter, only available for Z-Stack (CC253\*/CC2652/CC1352) adapters, CC2652 = 5dbm, CC1352 max is = 20dbm (5dbm default)

```yaml
advanced:
    transmit_power: null
```

- Type: `number,null`
- Minimum: `-128`
- Maximum: `127`
- <span style="color: red">Restart required to be effective</span>

### output

Examples when 'state' of a device is published json: topic: 'zigbee2mqtt/my_bulb' payload '{"state": "ON"}' attribute: topic 'zigbee2mqtt/my_bulb/state' payload 'ON' attribute_and_json: both json and attribute (see above)

```yaml
advanced:
    output: 'json'
```

- Type: `string`
- Default: `"json"`
- Possible values: `attribute_and_json`, `attribute`, `json`

    ### log_syslog

    syslog (enabled)

    #### host

The host running syslogd, defaults to localhost.

```yaml
advanced:
    log_syslog:
        host: 'localhost'
```

- Type: `string`
- Default: `"localhost"`

#### port

The port on the host that syslog is running on, defaults to syslogd's default port.

```yaml
advanced:
    log_syslog:
        port: 514
```

- Type: `number`
- Default: `514`

#### protocol

The network protocol to log over (e.g. tcp4, udp4, tls4, unix, unix-connect, etc).

```yaml
advanced:
    log_syslog:
        protocol: 'udp4'
```

- Type: `string`
- Default: `"udp4"`
- Examples:
    - `"udp4"`
    - `"tls4"`
    - `"unix"`
    - `"unix-connect"`

#### path

The path to the syslog dgram socket (i.e. /dev/log or /var/run/syslog for OS X).

```yaml
advanced:
    log_syslog:
        path: '/dev/log'
```

- Type: `string`
- Default: `"/dev/log"`
- Examples:
    - `"/var/run/syslog"`

#### pid

PID of the process that log messages are coming from (Default process.pid).

```yaml
advanced:
    log_syslog:
        pid: 'process.pid'
```

- Type: `string`
- Default: `"process.pid"`

#### localhost

Host to indicate that log messages are coming from (Default: localhost).

```yaml
advanced:
    log_syslog:
        localhost: 'localhost'
```

- Type: `string`
- Default: `"localhost"`

#### type

The type of the syslog protocol to use (Default: BSD, also valid: 5424).

```yaml
advanced:
    log_syslog:
        type: '5424'
```

- Type: `string`
- Default: `"5424"`

#### app_name

The name of the application (Default: Zigbee2MQTT).

```yaml
advanced:
    log_syslog:
        app_name: 'Zigbee2MQTT'
```

- Type: `string`
- Default: `"Zigbee2MQTT"`

#### eol

The end of line character to be added to the end of the message (Default: Message without modifications).

```yaml
advanced:
    log_syslog:
        eol: '/n'
```

- Type: `string`
- Default: `"/n"`

### log_syslog

syslog (disabled)

```yaml
advanced:
    log_syslog: null
```

- Type: `null`

### pan_id

Pan ID (string)

```yaml
advanced:
    pan_id: 'abc'
```

- Type: `string`
- Default: `6754`

### pan_id

Pan ID (number)

```yaml
advanced:
    pan_id: 1
```

- Type: `number`
- Default: `6754`
- Minimum: `1`
- Maximum: `65534`

### ext_pan_id

Extended pan ID (string)

```yaml
advanced:
    ext_pan_id: 'abc'
```

- Type: `string`
- Default: `[221,221,221,221,221,221,221,221]`

### ext_pan_id

Extended pan ID (array)

```yaml
advanced:
    ext_pan_id: []
```

- Type: `array` of `number`
- Default: `[221,221,221,221,221,221,221,221]`

### network_key

Network key(string)

```yaml
advanced:
    network_key: 'abc'
```

- Type: `string`
- Default: `[1,3,5,7,9,11,13,15,0,2,4,6,8,10,12,13]`

### network_key

Network key(array)

```yaml
advanced:
    network_key: []
```

- Type: `array` of `number`
- Default: `[1,3,5,7,9,11,13,15,0,2,4,6,8,10,12,13]`

## availability

Availability

### enabled

Enable availability checks

```yaml
availability:
    enabled: false
```

- Type: `boolean`
- Default: `false`
- <span style="color: red">Restart required to be effective</span>

### active

Active

#### timeout <span style="color: red">\*</span>

Time after which an active device will be marked as offline in minutes

```yaml
availability:
    active:
        timeout: 10
```

- Type: `number`
- Default: `10`
- Minimum: `1`
- <span style="color: red">Restart required to be effective</span>

#### max_jitter

Maximum jitter (in msec) allowed on timeout to avoid availability pings trying to trigger around the same time

```yaml
availability:
    active:
        max_jitter: 30000
```

- Type: `number`
- Default: `30000`
- Minimum: `1000`

#### backoff

Enable timeout backoff on failed availability pings (x1.5, x3, x6, x12...)

```yaml
availability:
    active:
        backoff: true
```

- Type: `boolean`
- Default: `true`

#### pause_on_backoff_gt

Pause availability pings when backoff reaches over this limit until a new Zigbee message is received from the device. A value of zero disables pausing.

```yaml
availability:
    active:
        pause_on_backoff_gt: 0
```

- Type: `number`
- Default: `0`
- Minimum: `0`

### passive

Passive

#### timeout <span style="color: red">\*</span>

Time after which an passive device will be marked as offline in minutes

```yaml
availability:
    passive:
        timeout: 1500
```

- Type: `number`
- Default: `1500`
- Minimum: `1`
- <span style="color: red">Restart required to be effective</span>

## devices

#### friendly_name <span style="color: red">\*</span>

Used in the MQTT topic of a device. By default this is the device ID

```yaml
devices:
    '0x1234567812345678':
        friendly_name: 'abc'
```

- Type: `string`

#### retain

Retain MQTT messages of this device

```yaml
devices:
    '0x1234567812345678':
        retain: true
```

- Type: `boolean`

#### disabled

Disables the device (excludes device from network scans, availability and group state updates)

```yaml
devices:
    '0x1234567812345678':
        disabled: true
```

- Type: `boolean`
- <span style="color: red">Restart required to be effective</span>

#### retention

Sets the MQTT Message Expiry in seconds, Make sure to set mqtt.version to 5

```yaml
devices:
    '0x1234567812345678':
        retention: 0
```

- Type: `number`

#### qos

QoS level for MQTT messages of this device

```yaml
devices:
    '0x1234567812345678':
        qos: null
```

- Type: `number`
- Possible values: `0`, `1`, `2`

#### throttle

The minimum time between payloads in seconds. Payloads received whilst the device is being throttled will be discarded

```yaml
devices:
    '0x1234567812345678':
        throttle: 0
```

- Type: `number`
- <span style="color: red">Restart required to be effective</span>

#### debounce

Debounces messages of this device

```yaml
devices:
    '0x1234567812345678':
        debounce: 0
```

- Type: `number`
- <span style="color: red">Restart required to be effective</span>

#### debounce_ignore

Protects unique payload values of specified payload properties from overriding within debounce time

```yaml
devices:
    '0x1234567812345678':
        debounce_ignore: 'action'
```

- Type: `array` of `string`
- Examples:
    - `"action"`

#### optimistic

Publish optimistic state after set

```yaml
devices:
    '0x1234567812345678':
        optimistic: true
```

- Type: `boolean`
- Default: `true`

#### filtered_attributes

Filter attributes with regex from published payload.

```yaml
devices:
    '0x1234567812345678':
        filtered_attributes: '^temperature$'
```

- Type: `array` of `string`
- Examples:
    - `"^temperature$"`
    - `"^battery$"`
    - `"^action$"`

#### filtered_cache

Filter attributes with regex from being added to the cache, this prevents the attribute from being in the published payload when the value didn't change.

```yaml
devices:
    '0x1234567812345678':
        filtered_cache: '^input_actions$'
```

- Type: `array` of `string`
- Examples:
    - `"^input_actions$"`

#### filtered_optimistic

Filter attributes with regex from optimistic publish payload when calling /set. (This has no effect if optimistic is set to false).

```yaml
devices:
    '0x1234567812345678':
        filtered_optimistic: '^color_(mode|temp)$'
```

- Type: `array` of `string`
- Examples:
    - `"^color_(mode|temp)$"`
    - `"color"`

#### icon

The user-defined device icon for the frontend. It can be a full URL link to an image (e.g. https://SOME.SITE/MODEL123.jpg) or a path to a local file inside the `device_icons` directory (e.g. device_icons/MODEL123.png).

```yaml
devices:
    '0x1234567812345678':
        icon: 'abc'
```

- Type: `string`

#### homeassistant

Home Assistant

##### name

Name of the device in Home Assistant

```yaml
devices:
    '0x1234567812345678':
        homeassistant:
            name: 'abc'
```

- Type: `string`

## frontend

Frontend

### enabled

Enable frontend

```yaml
frontend:
    enabled: false
```

- Type: `boolean`
- Default: `false`
- <span style="color: red">Restart required to be effective</span>

### package

Package used for the frontend

```yaml
frontend:
    package: 'zigbee2mqtt-frontend'
```

- Type: `string`
- Default: `"zigbee2mqtt-frontend"`
- Possible values: `zigbee2mqtt-frontend`, `zigbee2mqtt-windfront`
- <span style="color: red">Restart required to be effective</span>

### port

Frontend binding port. Ignored when using a unix domain socket

```yaml
frontend:
    port: 8080
```

- Type: `number`
- Default: `8080`
- <span style="color: red">Restart required to be effective</span>

### host

Frontend binding host. Binds to a unix socket when an absolute path is given instead.

```yaml
frontend:
    host: null
```

- Type: `string,null`
- Examples:
    - `"127.0.0.1"`
    - `"::1"`
    - `"/run/zigbee2mqtt/zigbee2mqtt.sock"`
- <span style="color: red">Restart required to be effective</span>

### auth_token

Enables authentication, disabled by default

```yaml
frontend:
    auth_token: null
```

- Type: `string,null`
- <span style="color: red">Restart required to be effective</span>

### url

URL on which the frontend can be reached, currently only used for the Home Assistant device configuration page

```yaml
frontend:
    url: null
```

- Type: `string,null`
- <span style="color: red">Restart required to be effective</span>

### ssl_cert

SSL Certificate file path for exposing HTTPS. The sibling property 'ssl_key' must be set for HTTPS to be activated.

```yaml
frontend:
    ssl_cert: null
```

- Type: `string,null`
- <span style="color: red">Restart required to be effective</span>

### ssl_key

SSL key file path for exposing HTTPS. The sibling property 'ssl_cert' must be set for HTTPS to be activated.

```yaml
frontend:
    ssl_key: null
```

- Type: `string,null`
- <span style="color: red">Restart required to be effective</span>

### base_url

Base URL for the frontend. If hosted under a subpath, e.g. 'http://localhost:8080/z2m', set this to '/z2m'

```yaml
frontend:
    base_url: '/'
```

- Type: `string`
- Default: `"/"`
- <span style="color: red">Restart required to be effective</span>

### notification_filter

Hide frontend notifications matching specified regex strings. Example: 'z2m: Failed to ping.\*'

```yaml
frontend:
    notification_filter: []
```

- Type: `array` of `string`

### disable_ui_serving

If true, the frontend UI is not served, only the WebSocket is maintained by Zigbee2MQTT (you are required to serve a standalone UI yourself as needed).

```yaml
frontend:
    disable_ui_serving: null
```

- Type: `boolean,null`
- <span style="color: red">Restart required to be effective</span>

## groups

#### friendly_name <span style="color: red">\*</span>

```yaml
groups:
    1:
        friendly_name: 'abc'
```

- Type: `string`

#### retain

```yaml
groups:
    1:
        retain: true
```

- Type: `boolean`

#### optimistic

```yaml
groups:
    1:
        optimistic: true
```

- Type: `boolean`

#### qos

QoS level for MQTT messages of this group

```yaml
groups:
    1:
        qos: null
```

- Type: `number`
- Possible values: `0`, `1`, `2`

#### off_state

Control when to publish state OFF or CLOSE for a group. 'all_members_off': only publish state OFF/CLOSE when all group members are in state OFF/CLOSE, 'last_member_state': publish state OFF whenever one of its members changes to OFF

```yaml
groups:
    1:
        off_state: 'all_members_off'
```

- Type: `string`
- Default: `"all_members_off"`
- Possible values: `all_members_off`, `last_member_state`
- <span style="color: red">Restart required to be effective</span>

#### filtered_attributes

```yaml
groups:
    1:
        filtered_attributes: []
```

- Type: `array` of `string`

## health

Health

### interval

Interval between checks in minutes

```yaml
health:
    interval: 10
```

- Type: `number`
- Default: `10`
- Minimum: `1`
- <span style="color: red">Restart required to be effective</span>

### reset_on_check

If true, will reset stats every time the health check is executed (only applicable to stats that can be reset).

```yaml
health:
    reset_on_check: false
```

- Type: `boolean`
- Default: `false`

## homeassistant

Home Assistant integration

### enabled

Enable Home Assistant integration

```yaml
homeassistant:
    enabled: false
```

- Type: `boolean`
- Default: `false`
- <span style="color: red">Restart required to be effective</span>

### discovery_topic

Home Assistant discovery topic

```yaml
homeassistant:
    discovery_topic: 'homeassistant'
```

- Type: `string`
- Default: `"homeassistant"`
- Examples:
    - `"homeassistant"`
- <span style="color: red">Restart required to be effective</span>

### status_topic

```yaml
homeassistant:
    status_topic: 'homeassistant/status'
```

- Type: `string`
- Default: `"homeassistant/status"`
- Examples:
    - `"homeassistant/status"`
- <span style="color: red">Restart required to be effective</span>

### legacy_action_sensor

Home Assistant legacy actions sensor, when enabled a action sensor will be discoverd and an empty `action` will be send after every published action.

```yaml
homeassistant:
    legacy_action_sensor: false
```

- Type: `boolean`
- Default: `false`

### experimental_event_entities

Home Assistant experimental event entities, when enabled Zigbee2MQTT will add event entities for exposed actions. The events and attributes are currently deemed experimental and subject to change.

```yaml
homeassistant:
    experimental_event_entities: false
```

- Type: `boolean`
- Default: `false`

## map_options

Networkmap

### graphviz

#### colors

##### fill

###### enddevice

```yaml
map_options:
    graphviz:
        colors:
            fill:
                enddevice: '#fff8ce'
```

- Type: `string`
- Default: `"#fff8ce"`

###### coordinator

```yaml
map_options:
    graphviz:
        colors:
            fill:
                coordinator: '#e04e5d'
```

- Type: `string`
- Default: `"#e04e5d"`

###### router

```yaml
map_options:
    graphviz:
        colors:
            fill:
                router: '#4ea3e0'
```

- Type: `string`
- Default: `"#4ea3e0"`

##### font

###### enddevice

```yaml
map_options:
    graphviz:
        colors:
            font:
                enddevice: '#000000'
```

- Type: `string`
- Default: `"#000000"`

###### coordinator

```yaml
map_options:
    graphviz:
        colors:
            font:
                coordinator: '#ffffff'
```

- Type: `string`
- Default: `"#ffffff"`

###### router

```yaml
map_options:
    graphviz:
        colors:
            font:
                router: '#ffffff'
```

- Type: `string`
- Default: `"#ffffff"`

##### line

###### active

```yaml
map_options:
    graphviz:
        colors:
            line:
                active: '#009900'
```

- Type: `string`
- Default: `"#009900"`

###### inactive

```yaml
map_options:
    graphviz:
        colors:
            line:
                inactive: '#994444'
```

- Type: `string`
- Default: `"#994444"`

## mqtt

MQTT

### base_topic

MQTT base topic for Zigbee2MQTT MQTT messages

```yaml
mqtt:
    base_topic: 'zigbee2mqtt'
```

- Type: `string`
- Default: `"zigbee2mqtt"`
- Examples:
    - `"zigbee2mqtt"`
- <span style="color: red">Restart required to be effective</span>

### server <span style="color: red">\*</span>

MQTT server URL (use mqtts:// for SSL/TLS connection)

```yaml
mqtt:
    server: 'mqtt://localhost:1883'
```

- Type: `string`
- Examples:
    - `"mqtt://localhost:1883"`
- <span style="color: red">Restart required to be effective</span>

### keepalive

MQTT keepalive in second

```yaml
mqtt:
    keepalive: 60
```

- Type: `number`
- Default: `60`
- <span style="color: red">Restart required to be effective</span>

### ca

Absolute path to SSL/TLS certificate of CA used to sign server and client certificates

```yaml
mqtt:
    ca: '/etc/ssl/mqtt-ca.crt'
```

- Type: `string`
- Examples:
    - `"/etc/ssl/mqtt-ca.crt"`
- <span style="color: red">Restart required to be effective</span>

### key

Absolute path to SSL/TLS key for client-authentication

```yaml
mqtt:
    key: '/etc/ssl/mqtt-client.key'
```

- Type: `string`
- Examples:
    - `"/etc/ssl/mqtt-client.key"`
- <span style="color: red">Restart required to be effective</span>

### cert

Absolute path to SSL/TLS certificate for client-authentication

```yaml
mqtt:
    cert: '/etc/ssl/mqtt-client.crt'
```

- Type: `string`
- Examples:
    - `"/etc/ssl/mqtt-client.crt"`
- <span style="color: red">Restart required to be effective</span>

### user

MQTT server authentication user

```yaml
mqtt:
    user: 'johnnysilverhand'
```

- Type: `string`
- Examples:
    - `"johnnysilverhand"`
- <span style="color: red">Restart required to be effective</span>

### password

MQTT server authentication password

```yaml
mqtt:
    password: 'ILOVEPELMENI'
```

- Type: `string`
- Examples:
    - `"ILOVEPELMENI"`
- <span style="color: red">Restart required to be effective</span>

### client_id

MQTT client ID

```yaml
mqtt:
    client_id: 'MY_CLIENT_ID'
```

- Type: `string`
- Examples:
    - `"MY_CLIENT_ID"`
- <span style="color: red">Restart required to be effective</span>

### reject_unauthorized

Disable self-signed SSL certificate

```yaml
mqtt:
    reject_unauthorized: true
```

- Type: `boolean`
- Default: `true`
- <span style="color: red">Restart required to be effective</span>

### include_device_information

Include device information to mqtt messages

```yaml
mqtt:
    include_device_information: false
```

- Type: `boolean`
- Default: `false`

### version

MQTT protocol version

```yaml
mqtt:
    version: 4
```

- Type: `number,null`
- Default: `4`
- Examples:
    - `5`
- <span style="color: red">Restart required to be effective</span>

### force_disable_retain

Disable retain for all send messages. ONLY enable if your MQTT broker doesn't support retained message (e.g. AWS IoT core, Azure IoT Hub, Google Cloud IoT core, IBM Watson IoT Platform). Enabling will break the Home Assistant integration

```yaml
mqtt:
    force_disable_retain: false
```

- Type: `boolean`
- Default: `false`
- <span style="color: red">Restart required to be effective</span>

### maximum_packet_size

Specifies the maximum allowed packet length (in bytes) that the server can send to Zigbee2MQTT. NOTE: The same value exists in your MQTT broker but for the length the client can send to it instead.

```yaml
mqtt:
    maximum_packet_size: 1048576
```

- Type: `number`
- Default: `1048576`
- Minimum: `20`
- Maximum: `268435456`
- <span style="color: red">Restart required to be effective</span>

## ota

OTA updates

### update_check_interval

Your device may request a check for a new firmware update. This value determines how frequently third party servers may actually be contacted to look for firmware updates. The value is set in minutes, and the default is 1 day.

```yaml
ota:
    update_check_interval: 1440
```

- Type: `number`
- Default: `1440`
- Minimum: `1`

### disable_automatic_update_check

Zigbee devices may request a firmware update, and do so frequently, causing Zigbee2MQTT to reach out to third party servers. If you disable these device initiated checks, you can still initiate a firmware update check manually.

```yaml
ota:
    disable_automatic_update_check: false
```

- Type: `boolean`
- Default: `false`

### zigbee_ota_override_index_location

Location of override OTA index file

```yaml
ota:
    zigbee_ota_override_index_location: null
```

- Type: `string,null`
- Examples:
    - `"index.json"`
- <span style="color: red">Restart required to be effective</span>

### image_block_response_delay

Limits the rate of requests (in milliseconds) during OTA updates to reduce network congestion. You can increase this value if your network appears unstable during OTA.

```yaml
ota:
    image_block_response_delay: 250
```

- Type: `number`
- Default: `250`
- Minimum: `50`
- <span style="color: red">Restart required to be effective</span>

### default_maximum_data_size

The size of file chunks sent during an update (in bytes). Note: This value may get ignored for manufacturers that require specific values.

```yaml
ota:
    default_maximum_data_size: 50
```

- Type: `number`
- Default: `50`
- Minimum: `10`
- Maximum: `100`
- <span style="color: red">Restart required to be effective</span>

## serial

Serial

### port

Location of the adapter. To autodetect the port, set null

```yaml
serial:
    port: null
```

- Type: `string,null`
- Examples:
    - `"/dev/ttyACM0"`
- <span style="color: red">Restart required to be effective</span>

### disable_led

Disable LED of the adapter if supported

```yaml
serial:
    disable_led: false
```

- Type: `boolean`
- Default: `false`
- <span style="color: red">Restart required to be effective</span>

### adapter

Adapter type, not needed unless you are experiencing problems

```yaml
serial:
    adapter: 'deconz'
```

- Type: `string`
- Possible values: `deconz`, `zstack`, `zigate`, `ezsp`, `ember`, `zboss`, `zoh`
- <span style="color: red">Restart required to be effective</span>

### baudrate

Baud rate speed for the serial port. This must match what the firmware on your adapter supports (most commonly 115200).

```yaml
serial:
    baudrate: 115200
```

- Type: `number`
- Examples:
    - `115200`
    - `921600`
    - `460800`
    - `230400`
    - `57600`
    - `38400`
- <span style="color: red">Restart required to be effective</span>

### rtscts

RTS / CTS Hardware Flow Control for serial port

```yaml
serial:
    rtscts: true
```

- Type: `boolean`
- <span style="color: red">Restart required to be effective</span>

## blocklist

Block devices from the network (by ieeeAddr)

```yaml
blocklist: []
```

- Type: `array` of `string`
- <span style="color: red">Restart required to be effective</span>

## device_options

Options that are applied to all devices

```yaml
device_options: {}
```

- Type: `object`

## passlist

Allow only certain devices to join the network (by ieeeAddr). Note that all devices not on the passlist will be removed from the network!

```yaml
passlist: []
```

- Type: `array` of `string`
- <span style="color: red">Restart required to be effective</span>
