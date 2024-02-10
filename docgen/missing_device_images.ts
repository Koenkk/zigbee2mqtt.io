
import { checkFileExists, getImage, allDefinitions } from "./utils";
import { imageBaseDir } from "./constants";
import * as path from "path";
import * as fs from "fs";
import * as gis from 'async-g-i-s';
import * as httpsClient from 'https';
import * as httpClient from 'http';
import * as easyimage from 'easyimage';
import {execSync} from 'child_process';

const missingImagesPath = path.join(__dirname, 'missing-device-images');

export async function getMissing(): Promise<{image: string, model: string, vendor: string}[]> {
    const missing: any[] = [];
    await Promise.all(allDefinitions.map(async device => {
        const image = path.join(imageBaseDir, await getImage(device, imageBaseDir, ''));
        if (!await checkFileExists(image)) {
            missing.push({...device, image});
        }
    }));

    return missing;
}

export async function downloadImage(url: string, path: string) {
    const client = url.startsWith('https') ? httpsClient : httpClient;
    return new Promise<void>((r) => {
        client.get(url, (res) => {
            res.pipe(fs.createWriteStream(path));
            r();
        });
    });
}

export async function removeBackground(imagePath: string) {
    execSync(`transparent-background --fast --source ${imagePath} --dest ${path.parse(imagePath).dir}`);
    const converted = path.join(path.parse(imagePath).dir, `${path.parse(imagePath).name}_rgba.png`);
    fs.renameSync(converted, converted.replace('_rgba', ''));
    return imagePath;
}

export async function downloadMissing() {
    if (fs.existsSync(missingImagesPath)) {
        fs.rmSync(missingImagesPath, {recursive: true});
    }
    fs.mkdirSync(missingImagesPath);

    const missing = await getMissing();
    for (const definition of missing) {
        const query = `${definition.model} ${definition.vendor}`;
        console.log(`Querying '${query}'`);
        // @ts-expect-error
        const images: {url: string}[] = (await gis(`${definition.model} ${definition.vendor}`)).slice(0, 5);
        for (const image of images) {
            let imagePath = path.join(missingImagesPath, `${path.parse(path.basename(definition.image)).name}_${images.indexOf(image)}${path.extname(image.url)}`);
            try {
                // Download
                await downloadImage(image.url, imagePath);

                // Convert to png
                imagePath = await removeBackground(imagePath);

                // Make sqaure
                const info = await easyimage.info(imagePath);
                if (info.height !== info.width) {
                    const size = Math.max(info.height, info.width);
                    await easyimage.execute('convert', [imagePath, '-resize', `${size}x${size}`, '-gravity', 'center', '-extent', `${size}x${size}`, imagePath])
                    
                }
            } catch (error) {
                console.error(`Failed to handle '${imagePath}' (${error}), removing...`);
                fs.rmSync(imagePath);
            }
        }
    }

    console.log(`Done! Filter and update all the files under '${missingImagesPath}', execute 'npm run move-missing-device-images'`)
}

async function moveMissing() {
    for (const file of fs.readdirSync(missingImagesPath)) {
        try {
            let source = path.join(missingImagesPath, file);
            const name = path.basename(source);
            const match = name.match('(.+)_\\d+\\.png');
            if (!match) throw new Error(`Failed to match '${name}'`)
            const target = path.join(imageBaseDir, `${match[1]}.png`);
            fs.copyFileSync(source, target);
            const info = await easyimage.info(target);
            const size = Math.min(info.width, info.height, 512);
            if (size !== 512) {
                throw new Error(`size too small: ${size}`);
            }
            await easyimage.resize({width: size, height: size, src: target, dst: target});
        } catch (error) {
            console.error(`Failed to handle '${file}' (${error})`)
        }
    }
    console.log('Done!');
}


if (require.main === module) {
    ( async function () {
        const arg = process.argv[process.argv.length -1];
        if (arg === "download") {
            await downloadMissing();
        } else if (arg === "move") {
            await moveMissing();
        } else {
            throw new Error(`Unsupported option ${arg}`);
        }
      } )();
}
