---
---
# Device specific configuration
The `configuration.yaml` allows to set device specific configuration. The following options are available.

## All devices
* `friendly_name`: Used in the MQTT topic of a device. By default this is the device ID (e.g. `0x00128d0001d9e1d2`).
* `retain`: Retain MQTT messages of this device.
* `qos`: QoS level for MQTT messages of this device. [What is QoS?](https://www.npmjs.com/package/mqtt#about-qos)
* `homeassistant`: Allows to override values of the Home Assistant discovery payload. See example below.
* `debounce`: Debounces messages of this device. When setting e.g. `debounce: 1` and a message from a device is received, zigbee2mqtt will not immediately publish this message but combine it with other messages received in that same second of that device. This is handy for e.g. the `WSDCGQ11LM` which publishes humidity, temperature and pressure at the same time but as 3 different messages.
* `retrieve_state`: Retrieves the state after setting it. Should only be enabled when the [reporting feature](../information/report.md) does not work for this device.

## Device type specific
Some devices support device type specific configuration, e.g. [RTCGQ11LM](../devices/RTCGQ11LM). To see if your device has device type specific configuration, visit the device page by going to [Supported devices](../information/supported_devices.md) and clicking on the model number.

### Changing device type specific defaults
The default values used for the device specific configuration can be overriden via e.g.:

```yaml
device_options:
  occupancy_timeout: 130
  temperature_precision: 1
```

## Example
``` yaml
devices:
  '0x00158d0001d82999':
    friendly_name: 'my_occupancy_sensor'
    retain: true
    qos: 1
    debounce: 0.5
    retrieve_state: false
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


