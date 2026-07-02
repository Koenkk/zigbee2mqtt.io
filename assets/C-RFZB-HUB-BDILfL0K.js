import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/C-RFZB-HUB.md
var _pageData = JSON.parse("{\"path\":\"/devices/C-RFZB-HUB.html\",\"title\":\"Candeo C-RFZB-HUB control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Candeo C-RFZB-HUB control via MQTT\",\"description\":\"Integrate your Candeo C-RFZB-HUB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-04-30T19:57:27.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"c6635419f9d2bcbfb7d60bdc6f1dd80d5d988029\",\"time\":1777579890000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"}]},\"filePathRelative\":\"devices/C-RFZB-HUB.md\"}");
var _sfc_main = { name: "C-RFZB-HUB.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "candeo-c-rfzb-hub",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#candeo-c-rfzb-hub"
		}, [createBaseVNode("span", null, "Candeo C-RFZB-HUB")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "C-RFZB-HUB")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Candeo" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Candeo", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Kinetic RF to Zigbee gateway")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/C-RFZB-HUB.png",
				alt: "Candeo C-RFZB-HUB"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><p><code>actions</code>: Which press actions do you wish to detect (default: single)?. The value must be one of <code>single</code>, <code>single &amp; double</code>, <code>single, double &amp; triple</code>, <code>single, double, triple &amp; quadruple</code>, <code>single, double, triple, quadruple &amp; quintuple</code></p></li><li><p><code>timeout</code>: Time in ms to delay sending of action since last event to allow for multi-press event detection (ignored if only single event is being detected). The value must be a number with a minimum value of <code>500</code> and with a maximum value of <code>1500</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>button_1_single_pressed</code>, <code>button_1_double_pressed</code>, <code>button_1_triple_pressed</code>, <code>button_1_quadruple_pressed</code>, <code>button_1_quintuple_pressed</code>, <code>button_2_single_pressed</code>, <code>button_2_double_pressed</code>, <code>button_2_triple_pressed</code>, <code>button_2_quadruple_pressed</code>, <code>button_2_quintuple_pressed</code>, <code>button_3_single_pressed</code>, <code>button_3_double_pressed</code>, <code>button_3_triple_pressed</code>, <code>button_3_quadruple_pressed</code>, <code>button_3_quintuple_pressed</code>, <code>button_4_single_pressed</code>, <code>button_4_double_pressed</code>, <code>button_4_triple_pressed</code>, <code>button_4_quadruple_pressed</code>, <code>button_4_quintuple_pressed</code>, <code>button_5_single_pressed</code>, <code>button_5_double_pressed</code>, <code>button_5_triple_pressed</code>, <code>button_5_quadruple_pressed</code>, <code>button_5_quintuple_pressed</code>, <code>button_6_single_pressed</code>, <code>button_6_double_pressed</code>, <code>button_6_triple_pressed</code>, <code>button_6_quadruple_pressed</code>, <code>button_6_quintuple_pressed</code>, <code>button_7_single_pressed</code>, <code>button_7_double_pressed</code>, <code>button_7_triple_pressed</code>, <code>button_7_quadruple_pressed</code>, <code>button_7_quintuple_pressed</code>, <code>button_8_single_pressed</code>, <code>button_8_double_pressed</code>, <code>button_8_triple_pressed</code>, <code>button_8_quadruple_pressed</code>, <code>button_8_quintuple_pressed</code>, <code>button_9_single_pressed</code>, <code>button_9_double_pressed</code>, <code>button_9_triple_pressed</code>, <code>button_9_quadruple_pressed</code>, <code>button_9_quintuple_pressed</code>, <code>button_10_single_pressed</code>, <code>button_10_double_pressed</code>, <code>button_10_triple_pressed</code>, <code>button_10_quadruple_pressed</code>, <code>button_10_quintuple_pressed</code>.</p>", 4))
	]);
}
var C_RFZB_HUB_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, C_RFZB_HUB_default as default };
