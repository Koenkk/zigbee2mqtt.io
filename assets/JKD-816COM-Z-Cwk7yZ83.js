import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/JKD-816COM-Z.md
var _pageData = JSON.parse("{\"path\":\"/devices/JKD-816COM-Z.html\",\"title\":\"Tuya JKD-816COM-Z control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Tuya JKD-816COM-Z control via MQTT\",\"description\":\"Integrate your Tuya JKD-816COM-Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-01-31T13:20:01.000Z\"},\"filePathRelative\":\"devices/JKD-816COM-Z.md\"}");
var _sfc_main = { name: "JKD-816COM-Z.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "tuya-jkd-816com-z",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#tuya-jkd-816com-z"
		}, [createBaseVNode("span", null, "Tuya JKD-816COM-Z")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "JKD-816COM-Z")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Tuya" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Tuya", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Carbon monoxide & gas sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "carbon_monoxide, co, gas, gas_value, silence, self_test, fault")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/JKD-816COM-Z.png",
				alt: "Tuya JKD-816COM-Z"
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><p><code>time_start</code>: Reply to Tuya-specific time synchronization requests: &quot;1970&quot; - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), &quot;2000&quot; - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), &quot;off&quot; - Don&#39;t reply (use if replying causes too much traffic). Default for this device: &quot;off&quot;. The value must be one of <code>1970</code>, <code>2000</code>, <code>off</code></p></li><li><p><code>co_calibration</code>: Calibrates the co value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"carbon-monoxide-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#carbon-monoxide-binary\"><span>Carbon monoxide (binary)</span></a></h3><p>Indicates if CO (carbon monoxide) is detected. Value can be found in the published state on the <code>carbon_monoxide</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> carbon monoxide is ON, if <code>false</code> OFF.</p><h3 id=\"co-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#co-numeric\"><span>CO (numeric)</span></a></h3><p>The measured CO (carbon monoxide) value. Value can be found in the published state on the <code>co</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id=\"gas-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#gas-binary\"><span>Gas (binary)</span></a></h3><p>Indicates whether the device detected gas. Value can be found in the published state on the <code>gas</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> gas is ON, if <code>false</code> OFF.</p><h3 id=\"gas-value-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#gas-value-numeric\"><span>Gas value (numeric)</span></a></h3><p>Measured gas concentration. Value can be found in the published state on the <code>gas_value</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>LEL</code>.</p><h3 id=\"silence-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#silence-binary\"><span>Silence (binary)</span></a></h3><p>Mute the alarm buzzer. Value can be found in the published state on the <code>silence</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silence&quot;: VALUE}</code>. If value equals <code>true</code> silence is ON, if <code>false</code> OFF.</p><h3 id=\"self-test-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#self-test-enum\"><span>Self test (enum)</span></a></h3><p>Value can be found in the published state on the <code>self_test</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>checking</code>, <code>check_success</code>, <code>check_failure</code>, <code>others</code>.</p><h3 id=\"fault-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#fault-enum\"><span>Fault (enum)</span></a></h3><p>Fault status of the device (none = no fault). Value can be found in the published state on the <code>fault</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>fault</code>, <code>serious_fault</code>, <code>sensor_fault</code>, <code>probe_fault</code>, <code>power_fault</code>.</p>", 16))
	]);
}
var JKD_816COM_Z_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, JKD_816COM_Z_default as default };
