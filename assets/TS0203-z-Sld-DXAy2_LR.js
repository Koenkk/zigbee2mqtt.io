import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/TS0203-z-Sld.md
var _pageData = JSON.parse("{\"path\":\"/devices/TS0203-z-Sld.html\",\"title\":\"Slacky-DIY TS0203-z-Sld control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Slacky-DIY TS0203-z-Sld control via MQTT\",\"description\":\"Integrate your Slacky-DIY TS0203-z-Sld via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-02-28T20:17:14.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Fedor Lizunkov\",\"username\":\"\",\"email\":\"lfa1@yandex.ru\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"9a46b3f181c4cb0936275fda9c8f123c2ecc6f32\",\"time\":1772310128000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc to 26.12.0\"},{\"hash\":\"c56bcbf711b184dbb79f833d27baad9f75070e9d\",\"time\":1771182438000,\"email\":\"lfa1@yandex.ru\",\"author\":\"Fedor Lizunkov\",\"message\":\"added TS0203-z-Sld door/window contact sensor (#4831)\"}]},\"filePathRelative\":\"devices/TS0203-z-Sld.md\"}");
var _sfc_main = { name: "TS0203-z-Sld.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[10] || (_cache[10] = createBaseVNode("h1", {
			id: "slacky-diy-ts0203-z-sld",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#slacky-diy-ts0203-z-sld"
		}, [createBaseVNode("span", null, "Slacky-DIY TS0203-z-Sld")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "TS0203-z-Sld")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Slacky-DIY" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Slacky-DIY", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Tuya door/window sensor with custom firmware")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "model_number, contact, battery, voltage, switch_actions, delay_on, delay_off, on_command_off, off_command_off")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/TS0203-z-Sld.png",
				alt: "Slacky-DIY TS0203-z-Sld"
			})])], -1))
		])]),
		_cache[11] || (_cache[11] = createBaseVNode("p", null, [createBaseVNode("a", {
			href: "https://github.com/slacky1965/tuya_door_sensor_ts0203_zed",
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
		_cache[13] || (_cache[13] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"model-number-text\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#model-number-text\"><span>Model number (text)</span></a></h3><p>Door sensor model number. Value can be found in the published state on the <code>model_number</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;model_number&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value.</p><h3 id=\"contact-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#contact-binary\"><span>Contact (binary)</span></a></h3><p>Indicates whether the device is opened or closed. Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"voltage-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#voltage-numeric\"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id=\"switch-actions-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch-actions-enum\"><span>Switch actions (enum)</span></a></h3><p>Actions switch. Value can be found in the published state on the <code>switch_actions</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>.</p><h3 id=\"delay-on-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#delay-on-numeric\"><span>Delay on (numeric)</span></a></h3><p>Delay On. Value can be found in the published state on the <code>delay_on</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;delay_on&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;delay_on&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>120</code>. The unit of this value is <code>sec</code>.</p><h3 id=\"delay-off-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#delay-off-numeric\"><span>Delay off (numeric)</span></a></h3><p>Delay Off. Value can be found in the published state on the <code>delay_off</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;delay_off&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;delay_off&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>120</code>. The unit of this value is <code>sec</code>.</p><h3 id=\"on-command-off-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#on-command-off-binary\"><span>On command off (binary)</span></a></h3><p>Disable command &#39;On&#39;. Value can be found in the published state on the <code>on_command_off</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;on_command_off&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;on_command_off&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> on command off is ON, if <code>OFF</code> OFF.</p><h3 id=\"off-command-off-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#off-command-off-binary\"><span>Off command off (binary)</span></a></h3><p>Disable command &#39;Off&#39;. Value can be found in the published state on the <code>off_command_off</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;off_command_off&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;off_command_off&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> off command off is ON, if <code>OFF</code> OFF.</p>", 19))
	]);
}
var TS0203_z_Sld_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, TS0203_z_Sld_default as default };
