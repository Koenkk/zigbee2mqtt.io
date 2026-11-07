import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/HS2SA-EF-3.0.md
var _pageData = JSON.parse("{\"path\":\"/devices/HS2SA-EF-3.0.html\",\"title\":\"Heiman HS2SA-EF-3.0 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Heiman HS2SA-EF-3.0 control via MQTT\",\"description\":\"Integrate your Heiman HS2SA-EF-3.0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-09-01T18:20:17.000Z\"},\"filePathRelative\":\"devices/HS2SA-EF-3.0.md\"}");
var _sfc_main = { name: "HS2SA-EF-3.0.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "heiman-hs2sa-ef-3-0",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#heiman-hs2sa-ef-3-0"
		}, [createBaseVNode("span", null, "Heiman HS2SA-EF-3.0")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "HS2SA-EF-3.0")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Heiman" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Heiman", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Smart smoke alarm")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "smoke, battery_low, battery, test")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/HS2SA-EF-3.0.png",
				alt: "Heiman HS2SA-EF-3.0"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><p>The Heiman <code>HS2SA-1</code> Zigbee 3.0 smoke detector gets detected as this model, but exposed functions work properly.</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>To put the device into Zigbee pairing mode, quickly press the &quot;Test/Hush/Networking&quot; button 3 times within 2 seconds. While in pairing mode, the green LED flashes quickly (5 times per second). Pairing success is indicated by the LED lighting green for 3 seconds and then turning off. If pairing fails, the green LED flashes slowly (2 times per second) for 3 seconds, then turns off. Pairing mode stops automatically after 60 seconds, or can be stopped by pressing the button again.</p><p>After successfully pairing the device to your Zigbee network, initiate the test function of the smoke detector by pushing and holding the &quot;Test/Hush/Networking&quot; button for ~1 second. (Please be prepared for the loud noise!) The device state in Z2M only shows all exposed attributes properly after such a test has been performed.</p><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"smoke-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#smoke-binary\"><span>Smoke (binary)</span></a></h3><p>Indicates whether the device detected smoke. Value can be found in the published state on the <code>smoke</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> smoke is ON, if <code>false</code> OFF.</p><h3 id=\"battery-low-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-low-binary\"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"test-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#test-binary\"><span>Test (binary)</span></a></h3><p>Indicates whether the device is being tested. Value can be found in the published state on the <code>test</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> test is ON, if <code>false</code> OFF.</p>", 14))
	]);
}
var HS2SA_EF_3_0_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, HS2SA_EF_3_0_default as default };
