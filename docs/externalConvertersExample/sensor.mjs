import {temperature} from "zigbee-herdsman-converters/converters/fromZigbee";
import {presets} from "zigbee-herdsman-converters/lib/exposes";

/** @type{import('zigbee-herdsman-converters/lib/types').DefinitionWithExtend | import('zigbee-herdsman-converters/lib/types').DefinitionWithExtend[]} */
export default {
    zigbeeModel: ["lumi.sens"],
    model: "WSDCGQ01LM",
    vendor: "Xiaomi",
    description: "MiJia temperature & humidity sensor",
    extend: [],
    /**
     * Clusters reporting "from zigbee"
     */
    fromZigbee: [temperature],
    /**
     * Clusters to send commands "to zigbee"
     */
    toZigbee: [],
    /**
     * Defines which fields are exposed in the definition message to configure a frontend
     * (e.g. Z2M frontend, Home Assistant, Domoticz)
     */
    exposes: [presets.battery(), presets.temperature(), presets.humidity()],
};
