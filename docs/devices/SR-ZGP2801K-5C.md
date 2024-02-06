---
title: "Sunricher SR-ZGP2801K-5C control via MQTT"
description: "Integrate your Sunricher SR-ZGP2801K-5C via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-07-01T08:15:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sunricher SR-ZGP2801K-5C

|     |     |
|-----|-----|
| Model | SR-ZGP2801K-5C  |
| Vendor  | [Sunricher](/supported-devices/#v=Sunricher)  |
| Description | Pushbutton transmitter module |
| Exposes | action, linkquality |
| Picture | ![Sunricher SR-ZGP2801K-5C](https://www.zigbee2mqtt.io/images/devices/SR-ZGP2801K-5C.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Green Power
This is a Zigbee Green Power device which allows it to be very energy efficient.
Messages from Green Power devices cannot be "understood" by normal Zigbee devices, therefore they need to be "translated" first.
Not all Zigbee devices can do this translation, currently the only devices known to do this are Philips Hue devices. This means that the Green Power device has to be in range of a Philips Hue device in order to use it.

Green Power devices don't support binding and are not included in network scans.

### Pairing
This device requires your Zigbee network to run on channel 11-26.

Pairing GP Switch to a Compatible Zigbee Light Device:
Step 1: activate learning to GP switch mode of the compatible light device (generally our light devices will enter the
mode by short pressing “prog.” or “reset” button 4 times, or by resetting power 4 times), please refer to the manual of
corresponding light device.
Step 2: put the GP switch into learning mode.
To enter into learning mode, start by selecting one button on the switch. (Use the same button for the entire sequence,
pressing any other button will exit the learning mode.)
Next, execute the following sequence:
1. Press and hold the selected button for over 7 seconds, and then release it.
2. Short press the button once, and then release it.
3. Press and hold the button again for over 7 seconds, and then release it
The switch has now entered learning mode.
Wait for approximate 1 second to check whether there is indication on the light device for successful pairing, generally
our light device will blink twice to indicate successful pairing.
Exit learning mode on the switch by pressing any other button on the switch after pairing successfully. Just
ignore step 3.
If there is no indication, please continue executing step 3.
Step 3: Cycle through the sixteen Zigbee channels
A radio signal needs be sent from the switch to the compatible light device on the correct Zigbee channel, the light device
uses one of the sixteen possible channels, automatically set the device. Using the switch, a signal will be sent on each
channel until the channel used by the light device is found.
Upon entering learning mode, the signal will be sent by the switch on default channel 11.

To change the switch’s channel, short press the selected button to move from default channel 11 to the next
one. For each such button press, the switch transmits on the next channel.
After each such button press, please wait for approximate 1 second to check whether there is indication on the light
device for successful pairing.
If pairing successfully, please exit learning mode on the switch. If channel 26 has been reached, but there is still no
indication, it might because the switch has not entered learning mode yet since the very start. We have to repeat the step
2 to put it into learning mode.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `press_on`, `press_off`, `press_high`, `press_low`, `hold_high`, `hold_low`, `high_low_release`, `cw_ww_release`, `cw_dec_ww_inc`, `ww_inc_cw_dec`, `r_g_b`, `b_g_r`, `rgb_release`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

