import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/BMCT-RZ.md
var _pageData = JSON.parse("{\"path\":\"/devices/BMCT-RZ.html\",\"title\":\"Bosch BMCT-RZ control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Bosch BMCT-RZ control via MQTT\",\"description\":\"Integrate your Bosch BMCT-RZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-01-07T12:36:48.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"DanielDeni\",\"username\":\"DanielDeni\",\"email\":\"daniel.petrovic@outlook.com\",\"commits\":1,\"url\":\"https://github.com/DanielDeni\"},{\"name\":\"koenkk\",\"username\":\"koenkk\",\"email\":\"koenkanters94@gmail.com\",\"commits\":3,\"url\":\"https://github.com/koenkk\"},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":4},{\"name\":\"Ronald Müller\",\"username\":\"\",\"email\":\"ronald_mueller@gmx.de\",\"commits\":1},{\"name\":\"Nerivec\",\"username\":\"Nerivec\",\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Nerivec\"}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"bd53f19bd445198d88cea3d31d2bba697b486f43\",\"time\":1771694140000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"fix: install code details (#4847)\"},{\"hash\":\"e5b8a5c972a08f7fb34dc1e589eb704a1e4ede88\",\"time\":1759262180000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 25.35.1\"},{\"hash\":\"707d7e54d6545ef4745398da456aeb2977174d54\",\"time\":1738441259000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc 21.27.1\"},{\"hash\":\"39aaae22184842ac211a3cf64cfd73ac18f22d5c\",\"time\":1723651608000,\"email\":\"ronald_mueller@gmx.de\",\"author\":\"Ronald Müller\",\"message\":\"Update BMCT-RZ.md - added pairing section and zigbee-3.0 dependency (#2950)\"},{\"hash\":\"c9e8b4810dbf3458a48946739049a8082328292a\",\"time\":1722537665000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 19.72.0\"},{\"hash\":\"e41c3889eb10d18e610e33d6a064e0ff0a08b3c9\",\"time\":1707249617000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"koenkk\",\"message\":\"Update zhc to 18.28.3\"},{\"hash\":\"2e0685417dd54bd9fb80e1635990b0e0d94c7310\",\"time\":1706731725000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"koenkk\",\"message\":\"Update zhc to 18.25.1\"},{\"hash\":\"2b8bef8944b1d2a45ba48b781453933c4d31356f\",\"time\":1704631377000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"koenkk\",\"message\":\"Update to zhc 18.9.0\"},{\"hash\":\"4f98acdc2d87bd7c80221b15b4a2c7a45be6bfa5\",\"time\":1704377930000,\"email\":\"daniel.petrovic@outlook.com\",\"author\":\"DanielDeni\",\"message\":\"Add Bosch BMCT-RZ (#2457)\"}]},\"filePathRelative\":\"devices/BMCT-RZ.md\"}");
var _sfc_main = { name: "BMCT-RZ.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "bosch-bmct-rz",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#bosch-bmct-rz"
		}, [createBaseVNode("span", null, "Bosch BMCT-RZ")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "BMCT-RZ")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Bosch" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Bosch", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Relay (potential free)")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "switch (state), actuator_type")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/BMCT-RZ.png",
				alt: "Bosch BMCT-RZ"
			})])], -1))
		])]),
		_cache[12] || (_cache[12] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><p>This device needs an zigbee-3.0 capable coordinator (will not work with cc2531-based coordinators)!</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>To pair this device you have to install the device via its installation code. The installation code can be obtained by scanning the QR-code on the device with your smartphone. Then get the device into pairing mode. In zigbee2mqtt navigate to &quot;Settings&quot; --&gt; &quot;Tools&quot; and click on &quot;Add install code&quot;. Paste the code you got from the QR-code and confirm by clicking &quot;OK&quot;, then ensure permit joining is active. Wait for your device to be joined.</p><h3 id=\"misc\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#misc\"><span>Misc</span></a></h3><p>The device can operate in two modes. The operation mode is set after the initial pairing. Currently only Mode 1 works and is set by default. Mode 2 is not supported yet.</p><p>Mode 1: On/Off</p><p>The device behaves in a similar way to a rocker switch. You can actively switch devices on/off using the connected switch (optional).</p><p>Mode 2: Pulse</p><p>In this mode, the device behaves like a button. The circuit is briefly closed and the connected devices react to the short current pulse. A good example of this is stairwell lighting.</p><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 11)),
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
		_cache[14] || (_cache[14] = createStaticVNode("<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"switch\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch\"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id=\"on-with-timed-off\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#on-with-timed-off\"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id=\"actuator-type-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#actuator-type-enum\"><span>Actuator type (enum)</span></a></h3><p>Select the appropriate actuator type so that the connected device can be controlled correctly.. Value can be found in the published state on the <code>actuator_type</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;actuator_type&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;actuator_type&quot;: NEW_VALUE}</code>. The possible values are: <code>normally_closed</code>, <code>normally_open</code>.</p>", 8))
	]);
}
var BMCT_RZ_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, BMCT_RZ_default as default };
