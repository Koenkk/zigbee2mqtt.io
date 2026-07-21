import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-BymFJaQ9.js";
import { t as _plugin_vue_export_helper_default } from "./app-IGTdvNBR.js";
//#region docs/devices/CK-TLSR8656-SS5-01(7000).md
var _pageData = JSON.parse("{\"path\":\"/devices/CK-TLSR8656-SS5-01(7000).html\",\"title\":\"eWeLink CK-TLSR8656-SS5-01(7000) control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"eWeLink CK-TLSR8656-SS5-01(7000) control via MQTT\",\"description\":\"Integrate your eWeLink CK-TLSR8656-SS5-01(7000) via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-03-01T20:31:41.000Z\"},\"git\":{},\"filePathRelative\":\"devices/CK-TLSR8656-SS5-01(7000).md\"}");
var _sfc_main = { name: "CK-TLSR8656-SS5-01(7000).md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "ewelink-ck-tlsr8656-ss5-01-7000",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ewelink-ck-tlsr8656-ss5-01-7000"
		}, [createBaseVNode("span", null, "eWeLink CK-TLSR8656-SS5-01(7000)")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "CK-TLSR8656-SS5-01(7000)")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=eWeLink" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("eWeLink", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Wireless button")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, voltage, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/CK-TLSR8656-SS5-01(7000).png",
				alt: "eWeLink CK-TLSR8656-SS5-01(7000)"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"voltage-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#voltage-numeric\"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>, <code>long</code>.</p>", 7))
	]);
}
var CK_TLSR8656_SS5_01_7000__default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, CK_TLSR8656_SS5_01_7000__default as default };
