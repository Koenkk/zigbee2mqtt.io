const devices = require('zigbee2mqtt/node_modules/zigbee-herdsman-converters').devices;
const chai = require('chai');
const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');

const imageBase = path.join(__dirname, '..', 'docs', 'images', 'devices');
const replaceByDash = [new RegExp('/', 'g'), new RegExp(':', 'g'), new RegExp(' ', 'g')];

describe('Device images', () => {
    it('Shouldnt only contain images of supported device', () => {
        const pictures = devices.map((d) => {
            let image = d.model;
            replaceByDash.forEach((r) => image = image.replace(r, '-'));
            image = `${image}.jpg`;
            return image;
        });

        for (const device of devices) {
            if (device.whiteLabel) {
                for (const whiteLabel of device.whiteLabel) {
                    let image = whiteLabel.model;
                    replaceByDash.forEach((r) => image = image.replace(r, '-'));
                    image = `${image}.jpg`;
                    pictures.push(image);
                }
            }
        }

        for (const file of fs.readdirSync(imageBase)) {
            if (['.DS_Store'].includes(file)) {
                continue;
            }

            if (!pictures.includes(file)) {
                // Don't throw errors as it makes PR to add docs for to be supported devices fail.
                console.log(`${file} in images directory but is not supported`);
            }
        }
    });

    it('All devices should have an image in jpg format', () => {
        const missing = [];

        const hasImage = (model) => {
            let image = model;
            replaceByDash.forEach((r) => image = image.replace(r, '-'));
            image = `${image}.jpg`;
            const imagePath = path.join(imageBase, image);

            return {exists: fs.existsSync(imagePath), path: image};
        };

        devices.forEach((d) => {
            const result = hasImage(d.model);
            if (!result.exists) {
                missing.push(result.path);
            }
        });

        missing.forEach((m) => console.log(m.replace('.jpg', '')));

        chai.assert.strictEqual(missing.length, 0, `Missing device images: ${missing.join(', ')}`);
    });

    it('All device images should have a dimension of 150x150', () => {
        const invalid = [];

        fs.readdirSync(imageBase).forEach((file) => {
            if (!file.toLowerCase().endsWith('.jpg')) {
                return;
            }

            const dimensions = sizeOf(path.join(imageBase, file));

            if (dimensions.width != 150 || dimensions.height != 150) {
                invalid.push(file);
            }
        });

        chai.assert.strictEqual(invalid.length, 0, `Invalid device image dimensions: ${invalid.join(', ')}`);
    });

    it('All device images should be .jpg', () => {
        const invalid = [];

        fs.readdirSync(imageBase).forEach((file) => {
            if (['.DS_Store'].includes(path.basename(file))) {
                return;
            }

            if (!file.toLowerCase().endsWith('.jpg')) {
                invalid.push(file);
                return;
            }
        });

        chai.assert.strictEqual(invalid.length, 0, `Device image not .jpg: ${invalid.join(', ')}`);
    });
});
