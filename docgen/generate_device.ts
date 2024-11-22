/**
 * This script generates a device page
 */
import * as path from 'path';
import {promises as fsp} from 'fs';
import {generatePage, getAddedAt, getImage, normalizeModel} from './utils';
import {generateExpose} from './device_page_exposes';
import {generateOptions} from './device_page_options';
import {devicesBaseDir, imageBaseDir, imageBaseUrl} from './constants';
import {getNotes} from './device_page_notes';

export function resolveDeviceFile(model) {
    return path.resolve(devicesBaseDir, `${normalizeModel(model)}.md`);
}

export default async function generateDevice(device) {
    const deviceFile = resolveDeviceFile(device.model);
    const image = await getImage(device, imageBaseDir, imageBaseUrl);
    const exposes = typeof device.exposes === 'function' ? device.exposes() : device.exposes;
    const exposesDescription = Array.from(new Set(exposes.map((e) => e.name ?? `${e.type} (${e.features.map((f) => f.name).join(', ')})`))).join(
        ', ',
    );

    let addedAt = '';
    let notes = '';
    try {
        const existingContent = await fsp.readFile(deviceFile, 'utf-8');
        addedAt = getAddedAt(existingContent);
        const lines = existingContent.split(/\n\r?/);
        // Read existing notes between ## Notes and <!-- Notes END
        let isInNotes = false;
        for (let line of lines) {
            if (!isInNotes && line.startsWith('<!-- Notes BEGIN')) {
                isInNotes = true;
            } else if (isInNotes) {
                if (line.startsWith('<!-- Notes END')) {
                    break;
                } else {
                    notes += line + '\n';
                }
            }
        }
        notes = notes.trim();
    } catch (e) {
        console.log(`New Device ${device.vendor} ${device.model}`);
    }

    const content = `---
title: "${device.vendor} ${device.model} control via MQTT"
description: "Integrate your ${device.vendor} ${device.model} via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: ${addedAt}
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ${device.vendor} ${device.model}

|     |     |
|-----|-----|
| Model | ${device.model}  |
| Vendor  | [${device.vendor}](/supported-devices/#v=${encodeURIComponent(device.vendor)})  |
| Description | ${device.description} |
| Exposes | ${exposesDescription} |
| Picture | ![${device.vendor} ${device.model}](${image}) |
${device.whiteLabel ? `| White-label | ${device.whiteLabel.map((d) => `${d.vendor} ${d.model}`).join(', ')} |\n` : ''}

<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
${notes || '\n'}
<!-- Notes END: Do not edit below this line -->
${getNotes(device)}
${
    device.ota
        ? `
## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).
`
        : ''
}
${generateOptions(device)}
${generateExpose(device)}
`;

    return generatePage(content, deviceFile);
}
