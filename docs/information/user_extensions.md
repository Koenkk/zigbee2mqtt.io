# User extensions

User extensions is a way to extend zigbee2mqtt behaviour, user extensions works in same way as internal

To get familiar with  extensions framework please read (source code)[https://github.com/Koenkk/zigbee2mqtt/tree/master/lib/extension]

User extensions are stored in `data/extensions` folder

User extension has to export js Class or Function

example:

`data/extensions/my-first-extension.js`

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

Once zigbee2mqtt starts it publishes `zigbee2mqtt/bridge/extensions` with payload `["my-first-extension.js"]`

## Read user extension

To read user extension over api publish `zigbee2mqtt/bridge/extension/request/read` with payload `{"name": "my-first-extension.js"}`
Response: `{"status": "ok", "data": {"name": "my-first-extension.js", "content": <HERE COMES YOUR EXTENSION SOURCE CODE>}}`

## Save and load user extension

To read user extension over api publish `zigbee2mqtt/bridge/extension/response/save` with payload `{"name": "my-first-extension.js", "content": <HERE COMES YOUR EXTENSION SOURCE CODE>}`