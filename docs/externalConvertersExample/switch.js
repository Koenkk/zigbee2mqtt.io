const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    zigbeeModel: ['myZigbeeModel'],
    model: 'myModel',
    vendor: 'myVendor',
    description: 'My super switch!',
    fromZigbee: [fz.on_off],
    toZigbee: [tz.on_off],
    exposes: [e.switch()],
    // The configure method below is needed to make the device reports on/off state changes
    // when the device is controlled manually through the button on it.
    // The configure method will only be executed when the device pairs or when the configureKey
    // is incremented by one.
    meta: {configureKey: 1},
    configure: async (device, coordinatorEndpoint, logger) => {
        const endpoint = device.getEndpoint(1);
        await reporting.bind(endpoint, coordinatorEndpoint, ['genOnOff']);
        await reporting.onOff(endpoint);
    },
};

module.exports = definition;
