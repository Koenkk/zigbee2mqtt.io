---
redirectFrom: /how_tos/how_to_support_new_tuya_devices.md
---

# Support new Tuya devices

## Introduction

Tuya devices are easily recognizable by their reported identifiers _(which look like gibberish)_:

- **Zigbee model** is common between products.  
  It indicates the firmware type running on the Zigbee module, e.g:
    - `TS000n`: wall switch with n gangs (1-4)
    - `TS011F`: socket / power strip / breaker
    - `TS0505`: light
    - `TS0601`: universal bridge to Tuya MCU

- **Zigbee manufacturer** is composed of a common prefix + unique product ID (last 8 chars), e.g:
    - `_TZ3000_5rpu3r0d`
    - `_TZE284_0kihjsys`
    - `_TZE2841000000_3yp57tby`

---

**This guide focuses on `TS0601` models**, which drive all their functions through the custom `manuSpecificTuya` cluster.

Since these devices do not use standard Zigbee clusters:

- Zigbee2MQTT (or other systems) can not detect their features automatically
- Standard Zigbee devices can not directly bind to them (remotes, motion sensors)
- Data reporting is not configurable; they are often spamming the network

The Tuya protocol is implemented, but **the feature schema must be obtained externally** for each product:  
[Find Tuya Data Points](./03_find_tuya_data_points.md) (from Tuya app or manufacturer)

_This does not apply to other models (non-`TS0601`). They use mostly standard Zigbee clusters._

## Instructions

### 1. Standard part of the setup

Read through basic [howto](./01_support_new_devices.md) for instructions on how to setup an external converter

### 2. Adding your device

Adding support for Tuya devices is a bit different. In order to provide support for E.G. the `TS0601` model ID you would create the following external converter:

```js
const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const modernExtend = require('zigbee-herdsman-converters/lib/modernExtend');
const e = exposes.presets;
const ea = exposes.access;
const tuya = require('zigbee-herdsman-converters/lib/tuya');

const definition = {
    // Since a lot of Tuya devices use the same modelID, but use different datapoints
    // it's necessary to provide a fingerprint instead of a zigbeeModel
    fingerprint: [
        {
            // You may need to add \u0000 at the end of the name in some cases
            modelID: 'TS0601',
            manufacturerName: '_TZE200_d0yu2xgi',
        },
    ],
    model: 'TS0601_new',
    vendor: 'Tuya',
    description: 'Fill in a description of the device here',
    extend: [
        tuya.modernExtend.tuyaBase({
            dp: true,
            // Enable this line if the device has a clock:
            // timeStart: "1970",
            // If weekday is incorrect, try:
            // timeStart: "2000",
        }),
    ],
    exposes: [
        // Here you should put all functionality that your device exposes
    ],
    meta: {
        // All datapoints go in here
        tuyaDatapoints: [],
    },
};

module.exports = definition;
```

### 3. Understanding Tuya datapoints

Each feature is represented by a datapoint ID. The device communicates datapoint values (usually only 1 per command) through the `dataReport` and `dataResponse` commands of the `manuSpecificTuya` cluster. They have their own format:

```js
{name: 'seq', type: DataType.uint16},
{name: 'dpValues', type: BuffaloZclDataType.LIST_TUYA_DATAPOINT_VALUES},
```

`seq` is the transaction number of the payload. `dpValues` is an array of datapoints (type `TuyaDataPointValue`). It consists of:

```js
dp: DataType.uint8;
datatype: DataType.uint8;
data: Buffer;
```

- `dp` is the numeric ID of the datapoint (feature)
- `datatype` can be 0-5: raw, bool, number, string, enum, bitmap ([source](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/lib/tuya.ts#L329-336))
- `data` is the actual data, with the above type

Some datapoints are 'report only' (they report changes that happen within the device) others are 'issue and report' (they can report by themselves, but also respond with a report when set). Data points are not unified across all Tuya devices so they can differ per device.

### 4. Mapping the datapoints

Now we have to map the datapoints in `tuyaDatapoints`. Start Zigbee2MQTT with [debug logging](../../guide/configuration/logging.md#debugging) enabled and trigger some actions on the device. You will now see logging like:

```
Zigbee2MQTT:debug 2022-11-30 18:29:19: Datapoint '106' with value '77' not defined for '_TZE200_d0yu2xgi'
```

Next we have to find out what this datapoint means (`106` in this example), there are different ways to do this:

- Create a Tuya account and download the mobile app: [Find Tuya Data Points](./03_find_tuya_data_points.md)
- Check for similar devices with this datapoint already mapped ([search](https://github.com/Koenkk/zigbee-herdsman-converters/search?q=tuyaDatapoints))
- Guess based on the value
- Ask the manufacturer for the "UART protocol" or "serial protocol"

For this device we know that datapoint `106` is the humidity, we can now update the `exposes` and `tuyaDatapoints` section of the external converter:

```js
exposes: [
    e.humidity(), // <- added the humidity expose
],
meta: {
    tuyaDatapoints: [
        [106, 'humidity', tuya.valueConverter.raw], // <- mapped the datapoint
    ],
},
```

The values in the mapped datapoint are as follows:

1. The datapoint (`106` in this example)
2. The key under which this value should be published in the state (`humidity` in this example)
3. The value converter, this converts the received value before publishing it (`tuya.valueConverter.raw` in this example). There are more value converters available, examples:
    - If the value needs to be divided by 10 you can use `tuya.valueConverter.divideBy10`
    - If the value needs to be mapped to a string you can use `tuya.valueConverterBasic.lookup({'single': 0, 'double': 1, 'hold': 2})`
    - For more examples search for `tuyaDatapoints` in [`tuya.ts`](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/devices/tuya.ts).

Repeat this for all datapoints.

### 5. Create a pull request

To contribute your new device definition to Zigbee2MQTT such that it will be supported out-of-the-box in the next release, follow these steps: [Create a pull request](./01_support_new_devices.md#4-create-a-pull-request).

### 6. Further reading

The reasoning behind this protocol is flexibility/scalability for Tuya.  
These devices have 2 microcontrollers inside:

- a Tuya module running the main device logic
- a radio module with common firmware (Zigbee, Thread, WiFi..) just for networking

You can read more about how the modules communicate in the [official Tuya documentation](https://developer.tuya.com/en/docs/iot/device-development/access-mode-mcu/zigbee-general-solution/tuya-zigbee-module-uart-communication-protocol/tuya-zigbee-module-uart-communication-protocol?id=K9ear5khsqoty)

## Fixing Tuya device detection

> [!NOTE]
> Manufacturers can re-use the exact firmware on models with different design (form-factor, color, region).  
> In this case, they report identical identifiers and Zigbee2MQTT can not tell them apart.

In case your device is fully working but it has the wrong picture and/or description the detection can be fixed easily:

1. First determine the Zigbee2MQTT definition (`model`, not `zigbeeModel`!) by going to the device -> about page in the Zigbee2MQTT frontend.
1. Find the definition of this device in one of the [definition files](https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices) based on the `model` from step 1, e.g. [`tuya.ts`](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/devices/tuya.ts).
1. Click on the Edit icon
1. Add the `whiteLabel` to the definition ([example](https://github.com/Koenkk/zigbee-herdsman-converters/blob/bfcd02de893edba24879d4b08e467f9ddd98cc2d/src/devices/tuya.ts#L5174)). The format is `tuya.whitelabel("VENDOR", "MODEL", "DESCRIPTION", ["MANUFACTURER_NAME"])`
    - `VENDOR`: The vendor of the device, if you don't know use `Tuya` here.
    - `MODEL`: The model number written on the device or product page
    - `DESCRIPTION`: A description of the device
    - `MANUFACTURER_NAME`: Can be retrieved from the frontend -> device -> about page -> below _Zigbee Model_, e.g. `_TZ3000_cphmq0q7` or `_TZE200_eegnwoyw`.
1. Commit changes and [Create a pull request](./01_support_new_devices.md#4-create-a-pull-request)
1. Submit a picture for the docs ([guide](./01_support_new_devices.md#5-add-device-picture-to-zigbee2mqtt-io-documentation))
