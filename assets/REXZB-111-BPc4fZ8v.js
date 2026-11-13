import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/REXZB-111.md
var _pageData = JSON.parse("{\"path\":\"/devices/REXZB-111.html\",\"title\":\"Develco REXZB-111 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Develco REXZB-111 control via MQTT\",\"description\":\"Integrate your Develco REXZB-111 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-10-31T19:12:27.000Z\"},\"filePathRelative\":\"devices/REXZB-111.md\"}");
var _sfc_main = { name: "REXZB-111.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[12] || (_cache[12] = createBaseVNode("h1", {
			id: "develco-rexzb-111",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#develco-rexzb-111"
		}, [createBaseVNode("span", null, "Develco REXZB-111")])], -1)),
		createBaseVNode("table", null, [_cache[7] || (_cache[7] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "REXZB-111")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Develco" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Develco", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Range extender with backup battery")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, voltage, battery_low, battery_defect, ac_connected, led_control, tx_power, zone_status_interval, identify")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/REXZB-111.png",
				alt: "Develco REXZB-111"
			})])], -1)),
			_cache[6] || (_cache[6] = createBaseVNode("tr", null, [createBaseVNode("td", null, "White-label"), createBaseVNode("td", null, "Frient REXZB-111")], -1))
		])]),
		_cache[13] || (_cache[13] = createBaseVNode("h2", {
			id: "ota-updates",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ota-updates"
		}, [createBaseVNode("span", null, "OTA updates")])], -1)),
		createBaseVNode("p", null, [
			_cache[9] || (_cache[9] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[10] || (_cache[10] = createTextVNode(".", -1))
		]),
		_cache[14] || (_cache[14] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[11] || (_cache[11] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[15] || (_cache[15] = createStaticVNode("<ul><li><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>30</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"voltage-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#voltage-numeric\"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id=\"battery-low-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-low-binary\"><span>Battery low (binary)</span></a></h3><p>Indicates whether the battery of the device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id=\"battery-defect-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-defect-binary\"><span>Battery defect (binary)</span></a></h3><p>Indicates whether the device battery is defective. Value can be found in the published state on the <code>battery_defect</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery defect is ON, if <code>false</code> OFF.</p><h3 id=\"ac-connected-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ac-connected-binary\"><span>Ac connected (binary)</span></a></h3><p>Indicates whether the device is connected to AC mains power. Value can be found in the published state on the <code>ac_connected</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> ac connected is ON, if <code>false</code> OFF.</p><h3 id=\"led-control-composite\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#led-control-composite\"><span>Led control (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_control&quot;: {&quot;indicate_faults&quot;: VALUE, &quot;indicate_mains_power&quot;: VALUE}}</code> To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_control&quot;: &quot;&quot;}</code>.</p><ul><li><code>indicate_faults</code> (binary): Enable/disable LED indication for faults (e.g., lost connection to gateway) allowed values: <code>true</code> or <code>false</code></li><li><code>indicate_mains_power</code> (binary): Enable/disable green LED indication for mains power status allowed values: <code>true</code> or <code>false</code></li></ul><h3 id=\"tx-power-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#tx-power-enum\"><span>Tx power (enum)</span></a></h3><p>TX power mode for regulatory compliance (CE or FCC). Requires device rejoin to apply.. Value can be found in the published state on the <code>tx_power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;tx_power&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tx_power&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>CE</code>, <code>FCC</code>.</p><h3 id=\"zone-status-interval-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#zone-status-interval-numeric\"><span>Zone status interval (numeric)</span></a></h3><p>Heartbeat interval in seconds. Controls the periodic interval between ZoneStatusChange commands (default 300s). Value can be found in the published state on the <code>zone_status_interval</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;zone_status_interval&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;zone_status_interval&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>s</code>.</p><h3 id=\"identify-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#identify-enum\"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>identify</code>.</p>", 21))
	]);
}
var REXZB_111_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, REXZB_111_default as default };
