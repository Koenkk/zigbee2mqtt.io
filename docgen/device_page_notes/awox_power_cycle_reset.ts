import {Definition} from 'zigbee-herdsman-converters';
import {Expose} from 'zigbee-herdsman-converters/lib/types';

// AwoX / EGLO Connect.Z lights reset on this power cycle sequence (counter in flash, checked at boot).
// Both firmware generations implement it: the Telink based one ("ESMLFzm_w6_TW", ...) and the newer
// ESP32-H2 based one ("EZMB-RGB-TW-CLB", ...). Remotes and sensors reset differently and expose no light.
const vendors = ['AwoX', 'EGLO'];

export function awoxPowerCycleReset(definition: Definition, exposes: Expose[]) {
    if (vendors.includes(definition.vendor) && exposes.find((e) => e.type === 'light')) {
        return `
## Pairing

To pair or reset this device for Zigbee pairing mode:

1. Turn the device **off** for at least 30 seconds.
2. Perform the following power cycle sequence using the wall switch:
   - **On** for 1 second
   - **Off** for 6 seconds
   - **On** for 1 second
   - **Off** for 6 seconds
   - **On** for 1 second
   - **Off** for 6 seconds
   - **On** for 12 seconds
   - **Off** for 6 seconds
   - **On** for 12 seconds
   - **Off** for 6 seconds
   - Finally turn **on** and leave it on
3. The device will blink to indicate it is in pairing mode.

Repeat the sequence if it does not enter pairing mode the first time.
`;
    }
}
