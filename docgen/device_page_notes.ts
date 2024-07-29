const notes = {
    awox: (definition) => {
        if (definition.vendor.toLowerCase() === 'awox') {
            return `
## Warning: degrades network performance
AwoX devices are known to cause network instability. If your Zigbee network has poor performance or you are seeing errors like \`NO_NETWORK_ROUTE\` you should remove this device from the network.
It [may help](https://github.com/Koenkk/zigbee2mqtt/discussions/18366) to OTA update your device via the "AwoX HomeControl" app over Bluetooth.
`;
        }
    },
    hueRouterPair: (definition) => {
        if (definition.vendor === 'Philips' && definition.exposes.find((e) => e.type === 'light')) {
            const hueGo = `
### Button long-press
The first-generation Hue Go can be reset by long pressing the button on the bottom of the unit, [as advised by Philips on Twitter](https://twitter.com/tweethue/status/937713840728559621).
They suggest keeping the button pressed for 35 seconds. After about 25 seconds the light will start doing some flashes: keep pressing anyway for the whole 35. **The power cord has to be connected while doing this procedure**.
`;
            return `
## Pairing
New Bulbs are automatically in pairing mode. 
Factory resetting a Hue bulb can be accomplished in 5 ways which are described below. After resetting the bulb will automatically connect.

### Touchlink factory reset
See [Touchlink](../guide/usage/touchlink.md)

### Hue bridge
When the bulb is still connected to the Hue bridge, you can simply factory reset the bulb
by removing it from the bridge via the Hue app. Orphaned bulbs (configured to connect to a non-existing Zigbee network) can be adopted by a Hue bridge by entering the 6 character serial number in the Philips Hue app.

### Hue dimmer switch
With [one](./324131092621.md) of the [two](./929002398602.md) Hue Dimmer switches it is possible to put the bulbs into a factory reset.

1. Power-supply the bulb
2. Bring the dimmer switch next to the bulb, as close as possible
3. Hold the I/On and 0/Off button pressed simultaneously for 10 to 12 seconds until…
4. The bulb flashes a couple of times. Don't release the buttons until the last flash + a safety second
5. Switch the bulb off and on again: it can now be paired again.

See also the [VIDEO: Factory reset a Hue bulb with Hue dimmer switch](https://www.youtube.com/watch?v=qvlEAELiJKs).

### Bluetooth (if supported by device)
Install the Philips Hue Bluetooth app for [Android](https://play.google.com/store/apps/details?id=com.signify.hue.blue)
or [iOS](https://apps.apple.com/us/app/philips-hue-bluetooth/id1456604186). You can use the app to trigger a factory reset on a paired light. (Note: The light will only be in bluetooth pairing
mode for a couple of minutes after power-on)

### TRADFRI remote control
This may also be possible with the
[Tradfri Remote Control](https://www.ikea.com/us/en/images/products/tradfri-remote-control__0489469_PE623665_S4.JPG)
by pressing and holding the reset button on the bottom of the remote (next to the battery).
[This may not always work, even if the Hue bulb starts flashing](https://github.com/Koenkk/zigbee2mqtt/issues/296#issuecomment-416923751).

${definition.description.toLowerCase().includes(' go') ? hueGo : ''}

## Power-on behavior
This device allows you to set the power-on behavior. Note that this requires at least November/December '18 firmware update of the device.
Send a MQTT command to [\`zigbee2mqtt/FRIENDLY_NAME/set\`](../guide/usage/mqtt_topics_and_messages.md#zigbee2mqtt-friendly-name-set) with the following payload.

\`\`\`js
{
    "hue_power_on_behavior": "on",          // default, on, off, recover
    "hue_power_on_brightness": 125,         // same values as brightness
    "hue_power_on_color_temperature": 280,  // same values as color_temp
    "hue_power_on_color": "#0000FF"         // color in hex notation, e.g. #0000FF = blue
}
\`\`\`

Attribute Value | Description
----------------|-----------------------------------------------
default         | reset to factory default value
on              | bulb on after power loss with configured brightness, color-temperature and color
off             | bulb off after power loss
recover         | last running state after power loss

Rules:
- \`hue_power_on_behavior\` value always has to be provided
- \`hue_power_on_brightness\`, \`hue_power_on_color_temperature\` and \`hue_power_on_color\` can only be provided when \`hue_power_on_behavior\` = \`on\`
- \`hue_power_on_color_temperature\` and \`hue_power_on_color\` cannot be provided together, only one can be set
- When setting \`hue_power_on_behavior\` = \`on\`, any not provided values will be reset to their factory defaults

Note: if \`hue_power_on_behavior\` is set to \`off\`, then the only way to turn the bulb on will be through a paired smart device (see pairing above). You will NOT be able to turn the bulb on by sequentially switching power on and off.    
`;
        }
    },
    sengledBulbs: (definition) => {
        if (definition.vendor === 'Sengled' && definition.exposes.find((e) => e.type === 'light')) {
            return `
## Device Type
Sengled bulbs are Zigbee [end devices](/advanced/zigbee/01_zigbee_network.html#end-device), not [routers](/advanced/zigbee/01_zigbee_network.html#router), and therefore will not extend the reach of your Zigbee network. For more information see the [Sengled FAQ](https://support.sengled.com/hc/en-us/articles/115010871308-Do-any-Sengled-Zigbee-devices-act-as-Zigbee-repeaters-).
`;
        }
    },
};

export function getNotes(definition) {
    return Object.values(notes)
        .map((n) => n(definition))
        .filter((n) => n)
        .join('\n');
}
