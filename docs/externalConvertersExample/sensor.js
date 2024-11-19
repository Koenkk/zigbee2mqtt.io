const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const ota = require('zigbee-herdsman-converters/lib/ota');
const utils = require('zigbee-herdsman-converters/lib/utils');
const globalStore = require('zigbee-herdsman-converters/lib/store');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    zigbeeModel: ['lumi.sens'],
    model: 'WSDCGQ01LM',
    vendor: 'Xiaomi',
    description: 'MiJia temperature & humidity sensor',
    extend: [],
    /**
     * Clusters reporting "from zigbee"
     */
    fromZigbee: [fz.temperature],
    /**
     * Clusters to send commands "to zigbee"
     */
    toZigbee: [],
    /**
     * Defines which fields are exposed in the definition message to configure a frontend
     * (e.g. Z2M frontend, Home Assistant, Domoticz)
     */
    exposes: [e.battery(), e.temperature(), e.humidity()],
};

module.exports = definition;
