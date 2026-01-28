<!-- Notes BEGIN -->
## Notes
Shelly BLU H&T Display ZB Black - SBHT-103C
https://www.shelly.com/blogs/documentation/shelly-blu-h-t-display-zb

## Device setup

Clock sync does not work over ZigBee.

Update firmware and sync clock:
1. Use `Shelly BLE Debug` mobile phone app to scan for devices
1. Click on `Read` in the app
1. On the device push the button on the backside
1. To update the firmware click `OTA`, follow instructions
1. To update the clock enter setup mode on the device (one click, display should say "set")
1. Press the backside button two times fast (upper left corner of the device should say "sync")
1. The clock will be synced with timezone GMT+0
1. Open `Shelly BLE Debug` app
1. Connect to device with `Read`
1. Click on `UTC (0 min)` to set your timezone (offset in minutes)

Single Button

    Press 1 time: Enter setup mode for 3 minutes.

        Press 1 time: Exit setup mode.

        Press 2 times rapidly: Force clock synchronization via a Shelly device set as a Bluetooth gateway.

        Press 4 times rapidly: Enter Bluetooth pairing mode.

        Press 5 times rapidly: Enter Zigbee pairing mode.

        Press and hold for 5 seconds: Toggle Bluetooth on/off.

        Press and hold for 10 seconds: Toggle Zigbee on/off.

        Press and hold for 30 seconds: Resets the device to factory settings.

    Press 2 times rapidly: Toggle the clock display segment between showing the clock or the date.

    Press 3 times rapidly: Switch temperature unit between Celsius and Fahrenheit. When Celsius is selected, the date format is DD.MM; when Fahrenheit is selected, the date format is MM.DD.

    Press 4 times rapidly: Invert the display colors.

    Press 5 times rapidly: Toggle the clock format between 24-hour and 12-hour.

<!-- Notes END -->
