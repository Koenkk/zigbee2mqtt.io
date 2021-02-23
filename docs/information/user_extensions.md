# User extensions

User extensions is a way to extend Zigbee2MQTT behaviour, user extensions works in same way as internal extensions.

To get familiar with  extensions framework please read [source code of internal extensions](https://github.com/Koenkk/zigbee2mqtt/tree/master/lib/extension).

User extensions are stored in `data/extensions` folder.

User extension have to export a JavaScript Class or Function.

Example:

File: `data/extensions/my-first-extension.js`

```js
class MyExampleExtension {
    constructor(zigbee, mqtt, state, publishEntityState, eventBus, settings, logger) {
        logger.info('Loaded  MyExampleExtension');
        mqtt.publish('example/extension', 'hello from MyExampleExtension')
    }
}

module.exports = MyExampleExtension;
```

## Extensions list

Once Zigbee2MQTT starts it publishes `zigbee2mqtt/bridge/extensions` with payload `[{"name": "my-first-extension.js": "code": <HERE COMES YOUR EXTENSION SOURCE CODE>}]`


## Save user extension

To save an user extension over the API publish to `zigbee2mqtt/bridge/request/extension/save` with payload `{"name": "my-first-extension.js", "code": <HERE COMES YOUR EXTENSION SOURCE CODE>}`
