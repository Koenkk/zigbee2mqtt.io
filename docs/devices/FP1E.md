<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join. If this doesn't work, try with a single short button press.

<!-- Notes END: Do not edit below this line -->
## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"presence": ""}`.
It is not possible to write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Movement (enum)
Indicates the kind of movement detected.
Value can be found in the published state on the `movement` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"movement": ""}`.
It is not possible to write (`/set`) this value.
The possible values are: `no_presence`, `movement`, `no_movement`.

### Target distance (numeric)
Indicates the distance to the detected target.
Value can be found in the published state on the `target_distance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"target_distance": ""}`.
It is not possible to write (`/set`) this value.
The unit of this value is `m`.

### Detection range (numeric)
The maximum distance at which the sensor detects motion.
Value can be found in the published state on the `detection_range` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"detection_range": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_range": NEW_VALUE}`.
The unit of this value is `m`.

### Motion sensitivity (enum)
Different sensitivities means different static human body recognition rate and response speed of occupied.
Value can be found in the published state on the `motion_sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motion_sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### AI spatial learning (enum)
Initiate AI spatial learning.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"spatial_learning": NEW_VALUE}`.
The possible values are: ``.

### Restart device (enum)
Restart the device.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"restart_device": NEW_VALUE}`.
The possible values are: ``.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It is not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Power outage count (numeric)
Number of power outages (since last pairing).
Value can be found in the published state on the `power_outage_count` property.
It is not possible to read (`/get`) or write (`/set`) this value.

<!-- Notes END -->
