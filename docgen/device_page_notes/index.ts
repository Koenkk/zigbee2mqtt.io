import {awox} from './awox';
import {awoxPowerCycleReset} from './awox_power_cycle_reset';
import {hueRouterPair} from './hue_router_pair';
import {ikeaKajplats} from './ikea_kajplats';
import {ikeaLight} from './ikea_light';
import {sengledBulbs} from './sengled_bulbs';
import {Definition} from 'zigbee-herdsman-converters';
import {Expose} from 'zigbee-herdsman-converters/lib/types';

const notes = [awox, awoxPowerCycleReset, hueRouterPair, ikeaKajplats, ikeaLight, sengledBulbs];

export function getNotes(definition: Definition, exposes: Expose[]) {
    return notes
        .map((n) => n(definition, exposes))
        .filter((n) => n)
        .join('\n');
}
