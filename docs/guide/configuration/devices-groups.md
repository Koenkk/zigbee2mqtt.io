---
sidebarDepth: 1
---

# Devices and Groups

Zigbee2MQTT also stores the definitions of Devices and Groups in the `configuration.yml`.

Most options are optional, only the IEEE address (or MAC) as the `key` and a `friendly_name` are required.

```yaml
devices:
    # First device
    '0x00158d0001d82999':
        friendly_name: 'my_occupancy_sensor'
        retain: true
        disabled: false
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
    # Another device
    '0x000d6ffffee405eb':
        friendly_name: 'Kitchen bulb'
```

## Common device options

Every Zigbee Device supports the following list of options.

**`friendly_name`**  
Used in the MQTT topic of a device. By default, this is the device ID (e.g. `0x00128d0001d9e1d2`).

::: tip
You can use the `/` separator in `friendly_name` to structure devices.
For example, using a `friendly_name` like `kitchen/floor_light` would result in a corresponding MQTT structure with `kitchen` as folder containing `floor_light` in MQTT Explorer.
:::

::: warning
Note that a `friendly_name` is **NOT** allowed to end with `/`, `/` + one of the possible [endpoint names](https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/util/utils.ts#L30) (e.g. `/left`) or `/` + a number (e.g. `/4`).
:::

**`description`**  
Description of this device, e.g. `This device is in the kitchen`, will be shown in the frontend.

**`retain`**  
Retain MQTT messages of this device (default `false`).

**`disabled`**  
Disables the device. This **does not** prevent the device from communicating in the Zigbee network. E.g. when messages are received from this device, Zigbee2MQTT will still publish them. This feature is useful for devices which will be disconnected from the Zigbee network for a longer time (like Christmas lights). Disabling a device does the following:

-   The availability feature will not try to ping it
-   The device is always marked as `unavailable` in Home Assistant
-   It will not be configured on Zigbee2MQTT startup (required for some devices in order to start working)
-   It will be excluded from network scans (network map)
-   It will be excluded from optimistic group state updates

**`retention`**  
Sets the MQTT Message Expiry in seconds e.g. `retention: 900` = 15 minutes (default: not enabled). Make
sure to set `mqtt.version` to `5` (see `mqtt` configuration above)

**`qos`**  
QoS level for MQTT messages of this device. [What is QoS?](https://www.npmjs.com/package/mqtt#about-qos)

**`homeassistant`**  
Allows overriding the values of the Home Assistant discovery payload. See example below.

**`debounce`**  
Debounces messages of this device. When setting e.g. `debounce: 1` and a message from a device is
received, Zigbee2MQTT will not immediately publish this message. But it will combine it with other messages that are received max 1
seconds apart from each other. So there needs to be "N second of silence" from the device before the combined message is sent out.

For example `debounce: 5` means that there needs to be "5 seconds of silence" from the device, before combined messages is sent out.

This is handy for e.g. the `WSDCGQ11LM` which publishes humidity, temperature and pressure
at the same time but as 3 different messages.

Don't configure debounce to be higher that sensors update interval as that would cause all the messages to be debouncer and messages won't be sent out at all.

**`debounce_ignore`**  
Protects unique payload values of specified payload properties from overriding within debounce time.
When setting e.g. `debounce: 1` and `debounce_ignore: - action` every payload with unique `action` value will be
published. This is handy for e.g. the `E1744` which publishes multiple messages in short time period after one turn
and `debounce` option without `debounce_ignore` publishes only last payload with action `rotate_stop`. On the other
hand `debounce: 1` with `debounce_ignore: - action` will publish all unique action messages, at least two (
e.g. `action: rotate_left` and `action: rotate_stop`)

**`retrieve_state`**  
(DEPRECATED) Retrieves the state after setting it. Should only be enabled when the reporting feature
does not work for this device.

**`filtered_attributes`**  
Allows preventing certain attributes from being published. When a device would e.g.
publish `{"temperature": 10, "battery": 20}` and you set `filtered_attributes: ["battery"]` it will
publish `{"temperature": 10}`.

**`filtered_cache`**
Allows preventing certain attributes from ending up in the cache.
This prevents attributes from being published when the value did not change.

**`optimistic`**  
The optimistic mode is a feature that influences how the state of a device is handled in the absence of updates. When optimistic mode is enabled for a device and the last sent command was successful, it updates the device state accordingly, even before receiving confirmation from the device itself (default `true`).

Enabled: If you send a command to turn on a light and the command was succesful, for example, Zigbee2MQTT will immediately update its internal state to reflect that the light is on. If the command fails, the state is not updated.

Disabled: Zigbee2MQTT will only update its internal state after the device reports the new state, regardless wether the command was succesful or not.

**`filtered_optimistic`**  
Same as the `filtered_attributes` option but only applies to the optimistic published
attributes. Has no effect when `optimistic: false` is set. Example: `filtered_optimistic: ["color_mode", "color"]`.

## Specific device options

Some Zigbee devices like the [RTCGQ11LM](../../devices/RTCGQ11LM.md) supports some special attributes.
To see if your device has device type specific configuration, visit the device page by going
to [Supported devices](../../supported-devices/) and clicking on the model number.

In the above example `occupancy_timeout` and `no_occupancy_since` are device specific options.

## Default values

You can set default values which are applied to all devices if the devices does not explicitly set the value in the device block. You can also set defaults for device-specific options.

```yaml
device_options:
    retain: true
    occupancy_timeout: 120
    no_occupancy_since: [10, 600]
```

## Groups

You can define groups of devices which are applied to the Zigbee network. Also see the [Groups guide](../usage/groups.md).

```yaml
groups:
    '1':
        friendly_name: Kitchen lights
        # Optional: Retain messages (true/false) (default: false)
        retain: false
        # Optional: Default transition to be used when e.g. changing brightness (in seconds) (default: 0)
        transition: 2
        # Optional: Change group state when one of the devices in it changes state, see 'State changes' below (default: true)
        optimistic: true
        # Optional: Devices of this group,
        # Note: This can be the ieeeAddr of the device or the friendly_name (default: empty)
        devices:
            - 0x84fd27fffe4082ca
            - 0x000b3cfffef8ed66
            # Only add specific endpoint to the group
            - 0x000d6ffffee405eb/1
            - 0x001788010818fc75
            - some_device_friendly_name
```

::: warning
The Group-key has to be unique and a quoted integer.
:::

## Extract config to separate files

Usually `devices` and `groups` are specified as objects within the `configuration.yaml` but it
is also possible to extract the configuration into separate files.

```yaml
# Define the files which contains the configs
devices: devices.yaml
groups: groups.yaml
```

```yaml
# devices.yaml
'0x00158d0001d82999':
    friendly_name: 'my_occupancy_sensor'
```

```yaml
# groups.yaml
'1':
    friendly_name: group_1
    devices:
        - 0x00158d0001d82999
```
