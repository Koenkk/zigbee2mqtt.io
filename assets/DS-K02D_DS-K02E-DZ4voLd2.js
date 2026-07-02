import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/DS-K02D_DS-K02E.md
var _pageData = JSON.parse("{\"path\":\"/devices/DS-K02D_DS-K02E.html\",\"title\":\"Aqara DS-K02D/DS-K02E control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Aqara DS-K02D/DS-K02E control via MQTT\",\"description\":\"Integrate your Aqara DS-K02D/DS-K02E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-04-09T00:00:00.000Z\"},\"git\":{\"updatedTime\":1782847222000,\"contributors\":[{\"name\":\"sbstnkng\",\"username\":\"sbstnkng\",\"email\":\"29359422+sbstnkng@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/sbstnkng\"},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"09933d326a2c0adb8ac55e71a5176b34d708cef1\",\"time\":1782847222000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"35d957b9226f9ba083f1c48e41004be49422dac3\",\"time\":1775759344000,\"email\":\"29359422+sbstnkng@users.noreply.github.com\",\"author\":\"Sebastian König\",\"message\":\"Add image and device page for Aqara Shutter Switch H2 EU (DS-K02D/DS-K02E) (#5012)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]}]},\"filePathRelative\":\"devices/DS-K02D_DS-K02E.md\"}");
var _sfc_main = { name: "DS-K02D_DS-K02E.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "aqara-ds-k02d-ds-k02e",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#aqara-ds-k02d-ds-k02e"
		}, [createBaseVNode("span", null, "Aqara DS-K02D/DS-K02E")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "DS-K02D/DS-K02E")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Aqara" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Aqara", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Aqara Shutter Switch H2 EU")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "energy, cover (state, position), multi_click, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/DS-K02D-DS-K02E.png",
				alt: "Aqara DS-K02D/DS-K02E"
			})])], -1))
		])]),
		_cache[12] || (_cache[12] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"metering\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#metering\"><span>Metering</span></a></h3><p>Only <code>energy</code> is exposed for the Aqara Shutter Switch H2 EU. <code>power</code>, <code>current</code>, and <code>voltage</code> are intentionally not exposed because they could not be validated reliably on this model.</p><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 4)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(".", -1))
		]),
		_cache[13] || (_cache[13] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[14] || (_cache[14] = createStaticVNode("<ul><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"energy-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#energy-numeric\"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;energy&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id=\"cover\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cover\"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id=\"multi-click-binary-top-wireless-button-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#multi-click-binary-top-wireless-button-endpoint\"><span>Multi click (binary, top_wireless_button endpoint)</span></a></h3><p>Multi-click mode for top wireless button. Value can be found in the published state on the <code>multi_click_top_wireless_button</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;multi_click_top_wireless_button&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;multi_click_top_wireless_button&quot;: NEW_VALUE}</code>. If value equals <code>true</code> multi click is ON, if <code>false</code> OFF.</p><h3 id=\"multi-click-binary-bottom-wireless-button-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#multi-click-binary-bottom-wireless-button-endpoint\"><span>Multi click (binary, bottom_wireless_button endpoint)</span></a></h3><p>Multi-click mode for bottom wireless button. Value can be found in the published state on the <code>multi_click_bottom_wireless_button</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;multi_click_bottom_wireless_button&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;multi_click_bottom_wireless_button&quot;: NEW_VALUE}</code>. If value equals <code>true</code> multi click is ON, if <code>false</code> OFF.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>button_3_single</code>, <code>button_4_single</code>.</p>", 12))
	]);
}
var DS_K02D_DS_K02E_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, DS_K02D_DS_K02E_default as default };
