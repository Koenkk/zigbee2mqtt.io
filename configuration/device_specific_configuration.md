# Device specific configuration
The `configuration.yaml` allows to set device specific configuration. The following options are available.

## All devices
* `friendly_name`: Used in the MQTT topic of a device. By default this is the device ID (e.g. `0x00128d0001d9e1d2`).
* `retain`: Retain MQTT messages of this device.
* `qos`: QoS level for MQTT messages of this device. [What is QoS?](https://www.npmjs.com/package/mqtt#about-qos)
* `homeassistant`: Allows to override values of the Home Assistant discovery payload. See example below.
* `debounce`: Debounces messages of this device. When setting e.g. `debounce: 1` and a message from a device is recieved, zigbee2mqtt will not immediately publish this message but combine it with other messages received in that same second of that device. This is handy for e.g. the `WSDCGQ11LM` which publishes humidity, temperature and pressure at the same time but as 3 different messages.
* `retrieve_state`: Retrieves the state after setting it. Should only be enabled when the [reporting feature](../information/report.md) does not work for this device.

## Device specific

### RTCGQ01LM, RTCGQ11LM and AV2010/22
* `occupancy_timeout`: Timeout (in seconds) after the `occupancy: false` message is sent, only available for occupany sensors. If not set, the timeout is `90` seconds. When set to `0` no `occupancy: false` is send.

### RTCGQ01LM, RTCGQ11LM
* `no_occupancy_since`: Timeout (in seconds) after `no_occupancy_since` is send. This indicates the time since last occupancy was detected. For example `no_occupancy_since: [10, 60]` will send a `{"no_occupancy_since": 10}` after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds.

### WXKG01LM
* `long_timeout`: The WXKG01LM only reports a button press and release. By default, Zigbee2mqtt publishes a long click when there is at least 1000 ms between both events. It could be that due to delays in the network the release message is received late. This causes a single click to be identified as a long click. If you are experiencing this you can try experimenting with this option (e.g. `long_timeout: 2000`).

### Temperature, humidity and pressure devices
* `temperature_precision`: Controls the precision of `temperature` values, e.g. `0`, `1` or `2`; default `2`.
* `humidity_precision`: Controls the precision of `humidity` values, e.g. `0`, `1` or `2`; default `2`.
* `pressure_precision`: Controls the precision of `pressure` values, e.g. `0` or `1`; default `1`.

## Example
``` yaml
devices:
  '0x00158d0001d82999':
    friendly_name: 'my_occupancy_sensor'
    retain: true
    occupancy_timeout: 20
    no_occupancy_since: [10, 600]
    qos: 1
    debounce: 0.5
    retrieve_state: false
    homeassistant:
      # Applied to all discovered entities.
      expire_after: 30
      # Only applied to discovered temperature sensor.
      temperature:
        icon: mdi:oil-temperature
```

### Changing device type specific defaults
The default values used for the device specific configuration can be overriden via e.g.:

```yaml
device_options:
  occupancy_timeout: 30
  temperature_precision: 1
```
