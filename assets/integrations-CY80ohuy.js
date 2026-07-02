import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/guide/usage/integrations.md
var _pageData = JSON.parse("{\"path\":\"/guide/usage/integrations.html\",\"title\":\"Integrations\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\"},\"git\":{\"updatedTime\":1747679680000,\"contributors\":[{\"name\":\"Christoph Wiechert\",\"username\":\"\",\"email\":\"wio@psitrax.de\",\"commits\":2},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":8},{\"name\":\"github-actions[bot]\",\"username\":\"github-actions[bot]\",\"email\":\"41898282+github-actions[bot]@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/github-actions[bot]\"},{\"name\":\"Robin Kolk\",\"username\":\"\",\"email\":\"robinkolk@msn.com\",\"commits\":1},{\"name\":\"Burkhard Kneiseler\",\"username\":\"\",\"email\":\"burkhard@kneiseler.de\",\"commits\":2},{\"name\":\"Aleks\",\"username\":\"Aleks\",\"email\":\"nitro88@yandex.ru\",\"commits\":1,\"url\":\"https://github.com/Aleks\"},{\"name\":\"danieledwardgeorgehitchcock\",\"username\":\"danieledwardgeorgehitchcock\",\"email\":\"daniel.edward.george.hitchcock@gmail.com\",\"commits\":1,\"url\":\"https://github.com/danieledwardgeorgehitchcock\"},{\"name\":\"Dirk van Donkelaar\",\"username\":\"\",\"email\":\"dirk@vdde.nl\",\"commits\":1},{\"name\":\"rodriguezst\",\"username\":\"rodriguezst\",\"email\":\"2828844+rodriguezst@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/rodriguezst\"},{\"name\":\"Vincent KULAK\",\"username\":\"\",\"email\":\"vkulak62@gmail.com\",\"commits\":1},{\"name\":\"Carsten Mogge\",\"username\":\"\",\"email\":\"carsten.mogge@gmail.com\",\"commits\":1},{\"name\":\"spudwebb\",\"username\":\"spudwebb\",\"email\":\"spud.webb.4@gmail.com\",\"commits\":1,\"url\":\"https://github.com/spudwebb\"},{\"name\":\"gruijter\",\"username\":\"gruijter\",\"email\":\"gruijter@hotmail.com\",\"commits\":1,\"url\":\"https://github.com/gruijter\"},{\"name\":\"Christian Brandlehner\",\"username\":\"\",\"email\":\"cbrandlehner@users.noreply.github.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"f5d83cc57065856ad61f83f9172a6ebb57ae4d91\",\"time\":1747679680000,\"email\":\"cbrandlehner@users.noreply.github.com\",\"author\":\"Christian Brandlehner\",\"message\":\"Update integrations.md (#3796)\"},{\"hash\":\"9206d99fdedbcad4f91c18b172ecee5ae69560b9\",\"time\":1733245245000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Lint\"},{\"hash\":\"f89e65dec7c1cbf82a5a0e1587e849cc98530e94\",\"time\":1722278811000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Implement prettier (automatic changes)\"},{\"hash\":\"54739aff7fa270e520fda30134df8d14c82c2d20\",\"time\":1689007055000,\"email\":\"gruijter@hotmail.com\",\"author\":\"gruijter\",\"message\":\"Added Homey link to Integrations (#2123)\"},{\"hash\":\"d7684ffcd3450fc3b8f8e9ec3ab2c6fdfd50ffe9\",\"time\":1687975273000,\"email\":\"spud.webb.4@gmail.com\",\"author\":\"spudwebb\",\"message\":\"chore: Add link to HomeSeer integration (#2109)\"},{\"hash\":\"a4d20ffb72ebeed3b0bbe33418aec7d2e1ca7255\",\"time\":1650352422000,\"email\":\"carsten.mogge@gmail.com\",\"author\":\"Carsten Mogge\",\"message\":\"Support for Z2M-setup now integrated in openhabian (#1332)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"47f939d6fe3bcedefa0c9bb647ffa08d29b45221\",\"time\":1643038703000,\"email\":\"vkulak62@gmail.com\",\"author\":\"Vincent KULAK\",\"message\":\"Update integrations.md (#1166)\"},{\"hash\":\"9935518c52bb7950c0ee844b1debce87149bf1eb\",\"time\":1636135850000,\"email\":\"wio@psitrax.de\",\"author\":\"Christoph Wiechert\",\"message\":\"Add some text 😃 (#992)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"d728043480820b03207722bf9f58f570309e337e\",\"time\":1635800594000,\"email\":\"burkhard@kneiseler.de\",\"author\":\"Burkhard Kneiseler\",\"message\":\"Added Integration in Symcon (#971)\"},{\"hash\":\"00c0af2cc2a86ed9d271dc530265e0e9d8dc327a\",\"time\":1635697046000,\"email\":\"wio@psitrax.de\",\"author\":\"Christoph Wiechert\",\"message\":\"Newww Docu 😉 (#967)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"github-actions[bot]\",\"email\":\"41898282+github-actions[bot]@users.noreply.github.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Robin Kolk\",\"email\":\"robinkolk@msn.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koen.kanters@tno.nl\"},{\"name\":\"Burkhard Kneiseler\",\"email\":\"burkhard@kneiseler.de\"},{\"name\":\"Aleks\",\"email\":\"nitro88@yandex.ru\"},{\"name\":\"danieledwardgeorgehitchcock\",\"email\":\"daniel.edward.george.hitchcock@gmail.com\"},{\"name\":\"Dirk van Donkelaar\",\"email\":\"dirk@vdde.nl\"},{\"name\":\"rodriguezst\",\"email\":\"2828844+rodriguezst@users.noreply.github.com\"}]}]},\"filePathRelative\":\"guide/usage/integrations.md\"}");
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
//#endregion
export { _pageData, integrations_default as default };
