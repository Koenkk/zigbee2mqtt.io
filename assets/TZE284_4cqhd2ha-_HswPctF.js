import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/TZE284_4cqhd2ha.md
var _pageData = JSON.parse("{\"path\":\"/devices/TZE284_4cqhd2ha.html\",\"title\":\"Girier TZE284_4cqhd2ha control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Girier TZE284_4cqhd2ha control via MQTT\",\"description\":\"Integrate your Girier TZE284_4cqhd2ha via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-10-31T19:12:27.000Z\"},\"filePathRelative\":\"devices/TZE284_4cqhd2ha.md\"}");
var _sfc_main = { name: "TZE284_4cqhd2ha.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "girier-tze284-4cqhd2ha",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#girier-tze284-4cqhd2ha"
		}, [createBaseVNode("span", null, "Girier TZE284_4cqhd2ha")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "TZE284_4cqhd2ha")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Girier" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Girier", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Vibration sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "vibration, sensitivity, buzzer_mute")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/TZE284_4cqhd2ha.png",
				alt: "Girier TZE284_4cqhd2ha"
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>time_start</code>: Reply to Tuya-specific time synchronization requests: &quot;1970&quot; - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), &quot;2000&quot; - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), &quot;off&quot; - Don&#39;t reply (use if replying causes too much traffic). Default for this device: &quot;off&quot;. The value must be one of <code>1970</code>, <code>2000</code>, <code>off</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"vibration-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#vibration-binary\"><span>Vibration (binary)</span></a></h3><p>Indicates whether the device detected vibration. Value can be found in the published state on the <code>vibration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> vibration is ON, if <code>false</code> OFF.</p><h3 id=\"sensitivity-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#sensitivity-numeric\"><span>Sensitivity (numeric)</span></a></h3><p>Sensitivity of the sensor (single press the button when muted to switch between low (one beep), medium (two beeps) and max (three beeps)). Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>2</code>.</p><h3 id=\"buzzer-mute-text\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#buzzer-mute-text\"><span>Buzzer mute (text)</span></a></h3><p>ON when buzzer is muted (double press the button on device to toggle). Value can be found in the published state on the <code>buzzer_mute</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>", 8))
	]);
}
var TZE284_4cqhd2ha_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, TZE284_4cqhd2ha_default as default };
