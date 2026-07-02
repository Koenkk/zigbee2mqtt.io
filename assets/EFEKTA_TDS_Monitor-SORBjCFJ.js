import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/EFEKTA_TDS_Monitor.md
var _pageData = JSON.parse("{\"path\":\"/devices/EFEKTA_TDS_Monitor.html\",\"title\":\"EFEKTA EFEKTA_TDS_Monitor control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"EFEKTA EFEKTA_TDS_Monitor control via MQTT\",\"description\":\"Integrate your EFEKTA EFEKTA_TDS_Monitor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-04-30T19:57:27.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"c6635419f9d2bcbfb7d60bdc6f1dd80d5d988029\",\"time\":1777579890000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"}]},\"filePathRelative\":\"devices/EFEKTA_TDS_Monitor.md\"}");
var _sfc_main = { name: "EFEKTA_TDS_Monitor.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "efekta-efekta-tds-monitor",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#efekta-efekta-tds-monitor"
		}, [createBaseVNode("span", null, "EFEKTA EFEKTA_TDS_Monitor")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "EFEKTA_TDS_Monitor")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=EFEKTA" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("EFEKTA", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "TDS Monitor with DS18B20 temperature sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "temperature, tds, tds_coefficient, reading_interval, tds_offset, tx_radio_power")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/EFEKTA_TDS_Monitor.png",
				alt: "EFEKTA EFEKTA_TDS_Monitor"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createBaseVNode("h2", {
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"temperature-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#temperature-numeric\"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id=\"tds-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#tds-numeric\"><span>Tds (numeric)</span></a></h3><p>Measured TDS value. Value can be found in the published state on the <code>tds</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id=\"tds-coefficient-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#tds-coefficient-enum\"><span>Tds coefficient (enum)</span></a></h3><p>TDS coefficient. Value can be found in the published state on the <code>tds_coefficient</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tds_coefficient&quot;: NEW_VALUE}</code>. The possible values are: <code>500</code>, <code>550</code>, <code>640</code>, <code>700</code>, <code>1000</code>.</p><h3 id=\"reading-interval-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#reading-interval-numeric\"><span>Reading interval (numeric)</span></a></h3><p>Setting the sensor reading interval in seconds, by default 30 seconds. Value can be found in the published state on the <code>reading_interval</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reading_interval&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>360</code>. The unit of this value is <code>Seconds</code>.</p><h3 id=\"tds-offset-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#tds-offset-numeric\"><span>Tds offset (numeric)</span></a></h3><p>Adjust TDS. Value can be found in the published state on the <code>tds_offset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tds_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-100</code> and the maximum value is <code>100</code>. The unit of this value is <code>ppm</code>.</p><h3 id=\"tx-radio-power-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#tx-radio-power-enum\"><span>Tx radio power (enum)</span></a></h3><p>Set TX Radio Power, dbm. Value can be found in the published state on the <code>tx_radio_power</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tx_radio_power&quot;: NEW_VALUE}</code>. The possible values are: <code>4dbm</code>, <code>19dbm</code>.</p>", 14))
	]);
}
var EFEKTA_TDS_Monitor_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, EFEKTA_TDS_Monitor_default as default };
