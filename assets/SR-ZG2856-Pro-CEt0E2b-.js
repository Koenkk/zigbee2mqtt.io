import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/SR-ZG2856-Pro.md
var _pageData = JSON.parse("{\"path\":\"/devices/SR-ZG2856-Pro.html\",\"title\":\"Sunricher SR-ZG2856-Pro control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Sunricher SR-ZG2856-Pro control via MQTT\",\"description\":\"Integrate your Sunricher SR-ZG2856-Pro via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-03-01T20:26:05.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Niracler Li\",\"username\":\"\",\"email\":\"i@niracler.com\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2},{\"name\":\"Nerivec\",\"username\":\"Nerivec\",\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Nerivec\"}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"2d952e575dda4fc6d3db9c76da96c72d355ddf25\",\"time\":1773316658000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"fix: add test to prevent HTML tags in notes (#4909)\"},{\"hash\":\"6f506cd18543bb842a6c3fcd0e5cb468a8d40d6f\",\"time\":1740861182000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 23.2.0\"},{\"hash\":\"0a4666c030e82873c0b88dd2c6c7173682108143\",\"time\":1740054173000,\"email\":\"i@niracler.com\",\"author\":\"Niracler Li\",\"message\":\"feat: support SR-ZG2856-Pro (#3532)\"}]},\"filePathRelative\":\"devices/SR-ZG2856-Pro.md\"}");
var _sfc_main = { name: "SR-ZG2856-Pro.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "sunricher-sr-zg2856-pro",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#sunricher-sr-zg2856-pro"
		}, [createBaseVNode("span", null, "Sunricher SR-ZG2856-Pro")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "SR-ZG2856-Pro")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Sunricher" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Sunricher", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee smart remote")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/SR-ZG2856-Pro.png",
				alt: "Sunricher SR-ZG2856-Pro"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"home-assistant\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#home-assistant\"><span>Home Assistant</span></a></h2><p>For easy integration with Home Assistant, you can use our blueprint. This blueprint helps you:</p><ul><li>Identify and respond to button press events from different buttons on the device</li><li>Easily distinguish between buttons in your automations</li><li>Simplify the automation setup process</li></ul><p><a href=\"https://github.com/maginawin/sr_ha_blueprints\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/maginawin/sr_ha_blueprints</a></p><p>Find the appropriate badge in the link above to import the blueprint into your Home Assistant instance.</p><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>short_press</code>, <code>double_press</code>, <code>hold</code>, <code>hold_released</code>.</p>", 10))
	]);
}
var SR_ZG2856_Pro_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, SR_ZG2856_Pro_default as default };
