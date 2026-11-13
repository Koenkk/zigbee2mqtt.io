import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/JTQJ-BF-01LM_BW.md
var _pageData = JSON.parse("{\"path\":\"/devices/JTQJ-BF-01LM_BW.html\",\"title\":\"Xiaomi JTQJ-BF-01LM/BW control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Xiaomi JTQJ-BF-01LM/BW control via MQTT\",\"description\":\"Integrate your Xiaomi JTQJ-BF-01LM/BW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2019-07-22T20:08:17.000Z\"},\"filePathRelative\":\"devices/JTQJ-BF-01LM_BW.md\"}");
var _sfc_main = { name: "JTQJ-BF-01LM_BW.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "xiaomi-jtqj-bf-01lm-bw",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#xiaomi-jtqj-bf-01lm-bw"
		}, [createBaseVNode("span", null, "Xiaomi JTQJ-BF-01LM/BW")])], -1)),
		createBaseVNode("table", null, [_cache[7] || (_cache[7] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "JTQJ-BF-01LM/BW")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Xiaomi" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Xiaomi", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Mijia Honeywell gas leak detector")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "gas, tamper, sensitivity, gas_density, selftest")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/JTQJ-BF-01LM-BW.png",
				alt: "Xiaomi JTQJ-BF-01LM/BW"
			})])], -1)),
			_cache[6] || (_cache[6] = createBaseVNode("tr", null, [createBaseVNode("td", null, "White-label"), createBaseVNode("td", null, "Xiaomi YTC4019RT")], -1))
		])]),
		_cache[9] || (_cache[9] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Plug the device in and wait for around 5mins, while it performs its self-tests. A successful self-test is indicated by couple of beeps and a steady green led. Now the device is ready for pairing. To initiate pairing quickly press the button three times in a row.</p><h3 id=\"sensitivity\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#sensitivity\"><span>Sensitivity</span></a></h3><p>The sensitivity can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code><code>{&quot;sensitivity&quot;: &quot;SENSITIVITY&quot;}</code> where <code>SENSITIVITY</code> is one of the following values: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id=\"self-test\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#self-test\"><span>Self-test</span></a></h3><p>A self-test can be trigged by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code><code>{&quot;selftest&quot;: &quot;&quot;}</code>. If the selftest is executed successfully you will hear the device beep in 30 seconds.</p><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"gas-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#gas-binary\"><span>Gas (binary)</span></a></h3><p>Indicates whether the device detected gas. Value can be found in the published state on the <code>gas</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> gas is ON, if <code>false</code> OFF.</p><h3 id=\"tamper-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#tamper-binary\"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id=\"sensitivity-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#sensitivity-enum\"><span>Sensitivity (enum)</span></a></h3><p>Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id=\"gas-density-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#gas-density-numeric\"><span>Gas density (numeric)</span></a></h3><p>Value can be found in the published state on the <code>gas_density</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id=\"selftest-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#selftest-enum\"><span>Selftest (enum)</span></a></h3><p>Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;selftest&quot;: &quot;VALUE&quot;}</code>. The possible values are: ``.</p>", 18))
	]);
}
var JTQJ_BF_01LM_BW_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, JTQJ_BF_01LM_BW_default as default };
