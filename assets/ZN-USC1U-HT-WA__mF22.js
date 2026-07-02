import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/ZN-USC1U-HT.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZN-USC1U-HT.html\",\"title\":\"Zemismart ZN-USC1U-HT control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Zemismart ZN-USC1U-HT control via MQTT\",\"description\":\"Integrate your Zemismart ZN-USC1U-HT via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-10-31T19:10:30.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"rotem657\",\"username\":\"rotem657\",\"email\":\"63625134+rotem657@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/rotem657\"},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"4bcdfb05f5f3ced7c7de977df54ce26b3c67c5a7\",\"time\":1761938408000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 25.58.0\"},{\"hash\":\"3c387fd662554bd84b3d510a95bcc7a21e21b9c7\",\"time\":1759866720000,\"email\":\"63625134+rotem657@users.noreply.github.com\",\"author\":\"Rotem Abergel\",\"message\":\"Add Zemismart ZN-USC1U-HT Curtain Switch (#4245)\"}]},\"filePathRelative\":\"devices/ZN-USC1U-HT.md\"}");
var _sfc_main = { name: "ZN-USC1U-HT.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "zemismart-zn-usc1u-ht",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#zemismart-zn-usc1u-ht"
		}, [createBaseVNode("span", null, "Zemismart ZN-USC1U-HT")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZN-USC1U-HT")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Zemismart" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Zemismart", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Smart curtain wall switch")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "cover (state, position), motor_steering, calibration_time")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZN-USC1U-HT.png",
				alt: "Zemismart ZN-USC1U-HT"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Press on one of the buttons for 10 seconds to enter pairing mode (All lights should blink)</p><h3 id=\"calibration\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#calibration\"><span>Calibration</span></a></h3><ul><li>Press the close button on the switch, wait until the curtains are completely closed.</li><li>Press the pause button on the switch.</li><li>Set the amount of time for the curtain to be opened, see <a href=\"#calibration-time-numeric\">below</a>.</li><li>If the amount of time is not enough, repeat the process until the curtain can be completely opened.</li></ul><h2 id=\"options\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#options\"><span>Options</span></a></h2>", 6)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"cover\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cover\"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id=\"motor-steering-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#motor-steering-enum\"><span>Motor steering (enum)</span></a></h3><p>Motor steering. Value can be found in the published state on the <code>motor_steering</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_steering&quot;: NEW_VALUE}</code>. The possible values are: <code>FORWARD</code>, <code>BACKWARD</code>.</p><h3 id=\"calibration-time-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#calibration-time-numeric\"><span>Calibration time (numeric)</span></a></h3><p>Calibration time in seconds (Please fully close the curtain before set the calibration time). Value can be found in the published state on the <code>calibration_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>500</code>. The unit of this value is <code>s</code>.</p>", 8))
	]);
}
var ZN_USC1U_HT_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, ZN_USC1U_HT_default as default };
