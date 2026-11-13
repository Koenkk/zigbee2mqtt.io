import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/MS-DM-ZB.md
var _pageData = JSON.parse("{\"path\":\"/devices/MS-DM-ZB.html\",\"title\":\"Nova Digital MS-DM-ZB control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Nova Digital MS-DM-ZB control via MQTT\",\"description\":\"Integrate your Nova Digital MS-DM-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-09-03T18:55:24.000Z\"},\"filePathRelative\":\"devices/MS-DM-ZB.md\"}");
var _sfc_main = { name: "MS-DM-ZB.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "nova-digital-ms-dm-zb",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#nova-digital-ms-dm-zb"
		}, [createBaseVNode("span", null, "Nova Digital MS-DM-ZB")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "MS-DM-ZB")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Nova%20Digital" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Nova Digital", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee Module 1 channel Dimmer")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "light (state, brightness, min_brightness, max_brightness), countdown, switch_type, power_on_behavior")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/MS-DM-ZB.png",
				alt: "Nova Digital MS-DM-ZB"
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>time_start</code>: Reply to Tuya-specific time synchronization requests: &quot;1970&quot; - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), &quot;2000&quot; - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), &quot;off&quot; - Don&#39;t reply (use if replying causes too much traffic). Default for this device: &quot;off&quot;. The value must be one of <code>1970</code>, <code>2000</code>, <code>off</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"light\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#light\"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>min_brightness</code>, <code>max_brightness</code>.</p><ul><li><p><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p></li><li><p><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</p></li></ul><h3 id=\"countdown-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#countdown-numeric\"><span>Countdown (numeric)</span></a></h3><p>Toggle the device after a set duration (one time action). Value can be found in the published state on the <code>countdown</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id=\"switch-type-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch-type-enum\"><span>Switch type (enum)</span></a></h3><p>Type of the switch. Value can be found in the published state on the <code>switch_type</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>toggle</code>, <code>state</code>, <code>momentary</code>.</p><h3 id=\"power-on-behavior-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#power-on-behavior-enum\"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p>", 11))
	]);
}
var MS_DM_ZB_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, MS_DM_ZB_default as default };
