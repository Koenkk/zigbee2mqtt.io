---
---
# Flashing the firmware on the CC2531 USB stick
The CC2531 USB stick needs to be flashed with a custom firmware. This firmware can be flashed with multiple devices. The easiest but most expensive option is with the *CC Debugger* from Texas Instruments, which is described on this page. However, you can also use a *Raspberry Pi* or a MCU like the *Arduino Uno* or the cheap *ESP8266* with four dupont cables and optionally a downloader cable. Information about these methods can be found here: [Alternative firmware flashing methods](../information/alternative_flashing_methods.md).


*NOTE: Reflashing does not require repairing of all devices, see [What does and does not require repairing of all devices?](../information/what_does_and_doesnt_require_repairing.md)*

## Windows
1. Install [SmartRF Flash programmer](http://www.ti.com/tool/flash-programmer) (**NOT V2**). This software is free but requires a Texas Instruments account in order to download.
2. Install the [CC debugger driver](http://www.ti.com/general/docs/lit/getliterature.tsp?baseLiteratureNumber=swrc212&fileType=zip) on your PC (Windows only). Before continuing, verify that the CC Debugger driver has been installed correctly. See [Figure 1. Verify Correct Driver Installation @ Chapter 5.1](http://www.ti.com/lit/ug/swru197h/swru197h.pdf). In case the CC Debugger is not recognized correctly [install the driver manually](https://www.youtube.com/watch?v=jyKrxxXOvQY).
2. Connect `CC debugger --> Downloader cable CC2531 --> CC2531 USB sniffer`.
3. Connect **BOTH** the `CC2531 USB sniffer` and the `CC debugger` to your PC using USB.
3. If the light on the CC debugger is RED press set reset button on the CC debugger. The light on the CC debugger should now turn GREEN. If not use [CC debugger user guide](http://www.ti.com/lit/ug/swru197h/swru197h.pdf) to troubleshoot your problem.
![How to connect](../images/connected.jpg)
4. Download the firmware [CC2531_DEFAULT_20190608.zip](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20190608.zip)
5. Start SmartRF Flash Programmer, setup as shown below and press `Perform actions`. Make sure to select the `.hex` file, not the `.bin` file!
![SmartRF Flash Programmer](../images/smartrf.png)

## Linux or MacOS
Credits to [@Frans-Willem](https://github.com/frans-Willem) for majority of instructions.

1. Install prerequisites for [CC-Tool](https://github.com/dashesy/cc-tool) using a package manager (e.g. [Homebrew](https://brew.sh/) for macOS)
* Ubuntu: dh-autoreconf, libusb-1.0, libboost-all-dev
* Fedora: dh-autoreconf, boost-devel, libusb1-devel, gcc-c++
* Archlinux: dh-autoreconf, libusb, boost
* macOS: brew install autoconf automake libusb boost pkgconfig libtool
* Raspbian: dh-autoreconf, libusb-1.0-0-dev, libboost-all-dev

2. Build cc-tool
```bash
git clone https://github.com/dashesy/cc-tool.git
cd cc-tool
./bootstrap
./configure
make
```
3. Connect `CC debugger --> Downloader cable CC2531 --> CC2531 USB sniffer`.
4. Connect **BOTH** the `CC2531 USB sniffer` and the `CC debugger` to your PC using USB.
5. If the light on the CC debugger is RED, press the Reset button on the CC debugger. The light on the CC debugger should now turn GREEN. If not, follow the [CC debugger user guide](http://www.ti.com/lit/ug/swru197h/swru197h.pdf) to troubleshoot your problem.
![How to connect](../images/connected.jpg)
6. Download the firmware [CC2531_DEFAULT_20190608.zip](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20190608.zip).
7. Flash your firmware:
```
sudo ./cc-tool -e -w CC2531ZNP-Prod.hex
```

# How-to check the installed firmware version
Zigbee2mqtt will output the installed firmware version to the Zigbee2mqtt log on startup:
```
zigbee2mqtt:info  2019-11-09T13:01:14: Coordinator firmware version: '{"type":"zStack30x","meta":{"transportrev":2,"product":2,"majorrel":2,"minorrel":7,"maintrel":2,"revision":20190425}}'
```

In the above example the version is `20190425`.

# What's next?
[Running Zigbee2mqtt](running_zigbee2mqtt.md)
