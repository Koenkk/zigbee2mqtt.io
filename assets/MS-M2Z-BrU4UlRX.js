import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/MS-M2Z.md
var _pageData = JSON.parse("{\"path\":\"/devices/MS-M2Z.html\",\"title\":\"MoveSmart MS-M2Z control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"title\":\"MoveSmart MS-M2Z control via MQTT\",\"description\":\"Integrate your MoveSmart MS-M2Z via Zigbee2MQTT with your smart home system without requiring the vendor's bridge or gateway.\"},\"filePathRelative\":\"devices/MS-M2Z.md\"}");
var _sfc_main = { name: "MS-M2Z.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "movesmart-ms-m2z",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#movesmart-ms-m2z"
		}, [createBaseVNode("span", null, "MoveSmart MS-M2Z")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "MS-M2Z")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=MoveSmart" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("MoveSmart", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "1 Gang Switch with Power Monitoring")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "switch (state), power, current, voltage, energy, switch_type, power_outage_memory")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "/images/devices/MS-M2Z.png",
				alt: "MoveSmart MS-M2Z"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><p>MoveSmart MS-M2Z is a Zigbee 1 gang switch module with power monitoring.</p><p>Features:</p><ul><li>Remote ON/OFF control.</li><li>Real-time power monitoring.</li><li>Current measurement.</li><li>Voltage measurement.</li><li>Energy consumption monitoring.</li><li>Switch type configuration.</li><li>Power outage memory configuration.</li></ul>", 4))
	]);
}
var MS_M2Z_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, MS_M2Z_default as default };
