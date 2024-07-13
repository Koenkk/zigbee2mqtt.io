---
title: "EnOcean PTM 216Z control via MQTT"
description: "Integrate your EnOcean PTM 216Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-09-02T18:14:38Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EnOcean PTM 216Z

|     |     |
|-----|-----|
| Model | PTM 216Z  |
| Vendor  | [EnOcean](/supported-devices/#v=EnOcean)  |
| Description | Pushbutton transmitter module |
| Exposes | action, linkquality |
| Picture | ![EnOcean PTM 216Z](https://www.zigbee2mqtt.io/images/devices/PTM-216Z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Green Power
This is a Zigbee Green Power device which allows it to be very energy efficient.
Messages from Green Power devices cannot be "understood" by normal Zigbee devices, therefore they need to be "translated" first.
Not all Zigbee devices can do this translation, currently the only devices known to do this are Philips Hue devices. This means that the Green Power device has to be in range of a Philips Hue device in order to use it.

Green Power devices don't support binding and are not included in network scans.

Binding may work between this module and the actuator, depending if the actuator supports the Zigbee Green Power standard & if the actuators user interface supports "Finding & binding" or "EZ-mode". For more information, contact the supplier of the actuator.


### Pairing
For model built after 2020, pairing may be done via NFC or the physical buttons.

**NFC:**

The easiest way is to use a compatible smartphone (iOS, android) with NFC capabily.

The required tool “EnOcean Tool” is available from the [Google Play Store](https://play.google.com/store/apps/details?id=de.enocean.easytool&hl=en) and from the [Apple Store](https://apps.apple.com/de/app/enocean-tool/id1497283202).

For the first configuration, the QR-Code behind the PTM 216Z shall be scanned in order to get the built-in NFC pin to unlock the device. Then, the user may define a specific one if required. More details are available in the documentation [EnOcean PTM 216Z manual chapter 4 (NFC interface)](https://www.enocean.com/wp-content/uploads/downloads-produkte/en/products/enocean_modules_24ghz/ptm-216z/user-manual-pdf/PTM-216Z-User-Manual-1.pdf).


**Physical buttons:**

This device has 4 buttons:

| Number | Button | Position |
|-|-|-|
| 1 | A0 | top left |
| 2 | A1 | bottom left |
| 3 | B0 | top right |
| 4 | B1 | bottom right |

In case the module is integrated in a single rocker switch, you need to remove the caps to expose all buttons. A button can be pressed by holding the contact of that button and then push the energy bar.

To pair it hold the corresponding button for that channel for 7 seconds or more.

| Button | Channel |
|-|-|
| A0 | 15 |
| A1 | 20 |
| B0 | 11 |
| B1 | 25 |

Once the device is paired you need to confirm the channel. To do this press A1 and B0 together. Important: don't press any other buttons between this and the pairing.

In case you want to pair it to a different channel you have to factory reset the device. This can be done by pressing all buttons (A0, A1, B0 and B1) simultaneously for at least 7 seconds.

This device can work on any channel, not only 11, 15, 20 or 25. For this, please refer to the [EnOcean PTM 216Z manual chapter 3.6.3](https://www.enocean.com/wp-content/uploads/downloads-produkte/en/products/enocean_modules_24ghz/ptm-216z/user-manual-pdf/PTM-216Z-User-Manual-2.pdf).
<!-- Notes END: Do not edit below this line -->




## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `press_1`, `press_2`, `press_1_and_2`, `press_3`, `press_1_and_3`, `press_3_and_4`, `press_1_and_2_and_3`, `press_4`, `press_1_and_4`, `press_2_and_4`, `press_1_and_2_and_4`, `press_3_and_4`, `press_1_and_3_and_4`, `press_2_and_3_and_4`, `press_all`, `press_energy_bar`, `release`, `short_press_2_of_2`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

