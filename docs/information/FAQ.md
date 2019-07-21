---
---
# Frequently asked questions

## Can Zigbee stick X be supported?
Unless the stick supports Texas Instruments Z-Stack, no. Zigbee2mqtt is based on zigbee-shepherd, zigbee-shepherd is based on Texas Instruments Z-Stack which means that only Z-Stack based device can be supported.

## I read that zigbee2mqtt has a limit of 25 devices, is this true?
Definitely not! The zigbee2mqtt firmware indeed supports 25 devices connected **directly** to the coordinator. However, by having routers in your network the network size can be extended. Probably all AC powered devices e.g. bulbs serve as a router, you can even use another [CC2530/CC2531 as a router](../information/cc_sniffer_devices.md) (which has a limit of 21 devices). Various zigbee2mqtt users have reported that networks of 40+ nodes work without problems.

### Example
When using the Zigbee2mqtt coordinator firmware + 2 CC2531 routers your device limit will be:
- Coordinator: 15 - 2 routers = 13
- Router 1: 21
- Router 2: 21
- **Device limit of 55 devices**