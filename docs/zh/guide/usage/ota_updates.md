---
redirectFrom: /information/ota_updates.md
---

# OTA 更新

此功能允许通过无线方式（OTA）更新 Zigbee 设备的固件。

::: warning
固件更新可以带来错误修复、安全更新以及其他受欢迎的新功能。
但是，它们也可能以影响 Zigbee2MQTT 兼容性的方式改变设备行为，甚至可能引入有问题、乃至恶意的功能。
**在应用固件更新之前，请务必查看发行说明。**
:::

默认情况下，Zigbee2MQTT 会从 [Koenkk/zigbee-OTA](https://github.com/Koenkk/zigbee-OTA) 仓库匹配并获取 OTA 镜像（如果有互联网访问权限）。
该仓库是制造商提供的固件更新的镜像，其内容既有人工整理的，也有自动整理的。
[使用自定义/本地来源](#使用自定义固件文件或索引)将在本页后面部分详细说明。

::: tip
本页中的大多数操作和配置都可以通过前端界面完成。
:::

## 更新状态

更新状态会发布到 `zigbee2mqtt/[DEVICE_FRIENDLY_NAME]`，示例 payload：`{"update":{"state":"available"}}`。
可能的状态有：

- `idle`：没有可用/进行中的更新
- `available`：该设备有可用更新
- `scheduled`：在设备下次请求更新检查时可能会开始更新
- `updating`：更新正在进行中
    - 在此期间，进度百分比和剩余时间（秒）也会被加入 payload 中（每 30 秒上报一次），示例：`{"update":{"state":"updating","progress":13.37,"remaining":219}}`
    - 第一次进度上报（0% 时）会根据 OTA 设置给出预估的剩余时间。实际剩余时间会根据每次进度上报时的当前状态进行调整（受网络状况影响很大）

## 检查更新

### 自动检查

支持 OTA 的 Zigbee 设备可以周期性地请求固件更新检查。收到此类请求后，Zigbee2MQTT 会（在默认来源上）检查更新，并将结果发布到 MQTT。

有些设备请求更新的频率过高。Zigbee2MQTT 将检查频率限制为每天最多一次（1440 分钟）。**更新检查间隔**是可配置的，但它并不能阻止设备发起请求，Zigbee2MQTT 只会在该间隔内忽略这些消息。  
以下示例将检查间隔设置为最多每两天一次，在 `configuration.yaml` 中：

```yaml
ota:
    update_check_interval: 2880
```

也可以完全**忽略由设备发起的更新检查**（Zigbee2MQTT 将始终回复"无可用镜像"）。若按如下方式修改 `configuration.yaml`，则只有手动检查才会继续进行：

```yaml
ota:
    disable_automatic_update_check: true
```

此设置也支持按设备单独配置。参见[设备选项](../configuration/devices-groups.md)。

禁用自动更新检查并不会阻止[计划中的 OTA 更新](#安排在设备下次请求时更新)。

### 手动检查

要手动检查**升级**，请向 `zigbee2mqtt/bridge/request/device/ota_update/check` 发送消息，payload 为 `{"id":"deviceID"}`，其中 deviceID 可以是设备的 `ieee_address` 或 `friendly_name`。  
若要检查是否有**降级**可用，请改为向 `zigbee2mqtt/bridge/request/device/ota_update/check/downgrade` 发送消息。

Zigbee2MQTT 会向设备请求当前的固件信息（制造商代码、镜像类型和已安装版本）。只有在收到这些信息后，才会查询 OTA 索引。
如果设备没有响应，请在检查之前先唤醒它（例如按一下按钮），或者等待自动检查。

请求示例：`{"id":"my_remote"}`，响应示例：`{"data":{"id":"my_remote","update_available":false},"status":"ok"}`。

如果有可用更新（`"update_available":true`），响应中还会包含：

- `source`：OTA 文件的 URL 或文件路径
- `release_notes`：（如提供）该来源的发行说明
- `downgrade`：如果该可用更新是降级，则为 true

## 开始更新

::: warning WARNINGS
更新过程所需时间差异很大：根据设备、设置和网络稳定性的不同，可能需要 10-100 分钟。在此期间设备仍可正常使用，但网络上会增加大量流量。因此，最佳做法是**在网络负载较低时，一次只更新一个设备。**

当 OTA 文件上传完成后，设备将以新固件重新启动。**由于上电行为（例如在半夜自动亮灯），重启可能会导致不必要的中断或开启！**

由于更新可能会大幅改变设备行为，Zigbee2MQTT 对其的处理方式与配对新设备类似。它会自动重新进行设备访谈（interview）以检测新功能，并**重新配置以确保正常运行（这可能会用默认值覆盖自定义的上报间隔）**
:::

### 手动更新请求

当有**升级**可用时，向 `zigbee2mqtt/bridge/request/device/ota_update/update` 发送消息以开始更新，payload 为 `{"id":"deviceID"}`，其中 deviceID 可以是设备的 `ieee_address` 或 `friendly_name`。
当有**降级**可用时，请改为向 `zigbee2mqtt/bridge/request/device/ota_update/update/downgrade` 发送消息以开始更新。
你可以通过向 `zigbee2mqtt/bridge/request/device/ota_update/update/abort` 发送消息（payload 同上）来中止正在进行的更新。

如果设备没有响应，请在开始更新之前先唤醒它（例如按一下按钮），或者[安排](#安排在设备下次请求时更新)该更新。  
更新进度会发布到相应设备的主题下，如[前文](#device-state)所述。

更新完成后，会发送一条响应消息，示例响应：`{"data":{"id":"my_remote","from":{"file_version":5,"software_build_id":1,"date_code":"20190101"},"to":{"file_version":10,"software_build_id":2,"date_code":"20190102"}},"status":"ok"}`。  
请注意，`software_build_id` 和 `date_code` 是**可选的**设备属性，某些设备可能具有它们，另一些则没有（即使是相同型号也可能不同，因为这取决于固件）。

### 安排在设备下次请求时更新

可以将更新安排在设备下一次请求 OTA 更新检查时进行。

:::tip TIP
这对于电池供电的设备很有帮助，因为它们通常不会响应[手动更新请求](#手动更新请求)，除非在触发前刚好被物理唤醒。已知有些品牌/型号只能通过这种方式更新（例如某些 Legrand 设备）。
:::

要安排更新，请向 `zigbee2mqtt/bridge/request/device/ota_update/schedule` 发送消息，payload 为 `{"id":"deviceID"}`，其中 deviceID 可以是设备的 `ieee_address` 或 `friendly_name`，请求示例：`{"id":"my_remote"}`。  
降级的安排同理，使用主题 `zigbee2mqtt/bridge/request/device/ota_update/schedule/downgrade`。

要取消安排，请发送相同的 payload，但主题改为 `zigbee2mqtt/bridge/request/device/ota_update/unschedule`。

安排状态会保存在数据库中，并在 Zigbee2MQTT 重启后恢复。

如果已安排的更新失败，它将保持安排状态（设备会在下一次检查时重试）。  
如果设备发起请求时没有可用更新，该安排会被移除。  
只有当更新成功时，[手动更新请求](#手动更新请求)才会移除已存在的安排。

## 降级

固件降级同样是可行的。按照与更新相同的步骤操作，但使用上文所述的对应 `downgrade` 主题。

默认来源（[Koenkk/zigbee-OTA](https://github.com/Koenkk/zigbee-OTA)）通常会保存最新版本和次新版本（latest-1）的镜像。这样便可以进行一个版本的降级。若要降级到更早的固件，则必须由用户以[自定义来源](#使用自定义固件文件或索引)的方式提供。

尽管 Zigbee 规范允许固件降级，但有些设备可能会拒绝更早的固件版本。此外，Zigbee 规范不支持更新到相同版本的固件，Zigbee2MQTT 也无法强制执行此操作。

无法备份当前已安装的版本。

## 高级配置

### 更改更新参数

以下 OTA 设置可以全局调整（通过编辑 `configuration.yaml`），也可以按请求单独调整（在 payload 中提供）：`image_block_request_timeout`、`image_block_response_delay`、`default_maximum_data_size`。

```yaml
ota:
    image_block_request_timeout: 150000
    image_block_response_delay: 250
    default_maximum_data_size: 50
```

如果设备接收数据块请求的速度异常缓慢，增加**接收数据块请求的超时时间**会有所帮助。不过默认值已经是 150000ms，应该适用于大多数情况。

**两个数据块之间的最小延迟**可以减小以加快 OTA 更新速度，但这可能需要更加稳定的网络，以避免出现问题和崩溃。默认值为 250ms，最小值为 50ms。

Zigbee2MQTT 发送的**镜像数据块大小**默认限制为 50 字节。同样地，更大的数据块会提高 OTA 速度，但会降低网络稳定性。最小值为 10B，最大值为 100B。  
有些设备会拒绝大于 50/64 字节的大小。  
对于某些设备，Zigbee2MQTT 会忽略自定义值，并自动使用它们所期望的正确大小。

### 使用自定义固件文件或索引

设备可以通过直接提供固件文件，或在自定义索引中列出它们，从自定义来源进行更新。

:::caution CAUTION
不当使用自定义 OTA 索引或固件文件可能会导致设备变砖。由于"自定义固件"的特性，此模式下会绕过常规 OTA 的多项限制。**请使用可信来源！**
:::

OTA 索引文件是指定位置中可用固件镜像的列表。默认情况下，Zigbee2MQTT 使用来自 [zigbee-OTA](https://github.com/Koenkk/zigbee-OTA) 仓库的[升级索引文件](https://github.com/Koenkk/zigbee-OTA/blob/master/index.json)和[降级索引文件](https://github.com/Koenkk/zigbee-OTA/blob/master/index1.json)。

自定义更新索引可以全局提供（通过编辑 `configuration.yaml`），也可以按每次更新请求单独提供。可接受的格式有：本地文件路径（绝对或相对）以及网络 URL。

覆盖用的 OTA 索引文件应具有与 [zigbee-OTA 索引文件](https://github.com/Koenkk/zigbee-OTA/blob/master/index.json)相同的结构。
如果某个镜像需要额外的元数据，请参阅[仓库 README](https://github.com/Koenkk/zigbee-OTA/tree/master?tab=readme-ov-file#notes-for-maintainers--developers)。

:::tip TIP
以下工具可以生成索引，并执行更多有用的操作：[https://nerivec.github.io/zigbee-ota-file-editor/](https://nerivec.github.io/zigbee-ota-file-editor/)
:::

如果默认的 Zigbee2MQTT 索引无法访问（例如物理隔离网络），则只会使用本地 OTA 索引。  
如果两个索引都可用，覆盖索引中的记录将优先于默认索引中的记录。

#### 全局索引覆盖

在此示例中，`my_index.json` 与 `configuration.yaml` 位于同一目录下：

```yaml
ota:
    zigbee_ota_override_index_location: my_index.json
    # or
    zigbee_ota_override_index_location: https://example.com/ota/index.json
```

#### 按请求提供自定义索引/固件

以下主题支持在 payload 中提供 `url`（同样接受本地路径和网络 URL），以使用自定义文件进行更新。

如果指向的位置是一个 JSON 文件（`*.json`），它将被视为索引；否则将被视为固件文件。

- 仅支持索引
    - `bridge/request/device/ota_update/check`
    - `bridge/request/device/ota_update/check/downgrade`
- 支持索引、固件文件和十六进制数据
    - `bridge/request/device/ota_update/update`
    - `bridge/request/device/ota_update/update/downgrade`
    - `bridge/request/device/ota_update/schedule`
    - `bridge/request/device/ota_update/schedule/downgrade`

完整的 OTA 文件也可以以十六进制字符串的形式提供：`"hex":{"data":"1EF1EEB0...","file_name":"my-file.ota"}`。收到后，固件文件将被存储在 `data/ota/` 中。这主要是为前端使用而设计的（该 payload 由"文件上传"对话框构建）。

## 故障排除

- `Device didn't respond to OTA request` 或 `Update failed with reason: 'aborted by device'`：尝试断开设备的电源/电池几秒钟以重启设备，然后再次尝试 OTA 更新，务必在发送更新请求之前先按一下设备上的按钮来激活它
- 对于电池供电的设备，请确保电池电量在 70% 以上，因为 OTA 更新非常耗电。有些设备会在更新前检查最低电量要求，若电量过低会拒绝更新
- 请确保日志级别设置为 `info`。如果设置为 `warning` 或 `error`，前端将无法报告某些指示当前 OTA 状态的消息
