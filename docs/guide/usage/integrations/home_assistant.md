---
sidebar: auto
---

# Home Assistant

## MQTT discovery
The easiest way to integrate Zigbee2MQTT with Home Assistant is by
using [MQTT discovery](https://www.home-assistant.io/docs/mqtt/discovery/).
This allows Zigbee2MQTT to automatically add devices to Home Assistant.

To achieve the best possible integration (including MQTT discovery):
- In your **Zigbee2MQTT** `configuration.yaml` set `homeassistant: true`
- Enable the [MQTT integration](https://www.home-assistant.io/integrations/mqtt/) in Home Assistant

## Device/group page
Since Home Assistant 2021.11 the device/group page in Home Assistant can directly link to the frontend (*Visit device* button).
To enable this set the `url` in the [frontend](../../configuration/frontend.md) configuration.

## Home Assistant device registry
When using Home Assistant MQTT discovery, Zigbee2MQTT integrates
with the [Home Assistant device registry](https://developers.home-assistant.io/docs/en/device_registry_index.html).
This allows you to change the Home Assistant `entity_id` and `friendly_name` from the Home Assistant web interface
without having to restart Home Assistant. It also makes it possible to show which entities belong to which device.

![Changing name and device ID via web interface](../../../images/home_assistant_change_name.png)

![Device registry](../../../images/home_assistant_device_registry.png)

## Customizing discovery
The device specific configuration allows you to modify the discovery payload. Here you can also prevent a device from being discovered. See [Device specific configuration](../../configuration/) for the available options.

## Responding to button clicks
To respond to button clicks (e.g. WXKG01LM) you can use one of the following three Home Assistant configurations.

### Via MQTT device trigger (recommended)
[MQTT device trigger](https://www.home-assistant.io/integrations/device_trigger.mqtt/) is the recommended way to respond to button clicks.
The MQTT device triggers are discovered by Zigbee2MQTT **once the event is triggered on the device at least once**.

```yaml
automation:
  - alias: Respond to button click
    trigger:
    - device_id: ad44cabee4c646f493814306aa6446e1
      discovery_id: 0x000b57fffecb472d action_arrow_left_click
      domain: mqtt
      platform: device
      subtype: arrow_left_click
      type: action
    action:
      entity_id: light.my_bulb_light
      service: light.toggle
```

If you only plan to use this and want to disable the *Via Home Assistant entity* integration below, set `homeassistant: {legacy_triggers: false}` (see [Configuration](../../configuration/homeassistant.md) for more info).

### Via Home Assistant entity
This method work by responding to the state change event of a sensor.

```yaml
automation:
  - alias: Respond to button click
    trigger:
      platform: state
      entity_id: sensor.my_switch_click
      to: 'single'
    action:
      entity_id: light.my_bulb_light
      service: light.toggle
```

### Via MQTT
As an alternative to the above way of integrating, you can also listen to MQTT topics.

```yaml
automation:
  - alias: Respond to button clicks
    trigger:
      platform: mqtt
      topic: 'zigbee2mqtt/<FRIENDLY_NAME'
    condition:
      condition: template
      value_template: '{{ "single" == trigger.payload_json.click }}'
    action:
      entity_id: light.bedroom
      service: light.toggle
```

## Groups
Groups discovery is supported for groups of lights, switches, locks and covers. For other types you have to manually create a config in the Home Assistant `configuration.yaml`.

## Exposing switch as a light
If your device is currently discovered as a switch and you want to discover it as a light, the following config in the Zigbee2MQTT `configuration.yaml` can be used:

```yaml
devices:
  "0x12345678":
    friendly_name: my_switch
    homeassistant:
      switch:
        type: light
        object_id: light
      light:
        name: my_switch
        value_template: null
        state_value_template: '{{ value_json.state }}'
      # OR if your devices has multiple endpoints (e.g. left/right)
      switch_left:
        type: light
        object_id: light_left
      light_left:
        name: my_switch_left
        value_template: null
        state_value_template: '{{ value_json.state_left }}'
      switch_right:
        type: light
        object_id: light_right
      light_right:
        name: my_switch_right
        value_template: null
        state_value_template: '{{ value_json.state_right }}'
```

If you are also using device specific overrides, make sure that they are configured under the new device type rather than the original device type.

## Using a custom name for the device and entities
In order to get a more readable name for the device and entities in Home Assistant, a specific name for Home Assistant can be set in the device configuration. If set, this name will be used instead of `friendly_name`.

```yaml
devices:
  "0x12345678":
    friendly_name: living_room/temperature_sensor
    homeassistant:
      name: Living Room Temperature Sensor
```

## Overriding discovery properties

Any Home Assistant MQTT discovery property can be overridden on a device. This is useful for switching light bulbs from reporting values from X/Y (which is mandatory in the ZCL specification) to reporting in hue / saturation (which is what Philips Hue bulbs report color in).

This example changes a [light's `supported_color_modes` discovery property](https://www.home-assistant.io/integrations/light.mqtt/#supported_color_modes) to hue / saturation and color temperature:

```yaml
devices:
  "0x12345678":
    friendly_name: my_light
    homeassistant:
      light:
        supported_color_modes: ['hs','color_temp']
```

For a full and current list of discovery properties, see [the Home Assistant MQTT Discovery integration](https://www.home-assistant.io/docs/mqtt/discovery/) and [the Home Assistant extension](https://github.com/Koenkk/zigbee2mqtt/blob/03ba647dc6b5f299f8f3ab441712999fcb3a253e/lib/extension/homeassistant.ts) in the zigbee2mqtt source code.

## Controlling Zigbee2MQTT via Home Assistant
The following Home Assistant configuration allows you to control Zigbee2MQTT from Home Assistant.

You can add it to the appropriate section of your `configuration.yaml`, or you can add it as a [Home Assistant Package](https://www.home-assistant.io/docs/configuration/packages/) by adding the following to `zigbee2mqtt.yaml` in your packages folder.

```yaml
# Input select for Zigbee2MQTT debug level
input_select:
  zigbee2mqtt_log_level:
    name: Zigbee2MQTT Log Level
    options:
      - debug
      - info
      - warn
      - error
    initial: info
    icon: mdi:format-list-bulleted

# Input number for joining time remaining (in minutes)
input_number:
  zigbee2mqtt_join_minutes:
    name: "Zigbee2MQTT join minutes"
    initial: 2
    min: 1
    max: 5
    step: 1
    mode: slider

# Input text to input Zigbee2MQTT friendly_name for scripts
input_text:
  zigbee2mqtt_old_name:
    name: Zigbee2MQTT Old Name
    initial: ""
  zigbee2mqtt_new_name:
    name: Zigbee2MQTT New Name
    initial: ""
  zigbee2mqtt_remove:
    name: Zigbee2MQTT Remove
    initial: ""

# Input boolean to set the force remove flag for devices
input_boolean:
  zigbee2mqtt_force_remove:
    name: Zigbee2MQTT Force Remove
    initial: false
    icon: mdi:alert-remove

# Scripts for renaming & removing devices
script:
  zigbee2mqtt_rename:
    alias: Zigbee2MQTT Rename
    sequence:
      service: mqtt.publish
      data_template:
        topic: zigbee2mqtt/bridge/request/device/rename
        payload_template: >-
          {
            "from": "{{ states.input_text.zigbee2mqtt_old_name.state | string }}",
            "to": "{{ states.input_text.zigbee2mqtt_new_name.state | string }}"
          }
  zigbee2mqtt_remove:
    alias: Zigbee2MQTT Remove
    sequence:
      service: mqtt.publish
      data_template:
        topic: zigbee2mqtt/bridge/request/device/remove
        payload_template: >-
          {
            "id": "{{ states.input_text.zigbee2mqtt_remove.state | string }}",
            "force": {% if states.input_boolean.zigbee2mqtt_force_remove.state == "off" %}false{% else %}true{% endif %}
          }

# Timer for joining time remaining (254 sec)
timer:
  zigbee_permit_join:
    name: Time remaining
    duration: 254

mqtt:
  sensor:
    # Sensor for monitoring the bridge state
    - name: Zigbee2MQTT Bridge state
      unique_id: zigbee2mqtt_bridge_state_sensor
      state_topic: "zigbee2mqtt/bridge/state"
      icon: mdi:router-wireless
    # Sensor for Showing the Zigbee2MQTT Version
    - name: Zigbee2MQTT Version
      unique_id: zigbee2mqtt_version_sensor
      state_topic: "zigbee2mqtt/bridge/info"
      value_template: "{{ value_json.version }}"
      icon: mdi:zigbee
    # Sensor for Showing the Coordinator Version
    - name: Zigbee2MQTT Coordinator Version
      unique_id: zigbee2mqtt_coordinator_version_sensor
      state_topic: "zigbee2mqtt/bridge/info"
      value_template: "{{ value_json.coordinator.meta.revision }}"
      icon: mdi:chip
    - name: Zigbee2mqtt Networkmap
      unique_id: zigbee2mqtt_networkmap_sensor
      # if you change base_topic of Zigbee2mqtt, change state_topic accordingly
      state_topic: zigbee2mqtt/bridge/networkmap/raw
      value_template: >-
        {{ now().strftime('%Y-%m-%d %H:%M:%S') }}
      # again, if you change base_topic of Zigbee2mqtt, change json_attributes_topic accordingly
      json_attributes_topic: zigbee2mqtt/bridge/networkmap/raw
    
  # Switch for enabling joining
  switch:
    - name: "Zigbee2MQTT Main join"
      unique_id: zigbee2mqtt_main_join_switch
      state_topic: "zigbee2mqtt/bridge/info"
      value_template: '{{ value_json.permit_join | lower }}'
      command_topic: "zigbee2mqtt/bridge/request/permit_join"
      payload_on: "true"
      payload_off: "false"

automation:
  # Automation for sending MQTT message on input select change
  - alias: Zigbee2MQTT Log Level
    initial_state: "on"
    trigger:
      platform: state
      entity_id: input_select.zigbee2mqtt_log_level
    action:
      - service: mqtt.publish
        data:
          payload_template: "{{ states('input_select.zigbee2mqtt_log_level') }}"
          topic: zigbee2mqtt/bridge/request/config/log_level
  # Automation to start timer when enable join is turned on
  - id: zigbee_join_enabled
    alias: Zigbee Join Enabled
    trigger:
      platform: state
      entity_id: switch.zigbee2mqtt_main_join
      to: "on"
    action:
      service: timer.start
      entity_id: timer.zigbee_permit_join
      data_template:
        duration: "{{ '00:0%i:00' % (states('input_number.zigbee2mqtt_join_minutes') | int ) }}"
  # Automation to stop timer when switch turned off and turn off switch when timer finished
  - id: zigbee_join_disabled
    alias: Zigbee Join Disabled
    trigger:
      - platform: event
        event_type: timer.finished
        event_data:
          entity_id: timer.zigbee_permit_join
      - platform: state
        entity_id: switch.zigbee2mqtt_main_join
        to: "off"
    action:
      - service: timer.cancel
        data:
          entity_id: timer.zigbee_permit_join
      - service: switch.turn_off
        entity_id: switch.zigbee2mqtt_main_join
  - id: "zigbee2mqtt_create_notification_on_successful_interview"
    alias: Zigbee Device Joined Notification
    trigger:
      platform: mqtt
      topic: 'zigbee2mqtt/bridge/event'
    condition:
      condition: template
      value_template: '{{trigger.payload_json.type == "device_interview" and trigger.payload_json.data.status == "successful" and trigger.payload_json.data.supported}}'
    action:
      - service: persistent_notification.create
        data_template:
          title: Device joined the Zigbee2MQTT network
          message: "Name: {{trigger.payload_json.data.friendly_name}},
                    Vendor: {{trigger.payload_json.data.definition.vendor}},
                    Model: {{trigger.payload_json.data.definition.model}},
                    Description: {{trigger.payload_json.data.definition.description}}"

```

The following is an example lovelace card configuration.


```yaml
title: Zigbee2MQTT
type: entities
show_header_toggle: false
entities:
  - entity: sensor.zigbee2mqtt_bridge_state
  - entity: sensor.zigbee2mqtt_version
  - entity: sensor.zigbee2mqtt_coordinator_version
  - entity: input_select.zigbee2mqtt_log_level
  - type: divider
  - entity: switch.zigbee2mqtt_main_join
  - entity: input_number.zigbee2mqtt_join_minutes
  - entity: timer.zigbee_permit_join
  - type: divider
  - entity: input_text.zigbee2mqtt_old_name
  - entity: input_text.zigbee2mqtt_new_name
  - entity: script.zigbee2mqtt_rename
  - type: divider
  - entity: input_text.zigbee2mqtt_remove
  - entity: input_boolean.zigbee2mqtt_force_remove
  - entity: script.zigbee2mqtt_remove
```


## Zigbee Network Map (Custom Card)
[Zigbee Network Map Home Assistant Custom Card](https://github.com/azuwis/zigbee2mqtt-networkmap/).
