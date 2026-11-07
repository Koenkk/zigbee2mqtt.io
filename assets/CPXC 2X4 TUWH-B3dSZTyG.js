import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/CPXC 2X4 TUWH.md
var _pageData = JSON.parse("{\"path\":\"/devices/CPXC%202X4%20TUWH.html\",\"title\":\"Acuity Brands Lighting (ABL) CPXC 2X4 TUWH control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Acuity Brands Lighting (ABL) CPXC 2X4 TUWH control via MQTT\",\"description\":\"Integrate your Acuity Brands Lighting (ABL) CPXC 2X4 TUWH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-11-01T23:30:00.000Z\"},\"filePathRelative\":\"devices/CPXC 2X4 TUWH.md\"}");
var _sfc_main = { name: "CPXC 2X4 TUWH.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "acuity-brands-lighting-abl-cpxc-2x4-tuwh",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#acuity-brands-lighting-abl-cpxc-2x4-tuwh"
		}, [createBaseVNode("span", null, "Acuity Brands Lighting (ABL) CPXC 2X4 TUWH")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "CPXC 2X4 TUWH")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Acuity%20Brands%20Lighting%20(ABL)" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Acuity Brands Lighting (ABL)", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Lithonia CPX Connect 2x4 smart tunable white LED troffer with integrated motion sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "light (state, brightness, color_temp), power_on_behavior, occupancy, occupancy_timeout, pir_uto_delay, pir_uto_threshold")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/CPXC-2X4-TUWH.png",
				alt: "Acuity Brands Lighting (ABL) CPXC 2X4 TUWH"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"advertised-but-non-functional-features\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#advertised-but-non-functional-features\"><span>Advertised but non-functional features</span></a></h3><p>The firmware (v1.0, dateCode 20190402) advertises several capabilities it does not implement, so they are not exposed:</p><ul><li>xy color: <code>colorCapabilities</code> claims xy support, but color commands produce no light output at all — the panel is tunable-white-only (2700–5000 K).</li><li>Effects and identify: the genIdentify <code>identify</code> and <code>triggerEffect</code> commands do nothing.</li><li>Attribute reporting: every <code>configureReporting</code> request is rejected with <code>INVALID_VALUE</code>, so no reporting is configured. The device still sends unsolicited occupancy reports, and state changes commanded through Zigbee2MQTT are reflected normally.</li></ul><h3 id=\"integrated-motion-sensor\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#integrated-motion-sensor\"><span>Integrated motion sensor</span></a></h3><p>The hidden PIR sensor reports <code>occupancy</code> and can be tuned with <code>pir_uto_delay</code> (seconds without motion before occupancy clears), <code>pir_uto_threshold</code> (how much motion within the delay window is needed to keep it occupied) and <code>occupancy_timeout</code>. The fixture&#39;s standalone turn-on-with-motion behaviour stays dormant while it is joined to a Zigbee network, so motion automation is fully under your controller&#39;s control. Note the sensor has a wide field of view and can see through an open doorway.</p>", 6))
	]);
}
var CPXC_2X4_TUWH_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, CPXC_2X4_TUWH_default as default };
