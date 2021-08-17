# User extensions

User extensions is a way to extend Zigbee2MQTT behaviour, user extensions works in same way as internal extensions.

To get familiar with  extensions framework please read [source code of internal extensions](https://github.com/Koenkk/zigbee2mqtt/tree/master/lib/extension).

User extensions are stored in `data/extension` folder and have to export a JavaScript Class or Function.

Example:

File: `data/extension/my-first-extension.js`

```js
class MyExampleExtension {
    constructor(zigbee, mqtt, state, publishEntityState, eventBus, settings, logger) {
        this.zigbee = zigbee;
        this.mqtt = mqtt;
        this.state = state;
        this.publishEntityState = publishEntityState;
        this.eventBus = eventBus;
        this.settings = settings;
        this.logger = logger;

        logger.info('Loaded  MyExampleExtension');
    }

    /**
     * This method is called by the controller once Zigbee has been started.
     */
    // onZigbeeStarted() {}

    /**
     * This method is called by the controller once connected to the MQTT server.
     */
    onMQTTConnected() {
        this.mqtt.publish('example/extension', 'hello from MyExampleExtension');
    }

    /**
     * Is called when a Zigbee message from a device is received.
     * @param {string} type Type of the message
     * @param {Object} data Data of the message
     * @param {Object?} resolvedEntity Resolved entity returned from this.zigbee.resolveEntity()
     * @param {Object?} settingsDevice Device settings
     */
    // onZigbeeEvent(type, data, resolvedEntity) {}

    /**
     * Is called when a MQTT message is received
     * @param {string} topic Topic on which the message was received
     * @param {Object} message The received message
     * @return {boolean} if the message was handled
     */
    // onMQTTMessage(topic, message) {}

    /**
     * Is called once the extension has to stop
     */
    stop() {
        this.eventBus.removeListenersExtension(this.constructor.name);
    }
}

module.exports = MyExampleExtension;

```

## User extensions list

Once Zigbee2MQTT starts it publishes `zigbee2mqtt/bridge/extensions` with payload `[{"name": "my-first-extension.js": "code": <HERE COMES YOUR EXTENSION SOURCE CODE>}]` containing all the loaded user extensions.


## Save user extension

To save a user extension over the API publish to `zigbee2mqtt/bridge/request/extension/save` with payload `{"name": "my-first-extension.js", "code": <HERE COMES YOUR EXTENSION SOURCE CODE>}`.


## Remove user extension

To remove a user extension over the API publish to `zigbee2mqtt/bridge/request/extension/remove` with payload `{"name": "my-first-extension.js"}`.
