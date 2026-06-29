import {promises as fsp} from 'fs';
import * as path from 'path';
import {findDeviceFiles} from './utils';

const NOTES_BEGIN_MARKER = '<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->';
const NOTES_END_MARKER = '<!-- Notes END: Do not edit below this line -->';

const openingHtmlTagRegex = /<\s*([A-Za-z][A-Za-z0-9_-]*)(?=[\s/>])/g;

function stripInlineCode(line: string): string {
    let cleaned = line;

    while (true) {
        const open = cleaned.match(/`+/);

        if (!open || open.index === undefined) {
            return cleaned;
        }

        const tickRun = open[0];
        const openIndex = open.index;
        const prefix = cleaned.slice(0, openIndex);
        const rest = cleaned.slice(openIndex + tickRun.length);
        const closeIndex = rest.indexOf(tickRun);

        if (closeIndex === -1) {
            return prefix;
        }

        cleaned = `${prefix}${rest.slice(closeIndex + tickRun.length)}`;
    }
}

function parseNotesTags(content: string): string[] {
    const lines = content.split(/\r?\n/);
    const tags: string[] = [];
    let inNotes = false;
    let inFencedCode = false;
    let fenceType: 'backtick' | 'tilde' | null = null;

    for (const line of lines) {
        if (line === NOTES_BEGIN_MARKER) {
            inNotes = true;
            inFencedCode = false;
            fenceType = null;
            continue;
        }

        if (line === NOTES_END_MARKER) {
            inNotes = false;
            inFencedCode = false;
            fenceType = null;
            continue;
        }

        if (!inNotes) {
            continue;
        }

        if (!inFencedCode && /^\s*```/.test(line)) {
            inFencedCode = true;
            fenceType = 'backtick';
            continue;
        }

        if (!inFencedCode && /^\s*~~~/.test(line)) {
            inFencedCode = true;
            fenceType = 'tilde';
            continue;
        }

        if (inFencedCode && fenceType === 'backtick' && /^\s*```/.test(line)) {
            inFencedCode = false;
            fenceType = null;
            continue;
        }

        if (inFencedCode && fenceType === 'tilde' && /^\s*~~~/.test(line)) {
            inFencedCode = false;
            fenceType = null;
            continue;
        }

        if (inFencedCode) {
            continue;
        }

        const withoutInlineCode = stripInlineCode(line);
        openingHtmlTagRegex.lastIndex = 0;
        let match: RegExpExecArray | null;

        while ((match = openingHtmlTagRegex.exec(withoutInlineCode)) !== null) {
            tags.push(`<${match[1]}`);
        }
    }

    return tags;
}

export async function checkDeviceNotesHtmlTags() {
    console.log('* Test for HTML tags in Notes sections...');

    const deviceFiles = await findDeviceFiles();
    const repoRoot = path.resolve(__dirname, '..', '..');
    let found = 0;

    await Promise.all(
        deviceFiles.map(async (file) => {
            const content = await fsp.readFile(file, 'utf8');
            const tags = parseNotesTags(content);

            if (tags.length > 0) {
                console.log(`  - ${path.relative(repoRoot, file)}: ${tags.length} HTML tags (${tags.join(', ')})`);
                found++;
            }
        }),
    );

    if (found > 0) {
        throw `${found} file(s) contain HTML tags in Notes sections.`;
    }
}
