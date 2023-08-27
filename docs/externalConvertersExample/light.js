const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const legacy = require('zigbee-herdsman-converters/lib/legacy');
const extend = require('zigbee-herdsman-converters/lib/extend');
const ota = require('zigbee-herdsman-converters/lib/ota');
const tuya = require('zigbee-herdsman-converters/lib/tuya');
const utils = require('zigbee-herdsman-converters/lib/utils');
const globalStore = require('zigbee-herdsman-converters/lib/store');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    fingerprint: tuya.fingerprint('TS011F', ['_TZ3000_jak16dll']),
    model: 'TS011F_plug_2_gang',
    description: 'Smart plug (with power monitoring)',
    vendor: 'TuYa',
    ota: ota.zigbeeOTA,
    extend: tuya.extend.switch({
        electricalMeasurements: true, powerOutageMemory: true, indicatorMode: true, childLock: true, endpoints: ['l1', 'l2']}),
    whiteLabel: [
        tuya.whitelabel('Immax', '07752L', 'NEO smart internal double socket', ['_TZ3000_jak16dll']),
    ],
    configure: async (device, coordinatorEndpoint, logger) => {
        await tuya.configureMagicPacket(device, coordinatorEndpoint, logger);
        const endpoint = device.getEndpoint(1);
        await reporting.bind(endpoint, coordinatorEndpoint, ['genOnOff', 'haElectricalMeasurement', 'seMetering']);
        await reporting.rmsVoltage(endpoint, {change: 5});
        await reporting.rmsCurrent(endpoint, {change: 50});
        await reporting.activePower(endpoint, {change: 10});
        await reporting.currentSummDelivered(endpoint);
        endpoint.saveClusterAttributeKeyValue('haElectricalMeasurement', {acCurrentDivisor: 1000, acCurrentMultiplier: 1});
        endpoint.saveClusterAttributeKeyValue('seMetering', {divisor: 100, multiplier: 1});
        device.save();
    },
    endpoint: (device) => {
        return {'l1': 1, 'l2': 2};
    },
    meta: {multiEndpoint: true},
};

module.exports = definition;
