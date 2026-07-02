import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/SNZB-02LD.md
var _pageData = JSON.parse("{\"path\":\"/devices/SNZB-02LD.html\",\"title\":\"SONOFF SNZB-02LD control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"SONOFF SNZB-02LD control via MQTT\",\"description\":\"Integrate your SONOFF SNZB-02LD via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-05-01T17:59:09.000Z\"},\"git\":{\"updatedTime\":1782847222000,\"contributors\":[{\"name\":\"Sebastian\",\"username\":\"Sebastian\",\"email\":\"sebi.stahl1811@live.com\",\"commits\":1,\"url\":\"https://github.com/Sebastian\"},{\"name\":\"koenkk\",\"username\":\"koenkk\",\"email\":\"koenkanters94@gmail.com\",\"commits\":4,\"url\":\"https://github.com/koenkk\"},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":10},{\"name\":\"baod-rate\",\"username\":\"baod-rate\",\"email\":\"6306455+baod-rate@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/baod-rate\"}],\"changelog\":[{\"hash\":\"09933d326a2c0adb8ac55e71a5176b34d708cef1\",\"time\":1782847222000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"94ddb945fad517abf11cca5a8a8b7b01ab178445\",\"time\":1762114847000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"fix various typos\"},{\"hash\":\"20d3b2e70374e1fe0fa20e6c892def50f32455e5\",\"time\":1748799477000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 23.52.1\"},{\"hash\":\"7fecb4295cc84ff50f35d4450bad1d971ff8644f\",\"time\":1746123337000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 23.36.0\"},{\"hash\":\"707d7e54d6545ef4745398da456aeb2977174d54\",\"time\":1738441259000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc 21.27.1\"},{\"hash\":\"d6b5cee45aeddbd3105f04eac29996eaaa4e58e0\",\"time\":1719776485000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 19.62.0\"},{\"hash\":\"da6ab547665d1b804ce13b252279c93f7a092e02\",\"time\":1717232731000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 19.47.1\"},{\"hash\":\"ba32f0a66233ddd05b6cecf062f641279e9c7670\",\"time\":1717095241000,\"email\":\"6306455+baod-rate@users.noreply.github.com\",\"author\":\"Bao\",\"message\":\"Update TS0201-z to match other TuYa devices (#2778)\"},{\"hash\":\"1f05aa52535e9720092d4b6cdb8ee8efcb8084a2\",\"time\":1714591212000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 19.32.0\"},{\"hash\":\"6083f721b4d93a082e330851062b5bf4059a1654\",\"time\":1711912488000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 19.11.1\"},{\"hash\":\"e41c3889eb10d18e610e33d6a064e0ff0a08b3c9\",\"time\":1707249617000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"koenkk\",\"message\":\"Update zhc to 18.28.3\"},{\"hash\":\"2e0685417dd54bd9fb80e1635990b0e0d94c7310\",\"time\":1706731725000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"koenkk\",\"message\":\"Update zhc to 18.25.1\"},{\"hash\":\"58c1428aa1dc9006cf4b6e2ac25eca03f34f8807\",\"time\":1704103496000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"koenkk\",\"message\":\"Update zhc to 18.3.0\"},{\"hash\":\"49120a19139d21b7a2a0add7fdce06717fb3f3ab\",\"time\":1703616962000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"koenkk\",\"message\":\"Update zhc to 17.1.1\"},{\"hash\":\"c46678cbfe5a21abd34451dcab2ddd4cc3520b13\",\"time\":1702061290000,\"email\":\"sebi.stahl1811@live.com\",\"author\":\"Sebastian\",\"message\":\"Documentation for rsh hs06 (#2390)\"}]},\"filePathRelative\":\"devices/SNZB-02LD.md\"}");
var _sfc_main = { name: "SNZB-02LD.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "sonoff-snzb-02ld",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#sonoff-snzb-02ld"
		}, [createBaseVNode("span", null, "SONOFF SNZB-02LD")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "SNZB-02LD")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=SONOFF" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("SONOFF", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Waterproof (IP65) sensor with screen and probe temperature detection")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, temperature, temperature_units, temperature_calibration")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/SNZB-02LD.png",
				alt: "SONOFF SNZB-02LD"
			})])], -1))
		])]),
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
		_cache[14] || (_cache[14] = createStaticVNode("<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"temperature-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#temperature-numeric\"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id=\"temperature-units-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#temperature-units-enum\"><span>Temperature units (enum)</span></a></h3><p>The unit of the temperature displayed on the device screen. Note: wake up the device by pressing the button on the back before changing this value.. Value can be found in the published state on the <code>temperature_units</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_units&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_units&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id=\"temperature-calibration-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#temperature-calibration-numeric\"><span>Temperature calibration (numeric)</span></a></h3><p>Offset to add/subtract to the reported temperature. Value can be found in the published state on the <code>temperature_calibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_calibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>°C</code>.</p>", 10))
	]);
}
var SNZB_02LD_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, SNZB_02LD_default as default };
