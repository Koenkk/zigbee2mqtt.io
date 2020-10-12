/**
 * This script generates a device page
 */
const utils = require('./utils');
const notes = require('./device_page_notes');
const YAML = require('json2yaml');
const HomeassistantExtension = require('zigbee2mqtt/lib/extension/homeassistant');
const homeassistant = new HomeassistantExtension(null, null, null, null, {on: () => {}});
const assert = require('assert');
const devices = require('zigbee2mqtt/node_modules/zigbee-herdsman-converters').devices;

function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
}

function generate(device) {
    // verify that all model and notModel exist;
    for (const note of notes) {
        const check = (attr) => {
            if (note[attr]) {
                if (typeof note[attr] === 'string') {
                    assert(devices.find((d) => d.model === note[attr]), note[attr]);
                } else {
                    for (const m of note[attr]) {
                        assert(devices.find((d) => d.model === m), m);
                    }
                }
            }
        };

        check('model');
        check('notModel');
    }

    const image = utils.getImage(device.model);

    return `---
title: "${device.vendor} ${device.model} control via MQTT"
description: "Integrate your ${device.vendor} ${device.model} via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/${utils.normalizeModel(device.model)}.md)*

# ${device.vendor} ${device.model}

| Model | ${device.model}  |
| Vendor  | ${device.vendor}  |
| Description | ${device.description} |
| Supports | ${device.supports} |
| Picture | ![${device.vendor} ${device.model}](${image}) |
${device.whiteLabel ? `| White-label | ${device.whiteLabel.map((d) => `${d.vendor} ${d.model}`).join(', ')} |\n` : ''}
## Notes

${getNotes(device)}
${device.hasOwnProperty('ota') && ['AC01353010G'].includes(device.model) === false ? `
## OTA updates
This device supports OTA updates, for more information see [OTA updates](../information/ota_updates.md).
` : ''}
## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:

${getHomeAssistantConfig(device)}
`;
}

function getNotes(device) {
    let deviceTypeSpecificConfigurationHeader = false;
    const note = notes
        .filter((n) => {
            if (n.simulatedBrightness) {
                if (device.model === 'ICTC-G-1') return true;
                return device.fromZigbee.find((c) => {
                    return arrayEquals(c.type, ['commandMoveToLevel', 'commandMoveToLevelWithOnOff']) ||
                        arrayEquals(c.type, ['commandMove', 'commandMoveWithOnOff']) ||
                        arrayEquals(c.type, ['commandStep', 'commandStepWithOnOff']);
                });
            }

            if (n.hasOwnProperty('supports') && n.supports.filter((s) => device.supports.includes(s)).length === 0) {
                return false;
            }

            if (n.hasOwnProperty('notSupports') &&
                n.notSupports.filter((s) => device.supports.includes(s)).length !== 0) {
                return false;
            }

            if (n.hasOwnProperty('notDescription') &&
                n.notDescription.filter((s) => device.description.includes(s)).length !== 0) {
                return false;
            }

            if (n.hasOwnProperty('notModel') && n.notModel.includes(device.model)) {
                return false;
            }

            if (typeof(n.model) == 'object' && n.model.includes(device.model)) {
                return true;
            }

            if (!n.hasOwnProperty('model') && !n.hasOwnProperty('vendor')) {
                return true;
            }

            return n.model === device.model || (Array.isArray(n.vendor) ? n.vendor.includes(device.vendor) : n.vendor === device.vendor);
        })
        .map((n) => {
            if (n.deviceTypeSpecificConfiguration && !deviceTypeSpecificConfigurationHeader) {
                deviceTypeSpecificConfigurationHeader = true;
                return `### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*
${n.note}`;
            } else {
                return n.note;
            }
        })
        .join('\n');
    return note === '' ? 'None' : note;
}

function getHomeAssistantConfig(device) {
    let configuration = `
{% raw %}
\`\`\`yaml
`;
    const configurations = homeassistant.getConfigs({definition: device, settings: {}});

    if (configurations) {
        configurations.forEach((d, i) => {
            configuration += getHomeassistantConfigForConfiguration(d);
            if (configurations.length > 1 && i < configurations.length - 1) {
                configuration += '\n';
            }
        });

        configuration += '```\n';
        configuration += '{% endraw %}\n\n';
    }

    return configuration;
}

function getHomeassistantConfigForConfiguration(device) {
    const payload = {
        platform: 'mqtt',
        state_topic: 'zigbee2mqtt/<FRIENDLY_NAME>',
        availability_topic: 'zigbee2mqtt/bridge/state',
        ...device.discovery_payload,
    };

    if (payload.command_topic) {
        if (payload.command_topic_prefix) {
            payload.command_topic = `zigbee2mqtt/<FRIENDLY_NAME>/${payload.command_topic_prefix}/set`;
        } else {
            payload.command_topic = `zigbee2mqtt/<FRIENDLY_NAME>/set`;
        }
    }

    delete payload.command_topic_prefix;

    if (!payload.state_topic) {
        delete payload.state_topic;
    }

    if (payload.position_topic) {
        payload.position_topic = 'zigbee2mqtt/<FRIENDLY_NAME>';
    }

    if (payload.set_position_topic) {
        payload.set_position_topic = 'zigbee2mqtt/<FRIENDLY_NAME>/set';
    }

    let yml = YAML.stringify([payload]);
    yml = yml.replace(/(-) \n {4}/g, '- ');
    yml = yml.replace('---', `${device.type}:`);
    return yml;
}

module.exports = {
    generate,
};
