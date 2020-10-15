---
---
# Exposes
Zigbee2MQTT exposes the device capabilities through the `exposes` property in [`zigbee2mqtt/bridge/devices`](./mqtt_topics_and_message_structure.md). The possible `exposes` are documented here.

There are two types of exposes:
- Generic: types like `numeric` and `binary`
- Specific: represents a specific capability of a device like a `light` or `switch`.

Both types will always have a `type` property. The generic types will always have an `access` property, indicating if the property can be read (`r`), written (`w`) or both (`rw`). All generic types will always have a `name` property, indicating the name of the property. The specific types will always have a `features` property, this is an array containing the generic exposes types. Optionally both types can have a property `endpoint`, indicating the device exposes this capability on a specific endpoint. A generic type embedded in the `features` of a specific type will never have the `endpoint` property as this will be defined in the specific type.

## Generic

### Binary
Indicates a device exposes a binary value. Always has `value_on` and `value_off` which indicates how to interpet the value. Optionally has a `value_toggle` which can be send to toggle the value.

Examples:
- `{"type":"binary","name":"occupancy","value_on":true,"value_off":false,"access":"r"}`
- `{"type":"binary","name":"state","value_on":"ON","value_off":"OFF","value_toggle":"TOGGLE","access":"rw"}`

### Numeric
Indicates a device exposes a numeric value. Opionally has `value_max`, `value_min` and `unit`.

Examples:
- `{"type":"numeric","name":"brightness","value_min":0,"value_max":254,"access":"rw"}`
- `{"type":"numeric","name":"temperature","unit":"°C","access":"r"}`

### Enum
Indicates a device exposes an enum value. Always has `values` indicating all possible values.

Examples:
- `{"type":"enum","name":"identify","values":["blink","okay"],"access":"w"}`

## Specific

### Light
Indicates a device exposes a light, possible features are `state`, `brightness`, `color_temp` and `color`.

Example:

```json
{
    "type": "light",
    "features": [
        {"type":"binary","name":"state","value_on":"ON","value_off":"OFF","value_toggle":"TOGGLE","access":"rw"},
        {"type":"numeric","name":"brightness","value_min":0,"value_max":254,"access":"rw"},
        {"type":"numeric","name":"color_temp","access":"rw"}
        // TODO: color??
    ]
}
```

### Switch
Indicates a device exposes a switch.

Example:

```json
{
    "type": "switch",
    "features": [
        {"type":"binary","name":"state","value_on":"ON","value_off":"OFF","value_toggle":"TOGGLE","access":"rw"}
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
        {"type":"binary","name":"state","value_on":"OPEN","value_off":"CLOSE","access":"rw"},
        {"type":"numeric","name":"position","value_min":0,"value_max":100,"access":"rw"},
        {"type":"numeric","name":"tilt","value_min":0,"value_max":100,"access":"rw"}
    ]
}
```

