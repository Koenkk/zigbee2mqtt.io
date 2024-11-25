const {temperature, humidity, battery} = require('zigbee-herdsman-converters/lib/modernExtend');

const definition = {
    zigbeeModel: ['lumi.sens'],
    model: 'WSDCGQ01LM',
    vendor: 'Xiaomi',
    description: 'MiJia temperature & humidity sensor',
    /**
     * Modern extends encapsulate fromZigbee, toZigbee, exposes, etc..
     */
    extend: [temperature(), humidity(), battery()],
};

module.exports = definition;
