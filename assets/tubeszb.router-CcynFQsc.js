import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/tubeszb.router.md
var _pageData = JSON.parse("{\"path\":\"/devices/tubeszb.router.html\",\"title\":\"TubesZB tubeszb.router control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"TubesZB tubeszb.router control via MQTT\",\"description\":\"Integrate your TubesZB tubeszb.router via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2022-01-31T17:42:44.000Z\"},\"filePathRelative\":\"devices/tubeszb.router.md\"}");
var _sfc_main = { name: "tubeszb.router.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "tubeszb-tubeszb-router",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#tubeszb-tubeszb-router"
		}, [createBaseVNode("span", null, "TubesZB tubeszb.router")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "tubeszb.router")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=TubesZB" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("TubesZB", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "CC2652 Router")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/tubeszb.router.png",
				alt: "TubesZB tubeszb.router"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><p><a href=\"https://github.com/tube0013/tube_gateways/tree/main/tube_cc_router\" target=\"_blank\" rel=\"noopener noreferrer\">CC2652 Router</a></p><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2>", 3))
	]);
}
var tubeszb_router_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, tubeszb_router_default as default };
