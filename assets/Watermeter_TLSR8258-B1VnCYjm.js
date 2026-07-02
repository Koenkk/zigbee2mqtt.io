import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/Watermeter_TLSR8258.md
var _pageData = JSON.parse("{\"path\":\"/devices/Watermeter_TLSR8258.html\",\"title\":\"Slacky-DIY Watermeter_TLSR8258 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Slacky-DIY Watermeter_TLSR8258 control via MQTT\",\"description\":\"Integrate your Slacky-DIY Watermeter_TLSR8258 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-04-01T18:29:09.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Fedor Lizunkov\",\"username\":\"\",\"email\":\"lfa1@yandex.ru\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"d39247b979aab27a5f9d13c111e06babe2904610\",\"time\":1743532928000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 23.18.0\"},{\"hash\":\"610dffda46306b6ef87d92c5b83bc8e6ba46b17a\",\"time\":1743102536000,\"email\":\"lfa1@yandex.ru\",\"author\":\"Fedor Lizunkov\",\"message\":\"add photo Thermostat with custom firmware (#3608)\"}]},\"filePathRelative\":\"devices/Watermeter_TLSR8258.md\"}");
var _sfc_main = { name: "Watermeter_TLSR8258.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[10] || (_cache[10] = createBaseVNode("h1", {
			id: "slacky-diy-watermeter-tlsr8258",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#slacky-diy-watermeter-tlsr8258"
		}, [createBaseVNode("span", null, "Slacky-DIY Watermeter_TLSR8258")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "Watermeter_TLSR8258")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Slacky-DIY" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Slacky-DIY", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Water Meter")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "water_leak, battery, voltage, switch_actions, volume, preset")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/Watermeter_TLSR8258.png",
				alt: "Slacky-DIY Watermeter_TLSR8258"
			})])], -1))
		])]),
		_cache[11] || (_cache[11] = createBaseVNode("p", null, [createBaseVNode("a", {
			href: "https://github.com/slacky1965/watermeter_zed",
			target: "_blank",
			rel: "noopener noreferrer"
		}, "Original project description")], -1)),
		_cache[12] || (_cache[12] = createBaseVNode("h2", {
			id: "ota-updates",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ota-updates"
		}, [createBaseVNode("span", null, "OTA updates")])], -1)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(".", -1))
		]),
		_cache[13] || (_cache[13] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"water-leak-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#water-leak-binary\"><span>Water leak (binary)</span></a></h3><p>Indicates whether the device detected a water leak. Value can be found in the published state on the <code>water_leak</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> water leak is ON, if <code>false</code> OFF.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"voltage-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#voltage-numeric\"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id=\"switch-actions-enum-4-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch-actions-enum-4-endpoint\"><span>Switch actions (enum, 4 endpoint)</span></a></h3><p>Actions switch 1. Value can be found in the published state on the <code>switch_actions_4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_4&quot;: NEW_VALUE}</code>. The possible values are: <code>on_off</code>, <code>off_on</code>, <code>toggle</code>.</p><h3 id=\"switch-actions-enum-5-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch-actions-enum-5-endpoint\"><span>Switch actions (enum, 5 endpoint)</span></a></h3><p>Actions switch 2. Value can be found in the published state on the <code>switch_actions_5</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_5&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_5&quot;: NEW_VALUE}</code>. The possible values are: <code>on_off</code>, <code>off_on</code>, <code>toggle</code>.</p><h3 id=\"volume-numeric-1-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#volume-numeric-1-endpoint\"><span>Volume (numeric, 1 endpoint)</span></a></h3><p>Hot water. Value can be found in the published state on the <code>volume_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;volume_1&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>L</code>.</p><h3 id=\"volume-numeric-2-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#volume-numeric-2-endpoint\"><span>Volume (numeric, 2 endpoint)</span></a></h3><p>Cold water. Value can be found in the published state on the <code>volume_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;volume_2&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>L</code>.</p><h3 id=\"preset-composite\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#preset-composite\"><span>Preset (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: {&quot;hot_water_preset&quot;: VALUE, &quot;cold_water_preset&quot;: VALUE, &quot;step_water_preset&quot;: VALUE}}</code></p><ul><li><code>hot_water_preset</code> (numeric): Preset hot water max value is 99999999, unit is L</li><li><code>cold_water_preset</code> (numeric): Preset cold water max value is 99999999, unit is L</li><li><code>step_water_preset</code> (numeric): Preset step water min value is 1, max value is 100, unit is L</li></ul>", 18))
	]);
}
var Watermeter_TLSR8258_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, Watermeter_TLSR8258_default as default };
