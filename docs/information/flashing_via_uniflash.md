# Flashing via UNIFLASH

UNIFLASH can be used to flash certain Texas Instruments MCUs (e.g. CC26X2R1 and CC1352P-2). It runs on Windows, macOS and Linux.

1. Download and install UNIFLASH: [download link](http://www.ti.com/tool/download/UNIFLASH)
2. Plug your device
3. Start UNIFLASH, your device will automatically be detected, press *Start*
![Start](../images/uniflash/start.png)
4. Go to *Settings & Utilities* -> *Manual Erase* and press *Erase Entire Flash*
![Erase](../images/uniflash/erase.png)
5. Go to *Program* -> *Flash Image(s)*, press *Browse* to select the firmware.
6. Now click *Load image* to upload the firmware
![Load](../images/uniflash/load.png)
7. Done!

*Note:* When migrating from another dongle (e.g. CC2531), make sure to modify your pan_id in your [configuration](configuration.md).
