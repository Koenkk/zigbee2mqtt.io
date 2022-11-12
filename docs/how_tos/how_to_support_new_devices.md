const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const e = exposes.presets;

const definition = {
    zigbeeModel: ['S26R2ZB']
    model: 'S26R2ZB',
    vendor: 'Sonoff',
    description: 'Sonoff zigbee switch',
    fromZigbee: [fz.on_off],
    toZigbee: [tz.on_off],
    exposes: [e.switch()],
    configure: async (device, coordinatorEndpoint, logger) => {
        const endpoint = device.getEndpoint(1);
        await reporting.bind(endpoint, coordinatorEndpoint, ['genOnOff']);
    },
};

module.exports = definition;
