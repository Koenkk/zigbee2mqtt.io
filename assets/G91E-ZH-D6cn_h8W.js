import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/G91E-ZH.md
var _pageData = JSON.parse("{\"path\":\"/devices/G91E-ZH.html\",\"title\":\"Lincukoo G91E-ZH control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Lincukoo G91E-ZH control via MQTT\",\"description\":\"Integrate your Lincukoo G91E-ZH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-01-31T13:10:42.000Z\"},\"filePathRelative\":\"devices/G91E-ZH.md\"}");
var _sfc_main = { name: "G91E-ZH.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "lincukoo-g91e-zh",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#lincukoo-g91e-zh"
		}, [createBaseVNode("span", null, "Lincukoo G91E-ZH")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "G91E-ZH")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Lincukoo" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Lincukoo", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee Router")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/G91E-ZH.png",
				alt: "Lincukoo G91E-ZH"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createBaseVNode("h2", {
			id: "exposes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#exposes"
		}, [createBaseVNode("span", null, "Exposes")])], -1))
	]);
}
var G91E_ZH_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, G91E_ZH_default as default };
