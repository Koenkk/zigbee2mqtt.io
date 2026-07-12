---
redirectFrom: /getting_started/pairing_devices.md
---

# 允许设备加入网络

要允许设备加入网络，必须先开启加入许可。有多种方式可以实现：

### 前端界面

通过前端界面启用加入许可，网络将开放 254 秒。
加入按钮位于导航栏右上角，也可以用它在计时结束前手动关闭网络。

#### 通过指定设备配对

在 `Permit join (All)` 按钮右侧有一个向下的箭头，可以让你选择协调器（coordinator），或指定某个路由器（router）作为加入对象，而不是让设备自行选择。
这并不能保证一定会选中该路由器（或长期保持不变）。不过，对于那些在路由器选择上比较"挑剔"的设备（例如 Aqara），或者想要将开关与灯泡关联时，这个功能会很有用。

### MQTT

可以使用 `zigbee2mqtt/bridge/request/permit_join` 这个 MQTT topic 来启用加入许可。更多信息请参阅 [MQTT topic 与消息](./mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request-permit-join)。

## 配对（pairing）

首先请查看设备页面（[已支持的设备](/supported-devices/)，点击型号编号）中是否包含配对说明。

如果没有相关说明，通常可以通过将设备恢复出厂设置来完成配对。

当日志中出现类似下面的内容时，说明设备已配对成功。

```
Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired
```

如果配对过程中出现问题，请查看 [常见问题](../../guide/faq/#why-does-my-device-not-or-fail-to-pair) 以获取可能的解决方法。
