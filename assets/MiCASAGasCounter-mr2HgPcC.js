import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/MiCASAGasCounter.md
var _pageData = JSON.parse("{\"path\":\"/devices/MiCASAGasCounter.html\",\"title\":\"Custom devices (DiY) MiCASAGasCounter control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Custom devices (DiY) MiCASAGasCounter control via MQTT\",\"description\":\"Integrate your Custom devices (DiY) MiCASAGasCounter via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-01-31T13:09:55.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Ignacio Hernandez-Ros\",\"username\":\"\",\"email\":\"ignacio@hernandez-ros.com\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"934b222f1a779f20231d23c8d061cac3bbfec767\",\"time\":1774984782000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc to 26.27.0\"},{\"hash\":\"3849d031e5d90cb5023b0027a9cbc582961c61ed\",\"time\":1769866618000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"6d2cd3f5e3247c20ea6be8931fb3105f6065471c\",\"time\":1768767230000,\"email\":\"ignacio@hernandez-ros.com\",\"author\":\"Ignacio Hernandez-Ros\",\"message\":\"Add support for Gas Counter DIY device (#4731)\"}]},\"filePathRelative\":\"devices/MiCASAGasCounter.md\"}");
var _sfc_main = { name: "MiCASAGasCounter.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[10] || (_cache[10] = createBaseVNode("h1", {
			id: "custom-devices-diy-micasagascounter",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#custom-devices-diy-micasagascounter"
		}, [createBaseVNode("span", null, "Custom devices (DiY) MiCASAGasCounter")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "MiCASAGasCounter")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Custom%20devices%20(DiY)" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Custom devices (DiY)", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee Gas counter")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "gas, battery, voltage, battery_low, gas_counter_set")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/MiCASAGasCounter.png",
				alt: "Custom devices (DiY) MiCASAGasCounter"
			})])], -1))
		])]),
		_cache[11] || (_cache[11] = createStaticVNode("<blockquote><blockquote><h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2></blockquote></blockquote><p>Zigbee Gas Counter so it counts gas consumption from the counter directly and reports back the value to the coordinator. The idea was to have a device counting without intervention of your server at home. This is a DIY device so you have to checkout the documentation. To use this device with Zigbee2MQTT a custom firmware has to be flashed which is explained <a href=\"https://github.com/IgnacioHR/ZigbeeGasCounter\" target=\"_blank\" rel=\"noopener noreferrer\">here</a> and build your own unit.</p><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 3)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(".", -1))
		]),
		_cache[12] || (_cache[12] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"gas-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#gas-numeric\"><span>Gas (numeric)</span></a></h3><p>Total gas consumption in m³. Value can be found in the published state on the <code>gas</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;gas&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>m³</code>.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"voltage-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#voltage-numeric\"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id=\"battery-low-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-low-binary\"><span>Battery low (binary)</span></a></h3><p>Empty battery indicator. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id=\"gas-counter-set-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#gas-counter-set-numeric\"><span>Gas counter set (numeric)</span></a></h3><p>Write absolute gas meter value. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;gas_counter_set&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>281474976710655</code>.</p>", 11))
	]);
}
var MiCASAGasCounter_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, MiCASAGasCounter_default as default };
