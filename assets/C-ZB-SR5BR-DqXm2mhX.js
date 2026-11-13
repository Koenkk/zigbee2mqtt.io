import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/C-ZB-SR5BR.md
var _pageData = JSON.parse("{\"path\":\"/devices/C-ZB-SR5BR.html\",\"title\":\"Candeo C-ZB-SR5BR control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Candeo C-ZB-SR5BR control via MQTT\",\"description\":\"Integrate your Candeo C-ZB-SR5BR via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-07-01T17:54:38.000Z\"},\"filePathRelative\":\"devices/C-ZB-SR5BR.md\"}");
var _sfc_main = { name: "C-ZB-SR5BR.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "candeo-c-zb-sr5br",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#candeo-c-zb-sr5br"
		}, [createBaseVNode("span", null, "Candeo C-ZB-SR5BR")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "C-ZB-SR5BR")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Candeo" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Candeo", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee scene switch remote - 5 button rotary")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/C-ZB-SR5BR.png",
				alt: "Candeo C-ZB-SR5BR"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>To pair, press the centre button 5 times quickly, followed by a long 6th press (3 seconds). The device will reset and then remain in pairing mode for 3 minutes, during which time the LED will flash red.</p><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>button_1_click</code>, <code>button_1_double_click</code>, <code>button_1_hold</code>, <code>button_1_release</code>, <code>button_2_click</code>, <code>button_2_double_click</code>, <code>button_2_hold</code>, <code>button_2_release</code>, <code>button_3_click</code>, <code>button_3_double_click</code>, <code>button_3_hold</code>, <code>button_3_release</code>, <code>button_4_click</code>, <code>button_4_double_click</code>, <code>button_4_hold</code>, <code>button_4_release</code>, <code>centre_button_click</code>, <code>centre_button_double_click</code>, <code>centre_button_hold</code>, <code>centre_button_release</code>, <code>started_rotating_left</code>, <code>continued_rotating_left</code>, <code>stopped_rotating_left</code>, <code>started_rotating_right</code>, <code>continued_rotating_right</code>, <code>stopped_rotating_right</code>.</p>", 8))
	]);
}
var C_ZB_SR5BR_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, C_ZB_SR5BR_default as default };
