# Support new Tuya devices
Tuya devices use a custom `manuSpecificTuya` cluster, the instructions below will help you understand it better and provide some tools to ease discovery of their functions

## Instructions
### 1. Standard part of the setup
Read through basic [howto](./01_support_new_devices.md) for instructions on how to setup an external converter

### 2. Adding your device
Adding support for TuYa devices is a bit different. In order to provide support for E.G. the `TS0601` model ID you would create the following external converter:

```js
const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;
const tuya = require("zigbee-herdsman-converters/lib/tuya");

const definition = {
    // Since a lot of Tuya devices use the same modelID, but use different data points
    // it's usually necessary to provide a fingerprint instead of a zigbeeModel
    fingerprint: [
        {
            // The model ID from: Device with modelID 'TS0601' is not supported
            // You may need to add \u0000 at the end of the name in some cases
            modelID: 'TS0601',
            // The manufacturer name from: Device with modelID 'TS0601' is not supported.
            manufacturerName: '_TZE200_c88teujp'
        },
    ],
    model: 'SEA802-Zigbee',
    vendor: 'Saswell',
    description: 'Thermostatic radiator valve',
    supports: 'thermostat, temperature',
    fromZigbee: [
        fz.ignore_basic_report, // Add this if you are getting no converter for 'genBasic'
        fz.tuya_data_point_dump, // This is a debug converter, it will be described in the next part
    ],
    toZigbee: [
        tz.tuya_data_point_test, // Another debug converter
    ],
    onEvent: tuya.onEventSetTime, // Add this if you are getting no converter for 'commandMcuSyncTime'
    configure: async (device, coordinatorEndpoint, logger) => {
        const endpoint = device.getEndpoint(1);
        await reporting.bind(endpoint, coordinatorEndpoint, ['genBasic']);
    },
    exposes: [
        // Here you should put all functionality that your device exposes
    ],
};

module.exports = definition;
```

Once finished, restart Zigbee2MQTT and trigger some actions on the device.

### 3. Understanding Tuya data points
The `commandDataResponse` and `commandDataReport` types of the `manuSpecificTuya` cluster have it's own format:

```js
    {name: 'seq', type: DataType.uint16},
    {name: 'dp', type: DataType.uint8},
    {name: 'datatype', type: DataType.uint8},
    {name: 'fn', type: DataType.uint8},
    {name: 'data', type: DataType.octetStr},
```

- `seq` is transaction number.
- `dp` is so called "Data Point ID" which is at the core of Tuya devices. From the point of view of a device the DPIDs are the functions that the device provides.
- `datatype` is the type of data contained in the `data` field, see `dataTypes` in `node_modules/zigbee-herdsman-converters/lib/tuya.js`

Some data points are 'report only' (they report changes that happen within the device) others are 'issue and report' (they can report by themselves, but also respond with a report when set). The list of currently known data points can be found in `dataPoints` in [node_modules/zigbee-herdsman-converters/lib/tuya.js](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/lib/tuya.js).

For example on Saswell thermostat data point number `103` is heating setpoint, it has `value` type and is 'issue and report', we will use that information later in examples.

If you have a Tuya gateway, you can find what the function is of data point number by following [this how-to guide](./03_find_tuya_data_points.md)

### 4. Deciphering the data points
By adding the two debug converters mentioned earlier, we have the tools to decipher Tuya data points.

#### fz.tuya_data_point_dump
This converter will append a line in `data/tuya.dump.txt` file whenever it receives a Tuya specific message from the device, format of the file is:

```txt
current_time device_ieee_address seq dp datatype fn data_as_hex_octets
```

A python script [read_tuya_dump.py](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/scripts/read_tuya_dump.py) can be used to parse this file. It's pre filled with Saswell data points, but should be easy to modify it to work with your device.

#### tz.tuya_data_point_test
This converter will allow you to send arbitrary data point to Tuya device, you only need to publish a message in the format `datatype,dp,data` to `zigbee2mqtt/{device_friendly_name}/set/tuya_data_point_test` MQTT topic

#### Usage
On a linux computer/Raspberry Pi you can do `tail -f -n +0 data/tuya.dump.txt | read_tuya_dump.py` to get real time view of what your device is sending.

### 5. Adding your first data point
Let's assume we want to add the heating setpoint of the Saswell thermostat first.

First add the `saswellHeatingSetpoint` data point to `dataPoints` in `node_modules/zigbee-herdsman-converters/lib/tuya.js` with value `103`.

Then add to `node_modules/zigbee-herdsman-converters/converters/fromZigbee.js`:
```js
saswell_thermostat: {
    cluster: 'manuSpecificTuya',
    type: ['commandDataResponse', 'commandDataReport'],
    convert: (model, msg, publish, options, meta) => {
        const dp = msg.data.dp; // First we get the data point ID
        const value = tuyaGetDataValue(msg.data.datatype, msg.data.data); // This function will take care of converting the data to proper JS type

        switch (dp) {
        case tuya.dataPoints.saswellHeatingSetpoint: // DPID that we added to common
            return {current_heating_setpoint: (value / 10).toFixed(1)}; // value is already converted to a number in JS, and we deduced that it needs to be divided by 10
        default:
            meta.logger.warn(`zigbee-herdsman-converters:SaswellThermostat: NOT RECOGNIZED DP #${
                dp} with data ${JSON.stringify(msg.data)}`); // This will cause zigbee2mqtt to print similar data to what is dumped in tuya.dump.txt
        }        
    },
},
```

Then add to `node_modules/zigbee-herdsman-converters/converters/toZigbee.js`
```js
saswell_thermostat_current_heating_setpoint: {
    key: ['current_heating_setpoint'],
    convertSet: async (entity, key, value, meta) => {
        const temp = Math.round(value * 10);
        await sendTuyaDataPointValue(entity, tuya.dataPoints.saswellHeatingSetpoint, temp); // sendTuyaDataPoint* functions take care of converting the data to proper format
    },
},
```

Now update your external converter:
```js
const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    fingerprint: [
        {modelID: 'TS0601', manufacturerName: '_TZE200_c88teujp'},
    ],
    model: 'SEA802-Zigbee',
    vendor: 'Saswell',
    description: 'Thermostatic radiator valve',
    fromZigbee: [
        fz.ignore_basic_report,
        fz.tuya_data_point_dump,
        fz.saswell_thermostat,
    ],
    toZigbee: [
        tz.tuya_data_point_test,
        tz.saswell_thermostat_current_heating_setpoint,
    ],
    onEvent: tuya.onEventSetTime,
    configure: async (device, coordinatorEndpoint, logger) => {
        const endpoint = device.getEndpoint(1);
        await bind(endpoint, coordinatorEndpoint, ['genBasic']);
    },
    exposes: [
        // Here you should put all functionality that your device exposes
    ],
};

module.exports = definition;
```

Repeat for all data points.

### 6. BONUS: Contacting the manufacturer
When contacting a manufacturer of Tuya compatible device DO NOT ask for Zigbee protocol of the device, they usually have no idea how the Tuya radio that they bought communicates over Zigbee. Instead ask for the UART protocol for their device, this should give you a better cooperation. You can also ask them about DPIDs and data formats for their functions.

### 7. BONUS 2: Further reading
You can read more about how the device communicates with Tuya Zigbee radio module [here](https://developer.tuya.com/en/docs/iot/device-development/access-mode-mcu/zigbee-general-solution/tuya-zigbee-module-uart-communication-protocol/tuya-zigbee-module-uart-communication-protocol?id=K9ear5khsqoty)
