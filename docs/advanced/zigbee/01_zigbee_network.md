---
---

# Zigbee network

## Device types

In Zigbee, there are three different types of devices: end device, router, and coordinator. A Zigbee network always has **one** (and no more) coordinator, and can have multiple routers and end devices. In the case of Zigbee2MQTT, the coordinator is your CC2531 USB stick.

### End Device

End devices do not route traffic. They may also sleep, which makes end devices a suitable choice for battery operated devices. An end device only has one parent, either the coordinator or a router, generally the closest device when it was paired. All communications to and from the end device is via their parent. If a parent router goes offline all traffic to its children will cease until those end devices time out and attempt to find a new parent. Some models of end device, notably Xiaomi, don't attempt to find a new parent so will remain isolated until re-paired with the network.

_Examples: WXKG01LM, RTCGQ01LM, MCCGQ11LM_

### Router

Routers are responsible for routing traffic between different nodes. Routers may not sleep. As such, routers are not a suitable choice for battery operated devices. Routers are also responsible for receiving and storing messages intended for their children. In addition to this, routers are the gate keepers to the network. They are responsible for allowing new nodes to join the network.

_Examples: LED1545G12, 7146060PH, ZNCZ02LM, [CC2531 USB sniffer flashed with the router firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_Home_1.2/bin), [SONOFF ZBDongle-E-based router](https://www.zigbee2mqtt.io/devices/ZBDongle-E.html)_

_Note: Some devices advertising router functionality in a Zigbee network perform poorly and can thus effectively lower the stability of your Zigbee network._

### Coordinator

A coordinator is a special router. In addition to all of the router capabilities, the coordinator is responsible for forming the network. To do that, it must select the appropriate channel, PAN ID, and extended network address. It is also responsible for selecting the security mode of the network.

_Examples: [CC2531 USB sniffer flashed with the coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/default)_

### Finding out the type of your device

Zigbee2MQTT logs the device type of your devices on startup, e.g.:

```
2018-5-28 20:39:46 INFO 0x00158d00018255df (0x00158d00018255df): ZNCZ02LM - Xiaomi Mi power plug ZigBee (Router)
2018-5-28 20:39:46 INFO 0x00158d0001b79111 (0x00158d0001b79111): WSDCGQ01LM - Xiaomi MiJia temperature & humidity sensor (EndDevice)
```

### Green Power devices

Zigbee Green Power devices are special end devices that are designed to be very energy efficient. Messages from Green Power devices cannot be "understood" by normal Zigbee devices, therefore they need to be "translated" first by a Green Power "proxy". This means the Green Power device must be in range of a regular Zigbee device that supports the Green Power proxy role. Examples are Philips Hue and (at least some) Ikea Tradfri bulbs.

Green Power devices don't support binding and are not included in network scans.

When pairing a Green Power device, you must choose whether translated messages should be re-transmitted by unicast or broadcast. Only [enable join](../../guide/usage/pairing_devices.md) on a specific device to use unicast for this Green Power device. Enable join on all devices to use broadcast. Do note that each proxy will generate a unique broadcast for each Green Power event, and a single keypress may generate more than one event (e.g. "key down" then "key up"). If there are multiple proxies paired with a Green Power device, this may generate _a lot_ of traffic.

_Example Green Power devices: PTM 215Z, SR-ZGP2801K-5C, SR-ZGP2801K2-DIM, SR-ZGP2801K4-DIM_

_Note: Heavy use of broadcasts can negatively impact performance of your network (See [Broadcasts](./02_improve_network_range_and_stability.md))._

#### GP Proxies & Sinks

The following Zigbee routers have already been confirmed to support (at least some) ZGP features. Other devices very likely also work without issues, they just haven't been added to this table yet.

| Zigbee Router                                                                       | GP Proxy | GP Sink | Unicast |
| :---------------------------------------------------------------------------------- | :------: | :-----: | :-----: |
| [Custom devices (DiY) TI Router](../../devices/ti.router.md)                        |    Y     |    N    |    Y    |
| [IKEA E1603/E1702/E1708](../../devices/E1603_E1702_E1708.md)                        |    Y     |    N    |    Y    |
| [IKEA E2204](../../devices/E2204.md)                                                |    Y     |    Y    |    Y    |
| [IKEA ICPSHC24-10EU-IL-2](../../devices/ICPSHC24-10EU-IL-1_ICPSHC24-10EU-IL-2.md)²  |    Y     |    Y    |    Y    |
| [IKEA LED2101G4](../../devices/LED2101G4.md)                                        |    Y     |    Y    |    Y    |
| [IKEA LED2103G5](../../devices/LED2103G5.md)                                        |    Y     |    Y    |    Y    |
| [IKEA LED2109G6](../../devices/LED2109G6.md)                                        |    Y     |    Y    |    Y    |
| [IKEA LED2107C4](../../devices/LED2107C4.md)                                        |    Y     |    N    |    Y    |
| [Philips 1742930P7](../../devices/1742930P7.md)                                     |    Y     |    N    |    Y    |
| [Philips 3216131P5](../../devices/3216131P5.md)                                     |    Y     |    Y    |   Nⁱ    |
| [Philips 3261030P7](../../devices/3261030P7.md)                                     |    Y     |    Y    |   Nⁱ    |
| [Philips 3261031P6](../../devices/3261031P6.md)                                     |    Y     |    N    |    Y    |
| [Philips 3261331P7](../../devices/3261331P7.md)                                     |    Y     |    Y    |   Nⁱ    |
| [Philips 3418931P6](../../devices/3418931P6.md)                                     |    Y     |    N    |    Y    |
| [Philips 4023330P7](../../devices/4023330P7.md)                                     |    Y     |    Y    |   Nⁱ    |
| [Philips 4034031P7](../../devices/4034031P7.md)                                     |    Y     |    Y    |   Nⁱ    |
| [Philips 4090230P9](../../devices/4090230P9.md)                                     |    Y     |    Y    |   Nⁱ    |
| [Philips 5047130P9](../../devices/5047130P9.md)                                     |    Y     |    N    |    Y    |
| [Philips 5062131P7](../../devices/5062131P7.md)                                     |    Y     |    N    |    Y    |
| [Philips 9290024896](../../devices/9290024896.md)                                   |    Y     |    N    |    Y    |
| [Philips 9290022166](../../devices/9290022166.md)                                   |    Y     |    N    |   Nⁱ    |
| [Philips 9290022169](../../devices/9290022169.md)                                   |    Y     |    N    |    Y    |
| [Philips 929001953301](../../devices/929001953301.md)                               |    Y     |    N    |    Y    |
| [Philips 8718696548738](../../devices/8718696548738.md)                             |    Y     |    Y    |   Nⁱ    |
| [Philips 8719514491106](../../devices/8719514491106.md)                             |    Y     |    N    |    Y    |
| [Sonoff ZBDongle-E](../../devices/ZBDongle-E.md)                                    |    Y     |    N    |    Y    |
| [Sunricher R-ZG9040A-ZG9041A-D](../../devices/SR-ZG9040A_ZG9041A-D.md)              |    Y     |    Y    |    Y    |
| [Sunricher SR-ZG9101SAC-HP-SWITCH-2CH](../../devices/SR-ZG9101SAC-HP-SWITCH-2CH.md) |    Y     |    Y    |    Y    |
| [Ubisys C4](../../devices/C4.md)                                                    |    Y     |    N    |    Y    |
| [Ubisys S2](../../devices/S2.md)                                                    |    Y     |    Y    |    Y    |
| [Vesternet VES-ZB-SWI-015](../../devices/VES-ZB-SWI-015.md)                         |    Y     |    Y    |    Y    |

_ⁱ ZGP frames are always being re-transmitted as broadcast, even if unicast was requested by the coordinator. Might be a [firmware bug](https://github.com/Koenkk/zigbee2mqtt/issues/22897#issuecomment-2158291085)._

_² Only ICPSHC24-10EU-IL-2 (new version) is able to translate ZGP frames._

## Zigbee networking

This section is an overview of how the Zigbee protocol stack divides into layers (See [Wikipedia - IP layers](https://en.wikipedia.org/wiki/Internet_protocol_suite#Layer_names_and_number_of_layers_in_the_literature) ). The number of layers in this type of description often varies; this discussion uses 4:

1. the physical and MAC layers,
2. the network and transport layer,
3. the application layer, and
4. the Zigbee2MQTT layer.

Most of the focus will be on the last two layers.

### Physical and MAC layers

The Physical and MAC layers of the Zigbee protocol are defined by [IEEE 802.15.4](https://en.wikipedia.org/wiki/IEEE_802.15.4). This is a common set of standards that are used by multiple protocol stacks, including Zigbee, 6LoWPAN, Thread and Z-Wave. There are actually a few different frequency bands that IEEE 802.15.4 can use; the same 2.4 GHz band that WiFi can use, and then an 800 MhZ and a 900MhZ band whose use varies by country. In general, devices using one stack choose one of these and avoid the others. For example, Zigbee devices generally use the 2.4 GHz band and Z-Wave devices generally use the 8/900 MHz bands (depending on country).

### The Network and Transport layers

The Network and Transport layers are where the routing, security and transport between the various nodes in a Zigbee network are defined. This includes things like the network encryption model. This is also where the difference between the controller, routers and end-nodes is defined in the Zigbee network - see [device types](#device-types). There is one other Zigbee concept that I’ll put at the transport layer; the concept of Endpoints. Similar to ports in TCP/IP, Endpoints allow each physical device to have multiple virtual devices on the network. For example, a 3-gang Zigbee switch might have a single radio, and hence only one MAC address and only one Zigbee network address, but have three endpoints - one for each switch. Each endpoint can then run a single ‘switch’ interface.

### The application layer

Zigbee is more than just a networking technology; it defines a bunch of standard applications that run on the network. These applications are defined in the Zigbee Cluster Library specification (see [Zigbee Cluster Library Specification v7](https://github.com/Koenkk/zigbee-herdsman/blob/master/docs/07-5123-08-Zigbee-Cluster-Library.pdf)). Each ‘cluster’ defines one type of application communication. Each cluster type has its own integer ID, and comes in two flavours; client and server. There are clusters for low-level information gathering - getting the device model number, listing the endpoints and the clusters each endpoint implements (each endpoint can implement multiple clusters). There are clusters for simple network setup purposes, such as the Identify cluster which allows someone to ask a device to identify itself, e.g. a light asked to identify itself might start pulsing. There are clusters for on/off light control, where a light might implement the on/off server cluster and a switch might implement the on/off client cluster. There are clusters for configuration that allow a controller to configure devices in various ways.

As noted above, each cluster comes in two flavours; client and server. Generally the server is the endpoint that is running more frequently, and the client chooses to connect to the server. In many cases this isn’t clear-cut when considering the cluster functionality, so the spec decides pretty much arbitrarily.

The Zigbee controller can ‘bind’ the clusters for two endpoints together. It will connect one endpoint that implements the client variant of a cluster to another endpoint that implements the server variant of the same cluster.

There are also some special clusters. The ‘group’ cluster allows the definition of ‘groups’ - each defined by a small integer. If an endpoint implements the group cluster then it can be configured to be part of some number of groups. The device remembers which groups it is a member of. A group can then be treated like a virtual endpoint. Messages sent to a particular group ID are broadcast over the network and all devices that are part of that group will respond to the message. Similarly, a client can be bound to a group rather than another endpoint, so that, for example, a single switch can control a whole group of lights.

Similarly, the scene cluster allows a device to be configured to remember parameters from other clusters implemented on that device. A light might remember brightness. A roller blind might remember a set height. Each device can remember a small number of scenes, identified by ID.

Scenes and groups are designed to work together. One might imagine setting up a bunch of different devices, then joining them all into a group, then sending the group a ‘remember scene’ command. One could then send a ‘recall scene’ command to the group with the appropriate scene ID to cause many devices to configure themselves in a given way with minimal network traffic, and hence minimal latency.

### Zigbee2MQTT

The Zigbee stack has a certain amount of home automation protocol already defined; as discussed, devices can be formed into groups and scenes defined, switches can be bound to those groups. In such a setup the Zigbee controller might help configure the network, but afterwards it is passive at the application level.

If more flexibility is required than comes in the pre-defined Zigbee clusters, for example “Turn on the fan when the relative humidity is over 70%.”, then you need more clever control. It is here that Zigbee2MQTT comes in. It translates between Zigbee and MQTT.

When a device is added to the network with a Zigbee-Herdsman controller, the controller uses the low-level configuration clusters to interview the device and find out what the device is, what endpoints it has, and what clusters each of those endpoints implements. The Zigbee-Herdsman-Converters then record, for each model of device, which clusters the controller should bind to, and how the conversion to MQTT should be handled. Most devices in Zigbee-Herdsman-Converters use generic converters that bind to each Zigbee cluster and provide a standard MQTT interface for that cluster.

With this setup, when a switch is activated, it sends a message to the Zigbee2MQTT controller. The controller then sends out an MQTT message. The MQTT controller (which is different to the Zigbee controller. e.g. the Home Assistant package) then decides what to do based on that message. It might, for example, decide to turn on a particular light, so it would send an MQTT message requesting the light to turn on. Zigbee2MQTT would receive that message, then send a Zigbee message to the light’s endpoint using the appropriate Zigbee cluster.

This system is significantly more flexible than the base Zigbee system. But it also has higher latency (it takes longer for the system to react to a switch being toggled) and it has more points of failure. With the base Zigbee setup, not even the controller is involved once setup is complete. With the Zigbee2MQTT setup there are two Zigbee messages, two MQTT messages, and three extra processing steps (the main controller deciding what to do, and MQTT processing the messages in each direction).

Note that in some commercial Zigbee systems, such as Phillips Hue, the controller node in the Zigbee network is also the automation controller that can add additional smarts on top of the base Zigbee setup. Zigbee2MQTT inserts MQTT between the two, allowing them to be decoupled.
