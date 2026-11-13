import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/ZBCO-AE-10X-EUR.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZBCO-AE-10X-EUR.html\",\"title\":\"FireAngel ZBCO-AE-10X-EUR control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"FireAngel ZBCO-AE-10X-EUR control via MQTT\",\"description\":\"Integrate your FireAngel ZBCO-AE-10X-EUR via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-10-31T19:12:27.000Z\"},\"filePathRelative\":\"devices/ZBCO-AE-10X-EUR.md\"}");
var _sfc_main = { name: "ZBCO-AE-10X-EUR.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "fireangel-zbco-ae-10x-eur",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#fireangel-zbco-ae-10x-eur"
		}, [createBaseVNode("span", null, "FireAngel ZBCO-AE-10X-EUR")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZBCO-AE-10X-EUR")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=FireAngel" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("FireAngel", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "CO alarm")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "alarm, test, carbon_monoxide, tamper, battery_low")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZBCO-AE-10X-EUR.png",
				alt: "FireAngel ZBCO-AE-10X-EUR"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"alarm-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#alarm-binary\"><span>Alarm (binary)</span></a></h3><p>CO alarm active. Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> alarm is ON, if <code>false</code> OFF.</p><h3 id=\"test-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#test-binary\"><span>Test (binary)</span></a></h3><p>Self-test in progress. Value can be found in the published state on the <code>test</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> test is ON, if <code>false</code> OFF.</p><h3 id=\"carbon-monoxide-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#carbon-monoxide-binary\"><span>Carbon monoxide (binary)</span></a></h3><p>Indicates if CO (carbon monoxide) is detected. Value can be found in the published state on the <code>carbon_monoxide</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> carbon monoxide is ON, if <code>false</code> OFF.</p><h3 id=\"tamper-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#tamper-binary\"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id=\"battery-low-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-low-binary\"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p>", 11))
	]);
}
var ZBCO_AE_10X_EUR_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ZBCO_AE_10X_EUR_default as default };
