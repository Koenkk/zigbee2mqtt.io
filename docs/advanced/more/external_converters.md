---
sidebar: auto
---

# External converters

Zigbee2MQTT uses [zigbee-herdsman-converters](https://github.com/Koenkk/zigbee-herdsman-converters) to parse messages to and from devices.

External converters provide a way to test support for new devices, they work identically to internal converters.

External converters are stored in `data/external_converters` folder and have to export a JavaScript Object or Array of Object matching the type [`DefinitionWithExtend`](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/lib/types.ts). Refer to [existing converters](https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices) to get familiar with the framework.

:::tip TIP
Once your converter is ready, open a [pull request](https://github.com/Koenkk/zigbee-herdsman-converters/pulls) so it can be integrated into Zigbee2MQTT for all to use. Once the new Zigbee2MQTT version is released, you can just delete the external converter.
:::

:::tip TIP
The easiest way to develop is by using the [external converter development environment](https://github.com/Nerivec/z2m-external-converter-dev?tab=readme-ov-file#how-to-use)
:::

Example:

File: `data/external_converters/my-first-converter.mjs`

```js
import {temperature, humidity, battery} from 'zigbee-herdsman-converters/lib/modernExtend';

export default {
    zigbeeModel: ['lumi.sens'],
    model: 'WSDCGQ01LM',
    vendor: 'Xiaomi',
    description: 'MiJia temperature & humidity sensor',
    extend: [temperature(), humidity(), battery()],
};
```

### More examples

- [Sensor using modern extends](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/sensor_me.mjs) (same as above)
- [Sensor using non modern extends](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/sensor.mjs)
- [Bulb (light)](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/light.mjs)
- [Plug (switch)](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/switch.mjs)
- [Advanced example](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.mjs)
- Definitions of already supported devices can be found [here](https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices). It may help to look at devices from the same vendor or type.

### Using modern extends

The entire API can be found [here](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/lib/modernExtend.ts).

### Using non modern extends

The most common API endpoints are accessible from the following imports:

```js
import * as m from 'zigbee-herdsman-converters/lib/modernExtend';
import * as fz from 'zigbee-herdsman-converters/converters/fromZigbee';
import * as tz from 'zigbee-herdsman-converters/converters/toZigbee';
import * as exposes from 'zigbee-herdsman-converters/lib/exposes';
import * as reporting from 'zigbee-herdsman-converters/lib/reporting';
import * as ota from 'zigbee-herdsman-converters/lib/ota';
import * as utils from 'zigbee-herdsman-converters/lib/utils';
import * as globalStore from 'zigbee-herdsman-converters/lib/store';

// exposes.presets
// exposes.access
```

To optimize imports, you can import only the required items instead. For example:

```js
import {onOff} from 'zigbee-herdsman-converters/lib/modernExtend';
import {presets, access} from 'zigbee-herdsman-converters/lib/exposes';
```

## Converters list

When Zigbee2MQTT starts it publishes `zigbee2mqtt/bridge/converters` with payload `[{"name": "my-first-converter.js": "code": <HERE COMES YOUR CONVERTER CODE>}]` containing all the converters loaded from the file system. The same message is also published when a converter changes at runtime (from one of the below actions), with the appropriately updated payload.

## Save converter

To save a converter at runtime, send a message to `zigbee2mqtt/bridge/request/converter/save` with payload `{"name": "my-first-converter.js", "code": <HERE COMES YOUR CONVERTER CODE>}`. The code will be saved in `data/external_converters/` in the file with the given name.

## Remove converter

To remove a converter at runtime, send a message to `zigbee2mqtt/bridge/request/converter/remove` with payload `{"name": "my-first-converter.js"}`. The file will be deleted from `data/external_converters/`.
