import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/HY607W-3A.md
var _pageData = JSON.parse("{\"path\":\"/devices/HY607W-3A.html\",\"title\":\"Tuya HY607W-3A control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Tuya HY607W-3A control via MQTT\",\"description\":\"Integrate your Tuya HY607W-3A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-08-01T15:19:08.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":4}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"e5b8a5c972a08f7fb34dc1e589eb704a1e4ede88\",\"time\":1759262180000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 25.35.1\"},{\"hash\":\"a5f6e7e1ea21a8b16e513abb3cb588e04af2a26f\",\"time\":1756751284000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 25.14.0\"},{\"hash\":\"7e8e5c269c3198e10e5be1ee9a0b138873967e30\",\"time\":1754062598000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 24.11.0\"}]},\"filePathRelative\":\"devices/HY607W-3A.md\"}");
var _sfc_main = { name: "HY607W-3A.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "tuya-hy607w-3a",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#tuya-hy607w-3a"
		}, [createBaseVNode("span", null, "Tuya HY607W-3A")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "HY607W-3A")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Tuya" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Tuya", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Thermostat for gas boiler")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "climate (local_temperature, occupied_heating_setpoint), mode_state, state, running_state")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/HY607W-3A.png",
				alt: "Tuya HY607W-3A"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"climate\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#climate\"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>occupied_heating_setpoint</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li></ul><h3 id=\"mode-state-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#mode-state-enum\"><span>Mode state (enum)</span></a></h3><p>Thermostat mode: manual, auto, or temp_override. Value can be found in the published state on the <code>mode_state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode_state&quot;: NEW_VALUE}</code>. The possible values are: <code>manual</code>, <code>auto</code>, <code>temp_override</code>.</p><h3 id=\"state-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#state-binary\"><span>State (binary)</span></a></h3><p>ON/OFF thermostat. Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> state is ON, if <code>OFF</code> OFF.</p><h3 id=\"running-state-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#running-state-enum\"><span>Running state (enum)</span></a></h3><p>State of heating. Value can be found in the published state on the <code>running_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>idle</code>, <code>heat</code>.</p>", 10))
	]);
}
var HY607W_3A_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, HY607W_3A_default as default };
