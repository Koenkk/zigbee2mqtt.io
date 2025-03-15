import {on_off} from 'zigbee-herdsman-converters/converters/fromZigbee';
import {on_off as tz_on_off} from 'zigbee-herdsman-converters/converters/toZigbee';
import {presets} from 'zigbee-herdsman-converters/lib/exposes';
import {bind, onOff} from 'zigbee-herdsman-converters/lib/reporting';

export default {
    zigbeeModel: ['myZigbeeModel'],
    model: 'myModel',
    vendor: 'myVendor',
    description: 'My super switch!',
    fromZigbee: [on_off],
    toZigbee: [tz_on_off],
    exposes: [presets.switch()],
    // The configure method below is needed to make the device reports on/off state changes
    // when the device is controlled manually through the button on it.
    configure: async (device, coordinatorEndpoint, logger) => {
        const endpoint = device.getEndpoint(1);
        await bind(endpoint, coordinatorEndpoint, ['genOnOff']);
        await onOff(endpoint);
    },
};
