import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/ZG-807ZL.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZG-807ZL.html\",\"title\":\"COOLO ZG-807ZL control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"COOLO ZG-807ZL control via MQTT\",\"description\":\"Integrate your COOLO ZG-807ZL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-03-31T18:43:56.000Z\"},\"filePathRelative\":\"devices/ZG-807ZL.md\"}");
var _sfc_main = { name: "ZG-807ZL.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "coolo-zg-807zl",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#coolo-zg-807zl"
		}, [createBaseVNode("span", null, "COOLO ZG-807ZL")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZG-807ZL")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=COOLO" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("COOLO", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "USB signal repeater")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZG-807ZL.png",
				alt: "COOLO ZG-807ZL"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createBaseVNode("h2", {
			id: "notes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#notes"
		}, [createBaseVNode("span", null, "Notes")])], -1)),
		_cache[9] || (_cache[9] = createBaseVNode("p", null, "To pair:", -1)),
		_cache[10] || (_cache[10] = createBaseVNode("ol", null, [createBaseVNode("li", null, "Press and hold the button for 3 seconds until the LED flash rapidly."), createBaseVNode("li", null, "LED will turn off when paired.")], -1)),
		_cache[11] || (_cache[11] = createBaseVNode("h2", {
			id: "exposes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#exposes"
		}, [createBaseVNode("span", null, "Exposes")])], -1))
	]);
}
var ZG_807ZL_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ZG_807ZL_default as default };
