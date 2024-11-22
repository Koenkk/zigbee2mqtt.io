---
title: "EnOcean PTM 215ZE control via MQTT"
description: "Integrate your EnOcean PTM 215ZE via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-09-02T18:14:38Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EnOcean PTM 215ZE

|     |     |
|-----|-----|
| Model | PTM 215ZE  |
| Vendor  | [EnOcean](/supported-devices/#v=EnOcean)  |
| Description | Pushbutton transmitter module |
| Exposes | action, linkquality |
| Picture | ![EnOcean PTM 215ZE](https://www.zigbee2mqtt.io/images/devices/PTM-215ZE.png) |
| White-label | Easyfit by EnOcean EWSxZ, Trio2sys 20020002 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Green Power
This is a Zigbee Green Power device which allows it to be very energy efficient.
Messages from Green Power devices cannot be "understood" by normal Zigbee devices, therefore they need to be "translated" first.
Not all Zigbee devices can do this translation, currently the only devices known to do this are Philips Hue devices. This means that the Green Power device has to be in range of a Philips Hue device in order to use it.

Green Power devices don't support binding and are not included in network scans.

### Pairing
This device has 4 buttons:

| Number | Button | Position | Zigbee Channel |
|-|-|-|-|
| 1 | A0 | top left | 15 |
| 2 | A1 | bottom left | 20 |
| 3 | B0 | top right | 11 |
| 4 | B1 | bottom right | 25 |

In case the module is integrated in a single rocker switch, you need to remove the caps to expose all buttons. A button can be pressed by holding the contact of that button and then push the energy bar.

To pair it, start by shortly (less than 7 seconds) pressing two different buttons one after another. Any button of the device (A0, A1, B0, B1) can be used.

Next, read the table above and find the Zigbee channel your network runs at (if you don't know this, it's probably channel 11, as this is zigbee2mqtt's default). Select the button of the device (A0, A1, B0, or B1) that fits your desired channel and execute the following long-short-long sequence:

1. Press and hold the selected button for more than 7 seconds before releasing it
2. Press the selected button quickly (hold for less than 2 seconds)
3. Press and hold the selected button again for more than 7 seconds before releasing it

Then, press the selected button contact shortly (< 7s) to select radio channel 11. Continue pressing the selected button shortly (< 7s) to increment radio channel. If channel 26 has been reached, then channel 11 will be used next.

Once the device is paired you need to confirm the channel. To do this, press any button other than the one used previously.

For more informations, please refer to the [EnOcean PTM 215ZE manual chapter 3.6.2.1](https://www.enocean.com/wp-content/uploads/downloads-produkte/en/products/enocean_modules_24ghz/ptm-215ze/user-manual-pdf/PTM_215ZE_User_Manual-1.pdf).
<!-- Notes END: Do not edit below this line -->




## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `press_1`, `release_1`, `press_2`, `release_2`, `press_3`, `release_3`, `press_4`, `release_4`, `press_1_and_2`, `release_1_and_2`, `press_1_and_3`, `release_1_and_3`, `press_1_and_4`, `release_1_and_4`, `press_2_and_3`, `release_2_and_3`, `press_2_and_4`, `release_2_and_4`, `press_3_and_4`, `release_3_and_4`, `press_energy_bar`, `release_energy_bar`, `press_or_release_all`, `lock`, `unlock`, `half_open`, `tilt`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

