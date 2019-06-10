/**
 * This script generates a device page
 */
const utils = require('./utils');
const notes = require('./device_page_notes');

function generate(device) {
    const image = utils.getImage(device.model);

    return `
*To contribute tot his page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docgen/device_page_notes.js)*

# Device

| Model | ${device.model}  |
| Vendor  | ${device.vendor}  |
| Description | ${device.description} |
| Supports | ${device.supports} |
| Picture | ![${image}](${image}) |

## Notes

${getNotes(device)}
`;
}

function getNotes(device) {
    const note = notes
        .filter((n) => {
            if (n.hasOwnProperty('supports') && !device.supports.includes(n.supports)) {
                return false;
            }

            if (n.hasOwnProperty('notModel') && n.notModel.includes(device.model)) {
                return false;
            }

            if (typeof(n.model) == 'object' && n.model.includes(device.model)) {
                return true;
            }

            return n.model === device.model || n.vendor === device.vendor;
        })
        .map((n) => n.note)
        .join('\n');
    return note === '' ? 'None' : note;
}

module.exports = {
    generate,
};
