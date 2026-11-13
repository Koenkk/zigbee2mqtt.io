import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/Y1_IN.md
var _pageData = JSON.parse("{\"path\":\"/devices/Y1_IN.html\",\"title\":\"Tuya Y1_IN control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Tuya Y1_IN control via MQTT\",\"description\":\"Integrate your Tuya Y1_IN via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-10-31T20:34:53.000Z\"},\"filePathRelative\":\"devices/Y1_IN.md\"}");
var _sfc_main = { name: "Y1_IN.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "tuya-y1-in",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#tuya-y1-in"
		}, [createBaseVNode("span", null, "Tuya Y1_IN")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "Y1_IN")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Tuya" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Tuya", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Smart human presence sensor 24G")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "presence, illuminance, keep_sensitivity, trigger_sensitivity, fading_time, target_distance")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/Y1_IN.png",
				alt: "Tuya Y1_IN"
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><p><code>time_start</code>: Reply to Tuya-specific time synchronization requests: &quot;1970&quot; - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), &quot;2000&quot; - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), &quot;off&quot; - Don&#39;t reply (use if replying causes too much traffic). Default for this device: &quot;off&quot;. The value must be one of <code>1970</code>, <code>2000</code>, <code>off</code></p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"presence-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#presence-binary\"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id=\"illuminance-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#illuminance-numeric\"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id=\"keep-sensitivity-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#keep-sensitivity-numeric\"><span>Keep sensitivity (numeric)</span></a></h3><p>Keep sensitivity. Value can be found in the published state on the <code>keep_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keep_sensitivity&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>.</p><h3 id=\"trigger-sensitivity-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#trigger-sensitivity-numeric\"><span>Trigger sensitivity (numeric)</span></a></h3><p>Trigger sensitivity. Value can be found in the published state on the <code>trigger_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;trigger_sensitivity&quot;: VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>20</code>.</p><h3 id=\"fading-time-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#fading-time-numeric\"><span>Fading time (numeric)</span></a></h3><p>Presence timeout. Value can be found in the published state on the <code>fading_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fading_time&quot;: VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>60</code>. The unit of this value is <code>s</code>.</p><h3 id=\"target-distance-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#target-distance-numeric\"><span>Target distance (numeric)</span></a></h3><p>Distance to target. Value can be found in the published state on the <code>target_distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>m</code>.</p>", 14))
	]);
}
var Y1_IN_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, Y1_IN_default as default };
