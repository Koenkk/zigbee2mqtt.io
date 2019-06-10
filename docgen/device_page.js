/**
 * This script generates a device page
 */
const utils = require('./utils');
const notes = require('./device_page_notes');

function generate(device) {
    const image = utils.getImage(device.model);

    return `
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
    const note = notes.filter((n) => n.model === device.model).map((n) => n.note).join('\n');
    return note === '' ? 'None' : note;
}

module.exports = {
    generate,
};
