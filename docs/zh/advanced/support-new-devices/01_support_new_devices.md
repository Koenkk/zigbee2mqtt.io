---
redirectFrom: /how_tos/how_to_support_new_devices.md
---

# 支持新设备

本页面将指导你完成通过临时的[外部转换器（external converter）](../../advanced/more/external_converters.md)为新设备添加支持的过程。

如果你需要任何帮助，欢迎开启一个 [discussion](https://github.com/Koenkk/zigbee2mqtt/discussions)。

**在开始之前**，请先确认你的设备是否已经在 Zigbee2MQTT 的 dev 分支中得到支持！可以通过查看 dev 分支的[更新日志](https://gist.github.com/Koenkk/bfd4c3d1725a2cccacc11d6ba51008ba#new-supported-devices)来确认。同时建议将 Zigbee2MQTT 的 `log_level` 设置为 `debug`，以便调试。

## 操作步骤

### 1. 将设备与 Zigbee2MQTT 配对

第一步是将设备与 Zigbee2MQTT 配对。由于 Zigbee2MQTT 可以与任何 Zigbee 设备配对，你未受支持的设备应该也能够开箱配对。你需要找到让设备进入配对模式的方法，通常是通过恢复出厂设置来实现。

成功配对设备后，日志中会出现类似下面的内容：

```
Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired
Zigbee2MQTT:warn  2019-11-09T12:19:56: Device '0x00158d0001dc126a' with Zigbee model 'lumi.sens' and manufacturer name 'some_name' is NOT supported, please follow https://www.zigbee2mqtt.io/how-tos/support_new_devices.html
```

::: tip
请确保已开启加入许可（joining），否则新设备将无法加入网络。
:::

### 2. 创建外部定义（external definition）

当一个未受支持的设备与 Zigbee2MQTT 配对时，Zigbee2MQTT 会尝试发现该设备所支持的功能。要查看目前已发现的内容，请在前端界面中打开该设备的 `Exposes` 标签页。通过检查数值是否上报、状态是否可控（例如对于灯具）来确认这些暴露项（exposes）是否正常工作。
需要注意的是，功能发现目前仍在开发中，并非所有功能都能被发现，有些功能甚至完全无法被自动发现，这通常是因为设备本身的实现不符合标准（Tuya 设备中较为常见）。

接下来，在设备的 `Dev console` 标签页中点击 `Generate external definition` 来生成外部定义。

<img src="/images/generate_external_definition.gif" height="300"/>

默认情况下，外部定义会按照 Zigbee ZCL 规范，将设备暴露出的 Zigbee 簇（cluster）映射为对应的功能。当然，如果设备本身不符合该规范，相关功能可能无法正常工作，甚至完全不可用。
如果所有功能都正常工作，且所有预期功能都已存在，那么恭喜你可以直接跳到第 3 步。
如果不是这样，你就需要对生成的外部定义进行扩展。

::: tip
根据设备的不同，有时可以使用其他现代扩展（modern extend）来扩展该定义。
这是推荐的做法，因为通常更简单。
:::

### 3. 扩展生成的外部定义

要扩展生成的外部定义，你可以手动将代码保存到文件中并重启 Zigbee2MQTT，也可以使用 MQTT API 在运行时加载该转换器（converter）。详见[外部转换器](../../advanced/more/external_converters.md)。

为该设备添加和/或配置合适的现代扩展（参见上面的链接）。

::: tip
前端界面中该设备的 `Clusters` 标签页列出了受支持的簇，可用于进一步分析。
:::

完成后，在设备上触发相应操作。

如果设备没有任何上报，可能是该设备需要额外的配置。可以通过添加 `configure:` 部分来实现。_参考类似[设备](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/devices)的写法可能会有帮助。_

::: tip
如果你的设备被宣传为兼容 Tuya，或者上报的内容中包含 `manuSpecificTuya`，可以在[这里](./02_support_new_tuya_devices.md)找到添加此类设备的额外说明。
:::

如果在添加并配置了所有合适的现代扩展之后，仍然看到类似下面的消息，说明你可能需要添加现代扩展未提供的特定转换器。可以先尝试复用已有的转换器，可以在[这里](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/converters/fromZigbee.ts)找到它们。

```
Zigbee2MQTT:debug  2019-11-09T12:24:22: No converter available for 'WSDCGQ01LM' with cluster 'msTemperatureMeasurement' and type 'attributeReport' and data '{"measuredValue":2512}'
```

对于上面这条消息，你可以使用已有的 `fz.temperature` 转换器：

```js
    fromZigbee: [fz.temperature],
```

_注意：这个转换器实际上已经被对应的现代扩展（`temperature()`）所覆盖，这里只是作为示例。参见[更多示例](../../advanced/more/external_converters.md#more-examples)。_

重复这最后一步，直到设备不再产生类似 `No converter available for 'WSDCGQ01LM' with cluster...` 的日志消息。

如果现有的转换器都不适用，你可以添加自定义转换器，示例可以在[这里](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.mjs)找到。

### 4. 创建 pull request

要将你的新设备定义贡献给 Zigbee2MQTT，使其在下一个版本中开箱即用地被支持，请按照以下步骤操作：

1. 在 zigbee-herdsman-converters 仓库中，找到你的设备所属的正确[设备文件](https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices)（通常按品牌或厂商划分）。
1. 点击该文件，使用编辑（铅笔）图标直接在 GitHub 上打开进行编辑。
1. 参照相似设备所使用的结构和写法，将你的设备定义添加到文件中。
1. 点击 **Commit changes** -> **Propose changes** -> **Create pull request**。
1. 填写 PR 模板，然后点击 **Create pull request**。

### 5. 为 zigbee2mqtt.io 文档添加设备图片

请确保该设备的图片能够在已支持设备页面以及前端界面中显示。

首先为该设备准备一张图片。请确保：

- 文件格式：`PNG`
- 分辨率：`512x512`
- 背景：`透明`。
  _如有必要，可以使用 [Adobe Express 去背景工具](https://new.express.adobe.com/tools/remove-background) 将背景变为透明。_
- 文件名：唯一的文件名（例如：`ZY-M100-24GV3.png`）

提供设备图片最简单的方式是通过 GitHub 网页编辑器上传：

1. 在浏览器中打开 [zigbee2mqtt.io 仓库](https://github.com/Koenkk/zigbee2mqtt.io)。
2. 创建你自己的代码仓库分支（fork）。如果已有分支，可以选择 **Sync fork** 进行更新。

  <img width="268" height="58" alt="fork repository" src="https://github.com/user-attachments/assets/b66e3826-9344-41d3-a406-528b2420705c" />

3. 在你的分支中导航到文件夹：`public/images/devices`。

  <img width="370" height="52" alt="public/images/devices" src="https://github.com/user-attachments/assets/128d5431-db17-4154-99b8-c1d423443c93" />

4. 使用 **Add file** 按钮选择 **Upload file** 来上传图片。

  <img width="289" height="122" alt="upload file" src="https://github.com/user-attachments/assets/941ce038-1855-4175-9352-1adf56239367" />

5. 上传文件，并选择为其创建一个新分支。

  <img width="685" height="332" alt="new branch" src="https://github.com/user-attachments/assets/0fa3b04e-76a8-432c-a95a-289ca2287f51" />

6. 在下一个界面中，请跳过本地创建 Pull Request 的步骤，改为从顶部菜单中选择 **Pull requests**。

  <img width="248" height="63" alt="Pull Requests" src="https://github.com/user-attachments/assets/6c10900d-00be-4c09-afac-a238e34e934d" />

7. 选择 **New pull request**。

  <img width="746" height="109" alt="New pull request" src="https://github.com/user-attachments/assets/2c8379a5-c45c-4c17-975e-797d9a7218cf" />

8. 选择包含你想提交更改的功能分支，将其提交到 [zigbee2mqtt.io GitHub 仓库](https://github.com/Koenkk/zigbee2mqtt.io)。

    此后应会出现 **Create pull request** 按钮。

       <img width="943" height="264" alt="image" src="https://github.com/user-attachments/assets/e2cd762f-1e85-491b-bd92-9d2f2b82ce64" />

9. 填写 PR 相关信息，然后点击 **Create pull request** 按钮。

  <img width="990" height="629" alt="image" src="https://github.com/user-attachments/assets/4656cdc6-cea5-49cf-8e29-49a0f7b6be07" />

**_可选：_** 可以在同一个 PR 中，在 `docs/devices` 下为你的设备添加一个 markdown 文件，使用你定义中的 `model` 属性作为文件名。该文件的大部分内容会通过 docgen 自动生成，但你也可以在备注部分添加自己的说明。

请勿在 `## Notes` 部分内使用 `h1` 或 `h2` 标题。

> > \<!-- Notes BEGIN --><br> >> \## Notes<br>
> > ...<br> >> \<!-- Notes END -->
