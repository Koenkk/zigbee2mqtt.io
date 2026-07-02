import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/E04CF-Z10T.md
var _pageData = JSON.parse("{\"path\":\"/devices/E04CF-Z10T.html\",\"title\":\"Lincukoo E04CF-Z10T control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Lincukoo E04CF-Z10T control via MQTT\",\"description\":\"Integrate your Lincukoo E04CF-Z10T via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-01-31T13:10:42.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"3849d031e5d90cb5023b0027a9cbc582961c61ed\",\"time\":1769866618000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"}]},\"filePathRelative\":\"devices/E04CF-Z10T.md\"}");
var _sfc_main = { name: "E04CF-Z10T.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "lincukoo-e04cf-z10t",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#lincukoo-e04cf-z10t"
		}, [createBaseVNode("span", null, "Lincukoo E04CF-Z10T")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "E04CF-Z10T")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Lincukoo" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Lincukoo", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Smart gas and CO sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "gas, co, set_max_gas_alarm, set_max_co_alarm, gas_sensor_state, co_state, self_checking, checking_result")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/E04CF-Z10T.png",
				alt: "Lincukoo E04CF-Z10T"
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>co_calibration</code>: Calibrates the co value (absolute offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"gas-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#gas-numeric\"><span>Gas (numeric)</span></a></h3><p>Current Gas Value. Value can be found in the published state on the <code>gas</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>20</code>. The unit of this value is <code>%LEL</code>.</p><h3 id=\"co-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#co-numeric\"><span>CO (numeric)</span></a></h3><p>The measured CO (carbon monoxide) value. Value can be found in the published state on the <code>co</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id=\"set-max-gas-alarm-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#set-max-gas-alarm-numeric\"><span>Set max gas alarm (numeric)</span></a></h3><p>Gas alarm value. Value can be found in the published state on the <code>set_max_gas_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;set_max_gas_alarm&quot;: NEW_VALUE}</code>. The minimal value is <code>0.1</code> and the maximum value is <code>20</code>. The unit of this value is <code>%LEL</code>.</p><h3 id=\"set-max-co-alarm-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#set-max-co-alarm-numeric\"><span>Set max co alarm (numeric)</span></a></h3><p>CO alarm value. Value can be found in the published state on the <code>set_max_co_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;set_max_co_alarm&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>1000</code>. The unit of this value is <code>ppm</code>.</p><h3 id=\"gas-sensor-state-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#gas-sensor-state-enum\"><span>Gas sensor state (enum)</span></a></h3><p>Gas alarm status. Value can be found in the published state on the <code>gas_sensor_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>normal</code>, <code>alarm</code>.</p><h3 id=\"co-state-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#co-state-enum\"><span>Co state (enum)</span></a></h3><p>CO alarm status. Value can be found in the published state on the <code>co_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>normal</code>, <code>alarm</code>.</p><h3 id=\"self-checking-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#self-checking-binary\"><span>Self checking (binary)</span></a></h3><p>self checking. Value can be found in the published state on the <code>self_checking</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;self_checking&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> self checking is ON, if <code>OFF</code> OFF.</p><h3 id=\"checking-result-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#checking-result-enum\"><span>Checking result (enum)</span></a></h3><p>checking result. Value can be found in the published state on the <code>checking_result</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>checking</code>, <code>check_success</code>, <code>check_failure</code>, <code>others</code>.</p>", 18))
	]);
}
var E04CF_Z10T_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, E04CF_Z10T_default as default };
