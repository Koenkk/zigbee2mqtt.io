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
The `dataReport`and `dataResponse` types of the `manuSpecificTuya` cluster have their own format:

```js
    {name: 'seq', type: DataType.uint16},
    {name: 'dpValues', type: BuffaloZclDataType.LIST_TUYA_DATAPOINT_VALUES},
```

`seq` is the transaction number of the payload. `dpValues` is an array of "Data Points" (type: `TuyaDataPointValue`). Such a data point value consists of:

```js
    dp: DataType.uint8;
    datatype: DataType.uint8;
    data: Buffer;
```

- `dp` is so called "Data Point ID" which is at the core of Tuya devices. From the point of view of a device the DPIDs are the functions that the device provides.
- `datatype` is the type of data contained in the `data` field, see `dataTypes` in `node_modules/zigbee-herdsman-converters/lib/tuya.js`

Some data points are 'report only' (they report changes that happen within the device) others are 'issue and report' (they can report by themselves, but also respond with a report when set). The list of currently known data points can be found in `dataPoints` in [node_modules/zigbee-herdsman-converters/lib/tuya.js](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/lib/tuya.js). Data point IDs may be device dependent, they are not unified across all Tuya devices.

For example on Saswell thermostat data point number `103` is heating setpoint, it has `value` (i.e. integer) type and is 'issue and report', we will use that information later in examples.

If you have a Tuya gateway, you can find what the function is of data point number by following [this how-to guide](./03_find_tuya_data_points.md)

### 4. Deciphering the data points
By adding the two debug converters mentioned earlier, we have the tools to decipher Tuya data points.

#### fz.tuya_data_point_dump
This converter will log a message for each data point value received in a Tuya specific message from the device. For the "heating setpoint" example with data point number `103`, this could look like:

```
zigbee-herdsman-converters:tuya_data_point_dump: Received DP #103 from 0x123456789abcdef with raw data '{"dp":103,"datatype":2,"data":[0,0,0,215]}': type='commandDataResponse', datatype='value', value='215', known DP# usage: ["maxTemp","moesSboostHeatingCountdownTimeSet","neoDuration","hyExternalTemp","trsIlluminanceLux","msVacancyDelay","hochActivePower"]
```

The log message contains the data point number, the raw and the decoded data, and the list of symbolic names which are already known for this data point number (from the `dataPoints` definition in `node_modules/zigbee-herdsman-converters/lib/tuya.js`).

In addition to the log entry, the converter will append a line to the file `data/tuya.dump.txt` (which can be used for test scripts). For each data point value received format of line is:

```txt
current_time device_ieee_address seq dpv_number dp datatype data_as_hex_octets
```

A `commandDataReport` (corresponding to the `dataReport` type) and `commandDataResponse` (corresponding to `dataResponse`) message may contain multiple data point values. `dpv_number` is the index of the data point value in the payload (0 being the first).

The example python script [read_tuya_dump.py](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/scripts/read_tuya_dump.py) is able to parse this file. It's pre-filled with Saswell data points, but should be easy to modify it to work with your device if needed. On a linux computer/Raspberry Pi you can do `tail -f -n +0 data/tuya.dump.txt | read_tuya_dump.py` to get real time view of what your device is sending.

#### tz.tuya_data_point_test
This converter will allow you to send arbitrary data point to Tuya device, you only need to publish a message in the format `datatype,dp,data` to `zigbee2mqtt/{device_friendly_name}/set/tuya_data_point_test` MQTT topic

### 5. Adding your first data point
Let's assume we want to add the heating setpoint of the Saswell thermostat first.

As the log message for the data point did not contain a suitable existing definition, first add the `saswellHeatingSetpoint` data point to `dataPoints` in `node_modules/zigbee-herdsman-converters/lib/tuya.js` with value `103`.

Then add to `node_modules/zigbee-herdsman-converters/converters/fromZigbee.js`:
```js
saswell_thermostat: {
    cluster: 'manuSpecificTuya',
    type: ['commandDataResponse', 'commandDataReport'],
    convert: (model, msg, publish, options, meta) => {
        const result = {};
        for (const dpValue of msg.data.dpValues) {
            const dp = dpValue.dp; // First we get the data point ID
            const value = tuya.getDataValue(dpValue); // This function will take care of converting the data to proper JS type
            switch (dp) {
            case tuya.dataPoints.saswellHeatingSetpoint: // DPID that we added to common
                result.current_heating_setpoint = (value / 10).toFixed(1); // value is already converted to a number in JS, and we deduced that it needs to be divided by 10
                break;
            default:
                meta.logger.warn(`zigbee-herdsman-converters:SaswellThermostat: NOT RECOGNIZED DP #${
                    dp} with data ${JSON.stringify(dpValue)}`); // This will cause zigbee2mqtt to print similar data to what is dumped in tuya.dump.txt
            }
        }
        return result;
    },
},
```

Then add to `node_modules/zigbee-herdsman-converters/converters/toZigbee.js`
```js
saswell_thermostat_current_heating_setpoint: {
    key: ['current_heating_setpoint'],
    convertSet: async (entity, key, value, meta) => {
        const temp = Math.round(value * 10);
        await tuya.sendDataPointValue(entity, tuya.dataPoints.saswellHeatingSetpoint, temp); // tuya.sendDataPoint* functions take care of converting the data to proper format
    },
},
```

The `tuya.sendDataPoint*` functions send a single data point value. In case you
want to send multiple data points at once, you can use the `tuya.sendDataPoints`
function like this:

```
        await tuya.sendDataPoints(
            entity,
            [
                tuya.dpValueFromBool(first_dp_id, first_dp_value),
                tuya.dpValueFromEnum(second_dp_id, second_dp_value),
            ],
        );
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
