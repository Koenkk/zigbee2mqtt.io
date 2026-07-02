import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/SM0212.md
var _pageData = JSON.parse("{\"path\":\"/devices/SM0212.html\",\"title\":\"Tuya SM0212 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Tuya SM0212 control via MQTT\",\"description\":\"Integrate your Tuya SM0212 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-11-30T20:32:44.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"5601702380faea1b054a52e27b48361f4148af28\",\"time\":1764534871000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc\"},{\"hash\":\"7fecb4295cc84ff50f35d4450bad1d971ff8644f\",\"time\":1746123337000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 23.36.0\"}]},\"filePathRelative\":\"devices/SM0212.md\"}");
var _sfc_main = { name: "SM0212.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "tuya-sm0212",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#tuya-sm0212"
		}, [createBaseVNode("span", null, "Tuya SM0212")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "SM0212")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Tuya" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Tuya", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Gas sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "gas_alarm_1, gas_alarm_2, tamper, battery_low")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/SM0212.png",
				alt: "Tuya SM0212"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"gas-alarm-1-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#gas-alarm-1-binary\"><span>Gas alarm 1 (binary)</span></a></h3><p>Indicates whether the device detected gas (alarm_1). Value can be found in the published state on the <code>gas_alarm_1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> gas alarm 1 is ON, if <code>false</code> OFF.</p><h3 id=\"gas-alarm-2-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#gas-alarm-2-binary\"><span>Gas alarm 2 (binary)</span></a></h3><p>Indicates whether the device detected gas (alarm_2). Value can be found in the published state on the <code>gas_alarm_2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> gas alarm 2 is ON, if <code>false</code> OFF.</p><h3 id=\"tamper-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#tamper-binary\"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id=\"battery-low-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-low-binary\"><span>Battery low (binary)</span></a></h3><p>Indicates whether the battery of the device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p>", 9))
	]);
}
var SM0212_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, SM0212_default as default };
