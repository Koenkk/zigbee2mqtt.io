# Zigbee2mqtt fails to start
Most of the times this is caused by zigbee-shepherd not being able to communicate with your CC2530 or CC2531.

## Verify that you put the correct `port` in `configuration.yaml`
Execute the following command to find out the correct path:
```bash
pi@raspberry:/ $ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx. 1 root root 13 Oct 19 19:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -> ../../ttyACM0
```

In this example the correct `port` would be `/dev/ttyAMC0`.

## Verify that the user you run Zigbee2mqtt as has write access to the `port`
This can be tested by executing: `test -w [PORT] && echo success || echo failure` (e.g. `test -w /dev/ttyACM0 && echo success || echo failure`).

If it outputs `failure`. Assign write acces by executing: `sudo chown [USER] [PORT]` (e.g. `sudo chown pi /dev/ttyACM0`).
