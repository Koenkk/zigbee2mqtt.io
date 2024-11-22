---
---

# Flashing the firmware via cc2538-bsl

[TI CC13xx/CC2538/CC26xx Serial Boot Loader](https://github.com/JelmerT/cc2538-bsl)

CC2538-bsl is a python script by [Jelmer Tiete](https://github.com/JelmerT) that communicates with the boot loader of the Texas Instruments CC2538, CC26xx and CC13xx SoCs (System on Chips).

In this case we use a Sonoff Zigbee 3.0 USB Dongle Plus and flash the firmware without opening the case to press the "Boot" button.

## Method with Docker (Linux only)

```bash
docker run --rm \
    --device /dev/ttyUSB0:/dev/ttyUSB0 \
    -e FIRMWARE_URL=https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20240710/CC1352P2_CC2652P_launchpad_coordinator_20240710.zip \
    ckware/ti-cc-tool -ewv -p /dev/ttyUSB0 --bootloader-sonoff-usb
```

You can find details on the Docker command [here](https://github.com/git-developer/ti-cc-tool)

## Method without Docker

### Prepare your system (debian based)

1. Install python and python-pip.

```bash
sudo apt update && sudo apt install python3 python3-pip
```

2. Install needed python packages.

```bash
sudo pip3 install pyserial intelhex
```

### Download cc2538-bsl

3. Create a directory named "cc2538-bsl", download the last master of cc2538-bsl as tarball and extract in same folder.

```bash
mkdir cc2538-bsl
cd cc2538-bsl
curl -sSL https://github.com/JelmerT/cc2538-bsl/archive/refs/heads/master.tar.gz | tar xz --strip 1
```

The sonoff feature is in the master since 20.01.2022.

### Download the Firmware

Download the firmware for your adapter from the [Supported adapter page](../README.md) and unzip it in the `c2538-bsl` directory. So everything needed is in one folder.

4. In this case we will flash `CC1352P2_CC2652P_launchpad_coordinator_***.zip`.

```bash
wget https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20240710/CC1352P2_CC2652P_launchpad_coordinator_20240710.zip
unzip CC1352P2_CC2652P_launchpad_coordinator_20240710.zip

sudo python3 cc2538-bsl.py -ewv -p /dev/ttyUSB0 --bootloader-sonoff-usb ./CC1352P2_CC2652P_launchpad_coordinator_20240710.hex
```

`-ewv` means Mass **e**rase, **w**rite, **v**erify  
`-p` is the port on which your device is running, in this case `/dev/ttyUSB0`  
`--bootloader-sonoff-usb` means that the bootloader is activated by the script, by toggling RTS and DTR in the correct pattern for Sonoff USB dongle (remove this if your device is not a Sonoff dongle).

If the flash process was successfully done, an output like this appears:

```
sonoff
Opening port /dev/ttyUSB0, baud 500000
Reading data from ../CC1352P2_CC2652P_launchpad_coordinator_20240710.hex
Your firmware looks like an Intel Hex file
Connecting to target...
CC1350 PG2.0 (7x7mm): 352KB Flash, 20KB SRAM, CCFG.BL_CONFIG at 0x00057FD8
Primary IEEE Address: 00:00:00:00:00:00:00:00
    Performing mass erase
Erasing all main bank flash sectors
    Erase done
Writing 360448 bytes starting at address 0x00000000
Write 104 bytes at 0x00057F988
    Write done
Verifying by comparing CRC32 calculations.
    Verified (match: 0xe0c256fd)
```

### How-to check the installed firmware version

Zigbee2MQTT will output the installed firmware version to the Zigbee2MQTT log on startup:

```
Zigbee2MQTT:info  2022-01-05 22:36:34: Coordinator firmware version: '{"meta":{"maintrel":1,"majorrel":2,"minorrel":7,"product":1,"revision":20240710,"transportrev":2},"type":"zStack3x0"}''
```

In the above example the version is `20240710`.
