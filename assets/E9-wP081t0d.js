import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/E9.md
var _pageData = JSON.parse("{\"path\":\"/devices/E9.html\",\"title\":\"Nous E9 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Nous E9 control via MQTT\",\"description\":\"Integrate your Nous E9 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-07-01T17:54:38.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":4},{\"name\":\"Andrei LAZAROV\",\"username\":\"\",\"email\":\"andrei_lazarov@yahoo.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"934b222f1a779f20231d23c8d061cac3bbfec767\",\"time\":1774984782000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc to 26.27.0\"},{\"hash\":\"493678db4f88f59e538209cc06b1faa76cab52c0\",\"time\":1774691201000,\"email\":\"andrei_lazarov@yahoo.com\",\"author\":\"Andrei LAZAROV\",\"message\":\"Nous E9 gas detector pairing info (#4963)\"},{\"hash\":\"baf96fd627fdb9aff88e8efcb6bbbb2c5e76033b\",\"time\":1767274772000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"7bebdb258d8727e7ca542d09e745df98c72cff27\",\"time\":1751393434000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 23.69.0\"}]},\"filePathRelative\":\"devices/E9.md\"}");
var _sfc_main = { name: "E9.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "nous-e9",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#nous-e9"
		}, [createBaseVNode("span", null, "Nous E9")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "E9")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Nous" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Nous", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Household combustible gas detector")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "gas, warming_up, fault, end_of_life")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/E9.png",
				alt: "Nous E9"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p><strong>Press and hold the button for 5s</strong> to put the device in pairing mode.<br> The red LED will flash until it connects.</p><h3 id=\"firmware\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#firmware\"><span>Firmware</span></a></h3><ul><li>Device comes with appVersion <code>74</code><br> (reported in Tuya app as Zigbee module v1.0.10 + MCU v1.0.0)</li><li>Subscribed to <em>manufacturerCode</em> <code>4417</code>, <em>imageType</em> <code>54179</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"gas-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#gas-binary\"><span>Gas (binary)</span></a></h3><p>Indicates whether the device detected combustible gas (Methane) and the buzzer is ringing. Also triggers when the test button is pressed. Value can be found in the published state on the <code>gas</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> gas is ON, if <code>false</code> OFF.</p><h3 id=\"warming-up-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#warming-up-binary\"><span>Warming up (binary)</span></a></h3><p>Sensor preheating status: Takes 3 mins to complete after power-on. Value can be found in the published state on the <code>warming_up</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> warming up is ON, if <code>false</code> OFF.</p><h3 id=\"fault-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#fault-binary\"><span>Fault (binary)</span></a></h3><p>Sensor fault indicator. Value can be found in the published state on the <code>fault</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> fault is ON, if <code>false</code> OFF.</p><h3 id=\"end-of-life-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#end-of-life-binary\"><span>End of life (binary)</span></a></h3><p>Indicates whether the sensor is past its certified service life (5 years) and should be replaced. Value can be found in the published state on the <code>end_of_life</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> end of life is ON, if <code>false</code> OFF.</p>", 14))
	]);
}
var E9_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, E9_default as default };
