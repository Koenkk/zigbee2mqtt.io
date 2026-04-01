export function ikeaKajplats(definition) {
    if (definition.vendor === 'IKEA' && definition.description.includes('KAJPLATS')) {
        const cycles = definition.description.includes('clear') ? '15' : '12';
        return `


## Related
- [IKEA KAJPLATS color/white spectrum](./KAJPLATS_CWS.md)
- [IKEA KAJPLATS white spectrum](./KAJPLATS_WS.md)
- [IKEA KAJPLATS white spectrum clear](./KAJPLATS_WS_clear.md)
- [All IKEA KAJPLATS models](https://www.zigbee2mqtt.io/supported-devices/#s=KAJPLATS)

## Pairing

1. **Power-cycle the lamp 6 times** to factory reset ([video](https://www.youtube.com/watch?v=npxOrPxVfe0)).
   
2. **Power-cycle the lamp ${cycles} times** (easier with a smart plug) to start Zigbee pairing.  
   The light will flash white.

If the device flashes, but does not join, this may help:
- Use a default Zigbee channel (11, 15, 20, 25)
- Bring it very close to the coordinator
- Pair another device at the same time
- Fiddle with an IKEA remote: re-insert batteries, press buttons, activate Touchlink

[Touchlink](../guide/usage/touchlink.md) reset is also possible, but it seems the device only leaves and identifies for 15s, without entering pairing mode.

Note that Matter pairing (via Bluetooth) is simultaneously active for 5 minutes after power-on, even if the device is already paired to a Zigbee network.

## Firmware
The device does not support OTA updates via Zigbee. Instead, updates are provided over Matter. **Move it to any Thread hub to update.**  
View available updates [here](https://webui.dcl.csa-iot.org/models) (search *KAJPLATS* or *4476*).

## Issues
- The device may come with null model and manufacturer attributes. In this case, Zigbee2MQTT will recognize it generically. A firmware update may fix it
- Power-on behavior may not work, only in Zigbee mode, on some models (at least one variant of [LED2401G5](./LED2401G5.md))
- Scenes, groups and the _OffWithEffect_ command may fail, with the INSUFFICIENT_SPACE error. See more info and workaround in [this issue](https://github.com/Koenkk/zigbee2mqtt/issues/30211#issuecomment-4019236515)


`;
    }
}
