---
sidebarDepth: 1
next: ../configuration/
redirectFrom:
    - /how_tos/how_to_secure_network.md
    - /advanced/zigbee/03_secure_network.md
---

# 保护安装安全

::: warning
本页概述了安全性在典型安装场景中的应用方式。
由于每套安装环境略有不同，实际适用的措施可能比本文列出的更少，也可能更多。
:::

理解 Zigbee2MQTT 安全性的一个有效方式，是将其类比为网络路由器上运行的软件：它提供对网络的配置与控制能力。
因此，它默认情况下仅可在本地访问。

由于 Zigbee2MQTT 是一个桥接程序，与其相连的各个软件组件（MQTT 代理、自动化软件等）也都必须各自妥善加固安全性。请参阅它们各自的文档。

将上述任何组件公开暴露到公网都需要周密的安全规划。
绝不能允许不受信任的访问。

## 主机系统

- **专用用户**：使用专用的、非特权的用户账户（而非 `root`）运行 Zigbee2MQTT。这样可以在进程一旦被攻破时限制影响范围。
- **限制数据目录访问权限**：数据目录中包含完整的配置、网络状态和设备数据。只应让运行 Zigbee2MQTT 的用户可以访问它。
- **保持主机系统更新**：定期应用操作系统及各项依赖（Node.js、MQTT 代理等）的安全更新，并及时更新 Zigbee2MQTT 本身。

## 配置文件

`configuration.yaml` 文件包含 MQTT 凭据和 Zigbee 网络密钥等敏感信息。

- **限制文件权限**：确保只有运行 Zigbee2MQTT 的用户可以读写该文件。

    ```bash
    chmod 600 configuration.yaml
    ```

- **使用独立的密钥文件**：避免将凭据以明文形式存储在 `configuration.yaml` 中。
  应改用单独的 `secret.yaml` 文件，并通过 `!secret.yaml` 语法引用它。参见[在其他文件中指定](../configuration/mqtt.md#specifying-mqtt-serveruserpassword-and-network_key-in-a-different-file)。

    对 `secret.yaml` 应用相同的权限限制：

    ```bash
    chmod 600 secret.yaml
    ```

## MQTT

MQTT 是进出 Zigbee2MQTT 的主要入口。
它既用于发布数据，也用于控制 Zigbee2MQTT 的方方面面（配置、网络、设备等）。

完整参考请参见 [MQTT 配置](../configuration/mqtt.md)。

:::caution 注意
切勿在未加固访问安全的情况下将 MQTT 代理公开暴露到公网。
请参阅你所使用的 MQTT 代理提供的相关文档和指南。
:::

:::caution 注意
在生产环境中使用 `reject_unauthorized: false` 是危险的。它会禁用 TLS 证书验证，使连接变得易受攻击。
:::

## 前端界面（frontend）

前端界面使用与 MQTT 相同的 API，只是包装在 [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) 中以供浏览器内访问。
任何能够访问前端界面的人都对 Zigbee2MQTT 拥有完全控制权，与拥有 MQTT 访问权限的效果相同。

:::caution 注意
切勿在未加固访问安全的情况下将前端界面公开暴露到公网。
:::

### 身份验证

通过 [`auth_token` 选项](../configuration/frontend.md#高级配置)启用基于令牌（token）的身份验证。

对待它要像对待任何密码一样谨慎。
将其存储在 `secret.yaml` 中（参见[配置文件](#配置文件)），而不要直接写在 `configuration.yaml` 中。

### 加密（HTTPS / WSS）

通过提供[证书和私钥](../configuration/frontend.md#高级配置)，可以直接在 Zigbee2MQTT 内部启用 HTTPS/WSS。

也可以选择在前端界面之前放置一个反向代理（Nginx、Apache 等）来终止 TLS。
代理配置示例请参见 [前端配置](../configuration/frontend.md)。

### 绑定地址

默认情况下，前端界面会监听所有网络接口（`0.0.0.0`）。
如果不需要远程访问，可将其限制为仅本地访问：

```yaml
frontend:
    host: 127.0.0.1
```

或者，也可以使用 Unix socket 以完全避免网络暴露：

```yaml
frontend:
    host: '/run/zigbee2mqtt/zigbee2mqtt.sock'
```

:::warning 警告
请留意某些系统（Docker、Home Assistant 等）在这方面的特殊要求。
:::

## Zigbee 网络

### 网络加密密钥

Zigbee 通信使用 128 位网络密钥进行加密。

:::caution 注意
更改此密钥需要重新配对（re-pairing）所有设备。
:::

:::caution 注意
如果你当前运行的网络仍在使用旧的默认密钥 `[1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]`，强烈建议你更换它。
:::

要在下次启动时生成新的随机密钥，可使用[引导设置（onboarding）](../getting-started/README.md#引导设置)，或手动更新：

```yaml
advanced:
    network_key: GENERATE
```

Zigbee2MQTT 会在启动时用一个随机生成的密钥替换 `GENERATE`。
当然，你也可以手动设置一个特定的密钥。

更多详情请参见 [Zigbee 网络配置](../configuration/zigbee-network.md)。

### PAN ID 与 Extended PAN ID

PAN ID 和 Extended PAN ID 用于标识你的网络，它们并非安全措施。

更改它们是可行的，但需要重新配对所有设备。
这么做通常是为了避免与附近的其他网络发生冲突。

### IEEE 地址与网络地址

IEEE 地址和网络地址用于标识你的设备，它们并非安全措施。

IEEE 地址是静态分配给设备中 Zigbee 芯片的（不过在某些情况下也可以更改）。
两台 IEEE 地址相同的设备无法加入同一个网络。

网络地址是在设备加入时随机分配的，通常在重置/重新加入之前保持不变（不过设备也可能自行决定更改它）。

### 允许加入（permit join）

“允许加入”状态决定了是否允许新设备加入网络。
可以通过前端界面上的专用按钮或通过 MQTT 临时启用加入（默认持续 254 秒）。配对完成后，你也可以手动关闭加入窗口。

:::tip 提示
刚加入的设备可能会自动为自身开启允许加入状态一段特定时长（最长 254 秒）。
:::

#### 安装码（install code）

使用安装码加入网络能提供更好的安全性（如果设备支持的话）。
安装码是在设备制造过程中随机分配的。
它允许将来自信任中心（Trust Center，即协调器 coordinator）的初始网络密钥传输过程加密后再发送给新加入的设备。

请咨询厂商或参阅各设备的文档，确认是否提供安装码（通常以明文或二维码形式印在设备上）。
可以通过前端界面添加安装码。
另请参见[通过 MQTT 添加安装码](../../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestinstall_codeadd)。

### 设备通过列表与阻止列表

如需更严格地控制哪些设备可以加入网络，可使用通过列表（passlist）或阻止列表（blocklist）。
更多详情请参见[设备阻止列表 / 通过列表](../configuration/block-pass-list.md)。

:::tip 提示
不被允许的设备会在启动时（例如自上次运行以来配置发生了变化）以及在尝试加入时被从网络中移除。
注意：移除操作是向目标设备发送的一个请求，"要求"它离开网络，恶意设备可能故意忽略该请求。
:::

:::tip 提示
使用通过列表是限制最严格、因而也是最安全的选项，只有被明确信任的设备才能加入。
:::

### Inter-PAN

Inter-PAN 消息是发送给或接收自 1 跳范围内、尚未加入网络的设备的**不安全消息**。
Touchlink（此前称为 ZLL）就使用了 Inter-PAN 消息传递机制。

Inter-PAN 通常只保留用于高度特定的操作（例如通过 Touchlink 将设备恢复出厂设置），不需要的消息会被主动丢弃，并且需要设备之间物理距离十分接近。
这限制了其缺乏安全性所带来的影响。

:::warning 警告
应避免使用那些始终保持 Touchlink 常开的设备，尤其是在相对容易接触到设备的场所；否则恶意用户可能借此扰乱网络。
:::

### Zigbee 4.0

Zigbee 4.0 提供了多项安全性增强。
你可以在 CSA 的官方公告中了解更多信息：[https://csa-iot.org/newsroom/the-connectivity-standards-alliance-announces-zigbee-4-0-and-suzi-empowering-the-next-generation-of-secure-interoperable-iot-devices/](https://csa-iot.org/newsroom/the-connectivity-standards-alliance-announces-zigbee-4-0-and-suzi-empowering-the-next-generation-of-secure-interoperable-iot-devices/)

注意：设备要跟上这一新标准并支持所有这些增强功能，还需要一段时间。

## 外部扩展与转换器

从设计上讲，外部扩展和转换器会在 Zigbee2MQTT 进程内执行用户提供的任意 JavaScript 代码。
这带来了极大的自定义灵活性，但也意味着恶意或存在缺陷的代码可能危及整个 Zigbee2MQTT 实例，甚至波及主机系统。

:::caution 注意
只添加来自可信、经过审查的来源的外部扩展和转换器。
应以对待系统上运行的其他任何代码/脚本同等的审慎程度来对待它们。
:::

## 固件更新（OTA）

固件更新可以带来漏洞修复、安全更新以及其他令人欢迎的新功能。
但同时，它们也可能以某些方式改变设备行为，从而影响与 Zigbee2MQTT 的兼容性，甚至可能引入有缺陷乃至恶意的功能。
在应用固件更新之前，请先查看其发行说明。
更多详情请参见 [OTA 更新](../usage/ota_updates.md)。

默认情况下，Zigbee2MQTT 会从 [Koenkk/zigbee-OTA](https://github.com/Koenkk/zigbee-OTA) 仓库匹配并获取 OTA 镜像文件。
该仓库是厂商提供的固件更新的一个镜像，其内容既有人工整理，也有自动整理。

:::caution 注意
只使用来自可信来源的固件。
除非你完全信任来源，否则应避免使用自定义的 OTA 索引 URL。
:::
