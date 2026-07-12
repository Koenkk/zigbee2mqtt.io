---
sidebarDepth: 1
redirectFrom: /information/exposes.md
---

# 暴露项（exposes）

Zigbee2MQTT 通过 [`zigbee2mqtt/bridge/devices`](./mqtt_topics_and_messages.md) 中的 `exposes` 属性来暴露设备的功能。本文档记录了所有可能出现的 `exposes`。

exposes 分为两种类型：

- 通用型（generic）：如 `numeric`、`binary` 等类型
- 特定型（specific）：表示设备的某个具体功能，如 `light` 或 `switch`。

这两种类型都始终包含一个 `type` 属性。

通用类型（`composite` 除外）都始终包含 `access` 属性，并可以选择性地包含 `description` 属性。

所有通用类型都始终包含一个 `name` 属性用于标识上下文，以及一个 `label` 属性，其中包含该功能的名称，采用正确的大小写且不使用下划线分隔（例如 `Device temperature`、`VOC`、`Power outage count`）。

所有通用类型都始终包含一个 `property` 属性，用于指明该值暴露在何处，通常它与 `name` 相同，但当定义了 `endpoint` 时，则为 `name_endpoint`。

特定类型以及通用类型中的 `composite` 都始终包含一个 `features` 属性，它是一个包含各通用 exposes 类型的数组。这两种类型都可以选择性地包含一个 `endpoint` 属性，表示设备在特定端点上暴露该功能。

这两种类型都可以选择性地包含一个 `category` 属性，其值可以是 `config` 或 `diagnostic`。如果设置了该属性，表示该 expose 主要用于配置（例如 `operation_mode`、`power_on_behaviour`）或诊断目的（例如 `power_outage_count`、`device_temperature`）。如果未设置，则表示该 expose 用于设备的常规使用（例如 `switch`、`light`、`power`）。配置类 expose 必须始终是可设置的（参见[访问权限](#访问权限-access)）。诊断类 expose 必须是只读的（否则它应当被归为配置类或常规 expose）。

### 访问权限 (access)

`access` 属性是一个 3 位的位掩码（bitmask）。

- 第 1 位：该属性会出现在该设备已发布的状态（state）中。
- 第 2 位：该属性可以通过 `/set` 命令进行设置。
- 第 3 位：该属性可以通过 `/get` 命令获取（当此位为 true 时，第 1 位也必定为 true）。

示例：

- 小米（Xiaomi）WSDCGQ01LM 温湿度传感器暴露了一个数值型温度传感器。由于该设备大部分时间处于休眠状态，因此无法通过 `/get` 命令获取。其 access 值为 `1`（二进制：`0b001`）。
- 飞利浦（Philips）7146060PH Hue Go 灯具暴露了亮度（brightness）。它可以被 `/get`、`/set`，同时也会出现在已发布的状态中。其 access 值为 `7`（二进制：`0b111`）。
- 飞利浦 7146060PH Hue Go 灯具暴露了效果（effect，例如触发闪烁效果）。它只能被 `/set`。其 access 值为 `2`（二进制：`0b010`）。
- 小米 ZNCZ02LM 智能插座暴露了一个数值型功率传感器。它可以被 `/get`，并会发布在状态中。其 access 值为 `5`（二进制：`0b101`）。

## 通用类型

### 二进制型（Binary）

表示设备暴露了一个二进制值。始终包含 `value_on` 和 `value_off`，用于说明如何解读该值。可以选择性地包含 `value_toggle`，发送该值可以切换（toggle）当前状态。

示例：

```json
{
    "type": "binary",
    "name": "occupancy",
    "label": "Occupancy",
    "property": "occupancy",
    "value_on": true,
    "value_off": false,
    "access": 1
}
```

```json
{
    "type": "binary",
    "name": "state",
    "label": "State",
    "property": "state",
    "value_on": "ON",
    "value_off": "OFF",
    "value_toggle": "TOGGLE",
    "access": 7
}
```

### 数值型（Numeric）

表示设备暴露了一个数值。可以选择性地包含 `value_max`、`value_min`、`value_step`、`unit` 和 `presets`。`presets` 定义了具有特殊含义的值。

示例：

```json
{
    "type": "numeric",
    "name": "brightness",
    "label": "Brightness",
    "property": "brightness",
    "value_min": 0,
    "value_max": 254,
    "access": 7
}
```

```json
{
    "type": "numeric",
    "name": "temperature",
    "label": "Temperature",
    "property": "temperature",
    "unit": "°C",
    "access": 1
}
```

```json
{
    "type": "numeric",
    "name": "color_temp_startup",
    "label": "Color temp startup",
    "property": "color_temp_startup",
    "unit": "mired",
    "access": 7,
    "presets": {
        "name": "previous",
        "value": 65535,
        "description": "Restore previous color_temp on cold power on"
    }
}
```

### 枚举型（Enum）

表示设备暴露了一个枚举值。始终包含 `values`，用于列出所有可能的取值。

示例：

```json
{
    "type": "enum",
    "name": "identify",
    "label": "Identify",
    "property": "identify",
    "values": ["blink", "okay"],
    "access": 2
}
```

### 文本型（Text）

表示设备暴露了一个文本值。

示例：

```json
{
    "type": "text",
    "name": "inserted",
    "label": "Inserted",
    "property": "inserted",
    "access": 1
}
```

### 组合型（Composite）

`composite`（组合型）将上述通用类型组合在 `features` 数组中。

示例：

```json
{
    "type": "composite",
    "name": "color_xy",
    "label": "Color xy",
    "access": 2,
    "property": "color",
    "features": [
        {
            "type": "numeric",
            "name": "x",
            "label": "X",
            "property": "x",
            "access": 7
        },
        {
            "type": "numeric",
            "name": "y",
            "label": "Y",
            "property": "y",
            "access": 7
        }
    ]
}
```

### 列表型（List）

表示设备暴露了一个值列表。`item_type` 可以是任意其他 exposes 类型，只是其中省略了 `property`。
还可以选择性地添加 `length_min` 和 `length_max` 属性，用于定义列表中条目数量的最小值/最大值。

示例：

```json
{
    "type": "list",
    "name": "no_occupancy_since",
    "label": "No occupancy since",
    "property": "no_occupancy_since",
    "access": 1,
    "item_type": {
        "access": 3,
        "name": "temperature",
        "label": "Temperature",
        "type": "numeric"
    }
}
```

```json
{
    "type": "list",
    "name": "schedule",
    "label": "Schedule",
    "property": "schedule",
    "access": 3,
    "length_min": 1,
    "length_max": 10,
    "item_type": {
        "type": "composite",
        "name": "day_time",
        "label": "Day time",
        "features": [
            {
                "access": 3,
                "name": "day",
                "label": "Day",
                "property": "day",
                "type": "enum",
                "values": ["monday", "tuesday", "wednesday"]
            },
            {
                "access": 3,
                "name": "hour",
                "label": "Hour",
                "property": "hour",
                "type": "numeric"
            },
            {
                "access": 3,
                "name": "minute",
                "label": "Minute",
                "property": "minute",
                "type": "numeric"
            }
        ]
    }
}
```

## 特定类型

### 灯光（Light）

表示设备暴露了一个灯光，可能的 features 有 `state`、`brightness`、`color_temp`、`color_xy`、`color_hs`、`min_brightness`、`level_config` 和 `color_temp_startup`。

示例：

```json
{
    "type": "light",
    "features": [
        {
            "type": "binary",
            "name": "state",
            "label": "State",
            "property": "state",
            "value_on": "ON",
            "value_off": "OFF",
            "value_toggle": "TOGGLE",
            "access": 7
        },
        {
            "type": "numeric",
            "name": "brightness",
            "label": "Brightness",
            "property": "brightness",
            "value_min": 0,
            "value_max": 254,
            "access": 7
        },
        {
            "type": "numeric",
            "name": "color_temp",
            "label": "Color temp",
            "property": "color_temp",
            "access": 7
        },
        {
            "type": "composite",
            "name": "color_xy",
            "label": "Color xy",
            "property": "color",
            "features": [
                {
                    "type": "numeric",
                    "name": "x",
                    "label": "X",
                    "property": "x",
                    "access": 7
                },
                {
                    "type": "numeric",
                    "name": "y",
                    "label": "Y",
                    "property": "y",
                    "access": 7
                }
            ]
        },
        {
            "type": "composite",
            "name": "color_hs",
            "label": "Color hs",
            "property": "color",
            "features": [
                {
                    "type": "numeric",
                    "name": "hue",
                    "label": "Hue",
                    "property": "hue",
                    "access": 7
                },
                {
                    "type": "numeric",
                    "name": "saturation",
                    "label": "Saturation",
                    "property": "saturation",
                    "access": 7
                }
            ]
        }
    ]
}
```

请注意，已知部分灯泡无法正确表示 XY 色彩，因此更推荐通过 HS 设置颜色。在这种情况下，`features` 列表中 `color_hs` 会出现在 `color_xy` 之前。

### 开关（Switch）

表示设备暴露了一个开关。

示例：

```json
{
    "type": "switch",
    "features": [
        {
            "type": "binary",
            "name": "state",
            "label": "State",
            "property": "state",
            "value_on": "ON",
            "value_off": "OFF",
            "value_toggle": "TOGGLE",
            "access": 7
        }
    ]
}
```

### 风扇（Fan）

表示设备暴露了一个风扇。可能的 features 有 `state` 和 `mode`。

示例：

```json
{
    "type": "fan",
    "features": [
        {
            "type": "binary",
            "name": "state",
            "label": "State",
            "property": "fan_state",
            "value_on": "ON",
            "value_off": "OFF",
            "access": 7
        },
        {
            "type": "enum",
            "name": "mode",
            "label": "Mode",
            "property": "fan_mode",
            "values": ["off", "low", "medium", "high", "on", "auto", "smart"],
            "access": 7
        }
    ]
}
```

### 窗帘（Cover）

表示设备暴露了一个窗帘/卷帘（cover）。可能的 features 有 `state`、`position` 和 `tilt`。

示例：

```json
{
    "type": "cover",
    "features": [
        {
            "type": "binary",
            "name": "state",
            "label": "State",
            "property": "state",
            "value_on": "OPEN",
            "value_off": "CLOSE",
            "access": 7
        },
        {
            "type": "numeric",
            "name": "position",
            "label": "Position",
            "property": "position",
            "value_min": 0,
            "value_max": 100,
            "access": 7
        },
        {
            "type": "numeric",
            "name": "tilt",
            "label": "Tilt",
            "property": "tilt",
            "value_min": 0,
            "value_max": 100,
            "access": 7
        }
    ]
}
```

### 门锁（Lock）

表示设备暴露了一个门锁。可能的 features 有 `state` 和 `lock_state`。

示例：

```json
{
    "type": "lock",
    "features": [
        {
            "type": "binary",
            "name": "state",
            "label": "State",
            "property": "state",
            "value_on": "LOCK",
            "value_off": "UNLOCK",
            "access": 7
        },
        {
            "type": "enum",
            "name": "lock_state",
            "label": "Lock state",
            "property": "lock_state",
            "values": ["not_fully_locked", "locked", "unlocked"],
            "access": 1
        }
    ]
}
```

### 温控（Climate）

表示设备暴露了温控（climate）功能。

- 可能的 features 有：`occupied_heating_setpoint`、`current_heating_setpoint`、`occupied_cooling_setpoint`、`unoccupied_heating_setpoint`、`unoccupied_cooling_setpoint`、`local_temperature`、`system_mode`、`running_state`、`fan_mode`、`preset`、`local_temperature_calibration`、`pi_heating_demand`、`running_mode`、`ac_louver_position`、`control_sequence_of_operation` 和 `swing_mode`。
- `occupied_heating_setpoint` 和 `current_heating_setpoint` 不会同时出现。
- `system_mode` 的可能取值为 `off`、`heat`、`cool`、`auto`、`dry` 和 `fan_only`。
- `running_state` 的可能取值为 `idle`、`heat`、`cool`。

示例：

```json
{
    "type": "climate",
    "features": [
        {
            "type": "numeric",
            "name": "occupied_heating_setpoint",
            "label": "Occupied heating setpoint",
            "property": "occupied_heating_setpoint",
            "value_min": 7,
            "value_max": 30,
            "value_step": 0.5,
            "access": 7,
            "unit": "°C"
        },
        {
            "type": "numeric",
            "name": "occupied_cooling_setpoint",
            "label": "Occupied cooling setpoint",
            "property": "occupied_cooling_setpoint",
            "value_min": 7,
            "value_max": 30,
            "value_step": 0.5,
            "access": 7,
            "unit": "°C"
        },
        {
            "type": "numeric",
            "name": "local_temperature",
            "label": "Local temperature",
            "property": "local_temperature",
            "access": 3,
            "unit": "°C"
        },
        {
            "type": "enum",
            "name": "system_mode",
            "label": "System mode",
            "property": "system_mode",
            "values": ["off", "auto", "heat", "cool"],
            "access": 7
        },
        {
            "type": "enum",
            "name": "preset",
            "label": "Preset",
            "property": "preset",
            "values": ["hold", "program"],
            "access": 7
        },
        {
            "type": "enum",
            "name": "running_state",
            "label": "Running state",
            "property": "running_state",
            "values": ["idle", "heat", "cool"],
            "access": 3
        },
        {
            "type": "enum",
            "name": "mode",
            "label": "Mode",
            "property": "fan_mode",
            "values": ["off", "low", "medium", "high", "on", "auto", "smart"],
            "access": 7
        }
    ]
}
```
