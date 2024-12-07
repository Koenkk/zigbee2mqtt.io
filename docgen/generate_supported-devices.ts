/**
 * This script generates the supported devices page.
 */
import {promises as fsp} from 'fs';
import {generatePage, getAddedAt, getImage, normalizeModel, allDefinitions} from './utils';
import {imageBaseDir} from './constants';
import {resolveDeviceFile} from './generate_device';
import {Definition} from 'zigbee-herdsman-converters';

const vendors = new Set();

export default async function generate_supportedDevices() {
    console.log(`Generating supported-devices`);

    try {
    } catch (e) {}

    let definitions: (Definition & {isWhiteLabel?: boolean; whiteLabelOf?: Definition})[] = [...allDefinitions];

    for (const definition of allDefinitions) {
        if (definition.whiteLabel) {
            for (const whiteLabel of definition.whiteLabel) {
                const whiteLabelDefinition = {
                    ...definition,
                    model: whiteLabel.model,
                    vendor: whiteLabel.vendor,
                    description: whiteLabel.description ?? definition.description,
                    isWhiteLabel: true,
                    whiteLabelOf: definition,
                };

                delete whiteLabelDefinition.whiteLabel;

                definitions.push(whiteLabelDefinition);
            }
        }
    }

    let mappedDefinitions = await Promise.all(
        definitions.map(async (d) => {
            const model = d.model;
            const baseModel = d.whiteLabelOf?.model ?? d.model;
            const image = await getImage(d, imageBaseDir, '../images/devices');
            const description = d.description;
            const link = `../devices/${normalizeModel(baseModel)}.html`;
            if (d.exposes == null) throw new Error('Exposes null');
            const exposes = Array.from(
                new Set(
                    (typeof d.exposes === 'function' ? d.exposes(undefined, undefined) : d.exposes)
                        .map((e) => (e.name ? e.name : e.type))
                        .filter((e) => e !== 'linkquality' && e !== 'effect'),
                ),
            );

            let addedAt = '';
            try {
                const deviceContent = await fsp.readFile(resolveDeviceFile(baseModel), 'utf-8');
                addedAt = getAddedAt(deviceContent);
            } catch (e) {
                console.warn(`Could not read addedAt from ${baseModel}`, e.message);
            }

            vendors.add(d.vendor);

            return {
                model,
                vendor: d.vendor,
                addedAt,
                description,
                image,
                link,
                exposes,
                isWhiteLabel: d.isWhiteLabel || d.whiteLabel,
            };
        }),
    );

    mappedDefinitions = mappedDefinitions.sort((a, b) => (b.addedAt < a.addedAt ? -1 : b.addedAt > a.addedAt ? 1 : 0));

    const result = `---
sidebar: false
editLink: false
pageClass: supported-devices-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen, do not edit! -->
<!-- !!!! -->

Currently **${mappedDefinitions.length}** devices are supported from **${vendors.size}** different vendors.
In case you own a Zigbee device which is NOT listed here, please see [How to support new devices](../advanced/support-new-devices/01_support_new_devices.md).

<script>
if (!__VUEPRESS_SSR__) {
  window.ZIGBEE2MQTT_SUPPORTED_DEVICES = ${JSON.stringify(mappedDefinitions)};
}
</script>

<ClientOnly>
  <SupportedDevices />
</ClientOnly>
`;

    return generatePage(result, 'docs/supported-devices/README.md');
}
