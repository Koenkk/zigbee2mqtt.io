import {promises as fsp} from 'fs';
import {normalizeModel} from './utils';
import * as path from 'path';
import {devicesBaseDir} from './constants';
import {DefinitionWithWhiteLabelOf} from './types';

export async function removeObsoleteDevices(devices: DefinitionWithWhiteLabelOf[]) {
    const files = await fsp.readdir(devicesBaseDir);
    const models = devices.map((device) => `${normalizeModel(device.model)}.md`);
    const obsolete = files.filter((file) => !models.includes(file));

    await Promise.all(
        obsolete.map(async (file) => {
            const filePath = path.resolve(devicesBaseDir, file);
            try {
                const content = await fsp.readFile(filePath, 'utf8');
                if (content.includes('redirectTo:')) {
                    console.log('Keeping redirect file', file);
                    return;
                }
            } catch (e) {
                console.warn('Could not read file before removal:', file, (e as Error).message);
            }

            await fsp.unlink(filePath);
            console.log('Removed obsolete file', file);
        }),
    );
}
