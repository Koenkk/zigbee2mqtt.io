---
sidebar: auto
---

# Home Assistant

## MQTT discovery（MQTT 自动发现）

将 Zigbee2MQTT 与 Home Assistant 集成的最简单方法是使用
[MQTT discovery](https://www.home-assistant.io/integrations/mqtt#mqtt-discovery)。
这可以让 Zigbee2MQTT 自动将设备添加到 Home Assistant 中。

为了实现最佳的集成效果（包括 MQTT discovery）：

- 在 **Zigbee2MQTT** 的 `configuration.yaml` 中设置：

    ```yaml
    homeassistant:
        enabled: true
    ```

- 在 Home Assistant 中启用 [MQTT 集成](https://www.home-assistant.io/integrations/mqtt/)

## 设备/组页面

从 Home Assistant 2021.11 版本起，Home Assistant 中的设备/组页面可以直接链接到前端界面（frontend）（_Visit device_ 按钮）。
要启用此功能，请在 [frontend](../../configuration/frontend.md) 配置中设置 `url`。

## Home Assistant 设备注册表

在使用 Home Assistant MQTT discovery 时，Zigbee2MQTT 会与
[Home Assistant 设备注册表](https://developers.home-assistant.io/docs/en/device_registry_index.html)集成。
这使你可以在 Home Assistant 网页界面中修改 Home Assistant 的 `entity_id` 和 `friendly_name`，
而无需重启 Home Assistant。它还可以显示哪些实体属于哪个设备。

![通过网页界面修改名称和设备 ID](/images/home_assistant_change_name.png)

![设备注册表](/images/home_assistant_device_registry.png)

## 自定义 discovery

设备专属配置允许你修改 discovery 的 payload 内容。你也可以在这里阻止某个设备被发现。可用选项请参见[设备专属配置](../../configuration/devices-groups.html#specific-device-options)。

## 响应按钮动作

要响应按钮动作，你可以使用以下几种 Home Assistant 配置方式之一。

### 通过 MQTT device trigger（推荐）

**只要设备上的事件至少被触发过一次**，[MQTT device triggers](https://www.home-assistant.io/integrations/device_trigger.mqtt/) 就会被 Zigbee2MQTT 发现。

```yaml
automation:
    - alias: Respond to button click
      triggers:
          - trigger: device
            domain: mqtt
            device_id: ad44cabee4c646f493814306aa6446e1
            type: action
            subtype: arrow_left_click
      actions:
          - action: light.toggle
            target:
                entity_id: light.bedroom
```

### 通过 Home Assistant 的 `event` 实体（实验性）

注意：`event` 实体是**实验性**功能，未来可能会**发生不兼容变更**。

这种方式通过响应 [`event` 实体](https://www.home-assistant.io/integrations/event)的状态变化来工作。可以通过 `event_type` 属性来指定具体的事件。在该实现最终定型之前，事件类型及其附加属性可能会发生变化，你需要通过设置 `homeassistant: {experimental_event_entities: true}` 来显式启用 `event` 实体（更多信息请参见[配置](../../configuration/homeassistant.md)）。

```yaml
automation:
    - alias: Respond to button click
      triggers:
          - trigger: state
            entity_id: event.my_switch_click
            to: ~
      conditions:
          - condition: template
            value_template: "{{trigger.from_state.state != 'unavailable'}}"
          - condition: template
            value_template: "{{trigger.to_state.attributes.event_type == 'single'}}"
      actions:
          - action: light.toggle
            target:
                entity_id: light.bedroom
```

### 通过 Home Assistant action 传感器（已弃用）

这种方式通过响应某个传感器的状态变化事件来工作。为此需要在你的 `configuration.yaml` 中设置 `homeassistant.legacy_action_sensor: true`。更多信息请参见[文档](../../configuration/homeassistant.md)。

::: warning
请注意，此功能已被弃用，未来将被移除。建议改用 MQTT device trigger。
:::

```yaml
automation:
    - alias: Respond to button action
      trigger:
          platform: state
          entity_id: sensor.my_switch_action
          to: 'single'
      action:
          entity_id: light.my_bulb_light
          service: light.toggle
```

## 组（Group）

对于灯、开关、锁和窗帘类型的组，支持 discovery。对于其他类型，你需要在 Home Assistant 的 `configuration.yaml` 中手动创建配置。
组的 discovery 属性可以通过 Zigbee2MQTT 配置中的 `groups.<id>.homeassistant` 来覆盖。

## 覆盖 discovery 属性

任何 Home Assistant MQTT discovery 属性都可以针对某个设备进行覆盖。下面展示了两个示例。完整且最新的 discovery 属性列表，请参见 [Home Assistant MQTT Discovery 集成文档](https://www.home-assistant.io/integrations/mqtt/#mqtt-discovery)以及 Zigbee2MQTT 源码中的[Home Assistant 扩展](https://github.com/Koenkk/zigbee2mqtt/blob/03ba647dc6b5f299f8f3ab441712999fcb3a253e/lib/extension/homeassistant.ts)。

### 修改 `supported_color_modes`

这在将灯泡的取色方式从默认的 X/Y 上报切换为色相/饱和度（hue / saturation）上报时很有用（当通过 `hue_move` 和 `saturation_move` 之类的命令改变颜色时，灯泡就是以色相/饱和度来上报颜色的）。

以下示例将某个[灯的 `supported_color_modes` discovery 属性](https://www.home-assistant.io/integrations/light.mqtt/#supported_color_modes)修改为色相/饱和度和色温：

```yaml
devices:
    '0x12345678':
        friendly_name: my_light
        homeassistant:
            light:
                supported_color_modes: ['hs', 'color_temp']
```

### 将开关暴露为灯

如果你的设备当前被发现为开关（switch），而你想将它发现为灯（light），可以在 Zigbee2MQTT 的 `configuration.yaml` 中使用以下配置：

```yaml
devices:
    '0x12345678':
        friendly_name: my_switch
        homeassistant:
            switch:
                type: light
                object_id: light
            light:
                name: null
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

### 修改设备属性

作为一个进阶示例，用于展示如何覆盖任意 MQTT 属性，以下配置修改了 `device` 的 `suggested_area` 属性。该示例说明，你可以直接把给定的 MQTT discovery 层级结构复制到 `homeassistant` 属性下面（因为 `suggested_area` 位于 `device` 属性之下）。请注意，其他 `device` 属性可能已经由 Zigbee2MQTT 设置了（例如 `manufacturer`）。

以下示例将[灯的设备 `suggested area` discovery 属性](https://www.home-assistant.io/integrations/light.mqtt/#device)修改为 "Living Room"：

```yaml
devices:
    '0x12345678':
        friendly_name: my_light
        homeassistant:
            device:
                suggested_area: 'Living Room'
```

## 为设备和实体使用自定义名称

为了在 Home Assistant 中为设备和实体获得更易读的名称，可以在设备配置中为 Home Assistant 设置一个专用名称。如果设置了该名称，将会使用它来代替 `friendly_name`。

```yaml
devices:
    '0x12345678':
        friendly_name: living_room/temperature_sensor
        homeassistant:
            name: Living Room Temperature Sensor
```

## 通过 Home Assistant 控制 Zigbee2MQTT

以下 Home Assistant 配置可以让你从 Home Assistant 控制 Zigbee2MQTT。

你可以将其添加到 `configuration.yaml` 的相应部分，或者将它作为一个 [Home Assistant Package](https://www.home-assistant.io/docs/configuration/packages/)，添加到你的 packages 文件夹下的 `zigbee2mqtt.yaml` 中。

```yaml
# Input number for joining time remaining (in minutes)
input_number:
    zigbee2mqtt_join_minutes:
        name: 'Zigbee2MQTT join minutes'
        initial: 2
        min: 1
        max: 5
        step: 1
        mode: slider

# Input text to input Zigbee2MQTT friendly_name for scripts
input_text:
    zigbee2mqtt_new_name:
        name: Zigbee2MQTT New Name
        initial: ''
        icon: 'mdi:moon-new'

# Input select for choosing Zigbee2MQTT devices
input_select:
    zigbee2mqtt_old_name_select:
        name: Zigbee2MQTT Old Name
        icon: 'mdi:moon-full'
        options:
            - Initial Option
    zigbee2mqtt_remove_select:
        name: Zigbee2MQTT Remove
        icon: 'mdi:trash-can'
        options:
            - Initial Option

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
        icon: 'mdi:pencil'
        sequence:
            - action: mqtt.publish
              data:
                  topic: zigbee2mqtt/bridge/request/device/rename
                  payload: >-
                      {
                        "from": "{{ states('input_select.zigbee2mqtt_old_name_select') }}",
                        "to": "{{ states('input_text.zigbee2mqtt_new_name') }}"
                      }
    zigbee2mqtt_remove:
        alias: Zigbee2MQTT Remove
        icon: 'mdi:trash-can'
        sequence:
            - action: mqtt.publish
              data:
                  topic: zigbee2mqtt/bridge/request/device/remove
                  payload: >-
                      {
                        "id": "{{ states('input_select.zigbee2mqtt_remove_select') }}",
                        "force": {{ 'true' if is_state('input_boolean.zigbee2mqtt_force_remove', 'on') else 'false' }}
                      }

automation:
    - id: 'zigbee2mqtt_create_notification_on_successful_interview'
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
                message: 'Name: {{trigger.payload_json.data.friendly_name}},
                    Vendor: {{trigger.payload_json.data.definition.vendor}},
                    Model: {{trigger.payload_json.data.definition.model}},
                    Description: {{trigger.payload_json.data.definition.description}}'

    - id: 'zigbee2mqtt_update_devices_list'
      alias: Update Zigbee Devices List
      description: ''
      trigger:
          - platform: mqtt
            topic: zigbee2mqtt/bridge/event
          - platform: mqtt
            topic: zigbee2mqtt/bridge/response/device/rename
          - platform: homeassistant
            event: start
      condition: []
      action:
          - delay:
                hours: 0
                minutes: 0
                seconds: 1
                milliseconds: 0
          - service: input_select.set_options
            metadata: {}
            data:
                options: |
                    {%- set find_integration = 'mqtt' %}
                     {%- set devices = states | map(attribute='entity_id') | map('device_id') | unique | reject('eq',None) | list %}
                     {%- set ns = namespace(entities = []) %}
                     {%- for device in devices if device_attr(device, 'identifiers') %}
                       {%- set ids = device_attr(device, 'identifiers') | list | first %}
                       {%- if ids and ids | length == 2 and ids[0] == find_integration and "zigbee2mqtt" in ids[1] %}
                         {% set names = device_attr(device, 'name').split('\n') | list %}
                         {%- set ns.entities = ns.entities + names %}
                       {%- endif %}
                     {%- endfor %}
                     {{ ns.entities | unique | sort | list}}
            target:
                entity_id:
                    - input_select.zigbee2mqtt_old_name_select
                    - input_select.zigbee2mqtt_remove_select
          - service: input_text.set_value
            metadata: {}
            data:
                value: ''
            target:
                entity_id: input_text.zigbee2mqtt_new_name
      mode: single
```

下面是一个 lovelace 卡片配置的示例。

```yaml
title: Zigbee2MQTT
type: entities
show_header_toggle: false
entities:
    - entity: binary_sensor.zigbee2mqtt_bridge_connection_state
    - entity: sensor.zigbee2mqtt_bridge_version
    - entity: sensor.zigbee2mqtt_bridge_coordinator_version
    - type: divider
    - entity: switch.zigbee2mqtt_bridge_permit_join
    - entity: input_number.zigbee2mqtt_join_minutes
    - type: divider
    - entity: input_select.zigbee2mqtt_old_name_select
    - entity: input_text.zigbee2mqtt_new_name
    - entity: script.zigbee2mqtt_rename
    - type: divider
    - entity: input_select.zigbee2mqtt_remove_select
    - entity: input_boolean.zigbee2mqtt_force_remove
    - entity: script.zigbee2mqtt_remove
```

## Zigbee 网络拓扑图（自定义卡片）

[Zigbee Network Map Home Assistant Custom Card](https://github.com/azuwis/zigbee2mqtt-networkmap/)。
