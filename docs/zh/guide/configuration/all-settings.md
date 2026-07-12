---
sidebarDepth: 1
editLink: false
pageClass: settings-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen, do not edit! -->
<!-- !!!! -->

# 全部设置项

本页列出了 `configuration.yaml` 中当前支持的所有设置项。

::: tip 提示
代码块中展示的是每个设置项的**示例值**（可能是默认值，也可能是从可选值/示例/边界值中派生的任意值）。
:::

## advanced

高级设置

### log_rotation

```yaml
advanced:
    log_rotation: true
```

- 类型：`boolean`
- 默认值：`true`
- <span style="color: red">需要重启才能生效</span>

### log_console_json

```yaml
advanced:
    log_console_json: false
```

- 类型：`boolean`
- 默认值：`false`
- <span style="color: red">需要重启才能生效</span>

### log_symlink_current

在日志目录中创建指向当前日志的符号链接

```yaml
advanced:
    log_symlink_current: false
```

- 类型：`boolean`
- 默认值：`false`
- <span style="color: red">需要重启才能生效</span>

### log_output

日志的输出位置，留空表示不输出日志

```yaml
advanced:
    log_output: ['console', 'file']
```

- 类型：`array`（元素为 `string`）
- 默认值：`["console","file"]`
- 可选数组值：`console`、`file`、`syslog`
- <span style="color: red">需要重启才能生效</span>

### log_directory

日志目录的位置

```yaml
advanced:
    log_directory: 'data/log/%TIMESTAMP%'
```

- 类型：`string`
- 示例：
    - `"data/log/%TIMESTAMP%"`
- <span style="color: red">需要重启才能生效</span>

### log_file

日志文件名，也可以包含时间戳

```yaml
advanced:
    log_file: 'log.log'
```

- 类型：`string`
- 默认值：`"log.log"`
- 示例：
    - `"zigbee2mqtt_%TIMESTAMP%.log"`
- <span style="color: red">需要重启才能生效</span>

### log_level

日志级别

```yaml
advanced:
    log_level: 'info'
```

- 类型：`string`
- 默认值：`"info"`
- 可选值：`error`、`warning`、`info`、`debug`

### log_namespaced_levels

为特定命名空间设置单独的日志级别

```yaml
advanced:
    log_namespaced_levels: {}
```

- 类型：`object`
- 默认值：`{}`
- 示例：
    - `{"z2m:mqtt":"warning"}`
    - `{"zh:ember:uart:ash":"info"}`

### log_debug_to_mqtt_frontend

将 debug 级别日志输出到 MQTT 和前端界面（可能会降低整体性能）

```yaml
advanced:
    log_debug_to_mqtt_frontend: false
```

- 类型：`boolean`
- 默认值：`false`
- <span style="color: red">需要重启才能生效</span>

### log_debug_namespace_ignore

在 debug 级别下不记录这些命名空间（基于正则表达式）

```yaml
advanced:
    log_debug_namespace_ignore: ''
```

- 类型：`string`
- 默认值：`""`
- 示例：
    - `"^zhc:legacy:fz:(tuya|moes)"`
    - `"^zhc:legacy:fz:(tuya|moes)|^zh:ember:uart:|^zh:controller"`

### log_directories_to_keep

删除最旧的日志目录之前，保留的日志目录数量

```yaml
advanced:
    log_directories_to_keep: 10
```

- 类型：`number`
- 默认值：`10`
- 最小值：`5`
- 最大值：`1000`

### channel

Zigbee 信道，更改后可能需要重新配对某些设备！（注意：请使用 ZLL 信道 11、15、20 或 25，以避免出现问题）

```yaml
advanced:
    channel: 11
```

- 类型：`number`
- 默认值：`11`
- 最小值：`11`
- 最大值：`26`
- 示例：
    - `15`
    - `20`
    - `25`
- <span style="color: red">需要重启才能生效</span>

### adapter_concurrent

适配器并发数（例如 CC2531 为 2，CC26X2R1 为 16）（默认值：null，表示使用推荐值）

```yaml
advanced:
    adapter_concurrent: null
```

- 类型：`number,null`
- 最小值：`1`
- 最大值：`64`
- <span style="color: red">需要重启才能生效</span>

### adapter_delay

```yaml
advanced:
    adapter_delay: null
```

- 类型：`number,null`
- 最小值：`0`
- 最大值：`1000`
- <span style="color: red">需要重启才能生效</span>

### cache_state

MQTT 消息载荷将包含所有属性，而不仅是发生变化的属性。通过 Home Assistant 集成时必须设为 true

```yaml
advanced:
    cache_state: true
```

- 类型：`boolean`
- 默认值：`true`

### cache_state_persistent

持久化保存缓存状态，仅在 cache_state: true 时生效

```yaml
advanced:
    cache_state_persistent: true
```

- 类型：`boolean`
- 默认值：`true`

### cache_state_send_on_startup

启动时发送缓存状态，仅在 cache_state: true 时生效

```yaml
advanced:
    cache_state_send_on_startup: true
```

- 类型：`boolean`
- 默认值：`true`

### last_seen

为 MQTT 消息添加 last_seen 属性，表示最后一次收到 Zigbee 消息的日期/时间

```yaml
advanced:
    last_seen: 'disable'
```

- 类型：`string`
- 默认值：`"disable"`
- 可选值：`disable`、`ISO_8601`、`ISO_8601_local`、`epoch`

### elapsed

为 MQTT 消息添加 elapsed 属性，表示距上一条消息经过的毫秒数

```yaml
advanced:
    elapsed: false
```

- 类型：`boolean`
- 默认值：`false`

### timestamp_format

日志时间戳格式（支持的所有 token 参见 https://github.com/taylorhakes/fecha?tab=readme-ov-file#formatting-tokens）

```yaml
advanced:
    timestamp_format: 'YYYY-MM-DD HH:mm:ss'
```

- 类型：`string`
- 默认值：`"YYYY-MM-DD HH:mm:ss"`
- 示例：
    - `"YYYY-MM-DD HH:mm:ss.SSS"`
- <span style="color: red">需要重启才能生效</span>

### transmit_power

适配器的发射功率，单位为 dBm（最大值通常为 20，具体请参考芯片规格书）

```yaml
advanced:
    transmit_power: null
```

- 类型：`number,null`
- 最小值：`-128`
- 最大值：`127`
- <span style="color: red">需要重启才能生效</span>

### output

当设备的 'state' 以 json 格式发布时的示例：topic 为 'zigbee2mqtt/my_bulb'，载荷为 '{"state": "ON"}'；attribute 方式：topic 为 'zigbee2mqtt/my_bulb/state'，载荷为 'ON'；attribute_and_json：同时以 json 和 attribute 方式发布（见上）

```yaml
advanced:
    output: 'json'
```

- 类型：`string`
- 默认值：`"json"`
- 可选值：`attribute_and_json`、`attribute`、`json`

### enable_external_js

启用外部 JavaScript（可执行任意用户提供代码的扩展和转换器）。警告：如果不使用，建议禁用此项。

```yaml
advanced:
    enable_external_js: true
```

- 类型：`boolean`
- 默认值：`true`
- <span style="color: red">需要重启才能生效</span>

    ### log_syslog

    syslog（已启用）

    #### host

主机运行 syslogd 服务，默认为 localhost。

```yaml
advanced:
    log_syslog:
        host: 'localhost'
```

- 类型：`string`
- 默认值：`"localhost"`

#### port

syslog 运行所在主机的端口，默认为 syslogd 的默认端口。

```yaml
advanced:
    log_syslog:
        port: 514
```

- 类型：`number`
- 默认值：`514`

#### protocol

用于记录日志的网络协议（例如 tcp4、udp4、tls4、unix、unix-connect 等）。

```yaml
advanced:
    log_syslog:
        protocol: 'udp4'
```

- 类型：`string`
- 默认值：`"udp4"`
- 示例：
    - `"udp4"`
    - `"tls4"`
    - `"unix"`
    - `"unix-connect"`

#### path

syslog dgram socket 的路径（即 /dev/log，或 OS X 上的 /var/run/syslog）。

```yaml
advanced:
    log_syslog:
        path: '/dev/log'
```

- 类型：`string`
- 默认值：`"/dev/log"`
- 示例：
    - `"/var/run/syslog"`

#### pid

发出日志消息的进程 PID（默认为 process.pid）。

```yaml
advanced:
    log_syslog:
        pid: 'process.pid'
```

- 类型：`string`
- 默认值：`"process.pid"`

#### localhost

用于标识日志消息来源的主机名（默认：localhost）。

```yaml
advanced:
    log_syslog:
        localhost: 'localhost'
```

- 类型：`string`
- 默认值：`"localhost"`

#### type

使用的 syslog 协议类型（默认：BSD，也支持：5424）。

```yaml
advanced:
    log_syslog:
        type: '5424'
```

- 类型：`string`
- 默认值：`"5424"`

#### app_name

应用程序名称（默认：Zigbee2MQTT）。

```yaml
advanced:
    log_syslog:
        app_name: 'Zigbee2MQTT'
```

- 类型：`string`
- 默认值：`"Zigbee2MQTT"`

#### eol

添加到消息末尾的行结束符（默认：消息不做任何修改）。

```yaml
advanced:
    log_syslog:
        eol: '/n'
```

- 类型：`string`
- 默认值：`"/n"`

### log_syslog

syslog（已禁用）

```yaml
advanced:
    log_syslog: null
```

- 类型：`null`

### pan_id

Pan ID（字符串）

```yaml
advanced:
    pan_id: 'abc'
```

- 类型：`string`
- 默认值：`6754`

### pan_id

Pan ID（数字）

```yaml
advanced:
    pan_id: 1
```

- 类型：`number`
- 默认值：`6754`
- 最小值：`1`
- 最大值：`65534`

### ext_pan_id

扩展 Pan ID（字符串）

```yaml
advanced:
    ext_pan_id: 'abc'
```

- 类型：`string`
- 默认值：`[221,221,221,221,221,221,221,221]`

### ext_pan_id

扩展 Pan ID（数组）

```yaml
advanced:
    ext_pan_id: []
```

- 类型：`array`（元素为 `number`）
- 默认值：`[221,221,221,221,221,221,221,221]`

### network_key

网络密钥（字符串）

```yaml
advanced:
    network_key: 'abc'
```

- 类型：`string`
- 默认值：`[1,3,5,7,9,11,13,15,0,2,4,6,8,10,12,13]`

### network_key

网络密钥（数组）

```yaml
advanced:
    network_key: []
```

- 类型：`array`（元素为 `number`）
- 默认值：`[1,3,5,7,9,11,13,15,0,2,4,6,8,10,12,13]`

## availability

可用性（availability）

### enabled

启用可用性检测

```yaml
availability:
    enabled: false
```

- 类型：`boolean`
- 默认值：`false`
- <span style="color: red">需要重启才能生效</span>

### active

Active（主动型设备）

#### timeout <span style="color: red">*</span>

主动型设备被标记为离线之前的时长，单位为分钟

```yaml
availability:
    active:
        timeout: 10
```

- 类型：`number`
- 默认值：`10`
- 最小值：`1`
- <span style="color: red">需要重启才能生效</span>

#### max_jitter

超时时允许的最大抖动（毫秒），用于避免可用性 ping 集中在同一时间触发

```yaml
availability:
    active:
        max_jitter: 30000
```

- 类型：`number`
- 默认值：`30000`
- 最小值：`1000`

#### backoff

在可用性 ping 失败后启用超时退避（x1.5、x3、x6、x12……）

```yaml
availability:
    active:
        backoff: true
```

- 类型：`boolean`
- 默认值：`true`

#### pause_on_backoff_gt

当退避倍数超过此限制时暂停可用性 ping，直到收到该设备发来的新 Zigbee 消息。设为 0 表示禁用暂停功能。

```yaml
availability:
    active:
        pause_on_backoff_gt: 0
```

- 类型：`number`
- 默认值：`0`
- 最小值：`0`

### passive

Passive（被动型设备）

#### timeout <span style="color: red">*</span>

被动型设备被标记为离线之前的时长，单位为分钟

```yaml
availability:
    passive:
        timeout: 1500
```

- 类型：`number`
- 默认值：`1500`
- 最小值：`1`
- <span style="color: red">需要重启才能生效</span>

## devices

#### friendly_name <span style="color: red">*</span>

用于设备的 MQTT topic 中，默认为设备 ID

```yaml
devices:
    '0x1234567812345678':
        friendly_name: 'abc'
```

- 类型：`string`

#### retain

保留（retain）该设备的 MQTT 消息

```yaml
devices:
    '0x1234567812345678':
        retain: false
```

- 类型：`boolean`
- 默认值：`false`

#### disabled

禁用该设备（将其排除在网络扫描、可用性检测和组状态更新之外）

```yaml
devices:
    '0x1234567812345678':
        disabled: true
```

- 类型：`boolean`
- <span style="color: red">需要重启才能生效</span>

#### retention

设置 MQTT 消息的过期时间（Message Expiry），单位为秒，请确保将 mqtt.version 设置为 5

```yaml
devices:
    '0x1234567812345678':
        retention: 0
```

- 类型：`number`

#### qos

该设备 MQTT 消息的 QoS 级别

```yaml
devices:
    '0x1234567812345678':
        qos: null
```

- 类型：`number`
- 可选值：`0`、`1`、`2`

#### throttle

两次载荷之间的最小时间间隔，单位为秒。设备处于节流（throttle）状态时收到的载荷将被丢弃

```yaml
devices:
    '0x1234567812345678':
        throttle: 0
```

- 类型：`number`
- <span style="color: red">需要重启才能生效</span>

#### debounce

对该设备的消息进行去抖动（debounce）处理

```yaml
devices:
    '0x1234567812345678':
        debounce: 0
```

- 类型：`number`
- <span style="color: red">需要重启才能生效</span>

#### debounce_ignore

在去抖动时间内，保护指定载荷属性的唯一载荷值不被覆盖

```yaml
devices:
    '0x1234567812345678':
        debounce_ignore: 'action'
```

- 类型：`array`（元素为 `string`）
- 示例：
    - `"action"`

#### optimistic

在 set 之后发布乐观（optimistic）状态

```yaml
devices:
    '0x1234567812345678':
        optimistic: true
```

- 类型：`boolean`
- 默认值：`true`

#### filtered_attributes

使用正则表达式从发布的载荷中过滤属性。

```yaml
devices:
    '0x1234567812345678':
        filtered_attributes: '^temperature$'
```

- 类型：`array`（元素为 `string`）
- 示例：
    - `"^temperature$"`
    - `"^battery$"`
    - `"^action$"`

#### filtered_cache

使用正则表达式过滤不被加入缓存的属性，这样当该属性值未变化时，就不会出现在发布的载荷中。

```yaml
devices:
    '0x1234567812345678':
        filtered_cache: '^input_actions$'
```

- 类型：`array`（元素为 `string`）
- 示例：
    - `"^input_actions$"`

#### filtered_optimistic

调用 /set 时，使用正则表达式从乐观发布载荷中过滤属性。（若 optimistic 设为 false，则此项无效。）

```yaml
devices:
    '0x1234567812345678':
        filtered_optimistic: '^color_(mode|temp)$'
```

- 类型：`array`（元素为 `string`）
- 示例：
    - `"^color_(mode|temp)$"`
    - `"color"`

#### icon

前端界面中用户自定义的设备图标。可以是完整的图片链接（例如 https://SOME.SITE/MODEL123.jpg），也可以是 `device_icons` 目录下本地文件的路径（例如 device_icons/MODEL123.png）。

```yaml
devices:
    '0x1234567812345678':
        icon: 'abc'
```

- 类型：`string`

#### disable_automatic_update_check

Zigbee 设备可能会请求固件更新检查，且频率较高，这会导致 Zigbee2MQTT 频繁访问第三方服务器。如果禁用这些由设备发起的检查，你仍然可以手动发起一次固件更新检查。

```yaml
devices:
    '0x1234567812345678':
        disable_automatic_update_check: false
```

- 类型：`boolean`
- 默认值：`false`

#### homeassistant

Home Assistant

##### name

该设备在 Home Assistant 中的名称

```yaml
devices:
    '0x1234567812345678':
        homeassistant:
            name: null
```

- 类型：`string,null`

## frontend

前端界面（frontend）

### enabled

启用前端界面

```yaml
frontend:
    enabled: false
```

- 类型：`boolean`
- 默认值：`false`
- <span style="color: red">需要重启才能生效</span>

### package

前端界面所使用的软件包

```yaml
frontend:
    package: 'zigbee2mqtt-windfront'
```

- 类型：`string`
- 默认值：`"zigbee2mqtt-windfront"`
- 可选值：`zigbee2mqtt-windfront`、`zigbee2mqtt-frontend`
- <span style="color: red">需要重启才能生效</span>

### port

前端界面绑定的端口。使用 unix domain socket 时此项将被忽略

```yaml
frontend:
    port: 8080
```

- 类型：`number`
- 默认值：`8080`
- <span style="color: red">需要重启才能生效</span>

### host

前端界面绑定的主机。若填写绝对路径，则会改为绑定到 unix socket。

```yaml
frontend:
    host: null
```

- 类型：`string,null`
- 示例：
    - `"127.0.0.1"`
    - `"::1"`
    - `"/run/zigbee2mqtt/zigbee2mqtt.sock"`
- <span style="color: red">需要重启才能生效</span>

### auth_token

启用身份验证，默认禁用

```yaml
frontend:
    auth_token: null
```

- 类型：`string,null`
- <span style="color: red">需要重启才能生效</span>

### url

可访问前端界面的 URL，目前仅用于 Home Assistant 设备配置页面

```yaml
frontend:
    url: null
```

- 类型：`string,null`
- <span style="color: red">需要重启才能生效</span>

### ssl_cert

用于开启 HTTPS 的 SSL 证书文件绝对路径。必须同时设置对应的 'ssl_key' 属性，HTTPS 才会被激活。

```yaml
frontend:
    ssl_cert: null
```

- 类型：`string,null`
- <span style="color: red">需要重启才能生效</span>

### ssl_key

用于开启 HTTPS 的 SSL 密钥文件绝对路径。必须同时设置对应的 'ssl_cert' 属性，HTTPS 才会被激活。

```yaml
frontend:
    ssl_key: null
```

- 类型：`string,null`
- <span style="color: red">需要重启才能生效</span>

### base_url

前端界面的 Base URL。如果部署在子路径下，例如 'http://localhost:8080/z2m'，请将此项设为 '/z2m'

```yaml
frontend:
    base_url: '/'
```

- 类型：`string`
- 默认值：`"/"`
- <span style="color: red">需要重启才能生效</span>

### notification_filter

隐藏匹配指定正则表达式的前端通知。示例：'z2m: Failed to ping.*'

```yaml
frontend:
    notification_filter: []
```

- 类型：`array`（元素为 `string`）

### disable_ui_serving

若设为 true，则不提供前端 UI，Zigbee2MQTT 只维护 WebSocket 连接（此时需要你自行按需提供独立的 UI）。

```yaml
frontend:
    disable_ui_serving: null
```

- 类型：`boolean,null`
- <span style="color: red">需要重启才能生效</span>

## groups

#### friendly_name <span style="color: red">*</span>

```yaml
groups:
    1:
        friendly_name: 'abc'
```

- 类型：`string`

#### retain

保留（retain）该组的 MQTT 消息

```yaml
groups:
    1:
        retain: false
```

- 类型：`boolean`
- 默认值：`false`

#### optimistic

在 set 之后发布组成员的预期状态

```yaml
groups:
    1:
        optimistic: true
```

- 类型：`boolean`
- 默认值：`true`

#### qos

该组 MQTT 消息的 QoS 级别

```yaml
groups:
    1:
        qos: null
```

- 类型：`number`
- 可选值：`0`、`1`、`2`

#### off_state

控制何时为组发布 OFF 或 CLOSE 状态。'all_members_off'：仅当所有组成员都处于 OFF/CLOSE 状态时才发布 OFF/CLOSE；'last_member_state'：只要有任一成员变为 OFF，就发布 OFF 状态

```yaml
groups:
    1:
        off_state: 'all_members_off'
```

- 类型：`string`
- 默认值：`"all_members_off"`
- 可选值：`all_members_off`、`last_member_state`
- <span style="color: red">需要重启才能生效</span>

#### filtered_attributes

```yaml
groups:
    1:
        filtered_attributes: []
```

- 类型：`array`（元素为 `string`）

#### homeassistant

Home Assistant

##### name

该组在 Home Assistant 中的名称

```yaml
groups:
    1:
        homeassistant:
            name: null
```

- 类型：`string,null`

## health

健康检查（health）

### interval

两次检查之间的间隔，单位为分钟

```yaml
health:
    interval: 10
```

- 类型：`number`
- 默认值：`10`
- 最小值：`1`
- <span style="color: red">需要重启才能生效</span>

### reset_on_check

若为 true，则每次执行健康检查时都会重置统计数据（仅适用于可重置的统计项）。

```yaml
health:
    reset_on_check: false
```

- 类型：`boolean`
- 默认值：`false`

## homeassistant

Home Assistant 集成

### enabled

启用 Home Assistant 集成

```yaml
homeassistant:
    enabled: false
```

- 类型：`boolean`
- 默认值：`false`
- <span style="color: red">需要重启才能生效</span>

### discovery_topic

Home Assistant 发现（discovery）主题

```yaml
homeassistant:
    discovery_topic: 'homeassistant'
```

- 类型：`string`
- 默认值：`"homeassistant"`
- 示例：
    - `"homeassistant"`
- <span style="color: red">需要重启才能生效</span>

### status_topic

```yaml
homeassistant:
    status_topic: 'homeassistant/status'
```

- 类型：`string`
- 默认值：`"homeassistant/status"`
- 示例：
    - `"homeassistant/status"`
- <span style="color: red">需要重启才能生效</span>

### legacy_action_sensor

Home Assistant 旧版 action 传感器，启用后会发现一个 action 传感器，并在每次发布 action 后发送一个空的 `action`。

```yaml
homeassistant:
    legacy_action_sensor: false
```

- 类型：`boolean`
- 默认值：`false`

### experimental_event_entities

Home Assistant 实验性事件实体，启用后 Zigbee2MQTT 会为已暴露的 action 添加事件实体。相关事件和属性目前仍属于实验性质，可能会发生变化。

```yaml
homeassistant:
    experimental_event_entities: false
```

- 类型：`boolean`
- 默认值：`false`

## map_options

网络拓扑图（Networkmap）

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

- 类型：`string`
- 默认值：`"#fff8ce"`

###### coordinator

```yaml
map_options:
    graphviz:
        colors:
            fill:
                coordinator: '#e04e5d'
```

- 类型：`string`
- 默认值：`"#e04e5d"`

###### router

```yaml
map_options:
    graphviz:
        colors:
            fill:
                router: '#4ea3e0'
```

- 类型：`string`
- 默认值：`"#4ea3e0"`

##### font

###### enddevice

```yaml
map_options:
    graphviz:
        colors:
            font:
                enddevice: '#000000'
```

- 类型：`string`
- 默认值：`"#000000"`

###### coordinator

```yaml
map_options:
    graphviz:
        colors:
            font:
                coordinator: '#ffffff'
```

- 类型：`string`
- 默认值：`"#ffffff"`

###### router

```yaml
map_options:
    graphviz:
        colors:
            font:
                router: '#ffffff'
```

- 类型：`string`
- 默认值：`"#ffffff"`

##### line

###### active

```yaml
map_options:
    graphviz:
        colors:
            line:
                active: '#009900'
```

- 类型：`string`
- 默认值：`"#009900"`

###### inactive

```yaml
map_options:
    graphviz:
        colors:
            line:
                inactive: '#994444'
```

- 类型：`string`
- 默认值：`"#994444"`

## mqtt

MQTT

### base_topic

Zigbee2MQTT MQTT 消息使用的 MQTT base topic

```yaml
mqtt:
    base_topic: 'zigbee2mqtt'
```

- 类型：`string`
- 默认值：`"zigbee2mqtt"`
- 示例：
    - `"zigbee2mqtt"`
- <span style="color: red">需要重启才能生效</span>

### server <span style="color: red">*</span>

MQTT 服务器 URL（使用 mqtts:// 表示 SSL/TLS 连接）

```yaml
mqtt:
    server: 'mqtt://localhost:1883'
```

- 类型：`string`
- 示例：
    - `"mqtt://localhost:1883"`
- <span style="color: red">需要重启才能生效</span>

### keepalive

MQTT keepalive 时间，单位为秒

```yaml
mqtt:
    keepalive: 60
```

- 类型：`number`
- 默认值：`60`
- <span style="color: red">需要重启才能生效</span>

### ca

用于签发服务器和客户端证书的 CA 的 SSL/TLS 证书绝对路径

```yaml
mqtt:
    ca: '/etc/ssl/mqtt-ca.crt'
```

- 类型：`string`
- 示例：
    - `"/etc/ssl/mqtt-ca.crt"`
- <span style="color: red">需要重启才能生效</span>

### key

用于客户端身份验证的 SSL/TLS 密钥绝对路径

```yaml
mqtt:
    key: '/etc/ssl/mqtt-client.key'
```

- 类型：`string`
- 示例：
    - `"/etc/ssl/mqtt-client.key"`
- <span style="color: red">需要重启才能生效</span>

### cert

用于客户端身份验证的 SSL/TLS 证书绝对路径

```yaml
mqtt:
    cert: '/etc/ssl/mqtt-client.crt'
```

- 类型：`string`
- 示例：
    - `"/etc/ssl/mqtt-client.crt"`
- <span style="color: red">需要重启才能生效</span>

### user

MQTT 服务器身份验证用户名

```yaml
mqtt:
    user: 'johnnysilverhand'
```

- 类型：`string`
- 示例：
    - `"johnnysilverhand"`
- <span style="color: red">需要重启才能生效</span>

### password

MQTT 服务器身份验证密码

```yaml
mqtt:
    password: 'ILOVEPELMENI'
```

- 类型：`string`
- 示例：
    - `"ILOVEPELMENI"`
- <span style="color: red">需要重启才能生效</span>

### client_id

MQTT 客户端 ID

```yaml
mqtt:
    client_id: 'MY_CLIENT_ID'
```

- 类型：`string`
- 示例：
    - `"MY_CLIENT_ID"`
- <span style="color: red">需要重启才能生效</span>

### reject_unauthorized

禁用自签名 SSL 证书

```yaml
mqtt:
    reject_unauthorized: true
```

- 类型：`boolean`
- 默认值：`true`
- <span style="color: red">需要重启才能生效</span>

### server_name

当用于证书校验的主机名与 'server' 中填写的主机不同（例如连接到内部服务的 DNS 名称，但校验的是公共证书的 SAN）时，覆盖用于证书校验的 TLS SNI / 主机名。留空则使用 'server' 中的主机名。

```yaml
mqtt:
    server_name: 'mqtt.example.com'
```

- 类型：`string`
- 示例：
    - `"mqtt.example.com"`
- <span style="color: red">需要重启才能生效</span>

### include_device_information

在 MQTT 消息中包含设备信息

```yaml
mqtt:
    include_device_information: false
```

- 类型：`boolean`
- 默认值：`false`

### version

MQTT 协议版本

```yaml
mqtt:
    version: 4
```

- 类型：`number,null`
- 默认值：`4`
- 示例：
    - `5`
- <span style="color: red">需要重启才能生效</span>

### force_disable_retain

对所有发送的消息禁用 retain。仅当你的 MQTT broker 不支持保留消息时才启用此项（例如 AWS IoT Core、Azure IoT Hub、Google Cloud IoT Core、IBM Watson IoT Platform）。启用后会导致 Home Assistant 集成失效

```yaml
mqtt:
    force_disable_retain: false
```

- 类型：`boolean`
- 默认值：`false`
- <span style="color: red">需要重启才能生效</span>

### maximum_packet_size

指定服务器可以发送给 Zigbee2MQTT 的最大允许数据包长度（字节）。注意：你的 MQTT broker 中也存在相同的设置项，但对应的是客户端可以发送给它的数据长度。

```yaml
mqtt:
    maximum_packet_size: 1048576
```

- 类型：`number`
- 默认值：`1048576`
- 最小值：`20`
- 最大值：`268435456`
- <span style="color: red">需要重启才能生效</span>

## ota

OTA 更新

### update_check_interval

你的设备可能会请求检查新的固件更新。此值决定实际联系第三方服务器查询固件更新的频率，单位为分钟，默认值为 1 天。

```yaml
ota:
    update_check_interval: 1440
```

- 类型：`number`
- 默认值：`1440`
- 最小值：`1`

### disable_automatic_update_check

Zigbee 设备可能会请求固件更新检查，且频率较高，这会导致 Zigbee2MQTT 频繁访问第三方服务器。如果禁用这些由设备发起的检查，你仍然可以手动发起一次固件更新检查。

```yaml
ota:
    disable_automatic_update_check: false
```

- 类型：`boolean`
- 默认值：`false`

### zigbee_ota_override_index_location

覆盖用的 OTA 索引文件位置

```yaml
ota:
    zigbee_ota_override_index_location: null
```

- 类型：`string,null`
- 示例：
    - `"index.json"`
- <span style="color: red">需要重启才能生效</span>

### image_block_request_timeout

OTA 更新期间的超时时间（毫秒）。如果你的设备请求数据块的速度过慢，可以增大此值。

```yaml
ota:
    image_block_request_timeout: 150000
```

- 类型：`number`
- 默认值：`150000`
- 最小值：`10000`
- 最大值：`2147483647`

### image_block_response_delay

限制 OTA 更新期间的请求速率（毫秒），以降低网络拥堵。如果你的网络在 OTA 期间出现不稳定，可以增大此值。

```yaml
ota:
    image_block_response_delay: 250
```

- 类型：`number`
- 默认值：`250`
- 最小值：`50`

### default_maximum_data_size

更新期间发送的文件分块大小（字节）。注意：对于要求特定值的厂商，此值可能会被忽略。

```yaml
ota:
    default_maximum_data_size: 50
```

- 类型：`number`
- 默认值：`50`
- 最小值：`10`
- 最大值：`100`

## serial

串口（serial）

### port

适配器所在的位置。设为 null 可自动检测端口

```yaml
serial:
    port: null
```

- 类型：`string,null`
- 示例：
    - `"/dev/ttyACM0"`
- <span style="color: red">需要重启才能生效</span>

### disable_led

若适配器支持，则禁用其 LED

```yaml
serial:
    disable_led: false
```

- 类型：`boolean`
- 默认值：`false`
- <span style="color: red">需要重启才能生效</span>

### adapter

适配器（adapter）类型，除非遇到问题，否则无需设置

```yaml
serial:
    adapter: 'deconz'
```

- 类型：`string`
- 可选值：`deconz`、`zstack`、`zigate`、`ezsp`、`ember`、`zboss`、`zoh`
- <span style="color: red">需要重启才能生效</span>

### baudrate

串口的波特率。此值必须与适配器固件所支持的波特率一致（最常见的是 115200）。

```yaml
serial:
    baudrate: 115200
```

- 类型：`number`
- 示例：
    - `115200`
    - `921600`
    - `460800`
    - `230400`
    - `57600`
    - `38400`
- <span style="color: red">需要重启才能生效</span>

### rtscts

串口的 RTS / CTS 硬件流控制

```yaml
serial:
    rtscts: true
```

- 类型：`boolean`
- <span style="color: red">需要重启才能生效</span>

## blocklist

阻止设备加入网络（按 ieeeAddr）

```yaml
blocklist: []
```

- 类型：`array`（元素为 `string`）
- <span style="color: red">需要重启才能生效</span>

## device_options

应用于所有设备的选项

```yaml
device_options: {}
```

- 类型：`object`

## passlist

仅允许特定设备加入网络（按 ieeeAddr）。注意，不在白名单中的所有设备都会被从网络中移除！

```yaml
passlist: []
```

- 类型：`array`（元素为 `string`）
- <span style="color: red">需要重启才能生效</span>
