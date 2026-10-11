import {Definition, Expose} from 'zigbee-herdsman-converters';
import {ikeaMatter} from './ikea_matter';
import {shellyFirmware} from './shelly_firmware';

// Warnings are placed above Notes

const warnings = [ikeaMatter, shellyFirmware];

export function getWarnings(definition: Definition, exposes: Expose[]) {
    return warnings
        .map((n) => n(definition))
        .filter((n) => n)
        .join('\n');
}
