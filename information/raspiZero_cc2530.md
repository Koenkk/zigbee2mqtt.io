# Connection CC2530 to a Raspberry PI Zero

CC2530 can be connected to a Raspberry PI Zero via GPIO Pins - no USB2FTDI is needed.

### The use of UART by the installed Linux has to be disabled:

[Detailed explanation here](https://www.raspberrypi.org/documentation/configuration/uart.md)

Enable UART in the Kernel and disable UART use for BlueTooth.  

In `/boot/config.txt` add following lines:

```
enable_uart=1
dtoverlay=pi3-disable-bt
```

Disable the modem system service (on the command line):

```
sudo systemctl disable hciuart
```

Remove the console entry by removing the any of those entries from `/boot/cmdline.txt` if present:

```
console=serial0,115200 console=ttyAMA0,115200

```

Reboot your Raspberry.

### Wiring CC2530 to the Raspberry

```
CC C2530 -> Raspberry
VCC -> 3,3V (Pin1) 
GND -> GND (Pin6)
P02 -> TXD (Pin8 / BCM 14) 
P03 -> RXD (Pin10 / BCM 15)
```
### Configuring zigbee2mqtt

Change the Serial Port in your `data/configuration.yaml` file:

```
serial:
  port: /dev/ttyAMA0
advanced:
  baudrate: 115200
  rtscts: false
```

Have fun.