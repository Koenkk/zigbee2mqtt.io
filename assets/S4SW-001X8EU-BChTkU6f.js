import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/S4SW-001X8EU.md
var _pageData = JSON.parse("{\"path\":\"/devices/S4SW-001X8EU.html\",\"title\":\"Shelly S4SW-001X8EU control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Shelly S4SW-001X8EU control via MQTT\",\"description\":\"Integrate your Shelly S4SW-001X8EU via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-04-01T18:30:52.000Z\"},\"filePathRelative\":\"devices/S4SW-001X8EU.md\"}");
var _sfc_main = { name: "S4SW-001X8EU.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "shelly-s4sw-001x8eu",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#shelly-s4sw-001x8eu"
		}, [createBaseVNode("span", null, "Shelly S4SW-001X8EU")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "S4SW-001X8EU")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Shelly" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Shelly", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "1 Mini Gen 4")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "action, switch_type, switch (state), wifi_status, ip_address, dhcp_enabled, wifi_config, identify")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/S4SW-001X8EU.png",
				alt: "Shelly S4SW-001X8EU"
			})])], -1))
		])]),
		_cache[12] || (_cache[12] = createBaseVNode("h2", {
			id: "firmware",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#firmware"
		}, [createBaseVNode("span", null, "Firmware")])], -1)),
		_cache[13] || (_cache[13] = createBaseVNode("p", null, "It is recommended to connect Shelly devices by WiFi / Bluetooth, and update their firmware, until they gain support for OTA updates over Zigbee.", -1)),
		_cache[14] || (_cache[14] = createBaseVNode("p", null, [
			createTextVNode("The latest firmware fixes known issues like negative power readings on some models."),
			createBaseVNode("br"),
			createBaseVNode("em", null, "Note they roll-out updates in phases. Check \"beta\" channels if you are specifically looking for a fix.")
		], -1)),
		_cache[15] || (_cache[15] = createBaseVNode("h2", {
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
		_cache[16] || (_cache[16] = createBaseVNode("h2", {
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
		_cache[17] || (_cache[17] = createStaticVNode("<ul><li><p><code>shelly_wifi_ssid</code>: Full Wi-Fi SSID to use when the Shelly Wi-Fi setup cluster reports a shortened network name. The value must be textual.</p></li><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>30</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>input_1_on</code>, <code>input_1_off</code>, <code>input_1_toggle</code>, <code>input_1_single</code>, <code>input_1_double</code>, <code>input_1_triple</code>, <code>input_1_hold</code>.</p><h3 id=\"switch-type-enum-sw1-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch-type-enum-sw1-endpoint\"><span>Switch type (enum, sw1 endpoint)</span></a></h3><p>Switch input type. Value can be found in the published state on the <code>switch_type_sw1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_sw1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_sw1&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>.</p><h3 id=\"switch\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch\"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id=\"on-with-timed-off\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#on-with-timed-off\"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id=\"wi-fi-status-text\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#wi-fi-status-text\"><span>Wi-Fi status (text)</span></a></h3><p>Current connection status. Value can be found in the published state on the <code>wifi_status</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;wifi_status&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value.</p><h3 id=\"ip-address-text\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ip-address-text\"><span>IP address (text)</span></a></h3><p>IP address currently assigned to the device. Value can be found in the published state on the <code>ip_address</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ip_address&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value.</p><h3 id=\"dhcp-enabled-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#dhcp-enabled-binary\"><span>DHCP enabled (binary)</span></a></h3><p>Indicates whether DHCP is used to automatically assign network settings. Value can be found in the published state on the <code>dhcp_enabled</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;dhcp_enabled&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> dHCP enabled is ON, if <code>false</code> OFF.</p><h3 id=\"wi-fi-configuration-composite\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#wi-fi-configuration-composite\"><span>Wi-Fi Configuration (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;wifi_config&quot;: {&quot;enabled&quot;: VALUE, &quot;ssid&quot;: &quot;VALUE&quot;, &quot;password&quot;: &quot;VALUE&quot;, &quot;static_ip&quot;: &quot;VALUE&quot;, &quot;net_mask&quot;: &quot;VALUE&quot;, &quot;gateway&quot;: &quot;VALUE&quot;, &quot;name_server&quot;: &quot;VALUE&quot;}}</code> To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;wifi_config&quot;: &quot;&quot;}</code>.</p><ul><li><code>enabled</code> (binary): Enable/disable Wi-Fi connectivity allowed values: <code>true</code> or <code>false</code></li><li><code>ssid</code> (text): Name (SSID) of the Wi-Fi network to connect to</li><li><code>password</code> (text): Password for the selected Wi-Fi network</li><li><code>static_ip</code> (text): Manually assigned IP address (used when DHCP is disabled)</li><li><code>net_mask</code> (text): Subnet mask for the static IP configuration</li><li><code>gateway</code> (text): Default gateway address for static IP configuration</li><li><code>name_server</code> (text): Name server address for static IP configuration</li></ul><h3 id=\"identify-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#identify-enum\"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>identify</code>.</p>", 21))
	]);
}
var S4SW_001X8EU_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, S4SW_001X8EU_default as default };
