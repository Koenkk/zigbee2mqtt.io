# Docker on Synology DSM 7.0

> **_NOTE:_** This may not work with all Zigbee controllers, but has been tested with the CC2531.

As of Disk Station Manager version 7, Synology removed the built-in support for USB-devices like a Zigbee controller.
The USB support can be installed to the Linux kernel by issuing the following commands as _root_.

```
modprobe usbserial
modprobe ftdi_sio
modprobe cdc-acm
```

After issuing the commands, the Zigbee controller may need to be unplugged and re-inserted to the USB port.

You may also need additional drivers based on your USB Zigbee controller setup, e.g. CH341 module is not included by default. You can download precompiled modules from jadahl.com pages - select module directory based on NAS CPU architecture (DS218+ -> INTEL Celeron J3355 -> Apollo Lake).

```
cd /lib/modules
wget http://www.jadahl.com/iperf-arp-scan/DSM_7.0/apollolake/ch341.ko
insmod /lib/modules/ch341.ko
```

It is possible to create a start-up task that issues the above commands:

1. Create an executable script file that contains the three modprobe commands.
1. Using DSM's _Control Panel_ -> _Task Scheduler_ -> _Create_ -> _Triggered Task_ -> _User-defined script_ with the settings: **User:** root, **Event:** Boot-up, and a `bash` command executing the executable file under _Task Settings_.
