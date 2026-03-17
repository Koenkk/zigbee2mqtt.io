import {battery, diyruz_freepad_config} from "zigbee-herdsman-converters/converters/fromZigbee";
import {factory_reset} from "zigbee-herdsman-converters/converters/toZigbee";
import {access, presets} from "zigbee-herdsman-converters/lib/exposes";
import {bind} from "zigbee-herdsman-converters/lib/reporting";
import {getFromLookup, getKey} from "zigbee-herdsman-converters/lib/utils";

/** @type{Record<string, import('zigbee-herdsman-converters/lib/types').Fz.Converter>} */
const fzLocal = {
    diyruz_freepad_clicks: {
        cluster: "genMultistateInput",
        type: ["readResponse", "attributeReport"],
        convert: (model, msg, publish, options, meta) => {
            const ep = model.endpoint?.(msg.device);

            if (ep) {
                const button = getKey(ep, msg.endpoint.ID);
                const lookup = {0: "hold", 1: "single", 2: "double", 3: "triple", 4: "quadruple", 255: "release"};
                const clicks = msg.data.presentValue;
                const action = lookup[clicks] ? lookup[clicks] : `many_${clicks}`;
                return {action: `${button}_${action}`};
            }
        },
    },
};

/** @type{Record<string, import('zigbee-herdsman-converters/lib/types').Tz.Converter>} */
const tzLocal = {
    diyruz_freepad_on_off_config: {
        key: ["switch_type", "switch_actions"],
        convertGet: async (entity, key, meta) => {
            await entity.read("genOnOffSwitchCfg", ["switchType", "switchActions"]);
        },
        convertSet: async (entity, key, value, meta) => {
            const switchTypesLookup = {
                toggle: 0x00,
                momentary: 0x01,
                multifunction: 0x02,
            };
            const switchActionsLookup = {
                on: 0x00,
                off: 0x01,
                toggle: 0x02,
            };
            const intVal = Number(value);
            const switchType = getFromLookup(value, switchTypesLookup, intVal);
            const switchActions = getFromLookup(value, switchActionsLookup, intVal);

            const payloads = {
                switch_type: {switchType},
                switch_actions: {switchActions},
            };

            await entity.write("genOnOffSwitchCfg", payloads[key]);

            return {state: {[`${key}`]: value}};
        },
    },
};

/** @type{import('zigbee-herdsman-converters/lib/types').DefinitionWithExtend | import('zigbee-herdsman-converters/lib/types').DefinitionWithExtend[]} */
export default {
    zigbeeModel: ["DIYRuZ_FreePad_ext"],
    model: "DIYRuZ_FreePad_ext",
    vendor: "DIYRuZ",
    description: "[DiY 8/12/20 button keypad](http://modkam.ru/?p=1114)",
    fromZigbee: [fzLocal.diyruz_freepad_clicks, diyruz_freepad_config, battery],
    toZigbee: [tzLocal.diyruz_freepad_on_off_config, factory_reset],
    exposes: [presets.battery(), presets.action(["*_single", "*_double", "*_triple", "*_quadruple", "*_release", "*_hold"])].concat(
        ((enpoinsCount) => {
            const features = [];

            for (let i = 1; i <= enpoinsCount; i++) {
                const epName = `button_${i}`;
                features.push(presets.enum("switch_type", access.ALL, ["toggle", "momentary", "multifunction"]).withEndpoint(epName));
                features.push(presets.enum("switch_actions", access.ALL, ["on", "off", "toggle"]).withEndpoint(epName));
            }

            return features;
        })(20),
    ),
    configure: async (device, coordinatorEndpoint, definition) => {
        const endpoint = device.getEndpoint(1);

        if (endpoint) {
            await bind(endpoint, coordinatorEndpoint, ["genPowerCfg"]);

            if (device?.applicationVersion ?? 0 < 3) {
                await endpoint.configureReporting("genPowerCfg", [
                    {
                        attribute: "batteryPercentageRemaining",
                        minimumReportInterval: 0,
                        maximumReportInterval: 3600,
                        reportableChange: 0,
                    },
                    {
                        attribute: "batteryVoltage",
                        minimumReportInterval: 0,
                        maximumReportInterval: 3600,
                        reportableChange: 0,
                    },
                ]);
            }
        }

        for (const ep of device.endpoints) {
            if (ep.outputClusters.includes(18)) {
                await bind(ep, coordinatorEndpoint, ["genMultistateInput"]);
            }
        }
    },
    endpoint: (device) => {
        return {
            button_1: 1,
            button_2: 2,
            button_3: 3,
            button_4: 4,
            button_5: 5,
            button_6: 6,
            button_7: 7,
            button_8: 8,
            button_9: 9,
            button_10: 10,
            button_11: 11,
            button_12: 12,
            button_13: 13,
            button_14: 14,
            button_15: 15,
            button_16: 16,
            button_17: 17,
            button_18: 18,
            button_19: 19,
            button_20: 20,
        };
    },
};
