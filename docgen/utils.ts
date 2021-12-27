import { promises as fsp } from 'fs';
import * as path from 'path';
import * as fs from "fs";

export async function checkFileExists(filepath) {
  return new Promise((resolve, reject) => {
    fs.access(filepath, fs.constants.F_OK, error => {
      resolve(!error);
    });
  });
}

function getImageName(model) {
  const replaceByDash = [
    new RegExp('/', 'g'),
    new RegExp(':', 'g'),
    new RegExp(' ', 'g'),
  ];
  let image = model;
  replaceByDash.forEach((r) => image = image.replace(r, '-'));
  return `${ image }.jpg`;
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

  if (definition.whiteLabelOf && !await checkFileExists(path.join(imageBaseDir, result))) {
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
