import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/9133.md
var _pageData = JSON.parse("{\"path\":\"/devices/9133.html\",\"title\":\"LED-Trading 9133 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"LED-Trading 9133 control via MQTT\",\"description\":\"Integrate your LED-Trading 9133 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2022-04-30T08:00:58.000Z\"},\"filePathRelative\":\"devices/9133.md\"}");
var _sfc_main = { name: "9133.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "led-trading-9133",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#led-trading-9133"
		}, [createBaseVNode("span", null, "LED-Trading 9133")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "9133")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=LED-Trading" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("LED-Trading", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Pushbutton transmitter module")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/9133.png",
				alt: "LED-Trading 9133"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><p>This device is integrated as <a href=\"https://www.zigbee2mqtt.io/devices/PTM_215Z.html\" target=\"_blank\" rel=\"noopener noreferrer\">EnOcean PTM 215Z</a> but with different button mapping as discussed <a href=\"https://github.com/Koenkk/zigbee2mqtt/issues/19078#issuecomment-1854194570\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.</p><table><thead><tr><th>Button</th><th>Position</th><th>Channel</th></tr></thead><tbody><tr><td>K1 (B0)</td><td>Top right</td><td>11</td></tr><tr><td>K2 (B1)</td><td>Bottom right</td><td>25</td></tr><tr><td>K3 (A0)</td><td>Top left</td><td>15</td></tr><tr><td>K4 (A1)</td><td>Bottom left</td><td>20</td></tr></tbody></table><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>press_1</code>, <code>hold_1</code>, <code>press_2</code>, <code>hold_2</code>, <code>press_3</code>, <code>hold_3</code>, <code>press_4</code>, <code>hold_4</code>.</p>", 6))
	]);
}
var _9133_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, _9133_default as default };
