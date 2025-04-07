import {light} from 'zigbee-herdsman-converters/lib/modernExtend';

export default {
    zigbeeModel: ['myZigbeeModel'],
    model: 'myModel',
    vendor: 'myVendor',
    description: 'My super lamp!',
    // Note that fromZigbee, toZigbee, exposes (and more) are missing here since we use modern extend.
    // Modern extends contain all of them and are the preferred way of supporting new devices.
    extend: [light({colorTemp: {range: undefined}, color: true})],
};
