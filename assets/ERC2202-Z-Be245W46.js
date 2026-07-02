import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/ERC2202-Z.md
var _pageData = JSON.parse("{\"path\":\"/devices/ERC2202-Z.html\",\"title\":\"BOX ERC2202-Z control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"BOX ERC2202-Z control via MQTT\",\"description\":\"Integrate your BOX ERC2202-Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-10-31T19:12:27.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"3849d031e5d90cb5023b0027a9cbc582961c61ed\",\"time\":1769866618000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"4bcdfb05f5f3ced7c7de977df54ce26b3c67c5a7\",\"time\":1761938408000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 25.58.0\"}]},\"filePathRelative\":\"devices/ERC2202-Z.md\"}");
var _sfc_main = { name: "ERC2202-Z.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "box-erc2202-z",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#box-erc2202-z"
		}, [createBaseVNode("span", null, "BOX ERC2202-Z")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ERC2202-Z")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=BOX" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("BOX", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Dual controller")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "state_l1, state_l2, record_rf, clear_rf, rf_status")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ERC2202-Z.png",
				alt: "BOX ERC2202-Z"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"state-l1-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#state-l1-binary\"><span>State l1 (binary)</span></a></h3><p>On/off state of the switch. Value can be found in the published state on the <code>state_l1</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> state l1 is ON, if <code>OFF</code> OFF.</p><h3 id=\"state-l2-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#state-l2-binary\"><span>State l2 (binary)</span></a></h3><p>On/off state of the switch. Value can be found in the published state on the <code>state_l2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> state l2 is ON, if <code>OFF</code> OFF.</p><h3 id=\"record-rf-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#record-rf-enum\"><span>Record rf (enum)</span></a></h3><p>Record RF control. Value can be found in the published state on the <code>record_rf</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;record_rf&quot;: NEW_VALUE}</code>. The possible values are: <code>record_l1</code>, <code>record_l2</code>.</p><h3 id=\"clear-rf-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#clear-rf-enum\"><span>Clear rf (enum)</span></a></h3><p>Clear RF control. Value can be found in the published state on the <code>clear_rf</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;clear_rf&quot;: NEW_VALUE}</code>. The possible values are: <code>clear_l1</code>, <code>clear_l2</code>.</p><h3 id=\"rf-status-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#rf-status-enum\"><span>Rf status (enum)</span></a></h3><p>RF control status. Value can be found in the published state on the <code>rf_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>ok</code>, <code>error</code>.</p>", 11))
	]);
}
var ERC2202_Z_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, ERC2202_Z_default as default };
