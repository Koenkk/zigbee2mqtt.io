/**
 * This script generates a device page
 */
import * as path from "path";
import { promises as fsp } from "fs";
import { generatePage, getImage, normalizeModel } from "./utils";
import { generateExpose } from "./device_page_exposes";
import { devicesBaseDir, imageBaseDir, imageBaseUrl } from "./constants";

export default async function generateDevice(device) {
  const deviceFile = path.resolve(devicesBaseDir, `${ normalizeModel(device.model) }.md`);
  const image = await getImage(device, imageBaseDir, imageBaseUrl);
  const exposesDescription = Array.from(new Set(device.exposes.map((e) => e.hasOwnProperty('name') ? e.name : `${ e.type } (${ e.features.map((f) => f.name).join(', ') })`))).join(', ');

  let notes = "";
  try {
    const existingContent = await fsp.readFile(deviceFile, 'utf-8');
    let isInNotes = false;
    // Read existing notes from "## Notes" until next h1 or h2 appears
    for (let line of existingContent.split(/\n\r?/)) {
      if (!isInNotes && line.startsWith('## Notes')) {
        isInNotes = true;
        notes += line + "\n";
      } else if (isInNotes) {
        if (line.match(/^##? .*/)) {
          break;
        } else {
          notes += line + "\n";
        }
      }
    }
    notes = notes.trim();
  } catch (e) {
    console.log(`New Device ${ device.vendor } ${ device.model }`);
  }

  const content = `---
title: "${ device.vendor } ${ device.model } control via MQTT"
description: "Integrate your ${ device.vendor } ${ device.model } via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# ${ device.vendor } ${ device.model }

|     |     |
|-----|-----|
| Model | ${ device.model }  |
| Vendor  | ${ device.vendor }  |
| Description | ${ device.description } |
| Exposes | ${ exposesDescription } |
| Picture | ![${ device.vendor } ${ device.model }](${ image }) |
${ device.whiteLabel ? `| White-label | ${ device.whiteLabel.map((d) => `${ d.vendor } ${ d.model }`).join(', ') } |\n` : '' }

${ notes }

${ device.hasOwnProperty('ota') ? `
## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).
` : '' }
${ generateExpose(device) }
`;

  return generatePage(content, deviceFile);
}
