import throat from 'throat';
import generateDevice from './generate_device';
import {allDefinitions} from './utils';
import generate_supportedDevices from './generate_supported-devices';
import {removeObsoleteDevices} from './remove-obsolete-devices';

async function generateDevices() {
    const genDevThrottled = throat(20, (device) => generateDevice(device));
    await Promise.all(allDefinitions.map(genDevThrottled));
    console.log('Generated device-pages');
}

(async function () {
    await removeObsoleteDevices(allDefinitions);
    await Promise.all([generateDevices(), generate_supportedDevices()]);
    console.log('Done');
})();
