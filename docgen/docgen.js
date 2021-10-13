const fs = require('fs');
const path = require('path');
const devices = require('zigbee-herdsman-converters').devices;
const utils = require('./utils');

const base = path.join(__dirname, '..', 'docs');

const supportDevices = require('./supported-devices');
const supportDevicesTable = require('./supported-devices-table');
const devicePage = require('./device_page');

fs.writeFileSync(path.join(base, 'information', 'supported_devices.md'), supportDevices);
fs.writeFileSync(path.join(base, 'information', 'supported_devices_table.md'), supportDevicesTable);

// Clean devices directory
for (const file of fs.readdirSync(path.join(base, 'devices'))) {
    fs.unlinkSync(path.join(base, 'devices', file));
}

devices.forEach((device) => {
    const file = path.join(base, 'devices', `${utils.normalizeModel(device.model)}.md`);
    fs.writeFileSync(file, devicePage.generate(device));
});
