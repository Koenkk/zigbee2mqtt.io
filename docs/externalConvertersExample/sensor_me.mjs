import {temperature, humidity, battery} from 'zigbee-herdsman-converters/lib/modernExtend';

export default {
    zigbeeModel: ['lumi.sens'],
    model: 'WSDCGQ01LM',
    vendor: 'Xiaomi',
    description: 'MiJia temperature & humidity sensor',
    /**
     * Modern extends encapsulate fromZigbee, toZigbee, exposes, etc..
     */
    extend: [temperature(), humidity(), battery()],
};
