---
---

# Improve network range and stability
In case you are experiencing an unstable or bad network range you can do the following things to improve your network.

## Adapter
Use a [recommended](../../guide/adapters/README.md) adapter, especially the CC2530 and CC2531 are known to perform poorly.

## USB based adapter
The range of these adapters can greatly be improved when connecting them with an USB extension
cable instead of directly plugging it into the computer (e.g. Raspberry Pi). When plugged directly into the computer, the antenna suffers from interference of radio signals and electrical components of the computer. Also be sure not to position the adapter too close
to any other radio transmitting devices (e.g. a Wi-Fi router) or an SSD. 

A **USB extension cable** of 50 cm is already enough to reduce the interference. Preferably get one with shielding as this may give better results ([source](https://www.reddit.com/r/homeassistant/comments/10ebkis/psareminder_about_zigbee_interference/?utm_source=share&utm_medium=ios_app&utm_name=iossmf)).

**Do not underestimate this!** Placing your adapter close to an USB port can kill the radio signal entirely as demonstrated in [this article](https://www.unit3compliance.co.uk/2-4ghz-intra-system-or-self-platform-interference-demonstration/).

Aditionally, it may help to plug the adapter to a USB 2 instead of USB 3 port.

### Try different orientations of the adapter
RF connection between the adapter and other devices also depends on the way it is oriented in space. You might be having very poor `linkquality` reports and intermittent ping failures but once the adapter is rotated a little it all can change greatly without re-locating the coordinator far away. Try to experiment with positioning and orienting the adapter in space while monitoring the `linkquality` values reported. You might find it useful to buy a small rotating USB connector like this:

![rotating USB connector](https://i.imgur.com/AI41Oxz.png)

## Reduce Wi-Fi interference by changing the Zigbee channel
**Changing the Zigbee channel requires repairing of all your devices!**

As Wi-Fi and Zigbee both operate on the same frequency space (2.4 GHz), they can interfere with each other. By using the correct Zigbee channel, interference with Wi-Fi can (partly) be avoided. A good article explaining this is [Zigbee and Wi-Fi Coexistence](https://www.metageek.com/training/resources/zigbee-wifi-coexistence.html).

To change the Zigbee channel Zigbee2MQTT uses you have to set the [`channel` in `configuration.yaml`](../../guide/configuration/zigbee-network.md).

## Interference from other 2.4 GHz devices
Any device using the open 2.4 GHz spectrum could interfere with Zigbee such as Bluetooth or gaming devices like Logitech “Unifying” or “Lightspeed” or Razer “Hyperspeed Wireless”.

## Adding routers to your network
"Zigbee is a low-power wireless mesh network standard targeted at battery-powered devices" (see https://en.wikipedia.org/wiki/Zigbee). Yet, low transmission power can be the cause of an unstable or unreliable network:

![The signal could be too weak for the message to reach its target.](https://www.zigbee2mqtt.io/images/routing1.jpg)

Zigbee2MQTT enables the user to [increase the transmission power](https://www.zigbee2mqtt.io/guide/configuration/adapter-settings.html) for some coordinator models. However, this simple measure might yield to a network with weird behavior, if messages to an end device reach their goal, but responses (or messages) from that end device do not reliably reach the coordinator:

![More transmission power on the sender side might not be sufficient for a complete message roundtrip.](https://www.zigbee2mqtt.io/images/routing2.jpg)

Introducing a router ([read more about this](./01_zigbee_network.md)) can improve the forward path as well as the return path:

![Routers can stabilize the complete message roundtrip.](https://www.zigbee2mqtt.io/images/routing3.jpg)

You might choose a dedicated router (for example, a [SONOFF ZBDongle-E based router](https://www.zigbee2mqtt.io/devices/ZBDongle-E.html)) or a mains-powered Zigbee device (for example, a [Hue lamp](https://www.zigbee2mqtt.io/devices/8719514301481.html#philips-8719514301481)) to stabilize your network. Almost all AC powered devices will serve as a router.

Please note that there are routers of mediocre quality that might not harmonize well with your network (for example, the [SONOFF Smart Plug S26R2ZB](https://www.zigbee2mqtt.io/devices/S26R2ZB.html) is known to be limited). This may yield in message routing errors. In case you have such devices in your network, it might help to add additional routers of better quality and bind your devices to these routers (re-pairing devices with “Permit join” restricted to the new/better router) to improve the overall network performance.

If you assume to have routing problems, try [sending an MQTT request to the bridge](https://www.zigbee2mqtt.io/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request) to the topic zigbee2mqtt/bridge/request/networkmap to retrieve a map of your Zigbee network including routes.

## Hardware
Although Zigbee2MQTT does not require many resources, the hardware you are running Zigbee2MQTT on can impact the performance. This is especially true when using low-power hardware like the Raspbery Pi 3. Make sure that enough resources (CPU/memory) is free. For example, running Home Assistant + Zigbee2MQTT Home Assistant addon on the Raspberry Pi 3 may give bad performance.
