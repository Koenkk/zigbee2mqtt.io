import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/ZY-M100-24GV3.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZY-M100-24GV3.html\",\"title\":\"Tuya ZY-M100-24GV3 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Tuya ZY-M100-24GV3 control via MQTT\",\"description\":\"Integrate your Tuya ZY-M100-24GV3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-09-01T12:36:44.000Z\"},\"filePathRelative\":\"devices/ZY-M100-24GV3.md\"}");
var _sfc_main = { name: "ZY-M100-24GV3.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "tuya-zy-m100-24gv3",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#tuya-zy-m100-24gv3"
		}, [createBaseVNode("span", null, "Tuya ZY-M100-24GV3")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZY-M100-24GV3")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Tuya" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Tuya", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "24G MmWave radar human presence motion sensor (added distance switch)")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "state, presence, distance, find_switch, illuminance, move_sensitivity, presence_sensitivity, presence_timeout, detection_distance_min, detection_distance_max")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZY-M100-24GV3.png",
				alt: "Tuya ZY-M100-24GV3"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createBaseVNode("h2", {
			id: "spammy",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#spammy"
		}, [createBaseVNode("span", null, "Spammy")])], -1)),
		_cache[10] || (_cache[10] = createBaseVNode("p", null, "Note that this device is very spammy (1-6 messages per second per device) which can hamper network performance.", -1)),
		_cache[11] || (_cache[11] = createBaseVNode("h2", {
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
		_cache[12] || (_cache[12] = createStaticVNode("<ul><li><p><code>time_start</code>: Reply to Tuya-specific time synchronization requests: &quot;1970&quot; - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), &quot;2000&quot; - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), &quot;off&quot; - Don&#39;t reply (use if replying causes too much traffic). Default for this device: &quot;off&quot;. The value must be one of <code>1970</code>, <code>2000</code>, <code>off</code></p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"state-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#state-enum\"><span>State (enum)</span></a></h3><p>Presence state sensor. Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>presence</code>, <code>move</code>.</p><h3 id=\"presence-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#presence-binary\"><span>Presence (binary)</span></a></h3><p>Occupancy. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id=\"distance-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#distance-numeric\"><span>Distance (numeric)</span></a></h3><p>Target distance. Value can be found in the published state on the <code>distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>m</code>.</p><h3 id=\"find-switch-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#find-switch-binary\"><span>Find switch (binary)</span></a></h3><p>distance switch. Value can be found in the published state on the <code>find_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;find_switch&quot;: &quot;VALUE&quot;}</code>. If value equals <code>ON</code> find switch is ON, if <code>OFF</code> OFF.</p><h3 id=\"illuminance-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#illuminance-numeric\"><span>Illuminance (numeric)</span></a></h3><p>Illuminance sensor. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id=\"move-sensitivity-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#move-sensitivity-numeric\"><span>Move sensitivity (numeric)</span></a></h3><p>Motion Sensitivity. Value can be found in the published state on the <code>move_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;move_sensitivity&quot;: VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>.</p><h3 id=\"presence-sensitivity-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#presence-sensitivity-numeric\"><span>Presence sensitivity (numeric)</span></a></h3><p>Presence Sensitivity. Value can be found in the published state on the <code>presence_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_sensitivity&quot;: VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>.</p><h3 id=\"presence-timeout-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#presence-timeout-numeric\"><span>Presence timeout (numeric)</span></a></h3><p>Fade time. Value can be found in the published state on the <code>presence_timeout</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_timeout&quot;: VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>15000</code>. The unit of this value is <code>s</code>.</p><h3 id=\"detection-distance-min-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#detection-distance-min-numeric\"><span>Detection distance min (numeric)</span></a></h3><p>Minimum range. Value can be found in the published state on the <code>detection_distance_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_distance_min&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>8.25</code>. The unit of this value is <code>m</code>.</p><h3 id=\"detection-distance-max-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#detection-distance-max-numeric\"><span>Detection distance max (numeric)</span></a></h3><p>Maximum range. Value can be found in the published state on the <code>detection_distance_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_distance_max&quot;: VALUE}</code>. The minimal value is <code>0.75</code> and the maximum value is <code>9</code>. The unit of this value is <code>m</code>.</p>", 22))
	]);
}
var ZY_M100_24GV3_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ZY_M100_24GV3_default as default };
