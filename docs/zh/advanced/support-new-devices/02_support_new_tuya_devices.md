---
redirectFrom: /how_tos/how_to_support_new_tuya_devices.md
---

# 支持新的 Tuya 设备

Tuya 设备使用自定义的 `manuSpecificTuya` 簇，下面的说明将帮助你更好地理解它，并提供一些工具来简化其功能的发现过程。

## 操作步骤

### 1. 标准设置部分

阅读基础的 [howto](./01_support_new_devices.md)，了解如何设置外部转换器（external converter）。

### 2. 添加你的设备

为 Tuya 设备添加支持略有不同。以 `TS0601` 这个 model ID 为例，你需要创建如下的外部转换器：

```js
const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const modernExtend = require('zigbee-herdsman-converters/lib/modernExtend');
const e = exposes.presets;
const ea = exposes.access;
const tuya = require('zigbee-herdsman-converters/lib/tuya');

const definition = {
    // Since a lot of Tuya devices use the same modelID, but use different datapoints
    // it's necessary to provide a fingerprint instead of a zigbeeModel
    fingerprint: [
        {
            // The model ID from: Device with modelID 'TS0601' is not supported
            // You may need to add \u0000 at the end of the name in some cases
            modelID: 'TS0601',
            // The manufacturer name from: Device with modelID 'TS0601' is not supported.
            manufacturerName: '_TZE200_d0yu2xgi',
        },
    ],
    model: 'TS0601_new',
    vendor: 'Tuya',
    description: 'Fill in a description of the device here',
    extend: [
        tuya.modernExtend.tuyaBase({
            dp: true,
            // Enable this line in case the device has a clock, if time is incorrect with
            // `1970`, try with `2000`.
            // timeStart: "1970",
        }),
    ],
    exposes: [
        // Here you should put all functionality that your device exposes
    ],
    meta: {
        // All datapoints go in here
        tuyaDatapoints: [],
    },
};

module.exports = definition;
```

### 3. 理解 Tuya 数据点（datapoint，简称 DP）

`manuSpecificTuya` 簇的 `dataReport` 和 `dataResponse` 类型有它们自己的格式：

```js
    {name: 'seq', type: DataType.uint16},
    {name: 'dpValues', type: BuffaloZclDataType.LIST_TUYA_DATAPOINT_VALUES},
```

`seq` 是该 payload 的事务编号。`dpValues` 是一个"数据点（Data Points）"数组（类型：`TuyaDataPointValue`）。这样的一个数据点值由以下部分组成：

```js
dp: DataType.uint8;
datatype: DataType.uint8;
data: Buffer;
```

- `dp` 就是所谓的"数据点 ID（Data Point ID）"，它是 Tuya 设备的核心。从设备的角度来看，DPID 就是设备提供的各项功能。
- `datatype` 是 `data` 字段中所包含数据的类型，可参见 `node_modules/zigbee-herdsman-converters/lib/tuya.js` 中的 `dataTypes`。

有些数据点是"仅上报"的（只会上报设备内部发生的变化），有些则是"可下发也可上报"的（既能自行上报，也会在被设置时响应上报）。数据点在不同的 Tuya 设备之间并不统一，因此可能因设备而异。

### 4. 映射数据点

现在我们需要在 `tuyaDatapoints` 中映射这些数据点。启动 Zigbee2MQTT 并开启[调试日志](../../guide/configuration/logging.md#debugging)，然后在设备上触发一些操作。你会看到类似这样的日志：

```
Zigbee2MQTT:debug 2022-11-30 18:29:19: Datapoint '106' with value '77' not defined for '_TZE200_d0yu2xgi'
```

接下来我们需要弄清楚这个数据点（本例中是 `106`）代表什么含义，有几种不同的方法：

- [借助 Tuya 网关查找 Tuya 数据点](./03_find_tuya_data_points.md)（最简单，但需要 Tuya 网关）
- 检查是否已有其他受支持的 Tuya 设备映射过这个数据点（[搜索](https://github.com/Koenkk/zigbee-herdsman-converters/search?q=tuyaDatapoints)）
- 根据数值进行猜测

对于这个设备，我们已知数据点 `106` 是湿度，现在可以更新外部转换器中的 `exposes`（暴露项）和 `tuyaDatapoints` 部分：

```js
    exposes: [
        e.humidity(), // <- added the humdity expose
    ],
    meta: {
        tuyaDatapoints: [
            [106, 'humidity', tuya.valueConverter.raw], // <- mapped the datapoint
        ],
    },
```

映射的数据点中各个值的含义如下：

1. 数据点（本例中为 `106`）
2. 该值在状态中发布时所使用的键名（本例中为 `humidity`）
3. 值转换器（value converter），用于在发布前对接收到的值进行转换（本例中为 `tuya.valueConverter.raw`）。还有更多可用的值转换器，例如：
    - 如果值需要除以 10，可以使用 `tuya.valueConverter.divideBy10`
    - 如果值需要映射为字符串，可以使用 `tuya.valueConverterBasic.lookup({'single': 0, 'double': 1, 'hold': 2})`
    - 更多示例可在 [`tuya.ts`](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/devices/tuya.ts) 中搜索 `tuyaDatapoints`。

对所有数据点重复上述过程。

### 6. 创建拉取请求

要将你的新设备定义贡献给 Zigbee2MQTT，使其在下一个版本中开箱即用地被支持，请按照以下步骤操作：[创建拉取请求](./01_support_new_devices.md#4-create-a-pull-request)。

### 7. 附加内容：联系制造商

在联系 Tuya 兼容设备的制造商时，不要询问设备的 Zigbee 协议，他们通常并不清楚自己所采购的 Tuya 射频模块是如何通过 Zigbee 通信的。相反，应该询问设备的 UART 协议，这样通常能得到更好的配合。你也可以向他们询问 DPID 以及各功能对应的数据格式。

### 8. 附加内容 2：延伸阅读

你可以在[这里](https://developer.tuya.com/en/docs/iot/device-development/access-mode-mcu/zigbee-general-solution/tuya-zigbee-module-uart-communication-protocol/tuya-zigbee-module-uart-communication-protocol?id=K9ear5khsqoty)阅读更多关于设备如何与 Tuya Zigbee 射频模块通信的内容。

## 修正 Tuya 设备识别信息

如果你的设备功能已完全正常工作，但图片和/或描述不正确，可以按以下方式轻松修正识别信息：

1. 首先，前往 Zigbee2MQTT 前端界面（frontend）中该设备的 about 页面，确定该设备的 `Model`（注意不是 `Zigbee model`）。
1. 根据步骤 1 得到的 `Model`，在其中一个[定义文件](https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices)中找到该设备的定义，例如 [`tuya.ts`](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/devices/tuya.ts)。
1. 点击编辑图标。
1. 在定义中添加 `whiteLabel`（[示例](https://github.com/Koenkk/zigbee-herdsman-converters/blob/bfcd02de893edba24879d4b08e467f9ddd98cc2d/src/devices/tuya.ts#L5174)）。格式为 `tuya.whitelabel("VENDOR", "MODEL", "DESCRIPTION", ["MANUFACTURER_NAME"])`
    - `VENDOR`：设备的厂商，如果不清楚可以填 `Tuya`。
    - `MODEL`：设备或产品页面上标注的型号
    - `DESCRIPTION`：设备的描述
    - `MANUFACTURER_NAME`：可以从前端界面 -> 设备 -> about 页面 -> _Zigbee Model_ 下方获取，例如 `_TZ3000_cphmq0q7` 或 `_TZE200_eegnwoyw`。
1. 提交更改并[创建拉取请求](./01_support_new_devices.md#4-create-a-pull-request)
1. 为文档提交一张图片（[指南](./01_support_new_devices.md#5-add-device-picture-to-zigbee2mqttio-documentation)）
