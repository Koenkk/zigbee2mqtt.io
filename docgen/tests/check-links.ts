import {promises as fsp} from 'fs';
import {getBase} from '../../getBase';
import {distDir, findFiles} from './utils';
import * as path from 'path';

const hrefRgxp = /<a[^>]+href ?= ?"([^#?]+?)["#?]/gi;

async function checkFile(file: string, availableFiles: string[]) {
    const content = await fsp.readFile(file, 'utf-8');
    const linkToFiles = Array.from(content.matchAll(hrefRgxp))
        .map((x) => x[1]) // get the matched part
        .filter((x) => !x.match(/^https?:/)) // filter external links
        .filter((x) => !x.endsWith('.md')) // ignore links to .md files
        .filter((x) => !x.startsWith('mailto:')) // ignore mailto
        .map((x) => [x, x])
        .map(([org, resolved]) => {
            if (!resolved.startsWith('/')) {
                // resolve relative links
                return [org, path.join(getBase(), path.dirname(file).substr(distDir.length), resolved)];
            } else {
                return [org, resolved];
            }
        })
        .map(([org, resolved]) => [org, resolved.endsWith('/') ? `${resolved}index.html` : resolved]) // add index.html for links pointing to a directory
        .map(([org, resolved]) => [org, resolved.substr(getBase().length)]);

    const broken = linkToFiles.filter(([org, resolved]) => !availableFiles.includes(resolved));

    return {
        file: file.substr(distDir.length),
        broken,
    };
}

export async function checkLinks() {
    console.log('* Test for internal broken links...');
    const files = await findFiles(distDir);
    const filesNormalized = files.map((f) => f.substr(distDir.length + 1));
    let erg = await Promise.all(files.map((file) => checkFile(file, filesNormalized)));
    erg = erg.filter((r) => r.broken.length);

    if (erg.length) {
        // @ts-ignore
        throw erg.reduce((res, v) => {
            res += `${v.file} has broken links:\n`;
            v.broken.forEach((b) => (res += `  ${b[0]}\n`));
            return res;
        }, '');
    }
}

// ( async function () {
//   await checkLinks()
// } )()
