import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/TS0601_alh14edn.md
var _pageData = JSON.parse("{\"path\":\"/devices/TS0601_alh14edn.html\",\"title\":\"Tuya TS0601_alh14edn control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Tuya TS0601_alh14edn control via MQTT\",\"description\":\"Integrate your Tuya TS0601_alh14edn via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-05-31T19:17:59.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Jeffrey Stone\",\"username\":\"\",\"email\":\"thejeffreystone@gmail.com\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":9},{\"name\":\"koenkk\",\"username\":\"koenkk\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2,\"url\":\"https://github.com/koenkk\"}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"baf96fd627fdb9aff88e8efcb6bbbb2c5e76033b\",\"time\":1767274772000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"707d7e54d6545ef4745398da456aeb2977174d54\",\"time\":1738441259000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc 21.27.1\"},{\"hash\":\"914033a227e25045ef99565d5d489491a06fc13a\",\"time\":1714423290000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 19.31.0\"},{\"hash\":\"e41c3889eb10d18e610e33d6a064e0ff0a08b3c9\",\"time\":1707249617000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"koenkk\",\"message\":\"Update zhc to 18.28.3\"},{\"hash\":\"2e0685417dd54bd9fb80e1635990b0e0d94c7310\",\"time\":1706731725000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"koenkk\",\"message\":\"Update zhc to 18.25.1\"},{\"hash\":\"231d94d1da6c274f385dc0a286a574e3a3c43605\",\"time\":1684960025000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Generate some device notes (#2054)\"},{\"hash\":\"5a371f9c5385e3fc9d697e7f15fd4705cc615288\",\"time\":1675265614000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 15.0.38\"},{\"hash\":\"1451bd918b172c40d2d57b7b8b2999957233b9fe\",\"time\":1669912138000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 14.0.680\"},{\"hash\":\"c142abdf3c5317f50b268dff51faa50d4dff89fb\",\"time\":1668967366000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Run docgen\"},{\"hash\":\"f402ed8d8faf1daa7382ea4cf5e665b713977408\",\"time\":1654097612000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 14.0.533\"},{\"hash\":\"cc3d55f58008ff4f190d1ea536178181fede5459\",\"time\":1653202622000,\"email\":\"thejeffreystone@gmail.com\",\"author\":\"Jeffrey Stone\",\"message\":\"Adding 3RSB015BZ Device (#1394)\"}]},\"filePathRelative\":\"devices/TS0601_alh14edn.md\"}");
var _sfc_main = { name: "TS0601_alh14edn.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "tuya-ts0601-alh14edn",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#tuya-ts0601-alh14edn"
		}, [createBaseVNode("span", null, "Tuya TS0601_alh14edn")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "TS0601_alh14edn")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Tuya" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Tuya", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Smart Blinds Controller")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "cover (state, position), reverse_direction, motor_fault, upper_stroke_limit, middle_stroke_limit, lower_stroke_limit, motor_working_mode")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/TS0601_alh14edn.png",
				alt: "Tuya TS0601_alh14edn"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"cover\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cover\"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id=\"reverse-direction-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#reverse-direction-enum\"><span>Reverse direction (enum)</span></a></h3><p>Reverse the motor direction. Value can be found in the published state on the <code>reverse_direction</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reverse_direction&quot;: NEW_VALUE}</code>. The possible values are: <code>forward</code>, <code>back</code>.</p>", 6))
	]);
}
var TS0601_alh14edn_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, TS0601_alh14edn_default as default };
