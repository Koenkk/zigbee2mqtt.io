import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/E8334RWMZB.md
var _pageData = JSON.parse("{\"path\":\"/devices/E8334RWMZB.html\",\"title\":\"Schneider Electric E8334RWMZB control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Schneider Electric E8334RWMZB control via MQTT\",\"description\":\"Integrate your Schneider Electric E8334RWMZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-06-30T19:12:33.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":4}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"e5b8a5c972a08f7fb34dc1e589eb704a1e4ede88\",\"time\":1759262180000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 25.35.1\"},{\"hash\":\"707d7e54d6545ef4745398da456aeb2977174d54\",\"time\":1738441259000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc 21.27.1\"},{\"hash\":\"d6b5cee45aeddbd3105f04eac29996eaaa4e58e0\",\"time\":1719776485000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 19.62.0\"}]},\"filePathRelative\":\"devices/E8334RWMZB.md\"}");
var _sfc_main = { name: "E8334RWMZB.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "schneider-electric-e8334rwmzb",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#schneider-electric-e8334rwmzb"
		}, [createBaseVNode("span", null, "Schneider Electric E8334RWMZB")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "E8334RWMZB")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Schneider%20Electric" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Schneider Electric", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Wiser AvatarOn 4K Freelocate")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "indicator_luminance_level, indicator_color, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/E8334RWMZB.png",
				alt: "Schneider Electric E8334RWMZB"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"indicator-luminance-level-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#indicator-luminance-level-enum\"><span>Indicator luminance level (enum)</span></a></h3><p>Set indicator luminance Level. Value can be found in the published state on the <code>indicator_luminance_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_luminance_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_luminance_level&quot;: NEW_VALUE}</code>. The possible values are: <code>0</code>, <code>20</code>, <code>40</code>, <code>60</code>, <code>80</code>, <code>100</code>.</p><h3 id=\"indicator-color-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#indicator-color-enum\"><span>Indicator color (enum)</span></a></h3><p>Set indicator color. Value can be found in the published state on the <code>indicator_color</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_color&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_color&quot;: NEW_VALUE}</code>. The possible values are: <code>white</code>, <code>blue</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>key1</code>, <code>key2</code>, <code>key3</code>, <code>key4</code>.</p>", 7))
	]);
}
var E8334RWMZB_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, E8334RWMZB_default as default };
