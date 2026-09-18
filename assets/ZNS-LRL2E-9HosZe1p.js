import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-D6Jmich1.js";
import { t as _plugin_vue_export_helper_default } from "./app-UAAeMrgH.js";
//#region docs/devices/ZNS-LRL2E.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZNS-LRL2E.html\",\"title\":\"Zemismart ZNS-LRL2E control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Zemismart ZNS-LRL2E control via MQTT\",\"description\":\"Integrate your Zemismart ZNS-LRL2E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-09-12T00:00:00.000Z\"},\"git\":{\"updatedTime\":1789365666000,\"contributors\":[{\"name\":\"Craig Dean\",\"username\":\"\",\"email\":\"thargy@yahoo.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"52c655ab2cf53e2d19dc0847ec771cc438213e85\",\"time\":1789365666000,\"email\":\"thargy@yahoo.com\",\"author\":\"Craig Dean\",\"message\":\"docs: add Zemismart ZNS-LRL2E device documentation (#5513)\"}]},\"filePathRelative\":\"devices/ZNS-LRL2E.md\"}");
var _sfc_main = { name: "ZNS-LRL2E.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "zemismart-zns-lrl2e",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#zemismart-zns-lrl2e"
		}, [createBaseVNode("span", null, "Zemismart ZNS-LRL2E")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZNS-LRL2E")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Zemismart" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Zemismart", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "30A immersion switch")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "switch (state)")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZNS-LRL2E.png",
				alt: "Zemismart ZNS-LRL2E"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><ul><li>Zigbee2MQTT exposes this device as a switch.</li><li>The observed Tuya datapoint is DP 1, which reports the relay state as on/off.</li><li>No metering datapoints were observed during testing; current, voltage, power, and energy are not exposed.</li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"switch\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch\"><span>Switch</span></a></h3><p>This switch supports the following features: <code>state</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code> or <code>{&quot;state&quot;: &quot;OFF&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li></ul>", 6))
	]);
}
var ZNS_LRL2E_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, ZNS_LRL2E_default as default };
