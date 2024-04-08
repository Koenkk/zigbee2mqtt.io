const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const e = exposes.presets;

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
    configure: async (device, coordinatorEndpoint, logger) => {
        const endpoint = device.getEndpoint(1);
        await reporting.bind(endpoint, coordinatorEndpoint, ['genOnOff']);
        await reporting.onOff(endpoint);
    },
};

module.exports = definition;
