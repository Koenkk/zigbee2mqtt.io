# Touchlink
Touchlink is a feature of Zigbee which allows devices physically close to each other to communicate with each other **without** being in the same network.

Note that not all Zigbee devices support Touchlink, but most bulbs of common brands like Philips and IKEA support this.

## Factory reset device
Zigbee2mqtt allows to factory reset devices through Touchlink. This is especially handy for e.g. Philips Hue bulbs as they cannot be factory resetted by turning them on/off 5 times. Demo: [video](https://www.youtube.com/watch?v=kcRj77YGyKk)

To factory reset a device through Touchlink bring the device close (< 10 cm) to your coordinator (e.g. CC2531 adapter). After this send a MQTT message to `zigbee2mqtt/bridge/request/touchlink/factory_reset` with an empty payload.

Zigbee2mqtt will now start scanning, this can take up to 1 minute and during this scan **your network cannot be used**. After some time the device will identify itself (e.g. a bulb will start to blink).

Now that your device has been factory reset, it will automatically join Zigbee2mqtt (make sure that joining is enabled through `permit_join: true`). If it doesn't, try powering the bulb off and on 1 time.
