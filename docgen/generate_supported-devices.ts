/**
 * This script generates the supported devices page.
 */
import { promises as fsp } from "fs";
import { generatePage, getAddedAt, getImage, normalizeModel, allDefinitions } from "./utils";
import { imageBaseDir } from "./constants";
import { resolveDeviceFile } from "./generate_device";

const vendors = new Set();

export default async function generate_supportedDevices() {
  console.log(`Generating supported-devices`);

  try {
  } catch(e) {
  }

  let devicesMapped = [...allDefinitions];

  for (const device of allDefinitions) {
    if (device.whiteLabel) {
      for (const whiteLabel of device.whiteLabel) {
        const whiteLabelDevice = {
          ...device,
          model: whiteLabel.model,
          vendor: whiteLabel.vendor,
          description: whiteLabel.description,
          isWhiteLabel: true,
          whiteLabelOf: device,
        };

        delete whiteLabelDevice.whiteLabel;

        devicesMapped.push(whiteLabelDevice);
      }
    }
  }

  devicesMapped = await Promise.all(devicesMapped.map(async (d) => {
    const model = d.model;
    const baseModel = d.whiteLabelOf ? d.whiteLabelOf.model : d.model;
    const image = await getImage(d, imageBaseDir, '../images/devices');
    const description = d.description || d.whiteLabelOf.description;
    const link = `../devices/${ normalizeModel(baseModel) }.html`;
    const exposes = Array.from(new Set(
      (typeof d.exposes === 'function' ? d.exposes() : d.exposes)
        .map((e) => e.name ? e.name : e.type)
        .filter((e) => e !== 'linkquality' && e !== 'effect'),
    ));

    let addedAt = '';
    try {
      const deviceContent = await fsp.readFile(resolveDeviceFile(baseModel), 'utf-8');
      addedAt = getAddedAt(deviceContent);
    } catch (e) {
      console.warn(`Could not read addedAt from ${ baseModel }`, e.message);
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
  }));


  devicesMapped = devicesMapped.sort((a, b) => (b.addedAt < a.addedAt) ? -1 : ((b.addedAt > a.addedAt) ? 1 : 0));

  const result = `---
sidebar: false
editLink: false
pageClass: supported-devices-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen, do not edit! -->
<!-- !!!! -->

Currently **${ devicesMapped.length }** devices are supported from **${ vendors.size }** different vendors.
In case you own a Zigbee device which is NOT listed here, please see [How to support new devices](../advanced/support-new-devices/01_support_new_devices.md).

<script>
if (!__VUEPRESS_SSR__) {
  window.ZIGBEE2MQTT_SUPPORTED_DEVICES = ${ JSON.stringify(devicesMapped) };
}
</script>

<ClientOnly>
  <SupportedDevices />
</ClientOnly>
`;

  return generatePage(result, 'docs/supported-devices/README.md');
};
