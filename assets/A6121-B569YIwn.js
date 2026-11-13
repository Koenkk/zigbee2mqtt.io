import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/A6121.md
var _pageData = JSON.parse("{\"path\":\"/devices/A6121.html\",\"title\":\"Xiaomi A6121 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Xiaomi A6121 control via MQTT\",\"description\":\"Integrate your Xiaomi A6121 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2019-07-22T20:08:17.000Z\"},\"filePathRelative\":\"devices/A6121.md\"}");
var _sfc_main = { name: "A6121.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "xiaomi-a6121",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#xiaomi-a6121"
		}, [createBaseVNode("span", null, "Xiaomi A6121")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "A6121")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Xiaomi" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Xiaomi", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Vima Smart Lock")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "inserted")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/A6121.png",
				alt: "Xiaomi A6121"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"remote-unlock\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#remote-unlock\"><span>Remote unlock</span></a></h3><p>Be aware that this smart does not offer remote unlock. Users will need the special keys it provides. You can then disable access for these keys, but this requires the app. In essence Zigbee2MQTT only provides the ability to know when a key was inserted.</p><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"inserted-text\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#inserted-text\"><span>Inserted (text)</span></a></h3><p>Value can be found in the published state on the <code>inserted</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>", 6))
	]);
}
var A6121_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, A6121_default as default };
