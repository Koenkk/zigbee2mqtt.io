import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/LeTV.8KEY.md
var _pageData = JSON.parse("{\"path\":\"/devices/LeTV.8KEY.html\",\"title\":\"LeTV LeTV.8KEY control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"LeTV LeTV.8KEY control via MQTT\",\"description\":\"Integrate your LeTV LeTV.8KEY via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2020-09-30T20:52:56.000Z\"},\"filePathRelative\":\"devices/LeTV.8KEY.md\"}");
var _sfc_main = { name: "LeTV.8KEY.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "letv-letv-8key",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#letv-letv-8key"
		}, [createBaseVNode("span", null, "LeTV LeTV.8KEY")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "LeTV.8KEY")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=LeTV" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("LeTV", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "8key switch")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/LeTV.8KEY.png",
				alt: "LeTV LeTV.8KEY"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>hold_up</code>, <code>single_up</code>, <code>double_up</code>, <code>tripple_up</code>, <code>hold_down</code>, <code>single_down</code>, <code>double_down</code>, <code>tripple_down</code>, <code>hold_left</code>, <code>single_left</code>, <code>double_left</code>, <code>tripple_left</code>, <code>hold_right</code>, <code>single_right</code>, <code>double_right</code>, <code>tripple_right</code>, <code>hold_center</code>, <code>single_center</code>, <code>double_center</code>, <code>tripple_center</code>, <code>hold_back</code>, <code>single_back</code>, <code>double_back</code>, <code>tripple_back</code>, <code>hold_play</code>, <code>single_play</code>, <code>double_play</code>, <code>tripple_play</code>, <code>hold_voice</code>, <code>single_voice</code>, <code>double_voice</code>, <code>tripple_voice</code>.</p>", 3))
	]);
}
var LeTV_8KEY_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, LeTV_8KEY_default as default };
