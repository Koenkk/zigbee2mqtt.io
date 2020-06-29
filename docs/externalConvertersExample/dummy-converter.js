const zigbeeHerdsmanConverters = require('zigbee-herdsman-converters');

const getKey = (object, value) => {
    for (const key in object) {
        if (object[key] == value) return key;
    }
};
const bind = async (endpoint, target, clusters) => {
    for (const cluster of clusters) {
        await endpoint.bind(cluster, target);
    }
};

const fz = {
    external_fz_converter_example: {
        cluster: 'genMultistateInput',
        type: ['readResponse', 'attributeReport'],
        convert: (model, msg, publish, options, meta) => {
            return {
                action: 'dummy',
            };
        },
    },
};

const tz = {
    external_tz_converter_example: {
        key: ['switch_type', 'switch_actions'],
        convertSet: async (entity, key, value, meta) => {
            // dummy
        },
    },
};

const device = {
    zigbeeModel: ['dummy device'],
    model: 'dummy device',
    vendor: 'dummy endor',
    description: 'dummy description',
    supports: '',
    // this is example how to use converters from z2m
    fromZigbee: [fz.external_fz_converter_example, zigbeeHerdsmanConverters.fromZigbeeConverters.battery],
    // this is example how to use converters from z2m
    toZigbee: [tz.external_tz_converter_example, zigbeeHerdsmanConverters.toZigbeeConverters.factory_reset],
    meta: {
        configureKey: 1,
    },
    configure: async (device, coordinatorEndpoint) => {
        // dummy configure
    },
};
module.exports = device;
