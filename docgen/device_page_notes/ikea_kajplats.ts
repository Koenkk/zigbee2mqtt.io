import {Definition} from 'zigbee-herdsman-converters';

export function ikeaKajplats(definition: Definition) {
    if (definition.vendor === 'IKEA' && definition.description.includes('KAJPLATS')) {
        const d = definition.description;
        const cycles = d.includes('clear') && !d.includes('E1') ? 15 : 12;
        const otherCycles = 15 + 12 - cycles;
        return `
## Related
- [KAJPLATS color/white spectrum](./KAJPLATS_CWS.md)
- [KAJPLATS white spectrum](./KAJPLATS_WS.md)
- [KAJPLATS white spectrum clear](./KAJPLATS_WS_clear.md)
- [All KAJPLATS models](https://www.zigbee2mqtt.io/supported-devices/#s=KAJPLATS)

## Pairing

1. **Power-cycle the lamp 6 times** to factory reset ([video](https://www.youtube.com/watch?v=npxOrPxVfe0)).
   
2. **Power-cycle the lamp ${cycles} times** (or ${otherCycles}, depending on model) to start Zigbee pairing.  
   When successful, the light will flash white. *Tip: Use a smart plug*

If the device flashes, but does not join, this may help:
- Use a default Zigbee channel (11, 15, 20, 25)
- Bring it very close to the coordinator
- Pair another device at the same time
- Fiddle with an IKEA remote: re-insert batteries, press buttons, activate Touchlink

[Touchlink](../guide/usage/touchlink.md) reset is also possible, but it seems the device only identifies for 15s, without leaving its current network and entering pairing mode.

Note that Matter pairing (via Bluetooth) is simultaneously active for 5 minutes after power-on, even if the device is already paired to a Zigbee network.

## Firmware
The device does not support OTA updates via Zigbee. Instead, updates are provided over Matter.  
**Move it to any Thread hub to update.**  
View available updates [here](https://webui.dcl.csa-iot.org/models) (search *KAJPLATS* or *4476*).

## Issues
- The device may come with null model and manufacturer attributes. In this case, Zigbee2MQTT will recognize it generically. A firmware update may fix it. Alternatively, edit \`database.db\` manually, as described in [this issue](https://github.com/Koenkk/zigbee-herdsman-converters/issues/11939#issuecomment-4239257579)
- Power-on behavior may not work, only in Zigbee mode, on some models (at least one variant of [LED2401G5](./LED2401G5.md))
- Scenes, groups and the *OffWithEffect* command may fail, with the INSUFFICIENT_SPACE error. See more info and workaround in [this issue](https://github.com/Koenkk/zigbee2mqtt/issues/30211#issuecomment-4019236515)
- The device may not announce itself on power restore. As a result, it can be unreachable after being powered off for a long time. Discussion in [this issue](https://github.com/Koenkk/zigbee2mqtt/issues/32115)

`;
    }
}
