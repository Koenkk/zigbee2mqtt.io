import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/SIN-4-RS-20.md
var _pageData = JSON.parse("{\"path\":\"/devices/SIN-4-RS-20.html\",\"title\":\"NodOn SIN-4-RS-20 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"NodOn SIN-4-RS-20 control via MQTT\",\"description\":\"Integrate your NodOn SIN-4-RS-20 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2022-01-31T17:42:44.000Z\"},\"filePathRelative\":\"devices/SIN-4-RS-20.md\"}");
var _sfc_main = { name: "SIN-4-RS-20.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "nodon-sin-4-rs-20",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#nodon-sin-4-rs-20"
		}, [createBaseVNode("span", null, "NodOn SIN-4-RS-20")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "SIN-4-RS-20")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=NodOn" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("NodOn", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Roller shutter relay switch")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "cover (state, position, tilt), cover_mode, calibration_vertical_run_time_up, calibration_vertical_run_time_down, calibration_rotation_run_time_up, calibration_rotation_run_time_down")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/SIN-4-RS-20.png",
				alt: "NodOn SIN-4-RS-20"
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
		_cache[14] || (_cache[14] = createStaticVNode("<ul><li><p><code>invert_cover</code>: Inverts the reported cover position and the state derived from it, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"cover\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cover\"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>. To change the tilt publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tilt&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id=\"cover-mode-composite\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cover-mode-composite\"><span>Cover mode (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cover_mode&quot;: {&quot;reversed&quot;: VALUE, &quot;calibration&quot;: VALUE, &quot;maintenance&quot;: VALUE, &quot;led&quot;: VALUE}}</code> To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;cover_mode&quot;: &quot;&quot;}</code>.</p><ul><li><code>reversed</code> (binary): Reversal of the motor rotating direction allowed values: <code>true</code> or <code>false</code></li><li><code>calibration</code> (binary): Set the cover calibration mode allowed values: <code>true</code> or <code>false</code></li><li><code>maintenance</code> (binary): Set the cover maintenance mode, enabling will disable the cover motor allowed values: <code>true</code> or <code>false</code></li><li><code>led</code> (binary): Set the LED allowed values: <code>true</code> or <code>false</code></li></ul><h3 id=\"calibration-vertical-run-time-up-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#calibration-vertical-run-time-up-numeric\"><span>Calibration vertical run time up (numeric)</span></a></h3><p>Manuel calibration: Set vertical run time up of the roller shutter. Do not change it if your roller shutter is already calibrated.. Value can be found in the published state on the <code>calibration_vertical_run_time_up</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_vertical_run_time_up&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_vertical_run_time_up&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>10 ms</code>.</p><h3 id=\"calibration-vertical-run-time-down-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#calibration-vertical-run-time-down-numeric\"><span>Calibration vertical run time down (numeric)</span></a></h3><p>Manuel calibration: Set vertical run time down of the roller shutter. Do not change it if your roller shutter is already calibrated.. Value can be found in the published state on the <code>calibration_vertical_run_time_down</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_vertical_run_time_down&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_vertical_run_time_down&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>10 ms</code>.</p><h3 id=\"calibration-rotation-run-time-up-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#calibration-rotation-run-time-up-numeric\"><span>Calibration rotation run time up (numeric)</span></a></h3><p>Manuel calibration: Set rotation run time up of the roller shutter. Do not change it if your roller shutter is already calibrated.. Value can be found in the published state on the <code>calibration_rotation_run_time_up</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_rotation_run_time_up&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_rotation_run_time_up&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>ms</code>.</p><h3 id=\"calibration-rotation-run-time-down-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#calibration-rotation-run-time-down-numeric\"><span>Calibration rotation run time down (numeric)</span></a></h3><p>Manuel calibration: Set rotation run time down of the roller shutter. Do not change it if your roller shutter is already calibrated.. Value can be found in the published state on the <code>calibration_rotation_run_time_down</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_rotation_run_time_down&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_rotation_run_time_down&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>ms</code>.</p>", 15))
	]);
}
var SIN_4_RS_20_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, SIN_4_RS_20_default as default };
