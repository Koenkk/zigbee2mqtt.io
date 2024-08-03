import {promises as fsp} from 'fs';
import {docsDir, findDeviceFiles} from './utils';

export async function checkDeviceNotesCommentLines() {
    console.log('* Test if every device md-file has Notes BEGIN and END comment lines...');
    const errors = [];
    const deviceFiles = await findDeviceFiles();
    await Promise.all(
        deviceFiles.map(async (file) => {
            const content = await fsp.readFile(file, 'utf-8');
            let notesBegin = 0;
            let notesEnd = 0;
            const lines = content.split(/\n\r?/);
            for (let line of lines) {
                if (line.startsWith('<!-- Notes BEGIN')) {
                    notesBegin++;
                }
                if (line.startsWith('<!-- Notes END')) {
                    notesEnd++;
                }
            }

            const relativeFile = file.substr(docsDir.length + 1);

            notesBegin === 0 && errors.push(`No "Notes BEGIN" comment found in ${relativeFile}`);
            notesBegin > 1 && errors.push(`Multiple "Notes BEGIN" comments found in ${relativeFile}`);
            notesEnd === 0 && errors.push(`No "Notes END" comment found in ${relativeFile}`);
            notesEnd > 1 && errors.push(`Multiple "Notes END" comments found in ${relativeFile}`);
        }),
    );

    if (errors.length) {
        throw errors.join('\n');
    }
}
