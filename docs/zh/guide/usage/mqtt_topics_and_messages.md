---
sidebarDepth: 1
redirectFrom: /information/mqtt_topics_and_message_structure.md
---

# MQTT 主题与消息

本页介绍 Zigbee2MQTT 使用的 MQTT 主题。请注意，基础主题（默认是 `zigbee2mqtt`）可以在 [Zigbee2MQTT 的 `configuration.yaml`](../../guide/configuration/) 中进行配置。Zigbee2MQTT 1.17.0 引入了新的 API，旧版 API 的文档可以在[这里](https://github.com/Koenkk/zigbee2mqtt.io/blob/ead922ee141546ccce079430a7acce67c982c99b/docs/information/mqtt_topics_and_messages.md)找到。

## zigbee2mqtt/FRIENDLY_NAME

`FRIENDLY_NAME` 是设备或组（group）的 IEEE 地址；如果定义了 `friendly_name`，则为该 `friendly_name`。

::: tip
你可以在 `friendly_name` 中使用 `/` 分隔符来组织设备和组。
例如，使用形如 `kitchen/floor_light` 的 `friendly_name`，会在 MQTT Explorer 中生成相应的 MQTT 结构：`kitchen` 作为文件夹，其中包含 `floor_light`。
:::

发布的消息**始终**为 JSON 格式。每个设备发布的 JSON 消息各不相同。要查看你的设备会发布哪些内容，请在设备页面查看"暴露项（exposes）"部分，设备页面可通过["支持的设备"](/supported-devices/)访问。示例如下：

**小米（Xiaomi）MiJia 温湿度传感器（WSDCGQ01LM）**

```json
{
    "temperature": 27.34,
    "humidity": 44.72
}
```

**小米 MiJia 无线开关（WXKG01LM）**

```json
{
    "action": "single"
}
```

**小米 MiJia 人体移动传感器（RTCGQ01LM）**

```json
{
    "occupancy": true
}
```

**IKEA TRADFRI LED 灯泡 E27 980 流明，可调光，白光谱，乳白色（LED1545G12）**

```json
{
    "state": "ON",
    "brightness": 215,
    "color_temp": 325
}
```

## zigbee2mqtt/FRIENDLY_NAME/availability

如果配置了[设备可用性](../configuration/device-availability.md)，则在线/离线状态发生变化时会被发布。

## zigbee2mqtt/FRIENDLY_NAME/set

向此主题发布消息可让你通过 MQTT 控制 Zigbee 设备或组。仅接受 JSON 消息。下面是控制 Philips Hue Go（7146060PH）的示例。如何控制某个具体设备，可在设备页面的 _暴露项_ 部分中查看，设备页面可通过["支持的设备"](/supported-devices/)访问。

```js
{
  "state": "ON", // Or "OFF", "TOGGLE"
  "brightness": 255, // Value between 0 and 255
  "color": {"x": 0.123, "y": 0.123} // Color in XY
}
```

如果 FRIENDLY_NAME 指向一个组，则会为该组内的所有设备设置状态。

### 不使用 JSON

如果你不想使用 JSON，向 `zigbee2mqtt/[FRIENDLY_NAME]/set/state` 发布 payload `ON`，其效果与向 `zigbee2mqtt/[FRIENDLY_NAME]/set` 发布 payload `{"state": "ON"}` 相同。

### 发布消息

发布消息的具体方式取决于你所使用的 MQTT 客户端。例如，若要使用命令行通过 mosquitto 发布消息，可以使用如下命令

```bash
 mosquitto_pub -t 'zigbee2mqtt/0x0fffffffffffffff/set' -m '{ "state": "ON" }'
```

#### 直接读写 ZCL 属性

出于开发/调试目的，可以通过此端点直接向设备发送读/写属性请求。
Cluster 与属性既可以用名称引用，也可以用 ID 引用。
Zigbee2MQTT 中所有可用的名称请参阅 [cluster.ts](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/zspec/zcl/definition/cluster.ts)。

##### 读取请求：

```js
{
  "read": {
    "cluster": genBasic, // Either name (if defined in standard) or ID of cluster can be used
    "attributes": [1]    // Either name (if defined in standard) or ID of attribute can be used
  }
}
```

##### 写入请求：

写入一个或多个属性可以通过多种方式实现：

```js
{
  "write": {
    "cluster": "genBasic" // Either the name or ID can be used.
    "payload" {
      // If the attribute ID is one of the predefined types you can directly write using key:value
      "manufacturerName": "Best Manufacturer"
      // If the attribute ID is not a predefined one (out of the ZCL specifications)
      // it still can be written with the following syntax.
      "0": // ID
      {
          "value": "Best Manufacturer",
          "type": 66 // type enum as defined in ZCL specifications. Can be found using a `read` command or from specifications.
      }
    }
  }
}
```

## zigbee2mqtt/FRIENDLY_NAME/get

这是 `set` 命令的对应操作，它允许你从设备读取某个值。例如，要读取设备的状态，可发送 payload `{"state": ""}`。你可以 `/get` 的内容会在设备页面的 _暴露项_ 部分中列出。

## zigbee2mqtt/bridge/info

包含网桥（bridge）的相关信息。
只要 payload 中的某个属性发生变化，该消息就会重新发布。
示例 payload：

```json
{
    "version":"1.13.0-dev",
    "commit":"772f6c0",
    "coordinator":{
        "ieee_address": "0x12345678",
        "type":"zStack30x",
        "meta":{"revision":20190425, "transportrev":2, "product":2, "majorrel":2, "minorrel":7, "maintrel":2}
    },
    "zigbee_herdsman_converters":{"version":"15.98.0"},
    "zigbee_herdsman":{"version":"0.20.0"},
    "network":{"channel":15,"pan_id":5674,"extended_pan_id":[0,11,22]},
    "log_level":"debug",
    "permit_join":true,
    "permit_join_end": 1733666394, // Epoch time when permit join will end, `undefined` if permit join is disabled.
    "config": {...}, // Will contain the complete Zigbee2MQTT config expect the network_key
    "config_schema": {...}, // Will contain the JSON schema of the config
    "restart_required": false, // Indicates whether Zigbee2MQTT needs to be restarted to apply options set through zigbee2mqtt/request/bridge/options
    "os": {
        "version": "Linux - 0.0.1 - x64", // OS version
        "node_version": "v1.2.3", // Node.js version
        "cpus": "Intel Core i7-9999 (x1)", // CPU types + cores
        "memory_mb": 10, // Total amount of system memory in MB
    },
    "mqtt": {
        "server": "mqtt://localhost:1883", // MQTT server
        "version": 5, // MQTT protocol version
    }
}
```

## zigbee2mqtt/bridge/health

参见[健康状态](./health.md)。

## zigbee2mqtt/bridge/state

包含网桥的状态，此消息以保留（retained）方式发布。可能的 payload 有：

- `{"state":"online"}`：网桥运行时发布（启动时）
- `{"state":"offline"}`：网桥停止前发布

## zigbee2mqtt/bridge/logging

除 `debug` 级别外，Zigbee2MQTT 的所有日志都会以 `{"level": LEVEL, "message": MESSAGE, "namespace": NAMESPACE}` 的形式发布到此主题，例如：`{"level": "info", "message": "Zigbee: allowing new devices to join.", "namespace": "z2m"}`。

## zigbee2mqtt/bridge/devices

包含连接到网桥的设备，此消息以保留方式发布。
每当有设备加入或离开时，该消息都会重新发布。
若 `supported` 为 `false`，则 `definition` 将为 `null`。
示例 payload：

```json
[
    {
        "ieee_address":"0x00158d00018255df",
        "type":"Router",
        "network_address":29159,
        "supported":true,
        "disabled": false,
        "friendly_name":"my_plug",
        "description":"this plug is in the kitchen",
        "endpoints":{"1":{"bindings":[],"configured_reportings":[],"clusters":{"input":["genOnOff","genBasic"],"output":[],"scenes":[]}}},
        "definition":{
            "source":"native", // native, generated or external
            "model":"ZNCZ02LM",
            "vendor":"Xiaomi",
            "description":"Mi power plug Zigbee",
            "options": [...], // see exposes/options below
            "exposes": [...]  // see exposes/options below
        },
        "power_source":"Mains (single phase)",
        "date_code":"02-28-2017",
        "model_id":"lumi.plug",
        // Can be: PENDING, IN_PROGRESS, SUCCESSFUL or FAILED
        "interview_state": "SUCCESSFUL",
        // `interviewing` and `interview_completed` are deprecated, use `interview_state`.
        "interviewing":false,
        "interview_completed":true
    },
    {
        "ieee_address":"0x90fd9ffffe6494fc",
        "type":"Router",
        "network_address":57440,
        "supported":true,
        "disabled": false,
        "friendly_name":"my_bulb",
        "endpoints":{"1":{"bindings":[],"configured_reportings":[],"clusters":{"input":["genOnOff","genBasic","genLevelCtrl"],"output":["genOta"],"scenes": []}}},
        "definition":{
            "source":"native",
            "model":"LED1624G9",
            "vendor":"IKEA",
            "description":"TRADFRI LED bulb E14/E26/E27 600 lumen, dimmable, color, opal white",
            "options": [...], // see exposes/options below
            "exposes": [...]  // see exposes/options below
        },
        "power_source":"Mains (single phase)",
        "software_build_id":"1.3.009",
        "model_id":"TRADFRI bulb E27 CWS opal 600lm",
        "date_code":"20180410",
        "interview_state": "SUCCESSFUL",
        "interviewing":false,
        "interview_completed":true
    },
    {
        "ieee_address":"0x00169a00022256da",
        "type":"Router",
        "endpoints":{
          "1":{
            "bindings":[
              {"cluster":"genOnOff","target":{"type":"endpoint","endpoint":1,"ieee_address":"0x000b57fffec6a5b3"}},
              {"cluster":"genOnOff","target":{"type":"group","id":1}},
            ],
            "configured_reportings":[
              {"cluster":"genOnOff","attribute":"onOff","maximum_report_interval":10,"minimum_report_interval":1,"reportable_change":1}
            ],
            "clusters":{"input":["genBasic","msIlluminanceMeasurement"],"output":["genOnOff"]},
            "scenes": [{"id": 3, "name": "Chill scene"}],
            "name": "left"
          }
        },
        "network_address":22160,
        "supported":false,
        "disabled": false,
        "friendly_name":"my_sensor",
        "definition":null,
        "power_source":"Battery",
        "date_code":"04-28-2019",
        "model_id":null,
        "interview_state": "SUCCESSFUL",
        "interviewing":false,
        "interview_completed":true
    },
    {
        "ieee_address":"0x00124b00120144ae",
        "type":"Coordinator",
        "network_address":0,
        "supported":false,
        "disabled": false,
        "endpoints":{"1":{"bindings":[],"configured_reportings":[],"clusters":{"input":[],"output":[]},"scenes": []}},
        "friendly_name":"Coordinator",
        "definition":null,
        "power_source":null,
        "date_code":null,
        "model_id":null,
        "interview_state": "SUCCESSFUL",
        "interviewing":false,
        "interview_completed":true
    },
]
```

### 暴露项/选项

设备定义中始终会有 `exposes` 和 `options` 属性，它们都是包含 expose 对象的列表。expose 的格式在[暴露项](./exposes.md)中有详细说明。

- `exposes`：包含该设备的所有能力（例如开关、灯光、占用状态）
- `options`：包含该设备的所有选项（例如 `temperature_precision`），可通过 `zigbee2mqtt/bridge/request/device/options` 设置

## zigbee2mqtt/bridge/definitions

包含设备的 Zigbee cluster 定义，此消息以保留方式发布，由两部分组成：

- `clusters`：包含来自 `zigbee-herdsman` 包的官方 cluster 定义，按 cluster 名称组织
- `custom_clusters`：包含当前使用的设备中，来自 `zigbee-herdsman-converters` 包的自定义 cluster 定义

示例 payload：

```json
{
  "clusters": {
    "genBasic": {ID: 0, ...},
    "genPowerCfg" : {ID: 1, ...},
  },
  "custom_clusters": {
    "0x12345678": {
       "myManuspecificCluster": {"ID": 0xFC01, ...},
    }
  }
}
```

该消息会在启动时以及设备加入/离开/重新配置时更新。

## zigbee2mqtt/bridge/groups

包含所有的组，此消息以保留方式发布。
每当添加/移除组，或有设备被添加到/从组中移除时，该消息都会重新发布。
示例 payload：

```json
[
    {
        "id": 1,
        "friendly_name": "my_group",
        "scenes": [{"id": 1, "name": "Scene 1"}],
        "members": [
            {
                "ieee_address": "0x90fd9ffffe6494fc",
                "endpoint": 1
            }
        ]
    }
]
```

## zigbee2mqtt/bridge/event

事件将发布到此主题。可能的类型有 `device_joined`、`device_interview`、`device_leave`、`device_announce`。示例 payload：

- `{"type":"device_joined","data":{"friendly_name":"0x90fd9ffffe6494fc","ieee_address":"0x90fd9ffffe6494fc"}}`
- `{"type":"device_announce","data":{"friendly_name":"0x90fd9ffffe6494fc","ieee_address":"0x90fd9ffffe6494fc"}}`
- `{"type":"device_interview","data":{"friendly_name":"0x90fd9ffffe6494fc","status":"started","ieee_address":"0x90fd9ffffe6494fc"}}`
- `{"type":"device_interview","data":{"friendly_name":"0x90fd9ffffe6494fc","status":"successful","ieee_address":"0x90fd9ffffe6494fc","supported":true,"definition":{"model":"LED1624G9","vendor":"IKEA","description":"TRADFRI LED bulb E14/E26/E27 600 lumen, dimmable, color, opal white"}}}`
- `{"type":"device_interview","data":{"friendly_name":"0x90fd9ffffe6494fc","status":"failed","ieee_address":"0x90fd9ffffe6494fc"}}`
- `{"type":"device_leave","data":{"ieee_address":"0x90fd9ffffe6494fc","friendly_name":"my_bulb"}}`

## zigbee2mqtt/bridge/extensions

参见[外部扩展](../../advanced/more/external_extensions.md)。

## zigbee2mqtt/bridge/converters

参见[外部转换器](../../advanced/more/external_converters.md)。

## zigbee2mqtt/bridge/request/+

此主题可用于配置某些设置，例如允许新设备加入。Zigbee2MQTT 总是会在相同的主题 `zigbee2mqtt/bridge/response/+` 上进行响应。响应 payload 中至少会包含 `status` 和 `data` 属性，`status` 的值为 `ok` 或 `error`。如果 `status` 为 `error`，还会包含一个 `error` 属性，描述错误信息。

示例：当向 `zigbee2mqtt/bridge/request/permit_join` 发布 payload `{"time": 254}` 时，Zigbee2MQTT 会在 `zigbee2mqtt/bridge/response/permit_join` 上以 payload `{"data":{"time":254},"status":"ok"}` 作出响应。如果该请求失败，响应将是 `{"data":{}, "error": "Invalid payload","status":"error"}`。

你也可以在请求中包含一个可选的 `transaction` 属性，方便将请求与响应进行匹配。当请求中包含 `transaction` 属性时，Zigbee2MQTT 会将其包含在响应中。例如：向 `zigbee2mqtt/bridge/request/permit_join` 发布 payload `{"time": 254, "transaction":23}`，将会在 `zigbee2mqtt/bridge/response/permit_join` 上收到 payload 为 `{"data":{"time":254},"status":"ok","transaction":23}` 的响应。

对于涉及某个设备的请求，你可以通过添加 `/ENDPOINT_ID` 来选择特定的端点，其中 `ENDPOINT_ID` 是端点编号（例如 `1`、`2`）或端点名称（例如 `left`、`l1`）。默认情况下会使用第一个端点。`zigbee2mqtt/bridge/request/device/bind` 的 payload 示例：`{"from": "my_remote/left", "to": "my_bulb"}`。

### 可能的请求

### 通用

#### zigbee2mqtt/bridge/request/permit_join

允许或禁止新设备在指定时长（以秒为单位）内加入。

允许的 payload：

> 启用最大时长：
>
> ```json
> {"time": 254}
> ```
>
> 禁用：
>
> ```json
> {"time": 0}
> ```
>
> 仅为指定 `friendly_name` 的设备启用：
>
> ```json
> {"time": 60, "device": "bulb"}
> ```
>
> 仅为协调器（coordinator）启用：
>
> ```json
> {"time": 60, "device": "coordinator"}
> ```

#### zigbee2mqtt/bridge/request/health_check

用于检查 Zigbee2MQTT 是否健康。payload 必须为空，响应示例：`{"data":{"healthy":true},"status":"ok"}`。

#### zigbee2mqtt/bridge/request/coordinator_check

用于执行协调器检查。payload 必须为空，响应示例：`{"data":{"missing_routers":[{"friendly_name":"bulb","ieee_address":"0x000b57fffec6a5b2"}]},"status":"ok"}`。

此检查仅支持基于 Texas Instruments 的适配器（adapter）（例如 CC2652/CC1352）。它会检查协调器内存中是否缺失了某些路由器（router）。如果存在缺失的路由器，你可能会遇到以下问题之一：

- 无法将设备配对（pairing）到你的网络：任何试图通过这个缺失的路由器加入网络的设备，配对都可能失败。
- 设备从网络中掉线：网络中的设备有时会重新加入网络，如果它们试图通过这个缺失的路由器重新加入，重新加入将会失败。

解决方法是重新配对缺失的路由器。路由器缺失通常有两个已知原因：

- 从 Zigbee 1.2 协调器迁移到 3.0（例如 CC2530/CC2531 -> CC2652/CC1352）时未重新配对任何设备。这是因为 Zigbee 1.2 的安全要求较宽松。
- 升级固件，这似乎是由 Texas Instruments SDK 中的一个 bug 导致的。

#### zigbee2mqtt/bridge/request/restart

重启 Zigbee2MQTT。payload 必须为空，响应示例：`{"data":{},"status":"ok"}`。

#### zigbee2mqtt/bridge/request/networkmap

**警告：在网络拓扑图（network map）扫描期间，你的网络将变得不响应/响应变慢。根据你的网络规模，此过程可能需要 10 秒到 2 分钟不等。因此建议仅在需要时手动触发此类扫描！**

允许你获取 Zigbee 网络的拓扑图。payload 格式为 `{"type": TYPE, "routes": BOOL}` 或 `TYPE`，例如：`graphviz`，响应为 `{"data":{"value": "NETWORKMAP","type":"graphviz","routes":false},"status":"ok"}`。可能的类型有 `raw`、`graphviz` 和 `plantuml`。如果你想包含路由信息，请将 `routes` 设为 `true`；`routes` 是可选的，默认值为 `false`。

可以使用 [webgraphviz.com](http://www.webgraphviz.com/)（用于 `graphviz`）、[planttext.com](https://www.planttext.com/)（用于 `plantuml`）或其他工具来生成网络图。

graphviz 生成的网络图会以如下方式展示设备：

- **协调器：** 带粗边框的矩形
- **路由器：** 带圆角的矩形
- **终端设备（end device）：** 带圆角和虚线边框的矩形

连接线上会标注链路质量（0..255）以及活动路由（以短 16 位目标地址列出）。箭头表示消息传递的方向。协调器与路由器之间通常会为每个连接显示两条线，表示双向消息路径。线条样式为：

- 到**终端设备**：普通线条
- **协调器**与**路由器**之间：活动路由用粗线，无活动路由用细线

#### zigbee2mqtt/bridge/request/extension/save

参见[外部扩展](../../advanced/more/external_extensions.md)。

#### zigbee2mqtt/bridge/request/extension/remove

参见[外部扩展](../../advanced/more/external_extensions.md)。

#### zigbee2mqtt/bridge/request/converter/save

参见[外部转换器](../../advanced/more/external_converters.md)。

#### zigbee2mqtt/bridge/request/converter/remove

参见[外部转换器](../../advanced/more/external_converters.md)。

#### zigbee2mqtt/bridge/request/backup

创建 `data` 目录的备份（不包含 `data/log` 目录）。payload 必须为空，响应示例：`{"data":{"zip":"WklHQkVFMk1RVFQuUk9DS1M="},"status":"ok"}`。`zip` 属性表示一个经过 Base64 编码的 zip 文件。请注意并非所有适配器都支持备份（`coordinator_backup.json`），详见[适配器](../adapters/README.md)。

#### zigbee2mqtt/bridge/request/install_code/add

允许向协调器添加安装码（install code）。当你想配对只能通过安装码配对的 Zigbee 3.0 设备时可使用此功能。这类设备通常带有一个二维码，扫描该二维码即可获得对应的代码，例如 `ZB10SG0D831018234800400000000000000000009035EAFFFE424793DLKAE3B287281CF11F550733A0CFC38AA31E802`。将此代码发布到 `zigbee2mqtt/bridge/request/install_code/add`，payload 为 `{"value":"THE_CODE"}`。响应示例：`{"data":{"value":"THE_CODE"},"status":"ok"}`。

::: tip TIP
WindFront 前端界面（frontend）在添加安装码后不会自动开启加入许可（permit joining）。这让你可以像对待普通设备一样，选择在哪个设备上开启加入许可，或对所有设备（"all"）开启。
:::

### 设备

#### zigbee2mqtt/bridge/request/device/remove

将设备从网络中移除。允许的 payload 为 `{"id": "deviceID"}` 或 `deviceID`，其中 deviceID 可以是设备的 `ieee_address` 或 `friendly_name`。示例：请求 `{"id": "my_bulb"}` 或 `my_bulb`，响应 `{"data":{"id": "my_bulb","block":false,"force":false},"status":"ok"}`。

请注意，在 Zigbee 中，协调器只能**请求**设备自行从网络中移除。
也就是说，如果设备拒绝响应该请求，它就不会从网络中移除。
对于处于休眠状态、因而无法接收该请求的电池供电设备来说，这种情况可能会发生。
如果移除失败，响应可能类似于：`{"data":{"id": "my_bulb","block":false,"force":false},"status":"error","error":"Failed to remove dimmer (Error: AREQ - ZDO - mgmtLeaveRsp after 10000ms)"}`。

另一种移除设备的方法是对其进行恢复出厂设置，但这不一定对所有设备都有效，具体取决于设备本身。
如果设备确实自行从网络中移除了，你会在 `zigbee2mqtt/bridge/event` 上收到一个 `device_leave` 事件。

如果以上方法都失败了，你可以强制移除设备。请注意，强制移除**仅会**将设备从数据库中移除。在设备被恢复出厂设置之前，它仍然持有网络加密密钥，因此仍然能够在网络中通信！
要强制移除设备，可在 payload 中添加可选的 `force` 属性（默认为 `false`），例如：`{"id":"my_bulb","force":true}`。

如果你还想屏蔽（block）该设备，可以添加可选的 `block` 属性（默认为 `false`），例如：`{"id":"my_bulb","block":true}`。请注意 Zigbee 本身并没有屏蔽功能，因此当设备被屏蔽后，一旦该设备再次加入网络，Zigbee2MQTT 会立即请求它自行从网络中移除。

#### zigbee2mqtt/bridge/request/device/ota_update/check

参见 [OTA 更新](./ota_updates.md)。

#### zigbee2mqtt/bridge/request/device/ota_update/update

参见 [OTA 更新](./ota_updates.md)。

#### zigbee2mqtt/bridge/request/device/ota_update/update/abort

参见 [OTA 更新](./ota_updates.md)。

#### zigbee2mqtt/bridge/request/device/ota_update/check/downgrade

参见 [OTA 更新](./ota_updates.md)。

#### zigbee2mqtt/bridge/request/device/ota_update/update/downgrade

参见 [OTA 更新](./ota_updates.md)。

#### zigbee2mqtt/bridge/request/device/ota_update/schedule

参见 [OTA 更新](./ota_updates.md)。

#### zigbee2mqtt/bridge/request/device/ota_update/schedule/downgrade

参见 [OTA 更新](./ota_updates.md)。

#### zigbee2mqtt/bridge/request/device/ota_update/unschedule

参见 [OTA 更新](./ota_updates.md)。

#### zigbee2mqtt/bridge/request/device/configure

允许手动触发对设备的重新配置。仅当设备未按预期工作时（例如未上报某些数值）才应使用此功能；并非所有设备都可以被配置（只有当其[definition](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/devices)中包含 `configure` 时才可以）。允许的 payload 为 `{"id": "deviceID"}` 或 `deviceID`，其中 deviceID 可以是设备的 `ieee_address` 或 `friendly_name`。示例：请求 `{"id": "my_remote"}` 或 `my_remote`，响应 `{"data":{"id": "my_remote"},"status":"ok"}`。

#### zigbee2mqtt/bridge/request/device/interview

允许你手动为指定设备触发一次面询（interview），使 Zigbee2MQTT 读取其端点、cluster 和基本属性。设备面询通常只在初次配对后发生，但在固件升级新增了某些功能后，重新执行一次面询有时也很有用。payload 格式为 `{"id": "deviceID"}`，其中 deviceID 可以是设备的 `ieee_address` 或 `friendly_name`，示例：`{"id": "my_bulb"}`，响应：`{"data":{"id": "my_bulb"},"status":"ok"}`。

#### zigbee2mqtt/bridge/request/device/options

允许你即时更改设备选项。可以修改已有选项，也可以添加新的选项。payload 格式为 `{"id": deviceID,"options": OPTIONS}`，其中 deviceID 可以是设备的 `ieee_address` 或 `friendly_name`，示例：`{"id": "my_bulb", "options":{"transition":1}}`。响应为 `{"data":{"from":{"retain":false},"to":{"retain":false,"transition":1},"id":"my_bulb","restart_required":false},"status":"ok"}`。某些选项的生效可能需要重启 Zigbee2MQTT，此时 `restart_required` 会被设为 `true`。请注意 `restart_required` 也会发布到 `zigbee2mqtt/bridge/info`。可使用 `zigbee2mqtt/bridge/request/restart` 来重启 Zigbee2MQTT。

#### zigbee2mqtt/bridge/request/device/rename

允许你即时更改设备的 `friendly_name`。payload 格式为 `{"from": deviceID, "to": deviceID}`，其中 deviceID 可以是设备的 `ieee_address` 或 `friendly_name`，示例：`{"from": "my_bulb", "to": "my_bulb_new_name"}`。响应为 `{"data":{"from":"my_bulb","to":"my_bulb_new_name","homeassistant_rename":false},"status":"ok"}`。

如果你使用 Home Assistant 发现（discovery）功能，并希望同时按新名称更新实体 ID，请发送例如 `{"from": "my_bulb", "to": "my_bulb_new_name","homeassistant_rename":true}`

如果你想重命名最后一个加入的设备，可以省略 `from` 属性并将 `last` 设为 `true`。示例：`{"last": true, "to": "my_bulb_new_name"}`。

#### zigbee2mqtt/bridge/request/device/bind

参见[绑定（binding）](./binding.md)。

#### zigbee2mqtt/bridge/request/device/unbind

参见[绑定](./binding.md)。

#### zigbee2mqtt/bridge/request/device/binds/clear

参见[绑定](./binding.md)。

#### zigbee2mqtt/bridge/request/device/reporting/configure

_别名：`zigbee2mqtt/bridge/request/device/configure_reporting`（已弃用）_

允许向设备发送 Zigbee 配置上报（configure reporting）命令。Zigbee 设备通常具有可以上报其状态变化的属性，例如温度、湿度、电池电量等。属性上报（attribute reporting）功能允许这些设备在这些属性的值发生变化时自动发送更新。
一个典型的例子是：当你用遥控器而不是 Zigbee2MQTT 改变灯泡的亮度时，状态会变得不同步。
通过为该灯泡设置上报，它会将亮度变化的通知发送给 Zigbee2MQTT，从而使 Zigbee2MQTT 中的状态得以更新。

在保持及时获取相关信息与节省能耗之间取得平衡是一种良好的做法，尤其是对于电池供电的设备而言。

关于配置上报命令的更多信息，请参阅 [Zigbee Cluster Library](https://github.com/Koenkk/zigbee-herdsman/wiki/References#csa-zigbee-alliance-spec) 中的 Configure Reporting Command。payload 示例为 `{"id":"my_bulb","endpoint":1,"cluster":"genLevelCtrl","attribute":"currentLevel","minimum_report_interval":5,"maximum_report_interval":10,"reportable_change":10}`。在这种情况下，响应会是 `{"data":{"id":"my_bulb","endpoint":1,"cluster":"genLevelCtrl","attribute":"currentLevel","minimum_report_interval":5,"maximum_report_interval":"10","reportable_change":10},"status":"ok"}`。

参数

**最小上报间隔**（minimum_report_interval）
换句话说：设备上的属性发生变化后，应该经过多久才发送更新。
值为 0 表示：属性（例如温度）一旦发生变化就立即发送更新。

**最大上报间隔**（maximum_report_interval）
换句话说：如果属性一直没有变化，设备应该多久发送一次报告。
值为 60 表示：如果灯泡已关闭 30 分钟，即使没有任何属性变化（例如没有被打开或关闭），它仍然会每 60 秒发送一次更新，共发送 30 次。

**最小上报变化量**（reportable_change）
最小上报变化量就像是告诉你的设备，只有发生足够明显的变化时才需要"发声"。
如果你为温度传感器设置最小上报变化量为 1 度，就意味着只有当温度变化至少 1 度时，传感器才会向你发送更新。
这是一种过滤掉微小波动、只关注环境中重要变化的方式。

::: tip NOTE
`reportable_change` 是否被支持取决于该属性的类型。例如 `measure` 类型的属性通常支持它，而 `enum` 类型的属性则通常不支持。如果提供了该参数但设备不支持，它会被忽略。
:::

要禁用上报，请将 `maximum_report_interval` 设为 `65535`。

说明：

- 并非所有设备都支持 Zigbee 配置上报命令（例如 Xiaomi WSDCGQ11LM 温湿度传感器就不支持）
- 如果为电池供电设备配置上报失败，请确保在发送命令前先唤醒该设备。
- `reportable_change` 的取值取决于该属性的单位，例如对于温度，通常 100 表示 1°C 的变化。
- 要指定选项，例如使用 manufacturerCode，可使用例如 `{"id":"my_bulb","cluster":"genLevelCtrl","attribute":"currentLevel","minimum_report_interval":5,"maximum_report_interval":10,"reportable_change":10,"options":{"manufacturerCode":1234}}`

#### zigbee2mqtt/bridge/request/device/reporting/read

允许读取设备上已注册的上报配置。
属性必须是可上报的，对于请求中任何不可上报的属性都会返回错误状态。

Payload 示例：

- 单个属性：`{"id":"my_bulb","endpoint":1,"cluster":"genLevelCtrl","configs":[{"attribute":"currentLevel"}]}`
- 多个属性：`{"id":"my_bulb","endpoint":1,"cluster":"genLevelCtrl","configs":[{"attribute":"currentLevel"},{"attribute":"currentFrequency"}]}`
- 厂商特定属性：`{"id":"my_bulb","endpoint":1,"cluster":"genLevelCtrl","configs":[{"attribute":"currentLevel"}], "manufacturer_code": 0x1234}`

::: tip
读取上报配置会根据请求/响应自动调整 Zigbee2MQTT 内部使用的缓存数据。成功执行该请求后，Zigbee2MQTT 中的上报配置应能反映设备上实际的上报配置。
:::

### 组

#### zigbee2mqtt/bridge/request/group/remove

移除一个组。允许的 payload 为 `{"id": "groupID"}` 或 `groupID`，其中 groupID 可以是该组的 `groupID` 或 `friendly_name`。示例：请求 `{"id": "my_group"}` 或 `my_group`，响应 `{"data":{"id": "my_group", "force": false},"status":"ok"}`。

如果组内某个设备未能自行从组中移除（例如因为该设备离线），组移除操作可能会失败。此时你可以将可选的 `force` 属性设为 `true` 来强制移除组，payload 示例：`{"id": "my_group", "force": true}`。请注意在这种情况下，该设备仍然会保留在组中；如果之后该 groupID 被重新使用，该设备仍会属于那个组。

#### zigbee2mqtt/bridge/request/group/add

添加一个组。允许的 payload 为 `{"friendly_name": NAME, "id": NUMBER}` 或 `NAME`。示例：请求 `{"id": 9, "friendly_name": "new_group"}` 或 `new_group`，响应 `{"data":{"id": 9,"friendly_name":"new_group"},"status":"ok"}`。`id` 属性是可选的。

#### zigbee2mqtt/bridge/request/group/rename

允许你即时更改组的 `friendly_name`。payload 格式为 `{"from": groupID, "to": groupID}`，其中 groupID 可以是该组的 `groupID` 或 `friendly_name`，示例：`{"from": "my_group", "to": "my_group_new_name"}`。响应为 `{"data":{"from":"my_group","to":"my_group_new_name"},"status":"ok"}`。

如果你使用 Home Assistant 发现功能，并希望同时按新名称更新实体 ID，请发送例如 `{"from": "my_group", "to": "my_group_new_name","homeassistant_rename":true}`。

#### zigbee2mqtt/bridge/request/group/options

允许你即时更改组选项。可以修改已有选项，也可以添加新的选项。payload 格式为 `{"id": groupID,"options": OPTIONS}`，其中 groupID 可以是该组的 `group_ID` 或 `friendly_name`，示例：`{"id": "my_group", "options":{"transition":1}}`。响应为 `{"data":{"from":{"retain":false},"to":{"retain":false,"transition":1},"id":"my_group","restart_required":false},"status":"ok"}`。某些选项的生效可能需要重启 Zigbee2MQTT，此时 `restart_required` 会被设为 `true`。请注意 `restart_required` 也会发布到 `zigbee2mqtt/bridge/info`。可使用 `zigbee2mqtt/bridge/request/restart` 来重启 Zigbee2MQTT。

#### zigbee2mqtt/bridge/request/group/members/add

参见[组](./groups.md)。

#### zigbee2mqtt/bridge/request/group/members/remove

参见[组](./groups.md)。

#### zigbee2mqtt/bridge/request/group/members/remove_all

参见[组](./groups.md)。

### 配置

#### zigbee2mqtt/bridge/request/options

允许设置任意选项。其 JSON schema 可以在[这里](https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/util/settings.schema.json)找到（也会以 `config_schema` 属性的形式发布到 `zigbee2mqtt/bridge/info`）。例如，要设置 `log_level`，向 `zigbee2mqtt/bridge/request/options` 发送 payload `{"options": {"advanced": { "log_level": "debug" }}}`，响应为：`{"data":{"restart_required": false},"status":"ok"}`。某些选项的生效可能需要重启 Zigbee2MQTT，此时 `restart_required` 会被设为 `true`。请注意 `restart_required` 也会发布到 `zigbee2mqtt/bridge/info`。可使用 `zigbee2mqtt/bridge/request/restart` 来重启 Zigbee2MQTT。

### Touchlink

#### zigbee2mqtt/bridge/request/touchlink/factory_reset

参见 [Touchlink](./touchlink.md)。

#### zigbee2mqtt/bridge/request/touchlink/scan

参见 [Touchlink](./touchlink.md)。

#### zigbee2mqtt/bridge/request/touchlink/identify

参见 [Touchlink](./touchlink.md)。

### 动作

#### zigbee2mqtt/bridge/request/action

允许调用特定的预定义动作（action），这些动作通常是厂商特定的。
所有的动作名称都会发布在 `zigbee2mqtt/bridge/definitions` 的 `actions` 下。

该主题的 payload 采用以下形式（具体某个动作的 `params` 应包含什么内容，请参阅对应动作的文档）：

`{"action":"<action_name>","params":{/* action-specific parameters here */}}`

例如：

`{"action":"just_an_example","params":{"abcd": 1, "zyx": "my_device"}}`

::: tip
具体、最新的动作/参数可以直接在源码中查看 [https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/converters/actions.ts](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/converters/actions.ts)
:::

##### 动作：`raw`

::: warning
此功能允许发送可能对你的网络造成负面影响甚至导致其损坏的请求。请谨慎使用！
:::

一个特殊的动作，允许发送完全自定义的 payload。给定的 payload 会被分析，以选择合适的发送方式（ZCL、ZDO 等）。
参数详情请参阅上方链接（超出本文档的范围）。
