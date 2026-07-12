---
next: 14_securing.md
---

# openHABian

## 安装

如果你在树莓派（Raspberry Pi）上使用 openHABian，那么安装非常简单：

1. 使用 `sudo openhabian-config` 启动配置工具。
1. 在 _Select Branch_ 下选择 _main_ 选项。
1. 进入 _optional components_。
1. 如果你还没有 MQTT 服务器，请先选择 Mosquitto 并按照提示进行安装。安装完 Mosquitto 后返回 _optional components_，选择 _Zigbee2MQTT_。
1. 选择你的 Zigbee USB 适配器（adapter），或指定以太网适配器的 ip:port 后，需要输入你的 MQTT 用户名，如有必要还需输入密码。
1. 大约 3 到 4 分钟后，Zigbee2MQTT 应该就启动完成了。你可以测试一下配置页面在 8081 端口是否可用。

## 更新

1. 进入 _optional components_。
2. 选择 _Zigbee2MQTT_。
3. 之后会询问你是否要更新。
4. 大约 3 到 4 分钟后，Zigbee2MQTT 应该就启动完成了。你可以测试一下配置页面在 8081 端口是否可用。
