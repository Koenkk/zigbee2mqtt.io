import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/MINI-ZBRBS.md
var _pageData = JSON.parse("{\"path\":\"/devices/MINI-ZBRBS.html\",\"title\":\"SONOFF MINI-ZBRBS control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"SONOFF MINI-ZBRBS control via MQTT\",\"description\":\"Integrate your SONOFF MINI-ZBRBS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-09-30T19:37:28.000Z\"},\"filePathRelative\":\"devices/MINI-ZBRBS.md\"}");
var _sfc_main = { name: "MINI-ZBRBS.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "sonoff-mini-zbrbs",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#sonoff-mini-zbrbs"
		}, [createBaseVNode("span", null, "SONOFF MINI-ZBRBS")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "MINI-ZBRBS")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=SONOFF" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("SONOFF", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee smart roller shutter switch")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "cover (state, position), motor_travel_calibration_action, motor_travel_calibration_status, moving, external_trigger_mode")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/MINI-ZBRBS.png",
				alt: "SONOFF MINI-ZBRBS"
			})])], -1))
		])]),
		_cache[12] || (_cache[12] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><ul><li>Pairing the device is done by pressing the back button of the device for around 5 seconds.</li><li><strong>Automatic calibration</strong> can be triggered via Zigbee2MQTT by setting <code>motor_travel_calibration_action</code> to <code>start_automatic</code>. Alternatively, it can be initiated physically by holding the device button for around 10 seconds until the LED enters breathing mode; the device will then drive the motor through the full stroke automatically.</li><li><strong>Manual calibration</strong> via Zigbee2MQTT: <ol><li>Set <code>motor_travel_calibration_action</code> to <code>start_manual</code> to begin.</li><li>Move the cover to the fully open position, then set <code>motor_travel_calibration_action</code> to <code>manual_2_fully_opened</code>. The device will automatically start moving the cover toward the closed position.</li><li>Once the cover has reached the fully closed (end) position, set <code>motor_travel_calibration_action</code> to <code>manual_3_fully_closed</code>. Calibration is now complete.</li></ol></li><li>To reset the calibration, set <code>motor_travel_calibration_action</code> to <code>clear</code>.</li><li>The current calibration status can be read from <code>motor_travel_calibration_status</code> (<code>Uncalibrated</code> or <code>Calibrated</code>).</li><li>Percentage-based position control (<code>position</code>) requires a completed calibration.</li></ul><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 3)),
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
		_cache[14] || (_cache[14] = createStaticVNode("<ul><li><p><code>invert_cover</code>: Inverts the reported cover position and the state derived from it, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"cover\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cover\"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id=\"motor-travel-calibration-action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#motor-travel-calibration-action-enum\"><span>Motor travel calibration action (enum)</span></a></h3><p>Calibrates the motor stroke, or clears the current one.. Value can be found in the published state on the <code>motor_travel_calibration_action</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motor_travel_calibration_action&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_travel_calibration_action&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>none</code>, <code>start_automatic</code>, <code>start_manual</code>, <code>clear</code>, <code>manual_2_fully_opened</code>, <code>manual_3_fully_closed</code>.</p><h3 id=\"motor-travel-calibration-status-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#motor-travel-calibration-status-enum\"><span>Motor travel calibration status (enum)</span></a></h3><p>The calibration status of the curtain motor&#39;s stroke.. Value can be found in the published state on the <code>motor_travel_calibration_status</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motor_travel_calibration_status&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>Uncalibrated</code>, <code>Calibrated</code>.</p><h3 id=\"moving-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#moving-enum\"><span>Moving (enum)</span></a></h3><p>The motor&#39;s current operating status, such as forward rotation, reverse rotation, and stop.. Value can be found in the published state on the <code>moving</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;moving&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>stop</code>, <code>forward</code>, <code>reverse</code>.</p><h3 id=\"external-trigger-mode-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#external-trigger-mode-enum\"><span>External trigger mode (enum)</span></a></h3><p>External trigger mode, which can be one of edge, pulse, following(off), following(on). The appropriate triggering mode can be selected according to the type of external switch to achieve a better use experience.. Value can be found in the published state on the <code>external_trigger_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;external_trigger_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;external_trigger_mode&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>edge</code>, <code>pulse</code>, <code>following(off)</code>, <code>following(on)</code>.</p>", 12))
	]);
}
var MINI_ZBRBS_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, MINI_ZBRBS_default as default };
