import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/NAS-AB06B2.md
var _pageData = JSON.parse("{\"path\":\"/devices/NAS-AB06B2.html\",\"title\":\"NEO NAS-AB06B2 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"NEO NAS-AB06B2 control via MQTT\",\"description\":\"Integrate your NEO NAS-AB06B2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2023-06-27T19:46:17.000Z\"},\"filePathRelative\":\"devices/NAS-AB06B2.md\"}");
var _sfc_main = { name: "NAS-AB06B2.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "neo-nas-ab06b2",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#neo-nas-ab06b2"
		}, [createBaseVNode("span", null, "NEO NAS-AB06B2")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "NAS-AB06B2")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=NEO" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("NEO", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Outdoor solar alarm")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "alarm_state, alarm_switch, tamper_alarm_switch, tamper_alarm, alarm_melody, alarm_mode, alarm_time, charging, battery")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/NAS-AB06B2.png",
				alt: "NEO NAS-AB06B2"
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>time_start</code>: Reply to Tuya-specific time synchronization requests: &quot;1970&quot; - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), &quot;2000&quot; - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), &quot;off&quot; - Don&#39;t reply (use if replying causes too much traffic). Default for this device: &quot;off&quot;. The value must be one of <code>1970</code>, <code>2000</code>, <code>off</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"alarm-state-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#alarm-state-enum\"><span>Alarm state (enum)</span></a></h3><p>Alarm status. Value can be found in the published state on the <code>alarm_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>alarm_sound</code>, <code>alarm_light</code>, <code>alarm_sound_light</code>, <code>no_alarm</code>.</p><h3 id=\"alarm-switch-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#alarm-switch-binary\"><span>Alarm switch (binary)</span></a></h3><p>Enable alarm. Value can be found in the published state on the <code>alarm_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_switch&quot;: &quot;VALUE&quot;}</code>. If value equals <code>ON</code> alarm switch is ON, if <code>OFF</code> OFF.</p><h3 id=\"tamper-alarm-switch-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#tamper-alarm-switch-binary\"><span>Tamper alarm switch (binary)</span></a></h3><p>Enable tamper alarm. Value can be found in the published state on the <code>tamper_alarm_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tamper_alarm_switch&quot;: &quot;VALUE&quot;}</code>. If value equals <code>ON</code> tamper alarm switch is ON, if <code>OFF</code> OFF.</p><h3 id=\"tamper-alarm-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#tamper-alarm-binary\"><span>Tamper alarm (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>ON</code> tamper alarm is ON, if <code>OFF</code> OFF.</p><h3 id=\"alarm-melody-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#alarm-melody-enum\"><span>Alarm melody (enum)</span></a></h3><p>Alarm sound effect. Value can be found in the published state on the <code>alarm_melody</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_melody&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>melody_1</code>, <code>melody_2</code>, <code>melody_3</code>.</p><h3 id=\"alarm-mode-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#alarm-mode-enum\"><span>Alarm mode (enum)</span></a></h3><p>Alarm mode. Value can be found in the published state on the <code>alarm_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_mode&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>alarm_sound</code>, <code>alarm_light</code>, <code>alarm_sound_light</code>.</p><h3 id=\"alarm-time-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#alarm-time-numeric\"><span>Alarm time (numeric)</span></a></h3><p>Alarm duration in minutes. Value can be found in the published state on the <code>alarm_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_time&quot;: VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>60</code>. The unit of this value is <code>min</code>.</p><h3 id=\"charging-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#charging-binary\"><span>Charging (binary)</span></a></h3><p>Charging status. Value can be found in the published state on the <code>charging</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> charging is ON, if <code>false</code> OFF.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>", 20))
	]);
}
var NAS_AB06B2_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, NAS_AB06B2_default as default };
