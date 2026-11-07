import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/ZC0101.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZC0101.html\",\"title\":\"Multiterm ZC0101 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Multiterm ZC0101 control via MQTT\",\"description\":\"Integrate your Multiterm ZC0101 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-09-01T12:39:25.000Z\"},\"filePathRelative\":\"devices/ZC0101.md\"}");
var _sfc_main = { name: "ZC0101.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "multiterm-zc0101",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#multiterm-zc0101"
		}, [createBaseVNode("span", null, "Multiterm ZC0101")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZC0101")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Multiterm" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Multiterm", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "ZeeFan fan coil unit controller")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "fan (state, mode), silent_mode, heating_cooling, electric_valve")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZC0101.png",
				alt: "Multiterm ZC0101"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"fan-control-fan\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#fan-control-fan\"><span>Fan Control (fan)</span></a></h3><p>The current state of this fan is in the published state under the <code>fan_state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_state&quot;: &quot;ON&quot;}</code> or <code>{&quot;fan_state&quot;: &quot;OFF&quot;}</code>. To read the current state of this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;fan_state&quot;: &quot;&quot;}</code>. To change the mode publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_mode&quot;: &quot;VALUE&quot;}</code> where <code>VALUE</code> can be: <code>off</code>, <code>low</code>, <code>medium</code>, <code>high</code>, <code>on</code>.</p><h3 id=\"silent-mode-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#silent-mode-enum\"><span>Silent mode (enum)</span></a></h3><p>Value can be found in the published state on the <code>silent_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;silent_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silent_mode&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>inactive</code>, <code>active</code>.</p><h3 id=\"heating-cooling-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#heating-cooling-enum\"><span>Heating/Cooling (enum)</span></a></h3><p>Value can be found in the published state on the <code>heating_cooling</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;heating_cooling&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;heating_cooling&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>heating</code>, <code>cooling</code>.</p><h3 id=\"electric-valve-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#electric-valve-enum\"><span>Electric Valve (enum)</span></a></h3><p>Value can be found in the published state on the <code>electric_valve</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;electric_valve&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;electric_valve&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>off</code>, <code>on</code>.</p>", 9))
	]);
}
var ZC0101_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ZC0101_default as default };
