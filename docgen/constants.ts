import * as path from 'path';
import {getBase, domain} from '../getBase';

export const devicesBaseDir = path.resolve(__dirname, '..', 'docs', 'devices');
export const imageBaseDir = path.resolve(__dirname, '..', 'public', 'images', 'devices');
export const imageBaseUrl = domain + getBase() + 'images/devices';
