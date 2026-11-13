import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/ZB-SP1000.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZB-SP1000.html\",\"title\":\"easyiot ZB-SP1000 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"easyiot ZB-SP1000 control via MQTT\",\"description\":\"Integrate your easyiot ZB-SP1000 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-10-01T19:01:34.000Z\"},\"filePathRelative\":\"devices/ZB-SP1000.md\"}");
var _sfc_main = { name: "ZB-SP1000.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "easyiot-zb-sp1000",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#easyiot-zb-sp1000"
		}, [createBaseVNode("span", null, "easyiot ZB-SP1000")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZB-SP1000")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=easyiot" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("easyiot", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "ZB-SP1000 is an MP3 player that can support 1,000 voices.")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "play_voice, set_volume, last_received_status")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZB-SP1000.png",
				alt: "easyiot ZB-SP1000"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"play-voice-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#play-voice-numeric\"><span>Play voice (numeric)</span></a></h3><p>Please enter ID(1-999). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;play_voice&quot;: VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>999</code>.</p><h3 id=\"set-volume-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#set-volume-numeric\"><span>Set volume (numeric)</span></a></h3><p>Please enter volume(1-30). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;set_volume&quot;: VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>30</code>.</p><h3 id=\"last-received-status-text\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#last-received-status-text\"><span>Last received status (text)</span></a></h3><p>status. Value can be found in the published state on the <code>last_received_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>", 7))
	]);
}
var ZB_SP1000_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ZB_SP1000_default as default };
