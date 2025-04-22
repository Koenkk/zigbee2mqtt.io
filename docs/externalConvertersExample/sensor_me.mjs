import {battery, humidity, temperature} from "zigbee-herdsman-converters/lib/modernExtend";

/** @type{import('zigbee-herdsman-converters/lib/types').DefinitionWithExtend | import('zigbee-herdsman-converters/lib/types').DefinitionWithExtend[]} */
export default {
    zigbeeModel: ["lumi.sens"],
    model: "WSDCGQ01LM",
    vendor: "Xiaomi",
    description: "MiJia temperature & humidity sensor",
    /**
     * Modern extends encapsulate fromZigbee, toZigbee, exposes, etc..
     */
    extend: [temperature(), humidity(), battery()],
};
