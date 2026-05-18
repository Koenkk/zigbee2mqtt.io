import {awox} from './awox';
import {hueRouterPair} from './hue_router_pair';
import {ikeaKajplats} from './ikea_kajplats';
import {ikeaLight} from './ikea_light';
import {sengledBulbs} from './sengled_bulbs';

const notes = [awox, hueRouterPair, ikeaKajplats, ikeaLight, sengledBulbs];

export function getNotes(definition, exposes) {
    return notes
        .map((n) => n(definition, exposes))
        .filter((n) => n)
        .join('\n');
}
