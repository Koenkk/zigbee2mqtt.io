import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/ZXMIR-02.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZXMIR-02.html\",\"title\":\"Zemismart ZXMIR-02 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Zemismart ZXMIR-02 control via MQTT\",\"description\":\"Integrate your Zemismart ZXMIR-02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-10-31T19:12:27.000Z\"},\"filePathRelative\":\"devices/ZXMIR-02.md\"}");
var _sfc_main = { name: "ZXMIR-02.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "zemismart-zxmir-02",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#zemismart-zxmir-02"
		}, [createBaseVNode("span", null, "Zemismart ZXMIR-02")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZXMIR-02")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Zemismart" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Zemismart", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Universal smart IR remote control")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "learn_ir_code, learned_ir_code, learned_ir_timings, ir_code_to_send, ir_emitter")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZXMIR-02.png",
				alt: "Zemismart ZXMIR-02"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"learn-ir-code-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#learn-ir-code-binary\"><span>Learn ir code (binary)</span></a></h3><p>Turn on to learn a new IR code, turn off to stop learning. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;learn_ir_code&quot;: &quot;VALUE&quot;}</code>. If value equals <code>ON</code> learn ir code is ON, if <code>OFF</code> OFF.</p><h3 id=\"learned-ir-code-text\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#learned-ir-code-text\"><span>Learned ir code (text)</span></a></h3><p>The IR code learned by device. Value can be found in the published state on the <code>learned_ir_code</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id=\"learned-ir-timings-text\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#learned-ir-timings-text\"><span>Learned ir timings (text)</span></a></h3><p>The IR timings learned by device. Value can be found in the published state on the <code>learned_ir_timings</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id=\"ir-code-to-send-text\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ir-code-to-send-text\"><span>Ir code to send (text)</span></a></h3><p>The IR code or timings to send by device. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ir_code_to_send&quot;: &quot;VALUE&quot;}</code>.</p><h3 id=\"ir-emitter-text\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ir-emitter-text\"><span>Ir emitter (text)</span></a></h3><p>The IR code or timings to send by device. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ir_emitter&quot;: &quot;VALUE&quot;}</code>.</p>", 11))
	]);
}
var ZXMIR_02_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ZXMIR_02_default as default };
