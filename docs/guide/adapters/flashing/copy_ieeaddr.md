---
---
# Copying the ieee address of an adapter
When migrating from one stick to another it is important that the new stick uses the same ieee address as the old stick. Some devices lookup the coordinator by its ieee address, this fails when the ieee address of the coordinator changes. There are various tools which can do this.

First you have to determine the ieee address of your old stick, there are 2 ways to do this:
1. Open the frontend, go to "Settings" -> "About" -> "Coordinator IEEE Address"
1. Open the `data/database.db`; on the first line you will find the coordinator ieee address:
```json
{"id":1,"type":"Coordinator","ieeeAddr":"0x00124b000e89686d","nwkAddr":0...
```

## ZigStar Multi Tool
Supports: CC2652, CC1352, CC2538
1. [Download](https://github.com/xyzroe/ZigStarGW-MT/releases) and run the tool
1. Plug in your adapter and put it in BSL mode, consult your adapters manual on how to put it in BSL mode mode
1. Click refresh icon and select your adapter
1. Fill in the old coordinators ieee address under "IEEE" (first `0x` can be skipped)
1. Check "Write IEEE" and click "Write IEEE"
1. Reflash the firmware on your stick (this is important, otherwise the coordinator will not use the new ieee address)

## cc2538-bsl
Supports: CC2652, CC1352, CC2538
1. [Download](https://github.com/JelmerT/cc2538-bsl) the tool
1. Plug in your adapter and put it in BSL mode, consult your adapters manual on how to put it in BSL mode
1. Run `./cc2538-bsl.py -evw --ieee-address 00:12:4b:aa:bb:cc:dd:ee -p /dev/tty.usbserial-10 ./fw.hex`, replace:
    - `00:12:4b:aa:bb:cc:dd:ee` with your coordinator ieee address (first `0x` can be skipped)
    - `/dev/tty.usbserial-10` with the path to your adapter
    - `./fw.hex` with the path to your adapters firmware.

## cc2538-bsl via Docker
Supports: CC2652, CC1352, CC2538
1. Run `sudo docker run --rm --device /dev/ttyUSB0:/dev/ttyUSB0 -e FIRMWARE_URL=https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20221226.zip ckware/ti-cc-tool -ewv -p /dev/ttyUSB0 -evw --ieee-address 00:12:4b:aa:bb:cc:dd:ee`, replace:
    - `00:12:4b:aa:bb:cc:dd:ee` with your coordinator ieee address (first `0x` can be skipped)
    - the *first* `/dev/ttyUSB0` with the path to your adapter
    - the URL in `FIRMWARE_URL=https:...` with the path to the zip file of your adapters firmware.
    - add `--bootloader-sonoff-usb` at the end if you use a sonoff stick to switch it into bootloader mode (in 02/2023 not working with ZigStar Multi Tool).

## FLASH-PROGRAMMER-2
Supports: CC2652, CC1352, CC2538
1. [Download](https://www.ti.com/tool/FLASH-PROGRAMMER) the tool
1. Plug in your adapter and put it in BSL mode, consult your adapters manual on how to put it in BSL mode
1. Select your adapter, go to "MAC address"
1. Fill the old coordinator ieee address into "Secondary Address" -> "IEEE 802.15.4 MAC address" (first `0x` can be skipped)
1. Press "Write"
1. Reflash the firmware on your stick - in the right corner under Secondary MAC check "Retain secondary IEEE" (this is important, otherwise the coordinator will not use the new ieee address)

    - `./fw.hex` with the path to your adapters firmware.

