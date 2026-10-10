import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-BzB4pT90.js";
import { t as _plugin_vue_export_helper_default } from "./app-BtQrO_PE.js";
//#region docs/devices/ZAS-01P.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZAS-01P.html\",\"title\":\"Novato ZAS-01P control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Novato ZAS-01P control via MQTT\",\"description\":\"Integrate your Novato ZAS-01P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-09-29T18:29:03.108Z\"},\"git\":{\"updatedTime\":1790707998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"3f214b49bae2c8068a6a702f5711e2f46d2e6848\",\"time\":1790707998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"}]},\"filePathRelative\":\"devices/ZAS-01P.md\"}");
var _sfc_main = { name: "ZAS-01P.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "novato-zas-01p",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#novato-zas-01p"
		}, [createBaseVNode("span", null, "Novato ZAS-01P")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZAS-01P")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Novato" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Novato", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Smart siren with night light")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "alarm_state, volume, duration, melody, night_light, light_mode")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZAS-01P.png",
				alt: "Novato ZAS-01P"
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>time_start</code>: Reply to Tuya-specific time synchronization requests: &quot;1970&quot; - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), &quot;2000&quot; - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), &quot;off&quot; - Don&#39;t reply (use if replying causes too much traffic). Default for this device: &quot;off&quot;. The value must be one of <code>1970</code>, <code>2000</code>, <code>off</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"alarm-state-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#alarm-state-enum\"><span>Alarm state (enum)</span></a></h3><p>Trigger the alarm (sound, light or both) for the configured duration, or stop it with &#39;normal&#39;. Value can be found in the published state on the <code>alarm_state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_state&quot;: NEW_VALUE}</code>. The possible values are: <code>normal</code>, <code>alarm_sound</code>, <code>alarm_light</code>, <code>alarm_sound_light</code>.</p><h3 id=\"volume-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#volume-enum\"><span>Volume (enum)</span></a></h3><p>Alarm volume. Value can be found in the published state on the <code>volume</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;volume&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id=\"duration-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#duration-numeric\"><span>Duration (numeric)</span></a></h3><p>How long the alarm sounds for when triggered. Value can be found in the published state on the <code>duration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;duration&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>1800</code>. The unit of this value is <code>s</code>.</p><h3 id=\"melody-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#melody-enum\"><span>Melody (enum)</span></a></h3><p>Alarm melody. Value can be found in the published state on the <code>melody</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;melody&quot;: NEW_VALUE}</code>. The possible values are: <code>doorbell</code>, <code>alarm_1</code>, <code>alarm_2</code>, <code>alarm_clock</code>, <code>notification</code>, <code>countdown</code>, <code>emergency_button</code>, <code>fall_detected</code>, <code>equipment_moved</code>, <code>carbon_dioxide</code>, <code>circuit_breaker</code>, <code>door_open</code>, <code>window_open</code>, <code>air_quality</code>, <code>motion_detected</code>, <code>person_detected</code>, <code>camera</code>, <code>vibration</code>, <code>ambient_temperature</code>, <code>target_temperature_reached</code>, <code>heating</code>, <code>water_level_alarm</code>, <code>valve_closed</code>, <code>scheduled_task</code>, <code>door_lock_alarm</code>, <code>smoke_alarm</code>, <code>gas_alarm</code>, <code>low_battery</code>, <code>water_leak_alarm</code>, <code>device_offline</code>, <code>alarm_system_disarmed</code>, <code>alarm_system_armed</code>.</p><h3 id=\"night-light-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#night-light-binary\"><span>Night light (binary)</span></a></h3><p>Night light. Value can be found in the published state on the <code>night_light</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_light&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> night light is ON, if <code>OFF</code> OFF.</p><h3 id=\"light-mode-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#light-mode-enum\"><span>Light mode (enum)</span></a></h3><p>Light mode. Value can be found in the published state on the <code>light_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>breathing</code>, <code>red_flash</code>, <code>white</code>.</p>", 14))
	]);
}
var ZAS_01P_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, ZAS_01P_default as default };
