import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/F00MB00-04-1.md
var _pageData = JSON.parse("{\"path\":\"/devices/F00MB00-04-1.html\",\"title\":\"FORIA F00MB00-04-1 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"FORIA F00MB00-04-1 control via MQTT\",\"description\":\"Integrate your FORIA F00MB00-04-1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-04-29T19:24:38.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":4}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"707d7e54d6545ef4745398da456aeb2977174d54\",\"time\":1738441259000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc 21.27.1\"},{\"hash\":\"1f05aa52535e9720092d4b6cdb8ee8efcb8084a2\",\"time\":1714591212000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 19.32.0\"},{\"hash\":\"914033a227e25045ef99565d5d489491a06fc13a\",\"time\":1714423290000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 19.31.0\"}]},\"filePathRelative\":\"devices/F00MB00-04-1.md\"}");
var _sfc_main = { name: "F00MB00-04-1.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "foria-f00mb00-04-1",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#foria-f00mb00-04-1"
		}, [createBaseVNode("span", null, "FORIA F00MB00-04-1")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "F00MB00-04-1")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=FORIA" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("FORIA", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "4 scenes switch")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "vibration, approach, illumination, backlight, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/F00MB00-04-1.png",
				alt: "FORIA F00MB00-04-1"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"vibration-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#vibration-binary\"><span>Vibration (binary)</span></a></h3><p>Enable vibration. Value can be found in the published state on the <code>vibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;vibration&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> vibration is ON, if <code>OFF</code> OFF.</p><h3 id=\"approach-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#approach-binary\"><span>Approach (binary)</span></a></h3><p>Enable approach detection. Value can be found in the published state on the <code>approach</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;approach&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> approach is ON, if <code>OFF</code> OFF.</p><h3 id=\"illumination-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#illumination-binary\"><span>Illumination (binary)</span></a></h3><p>Enable illumination detection. Value can be found in the published state on the <code>illumination</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;illumination&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> illumination is ON, if <code>OFF</code> OFF.</p><h3 id=\"backlight-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#backlight-binary\"><span>Backlight (binary)</span></a></h3><p>Enable backlight. Value can be found in the published state on the <code>backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> backlight is ON, if <code>OFF</code> OFF.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>scene_1</code>, <code>scene_2</code>, <code>scene_3</code>, <code>scene_4</code>.</p>", 11))
	]);
}
var F00MB00_04_1_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, F00MB00_04_1_default as default };
