import {ikeaMatter} from './ikea_matter';

const warnings = [ikeaMatter];

export function getWarnings(definition, exposes) {
    return warnings
        .map((n) => n(definition))
        .filter((n) => n)
        .join('\n');
}
