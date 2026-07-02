import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/ZB-DG03.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZB-DG03.html\",\"title\":\"Spacetronik ZB-DG03 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Spacetronik ZB-DG03 control via MQTT\",\"description\":\"Integrate your Spacetronik ZB-DG03 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-10-31T19:12:27.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"4bcdfb05f5f3ced7c7de977df54ce26b3c67c5a7\",\"time\":1761938408000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 25.58.0\"}]},\"filePathRelative\":\"devices/ZB-DG03.md\"}");
var _sfc_main = { name: "ZB-DG03.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "spacetronik-zb-dg03",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#spacetronik-zb-dg03"
		}, [createBaseVNode("span", null, "Spacetronik ZB-DG03")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZB-DG03")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Spacetronik" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Spacetronik", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "LPG gas sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "gas, preheat, fault, lifecycle")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZB-DG03.png",
				alt: "Spacetronik ZB-DG03"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"gas-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#gas-binary\"><span>Gas (binary)</span></a></h3><p>Indicates whether the device detected gas. Value can be found in the published state on the <code>gas</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> gas is ON, if <code>false</code> OFF.</p><h3 id=\"preheat-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#preheat-binary\"><span>Preheat (binary)</span></a></h3><p>Sensor preheat active. Value can be found in the published state on the <code>preheat</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> preheat is ON, if <code>false</code> OFF.</p><h3 id=\"fault-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#fault-enum\"><span>Fault (enum)</span></a></h3><p>Fault status of the device (none = no fault). Value can be found in the published state on the <code>fault</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>fault</code>, <code>serious_fault</code>, <code>sensor_fault</code>, <code>probe_fault</code>, <code>power_fault</code>.</p><h3 id=\"lifecycle-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#lifecycle-binary\"><span>Lifecycle (binary)</span></a></h3><p>Sensor lifetime limit. Value can be found in the published state on the <code>lifecycle</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> lifecycle is ON, if <code>false</code> OFF.</p>", 9))
	]);
}
var ZB_DG03_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, ZB_DG03_default as default };
