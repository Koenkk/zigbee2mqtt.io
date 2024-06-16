---
---

# Sniff Zigbee traffic
Sniffing Zigbee traffic can be handy sometimes. E.g. when you want to analyze the commands used by a device.

## With CC2531
### Prerequisites
* Computer
  * Ubuntu / Debian machine (tested with Ubuntu 18.04 / 18.10 and Debian 10)
  * Windows machine (tested with Windows 10)
* CC2531 stick

### 1. Flashing the CC2531 stick
The CC2531 needs to be flashed with a sniffer firmware. Flash the firmware using the instructions from [Flashing the CC2531](../../guide/adapters/flashing/flashing_the_cc2531.md).

#### Linux
The firmware is included with [PACKET-SNIFFER](http://www.ti.com/tool/PACKET-SNIFFER) (not **PACKET-SNIFFER-2!**). Download PACKET-SNIFFER. As the sniffer firmware is only available in the windows installer we need to extract the hex file. This would require 7zip (p7zip-full or p7zip-plugins package depending on distro)
```bash
unzip swrc045z.zip -d PACKET-SNIFFER
7z e PACKET-SNIFFER/Setup_SmartRF_Packet_Sniffer_2.18.0.exe bin/general/firmware/sniffer_fw_cc2531.hex
sudo <path-to>/cc-tool -e -w <path-to>/sniffer_fw_cc2531.hex
```

#### Windows (and possibly Ubuntu)
For Windows this firmware is included with [ZBOSS](https://dsr-iot.com/downloads). Register an account and download *Zigbee sniffer package rev. 2.0*. Included in the ZIP file is the firmware in subfolder `zb_sniffer_bin\zb_sniffer_target\CC2531 USB dongle\zboss_sniffer.hex`. Please note that ZBOSS is also available for Ubuntu 64-bit.

### 2. Installing required tools

#### Ubuntu / Debian
```bash
cd /opt
sudo apt-get install -y libusb-1.0-0-dev wireshark
curl -L https://github.com/homewsn/whsniff/archive/v1.3.tar.gz | tar zx
cd whsniff-1.3
make
sudo make install
```

#### Windows
Download and install the latest version of [Wireshark](https://www.wireshark.org/download.html). ZBOSS itself is portable and won't need to be installed.

### 3. Sniffing traffic
On Ubuntu / Debian start wireshark with `sudo whsniff -c ZIGBEE_CHANNEL_NUMBER | wireshark -k -i -`. *Note: Depending on your distro and installed packages, this may result in a broken pipe after some time. You will notice that Wireshark has stopped capturing, and attmpeting to resume by clicking the shark fin icon will present you with an error `end of file on pipe magic during open`, if this happens you may need to start with `wireshark -k -i <( path/to/whsniff -c channel_number )` instead. Alternative uses are detailed on the [whsniff project page](https://github.com/homewsn/whsniff#how-to-use-locally).*

If you just want to save the sniffed data for later analysis you can run this command (compression with gzip is optional):
```bash
sudo whsniff -c ZIGBEE_CHANNEL_NUMBER | ( gzip -c > "zigbee_sniff_$(date +"%FT%H%M%S").pcap".gz & )
```

For Windows run the ZBOSS executable in `gui\zboss_sniffer.exe`, enter the path to your Wireshark executable and click on the `Start` button. For ZBOSS make sure the correct Zigbee channel is set, by default it will sniff on channel `0x0C (12)` but the default Zigbee2MQTT channel is 11 (`0x0B (11)`).

Wireshark will start and log the Zigbee messages. As these messages are encrypted we need to add 2 encryption keys. The first one is the Trust Center link key, which is the same for (almost) every Zigbee network. The second one is the network encryption key (Transport Key).

Add the Trust Center link key by going to to Edit -> Preferences -> Protocols -> ZigBee. Set Security Level to *AES-128 Encryption, 32-bit Integrity Protection* and click on *Edit*. Click on *+* and add `5A:69:67:42:65:65:41:6C:6C:69:61:6E:63:65:30:39` with Byte Order Normal.

*NOTE: The Hue bridge uses a [different Trust Center link key](https://peeveeone.com/2016/11/breakout-breakthrough/)*

![Wireshark Trust Center link key](../../images/wireshark_tclink_key.png)

Next we need to figure out the network encryption key (Transport Key). There are two ways to do this:

1) By default, if you haven't changed `network_key` in your `configuration.yaml` this will be `01:03:05:07:09:0B:0D:0F:00:02:04:06:08:0A:0C:0D`. If you changed your `network_key`, then convert each number into its 2-digit hexadecimal value, and combine them all with `:` between. E.g. `[1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]` -> `01:03:05:07:09:0B:0D:0F:00:02:04:06:08:0A:0C:0D`.

    You can paste your network_key below to convert it. PS: Of course it gets not sent anywhere, just a local in-browser converter.
    <NetworkKeyConverter/>

2) If you don't want to translate the numbers, the network encryption key is also exposed when a device joins the network. Pair a new device to the network (or re-pair an existing one) and grab the message where the Info is *Device Announcement....*. Open the message and expand *ZigBee Network Layer Data* -> *ZigBee Security Header*.

![Wireshark network key](../../images/wireshark_network_key.png)

Copy the key value, as shown above and go to Edit -> Preferences -> Protocols -> ZigBee -> Edit and add the key with Byte Order Normal.

Now Wireshark is able to decrypt the messages. When e.g. turning on a light you will see a message similar to:

![Wireshark packet](../../images/wireshark_packet.png)

#### Troubleshooting
* If you get `couldn't run /usr/bin/dumpcap in child process: permission denied` when running whsniff, check if /usr/bin/dumpcap is executable for everyone. Or `chmod 755 /usr/bin/dumpcap`.
* You may need to remove `modemmanager` as this has been known to cause issues. [Howto](../../guide/faq/README.md#modemmanager-is-installed)

## With HUSBZB-1 and EZSP USB sticks
If you happen to have a spare HUSBZB-1 or EZSP stick, you can also use this to sniff traffic.

### Prerequisites
* Computer
  * Ubuntu machine (tested with 18.10)
  * Windows machine (tested with Windows 10)
* HUSBZB-1 or EZSP stick
* Wireshark
* Java

### 1. Install drivers
#### Ubuntu
On linux systems, the HUSBZB-1 or EZSP stick should work out of the box with no modifications.

#### Windows
Found on [https://www.amazon.com/gp/customer-reviews/RSPH6UCG0N3WK/](https://www.amazon.com/gp/customer-reviews/RSPH6UCG0N3WK/)
1. Download Silicon Labs [CP210x drivers](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers)
2. Extract drivers to a folder (I'll use C:\CP210x_Windows_Drivers as an example)
3. Open Windows Device Manager (Win+X, M)
4. Right-click on "Other Devices > HubZ ZigBee Com Port" (NOT Z-Wave) and select "Update driver"
5. Select "Browse my computer for driver software"
6. Select "Let me pick from a list of available drivers on my computer"
7. Leave "Show All Devices" selected and click "Next"
8. Click "Have Disk"
9. Enter the folder name where you extracted the downloaded drivers: C:\CP210x_Windows_Drivers
10. Select "Silicon Labs CP210x USB to UART Bridge" and click "Next"
11. Windows will prompt that it cannot confirm the device ID, click "Yes" to proceed.
12. Write down the com port of the ZigBee device, something like COM5 or COM6.
  1. You can find this by going to "Ports (COM & LPT)" in the device manager

### 2. Installing required tools
Both Windows and Ubuntu use the same program for sniffing. You can fetch a precompiled jar file from the release section of the [ZSmart Systems sniffer](https://github.com/zsmartsystems/com.zsmartsystems.zigbee.sniffer).

#### Ubuntu
No extra software besides `ZigbeeSniffer.jar` and Wireshark is needed. Some EZSP keys use the exact same USB identifiers as a brltty udev-registered device, so if your EZSP USB dongle is not recognized by Linux, just disable the rule of brltty for idVendor=1a86, idProduct=7523 (same as the CH340 serial converter used in the EZSP key). Edit /`usr/lib/udev/rules.d/85-brltty.rules` and comment `# ENV{PRODUCT}=="1a86/7523/*", ENV{BRLTTY_BRAILLE_DRIVER}="bm", GOTO="brltty_usb_run"`. Unplug and replug the EZSP key.

#### Windows
Download and install https://nmap.org/npcap/ and make sure you select to install the "Npcap Loopback Adapter" when installing. It shouldn't matter whether or not you use Winpcap compatibility mode.

### 3. Sniffing traffic
In a terminal or command line, run `java -jar ZigbeeSniffer.jar -baud 115200 -flow {OPTION} -port {PORT} -c {CHANNEL}`.
On Windows, `PORT` should be replaced by `COM5` or whatever you wrote down in step 1.
On linux, `PORT` will be something like `/dev/ttyUSB0` or wherever you plugged in your HUSBZB-1 device.
Depending on your adapter, `OPTION` should be replaced by `none` (e.g. Sonof Dongle-E) or `hardware` (HUSBZB-1).

Once you have the application running, you should see it connect to and start sniffing traffic on the network.

After that, open up Wireshark and start capturing on the loopback adapter.

Then, apply a filter `udp port 17754` in order to filter down to only Zigbee traffic.

Lastly, follow the steps of the CC2531 instructions above to set up your encryption keys the same.
