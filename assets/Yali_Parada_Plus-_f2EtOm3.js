import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/Yali_Parada_Plus.md
var _pageData = JSON.parse("{\"path\":\"/devices/Yali_Parada_Plus.html\",\"title\":\"Purmo/Radson Yali Parada Plus control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Purmo/Radson Yali Parada Plus control via MQTT\",\"description\":\"Integrate your Purmo/Radson Yali Parada Plus via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-02-06T19:24:12.000Z\"},\"filePathRelative\":\"devices/Yali_Parada_Plus.md\"}");
var _sfc_main = { name: "Yali_Parada_Plus.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[9] || (_cache[9] = createBaseVNode("h1", {
			id: "purmo-radson-yali-parada-plus",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#purmo-radson-yali-parada-plus"
		}, [createBaseVNode("span", null, "Purmo/Radson Yali Parada Plus")])], -1)),
		createBaseVNode("table", null, [_cache[7] || (_cache[7] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "Yali Parada Plus")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Purmo%2FRadson" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Purmo/Radson", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Electric oil-filled radiator")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "climate (occupied_heating_setpoint, unoccupied_heating_setpoint, system_mode, local_temperature, local_temperature_calibration, running_state, running_mode), max_heat_setpoint_limit, keypad_lockout")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/Yali-Parada-Plus.png",
				alt: "Purmo/Radson Yali Parada Plus"
			})])], -1)),
			_cache[6] || (_cache[6] = createBaseVNode("tr", null, [createBaseVNode("td", null, "White-label"), createBaseVNode("td", null, "Purmo/Radson Yali Digital Plus, LVI Yali Digital Plus")], -1))
		])]),
		_cache[10] || (_cache[10] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[11] || (_cache[11] = createStaticVNode("<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"climate\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#climate\"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>unoccupied_heating_setpoint</code>, <code>system_mode</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>running_state</code>, <code>running_mode</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: &quot;VALUE&quot;}</code> where <code>VALUE</code> is one of: <code>heat</code>, <code>off</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.The minimal value is <code>-2.5</code> and the maximum value is <code>2.5</code> with a step size of <code>0.1</code>.</li></ul><h3 id=\"max-heat-setpoint-limit-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#max-heat-setpoint-limit-numeric\"><span>Max heat setpoint limit (numeric)</span></a></h3><p>Maximum Heating set point limit. Value can be found in the published state on the <code>max_heat_setpoint_limit</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;max_heat_setpoint_limit&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_heat_setpoint_limit&quot;: VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>30</code>. The unit of this value is <code>°C</code>.</p><h3 id=\"keypad-lockout-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#keypad-lockout-enum\"><span>Keypad lockout (enum)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>keypad_lockout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keypad_lockout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>unlock</code>, <code>lock1</code>, <code>lock2</code>.</p>", 9))
	]);
}
var Yali_Parada_Plus_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, Yali_Parada_Plus_default as default };
