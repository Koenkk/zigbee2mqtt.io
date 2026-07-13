import {Definition} from 'zigbee-herdsman-converters';

export function shellyFirmware(definition: Definition) {
    if (definition.vendor === 'Shelly') {
        return `
## Firmware

It is recommended to connect Shelly devices to WiFi and update their firmware, until they gain support for OTA updates over Zigbee.

The latest firmware fixes known issues like negative power readings on some models.  
*Note they roll-out updates in phases. Check "beta" channels if you are specifically looking for a fix.*
`;
    }
}
