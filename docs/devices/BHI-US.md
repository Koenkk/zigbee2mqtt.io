---
title: "Bosch BHI-US control via MQTT"
description: "Integrate your Bosch BHI-US via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-12-26T18:35:42
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BHI-US

|     |     |
|-----|-----|
| Model | BHI-US  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Universal Switch II |
| Exposes | battery_low, voltage, config_led_top_left_press, config_led_top_right_press, config_led_bottom_left_press, config_led_bottom_right_press, config_led_top_left_longpress, config_led_top_right_longpress, config_led_bottom_left_longpress, config_led_bottom_right_longpress, action, linkquality |
| Picture | ![Bosch BHI-US](https://www.zigbee2mqtt.io/images/devices/BHI-US.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To pair this device you have to install the device via its installation code. The installation code can be obtained by scanning the QR-code on the inside of the battery cover with your smartphone. Then get the device into pairing mode. In zigbee2mqtt navigate to  "Settings" --> "Tools" and click on "Add install code". Paste the code you got from the QR-code and confirm by clicking "OK" which will get zigbee2mqtt into pairing mode automatically. Wait for your device to be joined.


### Factory reset
To reset the device to factory settings, remove one of the batteries. While pressing and holding the device's bottom left button, insert the battery. As soon as the device's LED is starting to blink orange, release the main button and press and hold it again until the device's LED is lighting up green. The device will then restart and look for a Zigbee network to join.

### LED Configuration
The blinking pattern and color of the device LED can be configured individually for each button short/long press and for the confirmation indication.

The configuration is an 9-byte hex string as follows:

* RGB color (3 bytes), e.g. `22bbff` for light blue
* Position (1 bytes), `01` = upper half, `02` = lower half, `00` = both
* Light Pattern (fade-in duration, light on duration, fade-out duration, light off duration; 1 bytes each, e.g. `010f0102` for fast fade-in and fade-out (`01`), long light on duration `0f`, and a short pause in between `02`.
* Number of repetitions, e.g. `01` for single execution, `05` for flashing 5 times

Examples:
* Full string from above: `22bbff01010f010205`
* Triple white flash: `ffffff000001000103`
* Default amber light on short press: `ff4200000104010001`
* Default amber light on long press:`ff4200000502050001`
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `led_response`: Specifies LED color (rgb) and pattern of the confirmation response as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: 30ff00000102010001. The value must be textual.


## Exposes

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### LED config (top left short press) (text)
Specifies LED color (rgb) and pattern on short press as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: ff1493000104010001.
Value can be found in the published state on the `config_led_top_left_press` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"config_led_top_left_press": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_led_top_left_press": NEW_VALUE}`.

### LED config (top right short press) (text)
Specifies LED color (rgb) and pattern on short press as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: ff1493000104010001.
Value can be found in the published state on the `config_led_top_right_press` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"config_led_top_right_press": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_led_top_right_press": NEW_VALUE}`.

### LED config (bottom left short press) (text)
Specifies LED color (rgb) and pattern on short press as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: ff1493000104010001.
Value can be found in the published state on the `config_led_bottom_left_press` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"config_led_bottom_left_press": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_led_bottom_left_press": NEW_VALUE}`.

### LED config (bottom right short press) (text)
Specifies LED color (rgb) and pattern on short press as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: ff1493000104010001.
Value can be found in the published state on the `config_led_bottom_right_press` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"config_led_bottom_right_press": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_led_bottom_right_press": NEW_VALUE}`.

### LED config (top left long press) (text)
Specifies LED color (rgb) and pattern on long press as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: ff4200000502050001.
Value can be found in the published state on the `config_led_top_left_longpress` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"config_led_top_left_longpress": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_led_top_left_longpress": NEW_VALUE}`.

### LED config (top right long press) (text)
Specifies LED color (rgb) and pattern on long press as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: ff4200000502050001.
Value can be found in the published state on the `config_led_top_right_longpress` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"config_led_top_right_longpress": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_led_top_right_longpress": NEW_VALUE}`.

### LED config (bottom left long press) (text)
Specifies LED color (rgb) and pattern on long press as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: ff4200000502050001.
Value can be found in the published state on the `config_led_bottom_left_longpress` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"config_led_bottom_left_longpress": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_led_bottom_left_longpress": NEW_VALUE}`.

### LED config (bottom right long press) (text)
Specifies LED color (rgb) and pattern on long press as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: ff4200000502050001.
Value can be found in the published state on the `config_led_bottom_right_longpress` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"config_led_bottom_right_longpress": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_led_bottom_right_longpress": NEW_VALUE}`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `button_top_left_release`, `button_top_right_release`, `button_bottom_left_release`, `button_bottom_right_release`, `button_top_left_longpress`, `button_top_right_longpress`, `button_bottom_left_longpress`, `button_bottom_right_longpress`, `button_top_left_longpress_release`, `button_top_right_longpress_release`, `button_bottom_left_longpress_release`, `button_bottom_right_longpress_release`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

