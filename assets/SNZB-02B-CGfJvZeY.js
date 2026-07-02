import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/SNZB-02B.md
var _pageData = JSON.parse("{\"path\":\"/devices/SNZB-02B.html\",\"title\":\"SONOFF SNZB-02B control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"SONOFF SNZB-02B control via MQTT\",\"description\":\"Integrate your SONOFF SNZB-02B via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-03-31T19:04:39.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"934b222f1a779f20231d23c8d061cac3bbfec767\",\"time\":1774984782000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc to 26.27.0\"}]},\"filePathRelative\":\"devices/SNZB-02B.md\"}");
var _sfc_main = { name: "SNZB-02B.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "sonoff-snzb-02b",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#sonoff-snzb-02b"
		}, [createBaseVNode("span", null, "SONOFF SNZB-02B")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "SNZB-02B")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=SONOFF" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("SONOFF", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Temperature and humidity sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, temperature, humidity, temperature_calibration, humidity_calibration")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/SNZB-02B.png",
				alt: "SONOFF SNZB-02B"
			})])], -1))
		])]),
		_cache[12] || (_cache[12] = createBaseVNode("h2", {
			id: "ota-updates",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ota-updates"
		}, [createBaseVNode("span", null, "OTA updates")])], -1)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(".", -1))
		]),
		_cache[13] || (_cache[13] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[14] || (_cache[14] = createStaticVNode("<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"temperature-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#temperature-numeric\"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id=\"humidity-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#humidity-numeric\"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"temperature-calibration-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#temperature-calibration-numeric\"><span>Temperature calibration (numeric)</span></a></h3><p>Offset to add/subtract to the reported temperature. Note: wake up the device by pressing the button on the back before changing this value.. Value can be found in the published state on the <code>temperature_calibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_calibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>°C</code>.</p><h3 id=\"humidity-calibration-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#humidity-calibration-numeric\"><span>Humidity calibration (numeric)</span></a></h3><p>Offset to add/subtract to the reported relative humidity. Note: wake up the device by pressing the button on the back before changing this value.. Value can be found in the published state on the <code>humidity_calibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity_calibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>%</code>.</p>", 12))
	]);
}
var SNZB_02B_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, SNZB_02B_default as default };
