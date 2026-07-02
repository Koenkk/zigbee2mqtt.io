import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/Duck_Pool_Thermometer.md
var _pageData = JSON.parse("{\"path\":\"/devices/Duck_Pool_Thermometer.html\",\"title\":\"Bacchus Duck Pool Thermometer control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Bacchus Duck Pool Thermometer control via MQTT\",\"description\":\"Integrate your Bacchus Duck Pool Thermometer via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-03-31T19:04:19.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Bacchus777\",\"username\":\"Bacchus777\",\"email\":\"32041087+Bacchus777@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/Bacchus777\"},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":5}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"934b222f1a779f20231d23c8d061cac3bbfec767\",\"time\":1774984782000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc to 26.27.0\"},{\"hash\":\"4d84c5c137f57b2aaa0dc89e1ad699cbc9f67daa\",\"time\":1774385159000,\"email\":\"32041087+Bacchus777@users.noreply.github.com\",\"author\":\"Bacchus777\",\"message\":\"Flower_sensor_v4 (#4951)\"},{\"hash\":\"94ddb945fad517abf11cca5a8a8b7b01ab178445\",\"time\":1762114847000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"fix various typos\"},{\"hash\":\"4fecaa24598059a573f73e6901da389fef8b59f4\",\"time\":1748800651000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 23.53.0\"},{\"hash\":\"20d3b2e70374e1fe0fa20e6c892def50f32455e5\",\"time\":1748799477000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 23.52.1\"},{\"hash\":\"4cccc5755228703e25342a9b7dc43baf2dba3a78\",\"time\":1748285145000,\"email\":\"32041087+Bacchus777@users.noreply.github.com\",\"author\":\"Bacchus777\",\"message\":\"Duck Pool Thermometer (#3820)\"}]},\"filePathRelative\":\"devices/Duck_Pool_Thermometer.md\"}");
var _sfc_main = { name: "Duck_Pool_Thermometer.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "bacchus-duck-pool-thermometer",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#bacchus-duck-pool-thermometer"
		}, [createBaseVNode("span", null, "Bacchus Duck Pool Thermometer")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "Duck Pool Thermometer")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Bacchus" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Bacchus", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Bacchus Duck pool thermomemeter")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "temperature, measurment_period, threshold, battery, voltage")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/Duck-Pool-Thermometer.png",
				alt: "Bacchus Duck Pool Thermometer"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createBaseVNode("p", null, [createBaseVNode("a", {
			href: "https://github.com/Bacchus777/Duck-Pool-Thermometer",
			target: "_blank",
			rel: "noopener noreferrer"
		}, "Original project description")], -1)),
		_cache[10] || (_cache[10] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[11] || (_cache[11] = createStaticVNode("<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"temperature-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#temperature-numeric\"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id=\"measurment-period-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#measurment-period-numeric\"><span>Measurment period (numeric)</span></a></h3><p>Temperature measurement period. Value can be found in the published state on the <code>measurment_period</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;measurment_period&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3600</code>. The unit of this value is <code>sec</code>.</p><h3 id=\"threshold-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#threshold-numeric\"><span>Threshold (numeric)</span></a></h3><p>Min threshold for alarm binding. Value can be found in the published state on the <code>threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>30</code>. The unit of this value is <code>°C</code>.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"voltage-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#voltage-numeric\"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p>", 12))
	]);
}
var Duck_Pool_Thermometer_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, Duck_Pool_Thermometer_default as default };
