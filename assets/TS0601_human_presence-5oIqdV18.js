import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/TS0601_human_presence.md
var _pageData = JSON.parse("{\"path\":\"/devices/TS0601_human_presence.html\",\"title\":\"iHseno TS0601_human_presence control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"iHseno TS0601_human_presence control via MQTT\",\"description\":\"Integrate your iHseno TS0601_human_presence via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-11-30T20:32:44.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":4},{\"name\":\"Bjk8kds\",\"username\":\"Bjk8kds\",\"email\":\"58904384+Bjk8kds@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Bjk8kds\"}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"5601702380faea1b054a52e27b48361f4148af28\",\"time\":1764534871000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc\"},{\"hash\":\"5af7a5df1a72d7f1277e87ce503b5b1299b4ccd4\",\"time\":1763306760000,\"email\":\"58904384+Bjk8kds@users.noreply.github.com\",\"author\":\"BJK\",\"message\":\"Rename iHsenso_TS0601_human_presence.png (#4426)\"},{\"hash\":\"a5f6e7e1ea21a8b16e513abb3cb588e04af2a26f\",\"time\":1756751284000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 25.14.0\"},{\"hash\":\"7bebdb258d8727e7ca542d09e745df98c72cff27\",\"time\":1751393434000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 23.69.0\"}]},\"filePathRelative\":\"devices/TS0601_human_presence.md\"}");
var _sfc_main = { name: "TS0601_human_presence.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "ihseno-ts0601-human-presence",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ihseno-ts0601-human-presence"
		}, [createBaseVNode("span", null, "iHseno TS0601_human_presence")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "TS0601_human_presence")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=iHseno" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("iHseno", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Human presence sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "presence, battery, sensitivity, delay_time")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/TS0601_human_presence.png",
				alt: "iHseno TS0601_human_presence"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"presence-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#presence-binary\"><span>Presence (binary)</span></a></h3><p>Human presence detected. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Battery percentage. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"sensitivity-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#sensitivity-enum\"><span>Sensitivity (enum)</span></a></h3><p>Sensor sensitivity. Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>middle</code>, <code>high</code>.</p><h3 id=\"delay-time-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#delay-time-enum\"><span>Delay time (enum)</span></a></h3><p>Delay time in seconds. Value can be found in the published state on the <code>delay_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;delay_time&quot;: NEW_VALUE}</code>. The possible values are: <code>15s</code>, <code>30s</code>, <code>60s</code>.</p>", 9))
	]);
}
var TS0601_human_presence_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, TS0601_human_presence_default as default };
