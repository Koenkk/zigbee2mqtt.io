import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/guide/usage/integrations.md
var _pageData = JSON.parse("{\"path\":\"/guide/usage/integrations.html\",\"title\":\"Integrations\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\"},\"filePathRelative\":\"guide/usage/integrations.md\"}");
var _sfc_main = { name: "integrations.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[4] || (_cache[4] = createBaseVNode("h1", {
			id: "integrations",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#integrations"
		}, [createBaseVNode("span", null, "Integrations")])], -1)),
		createBaseVNode("ul", null, [
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/usage/integrations/home_assistant.html" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Home Assistant", -1)])]),
				_: 1
			})]),
			_cache[2] || (_cache[2] = createStaticVNode("<li><a href=\"https://community.homey.app/t/83214\" target=\"_blank\" rel=\"noopener noreferrer\">Homey</a></li><li><a href=\"https://flows.nodered.org/node/node-red-contrib-zigbee2mqtt\" target=\"_blank\" rel=\"noopener noreferrer\">node-red-contrib-zigbee2mqtt</a></li><li><a href=\"https://github.com/stas-demydiuk/domoticz-zigbee2mqtt-plugin\" target=\"_blank\" rel=\"noopener noreferrer\">Domoticz</a></li><li><a href=\"https://github.com/directman66/majordomo-zigbee2mqtt/\" target=\"_blank\" rel=\"noopener noreferrer\">Majordomo</a> (Russian)</li><li><a href=\"https://github.com/kabbi/zigbee2mqtt-adapter\" target=\"_blank\" rel=\"noopener noreferrer\">Mozilla IoT WebThings Gateway via Zigbee2MQTT adapter</a></li>", 5)),
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/usage/integrations/openhab.html" }, {
				default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("openHAB", -1)])]),
				_: 1
			})]),
			_cache[3] || (_cache[3] = createStaticVNode("<li><a href=\"https://github.com/itavero/homebridge-z2m/#readme\" target=\"_blank\" rel=\"noopener noreferrer\">Homebridge plugin</a> (Apple HomeKit)</li><li><a href=\"https://github.com/Schnittcher/IPS-Zigbee2MQTT\" target=\"_blank\" rel=\"noopener noreferrer\">Symcon Automation Solutions</a></li><li><a href=\"https://gladysassistant.com/docs/integrations/zigbee2mqtt/\" target=\"_blank\" rel=\"noopener noreferrer\">Gladys Assistant</a></li><li><a href=\"https://shop.homeseer.com/products/homeseer-zigbee-plus-plugin-for-hs4\" target=\"_blank\" rel=\"noopener noreferrer\">HomeSeer</a></li><li><a href=\"https://github.com/Luligu/matterbridge-zigbee2mqtt\" target=\"_blank\" rel=\"noopener noreferrer\">Matterbridge Zigbee2MQTT Plugin</a> (Apple HomeKit and Google Home)</li><li><a href=\"https://github.com/Luligu/zigbee2mqtt-automations\" target=\"_blank\" rel=\"noopener noreferrer\">Zigbee2MQTT Automations</a></li>", 6))
		]),
		_cache[5] || (_cache[5] = createBaseVNode("p", null, [
			createTextVNode("This list gives only a narrow overview. To use Zigbee2MQTT with other systems it's not mandatory to have a "),
			createBaseVNode("em", null, "native"),
			createTextVNode(" integration but support for MQTT. A native integration just makes things more easy and \"clickable\". You could implement custom logic - like switch Light-X ON after sunrise when motion detector triggers - by subscribing and publishing to the relevant MQTT-Topics.")
		], -1)),
		_cache[6] || (_cache[6] = createBaseVNode("p", null, [
			createTextVNode("There are many tools to implement logic based on MQTT like NodeRED (flow based) or "),
			createBaseVNode("a", {
				href: "https://github.com/hobbyquaker/mqtt-scripts",
				target: "_blank",
				rel: "noopener noreferrer"
			}, "MQTT-Scripts"),
			createTextVNode(" (javascript). Almost every programming-language has some libs to communicate with MQTT, so you can write your own logic with your preferred language or tool.")
		], -1)),
		_cache[7] || (_cache[7] = createBaseVNode("p", null, [
			createTextVNode("A low-level MQTT client like "),
			createBaseVNode("a", {
				href: "http://mqtt-explorer.com/",
				target: "_blank",
				rel: "noopener noreferrer"
			}, "MQTT-Explorer"),
			createTextVNode(" can help to understand the topic structure and publish values to test the behaviour.")
		], -1))
	]);
}
var integrations_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, integrations_default as default };
