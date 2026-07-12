---
sidebar: auto
redirectFrom: /information/external_converters.md
---

# 外部转换器

:::warning 警告
从 2.11.0 及更高版本开始，新安装中外部转换器默认是禁用的。
参见 [`enable_external_js`](../../guide/configuration/all-settings.md#enable-external-js) 以启用它。
参见[更多详情](../../guide/installation/14_securing.md#外部扩展与转换器)
:::

Zigbee2MQTT 使用 [zigbee-herdsman-converters](https://github.com/Koenkk/zigbee-herdsman-converters) 来解析设备之间收发的消息。

外部转换器提供了一种测试新设备支持的方式，它们的工作方式与内部转换器完全相同。

外部转换器存放在 `external_converters` 文件夹中（与 Zigbee2MQTT 的 configuration.yaml 文件位于文件系统的同一层级）。它们必须导出一个符合 [`DefinitionWithExtend`](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/lib/types.ts) 类型的 JavaScript 对象或对象数组。可以参考[现有的转换器](https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices)来熟悉这个框架。

:::tip 提示
一旦你的转换器准备就绪，请提交一个 [pull request](https://github.com/Koenkk/zigbee-herdsman-converters/pulls)，这样它就能被集成到 Zigbee2MQTT 中供所有人使用。等新版本的 Zigbee2MQTT 发布后，你就可以直接删除这个外部转换器了。
:::

:::tip 提示
最简单的开发方式是使用[外部转换器开发环境](https://github.com/Nerivec/z2m-external-converter-dev?tab=readme-ov-file#how-to-use)
:::

示例：

文件：`external_converters/my-first-converter.mjs`

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

### 更多示例

- [使用现代扩展（modern extends）的传感器](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/sensor_me.mjs)（与上面相同）
- [不使用现代扩展的传感器](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/sensor.mjs)
- [灯泡（light）](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/light.mjs)
- [插座（switch）](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/switch.mjs)
- [进阶示例](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.mjs)
- 已支持设备的定义可以在[这里](https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices)找到。查看同一厂商或同一类型的设备可能会有所帮助。

### 使用现代扩展（modern extends）

完整的 API 可以在[这里](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/lib/modernExtend.ts)找到。

### 使用非现代扩展

最常用的 API 端点可以通过以下方式导入：

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

为了优化导入，你也可以只导入所需的项。例如：

```js
import {onOff} from 'zigbee-herdsman-converters/lib/modernExtend';
import {presets, access} from 'zigbee-herdsman-converters/lib/exposes';
```

## 转换器列表

Zigbee2MQTT 启动时会发布 `zigbee2mqtt/bridge/converters`，其 payload 为 `[{"name": "my-first-converter.js": "code": <HERE COMES YOUR CONVERTER CODE>}]`，其中包含所有从文件系统加载的转换器。当转换器在运行时发生变化时（通过下面列出的任一操作），也会发布同样的消息，并附带相应更新后的 payload。

:::tip 提示
通过 Home Assistant 中的 Zigbee2MQTT 前端界面，你可以在“设置 > 开发者控制台 > 外部转换器”中添加或更新外部转换器。
:::

## 保存转换器

要在运行时保存一个转换器，请向 `zigbee2mqtt/bridge/request/converter/save` 发送一条消息，payload 为 `{"name": "my-first-converter.js", "code": <HERE COMES YOUR CONVERTER CODE>}`。代码将以给定的文件名保存在 `external_converters` 中。

## 移除转换器

要在运行时移除一个转换器，请向 `zigbee2mqtt/bridge/request/converter/remove` 发送一条消息，payload 为 `{"name": "my-first-converter.js"}`。该文件将从 `external_converters` 中被删除。
