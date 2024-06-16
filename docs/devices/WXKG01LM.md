---
title: "Xiaomi WXKG01LM control via MQTT"
description: "Integrate your Xiaomi WXKG01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi WXKG01LM

|     |     |
|-----|-----|
| Model | WXKG01LM  |
| Vendor  | [Xiaomi](/supported-devices/#v=Xiaomi)  |
| Description | Mi wireless switch |
| Exposes | battery, voltage, power_outage_count, action, linkquality |
| Picture | ![Xiaomi WXKG01LM](https://www.zigbee2mqtt.io/images/devices/WXKG01LM.png) |
| White-label | Xiaomi YTC4040GL, Xiaomi YTC4006CN, Xiaomi YTC4017CN, Xiaomi ZHTZ02LM |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Battery Type
Uses a CR2032 battery

### Deprecated click event
By default this device exposes a deprecated `click` event. It's recommended to use the `action` event instead.

To disable the `click` event, set `legacy: false` for this device in `configuration.yaml`. Example:

```yaml
devices:
  '0x12345678':
    friendly_name: my_device
    legacy: false
```


### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join. 

If that doesn't work press the link button for a few seconds and the LED will flash. After this first phase, you have to make quick clicks on the button (normal clicks on the device, not on the link button) until the LED flashes again. After this second flashing phase the device will be paired.

### Binding
This device does **not** support binding.


### Troubleshooting: device stops sending messages/disconnects from network
Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network.
Most of the times this happens because of the following reasons:
- Device has a weak signal, you can see the signal quality in the published messages as `linkquality`. A linkquality < 20 is considered weak.
- Low battery voltage, this can even happen when the battery still appears full. Try a different battery.
- The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, Legrand, OSRAM, Sylvania, SmartThings, Securifi. A possible solution is to connect the device directly to the central coordinator by pushing the reset button while being physically close to it.

More detailed information about this can be found [here](https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623).
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `hold_timeout`: The WXKG01LM only reports a button press and release.By default, a hold action is published when there is at least 1000 ms between both events. It could be that due to delays in the network the release message is received late. This causes a single click to be identified as a hold action. If you are experiencing this you can try experimenting with this option (e.g. set it to 2000) (value is in ms). The value must be a number with a minimum value of `0`

* `hold_timeout_expire`: Sometimes it happens that the button does not send a release. To avoid problems a release is automatically send after a timeout. The default timeout is 4000 ms, you can increase it with this option (value is in ms). The value must be a number with a minimum value of `0`

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


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

### Power outage count (numeric)
Number of power outages.
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single`, `double`, `triple`, `quadruple`, `hold`, `release`, `many`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

