---
---
# Flashing the firmware via cc2538-bsl

TI CC13xx/CC2538/CC26xx Serial Boot Loader  

CC2538-bsl is a python script that communicates with the boot loader of the Texas Instruments CC2538, CC26xx and CC13xx SoCs (System on Chips).  

In this case we use a Sonoff Zigbee 3.0 USB Dongle Plus and flash the firmware without opening the case to press the "Boot" button.

## Prepare your system (debian based)

1. install python
```
sudo apt update && sudo apt-get install python3-pip 
```
2. install needed python packages
```
sudo pip3 install pyserial intelhex
```
## Download cc2538-bsl
3. we need the ITead_Sonoff_Zigbee-delay feature
```
mkdir z2m_fw-upgrade
cd z2m_fw-upgrade
wget https://github.com/JelmerT/cc2538-bsl/archive/refs/heads/feature/ITead_Sonoff_Zigbee-delay.zip
unzip ITead_Sonoff_Zigbee-delay.zip
```  

At the moment this function is only available in this feature branch. It is possible that it will soon go to the master.  

## Download the Firmware  
Coordinator: https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin  
Router: https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_3.x.0/bin  

4. we flash as coordinator and download the required firmware  
In this case CC1352P2_CC2652P_launchpad_coordinator_***.zip
```
wget https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20211217.zip
unzip CC1352P2_CC2652P_launchpad_coordinator_20211217.zip

cd ./cc2538-bsl-feature-ITead_Sonoff_Zigbee-delay/
sudo python3 cc2538-bsl.py -ewv --bootloader-sonoff-usb -p /dev/ttyUSB0 ../CC1352P2_CC2652P_launchpad_coordinator_20211217.hex
```
``-ewv`` means Mass **e**rease, **w**rite, **v**erify  
``--bootloader-sonoff-usb`` means that the bootloader is started by the script  
``-p`` is the port on which your device is running, in this case **/dev/ttyUSB0**  

If the flash process was successful, you will see something like this:
```
sonoff
Opening port /dev/ttyUSB0, baud 500000
Reading data from ../CC1352P2_CC2652P_launchpad_coordinator_20211217.hex
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
