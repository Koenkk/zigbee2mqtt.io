import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/Silabs_series_2_router.md
var _pageData = JSON.parse("{\"path\":\"/devices/Silabs_series_2_router.html\",\"title\":\"Silabs Silabs series 2 router control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Silabs Silabs series 2 router control via MQTT\",\"description\":\"Integrate your Silabs Silabs series 2 router via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-01-03T20:11:48.000Z\"},\"filePathRelative\":\"devices/Silabs_series_2_router.md\"}");
var _sfc_main = { name: "Silabs_series_2_router.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "silabs-silabs-series-2-router",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#silabs-silabs-series-2-router"
		}, [createBaseVNode("span", null, "Silabs Silabs series 2 router")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "Silabs series 2 router")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Silabs" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Silabs", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Silabs series 2 adapter with router firmware")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "reset")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/Silabs-series-2-router.png",
				alt: "Silabs Silabs series 2 router"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"reset-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#reset-enum\"><span>Reset (enum)</span></a></h3><p>Resets and launches the bootloader for flashing. If USB, ensure the device is already connected to the machine where you intend to flash it before triggering this.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reset&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>reset</code>.</p>", 3))
	]);
}
var Silabs_series_2_router_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, Silabs_series_2_router_default as default };
