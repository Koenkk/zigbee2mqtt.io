import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/R12LM-Z10T.md
var _pageData = JSON.parse("{\"path\":\"/devices/R12LM-Z10T.html\",\"title\":\"Lincukoo R12LM-Z10T control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Lincukoo R12LM-Z10T control via MQTT\",\"description\":\"Integrate your Lincukoo R12LM-Z10T via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-01-31T13:10:42.000Z\"},\"filePathRelative\":\"devices/R12LM-Z10T.md\"}");
var _sfc_main = { name: "R12LM-Z10T.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "lincukoo-r12lm-z10t",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#lincukoo-r12lm-z10t"
		}, [createBaseVNode("span", null, "Lincukoo R12LM-Z10T")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "R12LM-Z10T")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Lincukoo" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Lincukoo", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Human motion & presence sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "presence, illuminance, work_mode, radar_switch, fading_time, detection_distance, radar_sensitivity, battery_state")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/R12LM-Z10T.png",
				alt: "Lincukoo R12LM-Z10T"
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><p><code>time_start</code>: Reply to Tuya-specific time synchronization requests: &quot;1970&quot; - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), &quot;2000&quot; - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), &quot;off&quot; - Don&#39;t reply (use if replying causes too much traffic). Default for this device: &quot;off&quot;. The value must be one of <code>1970</code>, <code>2000</code>, <code>off</code></p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"presence-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#presence-binary\"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id=\"illuminance-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#illuminance-numeric\"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id=\"work-mode-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#work-mode-enum\"><span>Work mode (enum)</span></a></h3><p>work mode of device. Value can be found in the published state on the <code>work_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;work_mode&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>radar_mode</code>, <code>combine_mode</code>.</p><h3 id=\"radar-switch-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#radar-switch-binary\"><span>Radar switch (binary)</span></a></h3><p>Radar switch. Value can be found in the published state on the <code>radar_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_switch&quot;: &quot;VALUE&quot;}</code>. If value equals <code>ON</code> radar switch is ON, if <code>OFF</code> OFF.</p><h3 id=\"fading-time-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#fading-time-numeric\"><span>Fading time (numeric)</span></a></h3><p>Fading time. Value can be found in the published state on the <code>fading_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fading_time&quot;: VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>60</code>. The unit of this value is <code>s</code>.</p><h3 id=\"detection-distance-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#detection-distance-numeric\"><span>Detection distance (numeric)</span></a></h3><p>Maximum range. Value can be found in the published state on the <code>detection_distance</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_distance&quot;: VALUE}</code>. The minimal value is <code>3</code> and the maximum value is <code>9</code>. The unit of this value is <code>m</code>.</p><h3 id=\"radar-sensitivity-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#radar-sensitivity-numeric\"><span>Radar sensitivity (numeric)</span></a></h3><p>Sensitivity of the radar. Value can be found in the published state on the <code>radar_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_sensitivity&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>4</code>.</p><h3 id=\"battery-state-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-state-enum\"><span>Battery state (enum)</span></a></h3><p>battery state of the sensor. Value can be found in the published state on the <code>battery_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>low</code>, <code>middle</code>, <code>high</code>, <code>usb</code>.</p>", 18))
	]);
}
var R12LM_Z10T_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, R12LM_Z10T_default as default };
