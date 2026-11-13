import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/ZNMS13LM.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZNMS13LM.html\",\"title\":\"Aqara ZNMS13LM control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Aqara ZNMS13LM control via MQTT\",\"description\":\"Integrate your Aqara ZNMS13LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2019-09-08T21:16:00.000Z\"},\"filePathRelative\":\"devices/ZNMS13LM.md\"}");
var _sfc_main = { name: "ZNMS13LM.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "aqara-znms13lm",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#aqara-znms13lm"
		}, [createBaseVNode("span", null, "Aqara ZNMS13LM")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZNMS13LM")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Aqara" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Aqara", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Smart door lock S2 Pro")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "state, reverse, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZNMS13LM.png",
				alt: "Aqara ZNMS13LM"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"state-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#state-binary\"><span>State (binary)</span></a></h3><p>Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>UNLOCK</code> state is ON, if <code>LOCK</code> OFF.</p><h3 id=\"reverse-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#reverse-binary\"><span>Reverse (binary)</span></a></h3><p>Value can be found in the published state on the <code>reverse</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>UNLOCK</code> reverse is ON, if <code>LOCK</code> OFF.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>finger_not_match</code>, <code>password_not_match</code>, <code>reverse_lock</code>, <code>reverse_lock_cancel</code>, <code>locked</code>, <code>lock_opened</code>, <code>finger_add</code>, <code>finger_delete</code>, <code>password_add</code>, <code>password_delete</code>, <code>lock_opened_inside</code>, <code>lock_opened_outside</code>, <code>ring_bell</code>, <code>change_language_to</code>, <code>finger_open</code>, <code>password_open</code>, <code>door_closed</code>.</p>", 7))
	]);
}
var ZNMS13LM_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ZNMS13LM_default as default };
