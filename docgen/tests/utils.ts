import {glob} from 'glob';
import * as path from 'path';

export const distDir = path.resolve(__dirname, '..', '..', 'dist');
export const docsDir = path.resolve(__dirname, '..', '..', 'docs');

export async function findFiles(dir: string, type = 'html') {
    return glob(`${dir}/**/*.${type}`);
}

export async function findDeviceFiles() {
    return findFiles(path.resolve(__dirname, docsDir, 'devices'), 'md');
}
