/**
 * This script generates a device page
 */
const utils = require('./utils');
const notes = require('./device_page_notes');
const exposes = require('./device_page_exposes');
const assert = require('assert');
const devices = require('zigbee-herdsman-converters').devices;
const path = require('path');
const imageBase = path.join(__dirname, '..', 'docs', 'images', 'devices');

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

    const image = utils.getImage(device, imageBase);
    const exposesDescription = Array.from(new Set(device.exposes.map((e) => e.hasOwnProperty('name') ? e.name : `${e.type} (${e.features.map((f) => f.name).join(', ')})`))).join(', ');
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
| Exposes | ${exposesDescription} |
| Picture | ![${device.vendor} ${device.model}](${image}) |
${device.whiteLabel ? `| White-label | ${device.whiteLabel.map((d) => `${d.vendor} ${d.model}`).join(', ')} |\n` : ''}
## Notes

${getNotes(device)}
${device.hasOwnProperty('ota') && ['AC01353010G'].includes(device.model) === false ? `
## OTA updates
This device supports OTA updates, for more information see [OTA updates](../information/ota_updates.md).
` : ''}
${exposes.generate(device)}
`;
}

function getNotes(device) {
    let deviceTypeSpecificConfigurationHeader = false;
    const note = notes
        .filter((n) => {
            if (n.simulatedBrightness) {
                if (device.model === 'ICTC-G-1' || device.model === 'E1744') return true;
                return device.fromZigbee.find((c) => {
                    return arrayEquals(c.type, ['commandMoveToLevel', 'commandMoveToLevelWithOnOff']) ||
                        arrayEquals(c.type, ['commandMove', 'commandMoveWithOnOff']) ||
                        arrayEquals(c.type, ['commandStep', 'commandStepWithOnOff']);
                });
            }

            if (n.hasOwnProperty('exposes') && !n.exposes(device.exposes)) {
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

module.exports = {
    generate,
};
