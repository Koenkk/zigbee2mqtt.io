---
title: "MiBoxer FUT089Z control via MQTT"
description: "Integrate your MiBoxer FUT089Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-04-30T08:00:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# MiBoxer FUT089Z

|     |     |
|-----|-----|
| Model | FUT089Z  |
| Vendor  | [MiBoxer](/supported-devices/#v=MiBoxer)  |
| Description | RGB+CCT Remote |
| Exposes | battery, voltage, action, linkquality |
| Picture | ![MiBoxer FUT089Z](https://www.zigbee2mqtt.io/images/devices/FUT089Z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To pair the device:
- Allow Zigbee2MQTT pairing
- Press the Master ON and OFF buttons simultaneously until the central red LED flashes quickly.

### Exposing the controls
By default, the controls of the remote are not exposed. This is due to the non-standard way the remote communicates.

In order to expose the controls, you need to:
- Open `Zigbee2MQTT` (the web interface)
- Go to the `Extensions` tab
- Click the `+`-button to add a new extension file
- Enter a name for the extension file, e.g.: `miboxer-fut089z-controls-exposer.js`
- Copy the contents of this file [controls-exposer.js](https://github.com/Koenkk/zigbee2mqtt-user-extensions/blob/main/stable/miboxer-fut089z/controls-exposer.js) (if it doesn't exist use this one instead: [controls-exposer.js](https://github.com/Koenkk/zigbee2mqtt-user-extensions/blob/main/unstable/miboxer-fut089z/controls-exposer.js)) and paste it into the extension file you just created
- Click the `Save` button

The controls of all your MiBoxer FUT089Z remotes are now properly exposed via MQTT and automatically show up in Home Assistant. (If you don't use Home Assistant, you probably have to subscribe to the appropriate MQTT topics. You'll find them in the extension code.)

Each MiBoxer FUT089Z remote shows up as a separate device in Home Assistant.  
By default they will report 3 sensors 
- `Battery` (%)
- `Voltage` (mV)
- `Linkquality` (lqi)

The extension adds 3 more sensors:
- `Brightness` (%)
- `Color Temperature` (mireds)
- `Color` (not implemented yet)

As well as on trigger for each button:
- button_group_1_on
- button_group_1_off
- ...
- button_group_8_on
- button_group_8_off

Example automation using a button:

``` YAML
alias: MiBoxerRemote1_Button_Group_8_On
description: ""
trigger:
  - platform: device
    domain: mqtt
    device_id: 37c0de12e46bb817b3ed5dcae834feee
    type: button_short_press
    subtype: button_group_8_on
    discovery_id: 0x003c84fffeb6a253_zone_8_button_on
condition: []
action:
  - service: light.turn_on
    data: {}
    target:
      device_id: 0887f3aa92fa71265fcb5f1d7021c2a7
mode: restart
```
(You can easily create them automatically by going to the Device in Home Assistant and adding an Automation from there.)

Example automation using the brightness slider:  
(If you create such an Automation automatically through the Device's page in Home Assistant, it will create a buggy `platform: device` automation, please use `platform: state` instead as shown blow.)
``` YAML
alias: MiBoxerRemote1_BrightnessSlider
description: ""
trigger:
  - platform: state
    entity_id:
      - sensor.none_brightness
condition: []
action:
  - service: light.turn_on
    data:
      brightness_pct: "{{ trigger.to_state.state }}"
      transition: 0.2
    target:
      device_id: 8984f2bd0c64baa8badb3fe895f7dd95
    enabled: true
mode: restart
```



Bugs:
- The Color Wheel control is currently not supported. (Problem is that the remote sends the last brightness value instead of the selected color value. Fixing probably requires reverse engineering th proprietary protocol. )
- The R, G, B and W buttons have the exact same issue as the color wheel.
- The Color Temperature Slider control doesn't work reliably. Sometimes it just sends the last brightness value (those messages are filtered out by the extension to avoid complications) and sometimes it just works. 

If you think you can help fixing the buggy controls, your best bet is probably to start [in this issue](https://github.com/Koenkk/zigbee2mqtt/issues/10708) where the initial reverse engineering efforts have been documented.

### Directly controlling ZigBee devices
Alternatively, or in addition to the approach mentioned above, you can also directly control ZigBee lights etc. with this remote.
The remote has 7 groups of on/off buttons, each button group controlling a different zone. In addition to that, the remote has an eighth button group consisting of the upper dedicated `ON` and `OFF` buttons corresponding to another zone.
Each zone is mapped to a different ZigBee group, which are currently hardcoded: Zone 1 is mapped to ZigBee group 101, Zone 2 to 102 and so forth...
This means that if you have multiple MiBoxer FUT089T remotes, they all control the same ZigBee groups (101-108). 

To directly control lights or smartplugs without going through MQTT (and Home Assistant or whatever), 
- first create a ZigBee group with the correct ID (10X), 
- name it like you wish,
- then add the devices you intend to control to that group (pay attention to use the right termination point).
  Very important: do NOT add the remote itself to the group.

The `ON` and `OFF` Master Buttons on top of the remote control an extra zone with Group ID 108. 
You can for instance use it as a master switch or for just another light/smartplug etc...

The beauty of this approach is that the remote will work even with Zigbee2MQTT down, ... even better without any alive Zigbee controller.  
It looks like a perfect emergency backup.


### Quirks
Like most of battery powered devices, the remote does not respond to any ZigBee commands sent after initial configuration without taking out the battery and putting it back in.
To send any command to it (like a Leave or configure command), take out the battery, send the command and quickly put it back in.

It does also not support binding its light output clusters or manually joining it to a group.

### Touchlink
The remote supports Touchlink. It is unclear how the Touchlink configuration interacts with the regular group configuration so if you intend to use Touchlink it would probably best not to pair it to a network.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `simulated_brightness`: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:
```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `brightness_move_to_level`, `color_temperature_move`, `move_to_hue_and_saturation`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

