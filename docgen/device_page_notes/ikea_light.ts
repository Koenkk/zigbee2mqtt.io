import {Definition} from 'zigbee-herdsman-converters';
import {Expose} from 'zigbee-herdsman-converters/lib/types';

export function ikeaLight(definition: Definition, exposes: Expose[]) {
    if (definition.vendor === 'IKEA' && exposes.find((e) => e.type === 'light')) {
        return `
## Transition
IKEA lights only support transitions on 1 attribute at a time.
If you would for example change the color temperature and brightness in 1 command, the color temperature transition is ignored.
`;
    }
}
