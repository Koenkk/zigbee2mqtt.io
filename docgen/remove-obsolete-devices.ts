import {promises as fsp} from 'fs';
import {normalizeModel} from './utils';
import * as path from 'path';
import {devicesBaseDir} from './constants';

export async function removeObsoleteDevices(devices) {
    const files = await fsp.readdir(devicesBaseDir);
    const models = devices.map((device) => `${normalizeModel(device.model)}.md`);
    const obsolete = files.filter((file) => !models.includes(file));

    await Promise.all(
        obsolete.map(async (file) => {
            await fsp.unlink(path.resolve(devicesBaseDir, file));
            console.log('Removed obsolete file', file);
        }),
    );
}
