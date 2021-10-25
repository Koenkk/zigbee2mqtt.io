---
sidebarDepth: 1
---

# Devices and Groups




```yaml
# Optional: see 'Device specific configuration' below
device_options: {}
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

In case you want to specify devices and groups in a separate file, the following configuration can be used (equivalent
of the above example).

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

```yaml
# Optional: see 'Device specific configuration' below
device_options: {}
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

In case you want to specify devices and groups in a separate file, the following configuration can be used (equivalent
of the above example).

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

## Device specific configuration

The `configuration.yaml` allows to set device specific configuration. This can also be used in combination with groups.
The following options are available.

### All devices

* `friendly_name`: Used in the MQTT topic of a device. By default this is the device ID (e.g. `0x00128d0001d9e1d2`).
* `retain`: Retain MQTT messages of this device (default `false`).
* `retention`: Sets the MQTT Message Expiry in seconds e.g. `retention: 900` = 15 minutes (default: not enabled). Make
  sure to set `mqtt.version` to `5` (see `mqtt` configuration above)
* `qos`: QoS level for MQTT messages of this device. [What is QoS?](https://www.npmjs.com/package/mqtt#about-qos)
* `homeassistant`: Allows to override values of the Home Assistant discovery payload. See example below.
* `debounce`: Debounces messages of this device. When setting e.g. `debounce: 1` and a message from a device is
  received, Zigbee2MQTT will not immediately publish this message but combine it with other messages received in that
  same second of that device. This is handy for e.g. the `WSDCGQ11LM` which publishes humidity, temperature and pressure
  at the same time but as 3 different messages.
* `debounce_ignore` Protects unique payload values of specified payload properties from overriding within debounce time.
  When setting e.g. `debounce: 1` and `debounce_ignore: - action` every payload with unique `action` value will be
  published. This is handy for e.g. the `E1744` which publishes multiple messages in short time period after one turn
  and `debounce` option without `debounce_ignore` publishes only last payload with action `rotate_stop`. On the other
  hand `debounce: 1` with `debounce_ignore: - action` will publish all unique action messages, at least two (
  e.g. `action: rotate_left` and `action: rotate_stop`)
* `retrieve_state`: (DEPRECATED) Retrieves the state after setting it. Should only be enabled when the reporting feature
  does not work for this device.
* `filtered_attributes`: Allows to prevent certain attributes from being published. When a device would e.g.
  publish `{"temperature": 10, "battery": 20}` and you set `filtered_attributes: ["battery"]` it will
  publish `{"temperature": 10}`.
* `optimistic`: Publish optimistic state after set, e.g. when a brightness change command succeeds Zigbee2MQTT assumes
  the brightness of the device changed and will publish this (default `true`).
* `filtered_optimistic`: Same as the `filtered_attributes` option but only applies to the optimistic published
  attributes. Has no effect when `optimistic: false` is set. Example: `filtered_optimistic: ["color_mode", "color"]`.

### Device type specific

Some devices support device type specific configuration, e.g. [RTCGQ11LM](../../devices/RTCGQ11LM.md). To see if your
device has device type specific configuration, visit the device page by going
to [Supported devices](../../supported-devices/) and clicking on the model number.



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
