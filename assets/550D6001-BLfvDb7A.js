import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/550D6001.md
var _pageData = JSON.parse("{\"path\":\"/devices/550D6001.html\",\"title\":\"Schneider Electric 550D6001 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Schneider Electric 550D6001 control via MQTT\",\"description\":\"Integrate your Schneider Electric 550D6001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2021-07-01T18:17:29.000Z\"},\"filePathRelative\":\"devices/550D6001.md\"}");
var _sfc_main = { name: "550D6001.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[12] || (_cache[12] = createBaseVNode("h1", {
			id: "schneider-electric-550d6001",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#schneider-electric-550d6001"
		}, [createBaseVNode("span", null, "Schneider Electric 550D6001")])], -1)),
		createBaseVNode("table", null, [_cache[7] || (_cache[7] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "550D6001")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Schneider%20Electric" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Schneider Electric", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "LK FUGA wiser wireless battery 4 button switch")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "action, battery")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/550D6001.png",
				alt: "Schneider Electric 550D6001"
			})])], -1)),
			_cache[6] || (_cache[6] = createBaseVNode("tr", null, [createBaseVNode("td", null, "White-label"), createBaseVNode("td", null, "ELKO EKO07117")], -1))
		])]),
		_cache[13] || (_cache[13] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><ul><li>Short press (&lt; 0.5 seconds) the upper left button three times.</li></ul><h3 id=\"resetting\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#resetting\"><span>Resetting</span></a></h3><ul><li>Short press (&lt; 0.5 seconds) the upper left button three times and hold for 10 seconds, until the LED blinks red. After releasing the LED will stop blinking once the device is reset.</li></ul><h3 id=\"_1-channel-vs-2-channel-mode\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#_1-channel-vs-2-channel-mode\"><span>1-channel vs 2-channel mode</span></a></h3><p>Depending on the firmware version the device may support both 1-channel and 2-channel mode. In 1-channel mode both the upper and lower buttons works as the upper buttons. On some firmware versions (incl. those sold as Elko EKO07117) the device starts out in 1-channel mode and must be switched into 2-channel mode either by using the Elko / Wiser gateway or by holding down button 1 and 4 (upper left and lower right) for approx. 10 seconds - the led will flash red and the become green once successful.</p><h3 id=\"battery\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery\"><span>Battery</span></a></h3><p>The battery used is a standard CR2032. The battery can be replaced by pulling off the button keys along with the horizontal bar in the middle of the switch.</p><h3 id=\"elko-smart\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#elko-smart\"><span>ELKO Smart</span></a></h3><p>This device is also used by the EKO07117 SmartSwitch Push Wireless in the ELKO Smart range (ELKO is a subsidiary of Schneider Electric).</p><h3 id=\"troubleshooting\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#troubleshooting\"><span>Troubleshooting</span></a></h3><h4 id=\"led-blinking-green-and-red\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#led-blinking-green-and-red\"><span>LED blinking green and red</span></a></h4><p>Device is unable to communicate with gateway. Press the reset button quickly three times, then hold for 20 seconds, until the LED blinks red. After this the device will reboot and should be ready for pairing.</p><h4 id=\"all-buttons-generates-top-actions\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#all-buttons-generates-top-actions\"><span>All buttons generates *_top actions</span></a></h4><p>See the 1-channel vs 2-channel mode section above.</p><h3 id=\"additional-resources\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#additional-resources\"><span>Additional resources</span></a></h3><ul><li><a href=\"https://www.productinfo.schneider-electric.com/wiser_dk/wiser_system_user_guide/English/Wiser%20System%20User%20Guide%20-%20Tuya%20EU%20LK%20(BOOKMAP)_0000482918.xml\" target=\"_blank\" rel=\"noopener noreferrer\">Wiser system user guide</a></li><li><a href=\"https://www1.lk.dk/katalog/vejledning/GDE7031801-04.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">LK FUGA® Wiser wireless battery 4 button switch manual</a></li></ul><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 19)),
		createBaseVNode("p", null, [
			_cache[9] || (_cache[9] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[10] || (_cache[10] = createTextVNode(".", -1))
		]),
		_cache[14] || (_cache[14] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[11] || (_cache[11] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[15] || (_cache[15] = createStaticVNode("<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">simulated_brightness</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">delta</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token comment\"># delta per interval, default = 20</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">interval</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token comment\"># interval in milliseconds, default = 200</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_top</code>, <code>off_top</code>, <code>on_bottom</code>, <code>off_bottom</code>, <code>brightness_move_up_top</code>, <code>brightness_stop_top</code>, <code>brightness_move_down_top</code>, <code>brightness_stop_top</code>, <code>brightness_move_up_bottom</code>, <code>brightness_stop_bottom</code>, <code>brightness_move_down_bottom</code>, <code>brightness_stop_bottom</code>.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>", 7))
	]);
}
var _550D6001_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, _550D6001_default as default };
