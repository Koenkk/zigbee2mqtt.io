---
sidebar: auto
---

# External extensions

External extensions provide a way to extend Zigbee2MQTT behavior, they work identically to internal extensions.

To get familiar with the Extension framework, refer to the [source code of internal extensions](https://github.com/Koenkk/zigbee2mqtt/tree/master/lib/extension).

External extensions are stored in `data/external_extensions` folder and have to export a JavaScript Class that conforms to the `Extension` base class (see above link).

:::tip TIP
You can find some ready-made extensions in the following repository [https://github.com/Koenkk/zigbee2mqtt-user-extensions/](https://github.com/Koenkk/zigbee2mqtt-user-extensions/)
:::

Example:

File: `data/external_extensions/my-first-extension.mjs`

```js
import {posix} from 'node:path';

export default class MyExampleExtension {
    constructor(zigbee, mqtt, state, publishEntityState, eventBus, enableDisableExtension, restartCallback, addExtension, settings, logger) {
        this.zigbee = zigbee;
        this.mqtt = mqtt;
        this.state = state;
        this.publishEntityState = publishEntityState;
        this.eventBus = eventBus;
        this.enableDisableExtension = enableDisableExtension;
        this.restartCallback = restartCallback;
        this.addExtension = addExtension;
        this.settings = settings;
        this.logger = logger;

        logger.info('Loaded  MyExampleExtension');
    }

    /**
     * Called when the extension starts (on Zigbee2MQTT startup, or when the extension is saved at runtime)
     */
    start() {
        this.mqtt.publish('example/extension', `hello from MyExampleExtension, ${posix.join('just', 'a', 'test')}`);

        // All possible events can be seen here: https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/eventBus.ts

        // Subscribe to MQTT messages
        this.eventBus.onMQTTMessage(this, (data) => {
            console.log(`Received MQTT message on topic '${data.topic}' with message '${data.message}'`);
        });
    }

    /**
     * Called when the extension stops (on Zigbee2MQTT shutdown, or when the extension is saved/removed at runtime)
     */
    stop() {
        this.eventBus.removeListeners(this);
    }
}
```

The typing for the constructor parameters is as below:

```typescript
zigbee: Zigbee, // see https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/zigbee.ts
mqtt: MQTT, // see https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/mqtt.ts
state: State, // see https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/state.ts
publishEntityState: PublishEntityState,
eventBus: EventBus, // see https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/eventBus.ts
enableDisableExtension: (enable: boolean, name: string) => Promise<void>,
restartCallback: () => Promise<void>,
addExtension: (extension: Extension) => Promise<void>,
logger: typeof import logger, // see https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/util/logger.ts
settings: typeof import settings, // see https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/util/settings.ts
```

See [https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/types/types.d.ts](https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/types/types.d.ts) for more typing details.

## Extensions list

When Zigbee2MQTT starts it publishes `zigbee2mqtt/bridge/extensions` with payload `[{"name": "my-first-extension.js": "code": <HERE COMES YOUR EXTENSION SOURCE CODE>}]` containing all the extensions loaded from the file system. The same message is also published when an extension changes at runtime (from one of the below actions), with the appropriately updated payload.

## Save extension

To save an extension at runtime, send a message to `zigbee2mqtt/bridge/request/extension/save` with payload `{"name": "my-first-extension.js", "code": <HERE COMES YOUR EXTENSION SOURCE CODE>}`. The code will be saved in `data/external_extensions/` in the file with the given name.

## Remove extension

To remove an extension at runtime, send a message to `zigbee2mqtt/bridge/request/extension/remove` with payload `{"name": "my-first-extension.js"}`. The file will be deleted from `data/external_extensions/`.
