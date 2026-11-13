import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/SHCB-1-MO.md
var _pageData = JSON.parse("{\"path\":\"/devices/SHCB-1-MO.html\",\"title\":\"Linxura SHCB-1-MO control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Linxura SHCB-1-MO control via MQTT\",\"description\":\"Integrate your Linxura SHCB-1-MO via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-08-30T18:06:52.000Z\"},\"filePathRelative\":\"devices/SHCB-1-MO.md\"}");
var _sfc_main = { name: "SHCB-1-MO.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "linxura-shcb-1-mo",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#linxura-shcb-1-mo"
		}, [createBaseVNode("span", null, "Linxura SHCB-1-MO")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "SHCB-1-MO")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Linxura" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Linxura", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Aura 12-button smart controller")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/SHCB-1-MO.png",
				alt: "Linxura SHCB-1-MO"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>button_1_click</code>, <code>button_1_double_click</code>, <code>button_1_hold</code>, <code>button_2_click</code>, <code>button_2_double_click</code>, <code>button_2_hold</code>, <code>button_3_click</code>, <code>button_3_double_click</code>, <code>button_3_hold</code>, <code>button_4_click</code>, <code>button_4_double_click</code>, <code>button_4_hold</code>, <code>button_5_click</code>, <code>button_5_double_click</code>, <code>button_5_hold</code>, <code>button_6_click</code>, <code>button_6_double_click</code>, <code>button_6_hold</code>, <code>button_7_click</code>, <code>button_7_double_click</code>, <code>button_7_hold</code>, <code>button_8_click</code>, <code>button_8_double_click</code>, <code>button_8_hold</code>, <code>button_9_click</code>, <code>button_9_double_click</code>, <code>button_9_hold</code>, <code>button_10_click</code>, <code>button_10_double_click</code>, <code>button_10_hold</code>, <code>button_11_click</code>, <code>button_11_double_click</code>, <code>button_11_hold</code>, <code>button_12_click</code>, <code>button_12_double_click</code>, <code>button_12_hold</code>.</p>", 5))
	]);
}
var SHCB_1_MO_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, SHCB_1_MO_default as default };
