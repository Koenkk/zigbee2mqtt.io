# Touchlink

Touchlink (or ZLL) is a feature that allows Zigbee devices to communicate, **without** necessarily being in the same network.

Devices must be **physically close** to each other, and have Touchlink enabled in their firmware.  
_Range depends on devices: normally 10cm, but up to 1m on strong adapters._

**Example uses:**

- Identify or reset devices near the coordinator via Zigbee2MQTT
- Reset devices via a Touchlink-capable device, e.g. [Hue dimmer switch gen 1](./../../devices/324131092621.md)
- Setup device-to-device [binding](./binding.md) (e.g. remote to light) without involving the coordinator and Zigbee2MQTT

## Support

### Coordinator

Texas Instruments adapters _(zStack, CCxxxx)_ are **fully supported**.

Silicon Labs adapters _(EmberZNet, EFR32xxxx)_ are **partially supported**.  
`2026-03-18`: The [Scan](#scan) operation does not produce responses with some firmware versions. Philips Hue reset is not affected. _Under investigation_

Other adapters/drivers are currently **not supported**.

### Devices

Compatible devices expose the `Touchlink` cluster, which includes most Philips and IKEA devices, some Tuya light bulbs, Namron relays and more.

::: warning
Some devices may disable Touchlink after a few minutes! _(security measure)_  
Power-cycle the device to make sure it's active.
:::

::: tip
All commands below can also be executed via the frontend _Touchlink_ tab.
:::

## Scan

Scan for Touchlink-enabled devices **near the coordinator**.  
The outcome of this scan can be used later, to choose which device to reset or identify.

This can take up to 1 minute. **This is a disruptive operation**, during the scan, **communication with devices is unavailable** (be sure to account for that, prefer times of lesser usage if necessary).

To scan, send an MQTT message to `zigbee2mqtt/bridge/request/touchlink/scan` with an empty payload.

The response will be sent to `zigbee2mqtt/bridge/response/touchlink/scan`, example payload: `{"data":{"found":[{"ieee_address": "0x12345678", "channel": 12}, {"ieee_address": "0x12654321", "channel": 24}]},"status":"ok"}`.

## Identify

Identify a nearby device via Touchlink _(e.g. bulb blinking)._

Send an MQTT message to `zigbee2mqtt/bridge/request/touchlink/identify` with payload e.g. `{"ieee_address": "0x12345678", "channel": 12}`  
_(Use scan from above to determine `ieee_address` and `channel`)._

## Factory reset device

Factory reset nearby devices through Touchlink. _Demonstration: [video](https://www.youtube.com/watch?v=kcRj77YGyKk)_

If the device does not enter pairing mode after one of the following methods, it may additionally need one **power-cycle.**

To pair the device again, _permit joining_ **after** the reset is done.

### Any device

Without targeting a specific device, it is advised to _power-off devices that should not be reset or ensure they are out of range_ (the first device found becomes the target).
Send an MQTT message to `zigbee2mqtt/bridge/request/touchlink/factory_reset` with an empty payload.

Zigbee2MQTT will start scanning.
After some time the device will identify itself and reset.

### Specific device

#### IEEE address + channel

Target a specific device by adding a payload to the above message, e.g. `{"ieee_address": "0x12345678", "channel": 12}`. _(Obtain the values from a scan)_

#### Serial number (Philips Hue only)

Most Philips Hue devices can be targeted without scanning, by using the serial number written on the device. More info on device-specific pages, e.g. [Hue white ambiance E27](./../../devices/9290022169.md)
