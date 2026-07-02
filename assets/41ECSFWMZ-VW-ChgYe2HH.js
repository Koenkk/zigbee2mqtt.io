import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/41ECSFWMZ-VW.md
var _pageData = JSON.parse("{\"path\":\"/devices/41ECSFWMZ-VW.html\",\"title\":\"Schneider Electric 41ECSFWMZ-VW control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Schneider Electric 41ECSFWMZ-VW control via MQTT\",\"description\":\"Integrate your Schneider Electric 41ECSFWMZ-VW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-01-31T20:08:01.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"koenkk\",\"username\":\"koenkk\",\"email\":\"koenkanters94@gmail.com\",\"commits\":3,\"url\":\"https://github.com/koenkk\"},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"707d7e54d6545ef4745398da456aeb2977174d54\",\"time\":1738441259000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc 21.27.1\"},{\"hash\":\"6083f721b4d93a082e330851062b5bf4059a1654\",\"time\":1711912488000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 19.11.1\"},{\"hash\":\"101d3a64bdadb8f0cb17f8517a757f52fc8dc801\",\"time\":1709238939000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"koenkk\",\"message\":\"Update zhc to 18.41.0\"},{\"hash\":\"e41c3889eb10d18e610e33d6a064e0ff0a08b3c9\",\"time\":1707249617000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"koenkk\",\"message\":\"Update zhc to 18.28.3\"},{\"hash\":\"2e0685417dd54bd9fb80e1635990b0e0d94c7310\",\"time\":1706731725000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"koenkk\",\"message\":\"Update zhc to 18.25.1\"}]},\"filePathRelative\":\"devices/41ECSFWMZ-VW.md\"}");
var _sfc_main = { name: "41ECSFWMZ-VW.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[10] || (_cache[10] = createBaseVNode("h1", {
			id: "schneider-electric-41ecsfwmz-vw",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#schneider-electric-41ecsfwmz-vw"
		}, [createBaseVNode("span", null, "Schneider Electric 41ECSFWMZ-VW")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "41ECSFWMZ-VW")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Schneider%20Electric" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Schneider Electric", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Wiser 40/300-Series Module AC Fan Controller")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "fan (state, mode), indicator_mode, indicator_orientation")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/41ECSFWMZ-VW.png",
				alt: "Schneider Electric 41ECSFWMZ-VW"
			})])], -1))
		])]),
		_cache[11] || (_cache[11] = createBaseVNode("h2", {
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
		_cache[12] || (_cache[12] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"fan\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#fan\"><span>Fan</span></a></h3><p>The current state of this fan is in the published state under the <code>fan_state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_state&quot;: &quot;ON&quot;}</code> or <code>{&quot;fan_state&quot;: &quot;OFF&quot;}</code>. To read the current state of this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;fan_state&quot;: &quot;&quot;}</code>. To change the mode publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_mode&quot;: VALUE}</code> where <code>VALUE</code> can be: <code>off</code>, <code>low</code>, <code>medium</code>, <code>high</code>, <code>on</code>.</p><h3 id=\"indicator-mode-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#indicator-mode-enum\"><span>Indicator mode (enum)</span></a></h3><p>Set Indicator Mode.. Value can be found in the published state on the <code>indicator_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>always_on</code>, <code>on_with_timeout_but_as_locator</code>, <code>on_with_timeout</code>.</p><h3 id=\"indicator-orientation-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#indicator-orientation-enum\"><span>Indicator orientation (enum)</span></a></h3><p>Set Indicator Orientation.. Value can be found in the published state on the <code>indicator_orientation</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_orientation&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_orientation&quot;: NEW_VALUE}</code>. The possible values are: <code>horizontal_left</code>, <code>horizontal_right</code>, <code>vertical_top</code>, <code>vertical_bottom</code>.</p>", 7))
	]);
}
var _41ECSFWMZ_VW_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, _41ECSFWMZ_VW_default as default };
