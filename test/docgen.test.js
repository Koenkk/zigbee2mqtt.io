const chai = require('chai');
const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, '..', 'docs');

const supportedDevices = require('../docgen/supported-devices');

describe('Docgen', () => {
    it('supported-devices.md should be up-to-date.', (done) => {
        const actual = fs.readFileSync(path.join(base, 'information', 'supported_devices.md')).toString();
        supportedDevices().then(result => {
            chai.assert.strictEqual(
              result,
              actual,
              'supported-devices.md is not up-to-date, forgot to run npm run docgen?',
            );
            done();
        });
    }).timeout(3*60*1000); // resolving the addedAt form git takes a bit :)
});
