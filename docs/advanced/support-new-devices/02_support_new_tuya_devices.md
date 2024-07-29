# Support new Tuya devices

Tuya devices use a custom `manuSpecificTuya` cluster, the instructions below will help you understand it better and provide some tools to ease discovery of their functions

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
            // The model ID from: Device with modelID 'TS0601' is not supported
            // You may need to add \u0000 at the end of the name in some cases
            modelID: 'TS0601',
            // The manufacturer name from: Device with modelID 'TS0601' is not supported.
            manufacturerName: '_TZE200_d0yu2xgi',
        },
    ],
    model: 'TS0601_new',
    vendor: 'Tuya',
    description: 'Fill in a description of the device here',
    fromZigbee: [tuya.fz.datapoints],
    toZigbee: [tuya.tz.datapoints],
    onEvent: tuya.onEventSetTime, // Add this if you are getting no converter for 'commandMcuSyncTime'
    configure: tuya.configureMagicPacket,
    exposes: [
        // Here you should put all functionality that your device exposes
    ],
    meta: {
        // All datapoints go in here
        tuyaDatapoints: [],
    },
    extend: [
        // A preferred new way of extending functionality.
    ],
};

module.exports = definition;
```

### 3. Understanding Tuya datapoints

The `dataReport`and `dataResponse` types of the `manuSpecificTuya` cluster have their own format:

```js
    {name: 'seq', type: DataType.uint16},
    {name: 'dpValues', type: BuffaloZclDataType.LIST_TUYA_DATAPOINT_VALUES},
```

`seq` is the transaction number of the payload. `dpValues` is an array of "Data Points" (type: `TuyaDataPointValue`). Such a datapoint value consists of:

```js
dp: DataType.uint8;
datatype: DataType.uint8;
data: Buffer;
```

-   `dp` is so called "Data Point ID" which is at the core of Tuya devices. From the point of view of a device the DPIDs are the functions that the device provides.
-   `datatype` is the type of data contained in the `data` field, see `dataTypes` in `node_modules/zigbee-herdsman-converters/lib/tuya.js`

Some datapoints are 'report only' (they report changes that happen within the device) others are 'issue and report' (they can report by themselves, but also respond with a report when set). Data points are not unified across all Tuya devices so they can differ per device.

### 4. Mapping the datapoints

Now we have to map the datapoints in `tuyaDatapoints`. Start Zigbee2MQTT with [debug logging](../../guide/configuration/logging.md#debugging) enabled and trigger some actions on the device. You will now see logging like:

```
Zigbee2MQTT:debug 2022-11-30 18:29:19: Datapoint '106' with value '77' not defined for '_TZE200_d0yu2xgi'
```

Next we have to find out what this datapoint means (`106` in this example), there are different ways to do this:

-   [Find Tuya datapoint using the Tuya gateway](./03_find_tuya_data_points.md) (easiest but requires Tuya gateway)
-   Check if an already supported Tuya device has this datapoint mapped ([search](https://github.com/Koenkk/zigbee-herdsman-converters/search?q=tuyaDatapoints))
-   Guess based on the value

For this device we know that datapoint `106` is the humidity, we can now update the `exposes` and `tuyaDatapoints` section of the external converter:

```js
    exposes: [
        e.humidity(), // <- added the humdity expose
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

### 6. BONUS: Contacting the manufacturer

When contacting a manufacturer of Tuya compatible device DO NOT ask for Zigbee protocol of the device, they usually have no idea how the Tuya radio that they bought communicates over Zigbee. Instead ask for the UART protocol for their device, this should give you a better cooperation. You can also ask them about DPIDs and data formats for their functions.

### 7. BONUS 2: Further reading

You can read more about how the device communicates with Tuya Zigbee radio module [here](https://developer.tuya.com/en/docs/iot/device-development/access-mode-mcu/zigbee-general-solution/tuya-zigbee-module-uart-communication-protocol/tuya-zigbee-module-uart-communication-protocol?id=K9ear5khsqoty)
