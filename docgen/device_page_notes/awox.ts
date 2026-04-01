export function awox(definition) {
    if (definition.vendor.toLowerCase() === 'awox') {
        return `
## Warning: degrades network performance
AwoX devices are known to cause network instability. If your Zigbee network has poor performance or you are seeing errors like \`NO_NETWORK_ROUTE\` you should remove this device from the network.
It [may help](https://github.com/Koenkk/zigbee2mqtt/discussions/18366) to OTA update your device via the "AwoX HomeControl" app over Bluetooth.
`;
    }
}
