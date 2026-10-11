import {Definition} from 'zigbee-herdsman-converters';
import {Fingerprint} from 'zigbee-herdsman-converters/lib/types';

type DefinitionWithWhiteLabelOf = Definition & {
    isWhiteLabel?: boolean;
    whiteLabelOf?: Definition;
    whiteLabelFingerprint?: Fingerprint[];
};
