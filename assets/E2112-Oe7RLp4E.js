import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/E2112.md
var _pageData = JSON.parse("{\"path\":\"/devices/E2112.html\",\"title\":\"IKEA E2112 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"IKEA E2112 control via MQTT\",\"description\":\"Integrate your IKEA E2112 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2023-03-01T15:36:39.000Z\"},\"filePathRelative\":\"devices/E2112.md\"}");
var _sfc_main = { name: "E2112.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[18] || (_cache[18] = createBaseVNode("h1", {
			id: "ikea-e2112",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ikea-e2112"
		}, [createBaseVNode("span", null, "IKEA E2112")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "E2112")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=IKEA" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("IKEA", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "VINDSTYRKA air quality and humidity sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "temperature, humidity, pm25, voc_index")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/E2112.png",
				alt: "IKEA E2112"
			})])], -1))
		])]),
		_cache[19] || (_cache[19] = createBaseVNode("h2", {
			id: "notes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#notes"
		}, [createBaseVNode("span", null, "Notes")])], -1)),
		_cache[20] || (_cache[20] = createBaseVNode("h3", {
			id: "related",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#related"
		}, [createBaseVNode("span", null, "Related")])], -1)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/devices/E2007.html" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("STARKVIND air purifier", -1)])]),
			_: 1
		})]), createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/devices/E2006.html" }, {
			default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("STARKVIND air purifier table", -1)])]),
			_: 1
		})])]),
		_cache[21] || (_cache[21] = createStaticVNode("<h3 id=\"information\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#information\"><span>Information</span></a></h3><ul><li><a href=\"https://apps.fcc.gov/oetcf/eas/reports/ViewExhibitReport.cfm?mode=Exhibits&amp;RequestTimeout=500&amp;calledFromFrame=N&amp;application_id=EV5H8AFgrSV%2B7nCx%2Bn9epg%3D%3D&amp;fcc_id=FHO-E2112\" target=\"_blank\" rel=\"noopener noreferrer\">FCC</a> - emissions, teardown, manual</li><li><a href=\"https://csa-iot.org/csa_product/vindstyrka-air-sensor/\" target=\"_blank\" rel=\"noopener noreferrer\">CSA IoT</a> - Zigbee compliance</li><li><a href=\"https://sensirion.com/media/documents/02232963/6294E043/Info_Note_VOC_Index.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Sensirion</a> - What is VOC index?</li><li><a href=\"https://github.com/just-oblivious/vindstyrka-docs\" target=\"_blank\" rel=\"noopener noreferrer\">just-oblivious/vindstyrka-docs</a> - reverse engineering</li><li><a href=\"https://github.com/oleksiikutuzov/IKEA-VINDSTYRKA/\" target=\"_blank\" rel=\"noopener noreferrer\">oleksiikutuzov/IKEA-VINDSTYRKA</a> - teardown</li><li>Device is a Zigbee Router</li></ul><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p><strong>Press the pair button 4 times</strong> to factory reset the device and start pairing.<br> The link icon on the display will blink until it connects to the network.</p><h3 id=\"binding\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#binding\"><span>Binding</span></a></h3><p>The sensor can directly control IKEA air purifiers (Trigger when air quality is poor)</p>", 6)),
		createBaseVNode("ul", null, [_cache[13] || (_cache[13] = createBaseVNode("li", null, [
			createTextVNode("Pairing outside the network is possible through "),
			createBaseVNode("em", null, "Find & Bind"),
			createBaseVNode("ul", null, [
				createBaseVNode("li", null, "Hold the sensor pair button for 3s. The link icon starts blinking"),
				createBaseVNode("li", null, "Hold the purifier pair button for 3s"),
				createBaseVNode("li", null, "When successful, the link icon stops blinking")
			])
		], -1)), createBaseVNode("li", null, [_cache[12] || (_cache[12] = createTextVNode("Pairing inside the network was tested, but not successful ", -1)), createBaseVNode("ul", null, [_cache[11] || (_cache[11] = createBaseVNode("li", null, "The pair button does not do anything", -1)), createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/usage/binding.html" }, {
			default: withCtx(() => [..._cache[9] || (_cache[9] = [createTextVNode("Binding", -1)])]),
			_: 1
		}), _cache[10] || (_cache[10] = createTextVNode(" clusters does not appear to generate events", -1))])])])]),
		_cache[22] || (_cache[22] = createStaticVNode("<h3 id=\"issues\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#issues\"><span>Issues</span></a></h3><ul><li><strong>Wrong initial data</strong><ul><li>When the device boots, it may display and report wrong data (e.g. higher temperature than normal)</li><li>It will calibrate and report correctly after a few minutes</li></ul></li><li><strong>Low measurements precision</strong><ul><li>The device reports measurements as whole numbers (null decimal values)</li><li>As a result, increasing the precision in Z2M has no effect</li></ul></li></ul><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 3)),
		createBaseVNode("p", null, [
			_cache[15] || (_cache[15] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[14] || (_cache[14] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[16] || (_cache[16] = createTextVNode(".", -1))
		]),
		_cache[23] || (_cache[23] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[17] || (_cache[17] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[24] || (_cache[24] = createStaticVNode("<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li><li><p><code>pm25_calibration</code>: Calibrates the pm25 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"temperature-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#temperature-numeric\"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id=\"humidity-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#humidity-numeric\"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id=\"pm25-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pm25-numeric\"><span>Pm25 (numeric)</span></a></h3><p>Measured PM2.5 (particulate matter) concentration. Value can be found in the published state on the <code>pm25</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pm25&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>µg/m³</code>.</p><h3 id=\"voc-index-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#voc-index-numeric\"><span>VOC index (numeric)</span></a></h3><p>Sensirion VOC index: 100 = average, &lt;100 = less tVOC, &gt;100 = more tVOC. Value can be found in the published state on the <code>voc_index</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voc_index&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value.</p>", 10))
	]);
}
var E2112_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, E2112_default as default };
