
import { checkFileExists, getImage, allDefinitions } from "./utils";
import { imageBaseDir } from "./constants";
import * as path from "path";
import * as fs from "fs";
import * as gis from 'async-g-i-s';
import * as client from 'https';
import * as easyimage from 'easyimage';

const missingImagesPath = path.join(__dirname, 'missing-device-images');

export async function getMissing(): Promise<{image: string, model: string, vendor: string}[]> {
    const missing: any[] = [];
    await Promise.all(allDefinitions.map(async device => {
        const image = path.join(imageBaseDir, await getImage(device, imageBaseDir, ''));
        if (!await checkFileExists(image)) {
            device.image = image;
            missing.push(device);
        }
    }));

    return missing;
}

export async function downloadImage(url: string, path: string) {
    return new Promise<void>((r) => {
        client.get(url, (res) => {
            res.pipe(fs.createWriteStream(path));
            r();
        });
    });
    
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

                // Convert to jpg
                if (path.parse(imagePath).ext !== '.jpg') {
                    const imagePathJpg  = `${path.join(missingImagesPath, path.parse(imagePath).name)}.jpg`;
                    await easyimage.convert({src: imagePath, dst: imagePathJpg});
                    fs.rmSync(imagePath);
                    imagePath = imagePathJpg;
                }

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
        if (path.parse(file).ext === '.jpg') {
            try {
                const match = file.match('(.+)_\\d+\\.jpg');
                if (!match) throw new Error(`Failed to match '${file}'`)
                const source = path.join(missingImagesPath, file);
                const target = path.join(imageBaseDir, `${match[1]}.jpg`);
                fs.copyFileSync(source, target);
                const size = 150;
                await easyimage.resize({width: size, height: size, src: target, dst: target});
            } catch (error) {
                console.error(`Failed to handle '${file}' (${error})`)
            }
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
