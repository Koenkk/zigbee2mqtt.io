export function sengledBulbs(definition, exposes) {
    if (definition.vendor === 'Sengled' && exposes.find((e) => e.type === 'light')) {
        return `
## Device Type
Sengled bulbs are Zigbee [end devices](/advanced/zigbee/01_zigbee_network.html#end-device), not [routers](/advanced/zigbee/01_zigbee_network.html#router), and therefore will not extend the reach of your Zigbee network. For more information see the [Sengled FAQ](https://support.sengled.com/hc/en-us/articles/115010871308-Do-any-Sengled-Zigbee-devices-act-as-Zigbee-repeaters-).
`;
    }
}
