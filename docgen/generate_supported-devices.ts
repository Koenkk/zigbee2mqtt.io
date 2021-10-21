/**
 * This script generates the supported devices page.
 */
import * as childProcess from 'child_process';
import { devices } from 'zigbee-herdsman-converters';
import throat from "throat";
import * as path from "path";
import { promises as fsp } from "fs";
import { generatePage, getImage, normalizeModel } from "./utils";
import { imageBaseDir } from "./constants";

const exec = (...args) => new Promise((resolve, reject) => {
  childProcess.exec.apply(this, [
    ...args,
    // @ts-ignore
    (err, stdout) => err && reject(err) || resolve(stdout),
  ]);
});

const cacheDir = path.resolve(__dirname, '..', 'node_modules', '.cache');
const addedAtCacheFile = path.resolve(cacheDir, 'addedAtCache.json');
const vendors = new Set();

export default async function generate_supportedDevices() {
  console.log(`Generating supported-devices`);
  let addedAtCache = {};

  try {
    addedAtCache = JSON.parse(await fsp.readFile(addedAtCacheFile, 'utf-8'));
    console.log(`Use ${addedAtCacheFile} cache file`);
  } catch(e) {
  }

  let devicesMapped = [...devices];

  for (const device of devices) {
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
    const image = await getImage(d, imageBaseDir, '../images/devices');
    const description = d.description || d.whiteLabelOf.description;
    const link = `../devices/${ normalizeModel(d.whiteLabelOf ? d.whiteLabelOf.model : d.model) }.html`;
    const exposes = Array.from(new Set(
      d.exposes
        .map((e) => e.name ? e.name : e.type)
        .filter((e) => e !== 'linkquality' && e !== 'effect'),
    ));

    vendors.add(d.vendor);

    return {
      model,
      vendor: d.vendor,
      description,
      image,
      link,
      exposes,
      isWhiteLabel: d.isWhiteLabel || d.whiteLabel,
    };
  }));

  const addAddedAt = async (device) => {
    const normalizedModel = `${ normalizeModel(device.model) }.md`;
    if(addedAtCache[normalizedModel]) {
      device.addedAt = addedAtCache[normalizedModel];
      return;
    }
    const file = path.resolve(__dirname, '../docs/devices', normalizedModel);
    device.addedAt = (await exec(`git log --date=iso8601-strict --format=%ad --diff-filter=A -- ${ file }`) as string).trim();
    addedAtCache[normalizedModel] = device.addedAt;
  };

  // exec git log - 50 in parallel
  await Promise.all(devicesMapped.map(throat(20, addAddedAt)));

  // Persist cache
  try {
    await fsp.mkdir(cacheDir);
  } catch (err) {
    if (err.code != 'EEXIST') {
      console.error(err);
    }
  }
  await fsp.writeFile(addedAtCacheFile, JSON.stringify(addedAtCache));

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
In case you own a Zigbee device which is NOT listed here, please see [How to support new devices](../how-to/support_new_devices.html).

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
