---
addedAt: 2025-11-10T00:00:00Z
pageClass: device-page
---

<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
- Click the button on the motor 3 times to add or remove from zigbee network.
- The device will enter pairing mode (LED blinks orange).
- When device is paired, led will turn solid green, then turn off.

### Factory Rest
- Long press motor button for 12 seconds, motor jogbs 3 times restoring to factory settings
<!-- Notes END: Do not edit below this line -->

## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Reverse direction (enum)
Reverse the motor direction.
Value can be found in the published state on the `reverse_direction` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reverse_direction": NEW_VALUE}`.
The possible values are: `forward`, `back`.

### Work state (text)
Value can be found in the published state on the `work_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The published values are: `opening`, `closing`.

### Border (enum)
Value can be found in the published state on the `border` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"border": NEW_VALUE}`.
The possible values are: `up`, `down`, `up_delete`, `down_delete`, `remove_top_bottom`.

### Click control (enum)
Single motor steps.
Value can be found in the published state on the `click_control` property.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"click_control": NEW_VALUE}`.
The possible values are: `up`, `down`.

### Usage tips
- This is a roller shade motor that supports position control (0-100%).
- Reverse direction: Publish to `zigbee2mqtt/FRIENDLY_NAME/set` with `{"motor_reverse": true/false}` (if you exposed it).
- Calibration: This units need manual limit setting via the physical buttons.

### Pictures
![Front view](public/images/devices/RM28-LE.png)

<!-- Notes END -->
