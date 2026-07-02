import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/V06-Z10T.md
var _pageData = JSON.parse("{\"path\":\"/devices/V06-Z10T.html\",\"title\":\"Lincukoo V06-Z10T control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Lincukoo V06-Z10T control via MQTT\",\"description\":\"Integrate your Lincukoo V06-Z10T via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-01-31T13:10:42.000Z\"},\"git\":{\"updatedTime\":1781031733000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"d394d999243c8ababa84bab8b31ebc09ce20c7c6\",\"time\":1781031733000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"3849d031e5d90cb5023b0027a9cbc582961c61ed\",\"time\":1769866618000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"}]},\"filePathRelative\":\"devices/V06-Z10T.md\"}");
var _sfc_main = { name: "V06-Z10T.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "lincukoo-v06-z10t",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#lincukoo-v06-z10t"
		}, [createBaseVNode("span", null, "Lincukoo V06-Z10T")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "V06-Z10T")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Lincukoo" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Lincukoo", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Mini vibration sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "alarm_status, sensitivity, dismiss_alarm, silent_mode, battery_state")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/V06-Z10T.png",
				alt: "Lincukoo V06-Z10T"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"alarm-status-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#alarm-status-enum\"><span>Alarm status (enum)</span></a></h3><p>Indicates when vibration is detected. Value can be found in the published state on the <code>alarm_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>normal</code>, <code>alarm</code>.</p><h3 id=\"sensitivity-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#sensitivity-enum\"><span>Sensitivity (enum)</span></a></h3><p>Sensitivity level of the sensor. Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>middle</code>, <code>high</code>.</p><h3 id=\"battery-state-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-state-enum\"><span>Battery state (enum)</span></a></h3><p>State of the battery. Value can be found in the published state on the <code>battery_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p>", 7))
	]);
}
var V06_Z10T_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, V06_Z10T_default as default };
