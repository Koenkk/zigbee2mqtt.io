import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/POK008.md
var _pageData = JSON.parse("{\"path\":\"/devices/POK008.html\",\"title\":\"PushOk Hardware POK008 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"PushOk Hardware POK008 control via MQTT\",\"description\":\"Integrate your PushOk Hardware POK008 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-08-01T18:23:41.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":6}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"94ddb945fad517abf11cca5a8a8b7b01ab178445\",\"time\":1762114847000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"fix various typos\"},{\"hash\":\"707d7e54d6545ef4745398da456aeb2977174d54\",\"time\":1738441259000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc 21.27.1\"},{\"hash\":\"2c6e4377b7f75be4fe2f29a50847f9bec42e5388\",\"time\":1733059812000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 20.58.0\"},{\"hash\":\"6d625b843564f35fefed2e5d18d0fa7f4007844a\",\"time\":1725195158000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Updates\"},{\"hash\":\"c9e8b4810dbf3458a48946739049a8082328292a\",\"time\":1722537665000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 19.72.0\"}]},\"filePathRelative\":\"devices/POK008.md\"}");
var _sfc_main = { name: "POK008.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "pushok-hardware-pok008",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#pushok-hardware-pok008"
		}, [createBaseVNode("span", null, "PushOk Hardware POK008")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "POK008")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=PushOk%20Hardware" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("PushOk Hardware", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Battery powered thermostat relay")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "switch (state), battery, voltage, temperature, tgt_temperature, hysteresis, set_op_mode")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/POK008.png",
				alt: "PushOk Hardware POK008"
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
		_cache[14] || (_cache[14] = createStaticVNode("<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"switch\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch\"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id=\"on-with-timed-off\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#on-with-timed-off\"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"voltage-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#voltage-numeric\"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id=\"temperature-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#temperature-numeric\"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id=\"tgt-temperature-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#tgt-temperature-numeric\"><span>Tgt temperature (numeric)</span></a></h3><p>Target temperature. Value can be found in the published state on the <code>tgt_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;tgt_temperature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tgt_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-45</code> and the maximum value is <code>125</code>. The unit of this value is <code>C</code>.</p><h3 id=\"hysteresis-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#hysteresis-numeric\"><span>Hysteresis (numeric)</span></a></h3><p>Temperature hysteresis. Value can be found in the published state on the <code>hysteresis</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;hysteresis&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;hysteresis&quot;: NEW_VALUE}</code>. The minimal value is <code>0.1</code> and the maximum value is <code>40</code>. The unit of this value is <code>C</code>.</p><h3 id=\"set-op-mode-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#set-op-mode-enum\"><span>Set op mode (enum)</span></a></h3><p>Operation mode. Value can be found in the published state on the <code>set_op_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;set_op_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;set_op_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>monitor</code>, <code>heater</code>, <code>cooler</code>, <code>monitor_inverted</code>, <code>heater_inverted</code>, <code>cooler_inverted</code>.</p>", 18))
	]);
}
var POK008_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, POK008_default as default };
