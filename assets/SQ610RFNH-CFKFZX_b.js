import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/SQ610RFNH.md
var _pageData = JSON.parse("{\"path\":\"/devices/SQ610RFNH.html\",\"title\":\"Salus Controls SQ610RFNH control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Salus Controls SQ610RFNH control via MQTT\",\"description\":\"Integrate your Salus Controls SQ610RFNH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-10-16T13:06:48.000Z\"},\"filePathRelative\":\"devices/SQ610RFNH.md\"}");
var _sfc_main = { name: "SQ610RFNH.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[24] || (_cache[24] = createBaseVNode("h1", {
			id: "salus-controls-sq610rfnh",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#salus-controls-sq610rfnh"
		}, [createBaseVNode("span", null, "Salus Controls SQ610RFNH")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "SQ610RFNH")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Salus%20Controls" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Salus Controls", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Quantum wireless thermostat")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "climate (current_heating_setpoint, local_temperature, system_mode, running_state), humidity, battery, child_lock, wiring_centre_zones")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/SQ610RFNH.png",
				alt: "Salus Controls SQ610RFNH"
			})])], -1))
		])]),
		_cache[25] || (_cache[25] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><p>This device is also sold under the Neotherm brand in Denmark.</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>The thermostat only finishes pairing when the coordinator answers a Salus specific greeting, which this converter does.</p><ol><li>Factory reset the thermostat.</li><li>Permit join on the whole network, with the thermostat close to a router or the coordinator: publish <code>{&quot;time&quot;: 254}</code> to <code>zigbee2mqtt/bridge/request/permit_join</code>. Do not limit it to a Salus wiring centre: a thermostat associated with it 50+ times and never received the network key. In one test a router accepted the thermostat and dropped it again before the key exchange.</li><li>Start pairing on the thermostat.</li></ol><h3 id=\"go-to-the-smart-home-app\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#go-to-the-smart-home-app\"><span>&quot;Go to the Smart Home app&quot;</span></a></h3><p>After pairing, the display shows &quot;go to the Smart Home app&quot; and the buttons do nothing until the thermostat is paired with a receiver, such as a wiring centre zone. The Salus gateway behaves the same way. Readings and writes from Zigbee2MQTT work in that state.</p><h4 id=\"standalone-direct-relay-workaround\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#standalone-direct-relay-workaround\"><span>Standalone / Direct Relay Workaround</span></a></h4><p>If using the thermostat standalone (controlling heating directly via onboard relays, or without a Salus KL08RF wiring centre), you can bypass this lock screen:</p><ol><li>In the initial first-boot setup wizard, select <strong>NO</strong> when prompted to connect to a network.</li><li>Complete the initial offline setup (language, system type, time, etc.) until the thermostat reaches the standard temperature home screen.</li><li>Hold the <strong>✓</strong> button for 3–5 seconds to enter the <strong>Admin Settings</strong> menu.</li><li>Select <strong>Join Network</strong> (or navigate to network settings to initiate pairing).</li><li>Enable <code>permit_join</code> in Zigbee2MQTT.</li></ol><p>The thermostat will pair cleanly to Zigbee2MQTT while retaining the standard home screen and fully functioning physical buttons, avoiding the &quot;go to the Smart Home app&quot; lock.</p><h3 id=\"wiring-centre-zones\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#wiring-centre-zones\"><span>Wiring centre zones</span></a></h3>", 12)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createBaseVNode("code", null, "wiring_centre_zones", -1)),
			_cache[9] || (_cache[9] = createTextVNode(" pairs the thermostat with zones of a wiring centre (KL08RF / it600WC) on the same Zigbee2MQTT network: the zone numbers 1 to 8 separated by commas, for example ", -1)),
			_cache[10] || (_cache[10] = createBaseVNode("code", null, "1,4", -1)),
			_cache[11] || (_cache[11] = createTextVNode(", and ", -1)),
			_cache[12] || (_cache[12] = createBaseVNode("code", null, "replace", -1)),
			_cache[13] || (_cache[13] = createTextVNode(" in front, for example ", -1)),
			_cache[14] || (_cache[14] = createBaseVNode("code", null, "replace 1,4", -1)),
			_cache[15] || (_cache[15] = createTextVNode(", to take over a zone that another thermostat holds. It is done when the wiring centre's zone table shows the thermostat in all the zones, and it fails if the table does not within 20 s per zone. There is no unpairing yet. Adding the wiring centre itself is on the ", -1)),
			createVNode(_component_RouteLink, { to: "/devices/KL08RF.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("KL08RF", -1)])]),
				_: 1
			}),
			_cache[16] || (_cache[16] = createTextVNode(" page.", -1))
		]),
		_cache[26] || (_cache[26] = createStaticVNode("<p>Underneath it sends the B47 command described in <a href=\"https://github.com/mikkelke/salus-zigbee/blob/main/PROTOCOL.md#7-wiring-centre-zone-pairing\" target=\"_blank\" rel=\"noopener noreferrer\">PROTOCOL.md section 7</a>. It was tested with a KL08RF on the same Zigbee2MQTT network: pairing, several zones, and the zone relays following the thermostats&#39; demand.</p><h3 id=\"clock\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#clock\"><span>Clock</span></a></h3><p>The thermostat gets its clock and summer time from Zigbee2MQTT, in the time zone Zigbee2MQTT runs in. In Docker that is UTC unless <code>TZ</code> is set, for example <code>TZ=Europe/Copenhagen</code>.</p><h3 id=\"slow-writes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#slow-writes\"><span>Slow writes</span></a></h3><p>The thermostat is a battery powered sleepy end device. A write waits until it next polls its parent, about every 7 s, so a change can take up to about 30 s to be confirmed.</p><h3 id=\"firmware-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#firmware-updates\"><span>Firmware updates</span></a></h3>", 6)),
		createBaseVNode("p", null, [
			_cache[18] || (_cache[18] = createTextVNode("The firmware images are standard Zigbee OTA files (manufacturer 0x1078, image type 0x7A). An update from 0x50 to 0x54 took about 1.5 h. If the image you want is not in the OTA index yet, add it to a ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html#using-custom-firmware-files-or-index" }, {
				default: withCtx(() => [..._cache[17] || (_cache[17] = [createTextVNode("local OTA index", -1)])]),
				_: 1
			}),
			_cache[19] || (_cache[19] = createTextVNode(".", -1))
		]),
		_cache[27] || (_cache[27] = createStaticVNode("<h3 id=\"temperature-resolution\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#temperature-resolution\"><span>Temperature resolution</span></a></h3><p>A factory new thermostat reports the temperature in 0.5 °C steps, the resolution of its display. The thermostat can be set to 0.1 °C. <code>display_resolution</code> shows which one is set and sets it, 0.5 or 0.1. It is an admin setting, written with the same B11 as <code>heat_control</code>. <code>min_heat_setpoint</code> and <code>max_heat_setpoint</code> are written the same way. <code>max_heat_setpoint</code> has been written on real thermostats; <code>min_heat_setpoint</code> has not been tried yet.</p><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 3)),
		createBaseVNode("p", null, [
			_cache[21] || (_cache[21] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[20] || (_cache[20] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[22] || (_cache[22] = createTextVNode(".", -1))
		]),
		_cache[28] || (_cache[28] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[23] || (_cache[23] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[29] || (_cache[29] = createStaticVNode("<ul><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"climate\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#climate\"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>40</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: &quot;VALUE&quot;}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>, <code>cool</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li></ul><h3 id=\"humidity-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#humidity-numeric\"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"child-lock-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#child-lock-binary\"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;VALUE&quot;}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id=\"wiring-centre-zones-list\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#wiring-centre-zones-list\"><span>Wiring centre zones (list)</span></a></h3><p>Pairs the thermostat with these wiring centre zones, taking them over from any other thermostat. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;wiring_centre_zones&quot;: []}</code></p>", 13))
	]);
}
var SQ610RFNH_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, SQ610RFNH_default as default };
