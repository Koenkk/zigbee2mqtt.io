import { devices } from 'zigbee-herdsman-converters';
import { checkFileExists, getImage } from "../utils";
import { imageBaseDir } from "../constants";
import * as path from "path";

export async function checkDeviceImages() {
  const missing = [];
  await Promise.all(devices.map(async device => {
    const image = path.join(imageBaseDir, await getImage(device, imageBaseDir, ''));
    if (!await checkFileExists(image)) {
      device.image = image;
      missing.push(device);
    }
  }));

  if(missing.length) {
    throw missing.reduce((res, d) => res += `Missing image for Model ${ d.model }: ${ d.image }\n`, "");
  }
}
