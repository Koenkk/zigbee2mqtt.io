---
sidebarDepth: 1
---

# Exposes

Zigbee2MQTT exposes the device capabilities through the `exposes` property in [`zigbee2mqtt/bridge/devices`](./mqtt_topics_and_messages.md). The possible `exposes` are documented here.

There are two types of exposes:

-   Generic: types like `numeric` and `binary`
-   Specific: represents a specific capability of a device like a `light` or `switch`.

Both types will always have a `type` property.

The generic types (except composite) will always have an `access` property and an optional `description` property.

All generic types will always have a `name` property indicating the context and `label` property containing the name of the capability in the correct case and without using the underscore separator (e.g. `Device temperature`, `VOC`, `Power outage count`).

All generic types will always have a `property` type indicating where the value is exposed on, usually this is equal to the name but in case when the `endpoint` is defined it is `name_endpoint`.

The specific and the generic composite type will always have a `features` property, this is an array containing the generic exposes types. Optionally both types can have a property `endpoint`, indicating the device exposes this capability on a specific endpoint.

Both types have an optional `category` attribute which can be set to either `config` or `diagnostic`. If it is set, it indicates that the expose is primarily for configuration (e.g. `operation_mode`, `power_on_behaviour`) or diagnostic purposes (e.g. `power_outage_count`, `device_temperature`). If it is not set, it indicates that the expose is for regular usage of the device (e.g. `switch`, `light`, `power`). A configuration expose must always be settable (see [access rights](#access)). A diagnostic expose must be read-only (otherwise it should be either a configuration or a regular expose).

### Access

The `access` property is a 3-bit bitmask.

-   Bit 1: The property can be found in the published state of this device.
-   Bit 2: The property can be set with a `/set` command
-   Bit 3: The property can be retrieved with a `/get` command (when this bit is true, bit 1 will also be true)

Examples:

-   A Xiaomi WSDCGQ01LM climate sensor exposes a numeric temperature sensor. Since the device is sleeping most of the time it cannot be retrieved with a `/get` command. Access will be `1` (binary: `0b001`).
-   A Philips 7146060PH Hue Go light exposes brightness. This can be `/get`, `/set` and is also in the published state. Access will be `7` (binary: `0b111`)
-   A Philips 7146060PH Hue Go light exposes effect (e.g. to trigger a flashing effect). This can only be `/set`. Access will be `2` (binary: `0b010`)
-   A Xiaomi ZNCZ02LM power plug exposes a numeric power sensor. This can be `/get` and is published in the state. Access will be `5` (binary: `0b101`)

## Generic

### Binary

Indicates a device exposes a binary value. Always has `value_on` and `value_off` which indicates how to interpret the value. Optionally has a `value_toggle` which can be send to toggle the value.

Examples:

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

### Numeric

Indicates a device exposes a numeric value. Optionally has `value_max`, `value_min`, `value_step`, `unit` and `presets`. The `presets` defines values which have a special interpretation.

Examples:

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

### Enum

Indicates a device exposes an enum value. Always has `values` indicating all possible values.

Example:

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

### Text

Indicates a device exposes a textual value.

Example:

```json
{
    "type": "text",
    "name": "inserted",
    "label": "Inserted",
    "property": "inserted",
    "access": 1
}
```

### Composite

Composite combines the above generic types in the `features` array.

Example:

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

### List

Indicates a device exposes a list of values. The `item_type` can be any other exposes where the `property` is omitted.
Optionally a `length_min` and `length_max` property can be added which defines the min/max number of entries in the list.

Examples:

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

## Specific

### Light

Indicates a device exposes a light, possible features are `state`, `brightness`, `color_temp`, `color_xy`, `color_hs`, `min_brightness`, `level_config` and `color_temp_startup`.

Example:

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

Note that some bulbs are known to not correctly represent XY colors, so it is preferred to set colors via HS. In this case `color_hs` will appear before `color_xy` in the `features` list.

### Switch

Indicates a device exposes a switch.

Example:

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

### Fan

Indicates a device exposes a fan. Possible features are `state` and `mode`.

Example:

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

### Cover

Indicates a device exposes a cover. Possible features are `state`, `position` and `tilt`.

Example:

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

### Lock

Indicates a device exposes a lock. Possible features are `state` and `lock_state`.

Example:

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

### Climate

Indicates this device exposes climate functionality.

-   Possible features are: `occupied_heating_setpoint`, `current_heating_setpoint`, `occupied_cooling_setpoint`, `unoccupied_heating_setpoint`, `unoccupied_cooling_setpoint`, `local_temperature`, `system_mode`, `running_state`, `fan_mode`, `preset`, `local_temperature_calibration`, `pi_heating_demand`, `running_mode`, `ac_louver_position`, `control_sequence_of_operation` and `swing_mode`.
-   Never has both `occupied_heating_setpoint` and `current_heating_setpoint`.
-   Possible values for `system_mode` are `off`, `heat`, `cool`, `auto`, `dry` and `fan_only`.
-   Possible values for `running_state` are `idle`, `heat`, `cool`.

Example:

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
