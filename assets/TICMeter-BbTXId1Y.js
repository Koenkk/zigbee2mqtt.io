import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/TICMeter.md
var _pageData = JSON.parse("{\"path\":\"/devices/TICMeter.html\",\"title\":\"GammaTroniques TICMeter control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"GammaTroniques TICMeter control via MQTT\",\"description\":\"Integrate your GammaTroniques TICMeter via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-05-09T20:14:11.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":5}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"94ddb945fad517abf11cca5a8a8b7b01ab178445\",\"time\":1762114847000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"fix various typos\"},{\"hash\":\"a5f6e7e1ea21a8b16e513abb3cb588e04af2a26f\",\"time\":1756751284000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 25.14.0\"},{\"hash\":\"707d7e54d6545ef4745398da456aeb2977174d54\",\"time\":1738441259000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc 21.27.1\"},{\"hash\":\"07b6d3ee31328413bf2f7f707b65ecf8f82797d5\",\"time\":1715286044000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc 19.37.2\"}]},\"filePathRelative\":\"devices/TICMeter.md\"}");
var _sfc_main = { name: "TICMeter.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "gammatroniques-ticmeter",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#gammatroniques-ticmeter"
		}, [createBaseVNode("span", null, "GammaTroniques TICMeter")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "TICMeter")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=GammaTroniques" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("GammaTroniques", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "TICMeter pour Linky")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/TICMeter.png",
				alt: "GammaTroniques TICMeter"
			})])], -1))
		])]),
		_cache[12] || (_cache[12] = createBaseVNode("h2", {
			id: "ota-updates",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ota-updates"
		}, [createBaseVNode("span", null, "OTA updates")])], -1)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(".", -1))
		]),
		_cache[13] || (_cache[13] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[14] || (_cache[14] = createStaticVNode("<ul><li><p><code>tic_mode</code>: Linky TIC communication mode. Defaults to AUTO mode. To be used in case of problem. The value must be one of <code>HISTORIQUE</code>, <code>STANDARD</code>, <code>AUTO</code></p></li><li><p><code>contract_type</code>: Current electricity contract on Linky. Defaults to AUTO mode. Displays the correct entities. To be used in case of problem. The value must be one of <code>AUTO</code>, <code>BASE</code>, <code>HCHP</code>, <code>EJP</code>, <code>TEMPO</code>, <code>PRODUCTEUR</code></p></li><li><p><code>linky_elec</code>: Linky electrical mode. Defaults to AUTO mode. To be used in case of problem. The value must be one of <code>MONOPHASE</code>, <code>TRIPHASE</code>, <code>AUTO</code></p></li><li><p><code>producer</code>: Producer mode: displays electricity production indexes. Default: OFF. The value must be <code>ON</code> or <code>OFF</code></p></li><li><p><code>advanced</code>: Displays all meter data. For advanced use. Default: OFF. The value must be <code>ON</code> or <code>OFF</code></p></li><li><p><code>translation</code>: Language: Default French. The value must be one of <code>FRANCAIS</code>, <code>ENGLISH</code></p></li><li><p><code>refresh_rate</code>: Refresh rate for static values (those with refresh buttons). Default: 120 s. The value must be a number with a minimum value of <code>60</code> and with a maximum value of <code>3600</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2>", 2))
	]);
}
var TICMeter_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, TICMeter_default as default };
