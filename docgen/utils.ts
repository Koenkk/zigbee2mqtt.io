import {promises as fsp} from 'fs';
import * as path from 'path';
import * as fs from 'fs';
// @ts-expect-error TODO fix paths
import baseDefinitions from 'zigbee-herdsman-converters/devices/index';
import {Definition, prepareDefinition} from 'zigbee-herdsman-converters';

export async function checkFileExists(filepath) {
    return new Promise((resolve, reject) => {
        fs.access(filepath, fs.constants.F_OK, (error) => {
            resolve(!error);
        });
    });
}

function getImageName(model) {
    const replaceByDash = [new RegExp('/', 'g'), new RegExp(':', 'g'), new RegExp(`'`, 'g'), new RegExp(' ', 'g')];
    let image = model;
    replaceByDash.forEach((r) => (image = image.replace(r, '-')));
    return `${image}.png`;
}

export async function generatePage(content, target) {
    target = path.resolve(__dirname, '..', target);
    if (typeof content === 'function') {
        content = await content();
    }
    await fsp.writeFile(target, content);
    // console.log(`Wrote file ${ target }`);
}

export function normalizeModel(model) {
    const find = '[/| |:]';
    const re = new RegExp(find, 'g');
    return model.replace(re, '_');
}

export async function getImage(definition, imageBaseDir, imageBaseUrl) {
    let result = getImageName(definition.model);

    if (definition.whiteLabelOf && !(await checkFileExists(path.join(imageBaseDir, result)))) {
        result = getImageName(definition.whiteLabelOf.model);
    }

    return imageBaseUrl + '/' + result;
}

export function getAddedAt(deviceContent: string) {
    const addedAtMatch = deviceContent.match(/^addedAt: (20[\dT:Z-]+)/m);
    if (addedAtMatch) {
        return addedAtMatch[1];
    }
    return new Date().toISOString();
}

// For this site: all definitions are the definitions + whitelabels with fingerprint
// Whitelabels that have a fingerprint will get a separate page and will not
// appear as a whitelabel on the original device page
const allDefinitionsTemp: Definition[] = [];

for (const definition of baseDefinitions) {
    const resolvedDefinition = prepareDefinition(definition);

    allDefinitionsTemp.push(resolvedDefinition);

    if ('whiteLabel' in resolvedDefinition && resolvedDefinition.whiteLabel) {
        for (const whiteLabel of resolvedDefinition.whiteLabel.filter((w) => 'fingerprint' in w && w.fingerprint)) {
            const {vendor, model, description} = whiteLabel;
            allDefinitionsTemp.push({
                ...resolvedDefinition,
                vendor,
                model,
                description: description || resolvedDefinition.description,
                whiteLabel: undefined,
            });
        }

        resolvedDefinition.whiteLabel = resolvedDefinition.whiteLabel.filter((w) => !('fingerprint' in w) || !w.fingerprint);

        if (resolvedDefinition.whiteLabel.length === 0) {
            delete resolvedDefinition.whiteLabel;
        }
    }
}

export const allDefinitions = allDefinitionsTemp;
