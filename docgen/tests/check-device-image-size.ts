import { imageBaseDir } from "../constants";
import { promises as fsp } from "fs";
import { promisify } from "util";
import sizeOf from "image-size";
import * as path from "path";

const sizeOfP = promisify(sizeOf);
const ignore = ['.DS_Store'];
const allowedDimensions = ['150x150', '512x512'];
export async function checkDeviceImageSize() {
  console.log(`* Test if device images has ${allowedDimensions.join(' or ')}  dimensions...`);
  const invalid = [];
  const images = (await fsp.readdir(imageBaseDir)).filter((f) => !ignore.includes(f));
  await Promise.all(images.map(async img => {
    const dimensions = await sizeOfP(path.resolve(imageBaseDir, img));
    if (!allowedDimensions.includes(`${dimensions.width}x${dimensions.height}`)) {
      invalid.push(img);
    }
  }));

  if(invalid.length) {
    throw invalid.reduce((res, d) => res += `Image ${ d } does not have ${allowedDimensions.join(' or ')}\n`, "");
  }
}
