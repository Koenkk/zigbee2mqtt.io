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
            const filePath = path.resolve(devicesBaseDir, file);
            try {
                const content = await fsp.readFile(filePath, 'utf8');
                if (content.includes('keepRedirect:')) {
                    console.log('Keeping redirect file', file);
                    return;
                }
            } catch (e) {
                console.warn('Could not read file before removal:', file, e.message);
            }

            await fsp.unlink(filePath);
            console.log('Removed obsolete file', file);
        }),
    );
}
