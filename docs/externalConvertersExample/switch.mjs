import {on_off} from "zigbee-herdsman-converters/converters/fromZigbee";
import {on_off as tzOnOff} from "zigbee-herdsman-converters/converters/toZigbee";
import {presets} from "zigbee-herdsman-converters/lib/exposes";
import {bind, onOff} from "zigbee-herdsman-converters/lib/reporting";

/** @type{import('zigbee-herdsman-converters/lib/types').DefinitionWithExtend | import('zigbee-herdsman-converters/lib/types').DefinitionWithExtend[]} */
export default {
    zigbeeModel: ["myZigbeeModel"],
    model: "myModel",
    vendor: "myVendor",
    description: "My super switch!",
    fromZigbee: [on_off],
    toZigbee: [tzOnOff],
    exposes: [presets.switch()],
    // The configure method below is needed to make the device reports on/off state changes
    // when the device is controlled manually through the button on it.
    configure: async (device, coordinatorEndpoint, definition) => {
        const endpoint = device.getEndpoint(1);

        if (endpoint) {
            await bind(endpoint, coordinatorEndpoint, ["genOnOff"]);
            await onOff(endpoint);
        }
    },
};
