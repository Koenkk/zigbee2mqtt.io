const fs = require('fs').promises;
const path = require('path');
const devices = require('zigbee-herdsman-converters').devices;
const utils = require('./utils');

const baseDir = path.join(__dirname, '..', 'docs');
const devicesDir = path.join(baseDir, 'devices');

const supportDevices = require('./supported-devices');
const devicePage = require('./device_page');

async function generatePage(content, target) {
    if (typeof content === 'function') {
        content = await content();
    }
    return fs.writeFile(target, content);
}

// Clean devices directory
async function cleanDevices() {
    const files = await fs.readdir(devicesDir);
    return Promise.all(files.map((file) => fs.unlink(path.join(devicesDir, file))));
}

async function generateDevices() {
    return Promise.all(devices.map((device) => {
        const file = path.join(devicesDir, `${ utils.normalizeModel(device.model) }.md`);
        return fs.writeFile(file, devicePage.generate(device));
    }));
}

(async function() {
    await cleanDevices();
    await Promise.all([
        generateDevices(),
        generatePage(supportDevices, path.join(baseDir, 'information', 'supported_devices.md')),
    ]);
})();
