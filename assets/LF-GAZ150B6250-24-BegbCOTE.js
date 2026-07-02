import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/LF-GAZ150B6250-24.md
var _pageData = JSON.parse("{\"path\":\"/devices/LF-GAZ150B6250-24.html\",\"title\":\"Lifud LF-GAZ150B6250-24 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Lifud LF-GAZ150B6250-24 control via MQTT\",\"description\":\"Integrate your Lifud LF-GAZ150B6250-24 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-08-01T15:17:56.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"joaopedrocg27\",\"username\":\"joaopedrocg27\",\"email\":\"30077840+joaopedrocg27@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/joaopedrocg27\"},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"c6635419f9d2bcbfb7d60bdc6f1dd80d5d988029\",\"time\":1777579890000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"7e8e5c269c3198e10e5be1ee9a0b138873967e30\",\"time\":1754062598000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 24.11.0\"},{\"hash\":\"07270355b3b650565c3a63ee8bff5b2d9553092e\",\"time\":1752863697000,\"email\":\"30077840+joaopedrocg27@users.noreply.github.com\",\"author\":\"João Gonçalves\",\"message\":\"feat: add support for LF-GAZ150B6250-24 (#3948)\"}]},\"filePathRelative\":\"devices/LF-GAZ150B6250-24.md\"}");
var _sfc_main = { name: "LF-GAZ150B6250-24.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "lifud-lf-gaz150b6250-24",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#lifud-lf-gaz150b6250-24"
		}, [createBaseVNode("span", null, "Lifud LF-GAZ150B6250-24")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "LF-GAZ150B6250-24")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Lifud" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Lifud", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Lifud Zigbee LED Driver 150W 24V")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "light (state, brightness), power_on_behavior")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/LF-GAZ150B6250-24.png",
				alt: "Lifud LF-GAZ150B6250-24"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"light\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#light\"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><p><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p></li><li><p><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</p></li></ul><h3 id=\"power-on-behavior-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#power-on-behavior-enum\"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p>", 6))
	]);
}
var LF_GAZ150B6250_24_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, LF_GAZ150B6250_24_default as default };
