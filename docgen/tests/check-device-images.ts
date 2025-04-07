import {getMissing} from '../missing_device_images';

export async function checkDeviceImages() {
    console.log('* Test if all device images exists...');
    const missing = await getMissing();
    if (missing.length) {
        throw missing.reduce((res, d) => (res += `Missing image for Model ${d.model}: ${d.image}\n`), '');
    }
}
