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

The lamp counts a cycle only if power is cut within about 2 s after it comes on. Keep the ON phase at about 1 s: with 2.5 s or 3 s ON the cycles were not counted (measured on a GU10 CWS, firmware 1.1.0).

If the device flashes, but does not join, this may help:
- Use a default Zigbee channel (11, 15, 20, 25)
- Bring it very close to the coordinator
- Pair another device at the same time
- Fiddle with an IKEA remote: re-insert batteries, press buttons, activate Touchlink

[Touchlink](../guide/usage/touchlink.md) reset is also possible, but it seems the device only identifies for 15s, without leaving its current network and entering pairing mode.

Note that Matter pairing (via Bluetooth) is simultaneously active for 15 minutes after power-on, even if the device is already paired to a Zigbee network. That is the Matter SDK default and matches [IKEA's support page](https://www.ikea.com/nl/en/customer-service/product-support/smart-lighting/smart-lighting-support-pubd8491250/); measured at about 15 minutes on a GU10 CWS with firmware 1.1.0.

## Firmware
The device does not support OTA updates via Zigbee. Instead, updates are provided over Matter.  
**Move it to any Thread hub to update.**  
View available updates [here](https://webui.dcl.csa-iot.org/models) (search *KAJPLATS* or *4476*).

## Issues
- The device may come with null model and manufacturer attributes. In this case, Zigbee2MQTT will recognize it generically. A firmware update may fix it. Alternatively, edit \`database.db\` manually, as described in [this issue](https://github.com/Koenkk/zigbee-herdsman-converters/issues/11939#issuecomment-4239257579)
- Power-on behavior may not work, only in Zigbee mode, on some models (at least one variant of [LED2401G5](./LED2401G5.md))
- Scenes, groups and the *OffWithEffect* command may fail, with the INSUFFICIENT_SPACE error. See more info and workaround in [this issue](https://github.com/Koenkk/zigbee2mqtt/issues/30211#issuecomment-4019236515)
- The scene table holds 12 scenes on the GU10 CWS (firmware 1.1.0); the E27 1521 lm model is reported with 8 in the issue above. A scene stores on/off, brightness and, when the lamp is in XY color mode, the XY color. Color temperature is not stored, and recalling a scene does not switch the lamp out of color temperature mode.
- The device may not announce itself on power restore. As a result, it can be unreachable after being powered off for a long time. Discussion in [this issue](https://github.com/Koenkk/zigbee2mqtt/issues/32115)

`;
    }
}
