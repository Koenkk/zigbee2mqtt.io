import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/GWA1502.md
var _pageData = JSON.parse("{\"path\":\"/devices/GWA1502.html\",\"title\":\"Gewiss GWA1502 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Gewiss GWA1502 control via MQTT\",\"description\":\"Integrate your Gewiss GWA1502 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-04-01T18:29:09.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Dan Danache\",\"username\":\"\",\"email\":\"dan-danache@users.noreply.github.com\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"d39247b979aab27a5f9d13c111e06babe2904610\",\"time\":1743532928000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 23.18.0\"},{\"hash\":\"fccd05e0ee27d3b8648489ae45c0d634655db23d\",\"time\":1742239329000,\"email\":\"dan-danache@users.noreply.github.com\",\"author\":\"Dan Danache\",\"message\":\"Add Gewiss GWA1502 (#3609)\"}]},\"filePathRelative\":\"devices/GWA1502.md\"}");
var _sfc_main = { name: "GWA1502.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "gewiss-gwa1502",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#gewiss-gwa1502"
		}, [createBaseVNode("span", null, "Gewiss GWA1502")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "GWA1502")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Gewiss" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Gewiss", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Contact interface - 2 channels - 230V")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "input")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/GWA1502.png",
				alt: "Gewiss GWA1502"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><ol><li>Power off the device.</li><li>Flip the switches in the off position (contacts I1 and I2 are open).</li><li>Set jumpers in position 0000 (▄ ▄ ▄ ▄) = Factory default.</li><li>Power on the device.</li><li>Push and hold the small pairing button (A2 in manual) for at least 10 seconds. The status LED will flash red and green alternately for 3 seconds, then become red fixed. Device is now factory reset.</li><li>Power off the device.</li><li>Set jumpers in position 1011 (▀ ▄ ▀ ▀) = Pairing configuration.</li><li>Power on the device.</li><li>Device is now in pairing mode for 5 minutes. LED light should stay red.</li><li>Start Permit Join.</li><li>After pairing is complete, the LED will continue to slowly blink green for a few minutes.</li><li>Set jumpers in position 0011 (▄ ▄ ▀ ▀) = One-way switch (on/off) configuration.</li></ol><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"input-binary-1-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#input-binary-1-endpoint\"><span>Input (binary, 1 endpoint)</span></a></h3><p>State of input I1. Value can be found in the published state on the <code>input_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_1&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>ON</code> input is ON, if <code>OFF</code> OFF.</p><h3 id=\"input-binary-2-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#input-binary-2-endpoint\"><span>Input (binary, 2 endpoint)</span></a></h3><p>State of input I2. Value can be found in the published state on the <code>input_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_2&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>ON</code> input is ON, if <code>OFF</code> OFF.</p>", 8))
	]);
}
var GWA1502_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, GWA1502_default as default };
