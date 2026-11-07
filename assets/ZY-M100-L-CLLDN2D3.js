import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/ZY-M100-L.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZY-M100-L.html\",\"title\":\"Tuya ZY-M100-L control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Tuya ZY-M100-L control via MQTT\",\"description\":\"Integrate your Tuya ZY-M100-L via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2023-06-27T19:46:17.000Z\"},\"filePathRelative\":\"devices/ZY-M100-L.md\"}");
var _sfc_main = { name: "ZY-M100-L.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "tuya-zy-m100-l",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#tuya-zy-m100-l"
		}, [createBaseVNode("span", null, "Tuya ZY-M100-L")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZY-M100-L")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Tuya" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Tuya", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Ceiling human breathe sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "illuminance, presence, target_distance, radar_sensitivity, minimum_range, maximum_range, detection_delay, fading_time, self_test")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZY-M100-L.png",
				alt: "Tuya ZY-M100-L"
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"illuminance-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#illuminance-numeric\"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id=\"presence-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#presence-binary\"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id=\"target-distance-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#target-distance-numeric\"><span>Target distance (numeric)</span></a></h3><p>Distance to target. Value can be found in the published state on the <code>target_distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>m</code>.</p><h3 id=\"radar-sensitivity-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#radar-sensitivity-numeric\"><span>Radar sensitivity (numeric)</span></a></h3><p>sensitivity of the radar. Value can be found in the published state on the <code>radar_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_sensitivity&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>9</code>.</p><h3 id=\"minimum-range-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#minimum-range-numeric\"><span>Minimum range (numeric)</span></a></h3><p>Minimum range. Value can be found in the published state on the <code>minimum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;minimum_range&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>9.5</code>. The unit of this value is <code>m</code>.</p><h3 id=\"maximum-range-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#maximum-range-numeric\"><span>Maximum range (numeric)</span></a></h3><p>Maximum range. Value can be found in the published state on the <code>maximum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;maximum_range&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>9.5</code>. The unit of this value is <code>m</code>.</p><h3 id=\"detection-delay-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#detection-delay-numeric\"><span>Detection delay (numeric)</span></a></h3><p>Detection delay. Value can be found in the published state on the <code>detection_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_delay&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>s</code>.</p><h3 id=\"fading-time-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#fading-time-numeric\"><span>Fading time (numeric)</span></a></h3><p>Fading time. Value can be found in the published state on the <code>fading_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fading_time&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1500</code>. The unit of this value is <code>s</code>.</p><h3 id=\"self-test-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#self-test-enum\"><span>Self test (enum)</span></a></h3><p>Self_test, possible results: checking, check_success, check_failure, others, comm_fault, radar_fault.. Value can be found in the published state on the <code>self_test</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>checking</code>, <code>check_success</code>, <code>check_failure</code>, <code>others</code>, <code>comm_fault</code>, <code>radar_fault</code>.</p>", 20))
	]);
}
var ZY_M100_L_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ZY_M100_L_default as default };
