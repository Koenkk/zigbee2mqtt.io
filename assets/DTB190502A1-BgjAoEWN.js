import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/DTB190502A1.md
var _pageData = JSON.parse("{\"path\":\"/devices/DTB190502A1.html\",\"title\":\"databyte.ch DTB190502A1 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"databyte.ch DTB190502A1 control via MQTT\",\"description\":\"Integrate your databyte.ch DTB190502A1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2019-09-08T21:16:00.000Z\"},\"filePathRelative\":\"devices/DTB190502A1.md\"}");
var _sfc_main = { name: "DTB190502A1.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "databyte-ch-dtb190502a1",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#databyte-ch-dtb190502a1"
		}, [createBaseVNode("span", null, "databyte.ch DTB190502A1")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "DTB190502A1")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=databyte.ch" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("databyte.ch", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "CC2530 based IO Board")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "led_state, key_state")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/DTB190502A1.png",
				alt: "databyte.ch DTB190502A1"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"link\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#link\"><span>Link</span></a></h3><p>More information about this devices can be found here: https://databyte.ch/project/zigbee-erstes-board-dtb190502a</p><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"led-state-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#led-state-binary\"><span>Led state (binary)</span></a></h3><p>Value can be found in the published state on the <code>led_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>ON</code> led state is ON, if <code>OFF</code> OFF.</p><h3 id=\"key-state-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#key-state-enum\"><span>Key state (enum)</span></a></h3><p>Value can be found in the published state on the <code>key_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>KEY_SYS</code>, <code>KEY_UP</code>, <code>KEY_DOWN</code>, <code>KEY_NONE</code>.</p>", 8))
	]);
}
var DTB190502A1_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, DTB190502A1_default as default };
