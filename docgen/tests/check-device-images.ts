import { checkFileExists, getImage, allDefinitions } from "../utils";
import { imageBaseDir } from "../constants";
import * as path from "path";

export async function checkDeviceImages() {
  console.log('* Test if all device images exists...');
  const missing = [];
  await Promise.all(allDefinitions.map(async device => {
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
