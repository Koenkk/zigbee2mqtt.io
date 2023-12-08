
<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To pair this device you have to install the device via its installation code. The installation code can be obtained by scanning the QR-code on the inside of the battery cover with your smartphone. Then get the device into pairing mode. In zigbee2mqtt navigate to  "Settings" --> "Tools" and click on "Add install code". Paste the code you got from the QR-code and confirm by clicking "OK" which will get zigbee2mqtt into pairing mode automatically. Wait for your device to be joined.


### Factory reset
To reset the device to factory settings, remove one of the batteries. While pressing and holding the device's bottom left button, insert the battery. As soon as the device's LED is starting to blink orange, release the main button and press and hold it again until the device's LED is lighting up green. The device will then restart and look for a Zigbee network to join.

### LED Configuration
The blinking pattern and color of the device LED can be configured individually for each button short/long press and for the confirmation indication.

The configuration is an 18-byte hex string as follows:

* RGB color (6 bytes), e.g. `22bbff` for light blue
* Position (2 bytes), `01` = upper half, `02` = lower half, `00` = both
* Light Pattern (fade-in duration, light on duration, fade-out duration, light off duration; 2 bytes each, e.g. `010f0102` for fast fade-in and fade-out (`01`), long light on duration `0f`, and a short pause in between `02`.
* Number of repetitions, e.g. `01` for single execution, `05` for flashing 5 times

Examples:
* Full string from above: `22bbff01010f010205`
* Triple white flash: `ffffff000001000103`
* Default amber light on short press: `ff4200000104010001`
* Default amber light on long press:`ff4200000502050001`

<!-- Notes END: Do not edit below this line -->