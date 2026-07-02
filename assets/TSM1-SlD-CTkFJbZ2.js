import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/TSM1-SlD.md
var _pageData = JSON.parse("{\"path\":\"/devices/TSM1-SlD.html\",\"title\":\"Slacky-DIY TSM1-SlD control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Slacky-DIY TSM1-SlD control via MQTT\",\"description\":\"Integrate your Slacky-DIY TSM1-SlD via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-01-31T13:12:45.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Fedor Lizunkov\",\"username\":\"\",\"email\":\"lfa1@yandex.ru\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"9a46b3f181c4cb0936275fda9c8f123c2ecc6f32\",\"time\":1772310128000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc to 26.12.0\"},{\"hash\":\"3849d031e5d90cb5023b0027a9cbc582961c61ed\",\"time\":1769866618000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"87fc03f3e0404c341baf2bbda3a3be3bb1160d54\",\"time\":1768768339000,\"email\":\"lfa1@yandex.ru\",\"author\":\"Fedor Lizunkov\",\"message\":\"added TSM1-SlD tuya switch with custom firmware (#4739)\"}]},\"filePathRelative\":\"devices/TSM1-SlD.md\"}");
var _sfc_main = { name: "TSM1-SlD.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "slacky-diy-tsm1-sld",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#slacky-diy-tsm1-sld"
		}, [createBaseVNode("span", null, "Slacky-DIY TSM1-SlD")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "TSM1-SlD")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Slacky-DIY" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Slacky-DIY", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Tuya switch module 1 gang with custom firmware")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "switch (state), power_on_behavior, switch_actions, switch_type, operation_mode, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/TSM1-SlD.png",
				alt: "Slacky-DIY TSM1-SlD"
			})])], -1))
		])]),
		_cache[12] || (_cache[12] = createBaseVNode("p", null, [createBaseVNode("a", {
			href: "https://github.com/slacky1965/tuya_mini_switch_1s_zrd",
			target: "_blank",
			rel: "noopener noreferrer"
		}, "Original project description")], -1)),
		_cache[13] || (_cache[13] = createBaseVNode("h2", {
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
		_cache[14] || (_cache[14] = createBaseVNode("h2", {
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
		_cache[15] || (_cache[15] = createStaticVNode("<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"switch\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch\"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id=\"on-with-timed-off\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#on-with-timed-off\"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id=\"power-on-behavior-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#power-on-behavior-enum\"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id=\"switch-actions-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch-actions-enum\"><span>Switch actions (enum)</span></a></h3><p>Actions switch. Value can be found in the published state on the <code>switch_actions</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>.</p><h3 id=\"switch-type-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch-type-enum\"><span>Switch type (enum)</span></a></h3><p>Switch type. Value can be found in the published state on the <code>switch_type</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>, <code>multifunction</code>.</p><h3 id=\"operation-mode-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#operation-mode-enum\"><span>Operation mode (enum)</span></a></h3><p>Relay decoupled. Value can be found in the published state on the <code>operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>control_relay</code>, <code>decoupled</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>, <code>hold</code>, <code>single</code>, <code>double</code>, <code>triple</code>, <code>quadruple</code>, <code>quintuple</code>, <code>release</code>.</p>", 16))
	]);
}
var TSM1_SlD_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, TSM1_SlD_default as default };
