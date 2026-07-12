# 集成

- [Home Assistant](./integrations/home_assistant.md)
- [Homey](https://community.homey.app/t/83214)
- [node-red-contrib-zigbee2mqtt](https://flows.nodered.org/node/node-red-contrib-zigbee2mqtt)
- [Domoticz](https://github.com/stas-demydiuk/domoticz-zigbee2mqtt-plugin)
- [Majordomo](https://github.com/directman66/majordomo-zigbee2mqtt/)（俄语）
- [通过 Zigbee2MQTT 适配器接入 Mozilla IoT WebThings Gateway](https://github.com/kabbi/zigbee2mqtt-adapter)
- [openHAB](./integrations/openhab.md)
- [Homebridge 插件](https://github.com/itavero/homebridge-z2m/#readme)（Apple HomeKit）
- [Symcon Automation Solutions](https://github.com/Schnittcher/IPS-Zigbee2MQTT)
- [Gladys Assistant](https://gladysassistant.com/docs/integrations/zigbee2mqtt/)
- [HomeSeer](https://shop.homeseer.com/products/homeseer-zigbee-plus-plugin-for-hs4)
- [Matterbridge Zigbee2MQTT 插件](https://github.com/Luligu/matterbridge-zigbee2mqtt)（Apple HomeKit 和 Google Home）
- [Zigbee2MQTT Automations](https://github.com/Luligu/zigbee2mqtt-automations)

以上列表只是一个粗略的概览。要将 Zigbee2MQTT 与其他系统配合使用，并不一定需要
*原生*集成，只要支持 MQTT 即可。原生集成只是让操作更简单、更"可点击"而已。
你也可以自行实现自定义逻辑——例如在日出后检测到运动时打开灯 X——
方法是订阅并发布相关的 MQTT 主题。

有许多工具可以基于 MQTT 实现逻辑，例如 NodeRED（基于流程）或
[MQTT-Scripts](https://github.com/hobbyquaker/mqtt-scripts)（JavaScript）。几乎每一种编程语言
都有一些用于与 MQTT 通信的库，因此你可以用自己喜欢的语言或工具编写自己的逻辑。

像 [MQTT-Explorer](http://mqtt-explorer.com/) 这样的底层 MQTT 客户端可以帮助你理解主题结构，
并发布数值来测试行为。
