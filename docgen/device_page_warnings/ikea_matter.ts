export function ikeaMatter(definition) {
    if (definition.vendor === 'IKEA' && definition.description.includes('Matter')) {
        return `
## Unofficial support
**This device is part of the IKEA Matter/Thread line-up.**  
The hidden Zigbee mode is not officially supported by IKEA. It exists mainly to keep backwards compatibility via Touchlink.  
As a result, the Zigbee firmware is stripped-down to the essentials, and could even be removed in OTA updates.
`;
    }
}
