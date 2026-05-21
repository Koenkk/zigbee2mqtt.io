import {Definition, Expose} from 'zigbee-herdsman-converters';
import {ikeaMatter} from './ikea_matter';

const warnings = [ikeaMatter];

export function getWarnings(definition: Definition, exposes: Expose[]) {
    return warnings
        .map((n) => n(definition))
        .filter((n) => n)
        .join('\n');
}
