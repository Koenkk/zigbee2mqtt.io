import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-D6Jmich1.js";
import { t as _plugin_vue_export_helper_default } from "./app-DRb3XOJL.js";
//#region docs/devices/KM6839.md
var _pageData = JSON.parse("{\"path\":\"/devices/KM6839.html\",\"title\":\"Miele KM6839 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Miele KM6839 control via MQTT\",\"description\":\"Integrate your Miele KM6839 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-09-19T00:00:00.000Z\"},\"git\":{\"updatedTime\":1789883705000,\"contributors\":[{\"name\":\"James Brown\",\"username\":\"\",\"email\":\"james@catch22.net\",\"commits\":1}],\"changelog\":[{\"hash\":\"321aea042e54b91415ecae089a93e4b6a0fcaf09\",\"time\":1789883705000,\"email\":\"james@catch22.net\",\"author\":\"James Brown\",\"message\":\"New device - Miele KM6839 (#5539)\"}]},\"filePathRelative\":\"devices/KM6839.md\"}");
var _sfc_main = { name: "KM6839.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "miele-km6839",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#miele-km6839"
		}, [createBaseVNode("span", null, "Miele KM6839")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "KM6839")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Miele" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Miele", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "KM6839 induction hob")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "zone_count, active_zones, hob_power, extractor_demand, zone_0_state, zone_0_power, zone_0_mode, zone_1_state, zone_1_power, zone_1_mode, zone_2_state, zone_2_power, zone_2_mode, zone_3_state, zone_3_power, zone_3_mode")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/KM6839.png",
				alt: "Miele KM6839"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createBaseVNode("h2", {
			id: "notes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#notes"
		}, [createBaseVNode("span", null, "Notes")])], -1)),
		_cache[9] || (_cache[9] = createBaseVNode("h3", {
			id: "coordinator-endpoint",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#coordinator-endpoint"
		}, [createBaseVNode("span", null, "Coordinator endpoint")])], -1)),
		_cache[10] || (_cache[10] = createBaseVNode("p", null, "This hob uses Miele's private Zigbee profile for live telemetry. Some adapters may require coordinator-side support for a Miele gateway endpoint before the hob starts reporting cooking-zone updates.", -1)),
		_cache[11] || (_cache[11] = createBaseVNode("p", null, [
			createTextVNode("When the coordinator endpoint is available, the hob publishes per-zone state, power and mode, plus aggregate "),
			createBaseVNode("code", null, "hob_power"),
			createTextVNode(" and "),
			createBaseVNode("code", null, "extractor_demand"),
			createTextVNode(" values which can be used by MQTT automations, for example to control an extractor fan.")
		], -1))
	]);
}
var KM6839_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, KM6839_default as default };
