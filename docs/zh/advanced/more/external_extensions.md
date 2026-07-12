---
sidebar: auto
redirectFrom: /information/external_extensions.md
---

# 外部扩展

:::warning 警告
在 2.11.0 及更高版本中，新安装默认禁用外部扩展。
参见 [`enable_external_js`](../../guide/configuration/all-settings.md#enable-external-js) 以启用该功能。
参见[更多细节](../../guide/installation/14_securing.md#外部扩展与转换器)
:::

外部扩展提供了一种扩展 Zigbee2MQTT 行为的方式，其工作原理与内部扩展完全相同。

要熟悉扩展框架，请参考[内部扩展的源代码](https://github.com/Koenkk/zigbee2mqtt/tree/master/lib/extension)。

外部扩展存放在 `data/external_extensions` 文件夹中，必须导出一个符合 `Extension` 基类（见上方链接）的 JavaScript 类。

:::tip 提示
你可以在以下仓库中找到一些现成的扩展 [https://github.com/Koenkk/zigbee2mqtt-user-extensions/](https://github.com/Koenkk/zigbee2mqtt-user-extensions/)
:::

示例：

文件：`data/external_extensions/my-first-extension.mjs`

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

构造函数参数的类型如下：

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

更多类型细节参见 [https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/types/types.d.ts](https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/types/types.d.ts)。

## 扩展列表

Zigbee2MQTT 启动时会发布 `zigbee2mqtt/bridge/extensions`，其 payload 为 `[{"name": "my-first-extension.js": "code": <HERE COMES YOUR EXTENSION SOURCE CODE>}]`，其中包含从文件系统加载的所有扩展。当扩展在运行时发生变化时（通过下述操作之一），也会发布同样的消息，并附带相应更新后的 payload。

## 保存扩展

要在运行时保存一个扩展，向 `zigbee2mqtt/bridge/request/extension/save` 发送一条消息，payload 为 `{"name": "my-first-extension.js", "code": <HERE COMES YOUR EXTENSION SOURCE CODE>}`。代码将以给定的文件名保存在 `data/external_extensions/` 中。

## 删除扩展

要在运行时删除一个扩展，向 `zigbee2mqtt/bridge/request/extension/remove` 发送一条消息，payload 为 `{"name": "my-first-extension.js"}`。该文件将从 `data/external_extensions/` 中删除。
