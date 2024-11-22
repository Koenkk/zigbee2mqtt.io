# Integrations

-   [Home Assistant](./integrations/home_assistant.md)
-   [Homey](https://community.homey.app/t/83214)
-   [node-red-contrib-zigbee2mqtt](https://flows.nodered.org/node/node-red-contrib-zigbee2mqtt)
-   [Domoticz](https://github.com/stas-demydiuk/domoticz-zigbee2mqtt-plugin)
-   [Majordomo](https://github.com/directman66/majordomo-zigbee2mqtt/) (Russian)
-   [Mozilla IoT WebThings Gateway via Zigbee2MQTT adapter](https://github.com/kabbi/zigbee2mqtt-adapter)
-   [openHAB](./integrations/openhab.md)
-   [Homebridge plugin](https://github.com/itavero/homebridge-z2m/#readme) (Apple HomeKit)
-   [Symcon Automation Solutions](https://github.com/Schnittcher/IPS-Zigbee2MQTT)
-   [Gladys Assistant](https://gladysassistant.com/docs/integrations/zigbee2mqtt/)
-   [HomeSeer](https://shop.homeseer.com/products/homeseer-zigbee-plus-plugin-for-hs4)

This list gives only a narrow overview. To use Zigbee2MQTT with other systems it's not
mandatory to have a _native_ integration but support for MQTT. A native integration just makes things more easy and "clickable".
You could implement custom logic - like switch Light-X ON after sunrise when motion detector triggers - by
subscribing and publishing to the relevant MQTT-Topics.

There are many tools to implement logic based on MQTT like NodeRED (flow based) or
[MQTT-Scripts](https://github.com/hobbyquaker/mqtt-scripts) (javascript). Almost every programming-language
has some libs to communicate with MQTT, so you can write your own logic with your preferred language or tool.

A low-level MQTT client like [MQTT-Explorer](http://mqtt-explorer.com/) can help to understand the topic structure
and publish values to test the behaviour.
